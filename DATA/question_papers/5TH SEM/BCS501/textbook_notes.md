# BCS501 — Textbook Notes (Module-wise)
**Subject:** Software Engineering and Project Management (SEPM)
**Generated:** 2026-10-02

---

## Module 1 Textbook 1

to build and maintain high-quality computer programs. Some of these technologies
are targeted at a specific application domain (e.g., website design and implementa-
tion); others focus on a technology domain (e.g., object-oriented systems or aspect-
oriented programming); and still others are broad-based (e.g., operating systems
such as Linux). However, we have yet to develop a software technology that does it
all, and the likelihood of one arising in the future is small. And yet, people bet their
jobs, their comforts, their safety, their entertainment, their decisions, and their very
lives on computer software. It better be right.
This book presents a framework that can be used by those who build computer
software—people who must get it right. The framework encompasses a process, a
set of methods, and an array of tools that we call software engineering.
1.1
THE NATURE OF SOFTWARE
Today, software takes on a dual role. It is a product, and at the same time, the vehi-
cle for delivering a product. As a product, it delivers the computing potential em-
bodied by computer hardware or more broadly, by a network of computers that are
accessible by local hardware. Whether it resides within a mobile phone or operates
inside a mainframe computer, software is an information transformer—producing,
managing, acquiring, modifying, displaying, or transmitting information that can be
as simple as a single bit or as complex as a multimedia presentation derived from
data acquired from dozens of independent sources. As the vehicle used to deliver the
product, software acts as the basis for the control of the computer (operating sys-
tems), the communication of information (networks), and the creation and control
of other programs (software tools and environments).
Software delivers the most important product of our time—information. It trans-
forms personal data (e.g., an individual’s financial transactions) so that the data can
be more useful in a local context; it manages business information to enhance com-
petitiveness; it provides a gateway to worldwide information networks (e.g., the
Internet), and provides the means for acquiring information in all of its forms.
The role of computer software has undergone significant change over the last
half-century. Dramatic improvements in hardware performance, profound changes
in computing architectures, vast increases in memory and storage capacity, and a
wide variety of exotic input and output options, have all precipitated more sophisti-
cated and complex computer-based systems. Sophistication and complexity can
produce dazzling results when a system succeeds, but they can also pose huge
problems for those who must build complex systems.
Today, a huge software industry has become a dominant factor in the economies
of the industrialized world. Teams of software specialists, each focusing on one part
of the technology required to deliver a complex application, have replaced the lone
programmer of an earlier era. And yet, the questions that were asked of the lone
CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING

Software is both a
product and a vehicle
that delivers a product.
uote:
“Software is a
place where
dreams are planted
and nightmares
harvested, an
abstract, mystical
swamp where
terrible demons
compete with
magical panaceas,
a world of
werewolves and
silver bullets.”
Brad J. Cox
MODULE 1

programmer are the same questions that are asked when modern computer-based
systems are built:1

CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING

In an excellent book of essays on the software business, Tom DeMarco [DeM95] argues the coun-
terpoint. He states: “Instead of asking why software costs so much, we need to begin asking ‘What
have we done to make it possible for today’s software to cost so little?’ The answer to that ques-
tion will help us continue the extraordinary level of achievement that has always distinguished the
software industry.”
• Why does it take so long to get software finished?
• Why are development costs so high?
• Why can’t we find all errors before we give the software to our customers?
• Why do we spend so much time and effort maintaining existing 
programs?
• Why do we continue to have difficulty in measuring progress as software is
being developed and maintained?
These, and many other questions, are a manifestation of the concern about
software and the manner in which it is developed—a concern that has lead to the
adoption of software engineering practice.
1.1.1
Defining Software
Today, most professionals and many members of the public at large feel that they
understand software. But do they?
A textbook description of software might take the following form: 
Software is: (1) instructions (computer programs) that when executed provide desired
features, function, and performance; (2) data structures that enable the programs to ad-
equately manipulate information, and (3) descriptive information in both hard copy and
virtual forms that describes the operation and use of the programs.
There is no question that other more complete definitions could be offered.
But a more formal definition probably won’t measurably improve your under-
standing. To accomplish that, it’s important to examine the characteristics of soft-
ware that make it different from other things that human beings build. Software is a
logical rather than a physical system element. Therefore, software has characteris-
tics that are considerably different than those of hardware:
1.
Software is developed or engineered; it is not manufactured in the classical sense.
Although some similarities exist between software development and hard-
ware manufacturing, the two activities are fundamentally different. In both
activities, high quality is achieved through good design, but the manufactur-
ing phase for hardware can introduce quality problems that are nonexistent
How should
we define
software?
?
Software is
engineered, not
manufactured.

(or easily corrected) for software. Both activities are dependent on people,
but the relationship between people applied and work accomplished is
entirely different (see Chapter 24). Both activities require the construction of
a “product,” but the approaches are different. Software costs are concen-
trated in engineering. This means that software projects cannot be managed
as if they were manufacturing projects.
2.
Software doesn’t “wear out.”
Figure 1.1 depicts failure rate as a function of time for hardware. The rela-
tionship, often called the “bathtub curve,” indicates that hardware exhibits
relatively high failure rates early in its life (these failures are often attributa-
ble to design or manufacturing defects); defects are corrected and the failure
rate drops to a steady-state level (hopefully, quite low) for some period of
time. As time passes, however, the failure rate rises again as hardware com-
ponents suffer from the cumulative effects of dust, vibration, abuse, tempera-
ture extremes, and many other environmental maladies. Stated simply, the
hardware begins to wear out.
Software is not susceptible to the environmental maladies that cause
hardware to wear out. In theory, therefore, the failure rate curve for software
should take the form of the “idealized curve” shown in Figure 1.2. Undiscov-
ered defects will cause high failure rates early in the life of a program.
However, these are corrected and the curve flattens as shown. The idealized
curve is a gross oversimplification of actual failure models for software.
However, the implication is clear—software doesn’t wear out. But it does
deteriorate!
CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING

“Wear out”
“Infant
mortality”
Time
Failure rate
FIGURE 1.1
Failure curve
for hardware
Software doesn’t wear
out, but it does
deteriorate.
If you want to reduce
software deterioration,
you’ll have to do
better software design
(Chapters 8 to 13).

This seeming contradiction can best be explained by considering the
actual curve in Figure 1.2. During its life,2 software will undergo change. As
changes are made, it is likely that errors will be introduced, causing the
failure rate curve to spike as shown in the “actual curve” (Figure 1.2). Before
the curve can return to the original steady-state failure rate, another change
is requested, causing the curve to spike again. Slowly, the minimum failure
rate level begins to rise—the software is deteriorating due to change.
Another aspect of wear illustrates the difference between hardware and
software. When a hardware component wears out, it is replaced by a spare
part. There are no software spare parts. Every software failure indicates an
error in design or in the process through which design was translated into
machine executable code. Therefore, the software maintenance tasks that
accommodate requests for change involve considerably more complexity
than hardware maintenance.
3.
Although the industry is moving toward component-based construction, most
software continues to be custom built.
As an engineering discipline evolves, a collection of standard design compo-
nents is created. Standard screws and off-the-shelf integrated circuits are
only two of thousands of standard components that are used by mechanical
and electrical engineers as they design new systems. The reusable compo-
nents have been created so that the engineer can concentrate on the truly
innovative elements of a design, that is, the parts of the design that represent

CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING
Increased failure
rate due to side
effects
Time
Failure rate
Change
Actual curve
Idealized curve
FIGURE 1.2
Failure curves
for software

In fact, from the moment that development begins and long before the first version is delivered,
changes may be requested by a variety of different stakeholders.
Software engineering
methods strive to
reduce the magnitude
of the spikes and the
slope of the actual
curve in Figure 1.2.
uote:
“Ideas are the
building blocks of
ideas.”
Jason Zebehazy

something new. In the hardware world, component reuse is a natural part of
the engineering process. In the software world, it is something that has only
begun to be achieved on a broad scale.
A software component should be designed and implemented so that it can
be reused in many different programs. Modern reusable components encap-
sulate both data and the processing that is applied to the data, enabling the
software engineer to create new applications from reusable parts.3 For exam-
ple, today’s interactive user interfaces are built with reusable components
that enable the creation of graphics windows, pull-down menus, and a wide
variety of interaction mechanisms. The data structures and processing detail
required to build the interface are contained within a library of reusable
components for interface construction.
1.1.2
Software Application Domains
Today, seven broad categories of computer software present continuing challenges
for software engineers:
System software—a collection of programs written to service other pro-
grams. Some system software (e.g., compilers, editors, and file management
utilities) processes complex, but determinate,4 information structures. Other
systems applications (e.g., operating system components, drivers, networking
software, telecommunications processors) process largely indeterminate data.
In either case, the systems software area is characterized by heavy interaction
with computer hardware; heavy usage by multiple users; concurrent opera-
tion that requires scheduling, resource sharing, and sophisticated process
management; complex data structures; and multiple external interfaces.
Application software—stand-alone programs that solve a specific business
need. Applications in this area process business or technical data in a way
that facilitates business operations or management/technical decision mak-
ing. In addition to conventional data processing applications, application
software is used to control business functions in real time (e.g., point-of-sale
transaction processing, real-time manufacturing process control).
Engineering/scientific software—has been characterized by “number
crunching” algorithms. Applications range from astronomy to volcanology,
from automotive stress analysis to space shuttle orbital dynamics, and
from molecular biology to automated manufacturing. However, modern
applications within the engineering/scientific area are moving away from
CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING

Component-based development is discussed in Chapter 10.

Software is determinate if the order and timing of inputs, processing, and outputs is predictable.
Software is indeterminate if the order and timing of inputs, processing, and outputs cannot be
predicted in advance.
WebRef
One of the most
comprehensive libraries
of shareware/ freeware
can be found at
shareware.cnet
.com

conventional numerical algorithms. Computer-aided design, system simula-
tion, and other interactive applications have begun to take on real-time and
even system software characteristics.
Embedded software—resides within a product or system and is used to
implement and control features and functions for the end user and for the
system itself. Embedded software can perform limited and esoteric functions
(e.g., key pad control for a microwave oven) or provide significant function
and control capability (e.g., digital functions in an automobile such as fuel
control, dashboard displays, and braking systems).
Product-line software—designed to provide a specific capability for use by
many different customers. Product-line software can focus on a limited and
esoteric marketplace (e.g., inventory control products) or address mass
consumer markets (e.g., word processing, spreadsheets, computer graphics,
multimedia, entertainment, database management, and personal and
business financial applications).
Web applications—called “WebApps,” this network-centric software cate-
gory spans a wide array of applications. In their simplest form, WebApps can
be little more than a set of linked hypertext files that present information
using text and limited graphics. However, as Web 2.0 emerges, WebApps are
evolving into sophisticated computing environments that not only provide
stand-alone features, computing functions, and content to the end user, but
also are integrated with corporate databases and business applications.
Artificial intelligence software—makes use of nonnumerical algorithms to
solve complex problems that are not amenable to computation or straightfor-
ward analysis. Applications within this area include robotics, expert systems,
pattern recognition (image and voice), artificial neural networks, theorem
proving, and game playing.
Millions of software engineers worldwide are hard at work on software projects in
one or more of these categories. In some cases, new systems are being built, but in
many others, existing applications are being corrected, adapted, and enhanced. It is
not uncommon for a young software engineer to work a program that is older than
she is! Past generations of software people have left a legacy in each of the cate-
gories I have discussed. Hopefully, the legacy to be left behind by this generation will
ease the burden of future software engineers. And yet, new challenges (Chapter 31)
have appeared on the horizon:
Open-world computing—the rapid growth of wireless networking may
soon lead to true pervasive, distributed computing. The challenge for soft-
ware engineers will be to develop systems and application software that will
allow mobile devices, personal computers, and enterprise systems to com-
municate across vast networks.

CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING
uote:
“There is no
computer that has
common sense.”
Marvin Minsky

Netsourcing—the World Wide Web is rapidly becoming a computing engine
as well as a content provider. The challenge for software engineers is to
architect simple (e.g., personal financial planning) and sophisticated applica-
tions that provide a benefit to targeted end-user markets worldwide.
Open source—a growing trend that results in distribution of source code for
systems applications (e.g., operating systems, database, and development en-
vironments) so that many people can contribute to its development. The chal-
lenge for software engineers is to build source code that is self-descriptive,
but more importantly, to develop techniques that will enable both customers
and developers to know what changes have been made and how those
changes manifest themselves within the software.
Each of these new challenges will undoubtedly obey the law of unintended conse-
quences and have effects (for businesspeople, software engineers, and end users) that
cannot be predicted today. However, software engineers can prepare by instantiating
a process that is agile and adaptable enough to accommodate dramatic changes in
technology and to business rules that are sure to come over the next decade.
1.1.3
Legacy Software
Hundreds of thousands of computer programs fall into one of the seven broad
application domains discussed in the preceding subsection. Some of these are state-
of-the-art software—just released to individuals, industry, and government. But
other programs are older, in some cases much older.
These older programs—often referred to as legacy software—have been the focus
of continuous attention and concern since the 1960s. Dayani-Fard and his
colleagues [Day99] describe legacy software in the following way:
Legacy software systems . . . were developed decades ago and have been continually
modified to meet changes in business requirements and computing platforms. The pro-
liferation of such systems is causing headaches for large organizations who find them
costly to maintain and risky to evolve.
Liu and his colleagues [Liu98] extend this description by noting that “many legacy
systems remain supportive to core business functions and are ‘indispensable’ to
the business.” Hence, legacy software is characterized by longevity and business
criticality.
Unfortunately, there is sometimes one additional characteristic that is present
in legacy software—poor quality.5 Legacy systems sometimes have inextensible
designs, convoluted code, poor or nonexistent documentation, test cases and results
CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING

uote:
“You can’t always
predict, but you
can always
prepare.”
Anonymous

In this case, quality is judged based on modern software engineering thinking—a somewhat unfair
criterion since some modern software engineering concepts and principles may not have been well
understood at the time that the legacy software was developed.
What do I do
if I encounter
a legacy system
that exhibits poor
quality?
?

that were never archived, a poorly managed change history—the list can be quite
long. And yet, these systems support “core business functions and are indispensable
to the business.” What to do?
The only reasonable answer may be: Do nothing, at least until the legacy system
must undergo some significant change. If the legacy software meets the needs of its
users and runs reliably, it isn’t broken and does not need to be fixed. However, as
time passes, legacy systems often evolve for one or more of the following reasons:
• The software must be adapted to meet the needs of new computing environ-
ments or technology.
• The software must be enhanced to implement new business requirements.
• The software must be extended to make it interoperable with other more
modern systems or databases.
• The software must be re-architected to make it viable within a network
environment.
When these modes of evolution occur, a legacy system must be reengineered (Chap-
ter 29) so that it remains viable into the future. The goal of modern software engi-
neering is to “devise methodologies that are founded on the notion of evolution”;
that is, the notion that software systems continually change, new software systems
are built from the old ones, and . . . all must interoperate and cooperate with each
other” [Day99].
1.2
THE UNIQUE NATURE OF WEBAPPS
In the early days of the World Wide Web (circa 1990 to 1995), websites consisted of
little more than a set of linked hypertext files that presented information using text
and limited graphics. As time passed, the augmentation of HTML by development
tools (e.g., XML, Java) enabled Web engineers to provide computing capability along
with informational content. Web-based systems and applications6 (I refer to these col-
lectively as WebApps) were born. Today, WebApps have evolved into sophisticated
computing tools that not only provide stand-alone function to the end user, but also
have been integrated with corporate databases and business applications.
As noted in Section 1.1.2, WebApps are one of a number of distinct software cat-
egories. And yet, it can be argued that WebApps are different. Powell [Pow98] sug-
gests that Web-based systems and applications “involve a mixture between print
publishing and software development, between marketing and computing, between

CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING
What types
of changes
are made to
legacy systems?
?
Every software
engineer must
recognize that change
is natural. Don’t try to
fight it.
uote:
“By the time we
see any sort of
stabilization, the
Web will have
turned into
something
completely
different.”
Louis Monier

In the context of this book, the term Web application (WebApp) encompasses everything from a sim-
ple Web page that might help a consumer compute an automobile lease payment to a comprehen-
sive website that provides complete travel services for businesspeople and vacationers. Included
within this category are complete websites, specialized functionality within websites, and infor-
mation processing applications that reside on the Internet or on an Intranet or Extranet.

internal communications and external relations, and between art and technology.”
The following attributes are encountered in the vast majority of WebApps.
Network intensiveness.
A WebApp resides on a network and must serve
the needs of a diverse community of clients. The network may enable world-
wide access and communication (i.e., the Internet) or more limited access
and communication (e.g., a corporate Intranet).
Concurrency.
A large number of users may access the WebApp at one
time. In many cases, the patterns of usage among end users will vary greatly.
Unpredictable load.
The number of users of the WebApp may vary by
orders of magnitude from day to day. One hundred users may show up on
Monday; 10,000 may use the system on Thursday.
Performance.
If a WebApp user must wait too long (for access, for server-
side processing, for client-side formatting and display), he or she may decide
to go elsewhere.
Availability.
Although expectation of 100 percent availability is unreason-
able, users of popular WebApps often demand access on a 24/7/365 basis.
Users in Australia or Asia might demand access during times when tradi-
tional domestic software applications in North America might be taken 
off-line for maintenance.
Data driven.
The primary function of many WebApps is to use hypermedia
to present text, graphics, audio, and video content to the end user. In addi-
tion, WebApps are commonly used to access information that exists on data-
bases that are not an integral part of the Web-based environment (e.g.,
e-commerce or financial applications).
Content sensitive.
The quality and aesthetic nature of content remains an
important determinant of the quality of a WebApp.
Continuous evolution.
Unlike conventional application software that
evolves over a series of planned, chronologically spaced releases, Web appli-
cations evolve continuously. It is not unusual for some WebApps (specifically,
their content) to be updated on a minute-by-minute schedule or for content
to be independently computed for each request.
Immediacy.
Although immediacy—the compelling need to get software to
market quickly—is a characteristic of many application domains, WebApps
often exhibit a time-to-market that can be a matter of a few days or weeks.7
Security.
Because WebApps are available via network access, it is difficult,
if not impossible, to limit the population of end users who may access the
application. In order to protect sensitive content and provide secure modes
CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING

With modern tools, sophisticated Web pages can be produced in only a few hours.
What
characteristic
differentiates
WebApps from
other software?
?

of data transmission, strong security measures must be implemented
throughout the infrastructure that supports a WebApp and within the appli-
cation itself.
Aesthetics.
An undeniable part of the appeal of a WebApp is its look and
feel. When an application has been designed to market or sell products or
ideas, aesthetics may have as much to do with success as technical design.
It can be argued that other application categories discussed in Section 1.1.2 can
exhibit some of the attributes noted. However, WebApps almost always exhibit all of
them.
1.3
SOFTWARE ENGINEERING
In order to build software that is ready to meet the challenges of the twenty-first
century, you must recognize a few simple realities:
• Software has become deeply embedded in virtually every aspect of our lives,
and as a consequence, the number of people who have an interest in the
features and functions provided by a specific application8 has grown dramati-
cally. When a new application or embedded system is to be built, many
voices must be heard. And it sometimes seems that each of them has a
slightly different idea of what software features and functions should be
delivered. It follows that a concerted effort should be made to understand the
problem before a software solution is developed.
• The information technology requirements demanded by individuals, busi-
nesses, and governments grow increasing complex with each passing year.
Large teams of people now create computer programs that were once built
by a single individual. Sophisticated software that was once implemented in
a predictable, self-contained, computing environment is now embedded
inside everything from consumer electronics to medical devices to weapons
systems. The complexity of these new computer-based systems and products
demands careful attention to the interactions of all system elements. It
follows that design becomes a pivotal activity.
• Individuals, businesses, and governments increasingly rely on software for
strategic and tactical decision making as well as day-to-day operations and
control. If the software fails, people and major enterprises can experience
anything from minor inconvenience to catastrophic failures. It follows that
software should exhibit high quality.
• As the perceived value of a specific application grows, the likelihood is that
its user base and longevity will also grow. As its user base and time-in-use

CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING

I will call these people “stakeholders” later in this book.
Understand the
problem before you
build a solution.
Design is a pivotal
software engineering
activity.
Both quality and
maintainability are an
outgrowth of good
design.

increase, demands for adaptation and enhancement will also grow. It follows
that software should be maintainable.
These simple realities lead to one conclusion: software in all of its forms and across all
of its application domains should be engineered. And that leads us to the topic of this
book—software engineering.
Although hundreds of authors have developed personal definitions of software
engineering, a definition proposed by Fritz Bauer [Nau69] at the seminal conference
on the subject still serves as a basis for discussion:
[Software engineering is] the establishment and use of sound engineering principles in or-
der to obtain economically software that is reliable and works efficiently on real machines.
You will be tempted to add to this definition.9 It says little about the technical as-
pects of software quality; it does not directly address the need for customer satisfac-
tion or timely product delivery; it omits mention of the importance of measurement
and metrics; it does not state the importance of an effective process. And yet, Bauer’s
definition provides us with a baseline. What are the “sound engineering principles”
that can be applied to computer software development? How do we “economically”
build software so that it is “reliable”? What is required to create computer programs
that work “efficiently” on not one but many different “real machines”? These are the
questions that continue to challenge software engineers.
The IEEE [IEE93a] has developed a more comprehensive definition when it states:
Software Engineering: (1) The application of a systematic, disciplined, quantifiable approach
to the development, operation, and maintenance of software; that is, the application of
engineering to software. (2) The study of approaches as in (1).
And yet, a “systematic, disciplined, and quantifiable” approach applied by one
software team may be burdensome to another. We need discipline, but we also need
adaptability and agility.
Software engineering is a layered technology. Referring to Figure 1.3, any engineer-
ing approach (including software engineering) must rest on an organizational com-
mitment to quality. Total quality management, Six Sigma, and similar philosophies10
foster a continuous process improvement culture, and it is this culture that ultimately
leads to the development of increasingly more effective approaches to software engi-
neering. The bedrock that supports software engineering is a quality focus.
The foundation for software engineering is the process layer. The software engi-
neering process is the glue that holds the technology layers together and enables
rational and timely development of computer software. Process defines a framework
CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING

uote:
“More than a
discipline or a body
of knowledge,
engineering is a
verb, an action
word, a way of
approaching a
problem.”
Scott Whitmir
How do we
define
software
engineering?
?

For numerous additional definitions of software engineering, see www.answers.com/topic/
software-engineering#wp-_note-13.
10 Quality management and related approaches are discussed in Chapter 14 and throughout Part 3 of
this book.
Software engineering
encompasses a
process, methods for
managing and
engineering software,
and tools.

that must be established for effective delivery of software engineering technology.
The software process forms the basis for management control of software projects
and establishes the context in which technical methods are applied, work products
(models, documents, data, reports, forms, etc.) are produced, milestones are estab-
lished, quality is ensured, and change is properly managed.
Software engineering methods provide the technical how-to’s for building soft-
ware. Methods encompass a broad array of tasks that include communication,
requirements analysis, design modeling, program construction, testing, and sup-
port. Software engineering methods rely on a set of basic principles that govern
each area of the technology and include modeling activities and other descriptive
techniques.
Software engineering tools provide automated or semiautomated support for the
process and the methods. When tools are integrated so that information created by
one tool can be used by another, a system for the support of software development,
called computer-aided software engineering, is established.
1.4
THE SOFTWARE PROCESS
A process is a collection of activities, actions, and tasks that are performed when
some work product is to be created. An activity strives to achieve a broad objective
(e.g., communication with stakeholders) and is applied regardless of the application
domain, size of the project, complexity of the effort, or degree of rigor with which
software engineering is to be applied. An action (e.g., architectural design) encom-
passes a set of tasks that produce a major work product (e.g., an architectural design
model). A task focuses on a small, but well-defined objective (e.g., conducting a unit
test) that produces a tangible outcome.
In the context of software engineering, a process is not a rigid prescription for how
to build computer software. Rather, it is an adaptable approach that enables the peo-
ple doing the work (the software team) to pick and choose the appropriate set of
work actions and tasks. The intent is always to deliver software in a timely manner
and with sufficient quality to satisfy those who have sponsored its creation and those
who will use it.

CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING
Tools
A quality focus
Methods
Process
FIGURE 1.3
Software
engineering
layers
WebRef
CrossTalk is a journal
that provides
pragmatic
information on
process, methods,
and tools. It can be
found at:
www.stsc
.hill.af.mil.
What are the
elements of
a software
process?
?
uote:
“A process defines
who is doing what
when and how to
reach a certain
goal.”
Ivar Jacobson,
Grady Booch,
and James
Rumbaugh

A process framework establishes the foundation for a complete software engi-
neering process by identifying a small number of framework activities that are appli-
cable to all software projects, regardless of their size or complexity. In addition, the
process framework encompasses a set of umbrella activities that are applicable
across the entire software process. A generic process framework for software engi-
neering encompasses five activities:
Communication.
Before any technical work can commence, it is critically
important to communicate and collaborate with the customer (and other
stakeholders11 The intent is to understand stakeholders’ objectives for the
project and to gather requirements that help define software features and
functions.
Planning.
Any complicated journey can be simplified if a map exists. A
software project is a complicated journey, and the planning activity creates a
“map” that helps guide the team as it makes the journey. The map—called a
software project plan—defines the software engineering work by describing
the technical tasks to be conducted, the risks that are likely, the resources
that will be required, the work products to be produced, and a work
schedule.
Modeling.
Whether you’re a landscaper, a bridge builder, an aeronautical
engineer, a carpenter, or an architect, you work with models every day. You
create a “sketch” of the thing so that you’ll understand the big picture—what
it will look like architecturally, how the constituent parts fit together, and
many other characteristics. If required, you refine the sketch into greater and
greater detail in an effort to better understand the problem and how you’re
going to solve it. A software engineer does the same thing by creating mod-
els to better understand software requirements and the design that will
achieve those requirements.
Construction.
This activity combines code generation (either manual or
automated) and the testing that is required to uncover errors in the code.
Deployment.
The software (as a complete entity or as a partially com-
pleted increment) is delivered to the customer who evaluates the delivered
product and provides feedback based on the evaluation.
These five generic framework activities can be used during the development of small,
simple programs, the creation of large Web applications, and for the engineering of
large, complex computer-based systems. The details of the software process will be
quite different in each case, but the framework activities remain the same.
CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING

11 A stakeholder is anyone who has a stake in the successful outcome of the project—business man-
agers, end users, software engineers, support people, etc. Rob Thomsett jokes that, “a stakeholder
is a person holding a large and sharp stake. . . . If you don’t look after your stakeholders, you know
where the stake will end up.”). 
What are the
five generic
process
framework
activities?
?
uote:
“Einstein argued
that there must be
a simplified
explanation of
nature, because
God is not
capricious or
arbitrary. No such
faith comforts the
software engineer.
Much of the
complexity that he
must master is
arbitrary
complexity.”
Fred Brooks

For many software projects, framework activities are applied iteratively as a
project progresses. That is, communication, planning, modeling, construction,
and deployment are applied repeatedly through a number of project iterations.
Each project iteration produces a software increment that provides stakeholders with
a subset of overall software features and functionality. As each increment is pro-
duced, the software becomes more and more complete.
Software engineering process framework activities are complemented by a num-
ber of umbrella activities. In general, umbrella activities are applied throughout a soft-
ware project and help a software team manage and control progress, quality,
change, and risk. Typical umbrella activities include:
Software project tracking and control—allows the software team to
assess progress against the project plan and take any necessary action to
maintain the schedule.
Risk management—assesses risks that may affect the outcome of the
project or the quality of the product.
Software quality assurance—defines and conducts the activities required
to ensure software quality.
Technical reviews—assesses software engineering work products in an effort
to uncover and remove errors before they are propagated to the next activity.
Measurement—defines and collects process, project, and product measures
that assist the team in delivering software that meets stakeholders’ needs;
can be used in conjunction with all other framework and umbrella activities.
Software configuration management—manages the effects of change
throughout the software process.
Reusability management—defines criteria for work product reuse
(including software components) and establishes mechanisms to achieve
reusable components.
Work product preparation and production—encompasses the activities
required to create work products such as models, documents, logs, forms,
and lists.
Each of these umbrella activities is discussed in detail later in this book.
Earlier in this section, I noted that the software engineering process is not a rigid
prescription that must be followed dogmatically by a software team. Rather, it should
be agile and adaptable (to the problem, to the project, to the team, and to the organi-
zational culture). Therefore, a process adopted for one project might be significantly
different than a process adopted for another project. Among the differences are
• Overall flow of activities, actions, and tasks and the interdependencies
among them
• Degree to which actions and tasks are defined within each framework activity
• Degree to which work products are identified and required

CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING
Umbrella activities
occur throughout the
software process and
focus primarily on
project management,
tracking, and control.
Software process
adaptation is essential
for project success.
How do
process
models differ from
one another?
?

• Manner in which quality assurance activities are applied
• Manner in which project tracking and control activities are applied
• Overall degree of detail and rigor with which the process is described
• Degree to which the customer and other stakeholders are involved with the
project
• Level of autonomy given to the software team
• Degree to which team organization and roles are prescribed
In Part 1 of this book, I’ll examine software process in considerable detail. Prescriptive
process models (Chapter 2) stress detailed definition, identification, and application
of process activities and tasks. Their intent is to improve system quality, make proj-
ects more manageable, make delivery dates and costs more predictable, and guide
teams of software engineers as they perform the work required to build a system.
Unfortunately, there have been times when these objectives were not achieved. If
prescriptive models are applied dogmatically and without adaptation, they can in-
crease the level of bureaucracy associated with building computer-based systems
and inadvertently create difficulty for all stakeholders.
Agile process models (Chapter 3) emphasize project “agility” and follow a set of prin-
ciples that lead to a more informal (but, proponents argue, no less effective) approach
to software process. These process models are generally characterized as “agile” be-
cause they emphasize maneuverability and adaptability. They are appropriate for many
types of projects and are particularly useful when Web applications are engineered.
1.5
SOFTWARE ENGINEERING PRACTICE
In Section 1.4, I introduced a generic software process model composed of a set of
activities that establish a framework for software engineering practice. Generic
framework activities—communication, planning, modeling, construction, and
deployment—and umbrella activities establish a skeleton architecture for software
engineering work. But how does the practice of software engineering fit in? In the
sections that follow, you’ll gain a basic understanding of the generic concepts and
principles that apply to framework activities.12
1.5.1
The Essence of Practice
In a classic book, How to Solve It, written before modern computers existed, George
Polya [Pol45] outlined the essence of problem solving, and consequently, the essence
of software engineering practice:
1.
Understand the problem (communication and analysis).
2.
Plan a solution (modeling and software design).
CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING

What
characterizes
an “agile”
process?
?
uote:
“I feel a recipe is
only a theme which
an intelligent cook
can play each time
with a variation.”
Madame Benoit
WebRef
A variety of thought-
provoking quotes on
the practice of software
engineering can be
found at www
.literateprogramming
.com
You might argue that
Polya’s approach is
simply common sense.
True. But it’s amazing
how often common
sense is uncommon in
the software world.
12 You should revisit relevant sections within this chapter as specific software engineering methods
and umbrella activities are discussed later in this book.

3.
Carry out the plan (code generation).
4.
Examine the result for accuracy (testing and quality assurance).
In the context of software engineering, these commonsense steps lead to a series of
essential questions [adapted from Pol45]:
Understand the problem.
It’s sometimes difficult to admit, but most of us suffer
from hubris when we’re presented with a problem. We listen for a few seconds and
then think, Oh yeah, I understand, let’s get on with solving this thing. Unfortunately,
understanding isn’t always that easy. It’s worth spending a little time answering a
few simple questions:
• Who has a stake in the solution to the problem? That is, who are the stake-
holders?
• What are the unknowns? What data, functions, and features are required to
properly solve the problem?
• Can the problem be compartmentalized? Is it possible to represent smaller
problems that may be easier to understand?
• Can the problem be represented graphically? Can an analysis model be created?
Plan the solution.
Now you understand the problem (or so you think) and you
can’t wait to begin coding. Before you do, slow down just a bit and do a little
design:
• Have you seen similar problems before? Are there patterns that are recogniz-
able in a potential solution? Is there existing software that implements the
data, functions, and features that are required?
• Has a similar problem been solved? If so, are elements of the solution
reusable?
• Can subproblems be defined? If so, are solutions readily apparent for the
subproblems?
• Can you represent a solution in a manner that leads to effective implementation?
Can a design model be created?
Carry out the plan.
The design you’ve created serves as a road map for the
system you want to build. There may be unexpected detours, and it’s possible that
you’ll discover an even better route as you go, but the “plan” will allow you to
proceed without getting lost.
• Does the solution conform to the plan? Is source code traceable to the design
model?
• Is each component part of the solution provably correct? Have the design and
code been reviewed, or better, have correctness proofs been applied to the
algorithm?

CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING
uote:
“There is a grain of
discovery in the
solution of any
problem.”
George Polya

Examine the result.
You can’t be sure that your solution is perfect, but you can be
sure that you’ve designed a sufficient number of tests to uncover as many errors as
possible.
• Is it possible to test each component part of the solution? Has a reasonable
testing strategy been implemented?
• Does the solution produce results that conform to the data, functions, and
features that are required? Has the software been validated against all
stakeholder requirements?
It shouldn’t surprise you that much of this approach is common sense. In fact, it’s
reasonable to state that a commonsense approach to software engineering will
never lead you astray.
1.5.2
General Principles
The dictionary defines the word principle as “an important underlying law or as-
sumption required in a system of thought.” Throughout this book I’ll discuss princi-
ples at many different levels of abstraction. Some focus on software engineering as a
whole, others consider a specific generic framework activity (e.g., communication),
and still others focus on software engineering actions (e.g., architectural design) or
technical tasks (e.g., write a usage scenario). Regardless of their level of focus, prin-
ciples help you establish a mind-set for solid software engineering practice. They are
important for that reason.
David Hooker [Hoo96] has proposed seven principles that focus on software
engineering practice as a whole. They are reproduced in the following
paragraphs:13
The First Principle: The Reason It All Exists
A software system exists for one reason: to provide value to its users. All
decisions should be made with this in mind. Before specifying a system require-
ment, before noting a piece of system functionality, before determining the hard-
ware platforms or development processes, ask yourself questions such as: “Does
this add real value to the system?” If the answer is “no,” don’t do it. All other
principles support this one.
The Second Principle: KISS (Keep It Simple, Stupid!)
Software design is not a haphazard process. There are many factors to consider
in any design effort. All design should be as simple as possible, but no simpler. This
facilitates having a more easily understood and easily maintained system. This is
CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING

13 Reproduced with permission of the author [Hoo96]. Hooker defines patterns for these principles at
http://c2.com/cgi/wiki?SevenPrinciplesOfSoftwareDevelopment.
Before beginning a
software project, be
sure the software has
a business purpose and
that users perceive
value in it.

not to say that features, even internal features, should be discarded in the name of
simplicity. Indeed, the more elegant designs are usually the more simple ones. Sim-
ple also does not mean “quick and dirty.” In fact, it often takes a lot of thought and
work over multiple iterations to simplify. The payoff is software that is more main-
tainable and less error-prone.
The Third Principle: Maintain the Vision
A clear vision is essential to the success of a software project. Without one, a
project almost unfailingly ends up being “of two [or more] minds” about itself.
Without conceptual integrity, a system threatens to become a patchwork of in-
compatible designs, held together by the wrong kind of screws. . . . Compromis-
ing the architectural vision of a software system weakens and will eventually
break even the well-designed systems. Having an empowered architect who can
hold the vision and enforce compliance helps ensure a very successful software
project.
The Fourth Principle: What You Produce, Others Will Consume
Seldom is an industrial-strength software system constructed and used in a
vacuum. In some way or other, someone else will use, maintain, document, or
otherwise depend on being able to understand your system. So, always specify,
design, and implement knowing someone else will have to understand what you are
doing. The audience for any product of software development is potentially large.
Specify with an eye to the users. Design, keeping the implementers in mind. Code
with concern for those that must maintain and extend the system. Someone may
have to debug the code you write, and that makes them a user of your code.
Making their job easier adds value to the system.
The Fifth Principle: Be Open to the Future
A system with a long lifetime has more value. In today’s computing environ-
ments, where specifications change on a moment’s notice and hardware platforms
are obsolete just a few months old, software lifetimes are typically measured in
months instead of years. However, true “industrial-strength” software systems
must endure far longer. To do this successfully, these systems must be ready to
adapt to these and other changes. Systems that do this successfully are those that
have been designed this way from the start. Never design yourself into a corner.
Always ask “what if,” and prepare for all possible answers by creating systems that
solve the general problem, not just the specific one.14 This could very possibly lead
to the reuse of an entire system.

CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING
If software has value,
it will change over its
useful life. For that
reason, software must
be built to be
maintainable.
14 This advice can be dangerous if it is taken to extremes. Designing for the “general problem” some-
times requires performance compromises and can make specific solutions inefficient.
uote:
“There is a certain
majesty in
simplicity which is
far above all the
quaintness of wit.”
Alexander Pope
(1688–1744)

The Sixth Principle: Plan Ahead for Reuse
Reuse saves time and effort.15Achieving a high level of reuse is arguably the
hardest goal to accomplish in developing a software system. The reuse of code and
designs has been proclaimed as a major benefit of using object-oriented technolo-
gies. However, the return on this investment is not automatic. To leverage the
reuse possibilities that object-oriented [or conventional] programming provides
requires forethought and planning. There are many techniques to realize reuse
at every level of the system development process. . . . Planning ahead for reuse
reduces the cost and increases the value of both the reusable components and the
systems into which they are incorporated.
The Seventh principle: Think!
This last principle is probably the most overlooked. Placing clear, complete
thought before action almost always produces better results. When you think about
something, you are more likely to do it right. You also gain knowledge about how
to do it right again. If you do think about something and still do it wrong, it be-
comes a valuable experience. A side effect of thinking is learning to recognize
when you don’t know something, at which point you can research the answer.
When clear thought has gone into a system, value comes out. Applying the first six
principles requires intense thought, for which the potential rewards are enormous.
If every software engineer and every software team simply followed Hooker’s seven
principles, many of the difficulties we experience in building complex computer-
based systems would be eliminated.
1.6
SOFTWARE MYTHS
Software myths—erroneous beliefs about software and the process that is used to
build it—can be traced to the earliest days of computing. Myths have a number of
attributes that make them insidious. For instance, they appear to be reasonable
statements of fact (sometimes containing elements of truth), they have an intuitive
feel, and they are often promulgated by experienced practitioners who “know the
score.”
Today, most knowledgeable software engineering professionals recognize myths
for what they are—misleading attitudes that have caused serious problems for
managers and practitioners alike. However, old attitudes and habits are difficult to
modify, and remnants of software myths remain.
CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING

15 Although this is true for those who reuse the software on future projects, reuse can be expensive
for those who must design and build reusable components. Studies indicate that designing and
building reusable components can cost between 25 to 200 percent more than targeted software. In
some cases, the cost differential cannot be justified.
uote:
“In the absence of
meaningful
standards, a new
industry like
software comes to
depend instead on
folklore.”
Tom DeMarco

Management myths.
Managers with software responsibility, like managers in
most disciplines, are often under pressure to maintain budgets, keep schedules from
slipping, and improve quality. Like a drowning person who grasps at a straw, a soft-
ware manager often grasps at belief in a software myth, if that belief will lessen the
pressure (even temporarily).
Myth:
We already have a book that’s full of standards and procedures for
building software. Won’t that provide my people with everything they
need to know?
Reality:
The book of standards may very well exist, but is it used? Are soft-
ware practitioners aware of its existence? Does it reflect modern
software engineering practice? Is it complete? Is it adaptable? Is it
streamlined to improve time-to-delivery while still maintaining a
focus on quality? In many cases, the answer to all of these questions
is “no.”
Myth:
If we get behind schedule, we can add more programmers and catch up
(sometimes called the “Mongolian horde” concept).
Reality:
Software development is not a mechanistic process like manufactur-
ing. In the words of Brooks [Bro95]: “adding people to a late soft-
ware project makes it later.” At first, this statement may seem
counterintuitive. However, as new people are added, people who
were working must spend time educating the newcomers, thereby
reducing the amount of time spent on productive development
effort. People can be added but only in a planned and well-
coordinated manner.
Myth:
If I decide to outsource the software project to a third party, I can just
relax and let that firm build it.
Reality:
If an organization does not understand how to manage and control
software projects internally, it will invariably struggle when it out-
sources software projects.
Customer myths.
A customer who requests computer software may be a person
at the next desk, a technical group down the hall, the marketing/sales department,
or an outside company that has requested software under contract. In many cases,
the customer believes myths about software because software managers and prac-
titioners do little to correct misinformation. Myths lead to false expectations (by the
customer) and, ultimately, dissatisfaction with the developer.
Myth:
A general statement of objectives is sufficient to begin writing
programs—we can fill in the details later.
Reality:
Although a comprehensive and stable statement of requirements is
not always possible, an ambiguous “statement of objectives” is a
recipe for disaster. Unambiguous requirements (usually derived

CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING
WebRef
The Software Project
Managers Network at
www.spmn.com
can help you dispel
these and other myths.
Work very hard to
understand what you
have to do before you
start. You may not be
able to develop every
detail, but the more
you know, the less risk
you take.

iteratively) are developed only through effective and continuous
communication between customer and developer.
Myth:
Software requirements continually change, but change can be easily
accommodated because software is flexible.
Reality:
It is true that software requirements change, but the impact of
change varies with the time at which it is introduced. When require-
ments changes are requested early (before design or code has been
started), the cost impact is relatively small.16 However, as time
passes, the cost impact grows rapidly—resources have been commit-
ted, a design framework has been established, and change can
cause upheaval that requires additional resources and major design
modification.
Practitioner’s myths.
Myths that are still believed by software practitioners have
been fostered by over 50 years of programming culture. During the early days, pro-
gramming was viewed as an art form. Old ways and attitudes die hard.
Myth:
Once we write the program and get it to work, our job is done.
Reality:
Someone once said that “the sooner you begin ‘writing code,’ the
longer it’ll take you to get done.” Industry data indicate that between
60 and 80 percent of all effort expended on software will be ex-
pended after it is delivered to the customer for the first time.
Myth:
Until I get the program “running” I have no way of assessing its quality.
Reality:
One of the most effective software quality assurance mechanisms
can be applied from the inception of a project—the technical review.
Software reviews (described in Chapter 15) are a “quality filter” that
have been found to be more effective than testing for finding certain
classes of software defects.
Myth:
The only deliverable work product for a successful project is the working
program.
Reality:
A working program is only one part of a software configuration that
includes many elements. A variety of work products (e.g., models,
documents, plans) provide a foundation for successful engineering
and, more important, guidance for software support.
Myth:
Software engineering will make us create voluminous and unnecessary
documentation and will invariably slow us down.
Reality:
Software engineering is not about creating documents. It is about
creating a quality product. Better quality leads to reduced rework.
And reduced rework results in faster delivery times.
CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING

Whenever you think,
we don’t have time for
software engineering,
ask yourself, “Will we
have time to do it over
again?”
16 Many software engineers have adopted an “agile” approach that accommodates change incre-
mentally, thereby controlling its impact and cost. Agile methods are discussed in Chapter 3.

Many software professionals recognize the fallacy of the myths just described.
Regrettably, habitual attitudes and methods foster poor management and technical
practices, even when reality dictates a better approach. Recognition of software
realities is the first step toward formulation of practical solutions for software
engineering.
1.7
HOW IT ALL STARTS
Every software project is precipitated by some business need—the need to correct a
defect in an existing application; the need to adapt a “legacy system” to a changing
business environment; the need to extend the functions and features of an existing
application; or the need to create a new product, service, or system.
At the beginning of a software project, the business need is often expressed
informally as part of a simple conversation. The conversation presented in the
sidebar is typical.

CHAPTER 1
SOFTWARE AND SOFTWARE ENGINEERING
How a Project Starts
The scene: Meeting room at CPI
Corporation, a (fictional) company that makes consumer
products for home and commercial use.
The players: Mal Golden, senior manager, product
development; Lisa Perez, marketing manager; Lee
Warren, engineering manager; Joe Camalleri, executive
VP, business development
The conversation:
Joe: Okay, Lee, what’s this I hear about your folks
developing a what? A generic universal wireless box?
Lee: It’s pretty cool . . . about the size of a small
matchbook . . . we can attach it to sensors of all kinds, a
digital camera, just about anything. Using the 802.11g
wireless protocol. It allows us to access the device’s output
without wires. We think it’ll lead to a whole new
generation of products.
Joe: You agree, Mal?
Mal: I do. In fact, with sales as flat as they’ve been this
year, we need something new. Lisa and I have been
doing a little market research, and we think we’ve got a
line of products that could be big.
Joe: How big . . . bottom line big?
Mal (avoiding a direct commitment): Tell him
about our idea, Lisa.
Lisa: It’s a whole new generation of what we call “home
management products.” We call ’em SafeHome. They use
the new wireless interface, provide homeowners or small-
business people with a system that’s controlled by their
PC—home security, home surveillance, appliance and
device control—you know, turn down the home air
conditioner while you’re driving home, that sort of thing.
Lee (jumping in): Engineering’s done a technical
feasibility study of this idea, Joe. It’s doable at low
manufacturing cost. Most hardware is off-the-shelf.
Software is an issue, but it’s nothing that we can’t do.
Joe: Interesting. Now, I asked about the bottom line.
Mal: PCs have penetrated over 70 percent of all
households in the USA. If we could price this thing right, 
it could be a killer-App. Nobody else has our wireless
box . . . it’s proprietary. We’ll have a 2-year jump on
the competition. Revenue? Maybe as much as 30 to 
40 million dollars in the second year.
Joe (smiling): Let’s take this to the next level. I’m
interested.
SAFEHOME17
17 The SafeHome project will be used throughout this book to illustrate the inner workings of a project
team as it builds a software product. The company, the project, and the people are purely fictitious,
but the situations and problems are real.

CHAPTER 2
PROCESS MODELS

But what exactly is a software process from a technical point of view? Within the
context of this book, I define a software process as a framework for the activities, ac-
tions, and tasks that are required to build high-quality software. Is “process” syn-
onymous with software engineering? The answer is “yes and no.” A software process
defines the approach that is taken as software is engineered. But software engi-
neering also encompasses technologies that populate the process—technical meth-
ods and automated tools.
More important, software engineering is performed by creative, knowledgeable
people who should adapt a mature software process so that it is appropriate for the
products that they build and the demands of their marketplace.
2.1
A GENERIC PROCESS MODEL
In Chapter 1, a process was defined as a collection of work activities, actions, and
tasks that are performed when some work product is to be created. Each of these
activities, actions, and tasks reside within a framework or model that defines their
relationship with the process and with one another.
The software process is represented schematically in Figure 2.1. Referring to the
figure, each framework activity is populated by a set of software engineering actions.
Each software engineering action is defined by a task set that identifies the work
tasks that are to be completed, the work products that will be produced, the quality
assurance points that will be required, and the milestones that will be used to indi-
cate progress.
As I discussed in Chapter 1, a generic process framework for software engineer-
ing defines five framework activities—communication, planning, modeling,
construction, and deployment. In addition, a set of umbrella activities—project
tracking and control, risk management, quality assurance, configuration manage-
ment, technical reviews, and others—are applied throughout the process.
You should note that one important aspect of the software process has not
yet been discussed. This aspect—called process flow—describes how the frame-
work activities and the actions and tasks that occur within each framework
activity are organized with respect to sequence and time and is illustrated in
Figure 2.2.
A linear process flow executes each of the five framework activities in sequence,
beginning with communication and culminating with deployment (Figure 2.2a). An
iterative process flow repeats one or more of the activities before proceeding to the
next (Figure 2.2b). An evolutionary process flow executes the activities in a “circular”
manner. Each circuit through the five activities leads to a more complete version
of the software (Figure 2.2c). A parallel process flow (Figure 2.2d) executes one or
more activities in parallel with other activities (e.g., modeling for one aspect of the
software might be executed in parallel with construction of another aspect of the
software).
The hierarchy of
technical work within
the software process is
activities,
encompassing actions,
populated by tasks.
uote:
“We think that
software
developers are
missing a vital
truth: most
organizations don’t
know what they
do. They think they
know, but they
don’t know.”
Tom DeMarco

2.1.1
Defining a Framework Activity
Although I have described five framework activities and provided a basic defini-
tion of each in Chapter 1, a software team would need significantly more infor-
mation before it could properly execute any one of these activities as part of the
software process. Therefore, you are faced with a key question: What actions are
appropriate for a framework activity, given the nature of the problem to be solved, the
characteristics of the people doing the work, and the stakeholders who are sponsor-
ing the project?

PART ONE
THE SOFTWARE PROCESS
Process framework
Umbrella activities
framework activity # 1
Task sets
work tasks
work products
quality assurance points
project milestones
software engineering action #1.1
Task sets
work tasks
work products
quality assurance points
project milestones
software engineering action #1.k
framework activity # n
Task sets
work tasks
work products
quality assurance points
project milestones
software engineering action #n.1
Task sets
work tasks
work products
quality assurance points
project milestones
software engineering action #n.m
Software process
FIGURE 2.1
A software
process
framework

CHAPTER 2
PROCESS MODELS

(d) Parallel process flow
(c) Evolutionary process flow
Communication
Planning
Modeling
(a) Linear process flow
Construction
Deployment
Communication
Planning
Modeling
Construction
Deployment
Construction
Deployment
Communication
Planning
Modeling
Time
(b) Iterative process flow
Planning
Modeling
Construction
Deployment
Increment
released
Communication
FIGURE 2.2
Process flow
For a small software project requested by one person (at a remote location) with
simple, straightforward requirements, the communication activity might encompass
little more than a phone call with the appropriate stakeholder. Therefore, the only
necessary action is phone conversation, and the work tasks (the task set) that this
action encompasses are:
1.
Make contact with stakeholder via telephone.
2.
Discuss requirements and take notes.
How does a
framework
activity change as
the nature of the
project changes?
?

3.
Organize notes into a brief written statement of requirements.
4.
E-mail to stakeholder for review and approval.
If the project was considerably more complex with many stakeholders, each with
a different set of (sometime conflicting) requirements, the communication activity
might have six distinct actions (described in Chapter 5): inception, elicitation, elabo-
ration, negotiation, specification, and validation. Each of these software engineering
actions would have many work tasks and a number of distinct work products.
2.1.2
Identifying a Task Set
Referring again to Figure 2.1, each software engineering action (e.g., elicitation, an
action associated with the communication activity) can be represented by a number
of different task sets—each a collection of software engineering work tasks, related
work products, quality assurance points, and project milestones. You should choose
a task set that best accommodates the needs of the project and the characteristics of
your team. This implies that a software engineering action can be adapted to the spe-
cific needs of the software project and the characteristics of the project team. 

PART ONE
THE SOFTWARE PROCESS
Task Set
A task set defines the actual work to be done
to accomplish the objectives of a software
engineering action. For example, elicitation (more
commonly called “requirements gathering”) is an
important software engineering action that occurs during
the communication activity. The goal of requirements
gathering is to understand what various stakeholders want
from the software that is to be built.
For a small, relatively simple project, the task set for
requirements gathering might look like this:
1.
Make a list of stakeholders for the project.
2.
Invite all stakeholders to an informal meeting.
3.
Ask each stakeholder to make a list of features and
functions required.
4.
Discuss requirements and build a final list.
5.
Prioritize requirements.
6.
Note areas of uncertainty.
For a larger, more complex software project, a
different task set would be required. It might encompass
the following work tasks:
1.
Make a list of stakeholders for the project.
2.
Interview each stakeholder separately to determine
overall wants and needs.
3.
Build a preliminary list of functions and features
based on stakeholder input.
4.
Schedule a series of facilitated application
specification meetings.
5.
Conduct meetings.
6.
Produce informal user scenarios as part of each
meeting.
7.
Refine user scenarios based on stakeholder
feedback.
8.
Build a revised list of stakeholder requirements.
9.
Use quality function deployment techniques to
prioritize requirements.
10.
Package requirements so that they can be delivered
incrementally.
11.
Note constraints and restrictions that will be placed
on the system.
12.
Discuss methods for validating the system.
Both of these task sets achieve “requirements gathering,”
but they are quite different in their depth and formality. The
software team chooses the task set that will allow it to
achieve the goal of each action and still maintain quality
and agility.
INFO
Different projects
demand different task
sets. The software
team chooses the task
set based on problem
and project
characteristics.

2.1.3
Process Patterns
Every software team encounters problems as it moves through the software process.
It would be useful if proven solutions to these problems were readily available to the
team so that the problems could be addressed and resolved quickly. A process
pattern1 describes a process-related problem that is encountered during software en-
gineering work, identifies the environment in which the problem has been encoun-
tered, and suggests one or more proven solutions to the problem. Stated in more
general terms, a process pattern provides you with a template [Amb98]—a consis-
tent method for describing problem solutions within the context of the software
process. By combining patterns, a software team can solve problems and construct
a process that best meets the needs of a project.
Patterns can be defined at any level of abstraction.2 In some cases, a pattern might
be used to describe a problem (and solution) associated with a complete process
model (e.g., prototyping). In other situations, patterns can be used to describe a prob-
lem (and solution) associated with a framework activity (e.g., planning) or an action
within a framework activity (e.g., project estimating).
Ambler [Amb98] has proposed a template for describing a process pattern:
Pattern Name.
The pattern is given a meaningful name describing it
within the context of the software process (e.g., TechnicalReviews).
Forces.
The environment in which the pattern is encountered and the
issues that make the problem visible and may affect its solution.
Type.
The pattern type is specified. Ambler [Amb98] suggests three types:
1.
Stage pattern—defines a problem associated with a framework activity for
the process. Since a framework activity encompasses multiple actions and
work tasks, a stage pattern incorporates multiple task patterns (see the fol-
lowing) that are relevant to the stage (framework activity). An example of a
stage pattern might be EstablishingCommunication. This pattern would
incorporate the task pattern RequirementsGathering and others.
2.
Task pattern—defines a problem associated with a software engineering
action or work task and relevant to successful software engineering
practice (e.g., RequirementsGathering is a task pattern).
3.
Phase pattern—define the sequence of framework activities that occurs
within the process, even when the overall flow of activities is iterative
in nature. An example of a phase pattern might be SpiralModel or
Prototyping.3
CHAPTER 2
PROCESS MODELS

A detailed discussion of patterns is presented in Chapter 12.

Patterns are applicable to many software engineering activities. Analysis, design, and testing
patterns are discussed in Chapters 7, 9, 10, 12, and 14. Patterns and “antipatterns” for project
management activities are discussed in Part 4 of this book.

These phase patterns are discussed in Section 2.3.3.
What is a
process
pattern?
?
uote:
“The repetition of
patterns is quite a
different thing than
the repetition of
parts. Indeed, the
different parts will
be unique because
the patterns are the
same.”
Christopher
Alexander
A pattern template
provides a consistent
means for describing a
pattern.

Initial context.
Describes the conditions under which the pattern applies.
Prior to the initiation of the pattern: (1) What organizational or team-related ac-
tivities have already occurred? (2) What is the entry state for the process?
(3) What software engineering information or project information already exists?
For example, the Planning pattern (a stage pattern) requires that (1) cus-
tomers and software engineers have established a collaborative communi-
cation; (2) successful completion of a number of task patterns [specified] for
the Communication pattern has occurred; and (3) the project scope, basic
business requirements, and project constraints are known.
Problem.
The specific problem to be solved by the pattern.
Solution.
Describes how to implement the pattern successfully. This sec-
tion describes how the initial state of the process (that exists before the pat-
tern is implemented) is modified as a consequence of the initiation of the
pattern. It also describes how software engineering information or project
information that is available before the initiation of the pattern is transformed
as a consequence of the successful execution of the pattern.
Resulting Context.
Describes the conditions that will result once the pat-
tern has been successfully implemented. Upon completion of the pattern:
(1) What organizational or team-related activities must have occurred?
(2) What is the exit state for the process? (3) What software engineering
information or project information has been developed? 
Related Patterns.
Provide a list of all process patterns that are directly
related to this one. This may be represented as a hierarchy or in some other
diagrammatic form. For example, the stage pattern Communication
encompasses the task patterns: ProjectTeam, CollaborativeGuidelines,
ScopeIsolation, RequirementsGathering, ConstraintDescription, and
ScenarioCreation.
Known Uses and Examples.
Indicate the specific instances in which the
pattern is applicable. For example, Communication is mandatory at the
beginning of every software project, is recommended throughout the software
project, and is mandatory once the deployment activity is under way.
Process patterns provide an effective mechanism for addressing problems asso-
ciated with any software process. The patterns enable you to develop a hierarchical
process description that begins at a high level of abstraction (a phase pattern). The
description is then refined into a set of stage patterns that describe framework
activities and are further refined in a hierarchical fashion into more detailed task
patterns for each stage pattern. Once process patterns have been developed, they
can be reused for the definition of process variants—that is, a customized process
model can be defined by a software team using the patterns as building blocks for
the process model.

PART ONE
THE SOFTWARE PROCESS
WebRef
Comprehensive
resources on process
patterns can be found
at www.
ambysoft.com/
processPatternsPage
.html.

2.2
PROCESS ASSESSMENT AND IMPROVEMENT
The existence of a software process is no guarantee that software will be delivered
on time, that it will meet the customer’s needs, or that it will exhibit the technical
characteristics that will lead to long-term quality characteristics (Chapters 14 and
16). Process patterns must be coupled with solid software engineering practice
(Part 2 of this book). In addition, the process itself can be assessed to ensure that it
meets a set of basic process criteria that have been shown to be essential for a suc-
cessful software engineering.4
A number of different approaches to software process assessment and
improvement have been proposed over the past few decades:
Standard CMMI Assessment Method for Process Improvement
(SCAMPI)—provides a five-step process assessment model that incorporates
five phases: initiating, diagnosing, establishing, acting, and learning. The
SCAMPI method uses the SEI CMMI as the basis for assessment [SEI00].
CHAPTER 2
PROCESS MODELS

The SEI’s CMMI [CMM07] describes the characteristics of a software process and the criteria for a
successful process in voluminous detail.
Assessment attempts to
understand the current
state of the software
process with the intent
of improving it.
What formal
techniques
are available for
assessing the
software process?
?
INFO
An Example Process Pattern
The following abbreviated process pattern
describes an approach that may be applicable
when stakeholders have a general idea of what must be
done but are unsure of specific software requirements.
Pattern name. RequirementsUnclear
Intent. This pattern describes an approach for building a
model (a prototype) that can be assessed iteratively by
stakeholders in an effort to identify or solidify software
requirements.
Type. Phase pattern.
Initial context. The following conditions must be met
prior to the initiation of this pattern: (1) stakeholders have
been identified; (2) a mode of communication between
stakeholders and the software team has been established;
(3) the overriding software problem to be solved has been
identified by stakeholders; (4) an initial understanding of
project scope, basic business requirements, and project
constraints has been developed.
Problem. Requirements are hazy or nonexistent, yet
there is clear recognition that there is a problem to be
solved, and the problem must be addressed with a
software solution. Stakeholders are unsure of what they
want; that is, they cannot describe software requirements
in any detail.
Solution. A description of the prototyping process
would be presented here and is described later in
Section 2.3.3.
Resulting context. A software prototype that identifies
basic requirements (e.g., modes of interaction,
computational features, processing functions) is approved
by stakeholders. Following this, (1) the prototype may
evolve through a series of increments to become the
production software or (2) the prototype may be discarded
and the production software built using some other process
pattern.
Related patterns. The following patterns are related to
this pattern: CustomerCommunication,
IterativeDesign, IterativeDevelopment,
CustomerAssessment, RequirementExtraction.
Known uses and examples. Prototyping is
recommended when requirements are uncertain. 

CMM-Based Appraisal for Internal Process Improvement (CBA IPI)—
provides a diagnostic technique for assessing the relative maturity of a
software organization; uses the SEI CMM as the basis for the assessment
[Dun01].
SPICE (ISO/IEC15504)—a standard that defines a set of requirements for
software process assessment. The intent of the standard is to assist organi-
zations in developing an objective evaluation of the efficacy of any defined
software process [ISO08].
ISO 9001:2000 for Software—a generic standard that applies to any or-
ganization that wants to improve the overall quality of the products, systems,
or services that it provides. Therefore, the standard is directly applicable to
software organizations and companies [Ant06].
A more detailed discussion of software assessment and process improvement
methods is presented in Chapter 30.
2.3
PRESCRIPTIVE PROCESS MODELS
Prescriptive process models were originally proposed to bring order to the chaos
of software development. History has indicated that these traditional models
have brought a certain amount of useful structure to software engineering work and
have provided a reasonably effective road map for software teams. However, software
engineering work and the product that it produces remain on “the edge of chaos.”
In an intriguing paper on the strange relationship between order and chaos in the
software world, Nogueira and his colleagues [Nog00] state
The edge of chaos is defined as “a natural state between order and chaos, a grand com-
promise between structure and surprise” [Kau95]. The edge of chaos can be visualized as
an unstable, partially structured state. . . . It is unstable because it is constantly attracted
to chaos or to absolute order.
We have the tendency to think that order is the ideal state of nature. This could be a mis-
take. Research . . . supports the theory that operation away from equilibrium generates cre-
ativity, self-organized processes, and increasing returns [Roo96]. Absolute order means the
absence of variability, which could be an advantage under unpredictable environments.
Change occurs when there is some structure so that the change can be organized, but not
so rigid that it cannot occur. Too much chaos, on the other hand, can make coordination
and coherence impossible. Lack of structure does not always mean disorder.
The philosophical implications of this argument are significant for software engineer-
ing. If prescriptive process models5 strive for structure and order, are they inappropri-
ate for a software world that thrives on change? Yet, if we reject traditional process

PART ONE
THE SOFTWARE PROCESS

Prescriptive process models are sometimes referred to as “traditional” process models.
uote:
“Software
organizations have
exhibited
significant
shortcomings in
their ability to
capitalize on the
experiences gained
from completed
projects.”
NASA
uote:
“If the process is
right, the results
will take care of
themselves.”
Takashi Osada

models (and the order they imply) and replace them with something less structured,
do we make it impossible to achieve coordination and coherence in software work?
There are no easy answers to these questions, but there are alternatives available
to software engineers. In the sections that follow, I examine the prescriptive process
approach in which order and project consistency are dominant issues. I call them
“prescriptive” because they prescribe a set of process elements—framework activi-
ties, software engineering actions, tasks, work products, quality assurance, and
change control mechanisms for each project. Each process model also prescribes a
process flow (also called a work flow)—that is, the manner in which the process
elements are interrelated to one another.
All software process models can accommodate the generic framework activities
described in Chapter 1, but each applies a different emphasis to these activities and
defines a process flow that invokes each framework activity (as well as software
engineering actions and tasks) in a different manner.
2.3.1
The Waterfall Model
There are times when the requirements for a problem are well understood—when
work flows from communication through deployment in a reasonably linear fash-
ion. This situation is sometimes encountered when well-defined adaptations or en-
hancements to an existing system must be made (e.g., an adaptation to accounting
software that has been mandated because of changes to government regulations). It
may also occur in a limited number of new development efforts, but only when
requirements are well defined and reasonably stable.
The waterfall model, sometimes called the classic life cycle, suggests a systematic,
sequential approach6 to software development that begins with customer specifica-
tion of requirements and progresses through planning, modeling, construction, and
deployment, culminating in ongoing support of the completed software (Figure 2.3).
A variation in the representation of the waterfall model is called the V-model.
Represented in Figure 2.4, the V-model [Buc99] depicts the relationship of quality
CHAPTER 2
PROCESS MODELS

Communication
 
project initiation
 
requirements gathering
Planning
 
estimating
 
scheduling
 
tracking
Modeling
 
analysis
 
design
Deployment
 
delivery
 
support
 
feedback
Construction
 
code
 
test
FIGURE 2.3
The waterfall model

Although the original waterfall model proposed by Winston Royce [Roy70] made provision for
“feedback loops,” the vast majority of organizations that apply this process model treat it as if it
were strictly linear.
Prescriptive process
models define a
prescribed set of
process elements and
a predictable process
work flow.

assurance actions to the actions associated with communication, modeling, and
early construction activities. As a software team moves down the left side of the V,
basic problem requirements are refined into progressively more detailed and techni-
cal representations of the problem and its solution. Once code has been generated,
the team moves up the right side of the V, essentially performing a series of tests
(quality assurance actions) that validate each of the models created as the team
moved down the left side.7 In reality, there is no fundamental difference between the
classic life cycle and the V-model. The V-model provides a way of visualizing how
verification and validation actions are applied to earlier engineering work.
The waterfall model is the oldest paradigm for software engineering. However,
over the past three decades, criticism of this process model has caused even ardent
supporters to question its efficacy [Han95]. Among the problems that are sometimes
encountered when the waterfall model is applied are:
1.
Real projects rarely follow the sequential flow that the model proposes.
Although the linear model can accommodate iteration, it does so indirectly.
As a result, changes can cause confusion as the project team proceeds.

PART ONE
THE SOFTWARE PROCESS

A detailed discussion of quality assurance actions is presented in Part 3 of this book.
The V-model illustrates
how verification and
validation actions are
associated with earlier
engineering actions.
Why does
the waterfall
model sometimes
fail?
?
Code
generation
Architectural
design
Component
design
Requirements
modeling
Acceptance
testing
System
testing
Integration
testing
Unit
testing
Executable
software
FIGURE 2.4
The V-model

2.
It is often difficult for the customer to state all requirements explicitly. The
waterfall model requires this and has difficulty accommodating the natural
uncertainty that exists at the beginning of many projects.
3.
The customer must have patience. A working version of the program(s) will
not be available until late in the project time span. A major blunder, if unde-
tected until the working program is reviewed, can be disastrous.
In an interesting analysis of actual projects, Bradac [Bra94] found that the linear
nature of the classic life cycle leads to “blocking states” in which some project team
members must wait for other members of the team to complete dependent tasks. In
fact, the time spent waiting can exceed the time spent on productive work! The
blocking states tend to be more prevalent at the beginning and end of a linear
sequential process.
Today, software work is fast-paced and subject to a never-ending stream of
changes (to features, functions, and information content). The waterfall model is
often inappropriate for such work. However, it can serve as a useful process model
in situations where requirements are fixed and work is to proceed to completion in
a linear manner.
2.3.2
Incremental Process Models
There are many situations in which initial software requirements are reasonably well
defined, but the overall scope of the development effort precludes a purely linear
process. In addition, there may be a compelling need to provide a limited set of soft-
ware functionality to users quickly and then refine and expand on that functionality
in later software releases. In such cases, you can choose a process model that is
designed to produce the software in increments.
The incremental model combines elements of linear and parallel process flows
discussed in Section 2.1. Referring to Figure 2.5, the incremental model applies linear
sequences in a staggered fashion as calendar time progresses. Each linear sequence
produces deliverable “increments” of the software [McD93] in a manner that is sim-
ilar to the increments produced by an evolutionary process flow (Section 2.3.3).
For example, word-processing software developed using the incremental para-
digm might deliver basic file management, editing, and document production func-
tions in the first increment; more sophisticated editing and document production
capabilities in the second increment; spelling and grammar checking in the third in-
crement; and advanced page layout capability in the fourth increment. It should be
noted that the process flow for any increment can incorporate the prototyping
paradigm. 
When an incremental model is used, the first increment is often a core product.
That is, basic requirements are addressed but many supplementary features (some
known, others unknown) remain undelivered. The core product is used by the cus-
tomer (or undergoes detailed evaluation). As a result of use and/or evaluation, a
CHAPTER 2
PROCESS MODELS

uote:
“Too often,
software work
follows the first law
of bicycling: No
matter where
you’re going, it’s
uphill and against
the wind.”
Author unknown
The incremental model
delivers a series of
releases, called
increments, that
provide progressively
more functionality for
the customer as each
increment is delivered.
Your customer
demands delivery by a
date that is impossible
to meet. Suggest deliv-
ering one or more
increments by that
date and the rest of
the software (addi-
tional increments)
later.

plan is developed for the next increment. The plan addresses the modification of the
core product to better meet the needs of the customer and the delivery of additional
features and functionality. This process is repeated following the delivery of each
increment, until the complete product is produced.
The incremental process model focuses on the delivery of an operational product
with each increment. Early increments are stripped-down versions of the final prod-
uct, but they do provide capability that serves the user and also provide a platform
for evaluation by the user.8
Incremental development is particularly useful when staffing is unavailable for a
complete implementation by the business deadline that has been established for the
project. Early increments can be implemented with fewer people. If the core product
is well received, then additional staff (if required) can be added to implement the next
increment. In addition, increments can be planned to manage technical risks. For ex-
ample, a major system might require the availability of new hardware that is under
development and whose delivery date is uncertain. It might be possible to plan early
increments in a way that avoids the use of this hardware, thereby enabling partial
functionality to be delivered to end users without inordinate delay.
2.3.3
Evolutionary Process Models
Software, like all complex systems, evolves over a period of time. Business and prod-
uct requirements often change as development proceeds, making a straight line path
to an end product unrealistic; tight market deadlines make completion of a compre-
hensive software product impossible, but a limited version must be introduced to

PART ONE
THE SOFTWARE PROCESS
Evolutionary process
models produce an
increasingly more
complete version of
the software with each
iteration.

It is important to note that an incremental philosophy is also used for all “agile” process models dis-
cussed in Chapter 3.
increment # 1
increment # 2
delivery of
1st increment
delivery of
2nd increment
delivery of 
nth increment
increment # n
Project Calendar Time
Software Functionality and Features
Communication
Planning
Modeling (analysis, design)
Construction (code, test)
Deployment (delivery, feedback)
FIGURE 2.5
The 
incremental
model

meet competitive or business pressure; a set of core product or system requirements
is well understood, but the details of product or system extensions have yet to be
defined. In these and similar situations, you need a process model that has been
explicitly designed to accommodate a product that evolves over time.
Evolutionary models are iterative. They are characterized in a manner that
enables you to develop increasingly more complete versions of the software. In the
paragraphs that follow, I present two common evolutionary process models.
Prototyping.
Often, a customer defines a set of general objectives for software,
but does not identify detailed requirements for functions and features. In other
cases, the developer may be unsure of the efficiency of an algorithm, the adapt-
ability of an operating system, or the form that human-machine interaction should
take. In these, and many other situations, a prototyping paradigm may offer the best
approach.
Although prototyping can be used as a stand-alone process model, it is more com-
monly used as a technique that can be implemented within the context of any one
of the process models noted in this chapter. Regardless of the manner in which it is
applied, the prototyping paradigm assists you and other stakeholders to better
understand what is to be built when requirements are fuzzy.
The prototyping paradigm (Figure 2.6) begins with communication. You meet with
other stakeholders to define the overall objectives for the software, identify whatever
requirements are known, and outline areas where further definition is mandatory. A
prototyping iteration is planned quickly, and modeling (in the form of a “quick de-
sign”) occurs. A quick design focuses on a representation of those aspects of the soft-
ware that will be visible to end users (e.g., human interface layout or output display
CHAPTER 2
PROCESS MODELS

uote:
“Plan to throw one
away. You will do
that, anyway. Your
only choice is
whether to try to
sell the throwaway
to customers.”
Frederick P.
Brooks
When your customer
has a legitimate need,
but is clueless about
the details, develop a
prototype as a first
step.
Communication
Quick plan
Construction
of
prototype
Modeling
 Quick design
  
Deployment
  Delivery 
  & Feedback
FIGURE 2.6
The 
prototyping
paradigm

formats). The quick design leads to the construction of a prototype. The prototype is
deployed and evaluated by stakeholders, who provide feedback that is used to fur-
ther refine requirements. Iteration occurs as the prototype is tuned to satisfy the
needs of various stakeholders, while at the same time enabling you to better under-
stand what needs to be done.
Ideally, the prototype serves as a mechanism for identifying software require-
ments. If a working prototype is to be built, you can make use of existing program
fragments or apply tools (e.g., report generators and window managers) that enable
working programs to be generated quickly.
But what do you do with the prototype when it has served the purpose described
earlier? Brooks [Bro95] provides one answer:
In most projects, the first system built is barely usable. It may be too slow, too big, awk-
ward in use or all three. There is no alternative but to start again, smarting but smarter,
and build a redesigned version in which these problems are solved.
The prototype can serve as “the first system.” The one that Brooks recommends
you throw away. But this may be an idealized view. Although some prototypes are
built as “throwaways,” others are evolutionary in the sense that the prototype slowly
evolves into the actual system.
Both stakeholders and software engineers like the prototyping paradigm. Users
get a feel for the actual system, and developers get to build something immediately.
Yet, prototyping can be problematic for the following reasons:
1.
Stakeholders see what appears to be a working version of the software,
unaware that the prototype is held together haphazardly, unaware that in the
rush to get it working you haven’t considered overall software quality or
long-term maintainability. When informed that the product must be rebuilt so
that high levels of quality can be maintained, stakeholders cry foul and
demand that “a few fixes” be applied to make the prototype a working
product. Too often, software development management relents.
2.
As a software engineer, you often make implementation compromises in
order to get a prototype working quickly. An inappropriate operating system
or programming language may be used simply because it is available and
known; an inefficient algorithm may be implemented simply to demonstrate
capability. After a time, you may become comfortable with these choices and
forget all the reasons why they were inappropriate. The less-than-ideal
choice has now become an integral part of the system.
Although problems can occur, prototyping can be an effective paradigm for soft-
ware engineering. The key is to define the rules of the game at the beginning; that is,
all stakeholders should agree that the prototype is built to serve as a mechanism for
defining requirements. It is then discarded (at least in part), and the actual software
is engineered with an eye toward quality.

PART ONE
THE SOFTWARE PROCESS
Resist pressure to
extend a rough
prototype into a
production product.
Quality almost always
suffers as a result.

The Spiral Model.
Originally proposed by Barry Boehm [Boe88], the spiral model
is an evolutionary software process model that couples the iterative nature of proto-
typing with the controlled and systematic aspects of the waterfall model. It provides
the potential for rapid development of increasingly more complete versions of the
software. Boehm [Boe01a] describes the model in the following manner:
The spiral development model is a risk-driven process model generator that is used to
guide multi-stakeholder concurrent engineering of software intensive systems. It has two
main distinguishing features. One is a cyclic approach for incrementally growing a sys-
tem’s degree of definition and implementation while decreasing its degree of risk. The
other is a set of anchor point milestones for ensuring stakeholder commitment to feasible
and mutually satisfactory system solutions.
Using the spiral model, software is developed in a series of evolutionary releases.
During early iterations, the release might be a model or prototype. During later iter-
ations, increasingly more complete versions of the engineered system are produced.
CHAPTER 2
PROCESS MODELS

The scene: Meeting room for the
software engineering group at CPI Corporation, a
(fictional) company that makes consumer products for
home and commercial use.
The players: Lee Warren, engineering manager; Doug
Miller, software engineering manager; Jamie Lazar,
software team member; Vinod Raman, software team
member; and Ed Robbins, software team member.
The conversation:
Lee: So let’s recapitulate. I’ve spent some time discussing
the SafeHome product line as we see it at the moment.
No doubt, we’ve got a lot of work to do to simply define
the thing, but I’d like you guys to begin thinking about
how you’re going to approach the software part of this
project.
Doug: Seems like we’ve been pretty disorganized in our
approach to software in the past.
Ed: I don’t know, Doug, we always got product out
the door.
Doug: True, but not without a lot of grief, and this
project looks like it’s bigger and more complex than
anything we’ve done in the past.
Jamie: Doesn’t look that hard, but I agree . . . our
ad hoc approach to past projects won’t work here,
particularly if we have a very tight time line.
Doug (smiling): I want to be a bit more professional in
our approach. I went to a short course last week and
learned a lot about software engineering . . . good stuff.
We need a process here.
Jamie (with a frown): My job is to build computer
programs, not push paper around.
Doug: Give it a chance before you go negative on
me. Here’s what I mean. [Doug proceeds to describe
the process framework described in this chapter and
the prescriptive process models presented to this 
point.]
Doug: So anyway, it seems to me that a linear model is
not for us . . . assumes we have all requirements up front
and, knowing this place, that’s not likely.
Vinod: Yeah, and it sounds way too IT-oriented . . .
probably good for building an inventory control system
or something, but it’s just not right for SafeHome.
Doug: I agree.
Ed: That prototyping approach seems OK. A lot like what
we do here anyway.
Vinod: That’s a problem. I’m worried that it doesn’t
provide us with enough structure.
Doug: Not to worry. We’ve got plenty of other options,
and I want you guys to pick what’s best for the team and
best for the project.
SAFEHOME
Selecting a Process Model, Part 1

A spiral model is divided into a set of framework activities defined by the software
engineering team. For illustrative purposes, I use the generic framework activities
discussed earlier.9 Each of the framework activities represent one segment of the spi-
ral path illustrated in Figure 2.7. As this evolutionary process begins, the software
team performs activities that are implied by a circuit around the spiral in a clockwise
direction, beginning at the center. Risk (Chapter 28) is considered as each revolution
is made. Anchor point milestones—a combination of work products and conditions
that are attained along the path of the spiral—are noted for each evolutionary pass.
The first circuit around the spiral might result in the development of a product
specification; subsequent passes around the spiral might be used to develop a pro-
totype and then progressively more sophisticated versions of the software. Each pass
through the planning region results in adjustments to the project plan. Cost and
schedule are adjusted based on feedback derived from the customer after delivery.
In addition, the project manager adjusts the planned number of iterations required
to complete the software.
Unlike other process models that end when software is delivered, the spiral model
can be adapted to apply throughout the life of the computer software. Therefore, the
first circuit around the spiral might represent a “concept development project” that
starts at the core of the spiral and continues for multiple iterations10 until concept

PART ONE
THE SOFTWARE PROCESS

The spiral model discussed in this section is a variation on the model proposed by Boehm. For
further information on the original spiral model, see [Boe88]. More recent discussion of Boehm’s
spiral model can be found in [Boe98].
10 The arrows pointing inward along the axis separating the deployment region from the commu-
nication region indicate a potential for local iteration along the same spiral path.
Communication
Planning 
Modeling
Construction
Deployment 
delivery 
feedback
Start
analysis 
design
code 
test
estimation 
scheduling 
risk analysis
FIGURE 2.7
A typical
spiral model
The spiral model can
be adapted to apply
throughout the entire
life cycle of an
application, from
concept development
to maintenance.
WebRef
Useful information
about the spiral model
can be obtained at:
www.sei.cmu
.edu/publications/
documents/00
.reports/00sr008
.html.

development is complete. If the concept is to be developed into an actual product,
the process proceeds outward on the spiral and a “new product development proj-
ect” commences. The new product will evolve through a number of iterations around
the spiral. Later, a circuit around the spiral might be used to represent a “product en-
hancement project.” In essence, the spiral, when characterized in this way, remains
operative until the software is retired. There are times when the process is dormant,
but whenever a change is initiated, the process starts at the appropriate entry point
(e.g., product enhancement).
The spiral model is a realistic approach to the development of large-scale systems
and software. Because software evolves as the process progresses, the developer
and customer better understand and react to risks at each evolutionary level. The
spiral model uses prototyping as a risk reduction mechanism but, more important,
enables you to apply the prototyping approach at any stage in the evolution of the
product. It maintains the systematic stepwise approach suggested by the classic life
cycle but incorporates it into an iterative framework that more realistically reflects
the real world. The spiral model demands a direct consideration of technical risks at
all stages of the project and, if properly applied, should reduce risks before they
become problematic.
But like other paradigms, the spiral model is not a panacea. It may be difficult to
convince customers (particularly in contract situations) that the evolutionary
approach is controllable. It demands considerable risk assessment expertise and
relies on this expertise for success. If a major risk is not uncovered and managed,
problems will undoubtedly occur.
CHAPTER 2
PROCESS MODELS

If your management
demands fixed-budget
development
(generally a bad idea),
the spiral can be a
problem. As each
circuit is completed,
project cost is revisited
and revised.
uote:
“I’m only this far
and only tomorrow
leads my way.”
Dave Matthews
Band
The scene: Meeting room for the
software engineering group at CPI Corporation, a
company that makes consumer products for home and
commercial use.
The players: Lee Warren, engineering manager; Doug
Miller, software engineering manager; Vinod and Jamie,
members of the software engineering team.
The conversation: [Doug describes evolutionary
process options.]
Jamie: Now I see something I like. An incremental
approach makes sense, and I really like the flow of that
spiral model thing. That’s keepin’ it real.
Vinod: I agree. We deliver an increment, learn from
customer feedback, replan, and then deliver another
increment. It also fits into the nature of the product. We
can have something on the market fast and then add
functionality with each version, er, increment.
Lee: Wait a minute. Did you say that we regenerate the
plan with each tour around the spiral, Doug? That’s not so
great; we need one plan, one schedule, and we’ve got to
stick to it.
Doug: That’s old-school thinking, Lee. Like the guys said,
we’ve got to keep it real. I submit that it’s better to tweak
the plan as we learn more and as changes are requested.
It’s way more realistic. What’s the point of a plan if it
doesn’t reflect reality?
Lee (frowning): I suppose so, but . . . senior management’s
not going to like this . . . they want a fixed plan.
Doug (smiling): Then you’ll have to reeducate them,
buddy.
SAFEHOME
Selecting a Process Model, Part 2

2.3.4
Concurrent Models
The concurrent development model, sometimes called concurrent engineering, allows
a software team to represent iterative and concurrent elements of any of the process
models described in this chapter. For example, the modeling activity defined for the
spiral model is accomplished by invoking one or more of the following software
engineering actions: prototyping, analysis, and design.11
Figure 2.8 provides a schematic representation of one software engineering
activity within the modeling activity using a concurrent modeling approach. The
activity—modeling—may be in any one of the states12 noted at any given time. Sim-
ilarly, other activities, actions, or tasks (e.g., communication or construction) can
be represented in an analogous manner. All software engineering activities exist
concurrently but reside in different states.

PART ONE
THE SOFTWARE PROCESS
11 It should be noted that analysis and design are complex tasks that require substantial discussion.
Part 2 of this book considers these topics in detail.
12 A state is some externally observable mode of behavior.
Under review
Baselined
Under
revision
Awaiting
changes
Under
development
Inactive
Modeling activity
Represents the state 
of a software engineering 
activity or task 
Done
FIGURE 2.8
One element of
the concurrent
process model
The concurrent model
is often more appro-
priate for product engi-
neering projects where
different engineering
teams are involved.

For example, early in a project the communication activity (not shown in the figure)
has completed its first iteration and exists in the awaiting changes state. The model-
ing activity (which existed in the inactive state while initial communication was com-
pleted, now makes a transition into the under development state. If, however, the
customer indicates that changes in requirements must be made, the modeling activity
moves from the under development state into the awaiting changes state.
Concurrent modeling defines a series of events that will trigger transitions from
state to state for each of the software engineering activities, actions, or tasks. For
example, during early stages of design (a major software engineering action that
occurs during the modeling activity), an inconsistency in the requirements model is
uncovered. This generates the event analysis model correction, which will trigger the
requirements analysis action from the done state into the awaiting changes state.
Concurrent modeling is applicable to all types of software development and pro-
vides an accurate picture of the current state of a project. Rather than confining soft-
ware engineering activities, actions, and tasks to a sequence of events, it defines a
process network. Each activity, action, or task on the network exists simultaneously
with other activities, actions, or tasks. Events generated at one point in the process
network trigger transitions among the states.
2.3.5
A Final Word on Evolutionary Processes
I have already noted that modern computer software is characterized by continual
change, by very tight time lines, and by an emphatic need for customer–user
satisfaction. In many cases, time-to-market is the most important management
requirement. If a market window is missed, the software project itself may be
meaningless.13
Evolutionary process models were conceived to address these issues, and yet, as
a general class of process models, they too have weaknesses. These are summarized
by Nogueira and his colleagues [Nog00] : 
Despite the unquestionable benefits of evolutionary software processes, we have some
concerns. The first concern is that prototyping [and other more sophisticated evolution-
ary processes] poses a problem to project planning because of the uncertain number of
cycles required to construct the product. Most project management and estimation tech-
niques are based on linear layouts of activities, so they do not fit completely. 
Second, evolutionary software processes do not establish the maximum speed of the
evolution. If the evolutions occur too fast, without a period of relaxation, it is certain that
the process will fall into chaos. On the other hand if the speed is too slow then produc-
tivity could be affected . . .
CHAPTER 2
PROCESS MODELS

13 It is important to note, however, that being the first to reach a market is no guarantee of success.
In fact, many very successful software products have been second or even third to reach the market
(learning from the mistakes of their predecessors).
uote:
“Every process in
your organization
has a customer,
and without a
customer a process
has no purpose.”
V. Daniel Hunt

Third, software processes should be focused on flexibility and extensibility rather than
on high quality. This assertion sounds scary. However, we should prioritize the speed of
the development over zero defects. Extending the development in order to reach high
quality could result in a late delivery of the product, when the opportunity niche has
disappeared. This paradigm shift is imposed by the competition on the edge of chaos.
Indeed, a software process that focuses on flexibility, extensibility, and speed of de-
velopment over high quality does sound scary. And yet, this idea has been proposed
by a number of well-respected software engineering experts (e.g., [You95], [Bac97]).
The intent of evolutionary models is to develop high-quality software14 in an iter-
ative or incremental manner. However, it is possible to use an evolutionary process
to emphasize flexibility, extensibility, and speed of development. The challenge for
software teams and their managers is to establish a proper balance between these
critical project and product parameters and customer satisfaction (the ultimate
arbiter of software quality).
2.4
SPECIALIZED PROCESS MODELS
Specialized process models take on many of the characteristics of one or more of the
traditional models presented in the preceding sections. However, these models tend
to be applied when a specialized or narrowly defined software engineering approach
is chosen.15
2.4.1
Component-Based Development
Commercial off-the-shelf (COTS) software components, developed by vendors who
offer them as products, provide targeted functionality with well-defined interfaces
that enable the component to be integrated into the software that is to be built. The
component-based development model incorporates many of the characteristics of the
spiral model. It is evolutionary in nature [Nie92], demanding an iterative approach to
the creation of software. However, the component-based development model con-
structs applications from prepackaged software components.
Modeling and construction activities begin with the identification of candidate
components. These components can be designed as either conventional software
modules or object-oriented classes or packages16 of classes. Regardless of the

PART ONE
THE SOFTWARE PROCESS
14 In this context software quality is defined quite broadly to encompass not only customer satisfac-
tion, but also a variety of technical criteria discussed in Chapters 14 and 16.
15 In some cases, these specialized process models might better be characterized as a collection of
techniques or a “methodology” for accomplishing a specific software development goal. However,
they do imply a process.
16 Object-oriented concepts are discussed in Appendix 2 and are used throughout Part 2 of this book.
In this context, a class encompasses a set of data and the procedures that process the data. A pack-
age of classes is a collection of related classes that work together to achieve some end result.
WebRef
Useful information on
component-based
development can be
obtained at: www
.cbd-hq.com.

technology that is used to create the components, the component-based develop-
ment model incorporates the following steps (implemented using an evolutionary
approach):
1.
Available component-based products are researched and evaluated for the
application domain in question.
2.
Component integration issues are considered.
3.
A software architecture is designed to accommodate the components.
4.
Components are integrated into the architecture.
5.
Comprehensive testing is conducted to ensure proper functionality.
The component-based development model leads to software reuse, and reusabil-
ity provides software engineers with a number of measurable benefits. Your software
engineering team can achieve a reduction in development cycle time as well as a
reduction in project cost if component reuse becomes part of your culture. Component-
based development is discussed in more detail in Chapter 10.
2.4.2
The Formal Methods Model
The formal methods model encompasses a set of activities that leads to formal math-
ematical specification of computer software. Formal methods enable you to specify,
develop, and verify a computer-based system by applying a rigorous, mathematical
notation. A variation on this approach, called cleanroom software engineering [Mil87,
Dye92], is currently applied by some software development organizations.
When formal methods (Chapter 21) are used during development, they provide a
mechanism for eliminating many of the problems that are difficult to overcome using
other software engineering paradigms. Ambiguity, incompleteness, and inconsis-
tency can be discovered and corrected more easily—not through ad hoc review, but
through the application of mathematical analysis. When formal methods are used
during design, they serve as a basis for program verification and therefore enable
you to discover and correct errors that might otherwise go undetected.
Although not a mainstream approach, the formal methods model offers the prom-
ise of defect-free software. Yet, concern about its applicability in a business envi-
ronment has been voiced:
• The development of formal models is currently quite time consuming and
expensive.
• Because few software developers have the necessary background to apply
formal methods, extensive training is required.
• It is difficult to use the models as a communication mechanism for techni-
cally unsophisticated customers.
These concerns notwithstanding, the formal methods approach has gained
adherents among software developers who must build safety-critical software 
CHAPTER 2
PROCESS MODELS

If formal
methods can
demonstrate
software
correctness, why
is it they are not
widely used?
?

(e.g., developers of aircraft avionics and medical devices) and among developers
that would suffer severe economic hardship should software errors occur. 
2.4.3
Aspect-Oriented Software Development
Regardless of the software process that is chosen, the builders of complex software
invariably implement a set of localized features, functions, and information content.
These localized software characteristics are modeled as components (e.g., object-
oriented classes) and then constructed within the context of a system architecture.
As modern computer-based systems become more sophisticated (and complex),
certain concerns—customer required properties or areas of technical interest—span
the entire architecture. Some concerns are high-level properties of a system (e.g.,
security, fault tolerance). Other concerns affect functions (e.g., the application of
business rules), while others are systemic (e.g., task synchronization or memory
management).
When concerns cut across multiple system functions, features, and information,
they are often referred to as crosscutting concerns. Aspectual requirements define
those crosscutting concerns that have an impact across the software architecture.
Aspect-oriented software development (AOSD), often referred to as aspect-oriented
programming (AOP), is a relatively new software engineering paradigm that provides
a process and methodological approach for defining, specifying, designing, and con-
structing aspects—“mechanisms beyond subroutines and inheritance for localizing
the expression of a crosscutting concern” [Elr01].
Grundy [Gru02] provides further discussion of aspects in the context of what he
calls aspect-oriented component engineering (AOCE):
AOCE uses a concept of horizontal slices through vertically-decomposed software com-
ponents, called “aspects,” to characterize cross-cutting functional and non-functional
properties of components. Common, systemic aspects include user interfaces, collabora-
tive work, distribution, persistency, memory management, transaction processing, secu-
rity, integrity and so on. Components may provide or require one or more “aspect details”
relating to a particular aspect, such as a viewing mechanism, extensible affordance and
interface kind (user interface aspects); event generation, transport and receiving
(distribution aspects); data store/retrieve and indexing (persistency aspects); authentica-
tion, encoding and access rights (security aspects); transaction atomicity, concurrency
control and logging strategy (transaction aspects); and so on. Each aspect detail has a
number of properties, relating to functional and/or non-functional characteristics of the
aspect detail.
A distinct aspect-oriented process has not yet matured. However, it is likely that
such a process will adopt characteristics of both evolutionary and concurrent
process models. The evolutionary model is appropriate as aspects are identified and
then constructed. The parallel nature of concurrent development is essential be-
cause aspects are engineered independently of localized software components and
yet, aspects have a direct impact on these components. Hence, it is essential to

PART ONE
THE SOFTWARE PROCESS
WebRef
A wide array of
resources and
information on AOP
can be found at:
aosd.net.
AOSD defines
“aspects” that express
customer concerns that
cut across multiple
system functions,
features, and
information.

instantiate asynchronous communication between the software process activities
applied to the engineering and construction of aspects and components.
A detailed discussion of aspect-oriented software development is best left to
books dedicated to the subject. If you have further interest, see [Saf08], [Cla05],
[Jac04], and [Gra03].
CHAPTER 2
PROCESS MODELS

17 Tools noted here do not represent an endorsement, but rather a sampling of tools in this category.
In most cases, tool names are trademarked by their respective developers.
Process Management
Objective: To assist in the definition,
execution, and management of prescriptive
process models.
Mechanics: Process management tools allow a software
organization or team to define a complete software
process model (framework activities, actions, tasks, QA
checkpoints, milestones, and work products). In addition,
the tools provide a road map as software engineers do
technical work and a template for managers who must
track and control the software process.
Representative Tools:17
GDPA, a research process definition tool suite, developed at
Bremen University in Germany (www.informatik
.uni-bremen.de/uniform/gdpa/home.htm),
provides a wide array of process modeling and
management functions.
SpeeDev, developed by SpeeDev Corporation
(www.speedev.com) encompasses a suite of tools
for process definition, requirements management, issue
resolution, project planning, and tracking.
ProVision BPMx, developed by Proforma
(www.proformacorp.com), is representative of
many tools that assist in process definition and
workflow automation.
A worthwhile listing of many different tools associated 
with the software process can be found at www
.processwave.net/Links/tool_links.htm.
SOFTWARE TOOLS
2.5
THE UNIFIED PROCESS
In their seminal book on the Unified Process, Ivar Jacobson, Grady Booch, and James
Rumbaugh [Jac99] discuss the need for a “use case driven, architecture-centric, iter-
ative and incremental” software process when they state:
Today, the trend in software is toward bigger, more complex systems. That is due in part
to the fact that computers become more powerful every year, leading users to expect
more from them. This trend has also been influenced by the expanding use of the Inter-
net for exchanging all kinds of information. . . . Our appetite for ever-more sophisticated
software grows as we learn from one product release to the next how the product could
be improved. We want software that is better adapted to our needs, but that, in turn,
merely makes the software more complex. In short, we want more.
In some ways the Unified Process is an attempt to draw on the best features and
characteristics of traditional software process models, but characterize them in a
way that implements many of the best principles of agile software development

(Chapter 3). The Unified Process recognizes the importance of customer communi-
cation and streamlined methods for describing the customer’s view of a system
(the use case18). It emphasizes the important role of software architecture and
“helps the architect focus on the right goals, such as understandability, reliance to
future changes, and reuse” [Jac99]. It suggests a process flow that is iterative and
incremental, providing the evolutionary feel that is essential in modern software
development.
2.5.1
A Brief History
During the early 1990s James Rumbaugh [Rum91], Grady Booch [Boo94], and Ivar
Jacobson [Jac92] began working on a “unified method” that would combine the best
features of each of their individual object-oriented analysis and design methods and
adopt additional features proposed by other experts (e.g., [Wir90]) in object-oriented
modeling. The result was UML—a unified modeling language that contains a robust
notation for the modeling and development of object-oriented systems. By 1997,
UML became a de facto industry standard for object-oriented software development.
UML is used throughout Part 2 of this book to represent both requirements and
design models. Appendix 1 presents an introductory tutorial for those who are unfa-
miliar with basic UML notation and modeling rules. A comprehensive presentation
of UML is best left to textbooks dedicated to the subject. Recommended books are
listed in Appendix 1.
UML provided the necessary technology to support object-oriented software engi-
neering practice, but it did not provide the process framework to guide project teams
in their application of the technology. Over the next few years, Jacobson, Rumbaugh,
and Booch developed the Unified Process, a framework for object-oriented software
engineering using UML. Today, the Unified Process (UP) and UML are widely used on
object-oriented projects of all kinds. The iterative, incremental model proposed by the
UP can and should be adapted to meet specific project needs. 
2.5.2
Phases of the Unified Process19
Earlier in this chapter, I discussed five generic framework activities and argued that
they may be used to describe any software process model. The Unified Process is no
exception. Figure 2.9 depicts the “phases” of the UP and relates them to the generic
activities that have been discussed in Chapter 1 and earlier in this chapter. 

PART ONE
THE SOFTWARE PROCESS
18 A use case (Chapter 5) is a text narrative or template that describes a system function or feature
from the user’s point of view. A use case is written by the user and serves as a basis for the creation
of a more comprehensive requirements model.
19 The Unified Process is sometimes called the Rational Unified Process (RUP) after the Rational Cor-
poration (subsequently acquired by IBM), an early contributor to the development and refinement
of the UP and a builder of complete environments (tools and technology) that support the process.

The inception phase of the UP encompasses both customer communication and
planning activities. By collaborating with stakeholders, business requirements for
the software are identified; a rough architecture for the system is proposed; and a
plan for the iterative, incremental nature of the ensuing project is developed.
Fundamental business requirements are described through a set of preliminary use
cases (Chapter 5) that describe which features and functions each major class of
users desires. Architecture at this point is nothing more than a tentative outline of
major subsystems and the function and features that populate them. Later, the ar-
chitecture will be refined and expanded into a set of models that will represent
different views of the system. Planning identifies resources, assesses major risks,
defines a schedule, and establishes a basis for the phases that are to be applied as
the software increment is developed.
The elaboration phase encompasses the communication and modeling activities of
the generic process model (Figure 2.9). Elaboration refines and expands the prelimi-
nary use cases that were developed as part of the inception phase and expands the
architectural representation to include five different views of the software—the use
case model, the requirements model, the design model, the implementation model,
and the deployment model. In some cases, elaboration creates an “executable
architectural baseline” [Arl02] that represents a “first cut” executable system.20 The
architectural baseline demonstrates the viability of the architecture but does not
provide all features and functions required to use the system. In addition, the plan is
carefully reviewed at the culmination of the elaboration phase to ensure that scope,
risks, and delivery dates remain reasonable. Modifications to the plan are often made
at this time.
CHAPTER 2
PROCESS MODELS

Transition
Production
software increment
Release
modeling
construction
planning
communication
deployment
Construction
Inception
Elaboration
FIGURE 2.9
The Unified
Process
UP phases are similar
in intent to the generic
framework activities
defined in this book.
20 It is important to note that the architectural baseline is not a prototype in that it is not thrown away.
Rather, the baseline is fleshed out during the next UP phase.

The construction phase of the UP is identical to the construction activity defined
for the generic software process. Using the architectural model as input, the con-
struction phase develops or acquires the software components that will make each
use case operational for end users. To accomplish this, requirements and design
models that were started during the elaboration phase are completed to reflect the
final version of the software increment. All necessary and required features and
functions for the software increment (i.e., the release) are then implemented in
source code. As components are being implemented, unit tests21 are designed and
executed for each. In addition, integration activities (component assembly and inte-
gration testing) are conducted. Use cases are used to derive a suite of acceptance
tests that are executed prior to the initiation of the next UP phase.
The transition phase of the UP encompasses the latter stages of the generic con-
struction activity and the first part of the generic deployment (delivery and feedback)
activity. Software is given to end users for beta testing and user feedback reports
both defects and necessary changes. In addition, the software team creates the nec-
essary support information (e.g., user manuals, troubleshooting guides, installation
procedures) that is required for the release. At the conclusion of the transition phase,
the software increment becomes a usable software release.
The production phase of the UP coincides with the deployment activity of the
generic process. During this phase, the ongoing use of the software is monitored,
support for the operating environment (infrastructure) is provided, and defect reports
and requests for changes are submitted and evaluated.
It is likely that at the same time the construction, transition, and production
phases are being conducted, work may have already begun on the next software
increment. This means that the five UP phases do not occur in a sequence, but rather
with staggered concurrency.
A software engineering workflow is distributed across all UP phases. In the con-
text of UP, a workflow is analogous to a task set (described earlier in this chapter).
That is, a workflow identifies the tasks required to accomplish an important software
engineering action and the work products that are produced as a consequence of
successfully completing the tasks. It should be noted that not every task identified for
a UP workflow is conducted for every software project. The team adapts the process
(actions, tasks, subtasks, and work products) to meet its needs. 
2.6
PERSONAL AND TEAM PROCESS MODELS
The best software process is one that is close to the people who will be doing the
work. If a software process model has been developed at a corporate or organiza-
tional level, it can be effective only if it is amenable to significant adaptation to meet

PART ONE
THE SOFTWARE PROCESS
21 A comprehensive discussion of software testing (including unit tests) is presented in Chapters 17
through 20.
WebRef
An interesting
discussion of the UP in
the context of agile
development can be
found at
www.ambysoft
.com/
unifiedprocess/
agileUP.html.

the needs of the project team that is actually doing software engineering work. In an
ideal setting, you would create a process that best fits your needs, and at the same
time, meets the broader needs of the team and the organization. Alternatively, the
team itself can create its own process, and at the same time meet the narrower needs
of individuals and the broader needs of the organization. Watts Humphrey ([Hum97]
and [Hum00]) argues that it is possible to create a “personal software process”
and/or a “team software process.” Both require hard work, training, and coordina-
tion, but both are achievable.22
2.6.1
Personal Software Process (PSP)
Every developer uses some process to build computer software. The process may be
haphazard or ad hoc; may change on a daily basis; may not be efficient, effective, or
even successful; but a “process” does exist. Watts Humphrey [Hum97] suggests that
in order to change an ineffective personal process, an individual must move through
four phases, each requiring training and careful instrumentation. The Personal Soft-
ware Process (PSP) emphasizes personal measurement of both the work product that
is produced and the resultant quality of the work product. In addition PSP makes the
practitioner responsible for project planning (e.g., estimating and scheduling) and
empowers the practitioner to control the quality of all software work products that
are developed. The PSP model defines five framework activities: 
Planning.
This activity isolates requirements and develops both size and
resource estimates. In addition, a defect estimate (the number of defects
projected for the work) is made. All metrics are recorded on worksheets or
templates. Finally, development tasks are identified and a project schedule is
created.
High-level design.
External specifications for each component to be con-
structed are developed and a component design is created. Prototypes are
built when uncertainty exists. All issues are recorded and tracked.
High-level design review.
Formal verification methods (Chapter 21) are
applied to uncover errors in the design. Metrics are maintained for all impor-
tant tasks and work results.
Development.
The component-level design is refined and reviewed. Code
is generated, reviewed, compiled, and tested. Metrics are maintained for all
important tasks and work results.
Postmortem.
Using the measures and metrics collected (this is a substan-
tial amount of data that should be analyzed statistically), the effectiveness of
the process is determined. Measures and metrics should provide guidance for
modifying the process to improve its effectiveness.
CHAPTER 2
PROCESS MODELS

22 It’s worth noting the proponents of agile software development (Chapter 3) also argue that the
process should remain close to the team. They propose an alternative method for achieving this.
uote:
“A person who is
successful has
simply formed the
habit of doing
things that
unsuccessful people
will not do.”
Dexter Yager
WebRef
A wide array of
resources for PSP can
be found at www
.ipd.uka.de/PSP/.
What
framework
activities are used
during PSP?
?

PSP stresses the need to identify errors early and, just as important, to understand
the types of errors that you are likely to make. This is accomplished through a rigor-
ous assessment activity performed on all work products you produce.
PSP represents a disciplined, metrics-based approach to software engineering
that may lead to culture shock for many practitioners. However, when PSP is prop-
erly introduced to software engineers [Hum96], the resulting improvement in soft-
ware engineering productivity and software quality are significant [Fer97]. However,
PSP has not been widely adopted throughout the industry. The reasons, sadly, have
more to do with human nature and organizational inertia than they do with the
strengths and weaknesses of the PSP approach. PSP is intellectually challenging and
demands a level of commitment (by practitioners and their managers) that is not al-
ways possible to obtain. Training is relatively lengthy, and training costs are high.
The required level of measurement is culturally difficult for many software people.
Can PSP be used as an effective software process at a personal level? The answer
is an unequivocal “yes.” But even if PSP is not adopted in its entirely, many of the
personal process improvement concepts that it introduces are well worth learning. 
2.6.2
Team Software Process (TSP)
Because many industry-grade software projects are addressed by a team of practi-
tioners, Watts Humphrey extended the lessons learned from the introduction of PSP
and proposed a Team Software Process (TSP). The goal of TSP is to build a “self-
directed” project team that organizes itself to produce high-quality software.
Humphrey [Hum98] defines the following objectives for TSP:
• Build self-directed teams that plan and track their work, establish goals, and
own their processes and plans. These can be pure software teams or inte-
grated product teams (IPTs) of 3 to about 20 engineers. 
• Show managers how to coach and motivate their teams and how to help
them sustain peak performance. 
• Accelerate software process improvement by making CMM23 Level 5
behavior normal and expected. 
• Provide improvement guidance to high-maturity organizations. 
• Facilitate university teaching of industrial-grade team skills.
A self-directed team has a consistent understanding of its overall goals and objec-
tives; defines roles and responsibilities for each team member; tracks quantitative
project data (about productivity and quality); identifies a team process that is appro-
priate for the project and a strategy for implementing the process; defines local stan-
dards that are applicable to the team’s software engineering work; continually
assesses risk and reacts to it; and tracks, manages, and reports project status.

PART ONE
THE SOFTWARE PROCESS
PSP emphasizes the
need to record and
analyze the types of
errors you make, so
that you can develop
strategies to eliminate
them.
To form a self-directed
team, you must collab-
orate well internally
and communicate well
externally.
WebRef
Information on building
high-performance teams
using TSP and PSP can
be obtained at:
www.sei.cmu
.edu/tsp/.
23 The Capability Maturity Model (CMM), a measure of the effectiveness of a software process, is
discussed in Chapter 30.

TSP defines the following framework activities: project launch, high-level
design, implementation, integration and test, and postmortem. Like their
counterparts in PSP (note that terminology is somewhat different), these activities
enable the team to plan, design, and construct software in a disciplined manner
while at the same time quantitatively measuring the process and the product. The
postmortem sets the stage for process improvements.
TSP makes use of a wide variety of scripts, forms, and standards that serve to guide
team members in their work. “Scripts” define specific process activities (i.e., project
launch, design, implementation, integration and system testing, postmortem) and other
more detailed work functions (e.g., development planning, requirements development,
software configuration management, unit test) that are part of the team process.
TSP recognizes that the best software teams are self-directed.24 Team members
set project objectives, adapt the process to meet their needs, control the project
schedule, and through measurement and analysis of the metrics collected, work con-
tinually to improve the team’s approach to software engineering.
Like PSP, TSP is a rigorous approach to software engineering that provides dis-
tinct and quantifiable benefits in productivity and quality. The team must make a full
commitment to the process and must undergo thorough training to ensure that the
approach is properly applied. 
2.7
PROCESS TECHNOLOGY
One or more of the process models discussed in the preceding sections must be
adapted for use by a software team. To accomplish this, process technology tools have
been developed to help software organizations analyze their current process,
organize work tasks, control and monitor progress, and manage technical quality.
Process technology tools allow a software organization to build an automated
model of the process framework, task sets, and umbrella activities discussed in
Section 2.1. The model, normally represented as a network, can then be analyzed to
determine typical workflow and examine alternative process structures that might
lead to reduced development time or cost.
Once an acceptable process has been created, other process technology tools can
be used to allocate, monitor, and even control all software engineering activities,
actions, and tasks defined as part of the process model. Each member of a software
team can use such tools to develop a checklist of work tasks to be performed, work
products to be produced, and quality assurance activities to be conducted. The
process technology tool can also be used to coordinate the use of other software en-
gineering tools that are appropriate for a particular work task.
CHAPTER 2
PROCESS MODELS

24 In Chapter 3 I discuss the importance of “self-organizing” teams as a key element in agile software
development.
TSP scripts define
elements of the team
process and activities
that occur within the
process.

---

## Module 2 Textbook 1

It’s reasonable to argue that the techniques I’ll discuss in this chapter are not a
true “solution” to the challenges just noted. But they do provide a solid approach for
addressing these challenges.
5.1
REQUIREMENTS ENGINEERING
Designing and building computer software is challenging, creative, and just plain
fun. In fact, building software is so compelling that many software developers want
to jump right in before they have a clear understanding of what is needed. They argue
that things will become clear as they build, that project stakeholders will be able to
understand need only after examining early iterations of the software, that things
change so rapidly that any attempt to understand requirements in detail is a waste
of time, that the bottom line is producing a working program and all else is second-
ary. What makes these arguments seductive is that they contain elements of truth.1
But each is flawed and can lead to a failed software project.
The broad spectrum of tasks and techniques that lead to an understanding of re-
quirements is called requirements engineering. From a software process perspective,
requirements engineering is a major software engineering action that begins during
the communication activity and continues into the modeling activity. It must be
adapted to the needs of the process, the project, the product, and the people doing
the work.
Requirements engineering builds a bridge to design and construction. But where
does the bridge originate? One could argue that it begins at the feet of the project
stakeholders (e.g., managers, customers, end users), where business need is
defined, user scenarios are described, functions and features are delineated, and
project constraints are identified. Others might suggest that it begins with a broader
system definition, where software is but one component of the larger system
domain. But regardless of the starting point, the journey across the bridge takes you

PART TWO
MODELING
uote:
“Thehardestsingle
partofbuildinga
softwaresystem
is decidingwhatto
build.Nopartofthe
worksocripplesthe
resultingsystemif
donewrong.No
otherpartismore
difficulttorectify
later.”
Fred Brooks
Requirements
engineering establishes
a solid base for design
and construction.
Without it, the
resulting software has
a high probability of
not meeting
customer’s needs.

This is particularly true for small projects (less than one month) and smaller, relatively simple soft-
ware efforts. As software grows in size and complexity, these arguments begin to break down.
requirements
engineering . . .120
requirements
gathering . . . . .128
requirements
management . .124
specification . . .122
stakeholders . .125
use cases . . . . .133
validating
requirements . .144
validation . . . . .123
viewpoints . . . .126
work 
products . . . . . .133
in the project, after deadline commitments have been made, reputations are on the line,
and serious money is at stake.
All of us who have worked in the systems and software business for more than a few
years have lived this nightmare, and yet, few of us have learned to make it go away. We
struggle when we try to elicit requirements from our customers. We have trouble under-
standing the information that we do acquire. We often record requirements in a disor-
ganized manner, and we spend far too little time verifying what we do record. We allow
change to control us, rather than establishing mechanisms to control change. In short, we
fail to establish a solid foundation for the system or software. Each of these problems is
challenging. When they are combined, the outlook is daunting for even the most experi-
enced managers and practitioners. But solutions do exist.
MODULE 2

high above the project, allowing you to examine the context of the software work to
be performed; the specific needs that design and construction must address; the pri-
orities that guide the order in which work is to be completed; and the information,
functions, and behaviors that will have a profound impact on the resultant design.
Requirements engineering provides the appropriate mechanism for understand-
ing what the customer wants, analyzing need, assessing feasibility, negotiating a rea-
sonable solution, specifying the solution unambiguously, validating the specification,
and managing the requirements as they are transformed into an operational system
[Tha97]. It encompasses seven distinct tasks: inception, elicitation, elaboration,
negotiation, specification, validation, and management. It is important to note that
some of these tasks occur in parallel and all are adapted to the needs of the project.
Inception.
How does a software project get started? Is there a single event that
becomes the catalyst for a new computer-based system or product, or does the need
evolve over time? There are no definitive answers to these questions. In some cases,
a casual conversation is all that is needed to precipitate a major software engineer-
ing effort. But in general, most projects begin when a business need is identified
or a potential new market or service is discovered. Stakeholders from the business
community (e.g., business managers, marketing people, product managers) define
a business case for the idea, try to identify the breadth and depth of the market, do a
rough feasibility analysis, and identify a working description of the project’s scope.
All of this information is subject to change, but it is sufficient to precipitate discus-
sions with the software engineering organization.2
At project inception,3 you establish a basic understanding of the problem, the peo-
ple who want a solution, the nature of the solution that is desired, and the effective-
ness of preliminary communication and collaboration between the other stakeholders
and the software team.
Elicitation.
It certainly seems simple enough—ask the customer, the users, and
others what the objectives for the system or product are, what is to be accomplished,
how the system or product fits into the needs of the business, and finally, how the sys-
tem or product is to be used on a day-to-day basis. But it isn’t simple—it’s very hard.
Christel and Kang [Cri92] identify a number of problems that are encountered as
elicitation occurs.
• Problems of scope. The boundary of the system is ill-defined or the
customers/users specify unnecessary technical detail that may confuse,
rather than clarify, overall system objectives.
CHAPTER 5
UNDERSTANDING REQUIREMENTS

Expect to do a bit of
design during require-
ments work and a bit
of requirements work
during design.
uote:
“The seeds of
major software
disasters are
usually sown in the
first three months
of commencing the
software project.”
Caper Jones

If a computer-based system is to be developed, discussions begin within the context of a system
engineering process. For a detailed discussion of system engineering, visit the website that
accompanies this book.

Recall that the Unified Process (Chapter 2) defines a more comprehensive “inception phase” that
encompasses the inception, elicitation, and elaboration tasks discussed in this chapter.
Why is it
difficult to
gain a clear
understanding of
what the
customer wants?
?

PART TWO
MODELING
• Problems of understanding. The customers/users are not completely sure
of what is needed, have a poor understanding of the capabilities and limita-
tions of their computing environment, don’t have a full understanding of the
problem domain, have trouble communicating needs to the system engineer,
omit information that is believed to be “obvious,” specify requirements that
conflict with the needs of other customers/users, or specify requirements
that are ambiguous or untestable.
• Problems of volatility. The requirements change over time.
To help overcome these problems, you must approach requirements gathering in an
organized manner.
Elaboration.
The information obtained from the customer during inception and
elicitation is expanded and refined during elaboration. This task focuses on devel-
oping a refined requirements model (Chapters 6 and 7) that identifies various aspects
of software function, behavior, and information.
Elaboration is driven by the creation and refinement of user scenarios that de-
scribe how the end user (and other actors) will interact with the system. Each user
scenario is parsed to extract analysis classes—business domain entities that are
visible to the end user. The attributes of each analysis class are defined, and the serv-
ices4 that are required by each class are identified. The relationships and collabora-
tion between classes are identified, and a variety of supplementary diagrams are
produced.
Negotiation.
It isn’t unusual for customers and users to ask for more than can be
achieved, given limited business resources. It’s also relatively common for different
customers or users to propose conflicting requirements, arguing that their version is
“essential for our special needs.”
You have to reconcile these conflicts through a process of negotiation. Customers,
users, and other stakeholders are asked to rank requirements and then discuss con-
flicts in priority. Using an iterative approach that prioritizes requirements, assesses
their cost and risk, and addresses internal conflicts, requirements are eliminated,
combined, and/or modified so that each party achieves some measure of satisfaction.
Specification.
In the context of computer-based systems (and software), the term
specification means different things to different people. A specification can be a writ-
ten document, a set of graphical models, a formal mathematical model, a collection
of usage scenarios, a prototype, or any combination of these.
Some suggest that a “standard template” [Som97] should be developed and used
for a specification, arguing that this leads to requirements that are presented in a
Elaboration is a good
thing, but you have to
know when to stop.
The key is to describe
the problem in a way
that establishes a firm
base for design. If you
work beyond that
point, you’re doing
design.

A service manipulates the data encapsulated by the class. The terms operation and method are also
used. If you are unfamiliar with object-oriented concepts, a basic introduction is presented in
Appendix 2.
There should be no
winner and no loser in
an effective negotia-
tion. Both sides win,
because a “deal” that
both can live with is
solidified.

The formality and
format of a specifica-
tion varies with the size
and the complexity of
the software to be built.
consistent and therefore more understandable manner. However, it is sometimes
necessary to remain flexible when a specification is to be developed. For large sys-
tems, a written document, combining natural language descriptions and graphical
models may be the best approach. However, usage scenarios may be all that are re-
quired for smaller products or systems that reside within well-understood technical
environments.
CHAPTER 5
UNDERSTANDING REQUIREMENTS

Software Requirements Specification Template
A software requirements specification (SRS) is
a document that is created when a detailed
description of all aspects of the software to be built must be
specified before the project is to commence. It is important
to note that a formal SRS is not always written. In fact,
there are many instances in which effort expended on an
SRS might be better spent in other software engineering
activities. However, when software is to be developed by
a third party, when a lack of specification would create
severe business issues, or when a system is extremely
complex or business critical, an SRS may be justified.
Karl Wiegers [Wie03] of Process Impact Inc. has
developed a worthwhile template (available at
www.processimpact.com/process_assets/srs_
template.doc) that can serve as a guideline for those
who must create a complete SRS. A topic outline follows:
Table of Contents
Revision History
1.
Introduction
1.1
Purpose
1.2
Document Conventions
1.3
Intended Audience and Reading Suggestions
1.4
Project Scope
1.5
References
2.
Overall Description
2.1
Product Perspective
2.2
Product Features
2.3
User Classes and Characteristics
2.4
Operating Environment
2.5
Design and Implementation Constraints
2.6
User Documentation
2.7
Assumptions and Dependencies
3.
System Features
3.1
System Feature 1
3.2
System Feature 2 (and so on)
4.
External Interface Requirements
4.1
User Interfaces
4.2
Hardware Interfaces
4.3
Software Interfaces
4.4
Communications Interfaces
5.
Other Nonfunctional Requirements
5.1
Performance Requirements
5.2
Safety Requirements
5.3
Security Requirements
5.4
Software Quality Attributes
6.
Other Requirements
Appendix A: Glossary
Appendix B: Analysis Models
Appendix C: Issues List
A detailed description of each SRS topic can be obtained
by downloading the SRS template at the URL noted earlier
in this sidebar.
INFO
Validation.
The work products produced as a consequence of requirements engi-
neering are assessed for quality during a validation step. Requirements validation
examines the specification5 to ensure that all software requirements have been

Recall that the nature of the specification will vary with each project. In some cases, the “specifi-
cation” is a collection of user scenarios and little else. In others, the specification may be a docu-
ment that contains scenarios, models, and written descriptions.

stated unambiguously; that inconsistencies, omissions, and errors have been
detected and corrected; and that the work products conform to the standards estab-
lished for the process, the project, and the product.
The primary requirements validation mechanism is the technical review (Chap-
ter 15). The review team that validates requirements includes software engineers,
customers, users, and other stakeholders who examine the specification looking
for errors in content or interpretation, areas where clarification may be required,
missing information, inconsistencies (a major problem when large products or
systems are engineered), conflicting requirements, or unrealistic (unachievable)
requirements.

PART TWO
MODELING
INFO
Requirements management.
Requirements for computer-based systems
change, and the desire to change requirements persists throughout the life of the
system. Requirements management is a set of activities that help the project team
identify, control, and track requirements and changes to requirements at any time as
the project proceeds.6 Many of these activities are identical to the software configu-
ration management (SCM) techniques discussed in Chapter 22.

Formal requirements management is initiated only for large projects that have hundreds of identi-
fiable requirements. For small projects, this requirements engineering action is considerably less
formal.
Requirements Validation
Checklist
It is often useful to examine each requirement
against a set of checklist questions. Here is a small subset
of those that might be asked:
• Are requirements stated clearly? Can they be
misinterpreted?
• Is the source (e.g., a person, a regulation, a document)
of the requirement identified? Has the final statement of
the requirement been examined by or against the
original source?
• Is the requirement bounded in quantitative terms?
• What other requirements relate to this requirement? Are
they clearly noted via a cross-reference matrix or other
mechanism?
• Does the requirement violate any system domain
constraints?
• Is the requirement testable? If so, can we specify tests
(sometimes called validation criteria) to exercise the
requirement?
• Is the requirement traceable to any system model that
has been created?
• Is the requirement traceable to overall system/product
objectives?
• Is the specification structured in a way that leads to
easy understanding, easy reference, and easy
translation into more technical work products?
• Has an index for the specification been created?
• Have requirements associated with performance,
behavior, and operational characteristics been clearly
stated? What requirements appear to be implicit?
A key concern during
requirements valida-
tion is consistency. Use
the analysis model to
ensure that require-
ments have been con-
sistently stated.

5.2
ESTABLISHING THE GROUNDWORK
In an ideal setting, stakeholders and software engineers work together on the same
team.8 In such cases, requirements engineering is simply a matter of conducting
meaningful conversations with colleagues who are well-known members of the
team. But reality is often quite different.
Customer(s) or end users may be located in a different city or country, may have
only a vague idea of what is required, may have conflicting opinions about the sys-
tem to be built, may have limited technical knowledge, and may have limited time to
interact with the requirements engineer. None of these things are desirable, but all
are fairly common, and you are often forced to work within the constraints imposed
by this situation.
In the sections that follow, I discuss the steps required to establish the ground-
work for an understanding of software requirements—to get the project started in a
way that will keep it moving forward toward a successful solution.
5.2.1
Identifying Stakeholders
Sommerville and Sawyer [Som97] define a stakeholder as “anyone who benefits
in a direct or indirect way from the system which is being developed.” I have already
CHAPTER 5
UNDERSTANDING REQUIREMENTS

Requirements Engineering
Objective: Requirements engineering tools
assist in requirements gathering, requirements
modeling, requirements management, and requirements
validation.
Mechanics: Tool mechanics vary. In general,
requirements engineering tools build a variety of
graphical (e.g., UML) models that depict the informational,
functional, and behavioral aspects of a system. These
models form the basis for all other activities in the
software process.
Representative Tools:7
A reasonably comprehensive (and up-to-date) listing of
requirements engineering tools can be found at the Volvere
Requirements resources site at www.volere.co.uk/
tools.htm. Requirements modeling tools are discussed in
Chapters 6 and 7. Tools noted below focus on requirement
management.
EasyRM, developed by Cybernetic Intelligence GmbH
(www.easy-rm.com), builds a project-specific
dictionary/glossary that contains detailed requirements
descriptions and attributes.
Rational RequisitePro, developed by Rational Software
(www-306.ibm.com/software/awdtools/
reqpro/), allows users to build a requirements
database; represent relationships among requirements;
and organize, prioritize, and trace requirements.
Many additional requirements management tools can be
found at the Volvere site noted earlier and at 
www.jiludwig.com/Requirements_
Management_Tools.html.
SOFTWARE TOOLS

Tools noted here do not represent an endorsement, but rather a sampling of tools in this category.
In most cases, tool names are trademarked by their respective developers.

This approach is strongly recommended for projects that adopt an agile software development
philosophy.
A stakeholder is
anyone who has a
direct interest in or
benefits from the
system that is to be
developed.

identified the usual suspects: business operations managers, product managers,
marketing people, internal and external customers, end users, consultants, product
engineers, software engineers, support and maintenance engineers, and others.
Each stakeholder has a different view of the system, achieves different benefits when
the system is successfully developed, and is open to different risks if the development
effort should fail.
At inception, you should create a list of people who will contribute input as re-
quirements are elicited (Section 5.3). The initial list will grow as stakeholders are
contacted because every stakeholder will be asked: “Whom else do you think I
should talk to?”
5.2.2
Recognizing Multiple Viewpoints
Because many different stakeholders exist, the requirements of the system will be
explored from many different points of view. For example, the marketing group is in-
terested in functions and features that will excite the potential market, making the
new system easy to sell. Business managers are interested in a feature set that can
be built within budget and that will be ready to meet defined market windows. End
users may want features that are familiar to them and that are easy to learn and use.
Software engineers may be concerned with functions that are invisible to nontech-
nical stakeholders but that enable an infrastructure that supports more marketable
functions and features. Support engineers may focus on the maintainability of the
software.
Each of these constituencies (and others) will contribute information to the re-
quirements engineering process. As information from multiple viewpoints is col-
lected, emerging requirements may be inconsistent or may conflict with one
another. You should categorize all stakeholder information (including inconsistent
and conflicting requirements) in a way that will allow decision makers to choose an
internally consistent set of requirements for the system.
5.2.3
Working toward Collaboration
If five stakeholders are involved in a software project, you may have five (or more)
different opinions about the proper set of requirements. Throughout earlier chapters,
I have noted that customers (and other stakeholders) must collaborate among them-
selves (avoiding petty turf battles) and with software engineering practitioners if a
successful system is to result. But how is this collaboration accomplished?
The job of a requirements engineer is to identify areas of commonality (i.e., re-
quirements on which all stakeholders agree) and areas of conflict or inconsistency
(i.e., requirements that are desired by one stakeholder but conflict with the
needs of another stakeholder). It is, of course, the latter category that presents a
challenge.

PART TWO
MODELING
uote:
“Put three
stakeholders in a
room and ask them
what kind of
system they want.
You’re likely to get
four or more
different opinions.”
Author unknown

Collaboration does not necessarily mean that requirements are defined by
committee. In many cases, stakeholders collaborate by providing their view of
requirements, but a strong “project champion”(e.g., a business manager or a senior
technologist) may make the final decision about which requirements make the cut.
5.2.4
Asking the First Questions
Questions asked at the inception of the project should be “context free” [Gau89]. The
first set of context-free questions focuses on the customer and other stakeholders,
the overall project goals and benefits. For example, you might ask:
• Who is behind the request for this work?
• Who will use the solution?
• What will be the economic benefit of a successful solution?
• Is there another source for the solution that you need?
These questions help to identify all stakeholders who will have interest in the
software to be built. In addition, the questions identify the measurable benefit of
a successful implementation and possible alternatives to custom software devel-
opment.
The next set of questions enables you to gain a better understanding of the prob-
lem and allows the customer to voice his or her perceptions about a solution:
• How would you characterize “good” output that would be generated by a
successful solution?
• What problem(s) will this solution address?
• Can you show me (or describe) the business environment in which the
solution will be used?
• Will special performance issues or constraints affect the way the solution is
approached?
CHAPTER 5
UNDERSTANDING REQUIREMENTS

INFO
uote:
“It is better to
know some of the
questions than all
of the answers.”
James Thurber
What
questions
will help you gain
a preliminary
understanding of
the problem?
?
Using “Priority Points”
One way of resolving conflicting
requirements and at the same time better
understanding the relative importance of all requirements
is to use a “voting” scheme based on priority points.
All stakeholders are provided with some number of
priority points that can be “spent” on any number of
requirements. A list of requirements is presented, and
each stakeholder indicates the relative importance of
each (from his or her viewpoint) by spending one or
more priority points on it. Points spent cannot be reused.
Once a stakeholder’s priority points are exhausted,
no further action on requirements can be taken by that
person. Overall points spent on each requirement by
all stakeholders provide an indication of the overall
importance of each requirement.

The final set of questions focuses on the effectiveness of the communication
activity itself. Gause and Weinberg [Gau89] call these “meta-questions” and propose
the following (abbreviated) list:
• Are you the right person to answer these questions? Are your answers
“official”?
• Are my questions relevant to the problem that you have?
• Am I asking too many questions?
• Can anyone else provide additional information?
• Should I be asking you anything else?
These questions (and others) will help to “break the ice” and initiate the communi-
cation that is essential to successful elicitation. But a question-and-answer meeting
format is not an approach that has been overwhelmingly successful. In fact, the Q&A
session should be used for the first encounter only and then replaced by a require-
ments elicitation format that combines elements of problem solving, negotiation,
and specification. An approach of this type is presented in Section 5.3.
5.3
ELICITING REQUIREMENTS
Requirements elicitation (also called requirements gathering) combines elements of
problem solving, elaboration, negotiation, and specification. In order to encourage
a collaborative, team-oriented approach to requirements gathering, stakeholders
work together to identify the problem, propose elements of the solution, negotiate
different approaches and specify a preliminary set of solution requirements [Zah90].9
5.3.1
Collaborative Requirements Gathering
Many different approaches to collaborative requirements gathering have been pro-
posed. Each makes use of a slightly different scenario, but all apply some variation
on the following basic guidelines:
• Meetings are conducted and attended by both software engineers and other
stakeholders.
• Rules for preparation and participation are established.
• An agenda is suggested that is formal enough to cover all important points
but informal enough to encourage the free flow of ideas.
• A “facilitator” (can be a customer, a developer, or an outsider) controls the
meeting.
• A “definition mechanism” (can be work sheets, flip charts, or wall stickers or
an electronic bulletin board, chat room, or virtual forum) is used.

PART TWO
MODELING

This approach is sometimes called a facilitated application specification technique (FAST).
uote:
“He who asks a
question is a fool
for five minutes;
he who does not
ask a question is a
fool forever.”
Chinese proverb
What are 
the basic
guidelines for
conducting a
collaborative
requirements
gathering
meeting?
?

The goal is to identify the problem, propose elements of the solution, negotiate
different approaches, and specify a preliminary set of solution requirements in an at-
mosphere that is conducive to the accomplishment of the goal. To better understand
the flow of events as they occur, I present a brief scenario that outlines the sequence
of events that lead up to the requirements gathering meeting, occur during the meet-
ing, and follow the meeting.
During inception (Section 5.2) basic questions and answers establish the scope of
the problem and the overall perception of a solution. Out of these initial meetings,
the developer and customers write a one- or two-page “product request.” 
A meeting place, time, and date are selected; a facilitator is chosen; and attendees
from the software team and other stakeholder organizations are invited to partici-
pate. The product request is distributed to all attendees before the meeting date.
As an example,10 consider an excerpt from a product request written by a mar-
keting person involved in the SafeHome project. This person writes the following nar-
rative about the home security function that is to be part of SafeHome:
Our research indicates that the market for home management systems is growing at a
rate of 40 percent per year. The first SafeHome function we bring to market should be the
home security function. Most people are familiar with “alarm systems” so this would be
an easy sell.
The home security function would protect against and/or recognize a variety of un-
desirable “situations” such as illegal entry, fire, flooding, carbon monoxide levels, and
others. It’ll use our wireless sensors to detect each situation. It can be programmed by the
homeowner, and will automatically telephone a monitoring agency when a situation is
detected.
In reality, others would contribute to this narrative during the requirements gath-
ering meeting and considerably more information would be available. But even with
additional information, ambiguity would be present, omissions would likely exist,
and errors might occur. For now, the preceding “functional description” will suffice.
While reviewing the product request in the days before the meeting, each at-
tendee is asked to make a list of objects that are part of the environment that sur-
rounds the system, other objects that are to be produced by the system, and objects
that are used by the system to perform its functions. In addition, each attendee is
asked to make another list of services (processes or functions) that manipulate or in-
teract with the objects. Finally, lists of constraints (e.g., cost, size, business rules) and
performance criteria (e.g., speed, accuracy) are also developed. The attendees are in-
formed that the lists are not expected to be exhaustive but are expected to reflect
each person’s perception of the system.
CHAPTER 5
UNDERSTANDING REQUIREMENTS

uote:
“We spend a lot of
time—the
majority of project
effort—not
implementing or
testing, but trying
to decide what to
build.”
Brian Lawrence
WebRef
Joint Application
Development (JAD) is
a popular technique 
for requirements
gathering. A good
description can be
found at
www.carolla.com/
wp-jad.htm.
If a system or product
will serve many users,
be absolutely certain
that requirements are
elicited from a repre-
sentative cross section
of users. If only one
user defines all require-
ments, acceptance risk
is high.
10 This example (with extensions and variations) is used to illustrate important software engineering
methods in many of the chapters that follow. As an exercise, it would be worthwhile to conduct
your own requirements gathering meeting and develop a set of lists for it.

Objects described for SafeHome might include the control panel, smoke detectors,
window and door sensors, motion detectors, an alarm, an event (a sensor has been
activated), a display, a PC, telephone numbers, a telephone call, and so on. The list
of services might include configuring the system, setting the alarm, monitoring the
sensors, dialing the phone, programming the control panel, and reading the display
(note that services act on objects). In a similar fashion, each attendee will develop
lists of constraints (e.g., the system must recognize when sensors are not operating,
must be user-friendly, must interface directly to a standard phone line) and perform-
ance criteria (e.g., a sensor event should be recognized within one second, and an
event priority scheme should be implemented).
The lists of objects can be pinned to the walls of the room using large sheets of
paper, stuck to the walls using adhesive-backed sheets, or written on a wall board.
Alternatively, the lists may have been posted on an electronic bulletin board, at an
internal website, or posed in a chat room environment for review prior to the meet-
ing. Ideally, each listed entry should be capable of being manipulated separately so
that lists can be combined, entries can be modified, and additions can be made. At
this stage, critique and debate are strictly prohibited.
After individual lists are presented in one topic area, the group creates a com-
bined list by eliminating redundant entries, adding any new ideas that come up dur-
ing the discussion, but not deleting anything. After you create combined lists for all
topic areas, discussion—coordinated by the facilitator—ensues. The combined list is
shortened, lengthened, or reworded to properly reflect the product/system to be de-
veloped. The objective is to develop a consensus list of objects, services, constraints,
and performance for the system to be built.
In many cases, an object or service described on a list will require further expla-
nation. To accomplish this, stakeholders develop mini-specifications for entries on
the lists.11 Each mini-specification is an elaboration of an object or service. For
example, the mini-spec for the SafeHome object Control Panel might be:
The control panel is a wall-mounted unit that is approximately 9  5 inches in size. The
control panel has wireless connectivity to sensors and a PC. User interaction occurs
through a keypad containing 12 keys. A 3  3 inch LCD color display provides user feed-
back. Software provides interactive prompts, echo, and similar functions.
The mini-specs are presented to all stakeholders for discussion. Additions, deletions,
and further elaboration are made. In some cases, the development of mini-specs will
uncover new objects, services, constraints, or performance requirements that will be
added to the original lists. During all discussions, the team may raise an issue that
cannot be resolved during the meeting. An issues list is maintained so that these
ideas will be acted on later.

PART TWO
MODELING
Avoid the impulse to
shoot down a cus-
tomer’s idea as “too
costly” or “impracti-
cal.” The idea here is
to negotiate a list that
is acceptable to all. To
do this, you must keep
an open mind.
11 Rather than creating a mini-specification, many software teams elect to develop user scenarios
called use cases. These are considered in detail in Section 5.4 and in Chapter 6.
uote:
“Facts do not cease
to exist because
they are ignored.”
Aldous Huxley

5.3.2
Quality Function Deployment
Quality function deployment (QFD) is a quality management technique that translates
the needs of the customer into technical requirements for software. QFD “concen-
trates on maximizing customer satisfaction from the software engineering process”
[Zul92]. To accomplish this, QFD emphasizes an understanding of what is valuable
to the customer and then deploys these values throughout the engineering process.
QFD identifies three types of requirements [Zul92]:
Normal requirements.
The objectives and goals that are stated for a prod-
uct or system during meetings with the customer. If these requirements are
present, the customer is satisfied. Examples of normal requirements might be
requested types of graphical displays, specific system functions, and defined
levels of performance.
Expected requirements.
These requirements are implicit to the product
or system and may be so fundamental that the customer does not explicitly
state them. Their absence will be a cause for significant dissatisfaction.
Examples of expected requirements are: ease of human/machine interaction,
overall operational correctness and reliability, and ease of software
installation.
CHAPTER 5
UNDERSTANDING REQUIREMENTS

The scene: A meeting room. The first
requirements gathering meeting is in progress.
The players: Jamie Lazar, software team member;
Vinod Raman, software team member; Ed Robbins,
software team member; Doug Miller, software
engineering manager; three members of marketing; a
product engineering representative; and a facilitator.
The conversation:
Facilitator (pointing at whiteboard): So that’s the
current list of objects and services for the home security
function.
Marketing person: That about covers it from our
point of view.
Vinod: Didn’t someone mention that they wanted all
SafeHome functionality to be accessible via the Internet?
That would include the home security function, no?
Marketing person: Yes, that’s right . . . we’ll have to
add that functionality and the appropriate objects.
Facilitator: Does that also add some constraints?
Jamie: It does, both technical and legal.
Production rep: Meaning?
Jamie: We better make sure an outsider can’t hack into
the system, disarm it, and rob the place or worse. Heavy
liability on our part.
Doug: Very true.
Marketing: But we still need that . . . just be sure to stop
an outsider from getting in.
Ed: That’s easier said than done and . . .
Facilitator (interrupting): I don’t want to debate this
issue now. Let’s note it as an action item and proceed.
(Doug, serving as the recorder for the meeting, makes an
appropriate note.)
Facilitator: I have a feeling there’s still more to consider
here.
(The group spends the next 20 minutes refining and
expanding the details of the home security function.)
SAFEHOME
QFD defines require-
ments in a way that
maximizes customer
satisfaction.
Everyone wants to
implement lots of
exciting requirements,
but be careful. That’s
how “requirements
creep” sets in. On the
other hand, exciting
requirements lead to a
breakthrough product!
Conducting a Requirements Gathering Meeting

Exciting requirements.
These features go beyond the customer’s expecta-
tions and prove to be very satisfying when present. For example, software for
a new mobile phone comes with standard features, but is coupled with a set
of unexpected capabilities (e.g., multitouch screen, visual voice mail) that
delight every user of the product.
Although QFD concepts can be applied across the entire software process [Par96a],
specific QFD techniques are applicable to the requirements elicitation activity. QFD
uses customer interviews and observation, surveys, and examination of historical
data (e.g., problem reports) as raw data for the requirements gathering activity.
These data are then translated into a table of requirements—called the customer
voice table—that is reviewed with the customer and other stakeholders. A variety of
diagrams, matrices, and evaluation methods are then used to extract expected re-
quirements and to attempt to derive exciting requirements [Aka04].
5.3.3
Usage Scenarios
As requirements are gathered, an overall vision of system functions and features be-
gins to materialize. However, it is difficult to move into more technical software en-
gineering activities until you understand how these functions and features will be
used by different classes of end users. To accomplish this, developers and users can
create a set of scenarios that identify a thread of usage for the system to be con-
structed. The scenarios, often called use cases [Jac92], provide a description of how
the system will be used. Use cases are discussed in greater detail in Section 5.4.

PART TWO
MODELING
WebRef
Useful information on
QFD can be obtained at
www.qfdi.org.
The scene: A meeting room,
continuing the first requirements gathering meeting.
The players: Jamie Lazar, software team member;
Vinod Raman, software team member; Ed Robbins,
software team member; Doug Miller, software
engineering manager; three members of marketing; a
product engineering representative; and a facilitator.
The conversation:
Facilitator: We’ve been talking about security for
access to SafeHome functionality that will be accessible
via the Internet. I’d like to try something. Let’s develop a
usage scenario for access to the home security function.
Jamie: How?
Facilitator: We can do it a couple of different ways, but
for now, I’d like to keep things really informal. Tell us (he
points at a marketing person) how you envision accessing
the system.
Marketing person: Um . . . well, this is the kind of
thing I’d do if I was away from home and I had to let
someone into the house, say a housekeeper or repair guy,
who didn’t have the security code.
Facilitator (smiling): That’s the reason you’d do it . . .
tell me how you’d actually do this.
Marketing person: Um . . . the first thing I’d need is a
PC. I’d log on to a website we’d maintain for all users of
SafeHome. I’d provide my user id and . . .
Vinod (interrupting): The Web page would have to be
secure, encrypted, to guarantee that we’re safe and . . .
Facilitator (interrupting): That’s good information,
Vinod, but it’s technical. Let’s just focus on how the end
user will use this capability. OK?
Vinod: No problem.
Marketing person: So as I was saying, I’d log on to a
website and provide my user ID and two levels of passwords.
SAFEHOME
Developing a Preliminary User Scenario

5.3.4
Elicitation Work Products
The work products produced as a consequence of requirements elicitation will vary
depending on the size of the system or product to be built. For most systems, the
work products include
• A statement of need and feasibility.
• A bounded statement of scope for the system or product.
• A list of customers, users, and other stakeholders who participated in
requirements elicitation.
• A description of the system’s technical environment.
• A list of requirements (preferably organized by function) and the domain
constraints that apply to each.
• A set of usage scenarios that provide insight into the use of the system or
product under different operating conditions.
• Any prototypes developed to better define requirements.
Each of these work products is reviewed by all people who have participated in re-
quirements elicitation.
5.4
DEVELOPING USE CASES
In a book that discusses how to write effective use cases, Alistair Cockburn
[Coc01b] notes that “a use case captures a contract ... [that] describes the system’s
behavior under various conditions as the system responds to a request from one of
its stakeholders . . .” In essence, a use case tells a stylized story about how an end
user (playing one of a number of possible roles) interacts with the system under a
specific set of circumstances. The story may be narrative text, an outline of tasks
or interactions, a template-based description, or a diagrammatic representation.
Regardless of its form, a use case depicts the software or system from the end
user’s point of view.
CHAPTER 5
UNDERSTANDING REQUIREMENTS

Jamie: What if I forget my password?
Facilitator (interrupting): Good point, Jamie, but
let’s not address that now. We’ll make a note of that and
call it an exception. I’m sure there’ll be others.
Marketing person: After I enter the passwords, a
screen representing all SafeHome functions will appear.
I’d select the home security function. The system might
request that I verify who I am, say, by asking for my
address or phone number or something. It would then
display a picture of the security system control panel
along with a list of functions that I can perform—arm the
system, disarm the system, disarm one or more sensors.
I suppose it might also allow me to reconfigure security
zones and other things like that, but I’m not sure.
(As the marketing person continues talking, Doug takes
copious notes; these form the basis for the first informal
usage scenario. Alternatively, the marketing person could
have been asked to write the scenario, but this would be
done outside the meeting.)
What
information
is produced as a
consequence of
requirements
gathering?
?

The first step in writing a use case is to define the set of “actors” that will be
involved in the story. Actors are the different people (or devices) that use the system
or product within the context of the function and behavior that is to be described.
Actors represent the roles that people (or devices) play as the system operates.
Defined somewhat more formally, an actor is anything that communicates with the
system or product and that is external to the system itself. Every actor has one or
more goals when using the system.
It is important to note that an actor and an end user are not necessarily the same
thing. A typical user may play a number of different roles when using a system,
whereas an actor represents a class of external entities (often, but not always, peo-
ple) that play just one role in the context of the use case. As an example, consider a
machine operator (a user) who interacts with the control computer for a manufac-
turing cell that contains a number of robots and numerically controlled machines.
After careful review of requirements, the software for the control computer requires
four different modes (roles) for interaction: programming mode, test mode, moni-
toring mode, and troubleshooting mode. Therefore, four actors can be defined: pro-
grammer, tester, monitor, and troubleshooter. In some cases, the machine operator
can play all of these roles. In others, different people may play the role of each actor.
Because requirements elicitation is an evolutionary activity, not all actors are
identified during the first iteration. It is possible to identify primary actors [Jac92]
during the first iteration and secondary actors as more is learned about the system.
Primary actors interact to achieve required system function and derive the intended
benefit from the system. They work directly and frequently with the software.
Secondary actors support the system so that primary actors can do their work.
Once actors have been identified, use cases can be developed. Jacobson [Jac92]
suggests a number of questions12 that should be answered by a use case:
• Who is the primary actor, the secondary actor(s)?
• What are the actor’s goals?
• What preconditions should exist before the story begins?
• What main tasks or functions are performed by the actor?
• What exceptions might be considered as the story is described?
• What variations in the actor’s interaction are possible?
• What system information will the actor acquire, produce, or change?
• Will the actor have to inform the system about changes in the external
environment?
• What information does the actor desire from the system?
• Does the actor wish to be informed about unexpected changes?

PART TWO
MODELING
Use cases are defined
from an actor’s point
of view. An actor is
a role that people
(users) or devices play
as they interact with
the software.
WebRef
An excellent paper on
use cases can be
downloaded from
www.ibm.com/
developerworks/
webservices/
library/
codesign7.html.
What do I
need to
know in order to
develop an
effective use
case?
?
12 Jacobson’s questions have been extended to provide a more complete view of use-case content.

Recalling basic SafeHome requirements, we define four actors: homeowner
(a user), setup manager (likely the same person as homeowner, but playing a dif-
ferent role), sensors (devices attached to the system), and the monitoring and
response subsystem (the central station that monitors the SafeHome home secu-
rity function). For the purposes of this example, we consider only the homeowner
actor. The homeowner actor interacts with the home security function in a number
of different ways using either the alarm control panel or a PC:
• Enters a password to allow all other interactions.
• Inquires about the status of a security zone.
• Inquires about the status of a sensor.
• Presses the panic button in an emergency.
• Activates/deactivates the security system.
Considering the situation in which the homeowner uses the control panel, the basic
use case for system activation follows:13
1. The homeowner observes the SafeHome control panel (Figure 5.1) to determine if the
system is ready for input. If the system is not ready, a not ready message is displayed
on the LCD display, and the homeowner must physically close windows or doors so
that the not ready message disappears. [A not ready message implies that a sensor is
open; i.e., that a door or window is open.]
CHAPTER 5
UNDERSTANDING REQUIREMENTS

*

off
SAFEHOME
away
stay
max
test
bypass
instant
code
chime
ready
#
armed
power
alarm
check
fire
away
stay
instant
bypass
not ready
panic
FIGURE 5.1
SafeHome
control panel
13 Note that this use case differs from the situation in which the system is accessed via the Internet.
In this case, interaction occurs via the control panel, not the graphical user interface (GUI) provided
when a PC is used.

2. The homeowner uses the keypad to key in a four-digit password. The password is com-
pared with the valid password stored in the system. If the password is incorrect, the con-
trol panel will beep once and reset itself for additional input. If the password is correct,
the control panel awaits further action.
3. The homeowner selects and keys in stay or away (see Figure 5.1) to activate the system.
Stay activates only perimeter sensors (inside motion detecting sensors are deacti-
vated). Away activates all sensors.
4. When activation occurs, a red alarm light can be observed by the homeowner.
The basic use case presents a high-level story that describes the interaction between
the actor and the system.
In many instances, uses cases are further elaborated to provide considerably
more detail about the interaction. For example, Cockburn [Coc01b] suggests the fol-
lowing template for detailed descriptions of use cases:
Use case:
InitiateMonitoring
Primary actor:
Homeowner.
Goal in context:
To set the system to monitor sensors when the homeowner
leaves the house or remains inside.
Preconditions:
System has been programmed for a password and to recognize
various sensors.
Trigger:
The homeowner decides to “set” the system, i.e., to turn on the
alarm functions.
Scenario:
1. Homeowner: observes control panel
2. Homeowner: enters password
3. Homeowner: selects “stay” or “away”
4. Homeowner: observes read alarm light to indicate that SafeHome has been armed
Exceptions:
1. Control panel is not ready: homeowner checks all sensors to determine which are
open; closes them.
2. Password is incorrect (control panel beeps once): homeowner reenters correct password.
3. Password not recognized: monitoring and response subsystem must be contacted to
reprogram password.
4. Stay is selected: control panel beeps twice and a stay light is lit; perimeter sensors are
activated.
5. Away is selected: control panel beeps three times and an away light is lit; all sensors
are activated.
Priority:
Essential, must be implemented
When available:
First increment

PART TWO
MODELING
Use cases are often
written informally.
However, use the tem-
plate shown here to
ensure that you’ve
addressed all key
issues.

Frequency of use:
Many times per day
Channel to actor:
Via control panel interface
Secondary actors:
Support technician, sensors
Channels to secondary actors:
Support technician: phone line
Sensors: hardwired and radio frequency interfaces
Open issues:
1. Should there be a way to activate the system without the use of a password or with an
abbreviated password?
2. Should the control panel display additional text messages?
3. How much time does the homeowner have to enter the password from the time the
first key is pressed?
4. Is there a way to deactivate the system before it actually activates?
Use cases for other homeowner interactions would be developed in a similar manner.
It is important to review each use case with care. If some element of the interaction
is ambiguous, it is likely that a review of the use case will indicate a problem.
CHAPTER 5
UNDERSTANDING REQUIREMENTS

The scene: A meeting room,
continuing the requirements gathering meeting
The players: Jamie Lazar, software team member;
Vinod Raman, software team member; Ed Robbins,
software team member; Doug Miller, software
engineering manager; three members of marketing; a
product engineering representative; and a facilitator.
The conversation:
Facilitator: We’ve spent a fair amount of time talking
about SafeHome home security functionality. During the
break I sketched a use case diagram to summarize the
important scenarios that are part of this function. Take
a look.
(All attendees look at Figure 5.2.)
Jamie: I’m just beginning to learn UML notation.14 So
the home security function is represented by the big box
with the ovals inside it? And the ovals represent use cases
that we’ve written in text?
Facilitator: Yep. And the stick figures represent actors—
the people or things that interact with the system as described
by the use case . . . oh, I use the labeled square to represent
an actor that’s not a person . . . in this case, sensors.
Doug: Is that legal in UML?
Facilitator: Legality isn’t the issue. The point is to
communicate information. I view the use of a humanlike
stick figure for representing a device to be misleading. So
I’ve adapted things a bit. I don’t think it creates a problem.
Vinod: Okay, so we have use-case narratives for each
of the ovals. Do we need to develop the more detailed
template-based narratives I’ve read about?
Facilitator: Probably, but that can wait until we’ve
considered other SafeHome functions.
Marketing person: Wait, I’ve been looking at this
diagram and all of a sudden I realize we missed something.
Facilitator: Oh really. Tell me what we’ve missed.
(The meeting continues.)
SAFEHOME
14 A brief UML tutorial is presented in Appendix 1 for those who are unfamiliar with the notation.
Developing a High-Level Use-Case Diagram

PART TWO
MODELING
15 Tools noted here do not represent an endorsement, but rather a sampling of tools in this category.
In most cases, tool names are trademarked by their respective developers.
16 Throughout this book, I use the terms analysis model and requirements model synonymously. Both
refer to representations of the information, functional, and behavioral domains that describe prob-
lem requirements.
Use-Case Development
Objective: Assist in the development of
use cases by providing automated templates
and mechanisms for assessing clarity and consistency.
Mechanics: Tool mechanics vary. In general, use-case
tools provide fill-in-the-blank templates for creating effective
use cases. Most use-case functionality is embedded into a
set of broader requirements engineering functions.
Representative Tools:15
The vast majority of UML-based analysis modeling tools
provide both text and graphical support for use-case
development and modeling.
Objects by Design
(www.objectsbydesign.com/tools/
umltools_byCompany.html) provides
comprehensive links to tools of this type.
SOFTWARE TOOLS
5.5
BUILDING THE REQUIREMENTS MODEL 1 6
The intent of the analysis model is to provide a description of the required informational,
functional, and behavioral domains for a computer-based system. The model changes
dynamically as you learn more about the system to be built, and other stakeholders un-
derstand more about what they really require. For that reason, the analysis model is a
snapshot of requirements at any given time. You should expect it to change.
Homeowner
System 
administrator
Arms/disarms
system
Responds to 
alarm event
Accesses
system
via Internet
Encounters
an error
condition
Reconfigures
sensors and
related 
system features
Sensors
FIGURE 5.2
UML use case
diagram for
SafeHome
home security
function

As the requirements model evolves, certain elements will become relatively
stable, providing a solid foundation for the design tasks that follow. However, other
elements of the model may be more volatile, indicating that stakeholders do not yet
fully understand requirements for the system. The analysis model and the methods
that are used to build it are presented in detail in Chapters 6 and 7. I present a brief
overview in the sections that follow.
5.5.1
Elements of the Requirements Model
There are many different ways to look at the requirements for a computer-based
system. Some software people argue that it’s best to select one mode of represen-
tation (e.g., the use case) and apply it to the exclusion of all other modes. Other
practitioners believe that it’s worthwhile to use a number of different modes of rep-
resentation to depict the requirements model. Different modes of representation
force you to consider requirements from different viewpoints—an approach that has
a higher probability of uncovering omissions, inconsistencies, and ambiguity.
The specific elements of the requirements model are dictated by the analysis
modeling method (Chapters 6 and 7) that is to be used. However, a set of generic
elements is common to most requirements models.
Scenario-based elements.
The system is described from the user’s point of view
using a scenario-based approach. For example, basic use cases (Section 5.4) and
their corresponding use-case diagrams (Figure 5.2) evolve into more elaborate
template-based use cases. Scenario-based elements of the requirements model
are often the first part of the model that is developed. As such, they serve as input for
the creation of other modeling elements. Figure 5.3 depicts a UML activity diagram17
for eliciting requirements and representing them using use cases. Three levels of
elaboration are shown, culminating in a scenario-based representation.
Class-based elements.
Each usage scenario implies a set of objects that are
manipulated as an actor interacts with the system. These objects are categorized into
classes—a collection of things that have similar attributes and common behaviors. For
example, a UML class diagram can be used to depict a Sensor class for the SafeHome
security function (Figure 5.4). Note that the diagram lists the attributes of sensors (e.g.,
name, type) and the operations (e.g., identify, enable) that can be applied to modify
these attributes. In addition to class diagrams, other analysis modeling elements de-
pict the manner in which classes collaborate with one another and the relationships
and interactions between classes. These are discussed in more detail in Chapter 7.
Behavioral elements.
The behavior of a computer-based system can have a pro-
found effect on the design that is chosen and the implementation approach that is
applied. Therefore, the requirements model must provide modeling elements that
depict behavior.
CHAPTER 5
UNDERSTANDING REQUIREMENTS

17 A brief UML tutorial is presented in Appendix 1 for those who are unfamiliar with the notation.
It is always a good
idea to get stakehold-
ers involved. One of
the best ways to do
this is to have each
stakeholder write use
cases that describe
how the software will
be used.
One way to isolate
classes is to look for
descriptive nouns in a
use-case script. At least
some of the nouns will
be candidate classes.
More on this in the
Chapter 8.

PART TWO
MODELING
Formal prioritization?
Yes
No
Conduct
meetings
Make lists of 
functions, classes
Make lists of 
constraints, etc.
  
Use QFD to
prioritize 
requirements
Informally
prioritize 
requirements
Create
use cases
Draw use-case
diagram
Define
actors
Write
scenario
Complete
template
Elicit requirements
FIGURE 5.3
UML activity
diagrams for
eliciting
requirements
Name
Type
Location
Area
Characteristics
Identify()
Enable()
Disable()
Reconfigure()
Sensor
FIGURE 5.4
Class diagram
for sensor
A state is an externally
observable mode of
behavior. External
stimuli cause transi-
tions between states.
The state diagram is one method for representing the behavior of a system by de-
picting its states and the events that cause the system to change state. A state is any
externally observable mode of behavior. In addition, the state diagram indicates
actions (e.g., process activation) taken as a consequence of a particular event.
To illustrate the use of a state diagram, consider software embedded within the
SafeHome control panel that is responsible for reading user input. A simplified UML
state diagram is shown in Figure 5.5.

Flow-oriented elements. Information is transformed as it flows through a
computer-based system. The system accepts input in a variety of forms, applies func-
tions to transform it, and produces output in a variety of forms. Input may be a control
signal transmitted by a transducer, a series of numbers typed by a human operator, a
CHAPTER 5
UNDERSTANDING REQUIREMENTS

The scene: A meeting room,
continuing the requirements meeting.
The players: Jamie Lazar, software team member;
Vinod Raman, software team member; Ed Robbins,
software team member; Doug Miller, software
engineering manager; three members of marketing;
a product engineering representative; and a facilitator.
The conversation:
Facilitator: We’ve just about finished talking about
SafeHome home security functionality. But before we do,
I want to discuss the behavior of the function.
Marketing person: I don’t understand what you mean
by behavior.
Ed (smiling): That’s when you give the product a
“timeout” if it misbehaves.
Facilitator: Not exactly. Let me explain.
(The facilitator explains the basics of behavioral modeling
to the requirements gathering team.)
Marketing person: This seems a little technical. I’m
not sure I can help here.
Facilitator: Sure you can. What behavior do you
observe from the user’s point of view?
Marketing person: Uh . . . well, the system will be
monitoring the sensors. It’ll be reading commands from
the homeowner. It’ll be displaying its status.
Facilitator: See, you can do it.
Jamie: It’ll also be polling the PC to determine if there is
any input from it, for example, Internet-based access or
configuration information.
Vinod: Yeah, in fact, configuring the system is a state in
its own right.
Doug: You guys are rolling. Let’s give this a bit more
thought . . . is there a way to diagram this stuff?
Facilitator: There is, but let’s postpone that until after
the meeting.
SAFEHOME
System status = "Ready"
Display msg = "enter cmd"
Display status = steady
State name
State variables
State activities
Entry/subsystems ready
Do: poll user input panel
Do: read user input
Do: interpret user input
Reading
commands
FIGURE 5.5
UML state
diagram
notation
In addition to behavioral representations of the system as a whole, the behavior
of individual classes can also be modeled. Further discussion of behavioral model-
ing is presented in Chapter 7.
Preliminary Behavioral Modeling

packet of information transmitted on a network link, or a voluminous data file
retrieved from secondary storage. The transform(s) may comprise a single logical
comparison, a complex numerical algorithm, or a rule-inference approach of an expert
system. Output may light a single LED or produce a 200-page report. In effect, we can
create a flow model for any computer-based system, regardless of size and complex-
ity. A more detailed discussion of flow modeling is presented in Chapter 7.
5.5.2
Analysis Patterns
Anyone who has done requirements engineering on more than a few software
projects begins to notice that certain problems reoccur across all projects within a
specific application domain.18 These analysis patterns [Fow97] suggest solutions
(e.g., a class, a function, a behavior) within the application domain that can be
reused when modeling many applications.
Geyer-Schulz and Hahsler [Gey01] suggest two benefits that can be associated
with the use of analysis patterns:
First, analysis patterns speed up the development of abstract analysis models that cap-
ture the main requirements of the concrete problem by providing reusable analysis mod-
els with examples as well as a description of advantages and limitations. Second, analysis
patterns facilitate the transformation of the analysis model into a design model by sug-
gesting design patterns and reliable solutions for common problems.
Analysis patterns are integrated into the analysis model by reference to the pattern
name. They are also stored in a repository so that requirements engineers can use
search facilities to find and apply them. Information about an analysis pattern (and
other types of patterns) is presented in a standard template [Gey01]19 that is dis-
cussed in more detail in Chapter 12. Examples of analysis patterns and further dis-
cussion of this topic are presented in Chapter 7.
5.6
NEGOTIATING REQUIREMENTS
In an ideal requirements engineering context, the inception, elicitation, and elabo-
ration tasks determine customer requirements in sufficient detail to proceed to sub-
sequent software engineering activities. Unfortunately, this rarely happens. In reality,
you may have to enter into a negotiation with one or more stakeholders. In most
cases, stakeholders are asked to balance functionality, performance, and other prod-
uct or system characteristics against cost and time-to-market. The intent of this
negotiation is to develop a project plan that meets stakeholder needs while at the

PART TWO
MODELING
18 In some cases, problems reoccur regardless of the application domain. For example, the features
and functions used to solve user interface problems are common regardless of the application
domain under consideration.
19 A variety of patterns templates have been proposed in the literature. If you have interest, see
[Fow97], [Gam95], [Yac03], and [Bus07] among many sources.
uote:
“A compromise is
the art of dividing
a cake in such a
way that everyone
believes he has the
biggest piece.”
Ludwig Erhard

same time reflecting the real-world constraints (e.g., time, people, budget) that have
been placed on the software team.
The best negotiations strive for a “win-win” result.20 That is, stakeholders win by
getting the system or product that satisfies the majority of their needs and you (as a
member of the software team) win by working to realistic and achievable budgets
and deadlines.
Boehm [Boe98] defines a set of negotiation activities at the beginning of each soft-
ware process iteration. Rather than a single customer communication activity, the
following activities are defined:
1.
Identification of the system or subsystem’s key stakeholders.
2.
Determination of the stakeholders’ “win conditions.”
3.
Negotiation of the stakeholders’ win conditions to reconcile them into a set
of win-win conditions for all concerned (including the software team).
Successful completion of these initial steps achieves a win-win result, which becomes
the key criterion for proceeding to subsequent software engineering activities.
CHAPTER 5
UNDERSTANDING REQUIREMENTS

20 Dozens of books have been written on negotiating skills (e.g., [Lew06], [Rai06], [Fis06]). It is one of
the more important skills that you can learn. Read one.
WebRef
A brief paper on
negotiation for software
requirements can be
downloaded from
www.alexander-
egyed.com/
publications/
Software_
Requirements_
Negotiation-
Some_Lessons_
Learned.html.
The Art of Negotiation
Learning how to negotiate effectively can serve
you well throughout your personal and technical
life. The following guidelines are well worth considering:
1.
Recognize that it’s not a competition. To be
successful, both parties have to feel they’ve won or
achieved something. Both will have to compromise.
2.
Map out a strategy. Decide what you’d like to
achieve; what the other party wants to achieve, and
how you’ll go about making both happen.
3.
Listen actively. Don’t work on formulating your
response while the other party is talking. Listen
to her. It’s likely you’ll gain knowledge that will help
you to better negotiate your position.
4.
Focus on the other party’s interests. Don’t take hard
positions if you want to avoid conflict.
5.
Don’t let it get personal. Focus on the problem that
needs to be solved.
6.
Be creative. Don’t be afraid to think out of the box if
you’re at an impasse.
7.
Be ready to commit. Once an agreement has been
reached, don’t waffle; commit to it and move on.
INFO
The Start of a Negotiation
The scene: Lisa Perez’s office, after
the first requirements gathering meeting.
The players: Doug Miller, software engineering
manager and Lisa Perez, marketing manager.
The conversation:
Lisa: So, I hear the first meeting went really well.
Doug: Actually, it did. You sent some good people to the
meeting . . . they really contributed.
SAFEHOME

5.7
VALIDATING REQUIREMENTS

PART TWO
MODELING
When I
review
requirements,
what questions
should I ask?
?
As each element of the requirements model is created, it is examined for inconsis-
tency, omissions, and ambiguity. The requirements represented by the model are pri-
oritized by the stakeholders and grouped within requirements packages that will be
implemented as software increments. A review of the requirements model addresses
the following questions:
• Is each requirement consistent with the overall objectives for the
system/product?
• Have all requirements been specified at the proper level of abstraction? That
is, do some requirements provide a level of technical detail that is inappro-
priate at this stage?
• Is the requirement really necessary or does it represent an add-on feature
that may not be essential to the objective of the system?
• Is each requirement bounded and unambiguous?
• Does each requirement have attribution? That is, is a source (generally, a
specific individual) noted for each requirement?
• Do any requirements conflict with other requirements?
• Is each requirement achievable in the technical environment that will house
the system or product?
• Is each requirement testable, once implemented?
• Does the requirements model properly reflect the information, function, and
behavior of the system to be built?
Lisa (smiling): Yeah, they actually told me they got into
it and it wasn’t a “propeller head activity.”
Doug (laughing): I’ll be sure to take off my techie
beanie the next time I visit . . . Look, Lisa, I think we may
have a problem with getting all of the functionality for the
home security system out by the dates your management
is talking about. It’s early, I know, but I’ve already been
doing a little back-of-the-envelope planning and . . .
Lisa (frowning): We’ve got to have it by that date,
Doug. What functionality are you talking about?
Doug: I figure we can get full home security functionality
out by the drop-dead date, but we’ll have to delay
Internet access ‘til the second release.
Lisa: Doug, it’s the Internet access that gives SafeHome
“gee whiz” appeal. We’re going to build our entire
marketing campaign around it. We’ve gotta have it!
Doug: I understand your situation, I really do. The
problem is that in order to give you Internet access,
we’ll have to have a fully secure website up and
running. That takes time and people. We’ll also have
to build a lot of additional functionality into the first
release . . . I don’t think we can do it with the resources
we’ve got.
Lisa (still frowning): I see, but you’ve got to figure out
a way to get it done. It’s pivotal to home security functions
and to other functions as well . . . those can wait until the
next releases . . . I’ll agree to that.
Lisa and Doug appear to be at an impasse, and yet they
must negotiate a solution to this problem. Can they both
“win” here? Playing the role of a mediator, what would you
suggest?

• Has the requirements model been “partitioned” in a way that exposes
progressively more detailed information about the system?
• Have requirements patterns been used to simplify the requirements model?
Have all patterns been properly validated? Are all patterns consistent with
customer requirements?
These and other questions should be asked and answered to ensure that the re-
quirements model is an accurate reflection of stakeholder needs and that it provides
a solid foundation for design.
5.8
SUMMARY
Requirements engineering tasks are conducted to establish a solid foundation for de-
sign and construction. Requirements engineering occurs during the communication
and modeling activities that have been defined for the generic software process.
Seven distinct requirements engineering functions—inception, elicitation, elabora-
tion, negotiation, specification, validation, and management—are conducted by
members of the software team.
At project inception, stakeholders establish basic problem requirements, define
overriding project constraints, and address major features and functions that must
be present for the system to meet its objectives. This information is refined and ex-
panded during elicitation—a requirements gathering activity that makes use of facil-
itated meetings, QFD, and the development of usage scenarios.
Elaboration further expands requirements in a model—a collection of scenario-
based, class-based, behavioral, and flow-oriented elements. The model may refer-
ence analysis patterns, solutions for analysis problems that have been seen to
reoccur across different applications.
As requirements are identified and the requirements model is being created, the
software team and other project stakeholders negotiate the priority, availability, and
relative cost of each requirement. The intent of this negotiation is to develop a realis-
tic project plan. In addition, each requirement and the requirements model as a whole
are validated against customer need to ensure that the right system is to be built.
PROBLEMS AND POINTS TO PONDER
5.1. Why is it that many software developers don’t pay enough attention to requirements engi-
neering? Are there ever circumstances where you can skip it?
5.2. You have been given the responsibility to elicit requirements from a customer who tells
you he is too busy to meet with you. What should you do?
5.3. Discuss some of the problems that occur when requirements must be elicited from three
or four different customers.
5.4. Why do we say that the requirements model represents a snapshot of a system in time?
CHAPTER 5
UNDERSTANDING REQUIREMENTS

Target Document [software requirements specification]. Problems of size must be dealt
with using an effective method of partitioning. The Victorian novel specification is
out. Graphics have to be used whenever possible. We have to differentiate between log-
ical [essential] and physical [implementation] considerations. . . . At the very least, we
need. . . . Something to help us partition our requirements and document that partition-
ing before specification. . . . Some means of keeping track of and evaluating interfaces. . . .
New tools to describe logic and policy, something better than narrative text.
Although DeMarco wrote about the attributes of analysis modeling more than a
quarter century ago, his comments still apply to modern requirements modeling
methods and notation.
6.1
REQUIREMENTS ANALYSIS
Requirements analysis results in the specification of software’s operational charac-
teristics, indicates software’s interface with other system elements, and establishes
constraints that software must meet. Requirements analysis allows you (regardless
of whether you’re called a software engineer, an analyst, or a modeler) to elaborate on
basic requirements established during the inception, elicitation, and negotiation
tasks that are part of requirements engineering (Chapter 5).
The requirements modeling action results in one or more of the following types
of models:
• Scenario-based models of requirements from the point of view of various
system “actors”
• Data models that depict the information domain for the problem
• Class-oriented models that represent object-oriented classes (attributes and
operations) and the manner in which classes collaborate to achieve system
requirements
• Flow-oriented models that represent the functional elements of the system
and how they transform data as it moves through the system
• Behavioral models that depict how the software behaves as a consequence of
external “events”
These models provide a software designer with information that can be translated
to architectural, interface, and component-level designs. Finally, the requirements
model (and the software requirements specification) provides the developer and the
customer with the means to assess quality once software is built.
In this chapter, I focus on scenario-based modeling—a technique that is growing
increasingly popular throughout the software engineering community; data
modeling—a more specialized technique that is particularly appropriate when an
application must create or manipulate a complex information space; and class
CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 149
requirements
modeling . . . . . .153
scenario-based
modeling . . . . . .154
swimlane
diagram . . . . . . .162
UML models . . . .161
use cases . . . . . .156
uote:
“Any one ‘view’
of requirements
is insufficient
to understand
or describe the
desired behavior of
a complex system.”
Alan M. Davis
The analysis model
and requirements
specification provide
a means for assessing
quality once the
software is built.

PART TWO
MODELING
modeling—a representation of the object-oriented classes and the resultant collabo-
rations that allow a system to function. Flow-oriented models, behavioral models,
pattern-based modeling, and WebApp models are discussed in Chapter 7.
6.1.1
Overall Objectives and Philosophy
Throughout requirements modeling, your primary focus is on what, not how. What
user interaction occurs in a particular circumstance, what objects does the system
manipulate, what functions must the system perform, what behaviors does the sys-
tem exhibit, what interfaces are defined, and what constraints apply?2
In earlier chapters, I noted that complete specification of requirements may not
be possible at this stage. The customer may be unsure of precisely what is required
for certain aspects of the system. The developer may be unsure that a specific ap-
proach will properly accomplish function and performance. These realities mitigate
in favor of an iterative approach to requirements analysis and modeling. The analyst
should model what is known and use that model as the basis for design of the soft-
ware increment.3
The requirements model must achieve three primary objectives: (1) to describe
what the customer requires, (2) to establish a basis for the creation of a software de-
sign, and (3) to define a set of requirements that can be validated once the software
is built. The analysis model bridges the gap between a system-level description that
describes overall system or business functionality as it is achieved by applying soft-
ware, hardware, data, human, and other system elements and a software design
(Chapters 8 through 13) that describes the software’s application architecture, user in-
terface, and component-level structure. This relationship is illustrated in Figure 6.1.
uote:
“Requirements are
not architecture.
Requirements
are not design, nor
are they the
user interface.
Requirements are
need.”
Andrew Hunt
and David
Thomas

It should be noted that as customers become more technologically sophisticated, there is a trend
toward the specification of how as well as what. However, the primary focus should remain on
what.

Alternatively, the software team may choose to create a prototype (Chapter 2) in an effort to better
understand requirements for the system.
The analysis model
should describe what
the customer wants,
establish a basis for
design, and establish a
target for validation.
System
description
Analysis
model
Design
model
FIGURE 6.1
The
requirements
model as
a bridge
between the
system
description
and the design
model

It is important to note that all elements of the requirements model will be directly
traceable to parts of the design model. A clear division of analysis and design tasks
between these two important modeling activities is not always possible. Some
design invariably occurs as part of analysis, and some analysis will be conducted
during design.
6.1.2
Analysis Rules of Thumb
Arlow and Neustadt [Arl02] suggest a number of worthwhile rules of thumb that
should be followed when creating the analysis model:
• The model should focus on requirements that are visible within the problem or
business domain. The level of abstraction should be relatively high. “Don’t get
bogged down in details” [Arl02] that try to explain how the system will work.
• Each element of the requirements model should add to an overall understanding
of software requirements and provide insight into the information domain,
function, and behavior of the system.
• Delay consideration of infrastructure and other nonfunctional models until
design. That is, a database may be required, but the classes necessary to
implement it, the functions required to access it, and the behavior that will be
exhibited as it is used should be considered only after problem domain
analysis has been completed.
• Minimize coupling throughout the system. It is important to represent relation-
ships between classes and functions. However, if the level of “interconnect-
edness” is extremely high, effort should be made to reduce it.
• Be certain that the requirements model provides value to all stakeholders. Each
constituency has its own use for the model. For example, business stake-
holders should use the model to validate requirements; designers should use
the model as a basis for design; QA people should use the model to help plan
acceptance tests.
• Keep the model as simple as it can be. Don’t create additional diagrams when
they add no new information. Don’t use complex notational forms, when a
simple list will do.
6.1.3
Domain Analysis
In the discussion of requirements engineering (Chapter 5), I noted that analysis pat-
terns often reoccur across many applications within a specific business domain. If
these patterns are defined and categorized in a manner that allows you to recognize
and apply them to solve common problems, the creation of the analysis model is
expedited. More important, the likelihood of applying design patterns and executa-
ble software components grows dramatically. This improves time-to-market and
reduces development costs.
CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 151
uote:
“Problems worthy
of attack, prove
their worth by
hitting back.”
Piet Hein
WebRef
Many useful resources
for domain analysis 
can be found at
www.iturls
.com/English/
Software
Engineering/
SE_mod5.asp.
Are there
basic 
guidelines that
can help us as we
do requirements
analysis work?
?

PART TWO
MODELING
But how are analysis patterns and classes recognized in the first place? Who de-
fines them, categorizes them, and readies them for use on subsequent projects? The
answers to these questions lie in domain analysis. Firesmith [Fir93] describes domain
analysis in the following way:
Software domain analysis is the identification, analysis, and specification of common re-
quirements from a specific application domain, typically for reuse on multiple projects
within that application domain. . . . [Object-oriented domain analysis is] the identification,
analysis, and specification of common, reusable capabilities within a specific application
domain, in terms of common objects, classes, subassemblies, and frameworks.
The “specific application domain” can range from avionics to banking, from multi-
media video games to software embedded within medical devices. The goal of do-
main analysis is straightforward: to find or create those analysis classes and/or
analysis patterns that are broadly applicable so that they may be reused.4
Using terminology that was introduced earlier in this book, domain analysis may
be viewed as an umbrella activity for the software process. By this I mean that do-
main analysis is an ongoing software engineering activity that is not connected to
any one software project. In a way, the role of a domain analyst is similar to the role
of a master toolsmith in a heavy manufacturing environment. The job of the tool-
smith is to design and build tools that may be used by many people doing similar but
not necessarily the same jobs. The role of the domain analyst5 is to discover and de-
fine analysis patterns, analysis classes, and related information that may be used by
many people working on similar but not necessarily the same applications.
Figure 6.2 [Ara89] illustrates key inputs and outputs for the domain analysis
process. Sources of domain knowledge are surveyed in an attempt to identify objects
that can be reused across the domain.
Domain analysis
doesn’t look at a
specific application, but
rather at the domain in
which the application
resides. The intent is
to identify common
problem solving
elements that are
applicable to all
applications within
the domain.
Domain
analysis
Sources of
domain
knowledge
Customer surveys
Expert advice
Current/future requirements
Existing applications
Technical literature
Domain
analysis
model
Functional models
Domain languages
Reuse standards
Class taxonomies
FIGURE 6.2
Input and output for domain analysis

A complementary view of domain analysis “involves modeling the domain so that software engi-
neers and other stakeholders can better learn about it . . . not all domain classes necessarily result
in the development of reusable classes . . .” [Let03a].

Do not make the assumption that because a domain analyst is at work, a software engineer need
not understand the application domain. Every member of a software team should have some un-
derstanding of the domain in which the software is to be placed.

CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 153
Domain Analysis
The scene: Doug Miller’s office, after
a meeting with marketing.
The players: Doug Miller, software engineering
manager, and Vinod Raman, a member of the software
engineering team.
The conversation:
Doug: I need you for a special project, Vinod. I’m going
to pull you out of the requirements gathering meetings.
Vinod (frowning): Too bad. That format actually
works . . . I was getting something out of it. What’s up?
Doug: Jamie and Ed will cover for you. Anyway,
marketing insists that we deliver the Internet capability
along with the home security function in the first release of
SafeHome. We’re under the gun on this . . . not enough
time or people, so we’ve got to solve both problems—the
PC interface and the Web interface—at once.
Vinod (looking confused): I didn’t know the plan was
set . . . we’re not even finished with requirements gathering.
Doug (a wan smile): I know, but the time lines are so
short that I decided to begin strategizing with marketing
right now . . . anyhow, we’ll revisit any tentative plan
once we have the info from all of the requirements
gathering meetings.
Vinod: Okay, what’s up? What do you want me to do?
Doug: Do you know what “domain analysis” is?
Vinod: Sort of. You look for similar patterns in Apps
that do the same kinds of things as the App you’re
building. If possible, you then steal the patterns and reuse
them in your work.
Doug: Not sure I like the word steal, but basically you
have it right. What I’d like you to do is to begin researching
existing user interfaces for systems that control something
like SafeHome. I want you to propose a set of patterns and
analysis classes that can be common to both the PC-based
interface that’ll sit in the house and the browser-based
interface that is accessible via the Internet.
Vinod: We can save time by making them the same . . .
why don’t we just do that?
Doug: Ah . . . it’s nice to have people who think like you
do. That’s the whole point—we can save time and effort if
both interfaces are nearly identical, implemented with the
same code, blah, blah, that marketing insists on.
Vinod: So you want, what—classes, analysis patterns,
design patterns?
Doug: All of ‘em. Nothing formal at this point. I just want
to get a head start on our internal analysis and design work.
Vinod: I’ll go to our class library and see what we’ve
got. I’ll also use a patterns template I saw in a book I was
reading a few months back.
Doug: Good. Go to work.
SAFEHOME
6.1.4
Requirements Modeling Approaches
One view of requirements modeling, called structured analysis, considers data and
the processes that transform the data as separate entities. Data objects are modeled
in a way that defines their attributes and relationships. Processes that manipulate
data objects are modeled in a manner that shows how they transform data as data
objects flow through the system.
A second approach to analysis modeling, called object-oriented analysis, focuses
on the definition of classes and the manner in which they collaborate with one an-
other to effect customer requirements. UML and the Unified Process (Chapter 2) are
predominantly object oriented.
Although the requirements model proposed in this book combines features of
both approaches, software teams often choose one approach and exclude all repre-
sentations from the other. The question is not which is best, but rather, what
uote:
“…analysisis
frustrating,full
ofcomplex
interpersonal
relationships,
indefinite,and
difficult.Inaword,it
isfascinating.Once
you’rehooked,the
oldeasypleasuresof
systembuildingare
neveragainenough
tosatisfyyou.”
Tom DeMarco

PART TWO
MODELING
combination of representations will provide stakeholders with the best model of
software requirements and the most effective bridge to software design.
Each element of the requirements model (Figure 6.3) presents the problem from
a different point of view. Scenario-based elements depict how the user interacts with
the system and the specific sequence of activities that occur as the software is used.
Class-based elements model the objects that the system will manipulate, the opera-
tions that will be applied to the objects to effect the manipulation, relationships
(some hierarchical) between the objects, and the collaborations that occur between
the classes that are defined. Behavioral elements depict how external events change
the state of the system or the classes that reside within it. Finally, flow-oriented ele-
ments represent the system as an information transform, depicting how data objects
are transformed as they flow through various system functions.
Analysis modeling leads to the derivation of each of these modeling elements.
However, the specific content of each element (i.e., the diagrams that are used to
construct the element and the model) may differ from project to project. As we have
noted a number of times in this book, the software team must work to keep it sim-
ple. Only those modeling elements that add value to the model should be used.
6.2
SCENARIO-BASED MODELING
Although the success of a computer-based system or product is measured in many
ways, user satisfaction resides at the top of the list. If you understand how end users
(and other actors) want to interact with a system, your software team will be better
able to properly characterize requirements and build meaningful analysis and design
What
different
points of view 
can be used to
describe the
requirements
model?
?
uote:
“Why should we
build models? Why
not just build the
system itself? The
answer is that we
can construct
models in such a
way as to highlight,
or emphasize,
certain critical
features of a
system, while
simultaneously
de-emphasizing
other aspects of
the system.”
Ed Yourdon
Software
Requirements
Class
models
e.g.,
class diagrams
collaboration diagrams
Flow
models
e.g.,
DFDs
data models
Scenario-based
models
e.g.,
use cases
user stories
Behavioral
models
e.g.,
state diagrams
sequence diagrams
FIGURE 6.3
Elements of
the analysis
model

models. Hence, requirements modeling with UML6 begins with the creation of sce-
narios in the form of use cases, activity diagrams, and swimlane diagrams.
6.2.1
Creating a Preliminary Use Case
Alistair Cockburn characterizes a use case as a “contract for behavior” [Coc01b]. As
we discussed in Chapter 5, the “contract” defines the way in which an actor7 uses a
computer-based system to accomplish some goal. In essence, a use case captures
the interactions that occur between producers and consumers of information and
the system itself. In this section, I examine how use cases are developed as part
of the requirements modeling activity.8
In Chapter 5, I noted that a use case describes a specific usage scenario in straight-
forward language from the point of view of a defined actor. But how do you know
(1) what to write about, (2) how much to write about it, (3) how detailed to make your
description, and (4) how to organize the description? These are the questions that
must be answered if use cases are to provide value as a requirements modeling tool.
What to write about?
The first two requirements engineering tasks—inception
and elicitation—provide you with the information you’ll need to begin writing use
cases. Requirements gathering meetings, QFD, and other requirements engineering
mechanisms are used to identify stakeholders, define the scope of the problem, spec-
ify overall operational goals, establish priorities, outline all known functional re-
quirements, and describe the things (objects) that will be manipulated by the system.
To begin developing a set of use cases, list the functions or activities performed
by a specific actor. You can obtain these from a list of required system functions,
through conversations with stakeholders, or by an evaluation of activity diagrams
(Section 6.3.1) developed as part of requirements modeling.
CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 155
uote:
“[Use cases] are
simply an aid to
defining what
exists outside the
system (actors)
and what should be
performed by the
system (use
cases).”
Ivar Jacobson
In some situations, use
cases become the
dominant requirements
engineering
mechanism. However,
this does not mean
that you should discard
other modeling
methods when they
are appropriate.

UML will be used as the modeling notation throughout this book. Appendix 1 provides a brief tuto-
rial for those readers who may be unfamiliar with basic UML notation.

An actor is not a specific person, but rather a role that a person (or a device) plays within a specific
context. An actor “calls on the system to deliver one of its services” [Coc01b].

Use cases are a particularly important part of analysis modeling for user interfaces. Interface analy-
sis is discussed in detail in Chapter 11.
The scene: A meeting room, during
the second requirements gathering meeting.
The players: Jamie Lazar, software team member; 
Ed Robbins, software team member; Doug Miller,
software engineering manager; three members of
marketing; a product engineering representative; and a
facilitator.
The conversation:
Facilitator: It’s time that we begin talking about
the SafeHome surveillance function. Let’s develop 
a user scenario for access to the surveillance 
function.
Jamie: Who plays the role of the actor on this?
SAFEHOME
Developing Another Preliminary User Scenario

PART TWO
MODELING
The SafeHome home surveillance function (subsystem) discussed in the sidebar
identifies the following functions (an abbreviated list) that are performed by the
homeowner actor:
• Select camera to view.
• Request thumbnails from all cameras.
• Display camera views in a PC window.
• Control pan and zoom for a specific camera.
• Selectively record camera output.
• Replay camera output.
• Access camera surveillance via the Internet.
As further conversations with the stakeholder (who plays the role of a homeowner)
progress, the requirements gathering team develops use cases for each of the func-
tions noted. In general, use cases are written first in an informal narrative fashion. If
more formality is required, the same use case is rewritten using a structured format
similar to the one proposed in Chapter 5 and reproduced later in this section as a
sidebar.
Facilitator: I think Meredith (a marketing person) has
been working on that functionality. Why don’t you play
the role?
Meredith: You want to do it the same way we did it last
time, right?
Facilitator: Right . . . same way.
Meredith: Well, obviously the reason for surveillance is
to allow the homeowner to check out the house while he
or she is away, to record and play back video that is
captured . . . that sort of thing.
Ed: Will we use compression to store the video?
Facilitator: Good question, Ed, but let’s postpone
implementation issues for now. Meredith?
Meredith: Okay, so basically there are two parts to the
surveillance function . . . the first configures the system
including laying out a floor plan—we have to have tools
to help the homeowner do this—and the second part is
the actual surveillance function itself. Since the layout is
part of the configuration activity, I’ll focus on the
surveillance function.
Facilitator (smiling): Took the words right out of my
mouth.
Meredith: Um . . . I want to gain access to the
surveillance function either via the PC or via the Internet.
My feeling is that the Internet access would be more
frequently used. Anyway, I want to be able to display
camera views on a PC and control pan and zoom for a
specific camera. I specify the camera by selecting it from
the house floor plan. I want to selectively record camera
output and replay camera output. I also want to be able
to block access to one or more cameras with a specific
password. I also want the option of seeing small windows
that show views from all cameras and then be able to
pick the one I want enlarged.
Jamie: Those are called thumbnail views.
Meredith: Okay, then I want thumbnail views of
all the cameras. I also want the interface for the
surveillance function to have the same look and feel
as all other SafeHome interfaces. I want it to be
intuitive, meaning I don’t want to have to read a manual
to use it.
Facilitator: Good job. Now, let’s go into this function in
a bit more detail . . .

To illustrate, consider the function access camera surveillance via the Internet—
display camera views (ACS-DCV). The stakeholder who takes on the role of the
homeowner actor might write the following narrative:
Use case: Access camera surveillance via the Internet—display camera views
(ACS-DCV)
Actor: homeowner
If I’m at a remote location, I can use any PC with appropriate browser software to log
on to the SafeHome Products website. I enter my user ID and two levels of passwords and
once I’m validated, I have access to all functionality for my installed SafeHome system. To
access a specific camera view, I select “surveillance” from the major function buttons dis-
played. I then select “pick a camera” and the floor plan of the house is displayed. I then se-
lect the camera that I’m interested in. Alternatively, I can look at thumbnail snapshots from
all cameras simultaneously by selecting “all cameras” as my viewing choice. Once I choose
a camera, I select “view” and a one-frame-per-second view appears in a viewing window
that is identified by the camera ID. If I want to switch cameras, I select “pick a camera” and
the original viewing window disappears and the floor plan of the house is displayed again.
I then select the camera that I’m interested in. A new viewing window appears.
A variation of a narrative use case presents the interaction as an ordered sequence
of user actions. Each action is represented as a declarative sentence. Revisiting the
ACS-DCV function, you would write:
Use case: Access camera surveillance via the Internet—display camera views
(ACS-DCV)
Actor: homeowner
1. The homeowner logs onto the SafeHome Products website.
2. The homeowner enters his or her user ID.
3. The homeowner enters two passwords (each at least eight characters in length).
4. The system displays all major function buttons.
5. The homeowner selects the “surveillance” from the major function buttons.
6. The homeowner selects “pick a camera.”
7. The system displays the floor plan of the house.
8. The homeowner selects a camera icon from the floor plan.
9. The homeowner selects the “view” button.
10. The system displays a viewing window that is identified by the camera ID.
11. The system displays video output within the viewing window at one frame per
second.
It is important to note that this sequential presentation does not consider any alterna-
tive interactions (the narrative is more free-flowing and did represent a few alterna-
tives). Use cases of this type are sometimes referred to as primary scenarios [Sch98a].
CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 157
uote:
“Use cases can be
used in many
[software]
processes. Our
favorite is a
process that is
iterative and risk
driven.”
Geri Schneider
and Jason
Winters

PART TWO
MODELING
6.2.2
Refining a Preliminary Use Case
A description of alternative interactions is essential for a complete understanding of
the function that is being described by a use case. Therefore, each step in the primary
scenario is evaluated by asking the following questions [Sch98a]:
• Can the actor take some other action at this point?
• Is it possible that the actor will encounter some error condition at this point? If
so, what might it be?
• Is it possible that the actor will encounter some other behavior at this point (e.g.,
behavior that is invoked by some event outside the actor’s control)? If so, what
might it be?
Answers to these questions result in the creation of a set of secondary scenarios that
are part of the original use case but represent alternative behavior. For example, con-
sider steps 6 and 7 in the primary scenario presented earlier:
6. The homeowner selects “pick a camera.”
7. The system displays the floor plan of the house.
Can the actor take some other action at this point? The answer is “yes.” Referring to
the free-flowing narrative, the actor may choose to view thumbnail snapshots of all
cameras simultaneously. Hence, one secondary scenario might be  “View thumbnail
snapshots for all cameras.”
Is it possible that the actor will encounter some error condition at this point? Any
number of error conditions can occur as a computer-based system operates. In this
context, we consider only error conditions that are likely as a direct result of the ac-
tion described in step 6 or step 7. Again the answer to the question is “yes.” A floor
plan with camera icons may have never been configured. Hence, selecting “pick a
camera” results in an error condition: “No floor plan configured for this house.”9 This
error condition becomes a secondary scenario.
Is it possible that the actor will encounter some other behavior at this point? Again
the answer to the question is “yes.” As steps 6 and 7 occur, the system may encounter
an alarm condition. This would result in the system displaying a special alarm noti-
fication (type, location, system action) and providing the actor with a number of op-
tions relevant to the nature of the alarm. Because this secondary scenario can occur
at any time for virtually all interactions, it will not become part of the ACS-DCV use
case. Rather, a separate use case—Alarm condition encountered—would be de-
veloped and referenced from other use cases as required.
How do I
examine
alternative
courses of action
when I develop a
use case?
?

In this case, another actor, the system administrator, would have to configure the floor plan,
install and initialize (e.g., assign an equipment ID) all cameras, and test each camera to be certain
that it is accessible via the system and through the floor plan.

CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 159
Each of the situations described in the preceding paragraphs is characterized as
a use-case exception. An exception describes a situation (either a failure condition or
an alternative chosen by the actor) that causes the system to exhibit somewhat
different behavior.
Cockburn [Coc01b] recommends using a “brainstorming” session to derive a
reasonably complete set of exceptions for each use case. In addition to the three
generic questions suggested earlier in this section, the following issues should also
be explored:
• Are there cases in which some “validation function” occurs during this use case?
This implies that validation function is invoked and a potential error condition
might occur.
• Are there cases in which a supporting function (or actor) will fail to respond
appropriately? For example, a user action awaits a response but the function
that is to respond times out.
• Can poor system performance result in unexpected or improper user actions? For
example, a Web-based interface responds too slowly, resulting in a user
making multiple selects on a processing button. These selects queue inap-
propriately and ultimately generate an error condition.
The list of extensions developed as a consequence of asking and answering these
questions should be “rationalized” [Co01b] using the following criteria: an exception
should be noted within the use case if the software can detect the condition
described and then handle the condition once it has been detected. In some cases,
an exception will precipitate the development of another use case (to handle the
condition noted).
6.2.3
Writing a Formal Use Case
The informal use cases presented in Section 6.2.1 are sometimes sufficient for
requirements modeling. However, when a use case involves a critical activity or
describes a complex set of steps with a significant number of exceptions, a more for-
mal approach may be desirable.
The ACS-DCV use case shown in the sidebar follows a typical outline for formal
use cases. The goal in context identifies the overall scope of the use case. The
precondition describes what is known to be true before the use case is initiated.
The trigger identifies the event or condition that “gets the use case started” [Coc01b].
The scenario lists the specific actions that are required by the actor and the appro-
priate system responses. Exceptions identify the situations uncovered as the prelim-
inary use case is refined (Section 6.2.2). Additional headings may or may not be
included and are reasonably self-explanatory.

PART TWO
MODELING
WebRef
When are you finished
writing use cases? For
a worthwhile discussion
of this topic, see
ootips.org/use-
cases-done.html.
In many cases, there is no need to create a graphical representation of a usage
scenario. However, diagrammatic representation can facilitate understanding, par-
ticularly when the scenario is complex. As we noted earlier in this book, UML does
provide use-case diagramming capability. Figure 6.4 depicts a preliminary use-case
diagram for the SafeHome product. Each use case is represented by an oval. Only the
ACS-DCV use case  has been discussed in this section.
Use case: Access camera surveillance
via the Internet—display camera
views (ACS-DCV)
Iteration:
2, last modification: January 14 by
V. Raman.
Primary actor:
Homeowner.
Goal in context: To view output of camera placed
throughout the house from any
remote location via the Internet.
Preconditions:
System must be fully configured;
appropriate user ID and passwords
must be obtained.
Trigger:
The homeowner decides to take 
a look inside the house while 
away.
Scenario:
1. The homeowner logs onto the SafeHome Products
website.
2. The homeowner enters his or her user ID.
3. The homeowner enters two passwords (each at least
eight characters in length).
4. The system displays all major function buttons.
5. The homeowner selects the “surveillance” from the
major function buttons.
6. The homeowner selects “pick a camera.”
7. The system displays the floor plan of the house.
8. The homeowner selects a camera icon from the floor
plan.
9. The homeowner selects the “view” button.
10. The system displays a viewing window that is
identified by the camera ID.
11. The system displays video output within the viewing
window at one frame per second.
Exceptions:
1. ID or passwords are incorrect or not recognized—
see use case Validate ID and passwords.
2. Surveillance function not configured for this
system—system displays appropriate error message;
see use case Configure surveillance function.
3. Homeowner selects “View thumbnail snapshots for
all camera”—see use case View thumbnail
snapshots for all cameras.
4. A floor plan is not available or has not been
configured—display appropriate error message and
see use case Configure floor plan.
5. An alarm condition is encountered—see use case
Alarm condition encountered.
Priority:
Moderate priority, to be
implemented after basic functions.
When available:
Third increment.
Frequency of use:
Moderate frequency.
Channel to actor:
Via PC-based browser and
Internet connection.
Secondary actors: System administrator, cameras.
Channels to secondary actors:
1. System administrator: PC-based system.
2. Cameras: wireless connectivity.
Open issues:
1. What mechanisms protect unauthorized use of this
capability by employees of SafeHome Products?
2. Is security sufficient? Hacking into this feature would
represent a major invasion of privacy.
3. Will system response via the Internet be acceptable
given the bandwidth required for camera views?
4. Will we develop a capability to provide video at a
higher frames-per-second rate when high-
bandwidth connections are available?
SAFEHOME
Use Case Template for Surveillance

Every modeling notation has limitations, and the use case is no exception. Like
any other form of written description, a use case is only as good as its author(s). If
the description is unclear, the use case can be misleading or ambiguous. A use case
focuses on functional and behavioral requirements and is generally inappropriate for
nonfunctional requirements. For situations in which the requirements model must
have significant detail and precision (e.g., safety critical systems), a use case may not
be sufficient.
However, scenario-based modeling is appropriate for a significant majority of all
situations that you will encounter as a software engineer. If developed properly, the
use case can provide substantial benefit as a modeling tool.
6.3
UML MODELS THAT SUPPLEMENT THE USE CASE
There are many requirements modeling situations in which a text-based model—
even one as simple as a use case—may not impart information in a clear and con-
cise manner. In such cases, you can choose from a broad array of UML graphical
models.
6.3.1
Developing an Activity Diagram
The UML activity diagram supplements the use case by providing a graphical repre-
sentation of the flow of interaction within a specific scenario. Similar to the flowchart,
an activity diagram uses rounded rectangles to imply a specific system function,
arrows to represent flow through the system, decision diamonds to depict a branch-
ing decision (each arrow emanating from the diamond is labeled), and solid horizon-
tal lines to indicate that parallel activities are occurring. An activity diagram for the
ACS-DCV use case is shown in Figure 6.5. It should be noted that the activity dia-
gram adds additional detail not directly mentioned (but implied) by the use case.
CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 161
A UML activity diagram
represents the actions
and decisions that
occur as some function
is performed.
Home-
owner
Access camera 
surveillance via the 
Internet
Configure SafeHome 
system parameters
Set alarm
Cameras
SafeHome
FIGURE 6.4
Preliminary
use-case
diagram for
the SafeHome
system

PART TWO
MODELING
For example, a user may only attempt to enter userID and password a limited num-
ber of times. This is represented by a decision diamond below “Prompt for reentry.”
6.3.2
Swimlane Diagrams
The UML swimlane diagram is a useful variation of the activity diagram and allows
you to represent the flow of activities described by the use case and at the same time
indicate which actor (if there are multiple actors involved in a specific use case) or
analysis class (discussed later in this chapter) has responsibility for the action de-
scribed by an activity rectangle. Responsibilities are represented as parallel seg-
ments that divide the diagram vertically, like the lanes in a swimming pool.
Three analysis classes—Homeowner, Camera, and Interface—have direct or
indirect responsibilities in the context of the activity diagram represented in Figure 6.5.
Enter password 
and user ID
Select major
function
Valid passwords/ID
Prompt for reentry
Invalid passwords/ID
Input tries remain
No input 
tries remain
Select surveillance
Other functions
may also 
be selected
 
Thumbnail views
Select a specific camera
Select camera icon
Prompt for 
another view
Select specific 
camera - thumbnails
Exit this function
See another camera
View camera output 
in labeled window
FIGURE 6.5
Activity
diagram for
Access
camera
surveillance
via the
Internet—
display
camera views
function.
A UML swimlane
diagram represents the
flow of actions and
decisions and indicates
which actors perform
each.

CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 163
Enter password 
and user ID
Select major function
Valid passwords/ID
Prompt for reentry
Invalid 
passwords/ID
Input tries 
remain
No input
tries remain
Select surveillance
Other functions
may also be
selected
 
Thumbnail views
Select a specific camera
Select camera icon
Generate video
output
Select specific
camera - thumbnails
Exit this
function
See
another
camera
Homeowner
Camera
Interface
Prompt for
another view
View camera output
in labelled window
 
FIGURE 6.6
Swimlane diagram for Access camera surveillance via the Internet—display camera
views function
Referring to Figure 6.6, the activity diagram is rearranged so that activities associated
with a particular analysis class fall inside the swimlane for that class. For example, the
Interface class represents the user interface as seen by the homeowner. The activity
diagram notes two prompts that are the responsibility of the interface—“prompt for
reentry” and “prompt for another view.” These prompts and the decisions associated
with them fall within the Interface swimlane. However, arrows lead from that swim-
lane back to the Homeowner swimlane, where homeowner actions occur.
Use cases, along with the activity and swimlane diagrams, are procedurally ori-
ented. They represent the manner in which various actors invoke specific functions
uote:
“A good model
guides your
thinking, a bad one
warps it.”
Brian Marick

PART TWO
MODELING
(or other procedural steps) to meet the requirements of the system. But a procedural
view of requirements represents only a single dimension of a system. In Section 6.4,
I examine the information space and how data requirements can be represented.
6.4
DATA MODELING CONCEPTS
If software requirements include the need to create, extend, or interface with a data-
base or if complex data structures must be constructed and manipulated, the soft-
ware team may choose to create a data model as part of overall requirements
modeling. A software engineer or analyst defines all data objects that are processed
within the system, the relationships between the data objects, and other information
that is pertinent to the relationships. The entity-relationship diagram (ERD) addresses
these issues and represents all data objects that are entered, stored, transformed,
and produced within an application.
6.4.1
Data Objects
A data object is a representation of composite information that must be understood
by software. By composite information, I mean something that has a number of dif-
ferent properties or attributes. Therefore, width (a single value) would not be a valid
data object, but dimensions (incorporating height, width, and depth) could be
defined as an object.
A data object can be an external entity (e.g., anything that produces or consumes
information), a thing (e.g., a report or a display), an occurrence (e.g., a telephone
call) or event (e.g., an alarm), a role (e.g., salesperson), an organizational unit (e.g.,
accounting department), a place (e.g., a warehouse), or a structure (e.g., a file). For
example, a person or a car can be viewed as a data object in the sense that either
can be defined in terms of a set of attributes. The description of the data object
incorporates the data object and all of its attributes.
A data object encapsulates data only—there is no reference within a data object
to operations that act on the data.10 Therefore, the data object can be represented as
a table as shown in Figure 6.7. The headings in the table reflect attributes of the ob-
ject. In this case, a car is defined in terms of make, model, ID number, body type, color,
and owner. The body of the table represents specific instances of the data object. For
example, a Chevy Corvette is an instance of the data object car.
6.4.2
Data Attributes
Data attributes define the properties of a data object and take on one of three different
characteristics. They can be used to (1) name an instance of the data object, (2) describe
the instance, or (3) make reference to another instance in another table. In addition,
one or more of the attributes must be defined as an identifier—that is, the identifier
WebRef
Useful information on
data modeling can be
found at www
.datamodel.org.
How does a
data object
manifest itself
within the context
of an application?
?
A data object is a
representation of any
composite information
that is processed by
software.
Attributes name a data
object, describe its
characteristics, and in
some cases, make
reference to another
object.
10 This distinction separates the data object from the class or object defined as part of the object-
oriented approach (Appendix 2).

CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 165
11 Readers who are unfamiliar with object-oriented concepts and terminology should refer to the brief
tutorial presented in Appendix 2.
Make
Model
ID#
Body type Color
Owner
Identifier
Instance
Lexus
Chevy
BMW
Ford
LS400
Corvette
750iL
Taurus
AB123. . .
X456. . .
XZ765. . .
Q12A45. . .
Sedan
Sports
Coupe
Sedan
White
Red
White
Blue
RSP
CCD
LJL
BLF
Ties one data object to another,
in this case, owner
Naming
attributes
Descriptive
attributes
Referential
attributes
FIGURE 6.7
Tabular
representation
of data objects
attribute becomes a “key” when we want to find an instance of the data object. In some
cases, values for the identifier(s) are unique, although this is not a requirement. Refer-
ring to the data object car, a reasonable identifier might be the ID number.
The set of attributes that is appropriate for a given data object is determined
through an understanding of the problem context. The attributes for car might serve
well for an application that would be used by a department of motor vehicles, but
these attributes would be useless for an automobile company that needs manufac-
turing control software. In the latter case, the attributes for car might also include ID
number, body type, and color, but many additional attributes (e.g., interior code, drive train
type, trim package designator, transmission type) would have to be added to make car a
meaningful object in the manufacturing control context.
A common question occurs when data objects
are discussed: Is a data object the same thing
as an object-oriented11 class? The answer is “no.”
A data object defines a composite data item; that is,
it incorporates a collection of individual data items
(attributes) and gives the collection of items a name (the
name of the data object).
An object-oriented class encapsulates data attributes
but also incorporates the operations (methods) that
manipulate the data implied by those attributes.
In addition, the definition of classes implies a
comprehensive infrastructure that is part of the object-
oriented software engineering approach. Classes
communicate with one another via messages, they can
be organized into hierarchies, and they provide
inheritance characteristics for objects that are an
instance of a class.
INFO
6.4.3
Relationships
Data objects are connected to one another in different ways. Consider the two data
objects, person and car. These objects can be represented using the simple notation
WebRef
A concept called
“normalization” is
important to those who
intend to do thorough
data modeling. A
useful introduction
can be found at
www
.datamodel.org.
Data Objects and Object-Oriented Classes—Are They the Same Thing?

PART TWO
MODELING
INFO
person
car
(a)  A basic connection between data
objects
owns
insured to
drive
(b)  Relationships between data
objects
person
car
FIGURE 6.8
Relationships
between data
objects
illustrated in Figure 6.8a. A connection is established between person and car
because the two objects are related. But what are the relationships? To determine the
answer, you should understand the role of people (owners, in this case) and cars
within the context of the software to be built. You can establish a set of object/
relationship pairs that define the relevant relationships. For example,
• A person owns a car.
• A person is insured to drive a car.
The relationships owns and insured to drive define the relevant connections between
person and car. Figure 6.8b illustrates these object-relationship pairs graphically.
The arrows noted in Figure 6.8b provide important information about the direction-
ality of the relationship and often reduce ambiguity or misinterpretations.
12 Although the ERD is still used in some database design applications, UML notation (Appendix 1)
can now be used for data design.
13 The cardinality of an object-relationship pair specifies “the number of occurrences of one [object]
that can be related to the number of occurrences of another [object]” {Til93]. The modality of a re-
lationship is 0 if there is no explicit need for the relationship to occur or the relationship is optional.
The modality is 1 if an occurrence of the relationship is mandatory.
Relationships indicate
the manner in which
data objects are
connected to one
another.
Entity-Relationship Diagrams
The object-relationship pair is the cornerstone
of the data model. These pairs can be
represented graphically using the entity-relationship
diagram (ERD).12 The ERD was originally proposed by
Peter Chen [Che77] for the design of relational database
systems and has been extended by others. A set of
primary components is identified for the ERD: data objects,
attributes, relationships, and various type indicators. The
primary purpose of the ERD is to represent data objects
and their relationships.
Rudimentary ERD notation has already been
introduced. Data objects are represented by a labeled
rectangle. Relationships are indicated with a labeled line
connecting objects. In some variations of the ERD, the
connecting line contains a diamond that is labeled with the
relationship. Connections between data objects and
relationships are established using a variety of special
symbols that indicate cardinality and modality.13 If you
desire further information about data modeling and the
entity-relationship diagram, see [Hob06] or [Sim05].

6.5
CLASS-BASED MODELING
Class-based modeling represents the objects that the system will manipulate, the
operations (also called methods or services) that will be applied to the objects to
effect the manipulation, relationships (some hierarchical) between the objects, and
the collaborations that occur between the classes that are defined. The elements
of a class-based model include classes and objects, attributes, operations, class-
responsibility-collaborator (CRC) models, collaboration diagrams, and packages.
The sections that follow present a series of informal guidelines that will assist in
their identification and representation.
6.5.1
Identifying Analysis Classes
If you look around a room, there is a set of physical objects that can be easily iden-
tified, classified, and defined (in terms of attributes and operations). But when you
“look around” the problem space of a software application, the classes (and objects)
may be more difficult to comprehend.
We can begin to identify classes by examining the usage scenarios developed as
part of the requirements model and performing a “grammatical parse” [Abb83] on
the use cases developed for the system to be built. Classes are determined by un-
derlining each noun or noun phrase and entering it into a simple table. Synonyms
should be noted. If the class (noun) is required to implement a solution, then it is part
of the solution space; otherwise, if a class is necessary only to describe a solution, it
is part of the problem space.
CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 167
Data Modeling
Objective: Data modeling tools provide a
software engineer with the ability to represent
data objects, their characteristics, and their relationships.
Used primarily for large database applications and other
information systems projects, data modeling tools provide
an automated means for creating comprehensive entity-
relation diagrams, data object dictionaries, and related
models.
Mechanics: Tools in this category enable the user to
describe data objects and their relationships. In some cases,
the tools use ERD notation. In others, the tools model relations
using some other mechanism. Tools in this category are often
used as part of database design and enable the creation of
a database model by generating a database schema for
common database management systems (DBMS).
Representative Tools:14
AllFusion ERWin, developed by Computer Associates
(www3.ca.com), assists in the design of data objects,
proper structure, and key elements for databases.
ER/Studio, developed by Embarcadero Software
(www.embarcadero.com), supports entity-
relationship modeling.
Oracle Designer, developed by Oracle Systems
(www.oracle.com), “models business processes,
data entities and relationships [that] are transformed
into designs from which complete applications and
databases are generated.”
Visible Analyst, developed by Visible Systems
(www.visible.com), supports a variety of analysis
modeling functions including data modeling.
SOFTWARE TOOLS
14 Tools noted here do not represent an endorsement, but rather a sampling of tools in this category.
In most cases, tool names are trademarked by their respective developers.
uote:
“The really hard
problem is
discovering what
are the right
objects [classes] in
the first place.”
Carl Argila

PART TWO
MODELING
But what should we look for once all of the nouns have been isolated? Analysis
classes manifest themselves in one of the following ways:
• External entities (e.g., other systems, devices, people) that produce or
consume information to be used by a computer-based system.
• Things (e.g., reports, displays, letters, signals) that are part of the information
domain for the problem.
• Occurrences or events (e.g., a property transfer or the completion of a series
of robot movements) that occur within the context of system operation.
• Roles (e.g., manager, engineer, salesperson) played by people who interact
with the system.
• Organizational units (e.g., division, group, team) that are relevant to an appli-
cation.
• Places (e.g., manufacturing floor or loading dock) that establish the context of
the problem and the overall function of the system.
• Structures (e.g., sensors, four-wheeled vehicles, or computers) that define a
class of objects or related classes of objects.
This categorization is but one of many that have been proposed in the literature.15
For example, Budd [Bud96] suggests a taxonomy of classes that includes producers
(sources) and consumers (sinks) of data, data managers, view or observer classes, and
helper classes.
It is also important to note what classes or objects are not. In general, a class
should never have an “imperative procedural name” [Cas89]. For example, if the de-
velopers of software for a medical imaging system defined an object with the name
InvertImage or even ImageInversion, they would be making a subtle mistake. The
Image obtained from the software could, of course, be a class (it is a thing that is
part of the information domain). Inversion of the image is an operation that is ap-
plied to the object. It is likely that inversion would be defined as an operation for the
object Image, but it would not be defined as a separate class to connote “image
inversion.” As Cashman [Cas89] states: “the intent of object-orientation is to encap-
sulate, but still keep separate, data and operations on the data.”
To illustrate how analysis classes might be defined during the early stages of mod-
eling, consider a grammatical parse (nouns are underlined, verbs italicized) for a
processing narrative16 for the SafeHome security function.
How do
analysis
classes manifest
themselves as
elements of the
solution space?
?
15 Another important categorization, defining entity, boundary, and controller classes, is discussed in
Section 6.5.4.
16 A processing narrative is similar to the use case in style but somewhat different in purpose. The
processing narrative provides an overall description of the function to be developed. It is not a sce-
nario written from one actor’s point of view. It is important to note, however, that a grammatical
parse can also be used for every use case developed as part of requirements gathering (elicitation).

The SafeHome security function enables the homeowner to configure the security system
when it is installed, monitors all sensors connected to the security system, and interacts
with the homeowner through the Internet, a PC, or a control panel.
During installation, the SafeHome PC is used to program and configure the system.
Each sensor is assigned a number and type, a master password is programmed for arming
and disarming the system, and telephone number(s) are input for dialing when a sensor
event occurs.
When a sensor event is recognized, the software invokes an audible alarm attached to
the system. After a delay time that is specified by the homeowner during system configu-
ration activities, the software dials a telephone number of a monitoring service, provides
information about the location, reporting the nature of the event that has been detected.
The telephone number will be redialed every 20 seconds until telephone connection is
obtained.
The homeowner receives security information via a control panel, the PC, or a browser,
collectively called an interface. The interface displays prompting messages and system
status information on the control panel, the PC ,or the browser window. Homeowner in-
teraction takes the following form . . . 
Extracting the nouns, we can propose a number of potential classes:
Potential Class
General Classification
homeowner
role or external entity
sensor
external entity
control panel
external entity
installation
occurrence
system (alias security system)
thing
number, type
not objects, attributes of sensor
master password
thing
telephone number
thing
sensor event
occurrence
audible alarm
external entity
monitoring service
organizational unit or external entity
The list would be continued until all nouns in the processing narrative have been
considered. Note that I call each entry in the list a potential object. You must consider
each further before a final decision is made.
Coad and Yourdon [Coa91] suggest six selection characteristics that should be
used as you consider each potential class for inclusion in the analysis model:
1.
Retained information. The potential class will be useful during analysis only if
information about it must be remembered so that the system can function.
2.
Needed services. The potential class must have a set of identifiable operations
that can change the value of its attributes in some way.
CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 169
The grammatical parse
is not foolproof, but it
can provide you with
an excellent jump
start, if you’re strug-
gling to define data
objects and the trans-
forms that operate on
them.
How do I
determine
whether a
potential class
should, in fact,
become an
analysis class?
?

PART TWO
MODELING
3.
Multiple attributes. During requirement analysis, the focus should be on
“major” information; a class with a single attribute may, in fact, be useful
during design, but is probably better represented as an attribute of another
class during the analysis activity.
4.
Common attributes. A set of attributes can be defined for the potential class
and these attributes apply to all instances of the class.
5.
Common operations. A set of operations can be defined for the potential class
and these operations apply to all instances of the class.
6.
Essential requirements. External entities that appear in the problem space and
produce or consume information essential to the operation of any solution for
the system will almost always be defined as classes in the requirements model.
To be considered a legitimate class for inclusion in the requirements model, a po-
tential object should satisfy all (or almost all) of these characteristics. The decision
for inclusion of potential classes in the analysis model is somewhat subjective, and
later evaluation may cause an object to be discarded or reinstated. However, the first
step of class-based modeling is the definition of classes, and decisions (even sub-
jective ones) must be made. With this in mind, you should apply the selection char-
acteristics to the list of potential SafeHome classes:
Potential Class
Characteristic Number That Applies
homeowner
rejected: 1, 2 fail even though 6 applies
sensor
accepted: all apply
control panel
accepted: all apply
installation
rejected
system (alias security function)
accepted: all apply
number, type
rejected: 3 fails, attributes of sensor
master password
rejected: 3 fails
telephone number
rejected: 3 fails
sensor event
accepted: all apply
audible alarm
accepted: 2, 3, 4, 5, 6 apply
monitoring service
rejected: 1, 2 fail even though 6 applies
It should be noted that (1) the preceding list is not all-inclusive, additional classes
would have to be added to complete the model; (2) some of the rejected potential
classes will become attributes for those classes that were accepted (e.g., number and
type are attributes of Sensor, and master password and telephone number may become
attributes of System); (3) different statements of the problem might cause different
“accept or reject” decisions to be made (e.g., if each homeowner had an individual
password or was identified by voice print, the Homeowner class would satisfy char-
acteristics 1 and 2 and would have been accepted).
uote:
“Classes struggle,
some classes
triumph, others are
eliminated.”
Mao Zedong

6.5.2
Specifying Attributes
Attributes describe a class that has been selected for inclusion in the requirements
model. In essence, it is the attributes that define the class—that clarify what is
meant by the class in the context of the problem space. For example, if we were to
build a system that tracks baseball statistics for professional baseball players, the
attributes of the class Player would be quite different than the attributes of the
same class when it is used in the context of the professional baseball pension sys-
tem. In the former, attributes such as name, position, batting average, fielding percentage,
years played, and games played might be relevant. For the latter, some of these attrib-
utes would be meaningful, but others would be replaced (or augmented) by attrib-
utes like average salary, credit toward full vesting, pension plan options chosen, mailing
address, and the like.
To develop a meaningful set of attributes for an analysis class, you should study
each use case and select those “things” that reasonably “belong” to the class. In ad-
dition, the following question should be answered for each class: “What data items
(composite and/or elementary) fully define this class in the context of the problem
at hand?”
To illustrate, we consider the System class defined for SafeHome. A homeowner
can configure the security function to reflect sensor information, alarm response
information, activation/deactivation information, identification information, and so
forth. We can represent these composite data items in the following manner:
identification information  system ID  verification phone number  system status
alarm response information  delay time  telephone number
activation/deactivation information  master password  number of allowable tries 
temporary password
Each of the data items to the right of the equal sign could be further defined to an
elementary level, but for our purposes, they constitute a reasonable list of attributes
for the System class (shaded portion of Figure 6.9).
Sensors are part of the overall SafeHome system, and yet they are not listed as
data items or as attributes in Figure 6.9. Sensor has already been defined as a class,
and multiple Sensor objects will be associated with the System class. In general,
we avoid defining an item as an attribute if more than one of the items is to be as-
sociated with the class.
6.5.3
Defining Operations
Operations define the behavior of an object. Although many different types of oper-
ations exist, they can generally be divided into four broad categories: (1) operations
that manipulate data in some way (e.g., adding, deleting, reformatting, selecting), 
(2) operations that perform a computation, (3) operations that inquire about the state
CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 171
Attributes are the set
of data objects that
fully define the class
within the context of
the problem.
When you define
operations for an
analysis class, focus on
problem-oriented
behavior rather than
behaviors required for
implementation.

PART TWO
MODELING
of an object, and (4) operations that monitor an object for the occurrence of a con-
trolling event. These functions are accomplished by operating on attributes and/or
associations (Section 6.5.5). Therefore, an operation must have “knowledge” of the
nature of the class’ attributes and associations.
As a first iteration at deriving a set of operations for an analysis class, you can
again study a processing narrative (or use case) and select those operations that rea-
sonably belong to the class. To accomplish this, the grammatical parse is again stud-
ied and verbs are isolated. Some of these verbs will be legitimate operations and can
be easily connected to a specific class. For example, from the SafeHome processing
narrative presented earlier in this chapter, we see that “sensor is assigned a number
and type” or “a master password is programmed for arming and disarming the
system.” These phrases indicate a number of things:
• That an assign() operation is relevant for the Sensor class.
• That a program() operation will be applied to the System class.
• That arm() and disarm() are operations that apply to System class.
Upon further investigation, it is likely that the operation program() will be divided into
a number of more specific suboperations required to configure the system. For ex-
ample, program() implies specifying phone numbers, configuring system character-
istics (e.g., creating the sensor table, entering alarm characteristics), and entering
password(s). But for now, we specify program() as a single operation.
In addition to the grammatical parse, you can gain additional insight into other
operations by considering the communication that occurs between objects. Objects
communicate by passing messages to one another. Before continuing with the spec-
ification of operations, I explore this matter in a bit more detail.
System
program( )
display( ) 
reset( ) 
query( ) 
arm( ) 
disarm( ) 
systemID
verificationPhoneNumber
systemStatus
delayTime
telephoneNumber
masterPassword
temporaryPassword
numberTries       
FIGURE 6.9
Class diagram
for the system
class

CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 173
Class Models
The scene: Ed’s cubicle, as
requirements modeling begins.
The players: Jamie, Vinod, and Ed—all members of
the SafeHome software engineering team.
The conversation:
[Ed has been working to extract classes from the use case
template for ACS-DCV (presented in an earlier sidebar in
this chapter) and is presenting the classes he has
extracted to his colleagues.]
Ed: So when the homeowner wants to pick a camera, he
or she has to pick it from a floor plan. I’ve defined a
FloorPlan class. Here’s the diagram.
(They look at Figure 6.10.)
Jamie: So FloorPlan is an object that is put together
with walls, doors, windows, and cameras. That’s what
those labeled lines mean, right?
Ed: Yeah, they’re called “associations.” One class is
associated with another according to the associations I’ve
shown. [Associations are discussed in Section 6.5.5.]
Vinod: So the actual floor plan is made up of walls and
contains cameras and sensors that are placed within
those walls. How does the floor plan know where to put
those objects?
Ed: It doesn’t, but the other classes do. See the attributes
under, say, WallSegment, which is used to build a
wall. The wall segment has start and stop coordinates and
the draw() operation does the rest.
Jamie: And the same goes for windows and doors.
Looks like camera has a few extra attributes.
Ed: Yeah, I need them to provide pan and zoom 
info.
Vinod: I have a question. Why does the camera have
an ID but the others don’t? I notice you have an attribute
called nextWall. How will WallSegment know what the
next wall will be?
Ed: Good question, but as they say, that’s a design
decision, so I’m going to delay that until . . .
Jamie: Give me a break . . . I’ll bet you’ve already
figured it out.
Ed (smiling sheepishly): True, I’m gonna use a list
structure which I’ll model when we get to design. If you
get religious about separating analysis and design, the
level of detail I have right here could be suspect.
Jamie: Looks pretty good to me, but I have a few more
questions.
(Jamie asks questions which result in minor modifications)
Vinod: Do you have CRC cards for each of the objects?
If so, we ought to role-play through them, just to make
sure nothing has been omitted.
Ed: I’m not quite sure how to do them.
Vinod: It’s not hard and they really pay off. I’ll show
you.
SAFEHOME
6.5.4
Class-Responsibility-Collaborator (CRC) Modeling
Class-responsibility-collaborator (CRC) modeling [Wir90] provides a simple means
for identifying and organizing the classes that are relevant to system or product
requirements. Ambler [Amb95] describes CRC modeling in the following way:
A CRC model is really a collection of standard index cards that represent classes. The
cards are divided into three sections. Along the top of the card you write the name of the
class. In the body of the card you list the class responsibilities on the left and the collab-
orators on the right.
In reality, the CRC model may make use of actual or virtual index cards. The intent is
to develop an organized representation of classes. Responsibilities are the attributes
and operations that are relevant for the class. Stated simply, a responsibility is
“anything the class knows or does” [Amb95]. Collaborators are those classes that are
uote:
“One purpose of
CRC cards is to fail
early, to fail often,
and to fail
inexpensively. It is
a lot cheaper to
tear up a bunch of
cards than it would
be to reorganize a
large amount of
source code.”
C. Horstmann

PART TWO
MODELING
required to provide a class with the information needed to complete a responsibility.
In general, a collaboration implies either a request for information or a request for
some action.
A simple CRC index card for the FloorPlan class is illustrated in Figure 6.11. The
list of responsibilities shown on the CRC card is preliminary and subject to additions
or modification. The classes Wall and Camera are noted next to the responsibility
that will require their collaboration.
Classes.
Basic guidelines for identifying classes and objects were presented
earlier in this chapter. The taxonomy of class types presented in Section 6.5.1 can be
extended by considering the following categories:
• Entity classes, also called model or business classes, are extracted directly
from the statement of the problem (e.g., FloorPlan and Sensor). These
FloorPlan
determineType( ) 
positionFloorplan( ) 
scale( ) 
change color( ) 
type 
name 
outsideDimensions 
Camera
determineType( )  
translateLocation( ) 
displayID( ) 
displayView( ) 
displayZoom( )  
type 
ID 
location 
fieldView 
panAngle 
ZoomSetting 
WallSegment
type 
startCoordinates 
stopCoordinates 
nextWallSement 
determineType( ) 
draw( )  
Window
type 
startCoordinates 
stopCoordinates 
nextWindow 
determineType( ) 
draw( )  
Is placed within
Wall
type 
wallDimensions  
determineType( ) 
computeDimensions ( )
Door
type 
startCoordinates 
stopCoordinates 
nextDoor
determineType( ) 
draw( )  
Is part of
Is used to build
Is used to build
Is used to build
FIGURE 6.10
Class diagram
for FloorPlan
(see sidebar
discussion)
WebRef
An excellent discussion
of these class types
can be found at
www.theumlcafe
.com/a0079.htm.

classes typically represent things that are to be stored in a database and
persist throughout the duration of the application (unless they are specifically
deleted).
• Boundary classes are used to create the interface (e.g., interactive screen or
printed reports) that the user sees and interacts with as the software is used.
Entity objects contain information that is important to users, but they do not
display themselves. Boundary classes are designed with the responsibility of
managing the way entity objects are represented to users. For example, a
boundary class called CameraWindow would have the responsibility of
displaying surveillance camera output for the SafeHome system.
• Controller classes manage a “unit of work” [UML03] from start to finish. That
is, controller classes can be designed to manage (1) the creation or update of
entity objects, (2) the instantiation of boundary objects as they obtain infor-
mation from entity objects, (3) complex communication between sets of
objects, (4) validation of data communicated between objects or between the
user and the application. In general, controller classes are not considered
until the design activity has begun.
Responsibilities.
Basic guidelines for identifying responsibilities (attributes and
operations) have been presented in Sections 6.5.2 and 6.5.3. Wirfs-Brock and her
colleagues [Wir90] suggest five guidelines for allocating responsibilities to classes:
1.
System intelligence should be distributed across classes to best
address the needs of the problem. Every application encompasses a
certain degree of intelligence; that is, what the system knows and what it
can do. This intelligence can be distributed across classes in a number of
CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 175
Class:
Des
R e s
Co llabo rat o r:
Class:
De
Co llabo rat o r:
Class:
D
Co llabo rat o r:
Class: FloorPlan
Description
Responsibility:
Collaborator:
Incorporates walls, doors, and windows
Shows position of video cameras
Defines floor plan name/type
Manages floor plan positioning
Scales floor plan for display
Scales floor plan for display
Wall
Camera
FIGURE 6.11
A CRC model
index card
uote:
“Objects can be
classified
scientifically into
three major
categories: those
that don’t work,
those that break
down, and those
that get lost.”
Russell Baker
What
guidelines
can be applied
for allocating
responsibilities
to classes?
?

PART TWO
MODELING
different ways. “Dumb” classes (those that have few responsibilities) can
be modeled to act as servants to a few “smart” classes (those having many
responsibilities). Although this approach makes the flow of control in a
system straightforward, it has a few disadvantages: it concentrates all intelli-
gence within a few classes, making changes more difficult, and it tends to
require more classes, hence more development effort.
If system intelligence is more evenly distributed across the classes in an
application, each object knows about and does only a few things (that are
generally well focused), the cohesiveness of the system is improved.17 This
enhances the maintainability of the software and reduces the impact of side
effects due to change.
To determine whether system intelligence is properly distributed, the re-
sponsibilities noted on each CRC model index card should be evaluated to
determine if any class has an extraordinarily long list of responsibilities. This
indicates a concentration of intelligence.18 In addition, the responsibilities for
each class should exhibit the same level of abstraction. For example, among
the operations listed for an aggregate class called CheckingAccount a re-
viewer notes two responsibilities: balance-the-account and check-off-cleared-
checks. The first operation (responsibility) implies a complex mathematical
and logical procedure. The second is a simple clerical activity. Since these
two operations are not at the same level of abstraction, check-off-cleared-
checks should be placed within the responsibilities of CheckEntry, a class
that is encompassed by the aggregate class CheckingAccount.
2.
Each responsibility should be stated as generally as possible. This
guideline implies that general responsibilities (both attributes and operations)
should reside high in the class hierarchy (because they are generic, they will
apply to all subclasses).
3.
Information and the behavior related to it should reside within the
same class. This achieves the object-oriented principle called encapsulation.
Data and the processes that manipulate the data should be packaged as a
cohesive unit.
4.
Information about one thing should be localized with a single class,
not distributed across multiple classes. A single class should take on
the responsibility for storing and manipulating a specific type of information.
This responsibility should not, in general, be shared across a number of
classes. If information is distributed, software becomes more difficult to
maintain and more challenging to test.
17 Cohesiveness is a design concept that is discussed in Chapter 8.
18 In such cases, it may be necessary to spit the class into multiple classes or complete subsystems in
order to distribute intelligence more effectively.

5.
Responsibilities should be shared among related classes, when
appropriate. There are many cases in which a variety of related objects
must all exhibit the same behavior at the same time. As an example, consider
a video game that must display the following classes: Player, PlayerBody,
PlayerArms, PlayerLegs, PlayerHead. Each of these classes has its own
attributes (e.g., position, orientation, color, speed) and all must be updated and
displayed as the user manipulates a joystick. The responsibilities update()
and display() must therefore be shared by each of the objects noted. Player
knows when something has changed and update() is required. It collaborates
with the other objects to achieve a new position or orientation, but each
object controls its own display.
Collaborations.
Classes fulfill their responsibilities in one of two ways: (1) A class
can use its own operations to manipulate its own attributes, thereby fulfilling a par-
ticular responsibility, or (2) a class can collaborate with other classes. Wirfs-Brock
and her colleagues [Wir90] define collaborations in the following way:
Collaborations represent requests from a client to a server in fulfillment of a client
responsibility. A collaboration is the embodiment of the contract between the client and
the server. . . . We say that an object collaborates with another object if, to fulfill a
responsibility, it needs to send the other object any messages. A single collaboration
flows in one direction—representing a request from the client to the server. From the
client’s point of view, each of its collaborations is associated with a particular responsi-
bility implemented by the server.
Collaborations are identified by determining whether a class can fulfill each respon-
sibility itself. If it cannot, then it needs to interact with another class. Hence, a
collaboration.
As an example, consider the SafeHome security function. As part of the activa-
tion procedure, the ControlPanel object must determine whether any sensors
are open. A responsibility named determine-sensor-status() is defined. If sensors are
open, ControlPanel must set a status attribute to “not ready.” Sensor information
can be acquired from each Sensor object. Therefore, the responsibility determine-
sensor-status() can be fulfilled only if ControlPanel works in collaboration with
Sensor.
To help in the identification of collaborators, you can examine three different
generic relationships between classes [Wir90]: (1) the is-part-of relationship, (2) the
has-knowledge-of relationship, and (3) the depends-upon relationship. Each of the
three generic relationships is considered briefly in the paragraphs that follow.
All classes that are part of an aggregate class are connected to the aggregate class
via an is-part-of relationship. Consider the classes defined for the video game noted
earlier, the class PlayerBody is-part-of Player, as are PlayerArms, PlayerLegs,
and PlayerHead. In UML, these relationships are represented as the aggregation
shown in Figure 6.12.
CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 177

PART TWO
MODELING
When one class must acquire information from another class, the has-knowledge-
of relationship is established. The determine-sensor-status() responsibility noted ear-
lier is an example of a has-knowledge-of relationship.
The depends-upon relationship implies that two classes have a dependency that
is not achieved by has-knowledge-of or is-part-of. For example, PlayerHead must
always be connected to PlayerBody (unless the video game is particularly violent),
yet each object could exist without direct knowledge of the other. An attribute of the
PlayerHead object called center-position is determined from the center position of
PlayerBody. This information is obtained via a third object, Player, that acquires it
from PlayerBody. Hence, PlayerHead depends-upon PlayerBody.
In all cases, the collaborator class name is recorded on the CRC model index card
next to the responsibility that has spawned the collaboration. Therefore, the index
card contains a list of responsibilities and the corresponding collaborations that
enable the responsibilities to be fulfilled (Figure 6.11).
When a complete CRC model has been developed, stakeholders can review the
model using the following approach [Amb95]:
1.
All participants in the review (of the CRC model) are given a subset of the
CRC model index cards. Cards that collaborate should be separated (i.e., no
reviewer should have two cards that collaborate).
2.
All use-case scenarios (and corresponding use-case diagrams) should be
organized into categories.
3.
The review leader reads the use case deliberately. As the review leader
comes to a named object, she passes a token to the person holding the corre-
sponding class index card. For example, a use case for SafeHome contains
the following narrative:
The homeowner observes the SafeHome control panel to determine if the system is
ready for input. If the system is not ready, the homeowner must physically close 
Player
PlayerHead
PlayerBody
PlayerArms
PlayerLegs
FIGURE 6.12
A composite
aggregate
class

windows/doors so that the ready indicator is present. [A not-ready indicator implies
that a sensor is open, i.e., that a door or window is open.]
When the review leader comes to “control panel,” in the use case narrative,
the token is passed to the person holding the ControlPanel index card. The
phrase “implies that a sensor is open” requires that the index card contains a
responsibility that will validate this implication (the responsibility determine-
sensor-status() accomplishes this). Next to the responsibility on the index card
is the collaborator Sensor. The token is then passed to the Sensor object.
4.
When the token is passed, the holder of the Sensor card is asked to describe
the responsibilities noted on the card. The group determines whether one (or
more) of the responsibilities satisfies the use-case requirement.
5.
If the responsibilities and collaborations noted on the index cards cannot
accommodate the use case, modifications are made to the cards. This may
include the definition of new classes (and corresponding CRC index cards) or
the specification of new or revised responsibilities or collaborations on
existing cards.
This modus operandi continues until the use case is finished. When all use cases
have been reviewed, requirements modeling continues.
CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 179
CRC Models
The scene: Ed’s cubicle, as
requirements modeling begins.
The players: Vinod and Ed—members of the
SafeHome software engineering team.
The conversation:
[Vinod has decided to show Ed how to develop CRC cards
by showing him an example.]
Vinod: While you’ve been working on surveillance and
Jamie has been tied up with security, I’ve been working
on the home management function.
Ed: What’s the status of that? Marketing kept changing
its mind.
Vinod: Here’s the first-cut use case for the whole
function . . .  we’ve refined it a bit, but it should give you
an overall view . . .
Use case: SafeHome home management function.
Narrative: We want to use the home management
interface on a PC or an Internet connection to control
electronic devices that have wireless interface controllers. 
The system should allow me to turn specific lights on and
off, to control appliances that are connected to a wireless
interface, to set my heating and air conditioning system to
temperatures that I define. To do this, I want to select the
devices from a floor plan of the house. Each device must
be identified on the floor plan. As an optional feature, I
want to control all audiovisual devices—audio, television,
DVD, digital recorders, and so forth.
With a single selection, I want to be able to set the
entire house for various situations. One is home, another
is away, a third is overnight travel, and a fourth is
extended travel. All of these situations will have settings
that will be applied to all devices. In the overnight travel
and extended travel states, the system should turn lights
on and off at random intervals (to make it look like
someone is home) and control the heating and air
conditioning system. I should be able to override these
setting via the Internet with appropriate password
protection . . .
Ed: The hardware guys have got all the wireless
interfacing figured out?
SAFEHOME

PART TWO
MODELING
6.5.5
Associations and Dependencies
In many instances, two analysis classes are related to one another in some fashion,
much like two data objects may be related to one another (Section 6.4.3). In UML
these relationships are called associations. Referring back to Figure 6.10, the
FloorPlan class is defined by identifying a set of associations between FloorPlan
and two other classes, Camera and Wall. The class Wall is associated with
three classes that allow a wall to be constructed, WallSegment, Window,
and Door.
In some cases, an association may be further defined by indicating multiplicity. Re-
ferring to Figure 6.10, a Wall object is constructed from one or more WallSegment
objects. In addition, the Wall object may contain 0 or more Window objects and 0
or more Door objects. These multiplicity constraints are illustrated in Figure 6.13,
where “one or more” is represented using 1. .*, and “0 or more” by 0 . .*. In UML, the
asterisk indicates an unlimited upper bound on the range.19
Vinod (smiling): They’re working on it; say it’s no
problem. Anyway, I extracted a bunch of classes for
home management and we can use one as an example.
Let’s use the HomeManagementInterface class.
Ed: Okay . . . so the responsibilities are what . . . the
attributes and operations for the class and the
collaborations are the classes that the responsibilities
point to.
Vinod: I thought you didn’t understand CRC.
Ed: Maybe a little, but go ahead.
Vinod: So here’s my class definition for
HomeManagementInterface.
Attributes:
optionsPanel—contains info on buttons that enable user to
select functionality.
situationPanel—contains info on buttons that enable user
to select situation.
floorplan—same as surveillance object but this one
displays devices.
deviceIcons—info on icons representing lights,
appliances, HVAC, etc.
devicePanels—simulation of appliance or device control
panel; allows control.
Operations:
displayControl(), selectControl(), displaySituation(), select
situation(), accessFloorplan(), selectDeviceIcon(),
displayDevicePanel(), accessDevicePanel(), . . .
Class: HomeManagementInterface
Responsibility
Collaborator
displayControl()
OptionsPanel (class)
selectControl()
OptionsPanel (class)
displaySituation()
SituationPanel (class)
selectSituation()
SituationPanel (class)
accessFloorplan()
FloorPlan (class) . . . 
. . . 
Ed: So when the operation accessFloorplan() is invoked,
it collaborates with the FloorPlan object just like the one
we developed for surveillance. Wait, I have a description
of it here. (They look at Figure 6.10.)
Vinod: Exactly. And if we wanted to review the entire
class model, we could start with this index card, then go
to the collaborator’s index card, and from there to one of
the collaborator’s collaborators, and so on.
Ed: Good way to find omissions or errors.
Vinod: Yep.
An association defines
a relationship between
classes. Multiplicity
defines how many of
one class are related to
how many of another
class.
19 Other multiplicity relations—one to one, one to many, many to many, one to a specified range with
lower and upper limits, and others—may be indicated as part of an association.

In many instances, a client-server relationship exists between two analysis
classes. In such cases, a client class depends on the server class in some way and a
dependency relationship is established. Dependencies are defined by a stereotype. A
stereotype is an “extensibility mechanism” [Arl02] within UML that allows you to
define a special modeling element whose semantics are custom defined. In UML
stereotypes are represented in double angle brackets (e.g., <<stereotype>>).
As an illustration of a simple dependency within the SafeHome surveillance sys-
tem, a Camera object (in this case, the server class) provides a video image to a
DisplayWindow object (in this case, the client class). The relationship between
these two objects is not a simple association, yet a dependency association does
exist. In a use case written for surveillance (not shown), you learn that a special pass-
word must be provided in order to view specific camera locations. One way to
achieve this is to have Camera request a password and then grant permission to the
DisplayWindow to produce the video display. This can be represented as shown in
Figure 6.14 where <<access>> implies that the use of the camera output is controlled
by a special password.
CHAPTER 6
REQUIREMENTS MODELING: SCENARIOS, INFORMATION, AND ANALYSIS CLASSES 181
WallSegment
Window
Door
Wall
Is used to build
Is used to build
Is used to build
1..*

0..*
0..*
FIGURE 6.13
Multiplicity
Camera
DisplayWindow
{password}
<<access>>
FIGURE 6.14
Dependencies
What is a
stereotype?
?

PART TWO
MODELING
6.5.6
Analysis Packages
An important part of analysis modeling is categorization. That is, various elements
of the analysis model (e.g., use cases, analysis classes) are categorized in a manner
that packages them as a grouping—called an analysis package—that is given a rep-
resentative name.
To illustrate the use of analysis packages, consider the video game that I intro-
duced earlier. As the analysis model for the video game is developed, a large num-
ber of classes are derived. Some focus on the game environment—the visual scenes
that the user sees as the game is played. Classes such as Tree, Landscape, Road,
Wall, Bridge, Building, and VisualEffect might fall within this category. Others
focus on the characters within the game, describing their physical features, actions,
and constraints. Classes such as Player (described earlier), Protagonist, Antago-
nist, and SupportingRoles might be defined. Still others describe the rules of the
game—how a player navigates through the environment. Classes such as
RulesOfMovement and ConstraintsOnAction are candidates here. Many other
categories might exist. These classes can be grouped in analysis packages as shown
in Figure 6.15.
The plus sign preceding the analysis class name in each package indicates that
the classes have public visibility and are therefore accessible from other packages.
Although they are not shown in the figure, other symbols can precede an element
within a package. A minus sign indicates that an element is hidden from all other
packages and a # symbol indicates that an element is accessible only to packages
contained within a given package.
Environment
+Tree 
+Landscape 
+Road 
+Wall 
+Bridge 
+Building 
+VisualEffect 
+Scene 
Characters
+Player 
+Protagonist 
+Antagonist 
+SupportingRole
RulesOfTheGame
+RulesOfMovement 
+ConstraintsOnAction
Package name
FIGURE 6.15
Packages
A package is used to
assemble a collection
of related classes.

A
fter my discussion of use cases, data modeling, and class-based models
in Chapter 6, it’s reasonable to ask, “Aren’t those requirements modeling
representations enough?”
The only reasonable answer is, “That depends.”
For some types of software, the use case may be the only requirements mod-
eling representation that is required. For others, an object-oriented approach is
chosen and class-based models may be developed. But in other situations, com-
plex application requirements may demand an examination of how data objects
are transformed as they move through a system; how an application behaves as
a consequence of external events; whether existing domain knowledge can be
adapted to the current problem; or in the case of Web-based systems and appli-
cations, how content and functionality meld to provide an end user with the abil-
ity to successfully navigate a WebApp to achieve usage goals.
7.1 REQUIREMENTS MODELING STRATEGIES
One view of requirements modeling, called structured analysis, considers data and
the processes that transform the data as separate entities. Data objects are mod-
eled in a way that defines their attributes and relationships. Processes that
manipulate data objects are modeled in a manner that shows how they transform
data as data objects flow through the system. A second approach to analysis 

C H A P T E R

REQUIREMENTS MODELING: FLOW,
BEHAVIOR, PATTERNS, AND WEBAPPS
K E Y
C O N C E P T S
analysis 
patterns . . . . . .200
behavioral 
model . . . . . . .195
configuration 
model . . . . . . .211
content model . .207
control flow 
model . . . . . . .191
data flow 
model . . . . . . .188
functional 
model . . . . . . .210
interaction 
model . . . . . . .209
navigation 
modeling . . . . .212
process 
specification . . .192
sequence 
diagrams . . . . .197
WebApps . . . . .205
What is it? The requirements model
has many different dimensions. In
this chapter you’ll learn about flow-
oriented models, behavioral models, and the spe-
cial requirements analysis considerations that
come into play when WebApps are developed.
Each of these modeling representations supple-
ments the use cases, data models, and class-
based models discussed in Chapter 6.
Who does it? A software engineer (sometimes
called an “analyst”) builds the model using
requirements elicited from various stakeholders.
Q U I C K
L O O K
Why is it important? Your insight into software
requirements grows in direct proportion to the
number of different requirements modeling
dimensions. Although you may not have the
time, the resources, or the inclination to develop
every representation suggested in this chapter
and Chapter 6, recognize that each different
modeling approach provides you with a differ-
ent way of looking at the problem. As a conse-
quence, you (and other stakeholders) will be
better able to assess whether you’ve properly
specified what must be accomplished.

modeled, called object-oriented analysis, focuses on the definition of classes and the
manner in which they collaborate with one another to effect customer requirements.
Although the analysis model that we propose in this book combines features of
both approaches, software teams often choose one approach and exclude all repre-
sentations from the other. The question is not which is best, but rather, what com-
bination of representations will provide stakeholders with the best model of software
requirements and the most effective bridge to software design.
7.2
FLOW-ORIENTED MODELING
Although data flow-oriented modeling is perceived as an outdated technique by
some software engineers, it continues to be one of the most widely used require-
ments analysis notations in use today.1 Although the data flow diagram (DFD) and
related diagrams and information are not a formal part of UML, they can be used to
complement UML diagrams and provide additional insight into system requirements
and flow.
The DFD takes an input-process-output view of a system. That is, data objects
flow into the software, are transformed by processing elements, and resultant data
objects flow out of the software. Data objects are represented by labeled arrows, and
transformations are represented by circles (also called bubbles). The DFD is pre-
sented in a hierarchical fashion. That is, the first data flow model (sometimes called
a level 0 DFD or context diagram) represents the system as a whole. Subsequent data
flow diagrams refine the context diagram, providing increasing detail with each
subsequent level.
CHAPTER 7
REQUIREMENTS MODELING: FLOW, BEHAVIOR, PATTERNS, AND WEBAPPS

What are the steps? Flow-oriented modeling
provides an indication of how data objects are
transformed by processing functions. Behavioral
modeling depicts the states of the system and its
classes and the impact of events on these states.
Pattern-based modeling makes use of existing
domain knowledge to facilitate requirements
analysis. WebApp requirements models are
especially adapted for the representation of
content, interaction, function, and configuration-
related requirements.
What is the work product? A wide array of text-
based and diagrammatic forms may be chosen
for the requirements model. Each of these repre-
sentations provides a view of one or more of the
model elements.
How do I ensure that I’ve done it right?
Requirements modeling work products must be
reviewed for correctness, completeness, and
consistency. They must reflect the needs of all
stakeholders and establish a foundation from
which design can be conducted.

Data flow modeling is a core modeling activity in structured analysis.
Some will suggest that
the DFD is old-school
and it has no place in
modern practice. That’s
a view that excludes a
potentially useful mode
of representation at the
analysis level. If it can
help, use the DFD.

PART TWO
MODELING
7.2.1
Creating a Data Flow Model
The data flow diagram enables you to develop models of the information domain and
functional domain. As the DFD is refined into greater levels of detail, you perform an
implicit functional decomposition of the system. At the same time, the DFD refine-
ment results in a corresponding refinement of data as it moves through the processes
that embody the application.
A few simple guidelines can aid immeasurably during the derivation of a data flow
diagram: (1) the level 0 data flow diagram should depict the software/system as a
single bubble; (2) primary input and output should be carefully noted; (3) refinement
should begin by isolating candidate processes, data objects, and data stores to be
represented at the next level; (4) all arrows and bubbles should be labeled with
meaningful names; (5) information flow continuity must be maintained from level to
level,2 and (6) one bubble at a time should be refined. There is a natural tendency to
overcomplicate the data flow diagram. This occurs when you attempt to show too
much detail too early or represent procedural aspects of the software in lieu of
information flow.
To illustrate the use of the DFD and related notation, we again consider the
SafeHome security function. A level 0 DFD for the security function is shown in
Figure 7.1. The primary external entities (boxes) produce information for use by the
system and consume information generated by the system. The labeled arrows rep-
resent data objects or data object hierarchies. For example, user commands and
data encompasses all configuration commands, all activation/deactivation com-
mands, all miscellaneous interactions, and all data that are entered to qualify or
expand a command.
The level 0 DFD must now be expanded into a level 1 data flow model. But how
do we proceed? Following an approach suggested in Chapter 6, you should apply a
uote:
“The purpose of
data flow diagrams
is to provide a
semantic bridge
between users
and systems
developers.”
Kenneth Kozar

That is, the data objects that flow into the system or into any transformation at one level must be the
same data objects (or their constituent parts) that flow into the transformation at a more refined level.
Information flow
continuity must be
maintained as each
DFD level is refined.
This means that input
and output at one level
must be the same as
input and output at a
refined level.
Control
panel
User commands
and data
Sensors
Sensor
status
Control
panel
display
Telephone
line
Alarm
SafeHome
software
Display
information
Telephone
number tones
Alarm
type
FIGURE 7.1
Context-level
DFD for the
SafeHome
security
function

CHAPTER 7
REQUIREMENTS MODELING: FLOW, BEHAVIOR, PATTERNS, AND WEBAPPS

“grammatical parse” [Abb83] to the use case narrative that describes the context-level
bubble. That is, we isolate all nouns (and noun phrases) and verbs (and verb phrases)
in a SafeHome processing narrative derived during the first requirements gathering
meeting. Recalling the parsed processing narrative text presented in Section 6.5.1:
The SafeHome security function enables the homeowner to configure the security system
when it is installed, monitors all sensors connected to the security system, and interacts
with the homeowner through the Internet, a PC, or a control panel.
During installation, the SafeHome PC is used to program and configure the system.
Each sensor is assigned a number and type, a master password is programmed for arming
and disarming the system, and telephone number(s) are input for dialing when a sensor
event occurs.
When a sensor event is recognized, the software invokes an audible alarm attached to
the system. After a delay time that is specified by the homeowner during system configura-
tion activities, the software dials a telephone number of a monitoring service, provides
information about the location, reporting the nature of the event that has been detected. The
telephone number will be redialed every 20 seconds until telephone connection is obtained.
The homeowner receives security information via a control panel, the PC, or a browser,
collectively called an interface. The interface displays prompting messages and system
status information on the control panel, the PC, or the browser window. Homeowner in-
teraction takes the following form . . .
Referring to the grammatical parse, verbs are SafeHome processes and can be rep-
resented as bubbles in a subsequent DFD. Nouns are either external entities (boxes),
data or control objects (arrows), or data stores (double lines). From the discussion in
Chapter 6, recall that nouns and verbs can be associated with one another (e.g., each
sensor is assigned a number and type; therefore number and type are attributes of the
data object sensor). Therefore, by performing a grammatical parse on the process-
ing narrative for a bubble at any DFD level, you can generate much useful informa-
tion about how to proceed with the refinement to the next level. Using this
information, a level 1 DFD is shown in Figure 7.2. The context level process shown
in Figure 7.1 has been expanded into six processes derived from an examination of
the grammatical parse. Similarly, the information flow between processes at level 1
has been derived from the parse. In addition, information flow continuity is main-
tained between levels 0 and 1.
The processes represented at DFD level 1 can be further refined into lower levels.
For example, the process monitor sensors can be refined into a level 2 DFD as shown
in Figure 7.3. Note once again that information flow continuity has been maintained
between levels.
The refinement of DFDs continues until each bubble performs a simple function.
That is, until the process represented by the bubble performs a function that would
be easily implemented as a program component. In Chapter 8, I discuss a concept,
called cohesion, that can be used to assess the processing focus of a given function.
For now, we strive to refine DFDs until each bubble is “single-minded.”
The grammatical parse
is not foolproof, but it
can provide you with an
excellent jump start, if
you’re struggling to
define data objects and
the transforms that
operate on them.
Be certain that the
processing narrative
you intend to parse is
written at the same
level of abstraction
throughout.

PART TWO
MODELING
Configuration information
Read
sensors
Assess
against
setup
Configuration
data
Sensor ID,
type
Sensor
status
Generate
alarm
signal
Alarm
type
Alarm
data
Telephone
number
Dial
phone
Telephone
number tones
Format
for
display
Sensor
information
Sensor ID
type,
location
FIGURE 7.3
Level 2 DFD
that refines
the monitor
sensors process
Configuration information
Control
panel
Sensors
Control
panel
display
Telephone
line
Alarm
Interact
with
user
Configure
system
Activate/
deactivate
system
Process
password
Monitor
sensors
Display
messages
and status
User commands
and data
Password
Start
stop
Configure
request
Configuration
data
Configuration
data
Configuration
data
Valid ID msg.
A/d msg.
Sensor
status
Sensor
information
Alarm type
Telephone
number tones
Display
information
FIGURE 7.2
Level 1 DFD for
SafeHome
security
function

7.2.2
Creating a Control Flow Model
For some types of applications, the data model and the data flow diagram are all that
is necessary to obtain meaningful insight into software requirements. As I have al-
ready noted, however, a large class of applications are “driven” by events rather than
data, produce control information rather than reports or displays, and process infor-
mation with heavy concern for time and performance. Such applications require the
use of control flow modeling in addition to data flow modeling.
I have already noted that an event or control item is implemented as a Boolean value
(e.g., true or false, on or off, 1 or 0) or a discrete list of conditions (e.g., empty, jammed,
full). To select potential candidate events, the following guidelines are suggested:
• List all sensors that are “read” by the software.
• List all interrupt conditions.
• List all “switches” that are actuated by an operator.
• List all data conditions.
• Recalling the noun/verb parse that was applied to the processing narrative,
review all “control items” as possible control specification inputs/outputs.
• Describe the behavior of a system by identifying its states, identify how each
state is reached, and define the transitions between states.
• Focus on possible omissions—a very common error in specifying control; for
example, ask: “Is there any other way I can get to this state or exit from it?”
Among the many events and control items that are part of SafeHome software are
sensor event (i.e., a sensor has been tripped), blink flag (a signal to blink the
display), and start/stop switch (a signal to turn the system on or off).
7.2.3
The Control Specification
A control specification (CSPEC) represents the behavior of the system (at the level
from which it has been referenced) in two different ways.3 The CSPEC contains a
state diagram that is a sequential specification of behavior. It can also contain a pro-
gram activation table—a combinatorial specification of behavior.
Figure 7.4 depicts a preliminary state diagram4 for the level 1 control flow model
for SafeHome. The diagram indicates how the system responds to events as it trav-
erses the four states defined at this level. By reviewing the state diagram, you can
determine the behavior of the system and, more important, ascertain whether there
are “holes” in the specified behavior.
For example, the state diagram (Figure 7.4) indicates that the transitions from
the Idle state can occur if the system is reset, activated, or powered off. If the system is
CHAPTER 7
REQUIREMENTS MODELING: FLOW, BEHAVIOR, PATTERNS, AND WEBAPPS

How do I
select
potential events
for a control flow
diagram, state
diagram, or
CSPEC?
?

Additional behavioral modeling notation is presented in Section 7.3.

The state diagram notation used here conforms to UML notation. A “state transition diagram” is avail-
able in structured analysis, but the UML format is superior in information content and representation.

PART TWO
MODELING
activated (i.e., alarm system is turned on), a transition to the Monitoring-
SystemStatus state occurs, display messages are changed as shown, and the pro-
cess monitorAndControlSystem is invoked. Two transitions occur out of the
MonitoringSystemStatus state—(1) when the system is deactivated, a transition oc-
curs back to the Idle state; (2) when a sensor is triggered into the ActingOnAlarm
state. All transitions and the content of all states are considered during the review.
A somewhat different mode of behavioral representation is the process activation
table. The PAT represents information contained in the state diagram in the context of
processes, not states. That is, the table indicates which processes (bubbles) in the flow
model will be invoked when an event occurs. The PAT can be used as a guide for a de-
signer who must build an executive that controls the processes represented at this
level. A PAT for the level 1 flow model of SafeHome software is shown in Figure 7.5.
The CSPEC describes the behavior of the system, but it gives us no information
about the inner working of the processes that are activated as a result of this behavior.
The modeling notation that provides this information is discussed in Section 7.2.4.
7.2.4
The Process Specification
The process specification (PSPEC) is used to describe all flow model processes that
appear at the final level of refinement. The content of the process specification can
Resetting
Entry/set systemStatus "inactive"
Entry/set displayMsg1 "Starting system"
Entry/set displayMsg2 "Please wait"
Entry/set displayStatus slowBlinking
Do: run diagnostics
Start/stop switch
power "on"
systemOK
Idle
Entry/set systemStatus "inactive"
Entry/set displayMsg1 "Ready"
Entry/set displayMsg2  ""
Entry/set displayStatus steady
KeyHit/handleKey 
failureDetected/
set displayMsg2 "contact Vendor"
MonitoringSystemStatus
Entry/set systemStatus "monitoring"
Entry/set displayMsg1 "Armed"
Entry/set displayMsg2   ""
Entry/set displayStatus steady
Do: monitorAndControlSystem
KeyHit/handleKey
ActingOnAlarm
Entry/set systemStatus "monitorAndAlarm"
Entry/set displayMsg1 "ALARM"
Entry/set displayMsg2 triggeringSensor
Entry/set displayStatus fastBlinking
Do: monitorAndControlSystem
Do: soundAlarm
Do: notifyAlarmResponders
KeyHit/handleKey     
Reset
falseAlarm
timeOut
sensorTriggered/
startTimer
sensorTriggered/
restartTimer
Activate
deactivatePassword
off/powerOff
deactivatePassword
FIGURE 7.4
State diagram for SafeHome security function

CHAPTER 7
REQUIREMENTS MODELING: FLOW, BEHAVIOR, PATTERNS, AND WEBAPPS

input events
process activation
monitor and control system         0     1     0     0     1     1
activate/deactivate system         0     1     0     0     0     0
display messages and status       1     0     1     1     1     1
interact with user                       1     0     0     1     0     1
sensor event                             0     0     0     0     1     0
blink flag                                 0     0     1     1     0     0
start stop switch                        0     1     0     0     0     0
display action status complete     0     0     0     1     0     0
in-progress                               0     0     1     0     0     0
time out                                   0     0     0     0     0     1
output
alarm signal                             0     0     0     0     1     0
FIGURE 7.5
Process activa-
tion table for
SafeHome
security
function
Data Flow Modeling
The scene: Jamie’s cubicle, after the
last requirements gathering meeting has concluded.
The players: Jamie, Vinod, and Ed—all members of
the SafeHome software engineering team.
The conversation:
(Jamie has sketched out the models shown in Figures 7.1
through 7.5 and is showing them to Ed and Vinod.)
Jamie: I took a software engineering course in college,
and they taught us this stuff. The Prof said it’s a bit old-
fashioned, but you know what, it helps me to clarify
things.
Ed: That’s cool. But I don’t see any classes or objects here.
Jamie: No . . . this is just a flow model with a little
behavioral stuff thrown in.
Vinod: So these DFDs represent an I-P-O view of the
software, right.
Ed: I-P-O?
Vinod: Input-process-output. The DFDs are actually
pretty intuitive . . . if you look at ‘em for a moment, they
show how data objects flow through the system and get
transformed as they go.
Ed: Looks like we could convert every bubble into an
executable component . . . at least at the lowest level of
the DFD.
Jamie: That’s the cool part, you can. In fact, there’s a
way to translate the DFDs into an design architecture.
Ed: Really?
Jamie: Yeah, but first we’ve got to develop a complete
requirements model and this isn’t it.
Vinod: Well, it’s a first step, but we’re going to have to
address class-based elements and also behavioral aspects,
although the state diagram and PAT does some of that.
Ed: We’ve got a lot work to do and not much time to do it.
(Doug—the software engineering manager—walks into the
cubical.)
Doug: So the next few days will be spent developing the
requirements model, huh?
Jamie (looking proud): We’ve already begun.
Doug: Good, we’ve got a lot of work to do and not
much time to do it.
(The three software engineers look at one another and smile.)
SAFEHOME

PART TWO
MODELING
include narrative text, a program design language (PDL) description5 of the process
algorithm, mathematical equations, tables, or UML activity diagrams. By providing a
PSPEC to accompany each bubble in the flow model, you can create a “mini-spec” that
serves as a guide for design of the software component that will implement the bubble.
To illustrate the use of the PSPEC, consider the process password transform repre-
sented in the flow model for SafeHome (Figure 7.2). The PSPEC for this function might
take the form:
PSPEC: process password (at control panel). The process password transform per-
forms password validation at the control panel for the SafeHome security function. Process
password receives a four-digit password from the interact with user function. The password
is first compared to the master password stored within the system. If the master password
matches, <valid id message = true> is passed to the message and status display function. If
the master password does not match, the four digits are compared to a table of secondary
passwords (these may be assigned to house guests and/or workers who require entry to
the home when the owner is not present). If the password matches an entry within the table,
<valid id message = true> is passed to the message and status display function. If there is no
match, <valid id message = false> is passed to the message and status display function.
If additional algorithmic detail is desired at this stage, a program design language
representation may also be included as part of the PSPEC. However, many believe
that the PDL version should be postponed until component design commences.

Program design language (PDL) mixes programming language syntax with narrative text to provide
procedural design detail. PDL is discussed briefly in Chapter 10.

Tools noted here do not represent an endorsement, but rather a sampling of tools in this category.
In most cases, tool names are trademarked by their respective developers.
The PSPEC is a “mini-
specification” for each
transform at the lowest
refined level of a DFD.
Structured Analysis
Objective: Structured analysis tools allow a
software engineer to create data models, flow
models, and behavioral models in a manner that enables
consistency and continuity checking and easy editing and
extension. Models created using these tools provide
the software engineer with insight into the analysis
representation and help to eliminate errors before they
propagate into design, or worse, into implementation itself.
Mechanics: Tools in this category use a “data
dictionary” as the central database for the description
of all data objects. Once entries in the dictionary are
defined, entity-relationship diagrams can be created
and object hierarchies can be developed. Data flow
diagramming features allow easy creation of this graphical
model and also provide features for the creation of PSPECs
and CSPECs. Analysis tools also enable the software 
engineer to create behavioral models using the state
diagram as the operative notation.
Representative Tools:6
MacA&D, WinA&D, developed by Excel software
(www.excelsoftware.com), provides a set of
simple and inexpensive analysis and design tools for
Macs and Windows machines.
MetaCASE Workbench, developed by MetaCase Consulting
(www.metacase.com), is a metatool used to define
an analysis or design method (including structured
analysis) and its concepts, rules, notations, and
generators.
System Architect, developed by Popkin Software
(www.popkin.com) provides a broad range of
analysis and design tools including tools for data
modeling and structured analysis.
SOFTWARE TOOLS

CHAPTER 7
REQUIREMENTS MODELING: FLOW, BEHAVIOR, PATTERNS, AND WEBAPPS

7.3
CREATING A BEHAVIORAL MODEL
The modeling notation that I have discussed to this point represents static elements
of the requirements model. It is now time to make a transition to the dynamic be-
havior of the system or product. To accomplish this, you can represent the behavior
of the system as a function of specific events and time.
The behavioral model indicates how software will respond to external events or
stimuli. To create the model, you should perform the following steps:
1.
Evaluate all use cases to fully understand the sequence of interaction within
the system.
2.
Identify events that drive the interaction sequence and understand how these
events relate to specific objects.
3.
Create a sequence for each use case.
4.
Build a state diagram for the system.
5.
Review the behavioral model to verify accuracy and consistency.
Each of these steps is discussed in the sections that follow.
7.3.1
Identifying Events with the Use Case
In Chapter 6 you learned that the use case represents a sequence of activities that in-
volves actors and the system. In general, an event occurs whenever the system and
an actor exchange information. In Section 7.2.3, I indicated that an event is not the
information that has been exchanged, but rather the fact that information has been
exchanged.
A use case is examined for points of information exchange. To illustrate, we re-
consider the use case for a portion of the SafeHome security function.
The homeowner uses the keypad to key in a four-digit password. The password is
compared with the valid password stored in the system. If the password is incorrect, the
control panel will beep once and reset itself for additional input. If the password is
correct, the control panel awaits further action.
The underlined portions of the use case scenario indicate events. An actor should be
identified for each event; the information that is exchanged should be noted, and any
conditions or constraints should be listed.
As an example of a typical event, consider the underlined use case phrase “home-
owner uses the keypad to key in a four-digit password.” In the context of the
requirements model, the object, Homeowner,7 transmits an event to the object
ControlPanel. The event might be called password entered. The information
How do I
model the
software’s
reaction to some
external event?
?

In this example, we assume that each user (homeowner) that interacts with SafeHome has an
identifying password and is therefore a legitimate object.

PART TWO
MODELING
transferred is the four digits that constitute the password, but this is not an essential
part of the behavioral model. It is important to note that some events have an ex-
plicit impact on the flow of control of the use case, while others have no direct im-
pact on the flow of control. For example, the event password entered does not
explicitly change the flow of control of the use case, but the results of the event
password compared (derived from the interaction “password is compared with the
valid password stored in the system”) will have an explicit impact on the information
and control flow of the SafeHome software.
Once all events have been identified, they are allocated to the objects involved.
Objects can be responsible for generating events (e.g., Homeowner generates
the password entered event) or recognizing events that have occurred elsewhere
(e.g., ControlPanel recognizes the binary result of the password compared event).
7.3.2
State Representations
In the context of behavioral modeling, two different characterizations of states must
be considered: (1) the state of each class as the system performs its function and
(2) the state of the system as observed from the outside as the system performs its
function.8
The state of a class takes on both passive and active characteristics [Cha93]. A
passive state is simply the current status of all of an object’s attributes. For example,
the passive state of the class Player (in the video game application discussed in
Chapter 6) would include the current position and orientation attributes of Player as
well as other features of Player that are relevant to the game (e.g., an attribute that
indicates magic wishes remaining). The active state of an object indicates the current sta-
tus of the object as it undergoes a continuing transformation or processing. The class
Player might have the following active states: moving, at rest, injured, being cured;
trapped, lost, and so forth. An event (sometimes called a trigger) must occur to force
an object to make a transition from one active state to another.
Two different behavioral representations are discussed in the paragraphs that
follow. The first indicates how an individual class changes state based on external
events and the second shows the behavior of the software as a function of time.
State diagrams for analysis classes.
One component of a behavioral model is
a UML state diagram9 that represents active states for each class and the events (trig-
gers) that cause changes between these active states. Figure 7.6 illustrates a state di-
agram for the ControlPanel object in the SafeHome security function.
Each arrow shown in Figure 7.6 represents a transition from one active state of
an object to another. The labels shown for each arrow represent the event that

The state diagrams presented in Chapter 6 and in Section 7.3.2 depict the state of the system. Our
discussion in this section will focus on the state of each class within the analysis model.

If you are unfamiliar with UML, a brief introduction to this important modeling notation is presented
in Appendix 1.
The system has states
that represent specific
externally observable
behavior; a class has
states that represent
its behavior as the
system performs its
functions.

triggers the transition. Although the active state model provides useful insight into
the “life history” of an object, it is possible to specify additional information to pro-
vide more depth in understanding the behavior of an object. In addition to specify-
ing the event that causes the transition to occur, you can specify a guard and an
action [Cha93]. A guard is a Boolean condition that must be satisfied in order for the
transition to occur. For example, the guard for the transition from the “reading” state
to the “comparing” state in Figure 7.6 can be determined by examining the use case:
if (password input  4 digits) then compare to stored password
In general, the guard for a transition usually depends upon the value of one or more
attributes of an object. In other words, the guard depends on the passive state of the
object.
An action occurs concurrently with the state transition or as a consequence of it
and generally involves one or more operations (responsibilities) of the object. For ex-
ample, the action connected to the password entered event (Figure 7.6) is an opera-
tion named validatePassword() that accesses a password object and performs a
digit-by-digit comparison to validate the entered password.
Sequence diagrams.
The second type of behavioral representation, called a
sequence diagram in UML, indicates how events cause transitions from object to
object. Once events have been identified by examining a use case, the modeler
CHAPTER 7
REQUIREMENTS MODELING: FLOW, BEHAVIOR, PATTERNS, AND WEBAPPS

Reading
Locked
Selecting
Password
entered 
Comparing
Password = incorrect
& numberOfTries < maxTries 
Password = correct
Activation successful
Key hit
Do: validatePassword
numberOfTries > maxTries
Timer ≤ lockedTime
Timer > lockedTime
FIGURE 7.6
State diagram
for the 
ControlPanel
class

PART TWO
MODELING
creates a sequence diagram—a representation of how events cause flow from one
object to another as a function of time. In essence, the sequence diagram is a short-
hand version of the use case. It represents key classes and the events that cause
behavior to flow from class to class.
Figure 7.7 illustrates a partial sequence diagram for the SafeHome security func-
tion. Each of the arrows represents an event (derived from a use case) and indicates
how the event channels behavior between SafeHome objects. Time is measured ver-
tically (downward), and the narrow vertical rectangles represent time spent in pro-
cessing an activity. States may be shown along a vertical time line.
The first event, system ready, is derived from the external environment and chan-
nels behavior to the Homeowner object. The homeowner enters a password. A
request lookup event is passed to System, which looks up the password in a simple
database and returns a result (found or not found) to ControlPanel (now in the
comparing state). A valid password results in a password=correct event to System,
which activates Sensors with a request activation event. Ultimately, control is passed
back to the homeowner with the activation successful event.
Once a complete sequence diagram has been developed, all of the events that
cause transitions between system objects can be collated into a set of input events
and output events (from an object). This information is useful in the creation of an
effective design for the system to be built.
Unlike a state diagram
that represents
behavior without
noting the classes
involved, a sequence
diagram represents
behavior, by describing
how classes move
from state to state.
Control panel
System
System 
ready
Reading
Request lookup
Comparing
Result
Password entered
Password = correct
Request activation
Activation successful
Locked
Selecting
Timer > lockedTime
A
A
Activation successful
Homeowner
Sensors
numberOfTries > maxTries
FIGURE 7.7
Sequence diagram (partial) for the SafeHome security function

---

## Module 3 Textbook 1

3.1
WHAT IS AGILITY?
Just what is agility in the context of software engineering work? Ivar Jacobson
[Jac02a] provides a useful discussion:
Agility has become today’s buzzword when describing a modern software process. Every-
one is agile. An agile team is a nimble team able to appropriately respond to changes.
Change is what software development is very much about. Changes in the software be-
ing built, changes to the team members, changes because of new technology, changes of
all kinds that may have an impact on the product they build or the project that creates the
product. Support for changes should be built-in everything we do in software, something
we embrace because it is the heart and soul of software. An agile team recognizes that
software is developed by individuals working in teams and that the skills of these people,
their ability to collaborate is at the core for the success of the project.
In Jacobson’s view, the pervasiveness of change is the primary driver for agility. Soft-
ware engineers must be quick on their feet if they are to accommodate the rapid
changes that Jacobson describes.
But agility is more than an effective response to change. It also encompasses the
philosophy espoused in the manifesto noted at the beginning of this chapter. It
encourages team structures and attitudes that make communication (among team
members, between technologists and business people, between software engineers
and their managers) more facile. It emphasizes rapid delivery of operational soft-
ware and de-emphasizes the importance of intermediate work products (not always
a good thing); it adopts the customer as a part of the development team and works
to eliminate the “us and them” attitude that continues to pervade many software
projects; it recognizes that planning in an uncertain world has its limits and that a
project plan must be flexible.
Agility can be applied to any software process. However, to accomplish this, it is
essential that the process be designed in a way that allows the project team to adapt
tasks and to streamline them, conduct planning in a way that understands the fluid-
ity of an agile development approach, eliminate all but the most essential work prod-
ucts and keep them lean, and emphasize an incremental delivery strategy that gets
working software to the customer as rapidly as feasible for the product type and
operational environment.
3.2
AGILITY AND THE COST OF CHANGE
The conventional wisdom in software development (supported by decades of expe-
rience) is that the cost of change increases nonlinearly as a project progresses
(Figure 3.1, solid black curve). It is relatively easy to accommodate a change when a
software team is gathering requirements (early in a project). A usage scenario might
have to be modified, a list of functions may be extended, or a written specification
can be edited. The costs of doing this work are minimal, and the time required will
CHAPTER 3
AGILE DEVELOPMENT

Don’t make the
mistake of assuming
that agility gives you
license to hack out
solutions. A process is
required and discipline
is essential.
MODULE 3

not adversely affect the outcome of the project. But what if we fast-forward a num-
ber of months? The team is in the middle of validation testing (something that occurs
relatively late in the project), and an important stakeholder is requesting a major
functional change. The change requires a modification to the architectural design of
the software, the design and construction of three new components, modifications
to another five components, the design of new tests, and so on. Costs escalate
quickly, and the time and cost required to ensure that the change is made without
unintended side effects is nontrivial.
Proponents of agility (e.g., [Bec00], [Amb04]) argue that a well-designed agile
process “flattens” the cost of change curve (Figure 3.1, shaded, solid curve), allowing
a software team to accommodate changes late in a software project without dramatic
cost and time impact. You’ve already learned that the agile process encompasses in-
cremental delivery. When incremental delivery is coupled with other agile practices
such as continuous unit testing and pair programming (discussed later in this chap-
ter), the cost of making a change is attenuated. Although debate about the degree to
which the cost curve flattens is ongoing, there is evidence [Coc01a] to suggest that a
significant reduction in the cost of change can be achieved.
3.3
WHAT IS AN AGILE PROCESS?
Any agile software process is characterized in a manner that addresses a number of
key assumptions [Fow02] about the majority of software projects: 
1.
It is difficult to predict in advance which software requirements will persist
and which will change. It is equally difficult to predict how customer
priorities will change as the project proceeds.

PART ONE
THE SOFTWARE PROCESS
Cost of change
using conventional
software processes
Cost of change
using agile processes
Idealized cost of change
using agile process
Development schedule progress
Development cost
FIGURE 3.1
Change costs
as a function
of time in
development
uote:
“Agility is dynamic,
content specific,
aggressively
change embracing,
and growth
oriented.”
–Steven
Goldman et al.
An agile process
reduces the cost of
change because
software is released in
increments and change
can be better
controlled within an
increment.

2.
For many types of software, design and construction are interleaved. That is,
both activities should be performed in tandem so that design models are
proven as they are created. It is difficult to predict how much design is
necessary before construction is used to prove the design.
3.
Analysis, design, construction, and testing are not as predictable (from a
planning point of view) as we might like.
Given these three assumptions, an important question arises: How do we create a
process that can manage unpredictability? The answer, as I have already noted, lies
in process adaptability (to rapidly changing project and technical conditions). An
agile process, therefore, must be adaptable.
But continual adaptation without forward progress accomplishes little. Therefore,
an agile software process must adapt incrementally. To accomplish incremental adap-
tation, an agile team requires customer feedback (so that the appropriate adaptations
can be made). An effective catalyst for customer feedback is an operational prototype
or a portion of an operational system. Hence, an incremental development strategy
should be instituted. Software increments (executable prototypes or portions of an op-
erational system) must be delivered in short time periods so that adaptation keeps pace
with change (unpredictability). This iterative approach enables the customer to evalu-
ate the software increment regularly, provide necessary feedback to the software team,
and influence the process adaptations that are made to accommodate the feedback.
3.3.1
Agility Principles
The Agile Alliance (see [Agi03], [Fow01]) defines 12 agility principles for those who
want to achieve agility: 
1.
Our highest priority is to satisfy the customer through early and continuous
delivery of valuable software.
2.
Welcome changing requirements, even late in development. Agile processes
harness change for the customer’s competitive advantage.
3.
Deliver working software frequently, from a couple of weeks to a couple of
months, with a preference to the shorter timescale.
4.
Business people and developers must work together daily throughout the
project.
5.
Build projects around motivated individuals. Give them the environment and
support they need, and trust them to get the job done.
6.
The most efficient and effective method of conveying information to and
within a development team is face-to-face conversation.
7.
Working software is the primary measure of progress.
8.
Agile processes promote sustainable development. The sponsors, developers,
and users should be able to maintain a constant pace indefinitely.
CHAPTER 3
AGILE DEVELOPMENT

WebRef
A comprehensive
collection of articles on
the agile process 
can be found at
www.aanpo.org/
articles/index.
Although agile
processes embrace
change, it is still
important to examine
the reasons for
change.
Working software is
important, but don’t
forget that it must also
exhibit a variety of
quality attributes
including reliability,
usability, and 
maintainability.

9.
Continuous attention to technical excellence and good design enhances
agility.
10.
Simplicity—the art of maximizing the amount of work not done—is 
essential.
11.
The best architectures, requirements, and designs emerge from self–
organizing teams.
12.
At regular intervals, the team reflects on how to become more effective, then
tunes and adjusts its behavior accordingly.
Not every agile process model applies these 12 principles with equal weight, and
some models choose to ignore (or at least downplay) the importance of one or more
of the principles. However, the principles define an agile spirit that is maintained in
each of the process models presented in this chapter.
3.3.2
The Politics of Agile Development
There is considerable debate (sometimes strident) about the benefits and applicabil-
ity of agile software development as opposed to more conventional software engi-
neering processes. Jim Highsmith [Hig02a] (facetiously) states the extremes when he
characterizes the feeling of the pro-agility camp (“agilists”). “Traditional methodolo-
gists are a bunch of stick-in-the-muds who’d rather produce flawless documentation
than a working system that meets business needs.” As a counterpoint, he states
(again, facetiously) the position of the traditional software engineering camp: “Light-
weight, er, ‘agile’ methodologists are a bunch of glorified hackers who are going to
be in for a heck of a surprise when they try to scale up their toys into enterprise-wide
software.”
Like all software technology arguments, this methodology debate risks degener-
ating into a religious war. If warfare breaks out, rational thought disappears and
beliefs rather than facts guide decision making.
No one is against agility. The real question is: What is the best way to achieve it?
As important, how do you build software that meets customers’ needs today and
exhibits the quality characteristics that will enable it to be extended and scaled to
meet customers’ needs over the long term?
There are no absolute answers to either of these questions. Even within the agile
school itself, there are many proposed process models (Section 3.4), each with a
subtly different approach to the agility problem. Within each model there is a set of
“ideas” (agilists are loath to call them “work tasks”) that represent a significant
departure from traditional software engineering. And yet, many agile concepts are
simply adaptations of good software engineering concepts. Bottom line: there is
much that can be gained by considering the best of both schools and virtually
nothing to be gained by denigrating either approach.
If you have further interest, see [Hig01], [Hig02a], and [DeM02] for an entertain-
ing summary of other important technical and political issues.

PART ONE
THE SOFTWARE PROCESS
You don’t have to
choose between agility
and software engi-
neering. Rather, define
a software engineering
approach that is agile.

3.3.3
Human Factors
Proponents of agile software development take great pains to emphasize the impor-
tance of “people factors.” As Cockburn and Highsmith [Coc01a] state, “Agile devel-
opment focuses on the talents and skills of individuals, molding the process to
specific people and teams.” The key point in this statement is that the process molds
to the needs of the people and team, not the other way around.2
If members of the software team are to drive the characteristics of the process that
is applied to build software, a number of key traits must exist among the people on
an agile team and the team itself:
Competence.
In an agile development (as well as software engineering)
context, “competence” encompasses innate talent, specific software-related
skills, and overall knowledge of the process that the team has chosen to
apply. Skill and knowledge of process can and should be taught to all people
who serve as agile team members.
Common focus.
Although members of the agile team may perform differ-
ent tasks and bring different skills to the project, all should be focused on one
goal—to deliver a working software increment to the customer within the
time promised. To achieve this goal, the team will also focus on continual
adaptations (small and large) that will make the process fit the needs of the
team.
Collaboration.
Software engineering (regardless of process) is about as-
sessing, analyzing, and using information that is communicated to the soft-
ware team; creating information that will help all stakeholders understand
the work of the team; and building information (computer software and rele-
vant databases) that provides business value for the customer. To accomplish
these tasks, team members must collaborate—with one another and all other
stakeholders.
Decision-making ability.
Any good software team (including agile teams)
must be allowed the freedom to control its own destiny. This implies that the
team is given autonomy—decision-making authority for both technical and
project issues.
Fuzzy problem-solving ability.
Software managers must recognize that
the agile team will continually have to deal with ambiguity and will continu-
ally be buffeted by change. In some cases, the team must accept the fact that
the problem they are solving today may not be the problem that needs to be
solved tomorrow. However, lessons learned from any problem-solving
CHAPTER 3
AGILE DEVELOPMENT

Successful software engineering organizations recognize this reality regardless of the process
model they choose.
uote:
“Agile methods
derive much of
their agility by
relying on the
tacit knowledge
embodied in the
team, rather than
writing the
knowledge down
in plans.”
Barry Boehm
What key
traits must
exist among the
people on an
effective software
team?
?
uote:
“What counts as
barely sufficient
for one team is
either overly
sufficient or
insufficient for
another.”
Alistair
Cockburn

activity (including those that solve the wrong problem) may be of benefit to
the team later in the project.
Mutual trust and respect.
The agile team must become what DeMarco
and Lister [DeM98] call a “jelled” team (Chapter 24). A jelled team exhibits
the trust and respect that are necessary to make them “so strongly knit that
the whole is greater than the sum of the parts.” [DeM98]
Self-organization.
In the context of agile development, self-organization
implies three things: (1) the agile team organizes itself for the work to be
done, (2) the team organizes the process to best accommodate its local envi-
ronment, (3) the team organizes the work schedule to best achieve delivery
of the software increment. Self-organization has a number of technical bene-
fits, but more importantly, it serves to improve collaboration and boost team
morale. In essence, the team serves as its own management. Ken Schwaber
[Sch02] addresses these issues when he writes: “The team selects how much
work it believes it can perform within the iteration, and the team commits to
the work. Nothing demotivates a team as much as someone else making
commitments for it. Nothing motivates a team as much as accepting the
responsibility for fulfilling commitments that it made itself.”
3.4
EXTREME PROGRAMMING (XP)
In order to illustrate an agile process in a bit more detail, I’ll provide you with an
overview of Extreme Programming (XP), the most widely used approach to agile soft-
ware development. Although early work on the ideas and methods associated with
XP occurred during the late 1980s, the seminal work on the subject has been written
by Kent Beck [Bec04a]. More recently, a variant of XP, called Industrial XP (IXP) has
been proposed [Ker05]. IXP refines XP and targets the agile process specifically for
use within large organizations.
3.4.1
XP Values
Beck [Bec04a] defines a set of five values that establish a foundation for all work per-
formed as part of XP—communication, simplicity, feedback, courage, and respect. Each
of these values is used as a driver for specific XP activities, actions, and tasks.
In order to achieve effective communication between software engineers and
other stakeholders (e.g., to establish required features and functions for the soft-
ware), XP emphasizes close, yet informal (verbal) collaboration between customers
and developers, the establishment of effective metaphors3 for communicating
important concepts, continuous feedback, and the avoidance of voluminous docu-
mentation as a communication medium.

PART ONE
THE SOFTWARE PROCESS
A self-organizing team
is in control of the
work it performs. The
team makes its own
commitments and
defines plans to
achieve them.

In the XP context, a metaphor is “a story that everyone—customers, programmers, and managers—
can tell about how the system works” [Bec04a].

To achieve simplicity, XP restricts developers to design only for immediate needs,
rather than consider future needs. The intent is to create a simple design that can be
easily implemented in code). If the design must be improved, it can be refactored4 at
a later time.
Feedback is derived from three sources: the implemented software itself, the
customer, and other software team members. By designing and implementing an
effective testing strategy (Chapters 17 through 20), the software (via test results) pro-
vides the agile team with feedback. XP makes use of the unit test as its primary test-
ing tactic. As each class is developed, the team develops a unit test to exercise each
operation according to its specified functionality. As an increment is delivered to a
customer, the user stories or use cases (Chapter 5) that are implemented by the
increment are used as a basis for acceptance tests. The degree to which the software
implements the output, function, and behavior of the use case is a form of feedback.
Finally, as new requirements are derived as part of iterative planning, the team pro-
vides the customer with rapid feedback regarding cost and schedule impact.
Beck [Bec04a] argues that strict adherence to certain XP practices demands
courage. A better word might be discipline. For example, there is often significant
pressure to design for future requirements. Most software teams succumb, arguing
that “designing for tomorrow” will save time and effort in the long run. An agile XP
team must have the discipline (courage) to design for today, recognizing that future
requirements may change dramatically, thereby demanding substantial rework of
the design and implemented code.
By following each of these values, the agile team inculcates respect among it
members, between other stakeholders and team members, and indirectly, for the
software itself. As they achieve successful delivery of software increments, the team
develops growing respect for the XP process.
3.4.2
The XP Process
Extreme Programming uses an object-oriented approach (Appendix 2) as its pre-
ferred development paradigm and encompasses a set of rules and practices that
occur within the context of four framework activities: planning, design, coding, and
testing. Figure 3.2 illustrates the XP process and notes some of the key ideas and
tasks that are associated with each framework activity. Key XP activities are sum-
marized in the paragraphs that follow.
Planning.
The planning activity (also called the planning game) begins with
listening—a requirements gathering activity that enables the technical members of
the XP team to understand the business context for the software and to get a broad
CHAPTER 3
AGILE DEVELOPMENT

Refactoring allows a software engineer to improve the internal structure of a design (or source
code) without changing its external functionality or behavior. In essence, refactoring can be used
to improve the efficiency, readability, or performance of a design or the code that implements a
design.
Keep it simple
whenever you can, but
recognize that
continual “refactoring”
can absorb significant
time and resources.
uote:
“XP is the answer
to the question,
‘How little can we
do and still build
great software?’“
Anonymous
WebRef
An excellent overview
of “rules” for XP can
be found at www
.extremeprogramm
ing.org/rules.html.

feel for required output and major features and functionality. Listening leads to the
creation of a set of “stories” (also called user stories) that describe required output,
features, and functionality for software to be built. Each story (similar to use cases
described in Chapter 5) is written by the customer and is placed on an index card.
The customer assigns a value (i.e., a priority) to the story based on the overall busi-
ness value of the feature or function.5 Members of the XP team then assess each
story and assign a cost—measured in development weeks—to it. If the story is esti-
mated to require more than three development weeks, the customer is asked to split
the story into smaller stories and the assignment of value and cost occurs again. It
is important to note that new stories can be written at any time.
Customers and developers work together to decide how to group stories into the
next release (the next software increment) to be developed by the XP team. Once a
basic commitment (agreement on stories to be included, delivery date, and other
project matters) is made for a release, the XP team orders the stories that will be de-
veloped in one of three ways: (1) all stories will be implemented immediately (within
a few weeks), (2) the stories with highest value will be moved up in the schedule and
implemented first, or (3) the riskiest stories will be moved up in the schedule and
implemented first.
After the first project release (also called a software increment) has been deliv-
ered, the XP team computes project velocity. Stated simply, project velocity is the

PART ONE
THE SOFTWARE PROCESS
user stories
 values
 acceptance test criteria
iteration plan
simple design
 CRC cards
unit test
 continuous integration
software increment
 project velocity computed
spike solutions
 prototypes
refactoring
pair programming
acceptance testing
Release
design
coding
planning
test
FIGURE 3.2
The Extreme
Programming
process

The value of a story may also be dependent on the presence of another story.
WebRef
A worthwhile XP
“planning game” can
be found at:
c2.com/cgi/
wiki?planningGame.
What is an
XP “story”?
?

number of customer stories implemented during the first release. Project velocity can
then be used to (1) help estimate delivery dates and schedule for subsequent releases
and (2) determine whether an overcommitment has been made for all stories across
the entire development project. If an overcommitment occurs, the content of releases
is modified or end delivery dates are changed.
As development work proceeds, the customer can add stories, change the value
of an existing story, split stories, or eliminate them. The XP team then reconsiders all
remaining releases and modifies its plans accordingly.
Design.
XP design rigorously follows the KIS (keep it simple) principle. A simple
design is always preferred over a more complex representation. In addition, the de-
sign provides implementation guidance for a story as it is written—nothing less,
nothing more. The design of extra functionality (because the developer assumes it
will be required later) is discouraged.6
XP encourages the use of CRC cards (Chapter 7) as an effective mechanism for
thinking about the software in an object-oriented context. CRC (class-responsibility-
collaborator) cards identify and organize the object-oriented classes7 that are rele-
vant to the current software increment. The XP team conducts the design exercise
using a process similar to the one described in Chapter 8. The CRC cards are the only
design work product produced as part of the XP process.
If a difficult design problem is encountered as part of the design of a story, XP rec-
ommends the immediate creation of an operational prototype of that portion of the
design. Called a spike solution, the design prototype is implemented and evaluated.
The intent is to lower risk when true implementation starts and to validate the orig-
inal estimates for the story containing the design problem.
In the preceding section, we noted that XP encourages refactoring—a construction
technique that is also a method for design optimization. Fowler [Fow00] describes
refactoring in the following manner:
Refactoring is the process of changing a software system in such a way that it does not
alter the external behavior of the code yet improves the internal structure. It is a disci-
plined way to clean up code [and modify/simplify the internal design] that minimizes the
chances of introducing bugs. In essence, when you refactor you are improving the design
of the code after it has been written.
Because XP design uses virtually no notation and produces few, if any, work prod-
ucts other than CRC cards and spike solutions, design is viewed as a transient arti-
fact that can and should be continually modified as construction proceeds. The intent
of refactoring is to control these modifications by suggesting small design changes
CHAPTER 3
AGILE DEVELOPMENT

Project velocity is a
subtle measure of
team productivity.

These design guidelines should be followed in every software engineering method, although there
are times when sophisticated design notation and terminology may get in the way of simplicity.

Object-oriented classes are discussed in Appendix 2, in Chapter 8, and throughout Part 2 of this
book.
XP deemphasizes the
importance of design.
Not everyone agrees.
In fact, there are times
when design should be
emphasized.
WebRef
Refactoring techniques
and tools can be
found at:
www.refactoring
.com.

that “can radically improve the design” [Fow00]. It should be noted, however, that
the effort required for refactoring can grow dramatically as the size of an application
grows.
A central notion in XP is that design occurs both before and after coding com-
mences. Refactoring means that design occurs continuously as the system is con-
structed. In fact, the construction activity itself will provide the XP team with
guidance on how to improve the design.
Coding.
After stories are developed and preliminary design work is done, the team
does not move to code, but rather develops a series of unit tests that will exercise
each of the stories that is to be included in the current release (software increment).8
Once the unit test9 has been created, the developer is better able to focus on what
must be implemented to pass the test. Nothing extraneous is added (KIS). Once the
code is complete, it can be unit-tested immediately, thereby providing instantaneous
feedback to the developers.
A key concept during the coding activity (and one of the most talked about aspects
of XP) is pair programming. XP recommends that two people work together at one
computer workstation to create code for a story. This provides a mechanism for real-
time problem solving (two heads are often better than one) and real-time quality as-
surance (the code is reviewed as it is created). It also keeps the developers focused
on the problem at hand. In practice, each person takes on a slightly different role. For
example, one person might think about the coding details of a particular portion of
the design while the other ensures that coding standards (a required part of XP) are
being followed or that the code for the story will satisfy the unit test that has been
developed to validate the code against the story.
As pair programmers complete their work, the code they develop is integrated
with the work of others. In some cases this is performed on a daily basis by an inte-
gration team. In other cases, the pair programmers have integration responsibility.
This “continuous integration” strategy helps to avoid compatibility and interfacing
problems and provides a “smoke testing” environment (Chapter 17) that helps to
uncover errors early.
Testing.
I have already noted that the creation of unit tests before coding com-
mences is a key element of the XP approach. The unit tests that are created should
be implemented using a framework that enables them to be automated (hence, they
can be executed easily and repeatedly). This encourages a regression testing strat-
egy (Chapter 17) whenever code is modified (which is often, given the XP refactor-
ing philosophy).

PART ONE
THE SOFTWARE PROCESS
Refactoring improves
the internal structure of
a design (or source
code) without
changing its external
functionality or
behavior.
WebRef
Useful information on
XP can be obtained 
at www
.xprogramming.
com.

This approach is analogous to knowing the exam questions before you begin to study. It makes
studying much easier by focusing attention only on the questions that will be asked.

Unit testing, discussed in detail in Chapter 17, focuses on an individual software component, exer-
cising the component’s interface, data structures, and functionality in an effort to uncover errors
that are local to the component.
What is 
pair
programming?
?
Many software teams
are populated by indi-
vidualists. You’ll have
to work to change that
culture if pair program-
ming is to work effec-
tively.
How are unit
tests used in
XP??

As the individual unit tests are organized into a “universal testing suite” [Wel99],
integration and validation testing of the system can occur on a daily basis. This pro-
vides the XP team with a continual indication of progress and also can raise warn-
ing flags early if things go awry. Wells [Wel99] states: “Fixing small problems every
few hours takes less time than fixing huge problems just before the deadline.”
XP acceptance tests, also called customer tests, are specified by the customer and
focus on overall system features and functionality that are visible and reviewable by
the customer. Acceptance tests are derived from user stories that have been imple-
mented as part of a software release.
3.4.3
Industrial XP
Joshua Kerievsky [Ker05] describes Industrial Extreme Programming (IXP) in the fol-
lowing manner: “IXP is an organic evolution of XP. It is imbued with XP’s minimal-
ist, customer-centric, test-driven spirit. IXP differs most from the original XP in its
greater inclusion of management, its expanded role for customers, and its upgraded
technical practices.” IXP incorporates six new practices that are designed to help
ensure that an XP project works successfully for significant projects within a large
organization.
Readiness assessment.
Prior to the initiation of an IXP project, the organ-
ization should conduct a readiness assessment. The assessment ascertains
whether (1) an appropriate development environment exists to support IXP,
(2) the team will be populated by the proper set of stakeholders, (3) the or-
ganization has a distinct quality program and supports continuous improve-
ment, (4) the organizational culture will support the new values of an agile
team, and (5) the broader project community will be populated appropriately.
Project community.
Classic XP suggests that the right people be used to
populate the agile team to ensure success. The implication is that people on
the team must be well-trained, adaptable and skilled, and have the proper
temperament to contribute to a self-organizing team. When XP is to be
applied for a significant project in a large organization, the concept of the
“team” should morph into that of a community. A community may have a
technologist and customers who are central to the success of a project as
well as many other stakeholders (e.g., legal staff, quality auditors, manufac-
turing or sales types) who “are often at the periphery of an IXP project yet
they may play important roles on the project” [Ker05]. In IXP, the community
members and their roles should be explicitly defined and mechanisms for
communication and coordination between community members should be
established.
Project chartering.
The IXP team assesses the project itself to determine
whether an appropriate business justification for the project exists and
whether the project will further the overall goals and objectives of the
CHAPTER 3
AGILE DEVELOPMENT

XP acceptance tests
are derived from user
stories.
What new
practices are
appended to XP
to create IXP?
?
uote:
“Ability is what
you’re capable of
doing. Motivation
determines what
you do. Attitude
determines how
well you do it.”
Lou Holtz

organization. Chartering also examines the context of the project to deter-
mine how it complements, extends, or replaces existing systems or
processes.
Test-driven management.
An IXP project requires measurable criteria for
assessing the state of the project and the progress that has been made to
date. Test-driven management establishes a series of measurable “destina-
tions” [Ker05] and then defines mechanisms for determining whether or not
these destinations have been reached.
Retrospectives.
An IXP team conducts a specialized technical review
(Chapter 15) after a software increment is delivered. Called a retrospective,
the review examines “issues, events, and lessons-learned” [Ker05] across a
software increment and/or the entire software release. The intent is to
improve the IXP process.
Continuous learning.
Because learning is a vital part of continuous
process improvement, members of the XP team are encouraged (and possi-
bly, incented) to learn new methods and techniques that can lead to a higher-
quality product.
In addition to the six new practices discussed, IXP modifies a number of existing
XP practices. Story-driven development (SDD) insists that stories for acceptance tests
be written before a single line of code is generated. Domain-driven design (DDD) is
an improvement on the “system metaphor” concept used in XP. DDD [Eva03] sug-
gests the evolutionary creation of a domain model that “accurately represents how
domain experts think about their subject” [Ker05]. Pairing extends the XP pair-
programming concept to include managers and other stakeholders. The intent is to
improve knowledge sharing among XP team members who may not be directly in-
volved in technical development. Iterative usability discourages front-loaded inter-
face design in favor of usability design that evolves as software increments are
delivered and users’ interaction with the software is studied.
IXP makes smaller modifications to other XP practices and redefines certain roles
and responsibilities to make them more amenable to significant projects for large
organizations. For further discussion of IXP, visit http://industrialxp.org.
3.4.4
The XP Debate
All new process models and methods spur worthwhile discussion and in some in-
stances heated debate. Extreme Programming has done both. In an interesting book
that examines the efficacy of XP, Stephens and Rosenberg [Ste03] argue that many
XP practices are worthwhile, but others have been overhyped, and a few are prob-
lematic. The authors suggest that the codependent nature of XP practices are both
its strength and its weakness. Because many organizations adopt only a subset of XP
practices, they weaken the efficacy of the entire process. Proponents counter that
XP is continuously evolving and that many of the issues raised by critics have been

PART ONE
THE SOFTWARE PROCESS

addressed as XP practice matures. Among the issues that continue to trouble some
critics of XP are:10
• Requirements volatility. Because the customer is an active member of the XP
team, changes to requirements are requested informally. As a consequence,
the scope of the project can change and earlier work may have to be
modified to accommodate current needs. Proponents argue that this happens
regardless of the process that is applied and that XP provides mechanisms for
controlling scope creep.
• Conflicting customer needs. Many projects have multiple customers, each with
his own set of needs. In XP, the team itself is tasked with assimilating the
needs of different customers, a job that may be beyond their scope of
authority.
• Requirements are expressed informally. User stories and acceptance tests are
the only explicit manifestation of requirements in XP. Critics argue that a
more formal model or specification is often needed to ensure that omissions,
inconsistencies, and errors are uncovered before the system is built. Propo-
nents counter that the changing nature of requirements makes such models
and specification obsolete almost as soon as they are developed.
• Lack of formal design. XP deemphasizes the need for architectural design and
in many instances, suggests that design of all kinds should be relatively
informal. Critics argue that when complex systems are built, design must be
emphasized to ensure that the overall structure of the software will exhibit
quality and maintainability. XP proponents suggest that the incremental
nature of the XP process limits complexity (simplicity is a core value) and
therefore reduces the need for extensive design.
You should note that every software process has flaws and that many software or-
ganizations have used XP successfully. The key is to recognize where a process may
have weaknesses and to adapt it to the specific needs of your organization.
CHAPTER 3
AGILE DEVELOPMENT

10 For a detailed look at some thoughtful criticism that has been leveled at XP, visit
www.softwarereality.com/ExtremeProgramming.jsp.
What are
some of the
issues that lead to
an XP debate?
?
The scene: Doug Miller’s office.
The Players: Doug Miller, software engineering
manager; Jamie Lazar, software team member; Vinod
Raman, software team member.
The conversation:
(A knock on the door, Jamie and Vinod enter Doug’s office)
Jamie: Doug, you got a minute?
SAFEHOME
Considering Agile Software Development

3.5
OTHER AGILE PROCESS MODELS
The history of software engineering is littered with dozens of obsolete process
descriptions and methodologies, modeling methods and notations, tools, and
technology. Each flared in notoriety and was then eclipsed by something new and
(purportedly) better. With the introduction of a wide array of agile process models—
each contending for acceptance within the software development community—the
agile movement is following the same historical path.11
As I noted in the last section, the most widely used of all agile process models
is Extreme Programming (XP). But many other agile process models have been
proposed and are in use across the industry. Among the most common are:
• Adaptive Software Development (ASD)
• Scrum
• Dynamic Systems Development Method (DSDM)

PART ONE
THE SOFTWARE PROCESS
Doug: Sure Jamie, what’s up?
Jamie: We’ve been thinking about our process
discussion yesterday . . . you know, what process we’re
going to choose for this new SafeHome project.
Doug: And?
Vinod: I was talking to a friend at another company,
and he was telling me about Extreme Programming. It’s
an agile process model . . . heard of it?
Doug: Yeah, some good, some bad.
Jamie: Well, it sounds pretty good to us. Lets you
develop software really fast, uses something called pair
programming to do real-time quality checks . . . it’s pretty
cool, I think.
Doug: It does have a lot of really good ideas. I like the
pair-programming concept, for instance, and the idea
that stakeholders should be part of the team.
Jamie: Huh? You mean that marketing will work on the
project team with us?
Doug (nodding): They’re a stakeholder, aren’t they?
Jamie: Jeez . . . they’ll be requesting changes every five
minutes.
Vinod: Not necessarily. My friend said that there are
ways to “embrace” changes during an XP project.
Doug: So you guys think we should use XP?
Jamie: It’s definitely worth considering.
Doug: I agree. And even if we choose an incremental
model as our approach, there’s no reason why we can’t
incorporate much of what XP has to offer.
Vinod: Doug, before you said “some good, some bad.”
What was the “bad”?
Doug: The thing I don’t like is the way XP downplays
analysis and design . . . sort of says that writing code is
where the action is . . . 
(The team members look at one another and smile.)
Doug: So you agree with the XP approach?
Jamie (speaking for both): Writing code is what
we do, Boss!
Doug (laughing): True, but I’d like to see you spend a
little less time coding and then recoding and a little more
time analyzing what has to be done and designing a
solution that works.
Vinod: Maybe we can have it both ways, agility with a
little discipline.
Doug: I think we can, Vinod. In fact, I’m sure of it.
uote:
“Our profession
goes through
methodologies like
a 14-year-old goes
through clothing.”
Stephen
Hawrysh and
Jim Ruprecht
11 This is not a bad thing. Before one or more models or methods are accepted as a de facto standard,
all must contend for the hearts and minds of software engineers. The “winners” evolve into best
practice, while the “losers” either disappear or merge with the winning models.

• Crystal
• Feature Drive Development (FDD)
• Lean Software Development (LSD)
• Agile Modeling (AM)
• Agile Unified Process (AUP)
In the sections that follow, I present a very brief overview of each of these agile
process models. It is important to note that all agile process models conform (to a
greater or lesser degree) to the Manifesto for Agile Software Development and the prin-
ciples noted in Section 3.3.1. For additional detail, refer to the references noted in
each subsection or for a survey, examine the “agile software development” entry
in Wikipedia.12
3.5.1
Adaptive Software Development (ASD)
Adaptive Software Development (ASD) has been proposed by Jim Highsmith [Hig00] as
a technique for building complex software and systems. The philosophical under-
pinnings of ASD focus on human collaboration and team self-organization.
Highsmith argues that an agile, adaptive development approach based on collab-
oration is “as much a source of order in our complex interactions as discipline and
engineering.” He defines an ASD “life cycle” (Figure 3.3) that incorporates three
phases, speculation, collaboration, and learning.
CHAPTER 3
AGILE DEVELOPMENT

12 See http://en.wikipedia.org/wiki/Agile_software_development#Agile_methods.
WebRef
Useful resources for
ASD can be found at
www.adaptivesd
.com.
adaptive cycle planning
 mission statement
 project constraints
 basic requirements
time-boxed release plan
components implemented/tested
 focus groups for feedback
 formal technical reviews
postmortems
Requirements gathering
 JAD
 mini-specs
software increment
 adjustments for subsequent cycles
Release
collaboration
speculation
learning
FIGURE 3.3
Adaptive
software
development

During speculation, the project is initiated and adaptive cycle planning is con-
ducted. Adaptive cycle planning uses project initiation information—the customer’s
mission statement, project constraints (e.g., delivery dates or user descriptions), and
basic requirements—to define the set of release cycles (software increments) that
will be required for the project.
No matter how complete and farsighted the cycle plan, it will invariably change.
Based on information obtained at the completion of the first cycle, the plan is re-
viewed and adjusted so that planned work better fits the reality in which an ASD
team is working.
Motivated people use collaboration in a way that multiplies their talent and cre-
ative output beyond their absolute numbers. This approach is a recurring theme in
all agile methods. But collaboration is not easy. It encompasses communication and
teamwork, but it also emphasizes individualism, because individual creativity plays
an important role in collaborative thinking. It is, above all, a matter of trust. People
working together must trust one another to (1) criticize without animosity, (2) assist
without resentment, (3) work as hard as or harder than they do, (4) have the skill set
to contribute to the work at hand, and (5) communicate problems or concerns in a
way that leads to effective action.
As members of an ASD team begin to develop the components that are part of an
adaptive cycle, the emphasis is on “learning” as much as it is on progress toward
a completed cycle. In fact, Highsmith [Hig00] argues that software developers often
overestimate their own understanding (of the technology, the process, and the proj-
ect) and that learning will help them to improve their level of real understanding.
ASD teams learn in three ways: focus groups (Chapter 5), technical reviews (Chap-
ter 14), and project postmortems.
The ASD philosophy has merit regardless of the process model that is used. ASD’s
overall emphasis on the dynamics of self-organizing teams, interpersonal collabo-
ration, and individual and team learning yield software project teams that have a
much higher likelihood of success.
3.5.2
Scrum
Scrum (the name is derived from an activity that occurs during a rugby match13) is
an agile software development method that was conceived by Jeff Sutherland and his
development team in the early 1990s. In recent years, further development on the
Scrum methods has been performed by Schwaber and Beedle [Sch01a].
Scrum principles are consistent with the agile manifesto and are used to guide
development activities within a process that incorporates the following framework
activities: requirements, analysis, design, evolution, and delivery. Within each

PART ONE
THE SOFTWARE PROCESS
Effective collaboration
with your customer will
only occur if you
jettison any “us and
them” attitudes.
ASD emphasizes
learning as a key
element in achieving 
a “self-organizing”
team.
13 A group of players forms around the ball and the teammates work together (sometimes violently!)
to move the ball downfield.
WebRef
Useful Scrum
information and
resources can be found
at www
.controlchaos.com.

every 24
hours
30 days
Scrum: 15 minute daily meeting.
Team members respond to basics:
1) What did you do since last Scrum
 
meeting?
2) Do you have any obstacles?
3) What will you do before next
 
meeting?
Sprint Backlog:
Feature(s)
assigned
to sprint
Product Backlog:
Prioritized product features desired by the customer
Backlog
items
expanded
by team
New functionality
is demonstrated
at end of sprint
framework activity, work tasks occur within a process pattern (discussed in the fol-
lowing paragraph) called a sprint. The work conducted within a sprint (the number
of sprints required for each framework activity will vary depending on product com-
plexity and size) is adapted to the problem at hand and is defined and often modified
in real time by the Scrum team. The overall flow of the Scrum process is illustrated
in Figure 3.4.
Scrum emphasizes the use of a set of software process patterns [Noy02] that have
proven effective for projects with tight timelines, changing requirements, and business
criticality. Each of these process patterns defines a set of development actions:
Backlog—a prioritized list of project requirements or features that provide busi-
ness value for the customer. Items can be added to the backlog at any time (this is
how changes are introduced). The product manager assesses the backlog and
updates priorities as required.
Sprints—consist of work units that are required to achieve a requirement de-
fined in the backlog that must be fit into a predefined time-box14 (typically 30 days).
CHAPTER 3
AGILE DEVELOPMENT

14 A time-box is a project management term (see Part 4 of this book) that indicates a period of time
that has been allocated to accomplish some task.
FIGURE 3.4
Scrum process
flow
Scrum incorporates a
set of process patterns
that emphasize project
priorities,
compartmentalized
work units,
communication, and
frequent customer
feedback.

Changes (e.g., backlog work items) are not introduced during the sprint. Hence, the
sprint allows team members to work in a short-term, but stable environment.
Scrum meetings—are short (typically 15 minutes) meetings held daily by the Scrum
team. Three key questions are asked and answered by all team members [Noy02]:
• What did you do since the last team meeting?
• What obstacles are you encountering?
• What do you plan to accomplish by the next team meeting?
A team leader, called a Scrum master, leads the meeting and assesses the responses
from each person. The Scrum meeting helps the team to uncover potential problems
as early as possible. Also, these daily meetings lead to “knowledge socialization”
[Bee99] and thereby promote a self-organizing team structure.
Demos—deliver the software increment to the customer so that functionality that
has been implemented can be demonstrated and evaluated by the customer. It is im-
portant to note that the demo may not contain all planned functionality, but rather
those functions that can be delivered within the time-box that was established.
Beedle and his colleagues [Bee99] present a comprehensive discussion of these pat-
terns in which they state: “Scrum assumes up-front the existence of chaos. . . . ” The
Scrum process patterns enable a software team to work successfully in a world
where the elimination of uncertainty is impossible.
3.5.3
Dynamic Systems Development Method (DSDM)
The Dynamic Systems Development Method (DSDM) [Sta97] is an agile software devel-
opment approach that “provides a framework for building and maintaining systems
which meet tight time constraints through the use of incremental prototyping in a con-
trolled project environment” [CCS02]. The DSDM philosophy is borrowed from a mod-
ified version of the Pareto principle—80 percent of an application can be delivered in
20 percent of the time it would take to deliver the complete (100 percent) application.
DSDM is an iterative software process in which each iteration follows the 80 per-
cent rule. That is, only enough work is required for each increment to facilitate
movement to the next increment. The remaining detail can be completed later when
more business requirements are known or changes have been requested and
accommodated.
The DSDM Consortium (www.dsdm.org) is a worldwide group of member com-
panies that collectively take on the role of “keeper” of the method. The consortium
has defined an agile process model, called the DSDM life cycle that defines three dif-
ferent iterative cycles, preceded by two additional life cycle activities:
Feasibility study—establishes the basic business requirements and constraints
associated with the application to be built and then assesses whether the applica-
tion is a viable candidate for the DSDM process.

PART ONE
THE SOFTWARE PROCESS
WebRef
Useful resources for
DSSD can be found at
www.dsdm.org.

Business study—establishes the functional and information requirements that
will allow the application to provide business value; also, defines the basic
application architecture and identifies the maintainability requirements for the
application.
Functional model iteration—produces a set of incremental prototypes that
demonstrate functionality for the customer. (Note: All DSDM prototypes are in-
tended to evolve into the deliverable application.) The intent during this iterative
cycle is to gather additional requirements by eliciting feedback from users as they
exercise the prototype.
Design and build iteration—revisits prototypes built during functional model
iteration to ensure that each has been engineered in a manner that will enable it to
provide operational business value for end users. In some cases, functional model
iteration and design and build iteration occur concurrently.
Implementation—places the latest software increment (an “operationalized” pro-
totype) into the operational environment. It should be noted that (1) the increment
may not be 100 percent complete or (2) changes may be requested as the incre-
ment is put into place. In either case, DSDM development work continues by
returning to the functional model iteration activity.
DSDM can be combined with XP (Section 3.4) to provide a combination approach
that defines a solid process model (the DSDM life cycle) with the nuts and bolts prac-
tices (XP) that are required to build software increments. In addition, the ASD con-
cepts of collaboration and self-organizing teams can be adapted to a combined
process model.
3.5.4
Crystal
Alistair Cockburn [Coc05] and Jim Highsmith [Hig02b] created the Crystal family of
agile methods15 in order to achieve a software development approach that puts a
premium on “maneuverability” during what Cockburn characterizes as “a resource-
limited, cooperative game of invention and communication, with a primary goal of
delivering useful, working software and a secondary goal of setting up for the next
game” [Coc02].
To achieve maneuverability, Cockburn and Highsmith have defined a set of
methodologies, each with core elements that are common to all, and roles, process
patterns, work products, and practice that are unique to each. The Crystal family is
actually a set of example agile processes that have been proven effective for differ-
ent types of projects. The intent is to allow agile teams to select the member of the
crystal family that is most appropriate for their project and environment.
CHAPTER 3
AGILE DEVELOPMENT

15 The name “crystal” is derived from the characteristics of geological crystals, each with its own
color, shape, and hardness.
Crystal is a family of
process models with
the same “genetic
code” but different
methods for adapting
to project
characteristics.
DSDM is a process
framework that can
adopt the tactics of
another agile approach
such as XP.

3.5.5
Feature Driven Development (FDD)
Feature Driven Development (FDD) was originally conceived by Peter Coad and his
colleagues [Coa99] as a practical process model for object-oriented software engi-
neering. Stephen Palmer and John Felsing [Pal02] have extended and improved
Coad’s work, describing an adaptive, agile process that can be applied to moderately
sized and larger software projects.
Like other agile approaches, FDD adopts a philosophy that (1) emphasizes col-
laboration among people on an FDD team; (2) manages problem and project
complexity using feature-based decomposition followed by the integration of
software increments, and (3) communication of technical detail using verbal,
graphical, and text-based means. FDD emphasizes software quality assurance
activities by encouraging an incremental development strategy, the use of design
and code inspections, the application of software quality assurance audits (Chap-
ter 16), the collection of metrics, and the use of patterns (for analysis, design, and
construction).
In the context of FDD, a feature “is a client-valued function that can be imple-
mented in two weeks or less” [Coa99]. The emphasis on the definition of features
provides the following benefits:
• Because features are small blocks of deliverable functionality, users can
describe them more easily; understand how they relate to one another more
readily; and better review them for ambiguity, error, or omissions.
• Features can be organized into a hierarchical business-related grouping.
• Since a feature is the FDD deliverable software increment, the team develops
operational features every two weeks.
• Because features are small, their design and code representations are easier
to inspect effectively.
• Project planning, scheduling, and tracking are driven by the feature
hierarchy, rather than an arbitrarily adopted software engineering 
task set.
Coad and his colleagues [Coa99] suggest the following template for defining a
feature:
<action> the <result> <by for of to> a(n) <object>
where an <object> is “a person, place, or thing (including roles, moments in time or
intervals of time, or catalog-entry-like descriptions).” Examples of features for an 
e-commerce application might be:
Add the product to shopping cart
Display the technical-specifications of the product
Store the shipping-information for the customer

PART ONE
THE SOFTWARE PROCESS
WebRef
A wide variety of
articles and
presentations on FDD
can be found at:
www.featuredrive
ndevelopment
.com/.

A feature set groups related features into business-related categories and is defined
[Coa99] as:
<action><-ing> a(n) <object>
For example: Making a product sale is a feature set that would encompass the fea-
tures noted earlier and others.
The FDD approach defines five “collaborating” [Coa99] framework activities (in
FDD these are called “processes”) as shown in Figure 3.5.
FDD provides greater emphasis on project management guidelines and tech-
niques than many other agile methods. As projects grow in size and complexity,
ad hoc project management is often inadequate. It is essential for developers, their
managers, and other stakeholders to understand project status—what accomplish-
ments have been made and problems have been encountered. If deadline pressure
is significant, it is critical to determine if software increments (features) are properly
scheduled. To accomplish this, FDD defines six milestones during the design and
implementation of a feature: “design walkthrough, design, design inspection, code,
code inspection, promote to build” [Coa99].
3.5.6
Lean Software Development (LSD)
Lean Software Development (LSD) has adapted the principles of lean manufacturing
to the world of software engineering. The lean principles that inspire the LSD process
can be summarized ([Pop03], [Pop06a]) as eliminate waste, build quality in, create
knowledge, defer commitment, deliver fast, respect people, and optimize the whole.
Each of these principles can be adapted to the software process. For example,
eliminate waste within the context of an agile software project can be interpreted
to mean [Das05]: (1) adding no extraneous features or functions, (2) assessing the
cost and schedule impact of any newly requested requirement, (3) removing any
superfluous process steps, (4) establishing mechanisms to improve the way team
members find information, (5) ensuring the testing finds as many errors as possible,
CHAPTER 3
AGILE DEVELOPMENT

Develop
an
Overall
Model
Build a
Features
List
Plan
By
Feature
Design
By
Feature
Build
By
Feature
(more shape
than content)
A list of features
grouped into sets
and subject areas
A development plan
Class owners
Feature Set Owners
A design
package
(sequences)
Completed
client-value
function
FIGURE 3.5
Feature Driven
Development
[Coa99] (with
permission)

(6) reducing the time required to request and get a decision that affects the software
or the process that is applied to create it, and (7) streamlining the manner in which
information is transmitted to all stakeholders involved in the process.
For a detailed discussion of LSD and pragmatic guidelines for implementing the
process, you should examine [Pop06a] and [Pop06b].
3.5.7
Agile Modeling (AM)
There are many situations in which software engineers must build large, business-
critical systems. The scope and complexity of such systems must be modeled so that
(1) all constituencies can better understand what needs to be accomplished, (2) the
problem can be partitioned effectively among the people who must solve it, and
(3) quality can be assessed as the system is being engineered and built.
Over the past 30 years, a wide variety of software engineering modeling methods
and notation have been proposed for analysis and design (both architectural and
component-level). These methods have merit, but they have proven to be difficult
to apply and challenging to sustain (over many projects). Part of the problem is the
“weight” of these modeling methods. By this I mean the volume of notation required,
the degree of formalism suggested, the sheer size of the models for large projects,
and the difficulty in maintaining the model(s) as changes occur. Yet analysis and de-
sign modeling have substantial benefit for large projects—if for no other reason than
to make these projects intellectually manageable. Is there an agile approach to soft-
ware engineering modeling that might provide an alternative?
At “The Official Agile Modeling Site,” Scott Ambler [Amb02a] describes agile mod-
eling (AM) in the following manner:
Agile Modeling (AM) is a practice-based methodology for effective modeling and documen-
tation of software-based systems. Simply put, Agile Modeling (AM) is a collection of values,
principles, and practices for modeling software that can be applied on a software develop-
ment project in an effective and light-weight manner. Agile models are more effective than
traditional models because they are just barely good, they don’t have to be perfect.
Agile modeling adopts all of the values that are consistent with the agile manifesto.
The agile modeling philosophy recognizes that an agile team must have the courage
to make decisions that may cause it to reject a design and refactor. The team must
also have the humility to recognize that technologists do not have all the answers and
that business experts and other stakeholders should be respected and embraced.
Although AM suggests a wide array of “core” and “supplementary” modeling prin-
ciples, those that make AM unique are [Amb02a]:
Model with a purpose.
A developer who uses AM should have a specific
goal (e.g., to communicate information to the customer or to help better un-
derstand some aspect of the software) in mind before creating the model.
Once the goal for the model is identified, the type of notation to be used and
level of detail required will be more obvious.

PART ONE
THE SOFTWARE PROCESS
WebRef
Comprehensive
information on agile
modeling can be found
at: www
.agilemodeling.com.
uote:
“I was in the drug
store the other day
trying to get a cold
medication . . . not
easy. There’s an
entire wall of
products you need.
You stand there
going, Well, this
one is quick acting
but this is long
lasting. . . . Which
is more important,
the present or the
future?”
Jerry Seinfeld

Use multiple models.
There are many different models and notations that
can be used to describe software. Only a small subset is essential for most
projects. AM suggests that to provide needed insight, each model should
present a different aspect of the system and only those models that provide
value to their intended audience should be used.
Travel light.
As software engineering work proceeds, keep only those mod-
els that will provide long-term value and jettison the rest. Every work product
that is kept must be maintained as changes occur. This represents work that
slows the team down. Ambler [Amb02a] notes that “Every time you decide to
keep a model you trade-off agility for the convenience of having that informa-
tion available to your team in an abstract manner (hence potentially enhanc-
ing communication within your team as well as with project stakeholders).”
Content is more important than representation.
Modeling should im-
part information to its intended audience. A syntactically perfect model that
imparts little useful content is not as valuable as a model with flawed nota-
tion that nevertheless provides valuable content for its audience.
Know the models and the tools you use to create them.
Understand
the strengths and weaknesses of each model and the tools that are used to
create it.
Adapt locally.
The modeling approach should be adapted to the needs of
the agile team.
A major segment of the software engineering community has adopted the Unified
Modeling Language (UML)16 as the preferred method for representing analysis and
design models. The Unified Process (Chapter 2) has been developed to provide a
framework for the application of UML. Scott Ambler [Amb06] has developed a sim-
plified version of the UP that integrates his agile modeling philosophy.
3.5.8
Agile Unified Process (AUP)
The Agile Unified Process (AUP) adopts a “serial in the large” and “iterative in the
small” [Amb06] philosophy for building computer-based systems. By adopting the
classic UP phased activities—inception, elaboration, construction, and transition—AUP
provides a serial overlay (i.e., a linear sequence of software engineering activities)
that enables a team to visualize the overall process flow for a software project. How-
ever, within each of the activities, the team iterates to achieve agility and to deliver
meaningful software increments to end users as rapidly as possible. Each AUP iter-
ation addresses the following activities [Amb06]: 
• Modeling. UML representations of the business and problem domains are
created. However, to stay agile, these models should be “just barely good
enough” [Amb06] to allow the team to proceed.
CHAPTER 3
AGILE DEVELOPMENT

“Traveling light” is an
appropriate philosophy
for all software engi-
neering work. Build
only those models that
provide value … no
more, no less.
16 A brief tutorial on UML is presented in Appendix 1.

• Implementation. Models are translated into source code.
• Testing. Like XP, the team designs and executes a series of tests to uncover
errors and ensure that the source code meets its requirements.
• Deployment. Like the generic process activity discussed in Chapters 1 and 2,
deployment in this context focuses on the delivery of a software increment
and the acquisition of feedback from end users.
• Configuration and project management. In the context of AUP, configuration
management (Chapter 22) addresses change management, risk manage-
ment, and the control of any persistent work products17 that are produced by
the team. Project management tracks and controls the progress of the team
and coordinates team activities.
• Environment management. Environment management coordinates a process
infrastructure that includes standards, tools, and other support technology
available to the team.
Although the AUP has historical and technical connections to the Unified Modeling
Language, it is important to note that UML modeling can be using in conjunction
with any of the agile process models described in Section 3.5.

PART ONE
THE SOFTWARE PROCESS
17 A persistent work product is a model or document or test case produced by the team that will be kept
for an indeterminate period of time. It will not be discarded once the software increment is
delivered.
18 Tools noted here do not represent an endorsement, but rather a sampling of tools in this category.
In most cases, tool names are trademarked by their respective developers.
Agile Development
Objective: The objective of agile development
tools is to assist in one or more aspects of agile
development with an emphasis on facilitating the rapid
generation of operational software. These tools can also
be used when prescriptive process models (Chapter 2) are
applied.
Mechanics: Tool mechanics vary. In general, agile tool
sets encompass automated support for project planning,
use case development and requirements gathering, rapid
design, code generation, and testing.
Representative Tools:18
Note: Because agile development is a hot topic, most
software tools vendors purport to sell tools that support 
the agile approach. The tools noted here have
characteristics that make them particularly useful for
agile projects.
OnTime, developed by Axosoft (www.axosoft.com),
provides agile process management support for
various technical activities within the process.
Ideogramic UML, developed by Ideogramic
(www.ideogramic.com) is a UML tool set
specifically developed for use within an agile 
process.
Together Tool Set, distributed by Borland
(www.borland.com), provides a tools suite that
supports many technical activities within XP and other
agile processes.
SOFTWARE TOOLS

3.6
A TOOL SET FOR THE AGILE PROCESS
Some proponents of the agile philosophy argue that automated software tools (e.g.,
design tools) should be viewed as a minor supplement to the team’s activities, and
not at all pivotal to the success of the team. However, Alistair Cockburn [Coc04] sug-
gests that tools can have a benefit and that “agile teams stress using tools that per-
mit the rapid flow of understanding. Some of those tools are social, starting even at
the hiring stage. Some tools are technological, helping distributed teams simulate
being physically present. Many tools are physical, allowing people to manipulate
them in workshops.”
Because acquiring the right people (hiring), team collaboration, stakeholder com-
munication, and indirect management are key elements in virtually all agile process
models, Cockburn argues that “tools” that address these issues are critical success
factors for agility. For example, a hiring “tool” might be the requirement to have a
prospective team member spend a few hours pair programming with an existing
member of the team. The “fit” can be assessed immediately.
Collaborative and communication “tools” are generally low tech and incorporate
any mechanism (“physical proximity, whiteboards, poster sheets, index cards, and
sticky notes” [Coc04]) that provides information and coordination among agile de-
velopers. Active communication is achieved via the team dynamics (e.g., pair pro-
gramming), while passive communication is achieved by “information radiators”
(e.g., a flat panel display that presents the overall status of different components of
an increment). Project management tools deemphasize the Gantt chart and replace
it with earned value charts or “graphs of tests created versus passed . . . other agile
tools are used to optimize the environment in which the agile team works (e.g., more
efficient meeting areas), improve the team culture by nurturing social interactions
(e.g., collocated teams), physical devices (e.g., electronic whiteboards), and process
enhancement (e.g., pair programming or time-boxing)” [Coc04].
Are any of these things really tools? They are, if they facilitate the work performed
by an agile team member and enhance the quality of the end product.
3.7
SUMMARY
In a modern economy, market conditions change rapidly, customer and end-user
needs evolve, and new competitive threats emerge without warning. Practitioners
must approach software engineering in a manner that allows them to remain agile—
to define maneuverable, adaptive, lean processes that can accommodate the needs
of modern business.
An agile philosophy for software engineering stresses four key issues: the impor-
tance of self-organizing teams that have control over the work they perform, com-
munication and collaboration between team members and between practitioners
and their customers, a recognition that change represents an opportunity, and
CHAPTER 3
AGILE DEVELOPMENT

The “tool set” that
supports agile
processes focuses
more on people issues
than it does on
technology issues.

MODELING

P A R T
Two
I
n this part of Software Engineering: A Practitioner’s Approach
you’ll learn about the principles, concepts, and methods that are
used to create high-quality requirements and design models.
These questions are addressed in the chapters that follow:
•
What concepts and principles guide software engineering
practice?
•
What is requirements engineering and what are the underly-
ing concepts that lead to good requirements analysis?
•
How is the requirements model created and what are its
elements?
•
What are the elements of a good design?
•
How does architectural design establish a framework for all
other design actions and what models are used?
•
How do we design high-quality software components?
•
What concepts, models, and methods are applied as a user
interface is designed?
•
What is pattern-based design?
•
What specialized strategies and methods are used to design
WebApps?
Once these questions are answered you’ll be better prepared to
apply software engineering practice.

CHAPTER 4
PRINCIPLES THAT GUIDE PRACTICE

A dark image of software engineering practice to be sure, but upon reflection,
many of the readers of this book will be able to relate to it.
People who create computer software practice the art or craft or discipline1 that
is software engineering. But what is software engineering “practice”? In a generic
sense, practice is a collection of concepts, principles, methods, and tools that a soft-
ware engineer calls upon on a daily basis. Practice allows managers to manage soft-
ware projects and software engineers to build computer programs. Practice
populates a software process model with the necessary technical and management
how-to’s to get the job done. Practice transforms a haphazard unfocused approach
into something that is more organized, more effective, and more likely to achieve
success.
Various aspects of software engineering practice will be examined throughout the
remainder of this book. In this chapter, my focus is on principles and concepts that
guide software engineering practice in general.
4.1
SOFTWARE ENGINEERING KNOWLEDGE
In an editorial published in IEEE Software a decade ago, Steve McConnell [McC99]
made the following comment:
Many software practitioners think of software engineering knowledge almost exclusively
as knowledge of specific technologies: Java, Perl, html, C, Linux, Windows NT, and so
on. Knowledge of specific technology details is necessary to perform computer program-
ming. If someone assigns you to write a program in C, you have to know something
about C to get your program to work.
You often hear people say that software development knowledge has a 3-year 
half-life: half of what you need to know today will be obsolete within 3 years. In the
domain of technology-related knowledge, that’s probably about right. But there is
another kind of software development knowledge—a kind that I think of as “software
engineering principles”—that does not have a three-year half-life. These software engi-
neering principles are likely to serve a professional programmer throughout his or her
career.
McConnell goes on to argue that the body of software engineering knowledge
(circa the year 2000) had evolved to a “stable core” that he estimated represented
about “75 percent of the knowledge needed to develop a complex system.” But what
resides within this stable core?
As McConnell indicates, core principles—the elemental ideas that guide software
engineers in the work that they do—now provide a foundation from which software
engineering models, methods, and tools can be applied and evaluated.

Some writers argue for one of these terms to the exclusion of the others. In reality, software
engineering is all three.

4.2
CORE PRINCIPLES
Software engineering is guided by a collection of core principles that help in the ap-
plication of a meaningful software process and the execution of effective software
engineering methods. At the process level, core principles establish a philosophical
foundation that guides a software team as it performs framework and umbrella ac-
tivities, navigates the process flow, and produces a set of software engineering work
products. At the level of practice, core principles establish a collection of values and
rules that serve as a guide as you analyze a problem, design a solution, implement
and test the solution, and ultimately deploy the software in the user community.
In Chapter 1, I identified a set of general principles that span software engineering
process and practice: (1) provide value to end users, (2) keep it simple, (3) maintain
the vision (of the product and the project), (4) recognize that others consume (and
must understand) what you produce, (5) be open to the future, (6) plan ahead for
reuse, and (7) think! Although these general principles are important, they are char-
acterized at such a high level of abstraction that they are sometimes difficult to trans-
late into day-to-day software engineering practice. In the subsections that follow, I
take a more detailed look at the core principles that guide process and practice.
4.2.1
Principles That Guide Process
In Part 1 of this book I discussed the importance of the software process and
described the many different process models that have been proposed for software
engineering work. Regardless of whether a model is linear or iterative, prescriptive
or agile, it can be characterized using the generic process framework that is appli-
cable for all process models. The following set of core principles can be applied to
the framework, and by extension, to every software process.
Principle 1. Be agile.
Whether the process model you choose is prescrip-
tive or agile, the basic tenets of agile development should govern your
approach. Every aspect of the work you do should emphasize economy of
action—keep your technical approach as simple as possible, keep the work
products you produce as concise as possible, and make decisions locally
whenever possible.
Principle 2. Focus on quality at every step.
The exit condition for every
process activity, action, and task should focus on the quality of the work
product that has been produced.
Principle 3. Be ready to adapt.
Process is not a religious experience, and
dogma has no place in it. When necessary, adapt your approach to con-
straints imposed by the problem, the people, and the project itself.
Principle 4. Build an effective team.
Software engineering process and
practice are important, but the bottom line is people. Build a self-organizing
team that has mutual trust and respect.

PART TWO
MODELING
uote:
“In theory there is
no difference
between theory and
practice. But, in
practice, there is.”
Jan van de
Snepscheut
Every project and
every team is unique.
That means that you
must adapt your
process to best fit your
needs.

Principle 5. Establish mechanisms for communication and coordination.
Projects fail because important information falls into the cracks and/or
stakeholders fail to coordinate their efforts to create a successful end prod-
uct. These are management issues and they must be addressed.
Principle 6. Manage change.
The approach may be either formal or infor-
mal, but mechanisms must be established to manage the way changes are
requested, assessed, approved, and implemented.
Principle 7. Assess risk.
Lots of things can go wrong as software is being
developed. It’s essential that you establish contingency plans.
Principle 8. Create work products that provide value for others.
Create only those work products that provide value for other process
activities, actions, or tasks. Every work product that is produced as part of
software engineering practice will be passed on to someone else. A list of
required functions and features will be passed along to the person (people)
who will develop a design, the design will be passed along to those who
generate code, and so on. Be sure that the work product imparts the necessary
information without ambiguity or omission.
Part 4 of this book focuses on project and process management issues and
considers various aspects of each of these principles in some detail.
4.2.2
Principles That Guide Practice
Software engineering practice has a single overriding goal—to deliver on-time, high-
quality, operational software that contains functions and features that meet the
needs of all stakeholders. To achieve this goal, you should adopt a set of core prin-
ciples that guide your technical work. These principles have merit regardless of the
analysis and design methods that you apply, the construction techniques (e.g., pro-
gramming language, automated tools) that you use, or the verification and valida-
tion approach that you choose. The following set of core principles are fundamental
to the practice of software engineering:
Principle 1. Divide and conquer.
Stated in a more technical manner,
analysis and design should always emphasize separation of concerns (SoC). A
large problem is easier to solve if it is subdivided into a collection of elements
(or concerns). Ideally, each concern delivers distinct functionality that can be
developed, and in some cases validated, independently of other concerns.
Principle 2. Understand the use of abstraction.
At its core, an abstrac-
tion is a simplification of some complex element of a system used to commu-
nicate meaning in a single phrase. When I use the abstraction spreadsheet, it
is assumed that you understand what a spreadsheet is, the general structure
of content that a spreadsheet presents, and the typical functions that can be
applied to it. In software engineering practice, you use many different levels
CHAPTER 4
PRINCIPLES THAT GUIDE PRACTICE

uote:
“The truth of the
matter is that you
always know the
right thing to do.
The hard part is
doing it.”
General H.
Norman
Schwarzkopf
Problems are easier to
solve when they are
subdivided into
separate concerns,
each distinct,
individually solvable,
and verifiable.

of abstraction, each imparting or implying meaning that must be communi-
cated. In analysis and design work, a software team normally begins with
models that represent high levels of abstraction (e.g., a spreadsheet) and
slowly refines those models into lower levels of abstraction (e.g., a column
or the SUM function).
Joel Spolsky [Spo02] suggests that “all non-trivial abstractions, to some
degree, are leaky.” The intent of an abstraction is to eliminate the need to
communicate details. But sometimes, problematic effects precipitated by
these details “leak” through. Without an understanding of the details, the
cause of a problem cannot be easily diagnosed.
Principle 3. Strive for consistency.
Whether it’s creating a requirements
model, developing a software design, generating source code, or creating
test cases, the principle of consistency suggests that a familiar context makes
software easier to use. As an example, consider the design of a user interface
for a WebApp. Consistent placement of menu options, the use of a consistent
color scheme, and the consistent use of recognizable icons all help to make
the interface ergonomically sound.
Principle 4. Focus on the transfer of information.
Software is about
information transfer—from a database to an end user, from a legacy system
to a WebApp, from an end user into a graphic user interface (GUI), from an
operating system to an application, from one software component to an-
other—the list is almost endless. In every case, information flows across an
interface, and as a consequence, there are opportunities for error, or omis-
sion, or ambiguity. The implication of this principle is that you must pay spe-
cial attention to the analysis, design, construction, and testing of interfaces.
Principle 5. Build software that exhibits effective modularity.
Separation of concerns (Principle 1) establishes a philosophy for software.
Modularity provides a mechanism for realizing the philosophy. Any complex
system can be divided into modules (components), but good software engi-
neering practice demands more. Modularity must be effective. That is, each
module should focus exclusively on one well-constrained aspect of the
system—it should be cohesive in its function and/or constrained in the
content it represents. Additionally, modules should be interconnected in a
relatively simple manner—each module should exhibit low coupling to other
modules, to data sources, and to other environmental aspects.
Principle 6. Look for patterns.
Brad Appleton [App00] suggests that: 
The goal of patterns within the software community is to create a body of literature
to help software developers resolve recurring problems encountered throughout
all of software development. Patterns help create a shared language for commu-
nicating insight and experience about these problems and their solutions. Formally
codifying these solutions and their relationships lets us successfully capture the

PART TWO
MODELING
Use patterns 
(Chapter 12) to
capture knowledge and
experience for future
generations of
software engineers.

body of knowledge which defines our understanding of good architectures that
meet the needs of their users.
Principle 7. When possible, represent the problem and its solution
from a number of different perspectives.
When a problem and its solution
are examined from a number of different perspectives, it is more likely that
greater insight will be achieved and that errors and omissions will be uncov-
ered. For example, a requirements model can be represented using a data-
oriented viewpoint, a function-oriented viewpoint, or a behavioral viewpoint
(Chapters 6 and 7). Each provides a different view of the problem and its
requirements.
Principle 8. Remember that someone will maintain the software.
Over
the long term, software will be corrected as defects are uncovered, adapted
as its environment changes, and enhanced as stakeholders request more
capabilities. These maintenance activities can be facilitated if solid software
engineering practice is applied throughout the software process.
These principles are not all you’ll need to build high-quality software, but they do
establish a foundation for every software engineering method discussed in this book.
4.3
PRINCIPLES THAT GUIDE EACH FRAMEWORK ACTIVITY
In the sections that follow I consider principles that have a strong bearing on the suc-
cess of each generic framework activity defined as part of the software process. In
many cases, the principles that are discussed for each of the framework activities are
a refinement of the principles presented in Section 4.2. They are simply core princi-
ples stated at a lower level of abstraction.
4.3.1
Communication Principles
Before customer requirements can be analyzed, modeled, or specified they must
be gathered through the communication activity. A customer has a problem that may
be amenable to a computer-based solution. You respond to the customer’s request
for help. Communication has begun. But the road from communication to under-
standing is often full of potholes.
Effective communication (among technical peers, with the customer and other
stakeholders, and with project managers) is among the most challenging activities
that you will confront. In this context, I discuss communication principles as they
apply to customer communication. However, many of the principles apply equally to
all forms of communication that occur within a software project.
Principle 1. Listen.
Try to focus on the speaker’s words, rather than formu-
lating your response to those words. Ask for clarification if something is un-
clear, but avoid constant interruptions. Never become contentious in your words
or actions (e.g., rolling your eyes or shaking your head) as a person is talking.
CHAPTER 4
PRINCIPLES THAT GUIDE PRACTICE

uote:
“The ideal engineer
is a composite. . . .
He is not a
scientist, he is not a
mathematician, he
is not a sociologist
or a writer; but he
may use the
knowledge and
techniques of any
or all of these
disciplines in
solving engineering
problems.”
N. W.
Dougherty

Principle 2. Prepare before you communicate.
Spend the time to under-
stand the problem before you meet with others. If necessary, do some re-
search to understand business domain jargon. If you have responsibility for
conducting a meeting, prepare an agenda in advance of the meeting.
Principle 3. Someone should facilitate the activity.
Every communica-
tion meeting should have a leader (a facilitator) to keep the conversation
moving in a productive direction, (2) to mediate any conflict that does occur,
and (3) to ensure than other principles are followed.
Principle 4. Face-to-face communication is best.
But it usually works
better when some other representation of the relevant information is present.
For example, a participant may create a drawing or a “strawman” document
that serves as a focus for discussion.
Principle 5. Take notes and document decisions.
Things have a way of
falling into the cracks. Someone participating in the communication should
serve as a “recorder” and write down all important points and decisions.
Principle 6. Strive for collaboration.
Collaboration and consensus occur
when the collective knowledge of members of the team is used to
describe product or system functions or features. Each small collaboration
serves to build trust among team members and creates a common goal for
the team.
Principle 7. Stay focused; modularize your discussion.
The more
people involved in any communication, the more likely that discussion will
bounce from one topic to the next. The facilitator should keep the conversation
modular, leaving one topic only after it has been resolved (however, see
Principle 9).
Principle 8. If something is unclear, draw a picture. Verbal communica-
tion goes only so far. A sketch or drawing can often provide clarity when
words fail to do the job.
Principle 9. (a) Once you agree to something, move on. (b) If you can’t
agree to something, move on. (c) If a feature or function is unclear
and cannot be clarified at the moment, move on.
Communication, like
any software engineering activity, takes time. Rather than iterating endlessly,
the people who participate should recognize that many topics require discus-
sion (see Principle 2) and that “moving on” is sometimes the best way to
achieve communication agility.
Principle 10. Negotiation is not a contest or a game. It works best
when both parties win.
There are many instances in which you and other
stakeholders must negotiate functions and features, priorities, and delivery
dates. If the team has collaborated well, all parties have a common goal. Still,
negotiation will demand compromise from all parties.

PART TWO
MODELING
Before communicating
be sure you under-
stand the point of view
of the other party,
know a bit about his or
her needs, and then
listen.
uote:
“Plain questions
and plain answers
make the shortest
road to most
perplexities.”
Mark Twain
What
happens if I
can’t come to an
agreement with
the customer on
some project-
related issue?
?

CHAPTER 4
PRINCIPLES THAT GUIDE PRACTICE

Communication Mistakes
The scene: Software engineering
team workspace
The players: Jamie Lazar, software team member;
Vinod Raman, software team member; Ed Robbins,
software team member.
The conversation:
Ed: “What have you heard about this SafeHome
project?”
Vinod: “The kick-off meeting is scheduled for next
week.”
Jamie: “I’ve already done a little bit of investigation, but
it didn’t go well.”
Ed: “What do you mean?”
Jamie: “Well, I gave Lisa Perez a call. She’s the
marketing honcho on this thing.”
Vinod: “And . . . ?”
Jamie: “I wanted her to tell me about SafeHome features
and functions . . . that sort of thing. Instead, she began
asking me questions about security systems, surveillance
systems . . . I’m no expert.”
Vinod: “What does that tell you?”
(Jamie shrugs.)
Vinod: “That marketing will need us to act as consultants
and that we’d better do some homework on this product
area before our kick-off meeting. Doug said that he
wanted us to ‘collaborate’ with our customer, so we’d
better learn how to do that.”
Ed: “Probably would have been better to stop by her office.
Phone calls just don’t work as well for this sort of thing.”
Jamie: “You’re both right. We’ve got to get our act
together or our early communications will be a struggle.”
Vinod: “I saw Doug reading a book on ‘requirements
engineering.’ I’ll bet that lists some principles of good
communication. I’m going to borrow it from him.”
Jamie: “Good idea . . . then you can teach us.”
Vinod (smiling): “Yeah, right.”
SAFEHOME
4.3.2
Planning Principles
The communication activity helps you to define your overall goals and objectives
(subject, of course, to change as time passes). However, understanding these goals
and objectives is not the same as defining a plan for getting there. The planning
activity encompasses a set of management and technical practices that enable the
software team to define a road map as it travels toward its strategic goal and tacti-
cal objectives.
The Difference Between Customers and End Users
Software engineers communicate with many
different stakeholders, but customers and end
users have the most significant impact on the technical
work that follows. In some cases the customer and the end
user are one and the same, but for many projects, the
customer and the end user are different people, working
for different managers, in different business organizations.
A customer is the person or group who (1) originally
requested the software to be built, (2) defines overall
business objectives for the software, (3) provides basic
product requirements, and (4) coordinates funding for the
project. In a product or system business, the customer
is often the marketing department. In an information
technology (IT) environment, the customer might be a
business component or department.
An end user is the person or group who (1) will
actually use the software that is built to achieve some
business purpose and (2) will define operational 
details of the software so the business purpose can be
achieved.
INFO

Try as we might, it’s impossible to predict exactly how a software project will
evolve. There is no easy way to determine what unforeseen technical problems will
be encountered, what important information will remain undiscovered until late in
the project, what misunderstandings will occur, or what business issues will change.
And yet, a good software team must plan its approach.
There are many different planning philosophies.2 Some people are “minimalists,”
arguing that change often obviates the need for a detailed plan. Others are “tradi-
tionalists,” arguing that the plan provides an effective road map and the more detail
it has, the less likely the team will become lost. Still others are “agilists,” arguing that
a quick “planning game” may be necessary, but that the road map will emerge as
“real work” on the software begins.
What to do? On many projects, overplanning is time consuming and fruitless (too
many things change), but underplanning is a recipe for chaos. Like most things in
life, planning should be conducted in moderation, enough to provide useful guidance
for the team—no more, no less. Regardless of the rigor with which planning is con-
ducted, the following principles always apply:
Principle 1. Understand the scope of the project.
It’s impossible to use
a road map if you don’t know where you’re going. Scope provides the soft-
ware team with a destination.
Principle 2. Involve stakeholders in the planning activity.
Stakeholders
define priorities and establish project constraints. To accommodate these
realities, software engineers must often negotiate order of delivery, time
lines, and other project-related issues.
Principle 3. Recognize that planning is iterative.
A project plan is never
engraved in stone. As work begins, it is very likely that things will change. As
a consequence, the plan must be adjusted to accommodate these changes. In
addition, iterative, incremental process models dictate replanning after the
delivery of each software increment based on feedback received from users.
Principle 4. Estimate based on what you know.
The intent of estimation
is to provide an indication of effort, cost, and task duration, based on the
team’s current understanding of the work to be done. If information is vague
or unreliable, estimates will be equally unreliable.
Principle 5. Consider risk as you define the plan.
If you have identified
risks that have high impact and high probability, contingency planning is
necessary. In addition, the project plan (including the schedule) should be
adjusted to accommodate the likelihood that one or more of these risks will
occur.

PART TWO
MODELING
uote:
“In preparing for
battle I have
always found that
plans are useless,
but planning is
indispensable.”
General Dwight
D. Eisenhower
WebRef
An excellent repository
of planning and project
management
information can be
found at
www.4pm.com/
repository.htm.

A detailed discussion of software project planning and management is presented in Part 4 of this
book.
uote:
“Success is more
a function of
consistent common
sense than it is of
genius.”
An Wang

Principle 6. Be realistic.
People don’t work 100 percent of every day.
Noise always enters into any human communication. Omissions and
ambiguity are facts of life. Change will occur. Even the best software
engineers make mistakes. These and other realities should be considered
as a project plan is established.
Principle 7. Adjust granularity as you define the plan.
Granularity
refers to the level of detail that is introduced as a project plan is developed.
A “high-granularity” plan provides significant work task detail that is planned
over relatively short time increments (so that tracking and control occur
frequently). A “low-granularity” plan provides broader work tasks that are
planned over longer time periods. In general, granularity moves from high to
low as the project time line moves away from the current date. Over the
next few weeks or months, the project can be planned in significant detail.
Activities that won’t occur for many months do not require high granularity
(too much can change).
Principle 8. Define how you intend to ensure quality.
The plan should
identify how the software team intends to ensure quality. If technical
reviews3 are to be conducted, they should be scheduled. If pair programming
(Chapter 3) is to be used during construction, it should be explicitly defined
within the plan.
Principle 9. Describe how you intend to accommodate change.
Even
the best planning can be obviated by uncontrolled change. You should iden-
tify how changes are to be accommodated as software engineering work
proceeds. For example, can the customer request a change at any time? If a
change is requested, is the team obliged to implement it immediately? How is
the impact and cost of the change assessed?
Principle 10. Track the plan frequently and make adjustments as re-
quired.
Software projects fall behind schedule one day at a time. Therefore,
it makes sense to track progress on a daily basis, looking for problem areas
and situations in which scheduled work does not conform to actual work
conducted. When slippage is encountered, the plan is adjusted accordingly.
To be most effective, everyone on the software team should participate in the
planning activity. Only then will team members “sign up” to the plan.
4.3.3
Modeling Principles
We create models to gain a better understanding of the actual entity to be built. When
the entity is a physical thing (e.g., a building, a plane, a machine), we can build a
model that is identical in form and shape but smaller in scale. However, when the
CHAPTER 4
PRINCIPLES THAT GUIDE PRACTICE

The term granularity
refers to the detail
with which some
element of planning is
represented or
conducted.

Technical reviews are discussed in Chapter 15.

entity to be built is software, our model must take a different form. It must be capa-
ble of representing the information that software transforms, the architecture and
functions that enable the transformation to occur, the features that users desire, and
the behavior of the system as the transformation is taking place. Models must
accomplish these objectives at different levels of abstraction—first depicting the soft-
ware from the customer’s viewpoint and later representing the software at a more
technical level.
In software engineering work, two classes of models can be created: require-
ments models and design models. Requirements models (also called analysis models)
represent customer requirements by depicting the software in three different do-
mains: the information domain, the functional domain, and the behavioral domain.
Design models represent characteristics of the software that help practitioners to
construct it effectively: the architecture, the user interface, and component-level
detail.
In their book on agile modeling, Scott Ambler and Ron Jeffries [Amb02b] define a
set of modeling principles4 that are intended for those who use the agile process
model (Chapter 3) but are appropriate for all software engineers who perform mod-
eling actions and tasks: 
Principle 1. The primary goal of the software team is to build soft-
ware, not create models.
Agility means getting software to the customer
in the fastest possible time. Models that make this happen are worth creat-
ing, but models that slow the process down or provide little new insight
should be avoided.
Principle 2. Travel light—don’t create more models than you need.
Every model that is created must be kept up-to-date as changes occur. More
importantly, every new model takes time that might otherwise be spent on
construction (coding and testing). Therefore, create only those models that
make it easier and faster to construct the software.
Principle 3. Strive to produce the simplest model that will describe the
problem or the software.
Don’t overbuild the software [Amb02b]. By
keeping models simple, the resultant software will also be simple. The result
is software that is easier to integrate, easier to test, and easier to maintain (to
change). In addition, simple models are easier for members of the software
team to understand and critique, resulting in an ongoing form of feedback
that optimizes the end result.
Principle 4. Build models in a way that makes them amenable to change.
Assume that your models will change, but in making this assumption don’t

PART TWO
MODELING
Requirements models
represent customer
requirements. Design
models provide a
concrete specification
for the construction of
the software.

The principles noted in this section have been abbreviated and rephrased for the purposes of this
book.
The intent of any
model is to communi-
cate information. To
accomplish this, use a
consistent format.
Assume that you won’t
be there to explain the
model. It should stand
on its own.

get sloppy. For example, since requirements will change, there is a tendency
to give requirements models short shrift. Why? Because you know that they’ll
change anyway. The problem with this attitude is that without a reasonably
complete requirements model, you’ll create a design (design model) that will
invariably miss important functions and features.
Principle 5. Be able to state an explicit purpose for each model that
is created.
Every time you create a model, ask yourself why you’re doing
so. If you can’t provide solid justification for the existence of the model,
don’t spend time on it.
Principle 6. Adapt the models you develop to the system at hand.
It
may be necessary to adapt model notation or rules to the application; for ex-
ample, a video game application might require a different modeling technique
than real-time, embedded software that controls an automobile engine.
Principle 7. Try to build useful models, but forget about building per-
fect models.
When building requirements and design models, a software
engineer reaches a point of diminishing returns. That is, the effort required to
make the model absolutely complete and internally consistent is not worth
the benefits of these properties. Am I suggesting that modeling should be
sloppy or low quality? The answer is “no.” But modeling should be conducted
with an eye to the next software engineering steps. Iterating endlessly to
make a model “perfect” does not serve the need for agility.
Principle 8. Don’t become dogmatic about the syntax of the model. If
it communicates content successfully, representation is secondary.
Although everyone on a software team should try to use consistent notation
during modeling, the most important characteristic of the model is to com-
municate information that enables the next software engineering task. If a
model does this successfully, incorrect syntax can be forgiven.
Principle 9. If your instincts tell you a model isn’t right even though it
seems okay on paper, you probably have reason to be concerned.
If
you are an experienced software engineer, trust your instincts. Software
work teaches many lessons—some of them on a subconscious level. If some-
thing tells you that a design model is doomed to fail (even though you can’t
prove it explicitly), you have reason to spend additional time examining the
model or developing a different one.
Principle 10. Get feedback as soon as you can.
Every model should be
reviewed by members of the software team. The intent of these reviews is to
provide feedback that can be used to correct modeling mistakes, change mis-
interpretations, and add features or functions that were inadvertently omitted.
Requirements modeling principles.
Over the past three decades, a large num-
ber of requirements modeling methods have been developed. Investigators have
CHAPTER 4
PRINCIPLES THAT GUIDE PRACTICE

identified requirements analysis problems and their causes and have developed
a variety of modeling notations and corresponding sets of heuristics to overcome
them. Each analysis method has a unique point of view. However, all analysis meth-
ods are related by a set of operational principles:
Principle 1. The information domain of a problem must be represented
and understood.
The information domain encompasses the data that flow
into the system (from end users, other systems, or external devices), the data
that flow out of the system (via the user interface, network interfaces, reports,
graphics, and other means), and the data stores that collect and organize per-
sistent data objects (i.e., data that are maintained permanently).
Principle 2. The functions that the software performs must be defined.
Software functions provide direct benefit to end users and also provide inter-
nal support for those features that are user visible. Some functions transform
data that flow into the system. In other cases, functions effect some level of
control over internal software processing or external system elements. Func-
tions can be described at many different levels of abstraction, ranging from a
general statement of purpose to a detailed description of the processing
elements that must be invoked.
Principle 3. The behavior of the software (as a consequence of external
events) must be represented.
The behavior of computer software is driven
by its interaction with the external environment. Input provided by end users,
control data provided by an external system, or monitoring data collected
over a network all cause the software to behave in a specific way.
Principle 4. The models that depict information, function, and behavior
must be partitioned in a manner that uncovers detail in a layered (or
hierarchical) fashion.
Requirements modeling is the first step in software
engineering problem solving. It allows you to better understand the problem
and establishes a basis for the solution (design). Complex problems are difficult
to solve in their entirety. For this reason, you should use a divide-and-conquer
strategy. A large, complex problem is divided into subproblems until each sub-
problem is relatively easy to understand. This concept is called partitioning or
separation of concerns, and it is a key strategy in requirements modeling.
Principle 5. The analysis task should move from essential information
toward implementation detail.
Requirements modeling begins by describ-
ing the problem from the end-user’s perspective. The “essence” of the
problem is described without any consideration of how a solution will be
implemented. For example, a video game requires that the player “instruct”
its protagonist on what direction to proceed as she moves into a dangerous
maze. That is the essence of the problem. Implementation detail (normally
described as part of the design model) indicates how the essence will be
implemented. For the video game, voice input might be used. Alternatively,

PART TWO
MODELING
Analysis modeling
focuses on three
attributes of software:
information to be
processed, function to
be delivered, and
behavior to be
exhibited.
uote:
“The engineer’s
first problem in
any design
situation is to
discover what the
problem really is.”
Author unknown

a keyboard command might be typed, a joystick (or mouse) might be pointed
in a specific direction, or a motion-sensitive device might be waved in the air.
By applying these principles, a software engineer approaches a problem system-
atically. But how are these principles applied in practice? This question will be an-
swered in Chapters 5 through 7.
Design Modeling Principles.
The software design model is analogous to an
architect’s plans for a house. It begins by representing the totality of the thing to be
built (e.g., a three-dimensional rendering of the house) and slowly refines the thing
to provide guidance for constructing each detail (e.g., the plumbing layout). Similarly,
the design model that is created for software provides a variety of different views of
the system.
There is no shortage of methods for deriving the various elements of a software
design. Some methods are data driven, allowing the data structure to dictate the pro-
gram architecture and the resultant processing components. Others are pattern
driven, using information about the problem domain (the requirements model) to de-
velop architectural styles and processing patterns. Still others are object oriented,
using problem domain objects as the driver for the creation of data structures and
the methods that manipulate them. Yet all embrace a set of design principles that can
be applied regardless of the method that is used:
Principle 1. Design should be traceable to the requirements model.
The requirements model describes the information domain of the problem,
user-visible functions, system behavior, and a set of requirements classes
that package business objects with the methods that service them. The de-
sign model translates this information into an architecture, a set of subsys-
tems that implement major functions, and a set of components that are the
realization of requirements classes. The elements of the design model should
be traceable to the requirements model.
Principle 2. Always consider the architecture of the system to be built.
Software architecture (Chapter 9) is the skeleton of the system to be built. It
affects interfaces, data structures, program control flow and behavior, the
manner in which testing can be conducted, the maintainability of the result-
ant system, and much more. For all of these reasons, design should start with
architectural considerations. Only after the architecture has been established
should component-level issues be considered.
Principle 3. Design of data is as important as design of processing
functions.
Data design is an essential element of architectural design. The
manner in which data objects are realized within the design cannot be left to
chance. A well-structured data design helps to simplify program flow, makes
the design and implementation of software components easier, and makes
overall processing more efficient.
CHAPTER 4
PRINCIPLES THAT GUIDE PRACTICE

uote:
“See first that the
design is wise
and just: that
ascertained, pursue
it resolutely; do not
for one repulse
forego the purpose
that you resolved
to effect.”
William
Shakespeare
WebRef
Insightful comments
on the design process,
along with a discussion
of design aesthetics,
can be found at
cs.wwc.edu/
~aabyan/Design/.

Principle 4. Interfaces (both internal and external) must be designed
with care.
The manner in which data flows between the components of a
system has much to do with processing efficiency, error propagation, and
design simplicity. A well-designed interface makes integration easier and
assists the tester in validating component functions.
Principle 5. User interface design should be tuned to the needs of the
end user. However, in every case, it should stress ease of use. The
user interface is the visible manifestation of the software. No matter how
sophisticated its internal functions, no matter how comprehensive its data
structures, no matter how well designed its architecture, a poor interface
design often leads to the perception that the software is “bad.”
Principle 6. Component-level design should be functionally independ-
ent.
Functional independence is a measure of the “single-mindedness” of a
software component. The functionality that is delivered by a component
should be cohesive—that is, it should focus on one and only one function or
subfunction.5
Principle 7. Components should be loosely coupled to one another
and to the external environment.
Coupling is achieved in many ways—
via a component interface, by messaging, through global data. As the level of
coupling increases, the likelihood of error propagation also increases and the
overall maintainability of the software decreases. Therefore, component cou-
pling should be kept as low as is reasonable.
Principle 8. Design representations (models) should be easily under-
standable.
The purpose of design is to communicate information to practi-
tioners who will generate code, to those who will test the software, and to
others who may maintain the software in the future. If the design is difficult
to understand, it will not serve as an effective communication medium.
Principle 9. The design should be developed iteratively. With each
iteration, the designer should strive for greater simplicity.
Like almost
all creative activities, design occurs iteratively. The first iterations work to
refine the design and correct errors, but later iterations should strive to make
the design as simple as is possible.
When these design principles are properly applied, you create a design that exhibits
both external and internal quality factors [Mye78]. External quality factors are those
properties of the software that can be readily observed by users (e.g., speed, reliability,
correctness, usability). Internal quality factors are of importance to software engineers.
They lead to a high-quality design from the technical perspective. To achieve internal
quality factors, the designer must understand basic design concepts (Chapter 8).

PART TWO
MODELING
uote:
“The differences
are not minor—
they are rather like
the differences
between Salieri
and Mozart. Study
after study shows
that the very best
designers produce
structures that are
faster, smaller,
simpler, clearer,
and produced with
less effort.”
Frederick P.
Brooks

Additional discussion of cohesion can be found in Chapter 8.

4.3.4
Construction Principles
The construction activity encompasses a set of coding and testing tasks that lead to
operational software that is ready for delivery to the customer or end user. In mod-
ern software engineering work, coding may be (1) the direct creation of program-
ming language source code (e.g., Java), (2) the automatic generation of source code
using an intermediate design-like representation of the component to be built, or
(3) the automatic generation of executable code using a “fourth-generation pro-
gramming language” (e.g., Visual C).
The initial focus of testing is at the component level, often called unit testing. Other
levels of testing include (1) integration testing (conducted as the system is con-
structed), validation testing that assesses whether requirements have been met for
the complete system (or software increment), and (3) acceptance testing that is con-
ducted by the customer in an effort to exercise all required features and functions.
The following set of fundamental principles and concepts are applicable to coding
and testing:
Coding Principles.
The principles that guide the coding task are closely aligned
with programming style, programming languages, and programming methods.
However, there are a number of fundamental principles that can be stated:
Preparation principles: Before you write one line of code, be sure you
• Understand of the problem you’re trying to solve.
• Understand basic design principles and concepts.
• Pick a programming language that meets the needs of the software to be
built and the environment in which it will operate.
• Select a programming environment that provides tools that will make your
work easier.
• Create a set of unit tests that will be applied once the component you code is
completed.
Programming principles: As you begin writing code, be sure you
• Constrain your algorithms by following structured programming [Boh00]
practice.
• Consider the use of pair programming.
• Select data structures that will meet the needs of the design.
• Understand the software architecture and create interfaces that are
consistent with it.
• Keep conditional logic as simple as possible.
• Create nested loops in a way that makes them easily testable.
• Select meaningful variable names and follow other local coding standards.
CHAPTER 4
PRINCIPLES THAT GUIDE PRACTICE

uote:
“For much of my
life, I have been a
software voyeur,
peeking furtively
at other people’s
dirty code.
Occasionally, I find
a real jewel, a well-
structured program
written in a
consistent style,
free of kludges,
developed so that
each component is
simple and
organized, and
designed so that
the product is easy
to change.”
David Parnas
Avoid developing an
elegant program that
solves the wrong
problem. Pay particular
attention to the first
preparation principle.

• Write code that is self-documenting.
• Create a visual layout (e.g., indentation and blank lines) that aids
understanding.
Validation Principles: After you’ve completed your first coding pass, 
be sure you
• Conduct a code walkthrough when appropriate.
• Perform unit tests and correct errors you’ve uncovered.
• Refactor the code.
More books have been written about programming (coding) and the principles and
concepts that guide it than about any other topic in the software process. Books on
the subject include early works on programming style [Ker78], practical software
construction [McC04], programming pearls [Ben99], the art of programming
[Knu98], pragmatic programming issues [Hun99], and many, many other subjects.
A comprehensive discussion of these principles and concepts is beyond the scope
of this book. If you have further interest, examine one or more of the references
noted.
Testing Principles.
In a classic book on software testing, Glen Myers [Mye79]
states a number of rules that can serve well as testing objectives:
• Testing is a process of executing a program with the intent of finding
an error.
• A good test case is one that has a high probability of finding an as-yet-
undiscovered error.
• A successful test is one that uncovers an as-yet-undiscovered error.
These objectives imply a dramatic change in viewpoint for some software develop-
ers. They move counter to the commonly held view that a successful test is one in
which no errors are found. Your objective is to design tests that systematically un-
cover different classes of errors and to do so with a minimum amount of time and
effort.
If testing is conducted successfully (according to the objectives stated previously),
it will uncover errors in the software. As a secondary benefit, testing demonstrates
that software functions appear to be working according to specification, and that
behavioral and performance requirements appear to have been met. In addition, the
data collected as testing is conducted provide a good indication of software reliabil-
ity and some indication of software quality as a whole. But testing cannot show the
absence of errors and defects; it can show only that software errors and defects are
present. It is important to keep this (rather gloomy) statement in mind as testing is
being conducted.

PART TWO
MODELING
WebRef
A wide variety of links
to coding standards can
be found at www
.literateprogramm
ing.com/fpstyle
.html.
What are the
objectives of
software testing?
?
In a broader software
design context, recall
that you begin “in the
large” by focusing on
software architecture
and end “in the small“
focusing on compo-
nents. For testing, you
simply reverse the
focus and test your
way out.

Davis [Dav95b] suggests a set of testing principles6 that have been adapted for use
in this book:
Principle 1. All tests should be traceable to customer requirements.7
The objective of software testing is to uncover errors. It follows that the most
severe defects (from the customer’s point of view) are those that cause the
program to fail to meet its requirements.
Principle 2. Tests should be planned long before testing begins.
Test
planning (Chapter 17) can begin as soon as the requirements model is com-
plete. Detailed definition of test cases can begin as soon as the design model
has been solidified. Therefore, all tests can be planned and designed before
any code has been generated.
Principle 3. The Pareto principle applies to software testing.
In this
context the Pareto principle implies that 80 percent of all errors uncovered
during testing will likely be traceable to 20 percent of all program compo-
nents. The problem, of course, is to isolate these suspect components and to
thoroughly test them.
Principle 4. Testing should begin “in the small” and progress toward
testing “in the large.”
The first tests planned and executed generally focus
on individual components. As testing progresses, focus shifts in an attempt
to find errors in integrated clusters of components and ultimately in the
entire system.
Principle 5. Exhaustive testing is not possible.
The number of path per-
mutations for even a moderately sized program is exceptionally large. For
this reason, it is impossible to execute every combination of paths during
testing. It is possible, however, to adequately cover program logic and to en-
sure that all conditions in the component-level design have been exercised.
4.3.5
Deployment Principles
As I noted earlier in Part 1 of this book, the deployment activity encompasses three
actions: delivery, support, and feedback. Because modern software process models
are evolutionary or incremental in nature, deployment happens not once, but a num-
ber of times as software moves toward completion. Each delivery cycle provides the
customer and end users with an operational software increment that provides usable
functions and features. Each support cycle provides documentation and human
assistance for all functions and features introduced during all deployment cycles to
CHAPTER 4
PRINCIPLES THAT GUIDE PRACTICE

Only a small subset of Davis’s testing principles are noted here. For more information, see
[Dav95b].

This principle refers to functional tests, i.e., tests that focus on requirements. Structural tests (tests
that focus on architectural or logical detail) may not address specific requirements directly.

date. Each feedback cycle provides the software team with important guidance that
results in modifications to the functions, features, and approach taken for the next
increment.
The delivery of a software increment represents an important milestone for any
software project. A number of key principles should be followed as the team pre-
pares to deliver an increment:
Principle 1. Customer expectations for the software must be managed.
Too often, the customer expects more than the team has promised to deliver,
and disappointment occurs immediately. This results in feedback that is not
productive and ruins team morale. In her book on managing expectations,
Naomi Karten [Kar94] states: “The starting point for managing expectations
is to become more conscientious about what you communicate and how.”
She suggests that a software engineer must be careful about sending the cus-
tomer conflicting messages (e.g., promising more than you can reasonably
deliver in the time frame provided or delivering more than you promise for
one software increment and then less than promised for the next).
Principle 2. A complete delivery package should be assembled and
tested.
A CD-ROM or other media (including Web-based downloads)
containing all executable software, support data files, support documents,
and other relevant information should be assembled and thoroughly 
beta-tested with actual users. All installation scripts and other operational
features should be thoroughly exercised in as many different computing
configurations (i.e., hardware, operating systems, peripheral devices, net-
working arrangements) as possible.
Principle 3. A support regime must be established before the software
is delivered.
An end user expects responsiveness and accurate information
when a question or problem arises. If support is ad hoc, or worse, nonexist-
ent, the customer will become dissatisfied immediately. Support should be
planned, support materials should be prepared, and appropriate record-
keeping mechanisms should be established so that the software team can
conduct a categorical assessment of the kinds of support requested.
Principle 4. Appropriate instructional materials must be provided to
end users.
The software team delivers more than the software itself.
Appropriate training aids (if required) should be developed; troubleshooting
guidelines should be provided, and when necessary, a “what’s different about
this software increment” description should be published.8

PART TWO
MODELING
Be sure that your cus-
tomer knows what to
expect before a soft-
ware increment is
delivered. Otherwise,
you can bet the cus-
tomer will expect more
than you deliver.

During the communication activity, the software team should determine what types of help mate-
rials users want.

Principle 5. Buggy software should be fixed first, delivered later.
Under
time pressure, some software organizations deliver low-quality increments
with a warning to the customer that bugs “will be fixed in the next release.”
This is a mistake. There’s a saying in the software business: “Customers will
forget you delivered a high-quality product a few days late, but they will
never forget the problems that a low-quality product caused them. The soft-
ware reminds them every day.”
The delivered software provides benefit for the end user, but it also provides use-
ful feedback for the software team. As the increment is put into use, end users should
be encouraged to comment on features and functions, ease of use, reliability, and
any other characteristics that are appropriate.
4.4
SUMMARY
Software engineering practice encompasses principles, concepts, methods, and
tools that software engineers apply throughout the software process. Every software
engineering project is different. Yet, a set of generic principles apply to the process
as a whole and to the practice of each framework activity regardless of the project
or the product.
A set of core principles help in the application of a meaningful software process
and the execution of effective software engineering methods. At the process level,
core principles establish a philosophical foundation that guides a software team as
it navigates through the software process. At the level of practice, core principles
establish a collection of values and rules that serve as a guide as you analyze a prob-
lem, design a solution, implement and test the solution, and ultimately deploy the
software in the user community.
Communication principles focus on the need to reduce noise and improve band-
width as the conversation between developer and customer progresses. Both parties
must collaborate for the best communication to occur.
Planning principles provide guidelines for constructing the best map for the
journey to a completed system or product. The plan may be designed solely for a
single software increment, or it may be defined for the entire project. Regardless,
it must address what will be done, who will do it, and when the work will be
completed.
Modeling encompasses both analysis and design, describing representations of
the software that progressively become more detailed. The intent of the models is to
solidify understanding of the work to be done and to provide technical guidance to
those who will implement the software. Modeling principles serve as a founda-
tion for the methods and notation that are used to create representations of the
software.
Construction incorporates a coding and testing cycle in which source code for a
component is generated and tested. Coding principles define generic actions that
CHAPTER 4
PRINCIPLES THAT GUIDE PRACTICE

---

## Module 4 Textbook 1

OBJECTIVES
When you have completed this chapter you will be able to:
deﬁ ne the scope of ‘software project management’;
•
understand some problems and concerns of software project managers;
•
deﬁ ne the usual stages of a software project;
•
explain the main elements of the role of management;
•
appreciate the need for careful planning, monitoring and control;
•
identify the stakeholders of a project and their objectives;
•
deﬁ ne the success criteria for a project.
•
1.1 Introduction
This textbook is about ‘software project management’. The ﬁ rst question is whether the management of 
software projects is really that different from that of other projects. To answer this, we need to look at some 
key ideas about the planning, monitoring and control of software projects. We will see that all projects are 
about meeting objectives. Like any other project, a software project must satisfy real needs. To do this we 
must identify the project’s stakeholders and their objectives. Ensuring that their objectives are met is the aim 
of project management. However, we cannot know that a project will meet its objectives in the future unless 
we know the present state of the project.
1.2 Why is Soft ware Project Management Important?
This book is for students of software engineering and computer science and also those studying business 
information systems. More technically oriented students can be impatient at having to study something which 
keeps them away from their code. So why is it important to become familiar with project management?
MODULE 4

So ware Project Management
First, there is the question of money. A lot of money is at stake with ICT projects. In the 
United Kingdom during the ﬁ nancial year 2002–2003, the central government spent 
more on contracts for ICT projects than on contracts related to roads (about £2.3 billion 
as opposed to £1.4 billion). The biggest departmental spender was the Department for 
Work and Pensions, who spent over £800 million on ICT. Mismanagement of ICT 
projects means that there is less to spend on good things such as hospitals.
Unfortunately, projects are not always successful. In a report published in 2003, the 
Standish Group in the United States analysed 13,522 projects and concluded that only 
a third of projects were successful; 82% of projects were late and 43% exceeded their 
budget.
The reason for these project shortcomings is often the management of projects. The 
National Audit Ofﬁ ce in the UK, for example, among other factors causing project 
failure identiﬁ ed ‘lack of skills and proven approach to project management and risk 
management’.
1.3 What is a Project?
The dictionary deﬁ nitions put a clear emphasis on the project being a planned
activity.
The emphasis on being planned assumes we can determine how to carry out a task 
before we start. Yet with exploratory projects this might be difﬁ cult. Planning is in 
essence thinking carefully about something before you do it – even with uncertain 
projects this is worth doing as long as the resulting plans are seen as provisional. Other 
activities, such as routine maintenance, will have been performed so many times that 
everyone knows exactly what to do. In these cases, planning hardly seems necessary, 
although procedures might be documented to ensure consistency and to help newcomers.
The activities that beneﬁ t most from conventional project management are likely to 
lie between these two extremes – see Figure 1.1.
There is a hazy boundary between the non-routine project and the routine job. The 
ﬁ rst time you do a routine task it will be like a project. On the other hand, a project to 
develop a system similar to previous ones that you have developed will have a large element of the routine.
FIGURE 1.1
Ac vi es most likely to beneﬁ t from project management
The information in this 
paragraph comes from 
a National Audit Ofﬁ ce 
report, Improving 
IT Procurement, 
November 2004.
There has been some 
debate about the 
precise validity of the 
Standish ﬁ ndings but 
the key point about 
the prevalence of IT 
project failings remains 
clear.
Dictionary deﬁ nitions 
of ‘project’ include: ‘A 
speciﬁ c plan or design’ 
‘A planned undertaking’ 
‘A large undertaking: 
e.g. a public works 
scheme’, Longman
Concise English 
Dictionary, 1982.
Programme manage-
ment is often used to 
coordinate activities on 
concurrent jobs.

Introduction to So ware Project Management

The following characteristics distinguish projects:
 
● non-routine tasks are involved;
 
● planning is required;
 
● speciﬁ c objectives are to be met or a speciﬁ ed product is to be created;
 
● the project has a predetermined time span;
 
● work is carried out for someone other than yourself;
 
● work involves several specialisms;
 
● people are formed into a temporary work group to carry out the task;
 
● work is carried out in several phases;
 
● the resources that are available for use on the project are constrained;
 
● the project is large or complex.
The more any of these factors apply to a task, the more difﬁ cult that task will be. Project size is particularly 
important. The project that employs 20 developers is likely to be disproportionately more difﬁ cult than one 
with only 10 staff because of the need for additional coordination. The examples and exercises used in 
this book usually relate to smaller projects in order to make the techniques easier to grasp. However, the 
techniques and issues discussed are of equal relevance to larger projects.
 
EXERCISE 
1.1
Consider the following:
 
● producing an edition of a newspaper;
 
● putting a robot vehicle on Mars to search for signs of life;
 
● getting married;
 
● amending a ﬁ nancial computer system to deal with a common European currency;
 
● a research project into what makes a good human–computer interface;
 
● an investigation into the reason why a user has a problem with a computer system;
 
● a second-year programming assignment for a computing student;
 
● writing an operating system for a new computer;
 
● installing a new version of a word processing package in an organization.
Some seem more like real projects than others. Put them into an order most closely matching your ideas 
of what constitutes a project. For each entry in the ordered list, describe the difference between it and 
the one above which makes it less worthy of the term ‘project’.
There is no one correct answer to this exercise, but a possible solution to this and the other exercises 
you will come across may be found at the end of the book.
Some argue that projects are especially problematic as they are temporary sub-orga-
nizations. A group of people is brought together to carry out a task. The existence of 
this sub-organization cuts across the authority of the existing units within the organi-
zation. This has the advantage that a group containing various specialists is focused 
on a single important task. However, the project is likely to be seen as disruptive to 
For example, see Rolf 
A. Lundin and Andres 
Söderholm (1995) 
‘A theory of the tem-
porary organization’ 
Scandinavian Journal 
of Management 11(4) 
437–55.

So ware Project Management
others. Also, expertise built up during the project may be lost when the team is eventually dispersed at the 
end of the project.
1.4 Soft ware Projects versus Other Types of Project
Many techniques in general project management also apply to software project 
management, but Fred Brooks identiﬁ ed some characteristics of software projects 
which make them particularly difﬁ cult:
Invisibility When a physical artefact such as a bridge is constructed the progress can 
actually be seen. With software, progress is not immediately visible. Software project 
management can be seen as the process of making the invisible visible.
Complexity Per dollar, pound or euro spent, software products contain more complexity 
than other engineered artefacts.
Conformity The ‘traditional’ engineer usually works with physical systems and materials like cement and 
steel. These physical systems have complexity, but are governed by consistent physical laws. Software devel-
opers have to conform to the requirements of human clients. It is not just that individuals can be inconsistent. 
Organizations, because of lapses in collective memory, in internal communication or in effective decision 
making, can exhibit remarkable ‘organizational stupidity’.
Flexibility That software is easy to change is seen as a strength. However, where the software system inter-
faces with a physical or organizational system, it is expected that the software will change to accommodate 
the other components rather than vice versa. Thus software systems are particularly subject to change.
1.5 Contract Management and Technical Project Management
In-house projects are where the users and the developers of new software work for the same organization. 
However, increasingly organizations contract out ICT development to outside developers. Here, the client 
organization will often appoint a ‘project manager’ to supervise the contract who will delegate many techni-
cally oriented decisions to the contractors. Thus, the project manager will not worry about estimating the 
effort needed to write individual software components as long as the overall project is within budget and on 
time. On the supplier side, there will need to be project managers who deal with the more technical issues. 
This book leans towards the concerns of these ‘technical’ project managers.
1.6 Activities Covered by Soft ware Project Management
A software project is not only concerned with the actual writing of software. In fact, 
where a software application is bought ‘off the shelf’, there may be no software 
writing as such, but this is still fundamentally a software project because so many of 
the other activities associated with software will still be present.
Usually there are three successive processes that bring a new system into being – see Figure 1.2.
 
1. The feasibility study assesses whether a project is worth starting – that it has a valid business case.
Information is gathered about the requirements of the proposed application. Requirements elicitation 
can, at least initially, be complex and difﬁ cult. The stakeholders may know the aims they wish to 
F. P. Brooks (1987). 
‘No silver bullet: es-
sence and accidents 
of software engineer-
ing’. This essay has 
been included in The
Mythical Man-Month,
Anniversary Edition, 
Addison Wesley, 1995.
Chapter 4 on project 
analysis and technical 
planning looks at some 
alternative life cycles.

Introduction to So ware Project Management

pursue, but not be sure about the means of achievement. The developmental and 
operational costs, and the value of the beneﬁ ts of the new system, will also have 
to be estimated. With a large system, the feasibility study could be a project in 
its own right with its own plan. The study could be part of a strategic planning 
exercise examining a range of potential software developments. Sometimes an organization assesses a 
programme of development made up of a number of projects.
 
2. Planning If the feasibility study indicates that the prospective project appears 
viable, then project planning can start. For larger projects, we would not do all 
our detailed planning at the beginning. We create an outline plan for the whole 
project and a detailed one for the ﬁ rst stage. Because we will have more detailed 
and accurate project information after the earlier stages of the project have been 
completed, planning of the later stages is left to nearer their start.
 
3. Project execution The project can now be executed. The execution of a project 
often contains design and implementation sub-phases. Students new to project 
planning often ﬁ nd that the boundary between design and planning can be hazy. Design is making 
decisions about the form of the products to be created. This could relate to the external appearance of 
the software, that is, the user interface, or the internal architecture. The plan details the activities to be 
carried out to create these products. Planning and design can be confused because at the most detailed 
level, planning decisions are inﬂ uenced by design decisions. Thus a software product with ﬁ ve major 
components is likely to require ﬁ ve sets of activities to create them.
Figure 1.3 shows the typical sequence of software development activities recom-
mended in the international standard ISO 12207. Some activities are concerned with 
the system while others relate to software. The development of software will be only 
one part of a project. Software could be developed, for example, for a project which 
also requires the installation of an ICT infrastructure, the design of user jobs and user 
training.
 
● Requirements analysis starts with requirements elicitation or requirements 
gathering which establishes what the potential users and their managers require 
of the new system. It could relate to a function – that the system should do 
something. It could be a quality requirement – how well the functions must work. An example of this is 
FIGURE 1.2
The feasibility study/plan/execu on cycle
Chapter 2 explores 
some further as-
pects of programme 
management.
The PRINCE2 method, 
which is described in 
Appendix A, takes this 
iterative approach to 
planning. Annex 1 to 
this chapter has an 
outline of the content 
of a plan.
Figure 1.3 suggests 
that these stages must 
be done strictly in se-
quence – we will see 
in Chapter 4 that other, 
iterative approaches 
can be adopted. 
However, the actual 
activities listed here 
would still be done.

So ware Project Management
dispatching an ambulance in response to an emergency telephone call. In this case transaction time would 
be affected by hardware and software performance as well as the speed of human operation. Training to 
ensure that operators use the computer system efﬁ ciently is an example of a system requirement for the 
project, as opposed to a speciﬁ cally software requirement. There would also be resource requirements 
that relate to application development costs.
 
● Architecture design The components of the new system that fulﬁ l each requirement have to be identiﬁ ed. 
Existing components may be able to satisfy some requirements. In other cases, a new component 
will have to be made. These components are not only software: they could be new hardware or work 
processes. Although software developers are primarily concerned with software components, it is very 
rare that these can be developed in isolation. They will, for example, have to take account of existing 
legacy systems with which they will interoperate. The design of the system architecture is thus an 
input to the software requirements. A second architecture design process then takes place that maps the 
software requirements to software components.
 
● Detailed design Each software component is made up of a number of software units that can be 
separately coded and tested. The detailed design of these units is carried out separately.
FIGURE 1.3
The ISO 12207 so ware development life cycle

Introduction to So ware Project Management

● Code and test refers to writing code for each software unit. Initial testing to debug individual software 
units would be carried out at this stage.
 
● Integration The components are tested together to see if they meet the overall requirements. Integration 
could involve combining different software components, or combining and testing the software element 
of the system in conjunction with the hardware platforms and user interactions.
 
● Qualiﬁ cation testing The system, including the software components, has to be tested carefully to 
ensure that all the requirements have been fulﬁ lled.
 
● Installation This is the process of making the new system operational. It would include activities such 
as setting up standing data (for example, the details for employees in a payroll system), setting system 
parameters, installing the software onto the hardware platforms and user training.
 
● Acceptance support This is the resolving of problems with the newly installed system, including the 
correction of any errors, and implementing agreed extensions and improvements. Software maintenance 
can be seen as a series of minor software projects. In many environments, most software development 
is in fact maintenance.
 
EXERCISE 
1.2
Brightmouth College is a higher education institution which used to be managed by a local government 
authority but has now become autonomous. Its payroll is still administered by the local authority and 
pay slips and other output are produced in the local authority’s computer centre. The authority now 
charges the college for this service. The college management are of the opinion that it would be cheaper 
to obtain an ‘off-the shelf’ payroll package and do the payroll processing themselves.
What would be the main stages of the project to convert to independent payroll processing by the 
college? Bearing in mind that an off-the-shelf package is to be used, how would this project differ from 
one where the software was to be written from scratch?
 
EXERCISE 
1.3
Assume that a software organization development has been asked to carry out a feasibility study to 
develop the payroll package for Brightmouth College. The development organization plans to develop 
the software by customizing one of its existing products. What are the main steps through which the 
project manager of the organization would carry out the feasibility study?
1.7 Plans, Methods and Methodologies
A plan for an activity must be based on some idea of a method of work. For example, if you were asked to 
test some software, you may know nothing about the software to be tested, but you could assume that you 
would need to:
 
● analyse the requirements for the software;
 
● devise and write test cases that will check that each requirement has been satisﬁ ed;

So ware Project Management
 
● create test scripts and expected results for each test case;
 
● compare the actual results and the expected results and identify discrepancies.
While a method relates to a type of activity in general, a plan takes that method (and perhaps others) and 
converts it to real activities, identifying for each activity:
 
● its start and end dates;
 
● who will carry it out;
 
● what tools and materials – including information – will be needed.
The output from one method might be the input to another. Groups of methods or techniques are often 
grouped into methodologies such as object-oriented design.
 
EXERCISE 
1.4
This should ideally be done in groups of about four, but you can think about how you would go about 
this exercise on your own if needs be. You are probably in a building that has more than one storey. 
From the point of view of this exercise, the bigger the building the better.
In a group of four, work out how you would obtain an accurate estimate of the height of the building. 
(If you happen to be in a single-storey building, you can estimate the ﬂ oor area instead!) Plan how 
you would carry out any actions needed to obtain your estimate. Spend 20 minutes on this – you must 
remain in the same room for this planning phase. Once planning is complete, implement your plan, 
timing how long it takes to produce your ﬁ nal ﬁ gure.
If there is more than one group carrying out this exercise, after completion of the task you can compare 
answers and also the approach you used when coming up with your answer.
1.8 Some Ways of Categorizing Soft ware Projects
Projects may differ because of the different technical products to be created. Thus we need to identify the 
characteristics of a project which could affect the way in which it should be planned and managed. Other 
factors are discussed below.
Compulsory versus voluntary users
In workplaces there are systems that staff have to use if they want to do something, such as recording a sale. 
However, use of a system is increasingly voluntary, as in the case of computer games. Here it is difﬁ cult to 
elicit precise requirements from potential users as we could with a business system. What the game will do 
will thus depend much on the informed ingenuity of the developers, along with techniques such as market 
surveys, focus groups and prototype evaluation.
Information systems versus embedded systems
A traditional distinction has been between information systems which enable staff to 
carry out ofﬁ ce processes and embedded systems which control machines. A stock 
control system would be an information system. An embedded, or process control, 
system might control the air conditioning equipment in a building. Some systems may 
have elements of both where, for example, the stock control system also controls an automated warehouse.
Embedded systems 
are also called real-
time or industrial 
systems.

Introduction to So ware Project Management

EXERCISE 
1.5
Would an operating system on a computer be an information system or an embedded system?
Outsourced projects
While developing a large project, sometimes, it makes good commercial sense for a company to outsource 
some parts of its work to other companies. There can be several reasons behind such a decision. For example, 
a company may consider outsourcing as a good option, if it feels that it does not have sufﬁ cient expertise to 
develop some speciﬁ c parts of the product or if it determines that some parts can be developed cost-effec-
tively by another company. Since an outsourced project is a small part of some project, it is usually small in 
size and needs to be completed within a few months. Considering these differences between an outsourced 
project and a conventional project, managing an outsourced project entails special challenges.
Indian software companies excel in executing outsourced software projects and have earned a ﬁ ne reputation 
in this ﬁ eld all over the world. Of late, the Indian companies have slowly begun to focus on product devel-
opment as well.
The type of development work being handled by a company can have an impact on its proﬁ tability. For 
example, a company that has developed a generic software product usually gets an uninterrupted stream of 
revenue over several years. However, outsourced projects fetch only one time revenue to any company.
Objective-driven development
Projects may be distinguished by whether their aim is to produce a product or to meet 
certain objectives.
A project might be to create a product, the details of which have been speciﬁ ed by the 
client. The client has the responsibility for justifying the product.
On the other hand, the project requirement might be to meet certain objectives which 
could be met in a number of ways. An organization might have a problem and ask a 
specialist to recommend a solution.
Many software projects have two stages. First is an objective-driven project resulting in recommendations. 
This might identify the need for a new software system. The next stage is a project actually to create the 
software product.
This is useful where the technical work is being done by an external group and the user needs are unclear at 
the outset. The external group can produce a preliminary design at a ﬁ xed fee. If the design is acceptable the 
developers can then quote a price for the second, implementation, stage based on an agreed requirement.
 
EXERCISE 
1.6
Would the project, to implement an independent payroll system at the Brightmouth College described 
in Exercise 1.2, above, be an objective-driven project or a product-driven project?
Service level agree-
ments are becoming 
increasingly important 
as organizations 
contract out functions 
to external service 
suppliers.

So ware Project Management
1.9 Stakeholders
These are people who have a stake or interest in the project. Their early identiﬁ cation is important as you need 
to set up adequate communication channels with them. Stakeholders can be categorized as:
 
● Internal to the project team This means that they will be under the direct managerial control of the 
project leader.
 
● External to the project team but within the same organization For example, the project leader might need 
the assistance of the users to carry out systems testing. Here the commitment of the people involved has 
to be negotiated.
 
● External to both the project team and the organization External stakeholders may be customers (or 
users) who will beneﬁ t from the system that the project implements. They may be contractors who will 
carry out work for the project. The relationship here is usually based on a contract.
Different types of stakeholder may have different objectives and one of the jobs of 
the project leader is to recognize these different interests and to be able to reconcile 
them. For example, end-users may be concerned with the ease of use of the new 
application, while their managers may be more focused on staff savings. The project 
leader therefore needs to be a good communicator and negotiator. Boehm and Ross 
proposed a ‘Theory W’ of software project management where the manager concen-
trates on creating situations where all parties beneﬁ t from a project and therefore have 
an interest in its success. (The ‘W’ stands for ‘win–win’.)
Project managers can sometimes miss an important stakeholder group, especially 
in unfamiliar business contexts. These could be departments supplying important 
services that are taken for granted.
Given the importance of coordinating the efforts of stakeholders, the recommended 
practice is for a communication plan to be created at the start of a project.
 
EXERCISE 
1.7
Identify the stakeholders in the Brightmouth College payroll project.
1.10 Setting Objectives
Among all these stakeholders are those who actually own the project. They control the ﬁ nancing of the 
project. They also set the objectives of the project. The objectives should deﬁ ne what the project team must 
achieve for project success. Although different stakeholders have different motivations, the project objectives 
identify the shared intentions for the project.
Objectives focus on the desired outcomes of the project rather than the tasks within it – they are the ‘post-con-
ditions’ of the project. Informally the objectives could be written as a set of statements following the opening 
words ‘the project will be a success if. . . .’ Thus one statement in a set of objectives might be ‘customers can 
order our products online’ rather than ‘to build an e-commerce website’. There is often more than one way to 
meet an objective and the more possible routes to success the better.
B.W. Boehm and R. 
Ross, ‘Theory W soft-
ware project manage-
ment: principles and 
examples’, in B. W. 
Boehm (ed.) (1989) 
Software Risk Manage-
ment, IEEE Computer 
Society Press.
The role and format 
of communication 
plans will be explained 
in greater detail in 
Chapter 11 on manag-
ing people in software 
environments.

Introduction to So ware Project Management

There may be several stakeholders, including users in different business areas, who might have some claim to 
project ownership. In such a case, a project authority needs to be explicitly identiﬁ ed with overall authority 
over the project.
This authority is often a project steering committee (or project board or project 
management board) with overall responsibility for setting, monitoring and modifying 
objectives. The project manager runs the project on a day-to-day basis, but regularly 
reports to the steering committee.
Sub-objectives and goals
An effective objective for an individual must be something that is within the control 
of that individual. An objective might be that the software application produced must 
pay for itself by reducing staff costs. As an overall business objective this might be 
reasonable. For software developers it would be unreasonable as any reduction in 
operational staff costs depends not just on them but on the operational management 
of the delivered system. A more appropriate goal or sub-objective for the software 
developers would be to keep development costs within a certain budget.
We can say that in order to achieve the objective we must achieve certain goals or sub-objectives ﬁ rst. These 
are steps on the way to achieving an objective, just as goals scored in a football match are steps towards the 
objective of winning the match. Informally this can be expressed as a set of statements following the words 
‘To reach objective. . ., the following must be in place. . .’.
The mnemonic SMART is sometimes used to describe well-deﬁ ned objectives:
 
● Speciﬁ c Effective objectives are concrete and well deﬁ ned. Vague aspirations 
such as ‘to improve customer relations’ are unsatisfactory. Objectives should be 
deﬁ ned so that it is obvious to all whether the project has been successful.
 
● Measurable Ideally there should be measures of effectiveness which tell us how 
successful the project has been. For example, ‘to reduce customer complaints’
would be more satisfactory as an objective than ‘to improve customer relations’.
The measure can, in some cases, be an answer to simple yes/no question, e.g. 
‘Did we install the new software by 1 June?’
 
● Achievable It must be within the power of the individual or group to achieve the objective.
 
● Relevant The objective must be relevant to the true purpose of the project.
 
● Time constrained There should be a deﬁ ned point in time by which the objective should have been 
achieved.
 
EXERCISE 
1.8
Bearing in mind the above discussion of objectives, comment on the appropriateness of the wording of 
each of the following ‘objectives’ for software developers:
 
(i) to implement the new application on time and within budget;
 
(ii) to implement the new software application with the fewest possible software errors that might lead 
to operational failures;
This committee is likely 
to contain user, devel-
opment and manage-
ment representatives.
Deﬁ ning sub-objectives 
requires assumptions 
about how the main 
objective is to be 
achieved.
This still leaves a prob-
lem about the level at 
which the target should 
be set, e.g. why, say, a 
50% reduction in com-
plaints and not 40% or 
60%?

So ware Project Management
 (iii) to design a system that is user-friendly;
 (iv) to produce full documentation for the new system.
Measures of eff ectiveness
Measures of effectiveness provide practical methods of checking that an objective 
has been met. ‘Mean time between failures’ (mtbf) might, for example, be used to 
measure reliability. This is a performance measurement and, as such, can only be 
taken once the system is operational. Project managers want to get some idea of the 
performance of the completed system as it is being constructed. They will therefore 
seek predictive measures. For example, a large number of errors found during code inspections might indicate 
potential problems with reliability later.
 
EXERCISE 
1.9
Identify the objectives and sub-objectives of the Brightmouth College payroll project. What measures 
of effectiveness could be used to check the success in achieving the objectives of the project?
1.11 Th e Business Case
Most projects need to have a justiﬁ cation or business case: the effort and expense of 
pushing the project through must be seen to be worthwhile in terms of the beneﬁ ts 
that will eventually be felt. A cost–beneﬁ t analysis will often be part of the project’s 
feasibility study. This will itemize and quantify the project’s costs and beneﬁ ts. The 
beneﬁ ts will be affected by the completion date: the sooner the project is completed, 
the sooner the beneﬁ ts can be experienced. The quantiﬁ cation of beneﬁ ts will often 
require the formulation of a business model which explains how the new application 
can generate the claimed beneﬁ ts.
A simple example of a business model is that a new web-based application might allow customers from all 
over the world to order a ﬁ rm’s products via the internet, increasing sales and thus increasing revenue and 
proﬁ ts.
Any project plan must ensure that the business case is kept intact. For example:
 
● that development costs are not allowed to rise to a level which threatens to exceed the value of 
beneﬁ ts;
 
● that the features of the system are not reduced to a level where the expected beneﬁ ts cannot be 
realized;
 
● that the delivery date is not delayed so that there is an unacceptable loss of beneﬁ ts.
1.12 Project Success and Failure
The project plan should be designed to ensure project success by preserving the business case for the project. 
However, every non-trivial project will have problems, and at what stage do we say that a project is actually 
a failure? Because different stakeholders have different interests, some stakeholders in a project might see it 
as a success while others do not.
These concepts are 
explained more fully 
in Chapter 13 on soft-
ware quality.
The business case 
should be established 
at the time of the proj-
ect’s feasibility study. 
Chapter 2 explains 
the idea of a business 
case in more detail.

Introduction to So ware Project Management

Broadly speaking, we can distinguish between project objectives and business objec-
tives. The project objectives are the targets that the project team is expected to achieve. 
In the case of software projects, they can usually be summarized as delivering:
 
● the agreed functionality
 
● to the required level of quality
 
● on time
 
● within budget.
A project could meet these targets but the application, once delivered could fail to meet the business case. A 
computer game could be delivered on time and within budget, but might then not sell. A commercial website 
used for online sales could be created successfully, but customers might not use it to buy products, because 
they could buy the goods more cheaply elsewhere.
We have seen that in business terms it can generally be said that a project is a success if 
the value of beneﬁ ts exceeds the costs. We have also seen that while project managers 
have considerable control over development costs, the value of the beneﬁ ts of the 
project deliverables is dependent on external factors such as the number of customers. 
Project objectives still have some bearing on eventual business success. As we will 
see in Chapter 2, increasing development costs reduce the chances of the delivered 
product being proﬁ table. A delay in completion reduces the amount of time during which beneﬁ ts can be 
generated and diminishes the value of the project.
A project can be a success on delivery but then be a business failure, On the other hand, a project could be 
late and over budget, but its deliverables could still, over time, generate beneﬁ ts that outweigh the initial 
expenditure.
Some argue that the possible gap between project and business concerns can be reduced by having a broader 
view of projects that includes business issues. For example, the project management of an e-commerce 
website implementation could plan activities such as market surveys, competitor analysis, focus groups, 
prototyping, and evaluation by typical potential users – all designed to reduce business risks.
Because the focus of project management is, not unnaturally, on the immediate project, 
it may not be seen that the project is actually one of a sequence. Later projects beneﬁ t 
from the technical skills learnt on earlier projects. Technical learning will increase 
costs on the earlier projects, but later projects beneﬁ t as the learnt technologies can 
be deployed more quickly, cheaply and accurately. This expertise is often accom-
panied by additional software assets, for example reusable code. Where software 
development is outsourced, there may be immediate savings, but these longer-term 
beneﬁ ts of increased expertise will be lost. Astute managers may assess which areas 
of technical expertise it would be beneﬁ cial to develop.
Customer relationships can also be built up over a number of projects. If a client has trust in a supplier who 
has done satisfactory work in the past, they are more likely to use that company again, particularly if the new 
requirement builds on functionality already delivered. It is much more expensive to acquire new clients than 
it is to retain existing ones.
A good introduction to 
the issues discussed 
here can be found in 
A. J. Shenhar and O. 
Levy (1997) ‘Mapping 
the dimensions of proj-
ect success’ Project
Management Journal 
28(2) 9–12.
The assessment of 
the value of project 
beneﬁ ts is explored 
in greater depth in 
Chapter 2.
For a wider discussion 
of the relationships be-
tween successive proj-
ects, see M. Engwall 
(2003) ‘No project is an 
island: linking projects 
to history and context’ 
Research Policy 32 
789–808.

So ware Project Management
1.13 What is Management?
We have explored some of the special characteristics of software. We now look at the ‘management’ aspect of 
software project management. It has been suggested that management involves the following activities:
 
● planning – deciding what is to be done;
 
● organizing – making arrangements;
 
● stafﬁ ng – selecting the right people for the job etc.;
 
● directing – giving instructions;
 
● monitoring – checking on progress;
 
● controlling – taking action to remedy hold-ups;
 
● innovating – coming up with new solutions;
 
● representing – liaising with clients, users, developer, suppliers and other stakeholders.
 
EXERCISE 
1.10
Paul Duggan is the manager of a software development section. On Tuesday at 10.00 a.m. he and his 
fellow section heads have a meeting with their group manager about the stafﬁ ng requirements for 
the coming year. Paul has already drafted a document ‘bidding’ for staff. This is based on the work 
planned for his section for the next year. The document is discussed at the meeting. At 2.00 p.m. Paul 
has a meeting with his senior staff about an important project his section is undertaking. One of the 
programming staff has just had a road accident and will be in hospital for some time. It is decided that 
the project can be kept on schedule by transferring another team member from less urgent work to this 
project. A temporary replacement is to be brought in to do the less urgent work but this may take a week 
or so to arrange. Paul has to phone both the human resources manager about getting a replacement and 
the user for whom the less urgent work is being done, explaining why it is likely to be delayed.
Identify which of the eight management responsibilities listed above Paul was responding to at different 
points during his day.
Much of the project manager’s time is spent on only three of the eight identiﬁ ed activities, viz., project 
planning, monitoring, and control. The time period during which these activities are carried out is indicated 
in Fig. 1.4. It shows that project management is carried out over three well-deﬁ ned stages or processes, 
irrespective of the methodology used. In the project initiation stage, an initial plan is made. As the project 
starts, the project is monitored and controlled to proceed as planned. However, the initial plan is revised 
periodically to accommodate additional details and constraints about the project as they become available. 
Finally, the project is closed. In the project closing stage, all activities are logically completed and all contracts 
are formally closed.
Initial project planning is undertaken immediately after the feasibility study phase and before starting the 
requirements analysis and speciﬁ cation process. Figure 1.4 shows this project initiation period. Initial project 
planning involves estimating several characteristics of a project. Based on these estimates, all subsequent 
project activities are planned. The initial project plans are revised periodically as the project progresses and 
more project data becomes available. Once the project execution starts, monitoring and control activities are 
taken up to ensure that the project execution proceeds as planned. The monitoring activity involves monitoring 
the progress of the project. Control activities are initiated to minimize any signiﬁ cant variation in the plan.

Introduction to So ware Project Management

Project planning is an important responsibility of the project manager.  During project planning, the project 
manager needs to perform a few well-deﬁ ned activities that have been outlined below. Note that we have 
given a very brief description of these activities in this chapter. We will discuss these activities in more detail 
in subsequent chapters. Several best practices have been proposed for software project planning activities. 
In Chapter 3 we will discuss Step Wise, which is based on the popular PRINCE2 (PRojects IN Controlled 
Environments) method. While PRINCE2 is used extensively in the UK and Europe, similar software project 
management best practices have been put forward in the USA by the Project Management Institute’s ‘PMBOK’ 
which refers to their publication ‘A Guide to the Project Management Body of Knowledge.’
 
● Estimation The following project attributes are estimated.
 
● Cost How much is it going to cost to complete the project?
 
● Duration How long is it going to take to complete the project?
 
● Effort How much effort would be necessary for completing the project?
The effectiveness of all activities such as scheduling and stafﬁ ng, which are planned at a later stage, depends 
on the accuracy with which the above three project parameters have been estimated.
 
● Scheduling Based on estimations of effort and duration, the schedules for manpower and other resources 
are developed.
 
● Stafﬁ ng Staff organization and stafﬁ ng plans are made.
 
● Risk Management This activity includes risk identiﬁ cation, analysis, and abatement planning.
 
● Miscellaneous Plans This includes making several other plans such as quality assurance plan, conﬁ gu-
ration management plan, etc.
Project monitoring and control activities are undertaken after the initiation of development activities. The 
aim of project monitoring and control activities is to ensure that the software development proceeds as 
planned. While carrying out project monitoring and control activities, a project manager may sometimes 
ﬁ nd it necessary to change the plan to cope with speciﬁ c situations and make the plan more accurate as more 
project data becomes available.
At the start of a project, the project manager does not have complete knowledge about the details of the 
project. As the project progresses through different development phases, the manager’s information base 
gradually improves. The complexities of different project activities become clear, some of the anticipated 
risks get resolved, and new risks appear. The project parameters are re-estimated periodically incorporating 
new understanding and change in project parameters. By taking these developments into account, the project 
manager can plan subsequent activities more accurately with increasing levels of conﬁ dence.  Figure 1.4 
shows this aspect as iterations between monitoring and control, and the plan revision activities.
FIGURE 1.4
Principal project management processes

So ware Project Management
1.14 Management Control
Management, in general, involves setting objectives for a system and then monitoring the performance of 
the system. In Figure 1.5 the ‘real world’ is shown as being rather formless. Especially in the case of large 
undertakings, there will be a lot going on about which management should be aware.
 
EXERCISE 
1.11
An ICT project is to replace locally held paper-based records with a centrally organized database. Staff 
in a large number of ofﬁ ces that are geographically dispersed need training and will then have to use 
the new ICT system to set up the backlog of manual records on the new database. The system cannot be 
properly operational until the last record has been transferred. The new system will only be successful 
if new transactions can be processed within certain time cycles.
Identify the data that you would collect to ensure that during execution of the project things were going 
to plan.
This will involve the local managers in data collection. Bare details, such as ‘location X has processed 2000 
documents’, will not be very useful to higher management: data processing will be needed to transform this 
raw data into useful information. This might be in such forms as ‘percentage of records processed’, ‘average 
documents processed per day per person’ and ‘estimated completion date’.
FIGURE 1.5
The project control cycle

Introduction to So ware Project Management

In our example, the project management might examine the ‘estimated completion date’ for completing 
data transfer for each branch. These can be checked against the overall target date for completion of this 
phase of the project. In effect they are comparing actual performance with one aspect of the overall project 
objectives. They might ﬁ nd that one or two branches will fail to complete the transfer of details in time. 
They would then need to consider what to do (this is represented in Figure 1.5 by the box Making decisions/
plans). One possibility would be to move staff temporarily from one branch to another. If this is done, there 
is always the danger that while the completion date for the one branch is pulled back to before the overall 
target date, the date for the branch from which staff are being moved is pushed forward beyond that date. The 
project manager would need to calculate carefully what the impact would be in moving staff from particular 
branches. This is modelling the consequences of a potential solution. Several different proposals could be 
modelled in this way before one was chosen for implementation.
Having implemented the decision, the situation needs to be kept under review by collecting and processing 
further progress details. For instance, the next time that progress is reported, a branch to which staff have been 
transferred could still be behind in transferring details. This might be because the reason why the branch has 
got behind in transferring details is because the manual records are incomplete and another department, for 
whom the project has a low priority, has to be involved in providing the missing information. In this case, 
transferring extra staff to do data inputting will not have accelerated data transfer.
It can be seen that a project plan is dynamic and will need constant adjustment during the execution of the 
project. Courses and books on project management (such as this one) often focus considerable attention 
on project planning. While this is to be expected, with nearly all projects much more time is spent actually 
doing the project rather than planning it. A good plan provides a foundation for a good project, but is nothing 
without intelligent execution. The original plan will not be set in stone but will be modiﬁ ed to take account 
of changing circumstances.
1.15 Traditional versus Modern Project Management Practices
Over the last two decades, the basic approach taken by the software industry to develop software has undergone 
a radical change. Hardly any software is being developed from scratch any more. Software development 
projects are increasingly being based on either tailoring some existing product or reusing certain pre-built 
libraries. In either case, two important goals of recent life cycle models are maximization of code reuse and 
compression of project durations. Other goals include facilitating and accommodating client feedbacks and 
customer participation in project development work, and incremental delivery of the product with evolving 
functionalities. Change requests from customers are encouraged, rather than circumvented.  Clients on the 
other hand, are demanding further reductions in product delivery times and costs. These recent developments 
have changed project management practices in many signiﬁ cant ways. In the following section, we will discuss 
some important differences between modern project management practices and traditional practices.
 
● Planning Incremental Delivery Few decades ago, projects were much simpler and therefore more 
predictable than the present day projects. In those days, projects were planned with sufﬁ cient detail, 
much before the actual project execution started. After the project initiation, monitoring and control 
activities were carried out to ensure that the project execution proceeded as per plan. Now, projects 
are required to be completed over a much shorter duration, and rapid application development and 
deployment are considered key strategies. The traditional long-term planning has given way to adaptive 
short-term planning. Instead of making a long-term project completion plan, the project manager now 
plans all incremental deliveries with evolving functionalities. This type of project management is 

So ware Project Management
often called extreme project management. Extreme project management is a highly ﬂ exible approach 
to project management that concentrates on the human side of project management (e.g., managing 
project stakeholders), rather than formal and complex planning and monitoring techniques.
 
● Quality Management Of late, customer awareness about product quality has increased signiﬁ cantly. 
Tasks associated with quality management have become an important responsibility of the project 
manager. The key responsibilities of a project manager now include assessment of project progress and 
tracking the quality of all intermediate artifacts. We will discuss quality management issues in Chapter 
13.
 
● Change Management Earlier, when the requirements were signed off by the customer, any changes 
to the requirements were rarely entertained. Customer suggestions are now actively being solicited 
and incorporated throughout the development process. To facilitate customer feedback, incremental 
delivery models are popularly being used.  Product development is being carried out through a series of 
product versions implementing increasingly greater functionalities. Also customer feedback is solicited 
on each version for incorporation. This has made it necessary for an organization to keep track of the 
various versions and revisions through which the product develops. Another reason for the increased 
importance of keeping track of the versions and revisions is the following. Application development 
through customization has become a popular business model. Therefore, existence of a large number of 
versions of a product and the need to support these by a development organization has become common. 
In this context, the project manager plays a key role in product base lining and version control. This has 
made change management a crucial responsibility of the project manager. Change management is also 
known as conﬁ guration management. We will discuss change management in Chapter 9.
 
EXERCISE 
1.12
Assume that the development of the pay roll package of Brightmouth College has been entrusted to an 
organization who would develop it by customizing one of its products. Discuss the main stages through 
which the organization could carry out project development?
CONCLUSION
This chapter has laid a foundation for the remainder of the book by deﬁ ning what is meant by various terms 
such as ‘software project’ and ‘management’. Among some of the more important points that have been made 
are the following:
 
● Projects are by deﬁ nition non-routine and therefore more uncertain than normal undertakings.
 
● Software projects are similar to other projects but have some attributes that present particular difﬁ -
culties, e.g. the relative invisibility of many of their products.
 
● A key factor in project success is having clear objectives. Different stakeholders in a project, however, are 
likely to have different objectives. This points to the need for a recognized overall project authority.
 
● For objectives to be effective there must be practical ways of testing that the objectives have been 
met.
 
● Where projects involve many different people, effective channels of information have to be established. 
Having objective measures of success helps unambiguous communication between the various parties 
to a project.

Scanned by CamScanner
https://abdullahsurati.github.io/bscit
https://abdullahsurati.github.io/bscit

Scanned by CamScanner
https://abdullahsurati.github.io/bscit
https://abdullahsurati.github.io/bscit

Scanned by CamScanner
https://abdullahsurati.github.io/bscit
https://abdullahsurati.github.io/bscit

Scanned by CamScanner
https://abdullahsurati.github.io/bscit
https://abdullahsurati.github.io/bscit

Scanned by CamScanner
https://abdullahsurati.github.io/bscit
https://abdullahsurati.github.io/bscit

Scanned by CamScanner
https://abdullahsurati.github.io/bscit
https://abdullahsurati.github.io/bscit

Scanned by CamScanner
https://abdullahsurati.github.io/bscit
https://abdullahsurati.github.io/bscit

Scanned by CamScanner
https://abdullahsurati.github.io/bscit
https://abdullahsurati.github.io/bscit

Scanned by CamScanner
https://abdullahsurati.github.io/bscit
https://abdullahsurati.github.io/bscit

Scanned by CamScanner
https://abdullahsurati.github.io/bscit
https://abdullahsurati.github.io/bscit

Scanned by CamScanner
https://abdullahsurati.github.io/bscit
https://abdullahsurati.github.io/bscit

Scanned by CamScanner
https://abdullahsurati.github.io/bscit
https://abdullahsurati.github.io/bscit

---

## Module 5 Textbook 1

OBJECTIVES
When you have completed this chapter you will be able to:
explain the importance of software quality to software users and developers;
•
deﬁ ne the qualities of good software;
•
design methods of measuring the required qualities of software;
•
monitor the quality of the processes in a software project;
•
use external quality standards to ensure the quality of software acquired from an outside supplier;
•
develop systems using procedures that will increase their quality.
•
13.1 Introduction
While quality is generally agreed to be ‘a good thing’, in practice what is meant by the ‘quality’ of a system 
can be vague. We need to deﬁ ne precisely what qualities we require of a system. However, we need to go 
further – we need to judge objectively whether a system meets our quality requirements and this needs 
measurement. This would be of particular concern to someone like Brigette at Brightmouth College in the 
process of selecting a package.
For someone – like Amanda at IOE – who is developing software, waiting until the system exists before 
measuring it would be leaving things rather late. Amanda might want to assess the likely quality of the ﬁ nal 
system while it was still under development, and also to make sure that the development methods used would 
produce that quality. This leads to a different emphasis – rather than concentrating on the quality of the ﬁ nal 
system, a potential customer for software might check that the suppliers were using the best development 
methods.
This chapter examines these issues.
MODULE 5

So ware Quality

13.2 Th e Place of Soft ware Quality in Project Planning
Quality will be of concern at all stages of project planning and execution, but will be of particular interest at 
the following points in the Step Wise framework (Figure 13.1).
 
● Step 1: Identify project scope and objectives Some objectives could relate to the qualities of the appli-
cation to be delivered.
 
● Step 2: Identify project infrastructure Within this step, activity 2.2 identiﬁ es installation standards and 
procedures. Some of these will almost certainly be about quality.
 
● Step 3: Analyse project characteristics In activity 3.2 (‘Analyse other project characteristics – including 
quality based ones’) the application to be implemented is examined to see if it has any special quality 
requirements. If, for example, it is safety critical then a range of activities could be added, such as 
n-version development where a number of teams develop versions of the same software which are then 
run in parallel with the outputs being cross-checked for discrepancies.
FIGURE 13.1
The place of so ware quality in Step Wise

So ware Project Management
 
● Step 4: Identify the products and activities of the project It is at this point that the entry, exit and process 
requirements are identiﬁ ed for each activity. This is described later in this chapter.
 
● Step 8: Review and publicize plan At this stage the overall quality aspects of the project plan are 
reviewed.
13.3 Th e Importance of Soft ware Quality
We would expect quality to be a concern of all producers of goods and services. However, the special charac-
teristics of software create special demands.
 
● Increasing criticality of software The ﬁ nal customer or user is naturally anxious about the general 
quality of software, especially its reliability. This is increasingly so as organizations rely more on their 
computer systems and software is used in more safety-critical applications, for example to control 
aircraft.
 
● The intangibility of software can make it difﬁ cult to know that a project task was completed satisfac-
torily. Task outcomes can be made tangible by demanding that the developer produce ‘deliverables’ that 
can be examined for quality.
 
● Accumulating errors during software development As computer system development comprises steps 
where the output from one step is the input to the next, the errors in the later deliverables will be added 
to those in the earlier steps, leading to an accumulating detrimental effect. In general, the later in a 
project that an error is found the more expensive it will be to ﬁ x. In addition, because the number of 
errors in the system is unknown, the debugging phases of a project are particularly difﬁ cult to control.
For these reasons quality management is an essential part of effective overall project management.
13.4 Defi ning Soft ware Quality
In Chapter 1 we noted that a system has functional, quality and resource requirements. Functional require-
ments deﬁ ne what the system is to do, the resource requirements specify allowable costs and the quality 
requirements state how well this system is to operate.
 
EXERCISE 
13.1
At Brightmouth College, Brigette has to select the best off-the-shelf payroll package for the college. 
How should she go about this in a methodical manner?
One element of the approach could be the identiﬁ cation of criteria against which payroll packages are 
to be judged. What might these criteria be? How could you check the extent to which packages match 
these criteria?
Some qualities of a software product reﬂ ect the external view of software held by users, as in the case of 
usability. These external qualities have to be mapped to internal factors of which the developers would 
be aware. It could be argued, for example, that well-structured code is likely to have fewer errors and thus 
improve reliability.

So ware Quality

Deﬁ ning quality is not enough. If we are to judge whether a system meets our requirements we need to be 
able to measure its qualities.
A good measure must relate the number of units to the maximum possible. The 
maximum number of faults in a program, for example, is related to the size of the 
program, so a measure of faults per thousand lines of code is more helpful than total
faults in a program.
Trying to ﬁ nd measures for a particular quality helps to clarify and communicate what 
that quality really is. What is being asked is, in effect, ‘how do we know when we 
have been successful?’
The measures may be direct, where we can measure the quality directly, or indirect, where the thing being 
measured is not the quality itself but an indicator that the quality is present. For example, the number of 
enquiries by users received by a help desk about how one operates a particular software application might be 
an indirect measurement of its usability.
When project managers identify quality measurements they effectively set targets for project team members, 
so care has to be taken that an improvement in the measured quality is always meaningful. For example, the 
number of errors found in program inspections could be counted, on the grounds that the more thorough the 
inspection process, the more errors will be discovered. This count could, of course, be improved by allowing 
more errors to go through to the inspection stage rather than eradicating them earlier – which is not quite the 
point.
When there is concern about the need for a speciﬁ c quality characteristic in a software product then a quality 
speciﬁ cation with the following minimum details should be drafted:
 
● deﬁ nition/description: deﬁ nition of the quality characteristic;
 
● scale: the unit of measurement;
 
● test: the practical test of the extent to which the attribute quality exists;
 
● minimally acceptable: the worst value which might be acceptable if other characteristics compensated 
for it, and below which the product would have to be rejected out of hand;
 
● target range: the range of values within which it is planned the quality measurement value should lie;
 
● now: the value that applies currently.
 
EXERCISE 
13.2
Suggest quality speciﬁ cations for a word processing package. Give particular attention to the way that 
practical tests of these attributes could be conducted.
There could be several measurements applicable to a quality characteristic. For example, in the case of 
reliability, this might be measured in terms of:
 
● availability: the percentage of a particular time interval that a system is usable;
 
● mean time between failures: the total service time divided by the number of failures;
 
● failure on demand: the probability that a system will not be available at the time required or the proba-
bility that a transaction will fail;
 
● support activity: the number of fault reports that are generated and processed.
The BS ISO/IEC 
15939:2007 standard 
Systems and software 
engineering – mea-
surement process has
codiﬁ ed many of the 
practices discussed in 
this section.

So ware Project Management
 
EXERCISE 
13.3
The enhanced IOE maintenance jobs system has been installed, and is normally available to users from 
8.00 a.m. until 6.00 p.m. from Monday to Friday. Over a four-week period the system was unavailable 
for one whole day because of problems with a disk drive and was not available on two other days until 
10.00 in the morning because of problems with overnight batch processing runs.
What were the availability and the mean time between failures of the service?
Associated with reliability is maintainability, which is how quickly a fault, once 
detected, can be corrected. A key component of this is changeability, which is the 
ease with which the software can be modiﬁ ed. However, before an amendment can be 
made, the fault has to be diagnosed. Maintainability can therefore be seen as change-
ability plus a new quality, analysability, which is the ease with which causes of failure 
can be identiﬁ ed.
13.5 ISO 9126
Over the years, various lists of software quality characteristics have been put forward, 
such as those of James McCall and of Barry Boehm. A difﬁ culty has been the lack 
of agreed deﬁ nitions of the qualities of good software. The term ‘maintainability’ 
has been used, for example, to refer to the ease with which an error can be located 
and corrected in a piece of software, and also in a wider sense to include the ease 
of making any changes. For some, ‘robustness’ has meant the software’s tolerance 
of incorrect input, while for others it has meant the ability to change program code 
without introducing errors. The ISO 9126 standard was ﬁ rst introduced in 1991 to 
tackle the question of the deﬁ nition of software quality. The original 13-page document 
was designed as a foundation upon which further, more detailed, standards could be 
built. The ISO 9126 standards documents are now very lengthy. Partly this is because 
people with differing motivations might be interested in software quality, namely:
 
● acquirers who are obtaining software from external suppliers;
 
● developers who are building a software product;
 
● independent evaluators who are assessing the quality of a software product, not for themselves but for 
a community of users – for example, those who might use a particular type of software tool as part of 
their professional practice.
ISO 9126 has separate documents to cater for these three sets of needs. Despite the size of this set of documen-
tation, it relates only to the deﬁ nition of software quality attributes. A separate standard, ISO 14598, describes 
the procedures that should be carried out when assessing the degree to which a software product conforms to 
the selected ISO 9126 quality characteristics. This might seem unnecessary, but it is argued that ISO 14598 
could be used to carry out an assessment using a different set of quality characteristics from those in ISO 
9126 if circumstances required it.
The difference between internal and external quality attributes has already been noted. ISO 9126 also intro-
duces another type of quality – quality in use – for which the following elements have been identiﬁ ed:
Maintainability can be 
seen from two differ-
ent perspectives. The 
user will be concerned 
with the elapsed time 
between a fault being 
detected and it being 
corrected, while the 
software development 
managers will be con-
cerned about the effort
involved.
Currently, in the UK, 
the main ISO 9126 
standard is known as 
BS ISO/IEC 9126-
1:2001. This is supple-
mented by some ‘tech-
nical reports’ (TRs), 
published in 2003, 
which are provisional 
standards. At the 
time of writing, a new 
standard in this area, 
ISO 25000, is being 
developed.

So ware Quality

● effectiveness: the ability to achieve user goals with accuracy and completeness;
 
● productivity: avoiding the excessive use of resources, such as staff effort, in achieving user goals;
 
● safety: within reasonable levels of risk of harm to people and other entities such as business, software, 
property and the environment;
 
● satisfaction: smiling users.
‘Users’ in this context includes not just those who operate the system containing the software, but also those 
who maintain and enhance the software. The idea of quality in use underlines how the required quality of 
the software is an attribute not just of the software but also of the context of use. For instance, in the IOE 
scenario, suppose the maintenance job reporting procedure varies considerably, depending on the type of 
equipment being serviced, because different inputs are needed to calculate the cost to IOE. Say that 95% of 
jobs currently involve maintaining photocopiers and 5% concern maintenance of printers. If the software is 
written for this application, then despite good testing, some errors might still get into the operational system. 
As these are reported and corrected, the software would become more ‘mature’ as faults become rarer. If there 
were a rapid switch so that more printer maintenance jobs were being processed, there could be an increase 
in reported faults as coding bugs in previously less heavily used parts of the software code for printer mainte-
nance were ﬂ ushed out by the larger number of printer maintenance transactions. Thus, changes to software 
use involve changes to quality requirements.
ISO 9126 identiﬁ es six major external software quality characteristics:
 
● functionality, which covers the functions that a software product provides to satisfy user needs;
 
● reliability, which relates to the capability of the software to maintain its level of performance;
 
● usability, which relates to the effort needed to use the software;
 
● efﬁ ciency, which relates to the physical resources used when the software is executed;
 
● maintainability, which relates to the effort needed to the make changes to the software;
 
● portability, which relates to the ability of the software to be transferred to a different environment.
ISO 9126 suggests sub-characteristics for each of the primary characteristics. They are useful as they clarify 
what is meant by each of the main characteristics.
Characteristic
Sub-characteristics
Functionality
Suitability
Accuracy
Interoperability
Functionality compliance
Security
‘Functionality compliance’ refers to the degree to which the software adheres to application-related standards 
or legal requirements. Typically these could be auditing requirements. Since the original 1999 draft, a 
sub-characteristic called ‘compliance’ has been added to all six ISO external characteristics. In each case, 
this refers to any speciﬁ c standards that might apply to the particular quality attribute.
‘Interoperability’ is a good illustration of the efforts of ISO 9126 to clarify terminology. ‘Interoperability’ 
refers to the ability of the software to interact with other systems. The framers of ISO 9126 have chosen this 

So ware Project Management
word rather than ‘compatibility’ because the latter causes confusion with the characteristic referred to by ISO 
9126 as ‘replaceability’ (see below).
Characteristic
Sub-characteristics
Reliability
Maturity
Fault tolerance
Recoverability
Reliability compliance
‘Maturity’ refers to the frequency of failure due to faults in a software product, the implication being that the 
more the software has been used, the more faults will have been uncovered and removed. It is also interesting 
to note that ‘recoverability’ has been clearly distinguished from ‘security’ which describes the control of 
access to a system.
Characteristic
Sub-characteristics
Usability
Understandability
Learnability
Operability
Attractiveness
Usability compliance
Note how ‘learnability’ is distinguished from ‘operability’. A software tool could be easy to learn but time-
consuming to use because, say, it uses a large number of nested menus. This might be ﬁ ne for a package used 
intermittently, but not where the system is used for many hours each day. In this case ‘learnability’ has been 
incorporated at the expense of ‘operability’.
‘Attractiveness’ is a recent addition to the sub-characteristics of usability and is especially important where 
users are not compelled to use a particular software product, as in the case of games and other entertainment 
products.
Characteristic
Sub-characteristics
Efﬁ ciency
Time behaviour
Resource utilization
Efﬁ ciency compliance
Maintainability
Analysability
Changeability
Stability
Testability
Maintainability compliance

So ware Quality

‘Analysability’ is the ease with which the cause of a failure can be determined. ‘Changeability’ is the quality 
that others call ‘ﬂ exibility’: the latter name is a better one as ‘changeability’ has a different connotation in 
plain English – it might imply that the suppliers of the software are always changing it!
‘Stability’, on the other hand, does not refer to software never changing: it means that there is a low risk of a 
modiﬁ cation to the software having unexpected effects.
Characteristic
Sub-characteristics
Portability
Adaptability
Installability
Coexistence
Replaceability
Portability compliance
‘Portability compliance’ relates to those standards that have a bearing on portability. 
The use of a standard programming language common to many software/hardware 
environments would be an example of this. ‘Replaceability’ refers to the factors that 
give ‘upwards compatibility’ between old software components and the new ones. 
‘Downwards’ compatibility is not implied by the deﬁ nition.
‘Coexistence’ refers to the ability of the software to share resources with other software 
components; unlike ‘interoperability’, no direct data passing is necessarily involved.
ISO 9126 provides guidelines for the use of the quality characteristics. Variation in 
the importance of different quality characteristics depending on the type of product is 
stressed. Once the requirements for the software product have been established, the 
following steps are suggested:
 
1. Judge the importance of each quality characteristic for the application Thus reliability will be of 
particular concern with safety-critical systems while efﬁ ciency will be important for some real-time 
systems.
 
2. Select the external quality measurements within the ISO 9126 framework relevant to the qualities 
prioritized above Thus for reliability mean time between failures would be an important measurement, 
while for efﬁ ciency, and more speciﬁ cally ‘time behaviour’, response time would be an obvious 
measurement.
 
3. Map measurements onto ratings that reﬂ ect user satisfaction For response time, for example, the 
mappings might be as in Table 13.1.
 
4. Identify the relevant internal measurements and the intermediate products in which they appear This
would only be important where software was being developed, rather than existing software being 
evaluated. For new software, the likely quality of the ﬁ nal product would need to be assessed during 
development. For example, where the external quality in question was time behaviour, at the software 
design stage an estimated execution time for a transaction could be produced by examining the software 
code and calculating the time for each instruction in a typical execution of the transaction. In our view 
the mappings between internal and external quality characteristics and measurements suggested in 
A new version of a 
word processing pack-
age might read the 
documents produced 
by previous versions 
and thus be able to 
replace them, but pre-
vious versions might 
not be able to read all 
documents created by 
the new version.

So ware Project Management
the ISO 9126 standard are the least convincing elements in the approach. The part of the standard that 
provides guidance at this point is a ‘technical report’ which is less authoritative than a full standard. It 
concedes that mapping external and internal measurements can be difﬁ cult and that validation to check 
that there is a meaningful correlation between the two in a speciﬁ c environment needs to be done. This 
reﬂ ects a real problem in the practical world of software development of examining code structure and 
from that attempting to predict accurately external qualities such as reliability.
TABLE 13.1
Mapping measurements to user sa sfac on
Response time (seconds)
Rating
<2
Exceeds expectation
2–5
Within the target range
6–10
Minimally acceptable
>10
Unacceptable
 
 According to ISO 9126, measurements that might act as indicators of the ﬁ nal quality of the software 
can be taken at different stages of the development life cycle. For products at the early stages these 
indicators might be qualitative. They could, for example, be based on checklists where compliance 
with predeﬁ ned criteria is assessed by expert judgement. As the product nears completion, objective, 
quantitative, measurements would increasingly be taken.
 
5. Overall assessment of product quality To what extent is it possible to combine ratings for different 
quality characteristics into a single overall rating for the software? A factor which discourages attempts 
at combining the assessments of different quality characteristics is that they can, in practice, be measured 
in very different ways, which makes comparison and combination difﬁ cult. Sometimes the presence 
of one quality could be to the detriment of another. For example, the efﬁ ciency characteristics of time 
behaviour and resource utilization could be enhanced by exploiting the particular characteristics of the 
operating system and hardware environments within which the software will perform. This, however, 
would probably be at the expense of portability.
 
 It was noted above that quality assessment could be carried out for a number of different reasons: to 
assist software development, acquisition or independent assessment.
 
 During the development of a software product, the assessment would be driven by the need to focus the 
minds of the developers on key quality requirements. The aim would be to identify possible weaknesses 
early on and there would be no need for an overall quality rating.
TABLE 13.2
Mapping response  mes onto user sa sfac on
Response time (seconds)
Quality score
<2

2–3

(Contd)

So ware Quality

4–5

6–7

8–9

>9

Where potential users are assessing a number of different software products in order to choose the best one, 
the outcome will be along the lines that product A is more satisfactory than product B or C. Here some idea 
of relative satisfaction exists and there is a justiﬁ cation in trying to model how this satisfaction might be 
formed. One approach recognizes some mandatory quality rating levels which a product must reach or be 
rejected, regardless of how good it is otherwise. Other characteristics might be desirable but not essential. 
For these a user satisfaction rating could be allocated in the range, say, 0–5. This could be based on having 
an objective measurement of some function and then relating different measurement values to different levels 
of user satisfaction – see Table 13.2.
Along with the rating for satisfaction, a rating in the range 1–5, say, could be assigned to reﬂ ect how important 
each quality characteristic was. The scores for each quality could be given due weight by multiplying it by its 
importance weighting. These weighted scores can then be summed to obtain an overall score for the product. 
The scores for various products are then put in the order of preference. For example, two products might be 
compared as to usability, efﬁ ciency and maintainability. The importance of each of these qualities might be 
rated as 3, 4 and 2, respectively, out of a possible maximum of 5. Quality tests might result in the situation 
shown in Table 13.3.
TABLE 13.3
Weighted quality scores
Product quality
Importance 
rating (a)
Product A
Product B
Quality score 
(b)
Weighted score 
(a 3 b)
Quality score 
(c)
Weighted score 
(a 3 c)
Usability

Efﬁ ciency

Maintainability

Overall

Finally, a quality assessment can be made on behalf of a user community as a whole. For example, a profes-
sional body might assess software tools that support the working practices of its members. Unlike the selection 
by an individual user/purchaser, this is an attempt to produce an objective assessment of the software indepen-
dently of a particular user environment. It is clear that the result of such an exercise would vary considerably 
depending on the weightings given to each software characteristic, and different users could have different 
requirements. Caution would be needed here.
(Contd)
The problem here is 
to map an objective 
measurement onto an 
indicator of customer 
satisfaction which is 
subjective.

So ware Project Management
13.6 Product and Process Metrics
We have already discussed in Section 13.4 that the users assess the quality of a software product based on 
its external attributes, whereas during development, the developers assess the product’s quality based on 
various internal attributes. We can also say that during development, the developers can ensure the quality 
of a software product based on a measurement of the relevant internal attributes. The internal attributes may 
measure either some aspects of the product (called product or of the development process (called process 
metrics). Let us understand the basic differences between product and process metrics.
 
● Product metrics help measure the characteristics of a product being developed. A few examples of 
product metrics and the speciﬁ c product characteristics that they measure are the following:  the LOC 
and function point metrics are used to measure size, the PM (person-month) metric is used to measure 
the effort required to develop a product, and the time required to develop the product is measured in 
months.
 
● Process metrics help measure how a development process is performing. Examples of process metrics 
are review effectiveness, average number of defects found per hour of inspection, average defect 
correction time, productivity, average number of failures detected during testing per LOC, and the 
number of latent defects per line of code in the developed product.
13.7 Product versus Process Quality Management
The measurements described above relate to products. With a product-based approach to planning and control, 
as advocated by the PRINCE2 project management method, this focus on products is convenient. However, 
we saw that it is often easier to measure these product qualities in a completed computer application rather 
than during its development. Trying to use the attributes of intermediate products created at earlier stages to 
predict the quality of the ﬁ nal application is difﬁ cult. An alternative approach is to scrutinize the quality of 
the processes used to develop software product.
The system development process comprises a number of activities linked so that the 
output from one activity is the input to the next (Figure 13.2). Errors can enter the 
process at any stage. They can be caused either by defects in a process, as when 
software developers make mistakes in the logic of their software, or by information 
not passing clearly and accurately between development stages.
Errors not removed at early stages become more expensive to correct at later stages. 
Each development step that passes before the error is found increases the amount of 
rework needed. An error in the speciﬁ cation found in testing will mean rework at all 
the stages between speciﬁ cation and testing. Each successive step of development is also more detailed and 
less able to absorb change.
Errors should therefore be eradicated by careful examination of the deliverables of each step before they are 
passed on. One way of doing this is by having the following process requirements for each step.
 
● Entry requirements, which have to be in place before an activity can start. An example would be that a 
comprehensive set of test data and expected results be prepared and approved before program testing 
can commence.
 
● Implementation requirements, which deﬁ ne how the process is to be conducted. In the testing phase, 
for example, it could be laid down that whenever an error is found and corrected, all test runs must be 
repeated, even those that have previously been found to run correctly.
Note that Extreme 
Programming advo-
cates suggest that the 
extra effort needed 
to amend software at 
later stages can be 
exaggerated and is, in 
any case, often justi-
ﬁ ed as adding value to 
the software.

So ware Quality

● Exit requirements, which have to be fulﬁ lled before an activity is deemed to have 
been completed. For example, for the testing phase to be recognized as being 
completed, all tests will have to have been run successfully with no outstanding 
errors.
 
EXERCISE 
13.4
In what cases might the entry conditions for one activity be different from the exit conditions for 
another activity that immediately precedes it?
 
EXERCISE 
13.5
What might be the entry and exit requirements for the process code program shown in Figure 13.2?
FIGURE 13.2
An example of the sequence of processes and deliverables
These requirements 
may be laid out in 
installation standards, 
or a Software Quality 
Plan may be drawn up 
for the speciﬁ c project 
if it is a major one.

PART FOUR
MANAGING SOFTWARE PROJECTS
feel confident that their planning will improve a project’s outcome. Since neither party
wants to do planning, it often doesn’t get done.
But failure to plan is one of the most critical mistakes a project can make . . . effective
planning is needed to resolve problems upstream [early in the project] at low cost, rather
than downstream [late in the project] at high cost. The average project spends 80 percent
of its time on rework—fixing mistakes that were made earlier in the project.
McConnell argues that every team can find the time to plan (and to adapt the plan
throughout the project) simply by taking a small percentage of the time that would
have been spent on rework that occurs because planning was not conducted.
26.1
OBSERVATIONS ON ESTIMATION
Planning requires you to make an initial commitment, even though it’s likely that this
“commitment” will be proven wrong. Whenever estimates are made, you look into
the future and accept some degree of uncertainty as a matter of course. To quote
Frederick Brooks [Bro95]:
. . . our techniques of estimating are poorly developed. More seriously, they reflect an
unvoiced assumption that is quite untrue, i.e., that all will go well. . . . because we are
uncertain of our estimates, software managers often lack the courteous stubbornness to
make people wait for a good product.
Although estimating is as much art as it is science, this important action need not be
conducted in a haphazard manner. Useful techniques for time and effort estimation
do exist. Process and project metrics can provide historical perspective and power-
ful input for the generation of quantitative estimates. Past experience (of all people
involved) can aid immeasurably as estimates are developed and reviewed. Because
estimation lays a foundation for all other project planning actions, and project plan-
ning provides the road map for successful software engineering, we would be ill
advised to embark without it.
Estimation of resources, cost, and schedule for a software engineering effort
requires experience, access to good historical information (metrics), and the courage
to commit to quantitative predictions when qualitative information is all that exists.
Estimation carries inherent risk,1 and this risk leads to uncertainty.
Project complexity has a strong effect on the uncertainty inherent in planning.
Complexity, however, is a relative measure that is affected by familiarity with past
effort. The first-time developer of a sophisticated e-commerce application might con-
sider it to be exceedingly complex. However, a Web engineering team developing its
tenth e-commerce WebApp would consider such work run-of-the-mill. A number of
quantitative software complexity measures have been proposed [Zus97]. Such mea-
sures are applied at the design or code level and are therefore difficult to use during
uote:
“Good estimating
approaches and
solid historical data
offer the best hope
that reality will win
out over impossible
demands.”
Caper Jones

Systematic techniques for risk analysis are presented in Chapter 28.
use cases . . . .705
WebApps . . . .714
feasibility . . . . .694
project
planning . . . . . .693
software 
equation . . . . . .711
software 
scope . . . . . . . .694

software planning (before a design and code exist). However, other, more subjective
assessments of complexity (e.g., function point complexity adjustment factors
described in Chapter 23) can be established early in the planning process.
Project size is another important factor that can affect the accuracy and efficacy of
estimates. As size increases, the interdependency among various elements of the
software grows rapidly.2 Problem decomposition, an important approach to estimat-
ing, becomes more difficult because the refinement of problem elements may still be
formidable. To paraphrase Murphy’s law: “What can go wrong will go wrong”—and
if there are more things that can fail, more things will fail.
The degree of structural uncertainty also has an effect on estimation risk. In this
context, structure refers to the degree to which requirements have been solidified,
the ease with which functions can be compartmentalized, and the hierarchical
nature of the information that must be processed.
The availability of historical information has a strong influence on estimation risk.
By looking back, you can emulate things that worked and improve areas where
problems arose. When comprehensive software metrics (Chapter 25) are available
for past projects, estimates can be made with greater assurance, schedules can
be established to avoid past difficulties, and overall risk is reduced.
Estimation risk is measured by the degree of uncertainty in the quantitative
estimates established for resources, cost, and schedule. If project scope is poorly
understood or project requirements are subject to change, uncertainty and estimation
risk become dangerously high. As a planner, you and the customer should recognize
that variability in software requirements means instability in cost and schedule.
However, you should not become obsessive about estimation. Modern software
engineering approaches (e.g., evolutionary process models) take an iterative view
of development. In such approaches, it is possible—although not always politically
acceptable—to revisit the estimate (as more information is known) and revise it
when the customer makes changes to requirements.
26.2
THE PROJECT PLANNING PROCESS
The objective of software project planning is to provide a framework that enables the
manager to make reasonable estimates of resources, cost, and schedule. In addition,
estimates should attempt to define best-case and worst-case scenarios so that proj-
ect outcomes can be bounded. Although there is an inherent degree of uncertainty,
the software team embarks on a plan that has been established as a consequence
of these tasks. Therefore, the plan must be adapted and updated as the project pro-
ceeds. In the following sections, each of the actions associated with software project
planning is discussed.
CHAPTER 26
ESTIMATION FOR SOFTWARE PROJECTS

uote:
“It is the mark of
an instructed mind
to rest satisfied
with the degree of
precision that the
nature of the sub-
ject admits, and not
to seek exactness
when only an
approximation
of the truth is
possible.”
Aristotle
Project complexity,
project size, and the
degree of structural
uncertainty all affect
the reliability of
estimates.

Size often increases due to “scope creep” that occurs when problem requirements change. In-
creases in project size can have a geometric impact on project cost and schedule (Michael Mah,
personal communication).
The more you know,
the better you
estimate. Therefore,
update your estimates
as the project
progresses.

PART FOUR
MANAGING SOFTWARE PROJECTS
Task Set for Project Planning
1. Establish project scope.
2. Determine feasibility.
3. Analyze risks (Chapter 28).
4. Define required resources.
a. Determine required human resources.
b. Define reusable software resources.
c. Identify environmental resources.
5. Estimate cost and effort.
a. Decompose the problem.
b. Develop two or more estimates using size, function
points, process tasks, or use cases.
c. Reconcile the estimates.
6. Develop a project schedule (Chapter 27).
a. Establish a meaningful task set.
b. Define a task network.
c. Use scheduling tools to develop a time-line chart.
d. Define schedule tracking mechanisms.
TASK SET
26.3
SOFTWARE SCOPE AND FEASIBILITY
Software scope describes the functions and features that are to be delivered to end
users; the data that are input and output; the “content” that is presented to users as
a consequence of using the software; and the performance, constraints, interfaces,
and reliability that bound the system. Scope is defined using one of two techniques:
1.
A narrative description of software scope is developed after communication
with all stakeholders.
2.
A set of use cases3 is developed by end users.
Functions described in the statement of scope (or within the use cases) are evaluated
and in some cases refined to provide more detail prior to the beginning of estimation.
Because both cost and schedule estimates are functionally oriented, some degree of
decomposition is often useful. Performance considerations encompass processing
and response time requirements. Constraints identify limits placed on the software by
external hardware, available memory, or other existing systems.
Once scope has been identified (with the concurrence of the customer), it is rea-
sonable to ask: “Can we build software to meet this scope? Is the project feasible?”
All too often, software engineers rush past these questions (or are pushed past
them by impatient managers or other stakeholders), only to become mired in a
project that is doomed from the onset. Putnam and Myers [Put97a] address this
issue when they write:
[N]ot everything imaginable is feasible, not even in software, evanescent as it may appear
to outsiders. On the contrary, software feasibility has four solid dimensions: Technology—
Is a project technically feasible? Is it within the state of the art? Can defects be reduced to
a level matching the application’s needs? Finance—Is it financially feasible? Can devel-
opment be completed at a cost the software organization, its client, or the market can

Use cases have been discussed in detail throughout Part 2 of this book. A use case is a scenario-
based description of the user’s interaction with the software from the user’s point of view.
Project feasibility is
important, but a
consideration of
business need is even
more important. It
does no good to build
a high-tech system or
product that no one
wants.

afford? Time—Will the project’s time-to-market beat the competition? Resources—Does
the organization have the resources needed to succeed?
Putnam and Myers correctly suggest that scoping is not enough. Once scope is un-
derstood, you must work to determine if it can be done within the dimensions just
noted. This is a crucial, although often overlooked, part of the estimation process.
26.4
RESOURCES
The second planning task is estimation of the resources required to accomplish the
software development effort. Figure 26.1 depicts the three major categories of soft-
ware engineering resources—people, reusable software components, and the devel-
opment environment (hardware and software tools). Each resource is specified with
four characteristics: description of the resource, a statement of availability, time
when the resource will be required, and duration of time that the resource will be
applied. The last two characteristics can be viewed as a time window. Availability of
the resource for a specified window must be established at the earliest practical time.
26.4.1
Human Resources
The planner begins by evaluating software scope and selecting the skills required to
complete development. Both organizational position (e.g., manager, senior software
engineer) and specialty (e.g., telecommunications, database, client-server) are
CHAPTER 26
ESTIMATION FOR SOFTWARE PROJECTS

Project
People
Environment
Reusable
software
Number
Skills
Location
Network
resources
Hardware
Software
tools
COTS
components
New
components
Full-experience
components
Part-experience
components
FIGURE 26.1
Project
resources

specified. For relatively small projects (a few person-months), a single individual may
perform all software engineering tasks, consulting with specialists as required. For
larger projects, the software team may be geographically dispersed across a number
of different locations. Hence, the location of each human resource is specified.
The number of people required for a software project can be determined only after
an estimate of development effort (e.g., person-months) is made. Techniques for
estimating effort are discussed later in this chapter.
26.4.2
Reusable Software Resources
Component-based software engineering (CBSE)4 emphasizes reusability—that is, the
creation and reuse of software building blocks. Such building blocks, often called
components, must be cataloged for easy reference, standardized for easy application,
and validated for easy integration. Bennatan [Ben00] suggests four software
resource categories that should be considered as planning proceeds:
Off-the-shelf components. Existing software that can be acquired from a third
party or from a past project. COTS (commercial off-the-shelf) components are pur-
chased from a third party, are ready for use on the current project, and have been
fully validated.
Full-experience components. Existing specifications, designs, code, or test data
developed for past projects that are similar to the software to be built for the
current project. Members of the current software team have had full experience
in the application area represented by these components. Therefore, modifications
required for full-experience components will be relatively low risk.
Partial-experience components. Existing specifications, designs, code, or test data
developed for past projects that are related to the software to be built for the cur-
rent project but will require substantial modification. Members of the current soft-
ware team have only limited experience in the application area represented by
these components. Therefore, modifications required for partial-experience com-
ponents have a fair degree of risk.
New components. Software components must be built by the software team
specifically for the needs of the current project.
Ironically, reusable software components are often neglected during planning, only
to become a paramount concern later in the software process. It is better to specify
software resource requirements early. In this way technical evaluation of the alter-
natives can be conducted and timely acquisition can occur.
26.4.3
Environmental Resources
The environment that supports a software project, often called the software engi-
neering environment (SEE), incorporates hardware and software. Hardware provides

PART FOUR
MANAGING SOFTWARE PROJECTS

CBSE is considered in Chapter 10.
Never forget that inte-
grating a variety of
reusable components
can be a significant
challenge. Worse, the
integration problem
resurfaces as various
components are
upgraded.

a platform that supports the tools (software) required to produce the work products
that are an outcome of good software engineering practice.5 Because most software
organizations have multiple constituencies that require access to the SEE, you must
prescribe the time window required for hardware and software and verify that these
resources will be available.
When a computer-based system (incorporating specialized hardware and soft-
ware) is to be engineered, the software team may require access to hardware
elements being developed by other engineering teams. For example, software for a
robotic device used within a manufacturing cell may require a specific robot (e.g., a
robotic welder) as part of the validation test step; a software project for advanced
page layout may need a high-speed digital printing system at some point during
development. Each hardware element must be specified as part of planning.
26.5
SOFTWARE PROJECT ESTIMATION
Software cost and effort estimation will never be an exact science. Too many
variables—human, technical, environmental, political—can affect the ultimate cost
of software and effort applied to develop it. However, software project estimation
can be transformed from a black art to a series of systematic steps that provide esti-
mates with acceptable risk. To achieve reliable cost and effort estimates, a number
of options arise:
1.
Delay estimation until late in the project (obviously, we can achieve 100 per-
cent accurate estimates after the project is complete!).
2.
Base estimates on similar projects that have already been completed.
3.
Use relatively simple decomposition techniques to generate project cost and
effort estimates.
4.
Use one or more empirical models for software cost and effort estimation.
Unfortunately, the first option, however attractive, is not practical. Cost estimates
must be provided up-front. However, you should recognize that the longer you wait,
the more you know, and the more you know, the less likely you are to make serious
errors in your estimates.
The second option can work reasonably well, if the current project is quite similar
to past efforts and other project influences (e.g., the customer, business conditions,
the software engineering environment, deadlines) are roughly equivalent. Unfortu-
nately, past experience has not always been a good indicator of future results.
The remaining options are viable approaches to software project estimation.
Ideally, the techniques noted for each option should be applied in tandem; each used
as a cross-check for the other. Decomposition techniques take a divide-and-conquer
CHAPTER 26
ESTIMATION FOR SOFTWARE PROJECTS

Other hardware—the target environment—is the computer on which the software will execute when
it has been released to the end user.
uote:
“In an age of
outsourcing and
increased
competition, the
ability to estimate
more accurately . . .
has emerged as a
critical success
factor for many IT
groups.”
Rob Thomsett

approach to software project estimation. By decomposing a project into major func-
tions and related software engineering activities, cost and effort estimation can be
performed in a stepwise fashion. Empirical estimation models can be used to com-
plement decomposition techniques and offer a potentially valuable estimation
approach in their own right. A model is based on experience (historical data) and
takes the form
d  f (vi)
where d is one of a number of estimated values (e.g., effort, cost, project duration)
and vi are selected independent parameters (e.g., estimated LOC or FP).
Automated estimation tools implement one or more decomposition techniques or
empirical models and provide an attractive option for estimating. In such systems,
the characteristics of the development organization (e.g., experience, environment)
and the software to be developed are described. Cost and effort estimates are derived
from these data.
Each of the viable software cost estimation options is only as good as the histor-
ical data used to seed the estimate. If no historical data exist, costing rests on a very
shaky foundation. In Chapter 25, we examined the characteristics of some of the
software metrics that provide the basis for historical estimation data.
26.6
DECOMPOSITION TECHNIQUES
Software project estimation is a form of problem solving, and in most cases, the
problem to be solved (i.e., developing a cost and effort estimate for a software
project) is too complex to be considered in one piece. For this reason, you should
decompose the problem, recharacterizing it as a set of smaller (and hopefully, more
manageable) problems.
In Chapter 24, the decomposition approach was discussed from two different points
of view: decomposition of the problem and decomposition of the process. Estimation
uses one or both forms of partitioning. But before an estimate can be made, you must
understand the scope of the software to be built and generate an estimate of its “size.”
26.6.1
Software Sizing
The accuracy of a software project estimate is predicated on a number of things:
(1) the degree to which you have properly estimated the size of the product to be built;
(2) the ability to translate the size estimate into human effort, calendar time, and dol-
lars (a function of the availability of reliable software metrics from past projects);
(3) the degree to which the project plan reflects the abilities of the software team; and
(4) the stability of product requirements and the environment that supports the soft-
ware engineering effort.
In this section, I consider the software sizing problem. Because a project estimate
is only as good as the estimate of the size of the work to be accomplished, sizing

PART FOUR
MANAGING SOFTWARE PROJECTS
uote:
“It is very difficult
to make a
vigorous, plausible
and job-risking
defense of an
estimate that is
derived by no
quantitative
method, supported
by little data, and
certified chiefly by
the hunches of the
managers.”
Fred Brooks
The “size” of software
to be built can be
estimated using a direct
measure, LOC, or an
indirect measure, FP.

represents your first major challenge as a planner. In the context of project planning,
size refers to a quantifiable outcome of the software project. If a direct approach is
taken, size can be measured in lines of code (LOC). If an indirect approach is chosen,
size is represented as function points (FP).
Putnam and Myers [Put92] suggest four different approaches to the sizing problem:
• “Fuzzy logic” sizing. This approach uses the approximate reasoning tech-
niques that are the cornerstone of fuzzy logic. To apply this approach, the
planner must identify the type of application, establish its magnitude on a
qualitative scale, and then refine the magnitude within the original range.
• Function point sizing. The planner develops estimates of the information
domain characteristics discussed in Chapter 23.
• Standard component sizing. Software is composed of a number of different
“standard components” that are generic to a particular application area. For
example, the standard components for an information system are subsys-
tems, modules, screens, reports, interactive programs, batch programs, files,
LOC, and object-level instructions. The project planner estimates the number
of occurrences of each standard component and then uses historical project
data to estimate the delivered size per standard component.
• Change sizing. This approach is used when a project encompasses the use of
existing software that must be modified in some way as part of a project. The
planner estimates the number and type (e.g., reuse, adding code, changing
code, deleting code) of modifications that must be accomplished.
Putnam and Myers suggest that the results of each of these sizing approaches be
combined statistically to create a three-point or expected-value estimate. This is
accomplished by developing optimistic (low), most likely, and pessimistic (high) val-
ues for size and combining them using Equation (26.1), described in Section 26.6.2.
26.6.2
Problem-Based Estimation
In Chapter 25, lines of code and function points were described as measures from
which productivity metrics can be computed. LOC and FP data are used in two ways
during software project estimation: (1) as estimation variables to “size” each element
of the software and (2) as baseline metrics collected from past projects and used in
conjunction with estimation variables to develop cost and effort projections.
LOC and FP estimation are distinct estimation techniques. Yet both have a num-
ber of characteristics in common. You begin with a bounded statement of software
scope and from this statement attempt to decompose the statement of scope into
problem functions that can each be estimated individually. LOC or FP (the estima-
tion variable) is then estimated for each function. Alternatively, you may choose
another component for sizing, such as classes or objects, changes, or business
processes affected.
CHAPTER 26
ESTIMATION FOR SOFTWARE PROJECTS

How do we
size the
software that
we’re planning
to build?
?
What do
LOC- and 
FP-based
estimation have
in common?
?

Baseline productivity metrics (e.g., LOC/pm or FP/pm6) are then applied to the
appropriate estimation variable, and cost or effort for the function is derived. Func-
tion estimates are combined to produce an overall estimate for the entire project.
It is important to note, however, that there is often substantial scatter in produc-
tivity metrics for an organization, making the use of a single-baseline productivity
metric suspect. In general, LOC/pm or FP/pm averages should be computed by proj-
ect domain. That is, projects should be grouped by team size, application area, com-
plexity, and other relevant parameters. Local domain averages should then be
computed. When a new project is estimated, it should first be allocated to a domain,
and then the appropriate domain average for past productivity should be used in
generating the estimate.
The LOC and FP estimation techniques differ in the level of detail required for de-
composition and the target of the partitioning. When LOC is used as the estimation
variable, decomposition is absolutely essential and is often taken to considerable
levels of detail. The greater the degree of partitioning, the more likely reasonably ac-
curate estimates of LOC can be developed.
For FP estimates, decomposition works differently. Rather than focusing on func-
tion, each of the information domain characteristics—inputs, outputs, data files, in-
quiries, and external interfaces—as well as the 14 complexity adjustment values
discussed in Chapter 23 are estimated. The resultant estimates can then be used to
derive an FP value that can be tied to past data and used to generate an estimate.
Regardless of the estimation variable that is used, you should begin by estimat-
ing a range of values for each function or information domain value. Using histor-
ical data or (when all else fails) intuition, estimate an optimistic, most likely, and
pessimistic size value for each function or count for each information domain
value. An implicit indication of the degree of uncertainty is provided when a range
of values is specified.
A three-point or expected value can then be computed. The expected value for the
estimation variable (size) S can be computed as a weighted average of the optimistic
(sopt), most likely (sm), and pessimistic (spess) estimates. For example,
S 
(26.1)
gives heaviest credence to the “most likely” estimate and follows a beta probability
distribution. We assume that there is a very small probability the actual size result
will fall outside the optimistic or pessimistic values.
Once the expected value for the estimation variable has been determined, histor-
ical LOC or FP productivity data are applied. Are the estimates correct? The only
reasonable answer to this question is: “You can’t be sure.” Any estimation technique,
no matter how sophisticated, must be cross-checked with another approach. Even
then, common sense and experience must prevail.
sopt  4sm  spess

PART FOUR
MANAGING SOFTWARE PROJECTS

The acronym pm means person-month of effort.
When collecting
productivity metrics for
projects, be sure to
establish a taxonomy
of project types. This
will enable you to
compute domain-
specific averages,
making estimation
more accurate.
How do we
compute the
“expected value“
for software
size?
?

26.6.3
An Example of LOC-Based Estimation
As an example of LOC and FP problem-based estimation techniques, I consider a
software package to be developed for a computer-aided design application for
mechanical components. The software is to execute on an engineering workstation
and must interface with various computer graphics peripherals including a mouse,
digitizer, high-resolution color display, and laser printer. A preliminary statement of
software scope can be developed:
The mechanical CAD software will accept two- and three-dimensional geometric data
from an engineer. The engineer will interact and control the CAD system through a user
interface that will exhibit characteristics of good human/machine interface design. All
geometric data and other supporting information will be maintained in a CAD database.
Design analysis modules will be developed to produce the required output, which will
be displayed on a variety of graphics devices. The software will be designed to control
and interact with peripheral devices that include a mouse, digitizer, laser printer, and
plotter.
This statement of scope is preliminary—it is not bounded. Every sentence would
have to be expanded to provide concrete detail and quantitative bounding. For
example, before estimation can begin, the planner must determine what “character-
istics of good human/machine interface design” means or what the size and
sophistication of the “CAD database” are to be.
For our purposes, assume that further refinement has occurred and that the major
software functions listed in Figure 26.2 are identified. Following the decomposition
technique for LOC, an estimation table (Figure 26.2) is developed. A range of LOC
estimates is developed for each function. For example, the range of LOC estimates
for the 3D geometric analysis function is optimistic, 4600 LOC; most likely, 6900 LOC;
and pessimistic, 8600 LOC. Applying Equation 26.1, the expected value for the 3D
geometric analysis function is 6800 LOC. Other estimates are derived in a similar
CHAPTER 26
ESTIMATION FOR SOFTWARE PROJECTS

Many modern applica-
tions reside on a
network or are part of
a client-server architec-
ture. Therefore, be
sure that your
estimates include the
effort required to
develop “infrastruc-
ture” software.
Function
User interface and control facilities (UICF)
Two-dimensional geometric analysis (2DGA)
Three-dimensional geometric analysis (3DGA)
Database management (DBM)
Computer graphics display facilities (CGDF)
Peripheral control function (PCF)
Design analysis modules (DAM)
Estimated lines of code
Estimated LOC
2,300
5,300
6,800
3,350
4,950
2,100
8,400
33,200
FIGURE 26.2
Estimation
table for the
LOC methods

fashion. By summing vertically in the estimated LOC column, an estimate of 33,200
lines of code is established for the CAD system.
A review of historical data indicates that the organizational average productivity
for systems of this type is 620 LOC/pm. Based on a burdened labor rate of $8000 per
month, the cost per line of code is approximately $13. Based on the LOC estimate
and the historical productivity data, the total estimated project cost is $431,000 and
the estimated effort is 54 person-months.7

PART FOUR
MANAGING SOFTWARE PROJECTS

Estimates are rounded to the nearest $1000 and person-month. Further precision is unnecessary
and unrealistic, given the limitations of estimation accuracy.
Estimating
The scene: Doug Miller’s office as
project planning begins.
The players: Doug Miller (manager of the SafeHome
software engineering team) and Vinod Raman, Jamie
Lazar, and other members of the product software
engineering team.
The conversation:
Doug: We need to develop an effort estimate for the
project and then we’ve got to define a micro schedule for
the first increment and a macro schedule for the
remaining increments.
Vinod (nodding): Okay, but we haven’t defined any
increments yet.
Doug: True, but that’s why we need to estimate.
Jamie (frowning): You want to know how long it’s
going to take us?
Doug: Here’s what I need. First, we need to functionally
decompose the SafeHome software … at a high level …
then we’ve got to estimate the number of lines of code
that each function will take . . . then . . .
Jamie: Whoa! How are we supposed to do that?
Vinod: I’ve done it on past projects. You begin with use
cases, determine the functionality required to implement
each, guesstimate the LOC count for each piece of the
function. The best approach is to have everyone do it
independently and then compare results.
Doug: Or you can do a functional decomposition for the
entire project.
Jamie: But that’ll take forever and we’ve got to get
started.
Vinod: No . . . it can be done in a few hours . . . this
morning, in fact.
Doug: I agree . . . we can’t expect exactitude, just a
ballpark idea of what the size of SafeHome will be.
Jamie: I think we should just estimate effort . . . that’s
all.
Doug: We’ll do that too. Then use both estimates as a
cross-check.
Vinod: Let’s go do it . . .
SAFEHOME
26.6.4
An Example of FP-Based Estimation
Decomposition for FP-based estimation focuses on information domain values
rather than software functions. Referring to the table presented in Figure 26.3, you
would estimate inputs, outputs, inquiries, files, and external interfaces for the CAD
software. An FP value is computed using the technique discussed in Chapter 23. For
the purposes of this estimate, the complexity weighting factor is assumed to be
average. Figure 26.3 presents the results of this estimate.
Do not succumb to the
temptation to use this
result as your project
estimate. You should
derive another result
using a different
approach.

Each of the complexity weighting factors is estimated, and the value adjustment
factor is computed as described in Chapter 23:
Factor
Value
Backup and recovery

Data communications

Distributed processing

Performance critical

Existing operating environment

Online data entry

Input transaction over multiple screens

Master files updated online

Information domain values complex

Internal processing complex

Code designed for reuse

Conversion/installation in design

Multiple installations

Application designed for change

Value adjustment factor
1.17
Finally, the estimated number of FP is derived:
FPestimated  count total  [0.65  0.01  (Fi)]  375
The organizational average productivity for systems of this type is 6.5 FP/pm. Based
on a burdened labor rate of $8000 per month, the cost per FP is approximately $1230.
Based on the FP estimate and the historical productivity data, the total estimated
project cost is $461,000 and the estimated effort is 58 person-months.
26.6.5
Process-Based Estimation
The most common technique for estimating a project is to base the estimate on the
process that will be used. That is, the process is decomposed into a relatively small
set of tasks and the effort required to accomplish each task is estimated.
CHAPTER 26
ESTIMATION FOR SOFTWARE PROJECTS

Information domain value
Number of external inputs
Number of external outputs
Number of external inquiries
Number of internal logical files
Number of external interface files
Count total
FP 
count

Opt.

Likely

Pess.

Est.
count

Weight

FIGURE 26.3
Estimating
information
domain values

Like the problem-based techniques, process-based estimation begins with a
delineation of software functions obtained from the project scope. A series of frame-
work activities must be performed for each function. Functions and related frame-
work activities8 may be represented as part of a table similar to the one presented in
Figure 26.4.
Once problem functions and process activities are melded, you estimate the effort
(e.g., person-months) that will be required to accomplish each software process
activity for each software function. These data constitute the central matrix of the
table in Figure 26.4. Average labor rates (i.e., cost/unit effort) are then applied to the
effort estimated for each process activity. It is very likely the labor rate will vary for
each task. Senior staff are heavily involved in early framework activities and are gen-
erally more expensive than junior staff involved in construction and release.
Costs and effort for each function and framework activity are computed as the last
step. If process-based estimation is performed independently of LOC or FP estima-
tion, we now have two or three estimates for cost and effort that may be compared
and reconciled. If both sets of estimates show reasonable agreement, there is good
reason to believe that the estimates are reliable. If, on the other hand, the results
of these decomposition techniques show little agreement, further investigation and
analysis must be conducted.
26.6.6
An Example of Process-Based Estimation
To illustrate the use of process-based estimation, consider the CAD software intro-
duced in Section 26.6.3. The system configuration and all software functions remain
unchanged and are indicated by project scope.

PART FOUR
MANAGING SOFTWARE PROJECTS

The framework activities chosen for this project differ somewhat from the generic activities dis-
cussed in Chapter 2. They are: customer communication (CC), planning, risk analysis, engineering,
and construction/release.
Activity
Task
Function
UICF
2DGA
3DGA
DBM
PCF
CGDF
DAM
Totals
% effort
CC
Planning
Risk
analysis
Engineering
Construction
release
Totals
CE
Analysis
Design
Code
Test
0.25
0.25
0.25
3.50
20.50
4.50
16.50
46.00
1%
1%
1%
8%
45%
10%
36%
CC = customer communication   CE = customer evaluation
0.50
0.75
0.50
0.50
0.50
0.25
2.50
4.00
4.00
3.00
3.00
2.00
0.40
0.60
1.00
1.00
0.75
0.50
5.00
2.00
3.00
1.50
1.50
1.50
8.40
7.35
8.50
6.00
5.75
4.25
0.50
2.00
0.50
2.00
5.00
n/a
n/a
n/a
n/a
n/a
n/a
n/a
FIGURE 26.4
Process-based
estimation
table
If time permits, use
finer granularity when
specifying tasks in
Figure 26.4. For
example, break
analysis into its major
tasks and estimate
each separately.

Referring to the completed process-based table shown in Figure 26.4, estimates
of effort (in person-months) for each software engineering activity are provided for
each CAD software function (abbreviated for brevity). The engineering and con-
struction release activities are subdivided into the major software engineering tasks
shown. Gross estimates of effort are provided for customer communication, plan-
ning, and risk analysis. These are noted in the total row at the bottom of the table.
Horizontal and vertical totals provide an indication of estimated effort required for
analysis, design, code, and test. It should be noted that 53 percent of all effort is ex-
pended on front-end engineering tasks (requirements analysis and design), indicat-
ing the relative importance of this work.
Based on an average burdened labor rate of $8000 per month, the total estimated
project cost is $368,000 and the estimated effort is 46 person-months. If desired,
labor rates could be associated with each framework activity or software engineer-
ing task and computed separately.
26.6.7
Estimation with Use Cases
As I have noted throughout Part 2 of this book, use cases provide a software team
with insight into software scope and requirements. However, developing an estima-
tion approach with use cases is problematic for the following reasons [Smi99]:
• Use cases are described using many different formats and styles—there is no
standard form.
• Use cases represent an external view (the user’s view) of the software and
can therefore be written at many different levels of abstraction.
• Use cases do not address the complexity of the functions and features that
are described.
• Use cases can describe complex behavior (e.g., interactions) that involve
many functions and features.
Unlike an LOC or a function point, one person’s “use case” may require months of
effort while another person’s use case may be implemented in a day or two.
Although a number of investigators have considered use cases as an estimation
input, no proven estimation method has emerged to date.9 Smith [Smi99] suggests
that use cases can be used for estimation, but only if they are considered within the
context of the “structural hierarchy” that they are used to describe.
Smith argues that any level of this structural hierarchy can be described by no
more than 10 use cases. Each of these use cases would encompass no more than 30
distinct scenarios. Obviously, use cases that describe a large system are written at a
much higher level of abstraction (and represent considerably more development
effort) than use cases that are written to describe a single subsystem. Therefore,
CHAPTER 26
ESTIMATION FOR SOFTWARE PROJECTS

uote:
“It’s best to
understand the
background of an
estimate before
you use it.”
Barry Boehm
and Richard
Fairley
Why is it
difficult to
develop an
estimation
technique using
use cases?
?

Recent work in the derivation of use-case points [Cle06] may ultimately lead to a workable
estimation approach using use cases.

before use cases can be used for estimation, the level within the structural hierarchy
is established, the average length (in pages) of each use case is determined, the type
of software (e.g., real-time, business, engineering/scientific, WebApp, embedded) is
defined, and a rough architecture for the system is considered. Once these charac-
teristics are established, empirical data may be used to establish the estimated num-
ber of LOC or FP per use case (for each level of the hierarchy). Historical data are then
used to compute the effort required to develop the system.
To illustrate how this computation might be made, consider the following
relationship:10
LOC estimate  N  LOCavg  [(Sa/Sh – 1)  (Pa/Ph  1)]  LOCadjust
(26.2)
where
N
 actual number of use cases
LOCavg
 historical average LOC per use case for this type of subsystem
LOCadjust
 represents an adjustment based on n percent of LOCavg where n
is defined locally and represents the difference between this
project and “average” projects
Sa
 actual scenarios per use case
Sh
 average scenarios per use case for this type of subsystem
Pa
 actual pages per use case
Ph
 average pages per use case for this type of subsystem
Expression (26.2) could be used to develop a rough estimate of the number of LOC
based on the actual number of use cases adjusted by the number of scenarios and
the page length of the use cases. The adjustment represents up to n percent of the
historical average LOC per use case.
26.6.8
An Example of Use-Case–Based Estimation
The CAD software introduced in Section 26.6.3 is composed of three subsystem
groups: user interface subsystem (includes UICF), engineering subsystem group
(includes the 2DGA, 3DGA, and DAM subsystems), and infrastructure subsystem
group (includes CGDF and PCF subsystems). Six use cases describe the user interface
subsystem. Each use case is described by no more than 10 scenarios and has an
average length of six pages. The engineering subsystem group is described by 10 use
cases (these are considered to be at a higher level of the structural hierarchy). Each
of these use cases has no more than 20 scenarios associated with it and has an
average length of eight pages. Finally, the infrastructure subsystem group is described
by five use cases with an average of only six scenarios and an average length of
five pages.

PART FOUR
MANAGING SOFTWARE PROJECTS
10 It is important to note that Expression (26.2) is used for illustrative purposes only. Like all estima-
tion models, it must be validated locally before it can be used with confidence.

Using the relationship noted in Expression (26.2) with n  30 percent, the table
shown in Figure 26.5 is developed. Considering the first row of the table, historical
data indicate that UI software requires an average of 800 LOC per use case when the
use case has no more than 12 scenarios and is described in less than five pages.
These data conform reasonably well for the CAD system. Hence the LOC estimate for
the user interface subsystem is computed using expression (26.2). Using the same
approach, estimates are made for both the engineering and infrastructure subsystem
groups. Figure 26.5 summarizes the estimates and indicates that the overall size of
the CAD is estimated at 42,500 LOC.
Using 620 LOC/pm as the average productivity for systems of this type and
a burdened labor rate of $8000 per month, the cost per line of code is approxi-
mately $13. Based on the use-case estimate and the historical productivity data, the
total estimated project cost is $552,000 and the estimated effort is 68 person-
months.
26.6.9
Reconciling Estimates
The estimation techniques discussed in the preceding sections result in multiple
estimates that must be reconciled to produce a single estimate of effort, project
duration, or cost. To illustrate this reconciliation procedure, I again consider the CAD
software introduced in Section 26.6.3.
The total estimated effort for the CAD software ranges from a low of 46 person-
months (derived using a process-based estimation approach) to a high of 68 person-
months (derived with use-case estimation). The average estimate (using all four
approaches) is 56 person-months. The variation from the average estimate is approxi-
mately 18 percent on the low side and 21 percent on the high side.
What happens when agreement between estimates is poor? The answer to this
question requires a reevaluation of information used to make the estimates. Widely
divergent estimates can often be traced to one of two causes: (1) the scope of the
project is not adequately understood or has been misinterpreted by the planner, or
(2) productivity data used for problem-based estimation techniques is inappropriate
for the application, obsolete (in that it no longer accurately reflects the software
engineering organization), or has been misapplied. You should determine the cause
of divergence and then reconcile the estimates.
CHAPTER 26
ESTIMATION FOR SOFTWARE PROJECTS

User interface subsystem
Engineering subsystem group
Infrastructure subsystem group
Total LOC estimate
use cases

scenarios

scenarios

pages

pages

LOC

LOC estimate
3,366
31,233
7,970
42,568
FIGURE 26.5
Use-case
estimation
uote:
“Complicated
methods might not
yield a more
accurate estimate,
particularly when
developers can
incorporate their
own intuition into
the estimate.”
Philip Johnson
et al.

26.7
EMPIRICAL ESTIMATION MODELS
An estimation model for computer software uses empirically derived formulas to
predict effort as a function of LOC or FP.11 Values for LOC or FP are estimated using
the approach described in Sections 26.6.3 and 26.6.4. But instead of using the tables
described in those sections, the resultant values for LOC or FP are plugged into the
estimation model.
The empirical data that support most estimation models are derived from a lim-
ited sample of projects. For this reason, no estimation model is appropriate for all
classes of software and in all development environments. Therefore, you should use
the results obtained from such models judiciously.
An estimation model should be calibrated to reflect local conditions. The model
should be tested by applying data collected from completed projects, plugging the
data into the model, and then comparing actual to predicted results. If agreement is
poor, the model must be tuned and retested before it can be used.

PART FOUR
MANAGING SOFTWARE PROJECTS
Automated Estimation Techniques for Software Projects
INFO
Automated estimation tools allow the planner
to estimate cost and effort and to perform
what-if analyses for important project variables
such as delivery date or staffing. Although many
automated estimation tools exist (see sidebar later in this
chapter), all exhibit the same general characteristics and
all perform the following six generic functions [Jon96]:
1.
Sizing of project deliverables. The “size” of one or
more software work products is estimated. Work
products include the external representation of
software (e.g., screen, reports), the software itself
(e.g., KLOC), functionality delivered (e.g., function
points), and descriptive information (e.g., documents).
2.
Selecting project activities. The appropriate process
framework is selected, and the software engineering
task set is specified.
3.
Predicting staffing levels. The number of people who
will be available to do the work is specified. Because
the relationship between people available and work
(predicted effort) is highly nonlinear, this is an
important input.
4.
Predicting software effort. Estimation tools use one
or more models (Section 26.7) that relate the size of
the project deliverables to the effort required to
produce them.
5.
Predicting software cost. Given the results of step 4,
costs can be computed by allocating labor rates to
the project activities noted in step 2.
6.
Predicting software schedules. When effort, staffing
level, and project activities are known, a draft
schedule can be produced by allocating labor across
software engineering activities based on
recommended models for effort distribution
discussed later in this chapter.
When different estimation tools are applied to the same
project data, a relatively large variation in estimated
results can be encountered. More important, predicted
values sometimes are significantly different than actual
values. This reinforces the notion that the output of
estimation tools should be used as one “data point” from
which estimates are derived—not as the only source for
an estimate.
11 An empirical model using use cases as the independent variable is suggested in Section 26.6.6.
However, relatively few have appeared in the literature to date.
An estimation model
reflects the population
of projects from which
it has been derived.
Therefore, the model is
domain sensitive.

26.7.1
The Structure of Estimation Models
A typical estimation model is derived using regression analysis on data collected from
past software projects. The overall structure of such models takes the form [Mat94]
E  A  B  (ev)C
(26.3)
where A, B, and C are empirically derived constants, E is effort in person-months, and
ev is the estimation variable (either LOC or FP). In addition to the relationship noted
in Equation (26.3), the majority of estimation models have some form of project ad-
justment component that enables E to be adjusted by other project characteristics
(e.g., problem complexity, staff experience, development environment). Among the
many LOC-oriented estimation models proposed in the literature are
E  5.2  (KLOC)0.91
Walston-Felix model
E  5.5  0.73  (KLOC)1.16
Bailey-Basili model
E  3.2  (KLOC)1.05
Boehm simple model
E  5.288  (KLOC)1.047
Doty model for KLOC  9
FP-oriented models have also been proposed. These include
E  91.4  0.355 FP
Albrecht and Gaffney model
E  37  0.96 FP
Kemerer model
E  12.88  0.405 FP
Small project regression model
A quick examination of these models indicates that each will yield a different result
for the same values of LOC or FP. The implication is clear. Estimation models must
be calibrated for local needs!
26.7.2
The COCOMO II Model
In his classic book on “software engineering economics,” Barry Boehm [Boe81]
introduced a hierarchy of software estimation models bearing the name COCOMO, for
COnstructive COst MOdel. The original COCOMO model became one of the most widely
used and discussed software cost estimation models in the industry. It has evolved into
a more comprehensive estimation model, called COCOMO II [Boe00]. Like its predeces-
sor, COCOMO II is actually a hierarchy of estimation models that address the following
areas:
• Application composition model. Used during the early stages of software engi-
neering, when prototyping of user interfaces, consideration of software and
system interaction, assessment of performance, and evaluation of technology
maturity are paramount.
• Early design stage model. Used once requirements have been stabilized and
basic software architecture has been established.
• Post-architecture-stage model. Used during the construction of the software.
Like all estimation models for software, the COCOMO II models require sizing
information. Three different sizing options are available as part of the model
hierarchy: object points, function points, and lines of source code.
CHAPTER 26
ESTIMATION FOR SOFTWARE PROJECTS

None of these models
should be used without
careful calibration to
your environment.
WebRef
Detailed information on
COCOMO II, including
downloadable software,
can be obtained at 
sunset.usc.edu/
research/
COCOMOII/
cocomo_main.html.

The COCOMO II application composition model uses object points and is illus-
trated in the following paragraphs. It should be noted that other, more sophisticated
estimation models (using FP and KLOC) are also available as part of COCOMO II.
Like function points, the object point is an indirect software measure that is com-
puted using counts of the number of (1) screens (at the user interface), (2) reports,
and (3) components likely to be required to build the application. Each object in-
stance (e.g., a screen or report) is classified into one of three complexity levels (i.e.,
simple, medium, or difficult) using criteria suggested by Boehm [Boe96]. In essence,
complexity is a function of the number and source of the client and server data tables
that are required to generate the screen or report and the number of views or sec-
tions presented as part of the screen or report.
Once complexity is determined, the number of screens, reports, and components
are weighted according to the table illustrated in Figure 26.6. The object point count
is then determined by multiplying the original number of object instances by the
weighting factor in the figure and summing to obtain a total object point count.
When component-based development or general software reuse is to be applied,
the percent of reuse (%reuse) is estimated and the object point count is adjusted:
NOP  (object points)  [(100  %reuse)/100]
where NOP is defined as new object points.
To derive an estimate of effort based on the computed NOP value, a “productivity
rate” must be derived. Figure 26.7 presents the productivity rate
PROD 
for different levels of developer experience and development environment maturity.
Once the productivity rate has been determined, an estimate of project effort is
computed using
Estimated effort 
In more advanced COCOMO II models,12 a variety of scale factors, cost drivers,
and adjustment procedures are required. A complete discussion of these is beyond
NOP
PROD
NOP
person-month

PART FOUR
MANAGING SOFTWARE PROJECTS
Object type
Screen
Report
3GL component
Complexity weight
Simple
Medium
Difficult

FIGURE 26.6
Complexity
weighting for
object types.
Source: [Boe96].
What is an
object point?
?
12 As noted earlier, these models use FP and KLOC counts for the size variable.

the scope of this book. If you have further interest, see [Boe00] or visit the COCOMO II
website.
26.7.3
The Software Equation
The software equation [Put92] is a dynamic multivariable model that assumes a spe-
cific distribution of effort over the life of a software development project. The model
has been derived from productivity data collected for over 4000 contemporary soft-
ware projects. Based on these data, we derive an estimation model of the form
E 

(26.4)
where
E  effort in person-months or person-years
t  project duration in months or years
B  “special skills factor”13
P  “productivity parameter” that reflects: overall process maturity and man-
agement practices, the extent to which good software engineering practices
are used, the level of programming languages used, the state of the soft-
ware environment, the skills and experience of the software team, and the
complexity of the application
Typical values might be P  2000 for development of real-time embedded software,
P  10,000 for telecommunication and systems software, and P  28,000 for business
systems applications. The productivity parameter can be derived for local conditions
using historical data collected from past development efforts.
You should note that the software equation has two independent parameters:
(1) an estimate of size (in LOC) and (2) an indication of project duration in calendar
months or years.

t4
LOC  B0.333
P3
CHAPTER 26
ESTIMATION FOR SOFTWARE PROJECTS

Developer's experience/capability
Environment maturity/capability
PROD
Very
low
Very
low

Low
Low

Nominal
Nominal

High
High

Very
high
Very
high

FIGURE 26.7
Productivity rate for object points.
Source: [Boe96].
13 B increases slowly as “the need for integration, testing, quality assurance, documentation, and
management skills grows” [Put92]. For small programs (KLOC  5 to 15), B  0.16. For programs
greater than 70 KLOC, B  0.39.
WebRef
Information on
software cost
estimation tools that
have evolved from
the software equation
can be found at 
www.qsm.com.

To simplify the estimation process and use a more common form for their
estimation model, Putnam and Myers [Put92] suggest a set of equations derived from
the software equation. Minimum development time is defined as
tmin  8.14 
in months for tmin  6 months
(26.5a)
E  180 Bt3 in person-months for E  20 person-months
(26.5b)
Note that t in Equation (26.5b) is represented in years.
Using Equation (26.5) with P  12,000 (the recommended value for scientific
software) for the CAD software discussed earlier in this chapter,
tmin  8.14 
 12.6 calendar months
E  180  0.28  (1.05)3  58 person-months
The results of the software equation correspond favorably with the estimates devel-
oped in Section 26.6. Like the COCOMO model noted in Section 26.7.2, the software
equation continues to evolve. Further discussion of an extended version of this
estimation approach can be found in [Put97b].
26.8
ESTIMATION FOR OBJECT-ORIENTED PROJECTS
It is worthwhile to supplement conventional software cost estimation methods with a
technique that has been designed explicitly for OO software. Lorenz and Kidd [Lor94]
suggest the following approach:
1.
Develop estimates using effort decomposition, FP analysis, and any other
method that is applicable for conventional applications.
2.
Using the requirements model (Chapter 6), develop use cases and determine
a count. Recognize that the number of use cases may change as the project
progresses.
3.
From the requirements model, determine the number of key classes (called
analysis classes in Chapter 6).
4.
Categorize the type of interface for the application and develop a multiplier
for support classes:
Interface Type
Multiplier
No GUI
2.0
Text-based user interface
2.25
GUI
2.5
Complex GUI
3.0
Multiply the number of key classes (step 3) by the multiplier to obtain an
estimate for the number of support classes.
33,200
12,0000.43
LOC
p0.43

PART FOUR
MANAGING SOFTWARE PROJECTS

---
