# BCS515B — Textbook Notes

**Subject:** BCS515B (Cloud Computing and DevOps)
**Content type:** textbook_notes
**Source:** textbook_notes.md

---

# BCS515B — Textbook Notes (Module-wise)
**Subject:** Cloud Computing and DevOps
**Generated:** 2026-10-02

---

## Module 1 Textbook

INTRODUCTION
In which we try to explain why we consider artiﬁcial intelligence to be a subject
most worthy of study, and in which we try to decide what exactly it is, this being a
good thing to decide before embarking.
We call ourselves Homo sapiens—man the wise—because our intelligence is so important
INTELLIGENCE
to us. For thousands of years, we have tried to understand how we think; that is, how a mere
handful of matter can perceive, understand, predict, and manipulate a world far larger and
more complicated than itself. The ﬁeld of artiﬁcial intelligence, or AI, goes further still: it
ARTIFICIAL
INTELLIGENCE
attempts not just to understand but also to build intelligent entities.
AI is one of the newest ﬁelds in science and engineering. Work started in earnest soon
after World War II, and the name itself was coined in 1956. Along with molecular biology,
AI is regularly cited as the “ﬁeld I would most like to be in” by scientists in other disciplines.
A student in physics might reasonably feel that all the good ideas have already been taken by
Galileo, Newton, Einstein, and the rest. AI, on the other hand, still has openings for several
full-time Einsteins and Edisons.
AI currently encompasses a huge variety of subﬁelds, ranging from the general (learning
and perception) to the speciﬁc, such as playing chess, proving mathematical theorems, writing
poetry, driving a car on a crowded street, and diagnosing diseases. AI is relevant to any
intellectual task; it is truly a universal ﬁeld.
1.1
WHAT IS AI?
We have claimed that AI is exciting, but we have not said what it is. In Figure 1.1 we see
eight deﬁnitions of AI, laid out along two dimensions. The deﬁnitions on top are concerned
with thought processes and reasoning, whereas the ones on the bottom address behavior. The
deﬁnitions on the left measure success in terms of ﬁdelity to human performance, whereas
the ones on the right measure against an ideal performance measure, called rationality. A
RATIONALITY
system is rational if it does the “right thing,” given what it knows.
Historically, all four approaches to AI have been followed, each by different people
with different methods. A human-centered approach must be in part an empirical science, in-

MODULE 1

Chapter
1.
Introduction
Thinking Humanly
Thinking Rationally
“The exciting new effort to make comput-
ers think . . . machines with minds, in the
full and literal sense.” (Haugeland, 1985)
“The study of mental faculties through the
use of computational models.”
(Charniak and McDermott, 1985)
“[The automation of] activities that we
associate with human thinking, activities
such as decision-making, problem solv-
ing, learning . . .” (Bellman, 1978)
“The study of the computations that make
it possible to perceive, reason, and act.”
(Winston, 1992)
Acting Humanly
Acting Rationally
“The art of creating machines that per-
form functions that require intelligence
when performed by people.” (Kurzweil,
1990)
“Computational Intelligence is the study
of the design of intelligent agents.” (Poole
et al., 1998)
“The study of how to make computers do
things at which, at the moment, people are
better.” (Rich and Knight, 1991)
“AI . . . is concerned with intelligent be-
havior in artifacts.” (Nilsson, 1998)
Figure 1.1
Some deﬁnitions of artiﬁcial intelligence, organized into four categories.
volving observations and hypotheses about human behavior. A rationalist1 approach involves
a combination of mathematics and engineering. The various group have both disparaged and
helped each other. Let us look at the four approaches in more detail.
1.1.1
Acting humanly: The Turing Test approach
The Turing Test, proposed by Alan Turing (1950), was designed to provide a satisfactory
TURING TEST
operational deﬁnition of intelligence. A computer passes the test if a human interrogator, after
posing some written questions, cannot tell whether the written responses come from a person
or from a computer. Chapter 26 discusses the details of the test and whether a computer would
really be intelligent if it passed. For now, we note that programming a computer to pass a
rigorously applied test provides plenty to work on. The computer would need to possess the
following capabilities:
• natural language processing to enable it to communicate successfully in English;
NATURAL LANGUAGE
PROCESSING
• knowledge representation to store what it knows or hears;
KNOWLEDGE
REPRESENTATION
• automated reasoning to use the stored information to answer questions and to draw
AUTOMATED
REASONING
new conclusions;
• machine learning to adapt to new circumstances and to detect and extrapolate patterns.
MACHINE LEARNING
1 By distinguishing between human and rational behavior, we are not suggesting that humans are necessarily
“irrational” in the sense of “emotionally unstable” or “insane.” One merely need note that we are not perfect:
not all chess players are grandmasters; and, unfortunately, not everyone gets an A on the exam. Some systematic
errors in human reasoning are cataloged by Kahneman et al. (1982).

Section 1.1.
What Is AI?

Turing’s test deliberately avoided direct physical interaction between the interrogator and the
computer, because physical simulation of a person is unnecessary for intelligence. However,
the so-called total Turing Test includes a video signal so that the interrogator can test the
TOTAL TURING TEST
subject’s perceptual abilities, as well as the opportunity for the interrogator to pass physical
objects “through the hatch.” To pass the total Turing Test, the computer will need
• computer vision to perceive objects, and
COMPUTER VISION
• robotics to manipulate objects and move about.
ROBOTICS
These six disciplines compose most of AI, and Turing deserves credit for designing a test
that remains relevant 60 years later. Yet AI researchers have devoted little effort to passing
the Turing Test, believing that it is more important to study the underlying principles of in-
telligence than to duplicate an exemplar. The quest for “artiﬁcial ﬂight” succeeded when the
Wright brothers and others stopped imitating birds and started using wind tunnels and learn-
ing about aerodynamics. Aeronautical engineering texts do not deﬁne the goal of their ﬁeld
as making “machines that ﬂy so exactly like pigeons that they can fool even other pigeons.”
1.1.2
Thinking humanly: The cognitive modeling approach
If we are going to say that a given program thinks like a human, we must have some way of
determining how humans think. We need to get inside the actual workings of human minds.
There are three ways to do this: through introspection—trying to catch our own thoughts as
they go by; through psychological experiments—observing a person in action; and through
brain imaging—observing the brain in action. Once we have a sufﬁciently precise theory of
the mind, it becomes possible to express the theory as a computer program. If the program’s
input–output behavior matches corresponding human behavior, that is evidence that some of
the program’s mechanisms could also be operating in humans. For example, Allen Newell
and Herbert Simon, who developed GPS, the “General Problem Solver” (Newell and Simon,
1961), were not content merely to have their program solve problems correctly. They were
more concerned with comparing the trace of its reasoning steps to traces of human subjects
solving the same problems. The interdisciplinary ﬁeld of cognitive science brings together
COGNITIVE SCIENCE
computer models from AI and experimental techniques from psychology to construct precise
and testable theories of the human mind.
Cognitive science is a fascinating ﬁeld in itself, worthy of several textbooks and at least
one encyclopedia (Wilson and Keil, 1999). We will occasionally comment on similarities or
differences between AI techniques and human cognition. Real cognitive science, however, is
necessarily based on experimental investigation of actual humans or animals. We will leave
that for other books, as we assume the reader has only a computer for experimentation.
In the early days of AI there was often confusion between the approaches: an author
would argue that an algorithm performs well on a task and that it is therefore a good model
of human performance, or vice versa. Modern authors separate the two kinds of claims;
this distinction has allowed both AI and cognitive science to develop more rapidly. The two
ﬁelds continue to fertilize each other, most notably in computer vision, which incorporates
neurophysiological evidence into computational models.

Chapter
1.
Introduction
1.1.3
Thinking rationally: The “laws of thought” approach
The Greek philosopher Aristotle was one of the ﬁrst to attempt to codify “right thinking,” that
is, irrefutable reasoning processes. His syllogisms provided patterns for argument structures
SYLLOGISM
that always yielded correct conclusions when given correct premises—for example, “Socrates
is a man; all men are mortal; therefore, Socrates is mortal.” These laws of thought were
supposed to govern the operation of the mind; their study initiated the ﬁeld called logic.
LOGIC
Logicians in the 19th century developed a precise notation for statements about all kinds
of objects in the world and the relations among them. (Contrast this with ordinary arithmetic
notation, which provides only for statements about numbers.) By 1965, programs existed
that could, in principle, solve any solvable problem described in logical notation. (Although
if no solution exists, the program might loop forever.) The so-called logicist tradition within
LOGICIST
artiﬁcial intelligence hopes to build on such programs to create intelligent systems.
There are two main obstacles to this approach. First, it is not easy to take informal
knowledge and state it in the formal terms required by logical notation, particularly when
the knowledge is less than 100% certain. Second, there is a big difference between solving
a problem “in principle” and solving it in practice. Even problems with just a few hundred
facts can exhaust the computational resources of any computer unless it has some guidance
as to which reasoning steps to try ﬁrst. Although both of these obstacles apply to any attempt
to build computational reasoning systems, they appeared ﬁrst in the logicist tradition.
1.1.4
Acting rationally: The rational agent approach
An agent is just something that acts (agent comes from the Latin agere, to do). Of course,
AGENT
all computer programs do something, but computer agents are expected to do more: operate
autonomously, perceive their environment, persist over a prolonged time period, adapt to
change, and create and pursue goals. A rational agent is one that acts so as to achieve the
RATIONAL AGENT
best outcome or, when there is uncertainty, the best expected outcome.
In the “laws of thought” approach to AI, the emphasis was on correct inferences. Mak-
ing correct inferences is sometimes part of being a rational agent, because one way to act
rationally is to reason logically to the conclusion that a given action will achieve one’s goals
and then to act on that conclusion. On the other hand, correct inference is not all of ration-
ality; in some situations, there is no provably correct thing to do, but something must still be
done. There are also ways of acting rationally that cannot be said to involve inference. For
example, recoiling from a hot stove is a reﬂex action that is usually more successful than a
slower action taken after careful deliberation.
All the skills needed for the Turing Test also allow an agent to act rationally. Knowledge
representation and reasoning enable agents to reach good decisions. We need to be able to
generate comprehensible sentences in natural language to get by in a complex society. We
need learning not only for erudition, but also because it improves our ability to generate
effective behavior.
The rational-agent approach has two advantages over the other approaches. First, it
is more general than the “laws of thought” approach because correct inference is just one
of several possible mechanisms for achieving rationality. Second, it is more amenable to

Section 1.2.
The Foundations of Artiﬁcial Intelligence

scientiﬁc development than are approaches based on human behavior or human thought. The
standard of rationality is mathematically well deﬁned and completely general, and can be
“unpacked” to generate agent designs that provably achieve it. Human behavior, on the other
hand, is well adapted for one speciﬁc environment and is deﬁned by, well, the sum total
of all the things that humans do. This book therefore concentrates on general principles
of rational agents and on components for constructing them. We will see that despite the
apparent simplicity with which the problem can be stated, an enormous variety of issues
come up when we try to solve it. Chapter 2 outlines some of these issues in more detail.
One important point to keep in mind: We will see before too long that achieving perfect
rationality—always doing the right thing—is not feasible in complicated environments. The
computational demands are just too high. For most of the book, however, we will adopt the
working hypothesis that perfect rationality is a good starting point for analysis. It simpliﬁes
the problem and provides the appropriate setting for most of the foundational material in
the ﬁeld. Chapters 5 and 17 deal explicitly with the issue of limited rationality—acting
LIMITED
RATIONALITY
appropriately when there is not enough time to do all the computations one might like.
1.2
THE FOUNDATIONS OF ARTIFICIAL INTELLIGENCE
In this section, we provide a brief history of the disciplines that contributed ideas, viewpoints,
and techniques to AI. Like any history, this one is forced to concentrate on a small number
of people, events, and ideas and to ignore others that also were important. We organize the
history around a series of questions. We certainly would not wish to give the impression that
these questions are the only ones the disciplines address or that the disciplines have all been
working toward AI as their ultimate fruition.
1.2.1
Philosophy
• Can formal rules be used to draw valid conclusions?
• How does the mind arise from a physical brain?
• Where does knowledge come from?
• How does knowledge lead to action?
Aristotle (384–322 B.C.), whose bust appears on the front cover of this book, was the ﬁrst
to formulate a precise set of laws governing the rational part of the mind. He developed an
informal system of syllogisms for proper reasoning, which in principle allowed one to gener-
ate conclusions mechanically, given initial premises. Much later, Ramon Lull (d. 1315) had
the idea that useful reasoning could actually be carried out by a mechanical artifact. Thomas
Hobbes (1588–1679) proposed that reasoning was like numerical computation, that “we add
and subtract in our silent thoughts.” The automation of computation itself was already well
under way. Around 1500, Leonardo da Vinci (1452–1519) designed but did not build a me-
chanical calculator; recent reconstructions have shown the design to be functional. The ﬁrst
known calculating machine was constructed around 1623 by the German scientist Wilhelm
Schickard (1592–1635), although the Pascaline, built in 1642 by Blaise Pascal (1623–1662),

Chapter
1.
Introduction
is more famous. Pascal wrote that “the arithmetical machine produces effects which appear
nearer to thought than all the actions of animals.” Gottfried Wilhelm Leibniz (1646–1716)
built a mechanical device intended to carry out operations on concepts rather than numbers,
but its scope was rather limited. Leibniz did surpass Pascal by building a calculator that
could add, subtract, multiply, and take roots, whereas the Pascaline could only add and sub-
tract. Some speculated that machines might not just do calculations but actually be able to
think and act on their own. In his 1651 book Leviathan, Thomas Hobbes suggested the idea
of an “artiﬁcial animal,” arguing “For what is the heart but a spring; and the nerves, but so
many strings; and the joints, but so many wheels.”
It’s one thing to say that the mind operates, at least in part, according to logical rules, and
to build physical systems that emulate some of those rules; it’s another to say that the mind
itself is such a physical system. Ren´e Descartes (1596–1650) gave the ﬁrst clear discussion
of the distinction between mind and matter and of the problems that arise. One problem with
a purely physical conception of the mind is that it seems to leave little room for free will:
if the mind is governed entirely by physical laws, then it has no more free will than a rock
“deciding” to fall toward the center of the earth. Descartes was a strong advocate of the power
of reasoning in understanding the world, a philosophy now called rationalism, and one that
RATIONALISM
counts Aristotle and Leibnitz as members. But Descartes was also a proponent of dualism.
DUALISM
He held that there is a part of the human mind (or soul or spirit) that is outside of nature,
exempt from physical laws. Animals, on the other hand, did not possess this dual quality;
they could be treated as machines. An alternative to dualism is materialism, which holds
MATERIALISM
that the brain’s operation according to the laws of physics constitutes the mind. Free will is
simply the way that the perception of available choices appears to the choosing entity.
Given a physical mind that manipulates knowledge, the next problem is to establish
the source of knowledge. The empiricism movement, starting with Francis Bacon’s (1561–
EMPIRICISM
1626) Novum Organum,2 is characterized by a dictum of John Locke (1632–1704): “Nothing
is in the understanding, which was not ﬁrst in the senses.” David Hume’s (1711–1776) A
Treatise of Human Nature (Hume, 1739) proposed what is now known as the principle of
induction: that general rules are acquired by exposure to repeated associations between their
INDUCTION
elements. Building on the work of Ludwig Wittgenstein (1889–1951) and Bertrand Russell
(1872–1970), the famous Vienna Circle, led by Rudolf Carnap (1891–1970), developed the
doctrine of logical positivism. This doctrine holds that all knowledge can be characterized by
LOGICAL POSITIVISM
logical theories connected, ultimately, to observation sentences that correspond to sensory
OBSERVATION
SENTENCES
inputs; thus logical positivism combines rationalism and empiricism.3 The conﬁrmation the-
ory of Carnap and Carl Hempel (1905–1997) attempted to analyze the acquisition of knowl-
CONFIRMATION
THEORY
edge from experience. Carnap’s book The Logical Structure of the World (1928) deﬁned an
explicit computational procedure for extracting knowledge from elementary experiences. It
was probably the ﬁrst theory of mind as a computational process.
2 The Novum Organum is an update of Aristotle’s Organon, or instrument of thought. Thus Aristotle can be
seen as both an empiricist and a rationalist.
3 In this picture, all meaningful statements can be veriﬁed or falsiﬁed either by experimentation or by analysis
of the meaning of the words. Because this rules out most of metaphysics, as was the intention, logical positivism
was unpopular in some circles.

Section 1.2.
The Foundations of Artiﬁcial Intelligence

The ﬁnal element in the philosophical picture of the mind is the connection between
knowledge and action. This question is vital to AI because intelligence requires action as well
as reasoning. Moreover, only by understanding how actions are justiﬁed can we understand
how to build an agent whose actions are justiﬁable (or rational). Aristotle argued (in De Motu
Animalium) that actions are justiﬁed by a logical connection between goals and knowledge of
the action’s outcome (the last part of this extract also appears on the front cover of this book,
in the original Greek):
But how does it happen that thinking is sometimes accompanied by action and sometimes
not, sometimes by motion, and sometimes not? It looks as if almost the same thing
happens as in the case of reasoning and making inferences about unchanging objects. But
in that case the end is a speculative proposition . . . whereas here the conclusion which
results from the two premises is an action. . . . I need covering; a cloak is a covering. I
need a cloak. What I need, I have to make; I need a cloak. I have to make a cloak. And
the conclusion, the “I have to make a cloak,” is an action.
In the Nicomachean Ethics (Book III. 3, 1112b), Aristotle further elaborates on this topic,
suggesting an algorithm:
We deliberate not about ends, but about means. For a doctor does not deliberate whether
he shall heal, nor an orator whether he shall persuade, . . . They assume the end and
consider how and by what means it is attained, and if it seems easily and best produced
thereby; while if it is achieved by one means only they consider how it will be achieved
by this and by what means this will be achieved, till they come to the ﬁrst cause, . . . and
what is last in the order of analysis seems to be ﬁrst in the order of becoming. And if we
come on an impossibility, we give up the search, e.g., if we need money and this cannot
be got; but if a thing appears possible we try to do it.
Aristotle’s algorithm was implemented 2300 years later by Newell and Simon in their GPS
program. We would now call it a regression planning system (see Chapter 10).
Goal-based analysis is useful, but does not say what to do when several actions will
achieve the goal or when no action will achieve it completely. Antoine Arnauld (1612–1694)
correctly described a quantitative formula for deciding what action to take in cases like this
(see Chapter 16). John Stuart Mill’s (1806–1873) book Utilitarianism (Mill, 1863) promoted
the idea of rational decision criteria in all spheres of human activity. The more formal theory
of decisions is discussed in the following section.
1.2.2
Mathematics
• What are the formal rules to draw valid conclusions?
• What can be computed?
• How do we reason with uncertain information?
Philosophers staked out some of the fundamental ideas of AI, but the leap to a formal science
required a level of mathematical formalization in three fundamental areas: logic, computa-
tion, and probability.
The idea of formal logic can be traced back to the philosophers of ancient Greece, but
its mathematical development really began with the work of George Boole (1815–1864), who

Chapter
1.
Introduction
worked out the details of propositional, or Boolean, logic (Boole, 1847). In 1879, Gottlob
Frege (1848–1925) extended Boole’s logic to include objects and relations, creating the ﬁrst-
order logic that is used today.4 Alfred Tarski (1902–1983) introduced a theory of reference
that shows how to relate the objects in a logic to objects in the real world.
The next step was to determine the limits of what could be done with logic and com-
putation. The ﬁrst nontrivial algorithm is thought to be Euclid’s algorithm for computing
ALGORITHM
greatest common divisors. The word algorithm (and the idea of studying them) comes from
al-Khowarazmi, a Persian mathematician of the 9th century, whose writings also introduced
Arabic numerals and algebra to Europe. Boole and others discussed algorithms for logical
deduction, and, by the late 19th century, efforts were under way to formalize general mathe-
matical reasoning as logical deduction. In 1930, Kurt G¨odel (1906–1978) showed that there
exists an effective procedure to prove any true statement in the ﬁrst-order logic of Frege and
Russell, but that ﬁrst-order logic could not capture the principle of mathematical induction
needed to characterize the natural numbers. In 1931, G¨odel showed that limits on deduc-
tion do exist. His incompleteness theorem showed that in any formal theory as strong as
INCOMPLETENESS
THEOREM
Peano arithmetic (the elementary theory of natural numbers), there are true statements that
are undecidable in the sense that they have no proof within the theory.
This fundamental result can also be interpreted as showing that some functions on the
integers cannot be represented by an algorithm—that is, they cannot be computed. This
motivated Alan Turing (1912–1954) to try to characterize exactly which functions are com-
putable—capable of being computed. This notion is actually slightly problematic because
COMPUTABLE
the notion of a computation or effective procedure really cannot be given a formal deﬁnition.
However, the Church–Turing thesis, which states that the Turing machine (Turing, 1936) is
capable of computing any computable function, is generally accepted as providing a sufﬁcient
deﬁnition. Turing also showed that there were some functions that no Turing machine can
compute. For example, no machine can tell in general whether a given program will return
an answer on a given input or run forever.
Although decidability and computability are important to an understanding of computa-
tion, the notion of tractability has had an even greater impact. Roughly speaking, a problem
TRACTABILITY
is called intractable if the time required to solve instances of the problem grows exponentially
with the size of the instances. The distinction between polynomial and exponential growth
in complexity was ﬁrst emphasized in the mid-1960s (Cobham, 1964; Edmonds, 1965). It is
important because exponential growth means that even moderately large instances cannot be
solved in any reasonable time. Therefore, one should strive to divide the overall problem of
generating intelligent behavior into tractable subproblems rather than intractable ones.
How can one recognize an intractable problem? The theory of NP-completeness, pio-
NP-COMPLETENESS
neered by Steven Cook (1971) and Richard Karp (1972), provides a method. Cook and Karp
showed the existence of large classes of canonical combinatorial search and reasoning prob-
lems that are NP-complete. Any problem class to which the class of NP-complete problems
can be reduced is likely to be intractable. (Although it has not been proved that NP-complete
4 Frege’s proposed notation for ﬁrst-order logic—an arcane combination of textual and geometric features—
never became popular.

Section 1.2.
The Foundations of Artiﬁcial Intelligence

problems are necessarily intractable, most theoreticians believe it.) These results contrast
with the optimism with which the popular press greeted the ﬁrst computers—“Electronic
Super-Brains” that were “Faster than Einstein!” Despite the increasing speed of computers,
careful use of resources will characterize intelligent systems. Put crudely, the world is an
extremely large problem instance! Work in AI has helped explain why some instances of
NP-complete problems are hard, yet others are easy (Cheeseman et al., 1991).
Besides logic and computation, the third great contribution of mathematics to AI is the
theory of probability. The Italian Gerolamo Cardano (1501–1576) ﬁrst framed the idea of
PROBABILITY
probability, describing it in terms of the possible outcomes of gambling events. In 1654,
Blaise Pascal (1623–1662), in a letter to Pierre Fermat (1601–1665), showed how to pre-
dict the future of an unﬁnished gambling game and assign average payoffs to the gamblers.
Probability quickly became an invaluable part of all the quantitative sciences, helping to deal
with uncertain measurements and incomplete theories. James Bernoulli (1654–1705), Pierre
Laplace (1749–1827), and others advanced the theory and introduced new statistical meth-
ods. Thomas Bayes (1702–1761), who appears on the front cover of this book, proposed
a rule for updating probabilities in the light of new evidence. Bayes’ rule underlies most
modern approaches to uncertain reasoning in AI systems.
1.2.3
Economics
• How should we make decisions so as to maximize payoff?
• How should we do this when others may not go along?
• How should we do this when the payoff may be far in the future?
The science of economics got its start in 1776, when Scottish philosopher Adam Smith
(1723–1790) published An Inquiry into the Nature and Causes of the Wealth of Nations.
While the ancient Greeks and others had made contributions to economic thought, Smith was
the ﬁrst to treat it as a science, using the idea that economies can be thought of as consist-
ing of individual agents maximizing their own economic well-being. Most people think of
economics as being about money, but economists will say that they are really studying how
people make choices that lead to preferred outcomes. When McDonald’s offers a hamburger
for a dollar, they are asserting that they would prefer the dollar and hoping that customers will
prefer the hamburger. The mathematical treatment of “preferred outcomes” or utility was
UTILITY
ﬁrst formalized by L´eon Walras (pronounced “Valrasse”) (1834-1910) and was improved by
Frank Ramsey (1931) and later by John von Neumann and Oskar Morgenstern in their book
The Theory of Games and Economic Behavior (1944).
Decision theory, which combines probability theory with utility theory, provides a for-
DECISION THEORY
mal and complete framework for decisions (economic or otherwise) made under uncertainty—
that is, in cases where probabilistic descriptions appropriately capture the decision maker’s
environment. This is suitable for “large” economies where each agent need pay no attention
to the actions of other agents as individuals. For “small” economies, the situation is much
more like a game: the actions of one player can signiﬁcantly affect the utility of another
(either positively or negatively). Von Neumann and Morgenstern’s development of game
theory (see also Luce and Raiffa, 1957) included the surprising result that, for some games,
GAME THEORY

Chapter
1.
Introduction
a rational agent should adopt policies that are (or least appear to be) randomized. Unlike de-
cision theory, game theory does not offer an unambiguous prescription for selecting actions.
For the most part, economists did not address the third question listed above, namely,
how to make rational decisions when payoffs from actions are not immediate but instead re-
sult from several actions taken in sequence. This topic was pursued in the ﬁeld of operations
research, which emerged in World War II from efforts in Britain to optimize radar installa-
OPERATIONS
RESEARCH
tions, and later found civilian applications in complex management decisions. The work of
Richard Bellman (1957) formalized a class of sequential decision problems called Markov
decision processes, which we study in Chapters 17 and 21.
Work in economics and operations research has contributed much to our notion of ra-
tional agents, yet for many years AI research developed along entirely separate paths. One
reason was the apparent complexity of making rational decisions. The pioneering AI re-
searcher Herbert Simon (1916–2001) won the Nobel Prize in economics in 1978 for his early
work showing that models based on satisﬁcing—making decisions that are “good enough,”
SATISFICING
rather than laboriously calculating an optimal decision—gave a better description of actual
human behavior (Simon, 1947). Since the 1990s, there has been a resurgence of interest in
decision-theoretic techniques for agent systems (Wellman, 1995).
1.2.4
Neuroscience
• How do brains process information?
Neuroscience is the study of the nervous system, particularly the brain. Although the exact
NEUROSCIENCE
way in which the brain enables thought is one of the great mysteries of science, the fact that it
does enable thought has been appreciated for thousands of years because of the evidence that
strong blows to the head can lead to mental incapacitation. It has also long been known that
human brains are somehow different; in about 335 B.C. Aristotle wrote, “Of all the animals,
man has the largest brain in proportion to his size.”5 Still, it was not until the middle of the
18th century that the brain was widely recognized as the seat of consciousness. Before then,
candidate locations included the heart and the spleen.
Paul Broca’s (1824–1880) study of aphasia (speech deﬁcit) in brain-damaged patients
in 1861 demonstrated the existence of localized areas of the brain responsible for speciﬁc
cognitive functions. In particular, he showed that speech production was localized to the
portion of the left hemisphere now called Broca’s area.6 By that time, it was known that
the brain consisted of nerve cells, or neurons, but it was not until 1873 that Camillo Golgi
NEURON
(1843–1926) developed a staining technique allowing the observation of individual neurons
in the brain (see Figure 1.2). This technique was used by Santiago Ramon y Cajal (1852–
1934) in his pioneering studies of the brain’s neuronal structures.7 Nicolas Rashevsky (1936,
1938) was the ﬁrst to apply mathematical models to the study of the nervous sytem.
5 Since then, it has been discovered that the tree shrew (Scandentia) has a higher ratio of brain to body mass.
6 Many cite Alexander Hood (1824) as a possible prior source.
7 Golgi persisted in his belief that the brain’s functions were carried out primarily in a continuous medium in
which neurons were embedded, whereas Cajal propounded the “neuronal doctrine.” The two shared the Nobel
prize in 1906 but gave mutually antagonistic acceptance speeches.

Section 1.2.
The Foundations of Artiﬁcial Intelligence

Axon
Cell body or Soma
Nucleus
Dendrite
Synapses
Axonal arborization
Axon from another cell
Synapse
Figure 1.2
The parts of a nerve cell or neuron. Each neuron consists of a cell body,
or soma, that contains a cell nucleus. Branching out from the cell body are a number of
ﬁbers called dendrites and a single long ﬁber called the axon. The axon stretches out for a
long distance, much longer than the scale in this diagram indicates. Typically, an axon is
1 cm long (100 times the diameter of the cell body), but can reach up to 1 meter. A neuron
makes connections with 10 to 100,000 other neurons at junctions called synapses. Signals are
propagated from neuron to neuron by a complicated electrochemical reaction. The signals
control brain activity in the short term and also enable long-term changes in the connectivity
of neurons. These mechanisms are thought to form the basis for learning in the brain. Most
information processing goes on in the cerebral cortex, the outer layer of the brain. The basic
organizational unit appears to be a column of tissue about 0.5 mm in diameter, containing
about 20,000 neurons and extending the full depth of the cortex about 4 mm in humans).
We now have some data on the mapping between areas of the brain and the parts of the
body that they control or from which they receive sensory input. Such mappings are able to
change radically over the course of a few weeks, and some animals seem to have multiple
maps. Moreover, we do not fully understand how other areas can take over functions when
one area is damaged. There is almost no theory on how an individual memory is stored.
The measurement of intact brain activity began in 1929 with the invention by Hans
Berger of the electroencephalograph (EEG). The recent development of functional magnetic
resonance imaging (fMRI) (Ogawa et al., 1990; Cabeza and Nyberg, 2001) is giving neu-
roscientists unprecedentedly detailed images of brain activity, enabling measurements that
correspond in interesting ways to ongoing cognitive processes. These are augmented by
advances in single-cell recording of neuron activity. Individual neurons can be stimulated
electrically, chemically, or even optically (Han and Boyden, 2007), allowing neuronal input–
output relationships to be mapped. Despite these advances, we are still a long way from
understanding how cognitive processes actually work.
The truly amazing conclusion is that a collection of simple cells can lead to thought,
action, and consciousness or, in the pithy words of John Searle (1992), brains cause minds.

Chapter
1.
Introduction
Supercomputer
Personal Computer
Human Brain
Computational units
104 CPUs, 1012 transistors 4 CPUs, 109 transistors 1011 neurons
Storage units
1014 bits RAM
1011 bits RAM
1011 neurons
1015 bits disk
1013 bits disk
1014 synapses
Cycle time
10−9 sec
10−9 sec
10−3 sec
Operations/sec

Memory updates/sec

Figure 1.3
A crude comparison of the raw computational resources available to the IBM
BLUE GENE supercomputer, a typical personal computer of 2008, and the human brain. The
brain’s numbers are essentially ﬁxed, whereas the supercomputer’s numbers have been in-
creasing by a factor of 10 every 5 years or so, allowing it to achieve rough parity with the
brain. The personal computer lags behind on all metrics except cycle time.
The only real alternative theory is mysticism: that minds operate in some mystical realm that
is beyond physical science.
Brains and digital computers have somewhat different properties. Figure 1.3 shows that
computers have a cycle time that is a million times faster than a brain. The brain makes up
for that with far more storage and interconnection than even a high-end personal computer,
although the largest supercomputers have a capacity that is similar to the brain’s. (It should
be noted, however, that the brain does not seem to use all of its neurons simultaneously.)
Futurists make much of these numbers, pointing to an approaching singularity at which
SINGULARITY
computers reach a superhuman level of performance (Vinge, 1993; Kurzweil, 2005), but the
raw comparisons are not especially informative. Even with a computer of virtually unlimited
capacity, we still would not know how to achieve the brain’s level of intelligence.
1.2.5
Psychology
• How do humans and animals think and act?
The origins of scientiﬁc psychology are usually traced to the work of the German physi-
cist Hermann von Helmholtz (1821–1894) and his student Wilhelm Wundt (1832–1920).
Helmholtz applied the scientiﬁc method to the study of human vision, and his Handbook
of Physiological Optics is even now described as “the single most important treatise on the
physics and physiology of human vision” (Nalwa, 1993, p.15). In 1879, Wundt opened the
ﬁrst laboratory of experimental psychology, at the University of Leipzig. Wundt insisted
on carefully controlled experiments in which his workers would perform a perceptual or as-
sociative task while introspecting on their thought processes. The careful controls went a
long way toward making psychology a science, but the subjective nature of the data made
it unlikely that an experimenter would ever disconﬁrm his or her own theories. Biologists
studying animal behavior, on the other hand, lacked introspective data and developed an ob-
jective methodology, as described by H. S. Jennings (1906) in his inﬂuential work Behavior of
the Lower Organisms. Applying this viewpoint to humans, the behaviorism movement, led
BEHAVIORISM
by John Watson (1878–1958), rejected any theory involving mental processes on the grounds

Section 1.2.
The Foundations of Artiﬁcial Intelligence

that introspection could not provide reliable evidence. Behaviorists insisted on studying only
objective measures of the percepts (or stimulus) given to an animal and its resulting actions
(or response). Behaviorism discovered a lot about rats and pigeons but had less success at
understanding humans.
Cognitive psychology, which views the brain as an information-processing device,
COGNITIVE
PSYCHOLOGY
can be traced back at least to the works of William James (1842–1910). Helmholtz also
insisted that perception involved a form of unconscious logical inference. The cognitive
viewpoint was largely eclipsed by behaviorism in the United States, but at Cambridge’s Ap-
plied Psychology Unit, directed by Frederic Bartlett (1886–1969), cognitive modeling was
able to ﬂourish. The Nature of Explanation, by Bartlett’s student and successor Kenneth
Craik (1943), forcefully reestablished the legitimacy of such “mental” terms as beliefs and
goals, arguing that they are just as scientiﬁc as, say, using pressure and temperature to talk
about gases, despite their being made of molecules that have neither. Craik speciﬁed the
three key steps of a knowledge-based agent: (1) the stimulus must be translated into an inter-
nal representation, (2) the representation is manipulated by cognitive processes to derive new
internal representations, and (3) these are in turn retranslated back into action. He clearly
explained why this was a good design for an agent:
If the organism carries a “small-scale model” of external reality and of its own possible
actions within its head, it is able to try out various alternatives, conclude which is the best
of them, react to future situations before they arise, utilize the knowledge of past events
in dealing with the present and future, and in every way to react in a much fuller, safer,
and more competent manner to the emergencies which face it. (Craik, 1943)
After Craik’s death in a bicycle accident in 1945, his work was continued by Donald Broad-
bent, whose book Perception and Communication (1958) was one of the ﬁrst works to model
psychological phenomena as information processing. Meanwhile, in the United States, the
development of computer modeling led to the creation of the ﬁeld of cognitive science. The
ﬁeld can be said to have started at a workshop in September 1956 at MIT. (We shall see that
this is just two months after the conference at which AI itself was “born.”) At the workshop,
George Miller presented The Magic Number Seven, Noam Chomsky presented Three Models
of Language, and Allen Newell and Herbert Simon presented The Logic Theory Machine.
These three inﬂuential papers showed how computer models could be used to address the
psychology of memory, language, and logical thinking, respectively. It is now a common
(although far from universal) view among psychologists that “a cognitive theory should be
like a computer program” (Anderson, 1980); that is, it should describe a detailed information-
processing mechanism whereby some cognitive function might be implemented.
1.2.6
Computer engineering
• How can we build an efﬁcient computer?
For artiﬁcial intelligence to succeed, we need two things: intelligence and an artifact. The
computer has been the artifact of choice. The modern digital electronic computer was in-
vented independently and almost simultaneously by scientists in three countries embattled in

Chapter
1.
Introduction
World War II. The ﬁrst operational computer was the electromechanical Heath Robinson,8
built in 1940 by Alan Turing’s team for a single purpose: deciphering German messages. In
1943, the same group developed the Colossus, a powerful general-purpose machine based
on vacuum tubes.9 The ﬁrst operational programmable computer was the Z-3, the inven-
tion of Konrad Zuse in Germany in 1941. Zuse also invented ﬂoating-point numbers and the
ﬁrst high-level programming language, Plankalk¨ul. The ﬁrst electronic computer, the ABC,
was assembled by John Atanasoff and his student Clifford Berry between 1940 and 1942
at Iowa State University. Atanasoff’s research received little support or recognition; it was
the ENIAC, developed as part of a secret military project at the University of Pennsylvania
by a team including John Mauchly and John Eckert, that proved to be the most inﬂuential
forerunner of modern computers.
Since that time, each generation of computer hardware has brought an increase in speed
and capacity and a decrease in price. Performance doubled every 18 months or so until around
2005, when power dissipation problems led manufacturers to start multiplying the number of
CPU cores rather than the clock speed. Current expectations are that future increases in power
will come from massive parallelism—a curious convergence with the properties of the brain.
Of course, there were calculating devices before the electronic computer. The earliest
automated machines, dating from the 17th century, were discussed on page 6. The ﬁrst pro-
grammable machine was a loom, devised in 1805 by Joseph Marie Jacquard (1752–1834),
that used punched cards to store instructions for the pattern to be woven. In the mid-19th
century, Charles Babbage (1792–1871) designed two machines, neither of which he com-
pleted. The Difference Engine was intended to compute mathematical tables for engineering
and scientiﬁc projects. It was ﬁnally built and shown to work in 1991 at the Science Museum
in London (Swade, 2000). Babbage’s Analytical Engine was far more ambitious: it included
addressable memory, stored programs, and conditional jumps and was the ﬁrst artifact capa-
ble of universal computation. Babbage’s colleague Ada Lovelace, daughter of the poet Lord
Byron, was perhaps the world’s ﬁrst programmer. (The programming language Ada is named
after her.) She wrote programs for the unﬁnished Analytical Engine and even speculated that
the machine could play chess or compose music.
AI also owes a debt to the software side of computer science, which has supplied the
operating systems, programming languages, and tools needed to write modern programs (and
papers about them). But this is one area where the debt has been repaid: work in AI has pio-
neered many ideas that have made their way back to mainstream computer science, including
time sharing, interactive interpreters, personal computers with windows and mice, rapid de-
velopment environments, the linked list data type, automatic storage management, and key
concepts of symbolic, functional, declarative, and object-oriented programming.
8 Heath Robinson was a cartoonist famous for his depictions of whimsical and absurdly complicated contrap-
tions for everyday tasks such as buttering toast.
9 In the postwar period, Turing wanted to use these computers for AI research—for example, one of the ﬁrst
chess programs (Turing et al., 1953). His efforts were blocked by the British government.

Section 1.2.
The Foundations of Artiﬁcial Intelligence

1.2.7
Control theory and cybernetics
• How can artifacts operate under their own control?
Ktesibios of Alexandria (c. 250 B.C.) built the ﬁrst self-controlling machine: a water clock
with a regulator that maintained a constant ﬂow rate. This invention changed the deﬁnition
of what an artifact could do. Previously, only living things could modify their behavior in
response to changes in the environment. Other examples of self-regulating feedback control
systems include the steam engine governor, created by James Watt (1736–1819), and the
thermostat, invented by Cornelis Drebbel (1572–1633), who also invented the submarine.
The mathematical theory of stable feedback systems was developed in the 19th century.
The central ﬁgure in the creation of what is now called control theory was Norbert
CONTROL THEORY
Wiener (1894–1964). Wiener was a brilliant mathematician who worked with Bertrand Rus-
sell, among others, before developing an interest in biological and mechanical control systems
and their connection to cognition. Like Craik (who also used control systems as psychological
models), Wiener and his colleagues Arturo Rosenblueth and Julian Bigelow challenged the
behaviorist orthodoxy (Rosenblueth et al., 1943). They viewed purposive behavior as aris-
ing from a regulatory mechanism trying to minimize “error”—the difference between current
state and goal state. In the late 1940s, Wiener, along with Warren McCulloch, Walter Pitts,
and John von Neumann, organized a series of inﬂuential conferences that explored the new
mathematical and computational models of cognition. Wiener’s book Cybernetics (1948) be-
CYBERNETICS
came a bestseller and awoke the public to the possibility of artiﬁcially intelligent machines.
Meanwhile, in Britain, W. Ross Ashby (Ashby, 1940) pioneered similar ideas. Ashby, Alan
Turing, Grey Walter, and others formed the Ratio Club for “those who had Wiener’s ideas
before Wiener’s book appeared.” Ashby’s Design for a Brain (1948, 1952) elaborated on his
idea that intelligence could be created by the use of homeostatic devices containing appro-
HOMEOSTATIC
priate feedback loops to achieve stable adaptive behavior.
Modern control theory, especially the branch known as stochastic optimal control, has
as its goal the design of systems that maximize an objective function over time. This roughly
OBJECTIVE
FUNCTION
matches our view of AI: designing systems that behave optimally. Why, then, are AI and
control theory two different ﬁelds, despite the close connections among their founders? The
answer lies in the close coupling between the mathematical techniques that were familiar to
the participants and the corresponding sets of problems that were encompassed in each world
view. Calculus and matrix algebra, the tools of control theory, lend themselves to systems that
are describable by ﬁxed sets of continuous variables, whereas AI was founded in part as a way
to escape from the these perceived limitations. The tools of logical inference and computation
allowed AI researchers to consider problems such as language, vision, and planning that fell
completely outside the control theorist’s purview.
1.2.8
Linguistics
• How does language relate to thought?
In 1957, B. F. Skinner published Verbal Behavior. This was a comprehensive, detailed ac-
count of the behaviorist approach to language learning, written by the foremost expert in

Chapter
1.
Introduction
the ﬁeld. But curiously, a review of the book became as well known as the book itself, and
served to almost kill off interest in behaviorism. The author of the review was the linguist
Noam Chomsky, who had just published a book on his own theory, Syntactic Structures.
Chomsky pointed out that the behaviorist theory did not address the notion of creativity in
language—it did not explain how a child could understand and make up sentences that he or
she had never heard before. Chomsky’s theory—based on syntactic models going back to the
Indian linguist Panini (c. 350 B.C.)—could explain this, and unlike previous theories, it was
formal enough that it could in principle be programmed.
Modern linguistics and AI, then, were “born” at about the same time, and grew up
together, intersecting in a hybrid ﬁeld called computational linguistics or natural language
COMPUTATIONAL
LINGUISTICS
processing. The problem of understanding language soon turned out to be considerably more
complex than it seemed in 1957. Understanding language requires an understanding of the
subject matter and context, not just an understanding of the structure of sentences. This might
seem obvious, but it was not widely appreciated until the 1960s. Much of the early work in
knowledge representation (the study of how to put knowledge into a form that a computer
can reason with) was tied to language and informed by research in linguistics, which was
connected in turn to decades of work on the philosophical analysis of language.
1.3
THE HISTORY OF ARTIFICIAL INTELLIGENCE
With the background material behind us, we are ready to cover the development of AI itself.
1.3.1
The gestation of artiﬁcial intelligence (1943–1955)
The ﬁrst work that is now generally recognized as AI was done by Warren McCulloch and
Walter Pitts (1943). They drew on three sources: knowledge of the basic physiology and
function of neurons in the brain; a formal analysis of propositional logic due to Russell and
Whitehead; and Turing’s theory of computation. They proposed a model of artiﬁcial neurons
in which each neuron is characterized as being “on” or “off,” with a switch to “on” occurring
in response to stimulation by a sufﬁcient number of neighboring neurons. The state of a
neuron was conceived of as “factually equivalent to a proposition which proposed its adequate
stimulus.” They showed, for example, that any computable function could be computed by
some network of connected neurons, and that all the logical connectives (and, or, not, etc.)
could be implemented by simple net structures. McCulloch and Pitts also suggested that
suitably deﬁned networks could learn. Donald Hebb (1949) demonstrated a simple updating
rule for modifying the connection strengths between neurons. His rule, now called Hebbian
learning, remains an inﬂuential model to this day.
HEBBIAN LEARNING
Two undergraduate students at Harvard, Marvin Minsky and Dean Edmonds, built the
ﬁrst neural network computer in 1950. The SNARC, as it was called, used 3000 vacuum
tubes and a surplus automatic pilot mechanism from a B-24 bomber to simulate a network of
40 neurons. Later, at Princeton, Minsky studied universal computation in neural networks.
His Ph.D. committee was skeptical about whether this kind of work should be considered

Section 1.3.
The History of Artiﬁcial Intelligence

mathematics, but von Neumann reportedly said, “If it isn’t now, it will be someday.” Minsky
was later to prove inﬂuential theorems showing the limitations of neural network research.
There were a number of early examples of work that can be characterized as AI, but
Alan Turing’s vision was perhaps the most inﬂuential. He gave lectures on the topic as early
as 1947 at the London Mathematical Society and articulated a persuasive agenda in his 1950
article “Computing Machinery and Intelligence.” Therein, he introduced the Turing Test,
machine learning, genetic algorithms, and reinforcement learning. He proposed the Child
Programme idea, explaining “Instead of trying to produce a programme to simulate the adult
mind, why not rather try to produce one which simulated the child’s?”
1.3.2
The birth of artiﬁcial intelligence (1956)
Princeton was home to another inﬂuential ﬁgure in AI, John McCarthy. After receiving his
PhD there in 1951 and working for two years as an instructor, McCarthy moved to Stan-
ford and then to Dartmouth College, which was to become the ofﬁcial birthplace of the ﬁeld.
McCarthy convinced Minsky, Claude Shannon, and Nathaniel Rochester to help him bring
together U.S. researchers interested in automata theory, neural nets, and the study of intel-
ligence. They organized a two-month workshop at Dartmouth in the summer of 1956. The
proposal states:10
We propose that a 2 month, 10 man study of artiﬁcial intelligence be carried
out during the summer of 1956 at Dartmouth College in Hanover, New Hamp-
shire. The study is to proceed on the basis of the conjecture that every aspect of
learning or any other feature of intelligence can in principle be so precisely de-
scribed that a machine can be made to simulate it. An attempt will be made to ﬁnd
how to make machines use language, form abstractions and concepts, solve kinds
of problems now reserved for humans, and improve themselves. We think that a
signiﬁcant advance can be made in one or more of these problems if a carefully
selected group of scientists work on it together for a summer.
There were 10 attendees in all, including Trenchard More from Princeton, Arthur Samuel
from IBM, and Ray Solomonoff and Oliver Selfridge from MIT.
Two researchers from Carnegie Tech,11 Allen Newell and Herbert Simon, rather stole
the show. Although the others had ideas and in some cases programs for particular appli-
cations such as checkers, Newell and Simon already had a reasoning program, the Logic
Theorist (LT), about which Simon claimed, “We have invented a computer program capable
of thinking non-numerically, and thereby solved the venerable mind–body problem.”12 Soon
after the workshop, the program was able to prove most of the theorems in Chapter 2 of Rus-
10 This was the ﬁrst ofﬁcial usage of McCarthy’s term artiﬁcial intelligence. Perhaps “computational rationality”
would have been more precise and less threatening, but “AI” has stuck. At the 50th anniversary of the Dartmouth
conference, McCarthy stated that he resisted the terms “computer” or “computational” in deference to Norbert
Weiner, who was promoting analog cybernetic devices rather than digital computers.
11 Now Carnegie Mellon University (CMU).
12 Newell and Simon also invented a list-processing language, IPL, to write LT. They had no compiler and
translated it into machine code by hand. To avoid errors, they worked in parallel, calling out binary numbers to
each other as they wrote each instruction to make sure they agreed.

Chapter
1.
Introduction
sell and Whitehead’s Principia Mathematica. Russell was reportedly delighted when Simon
showed him that the program had come up with a proof for one theorem that was shorter than
the one in Principia. The editors of the Journal of Symbolic Logic were less impressed; they
rejected a paper coauthored by Newell, Simon, and Logic Theorist.
The Dartmouth workshop did not lead to any new breakthroughs, but it did introduce
all the major ﬁgures to each other. For the next 20 years, the ﬁeld would be dominated by
these people and their students and colleagues at MIT, CMU, Stanford, and IBM.
Looking at the proposal for the Dartmouth workshop (McCarthy et al., 1955), we can
see why it was necessary for AI to become a separate ﬁeld. Why couldn’t all the work done
in AI have taken place under the name of control theory or operations research or decision
theory, which, after all, have objectives similar to those of AI? Or why isn’t AI a branch
of mathematics? The ﬁrst answer is that AI from the start embraced the idea of duplicating
human faculties such as creativity, self-improvement, and language use. None of the other
ﬁelds were addressing these issues. The second answer is methodology. AI is the only one
of these ﬁelds that is clearly a branch of computer science (although operations research does
share an emphasis on computer simulations), and AI is the only ﬁeld to attempt to build
machines that will function autonomously in complex, changing environments.
1.3.3
Early enthusiasm, great expectations (1952–1969)
The early years of AI were full of successes—in a limited way. Given the primitive comput-
ers and programming tools of the time and the fact that only a few years earlier computers
were seen as things that could do arithmetic and no more, it was astonishing whenever a com-
puter did anything remotely clever. The intellectual establishment, by and large, preferred to
believe that “a machine can never do X.” (See Chapter 26 for a long list of X’s gathered
by Turing.) AI researchers naturally responded by demonstrating one X after another. John
McCarthy referred to this period as the “Look, Ma, no hands!” era.
Newell and Simon’s early success was followed up with the General Problem Solver,
or GPS. Unlike Logic Theorist, this program was designed from the start to imitate human
problem-solving protocols. Within the limited class of puzzles it could handle, it turned out
that the order in which the program considered subgoals and possible actions was similar to
that in which humans approached the same problems. Thus, GPS was probably the ﬁrst pro-
gram to embody the “thinking humanly” approach. The success of GPS and subsequent pro-
grams as models of cognition led Newell and Simon (1976) to formulate the famous physical
symbol system hypothesis, which states that “a physical symbol system has the necessary and
PHYSICAL SYMBOL
SYSTEM
sufﬁcient means for general intelligent action.” What they meant is that any system (human
or machine) exhibiting intelligence must operate by manipulating data structures composed
of symbols. We will see later that this hypothesis has been challenged from many directions.
At IBM, Nathaniel Rochester and his colleagues produced some of the ﬁrst AI pro-
grams.
Herbert Gelernter (1959) constructed the Geometry Theorem Prover, which was
able to prove theorems that many students of mathematics would ﬁnd quite tricky. Starting
in 1952, Arthur Samuel wrote a series of programs for checkers (draughts) that eventually
learned to play at a strong amateur level. Along the way, he disproved the idea that comput-

Section 1.3.
The History of Artiﬁcial Intelligence

ers can do only what they are told to: his program quickly learned to play a better game than
its creator. The program was demonstrated on television in February 1956, creating a strong
impression. Like Turing, Samuel had trouble ﬁnding computer time. Working at night, he
used machines that were still on the testing ﬂoor at IBM’s manufacturing plant. Chapter 5
covers game playing, and Chapter 21 explains the learning techniques used by Samuel.
John McCarthy moved from Dartmouth to MIT and there made three crucial contribu-
tions in one historic year: 1958. In MIT AI Lab Memo No. 1, McCarthy deﬁned the high-level
language Lisp, which was to become the dominant AI programming language for the next 30
LISP
years. With Lisp, McCarthy had the tool he needed, but access to scarce and expensive com-
puting resources was also a serious problem. In response, he and others at MIT invented time
sharing. Also in 1958, McCarthy published a paper entitled Programs with Common Sense,
in which he described the Advice Taker, a hypothetical program that can be seen as the ﬁrst
complete AI system. Like the Logic Theorist and Geometry Theorem Prover, McCarthy’s
program was designed to use knowledge to search for solutions to problems. But unlike the
others, it was to embody general knowledge of the world. For example, he showed how
some simple axioms would enable the program to generate a plan to drive to the airport. The
program was also designed to accept new axioms in the normal course of operation, thereby
allowing it to achieve competence in new areas without being reprogrammed. The Advice
Taker thus embodied the central principles of knowledge representation and reasoning: that
it is useful to have a formal, explicit representation of the world and its workings and to be
able to manipulate that representation with deductive processes. It is remarkable how much
of the 1958 paper remains relevant today.
1958 also marked the year that Marvin Minsky moved to MIT. His initial collaboration
with McCarthy did not last, however. McCarthy stressed representation and reasoning in for-
mal logic, whereas Minsky was more interested in getting programs to work and eventually
developed an anti-logic outlook. In 1963, McCarthy started the AI lab at Stanford. His plan
to use logic to build the ultimate Advice Taker was advanced by J. A. Robinson’s discov-
ery in 1965 of the resolution method (a complete theorem-proving algorithm for ﬁrst-order
logic; see Chapter 9). Work at Stanford emphasized general-purpose methods for logical
reasoning. Applications of logic included Cordell Green’s question-answering and planning
systems (Green, 1969b) and the Shakey robotics project at the Stanford Research Institute
(SRI). The latter project, discussed further in Chapter 25, was the ﬁrst to demonstrate the
complete integration of logical reasoning and physical activity.
Minsky supervised a series of students who chose limited problems that appeared to
require intelligence to solve. These limited domains became known as microworlds. James
MICROWORLD
Slagle’s SAINT program (1963) was able to solve closed-form calculus integration problems
typical of ﬁrst-year college courses. Tom Evans’s ANALOGY program (1968) solved geo-
metric analogy problems that appear in IQ tests. Daniel Bobrow’s STUDENT program (1967)
solved algebra story problems, such as the following:
If the number of customers Tom gets is twice the square of 20 percent of the number
of advertisements he runs, and the number of advertisements he runs is 45, what is the
number of customers Tom gets?

Chapter
1.
Introduction
Red
Green
Red
Green
Green
Blue
Blue
Red
Figure 1.4
A scene from the blocks world. SHRDLU (Winograd, 1972) has just completed
the command “Find a block which is taller than the one you are holding and put it in the box.”
The most famous microworld was the blocks world, which consists of a set of solid blocks
placed on a tabletop (or more often, a simulation of a tabletop), as shown in Figure 1.4.
A typical task in this world is to rearrange the blocks in a certain way, using a robot hand
that can pick up one block at a time. The blocks world was home to the vision project of
David Huffman (1971), the vision and constraint-propagation work of David Waltz (1975),
the learning theory of Patrick Winston (1970), the natural-language-understanding program
of Terry Winograd (1972), and the planner of Scott Fahlman (1974).
Early work building on the neural networks of McCulloch and Pitts also ﬂourished.
The work of Winograd and Cowan (1963) showed how a large number of elements could
collectively represent an individual concept, with a corresponding increase in robustness and
parallelism. Hebb’s learning methods were enhanced by Bernie Widrow (Widrow and Hoff,
1960; Widrow, 1962), who called his networks adalines, and by Frank Rosenblatt (1962)
with his perceptrons. The perceptron convergence theorem (Block et al., 1962) says that
the learning algorithm can adjust the connection strengths of a perceptron to match any input
data, provided such a match exists. These topics are covered in Chapter 20.
1.3.4
A dose of reality (1966–1973)
From the beginning, AI researchers were not shy about making predictions of their coming
successes. The following statement by Herbert Simon in 1957 is often quoted:
It is not my aim to surprise or shock you—but the simplest way I can summarize is to say
that there are now in the world machines that think, that learn and that create. Moreover,

Section 1.3.
The History of Artiﬁcial Intelligence

their ability to do these things is going to increase rapidly until—in a visible future—the
range of problems they can handle will be coextensive with the range to which the human
mind has been applied.
Terms such as “visible future” can be interpreted in various ways, but Simon also made
more concrete predictions: that within 10 years a computer would be chess champion, and
a signiﬁcant mathematical theorem would be proved by machine. These predictions came
true (or approximately true) within 40 years rather than 10. Simon’s overconﬁdence was due
to the promising performance of early AI systems on simple examples. In almost all cases,
however, these early systems turned out to fail miserably when tried out on wider selections
of problems and on more difﬁcult problems.
The ﬁrst kind of difﬁculty arose because most early programs knew nothing of their
subject matter; they succeeded by means of simple syntactic manipulations. A typical story
occurred in early machine translation efforts, which were generously funded by the U.S. Na-
tional Research Council in an attempt to speed up the translation of Russian scientiﬁc papers
in the wake of the Sputnik launch in 1957. It was thought initially that simple syntactic trans-
formations based on the grammars of Russian and English, and word replacement from an
electronic dictionary, would sufﬁce to preserve the exact meanings of sentences. The fact is
that accurate translation requires background knowledge in order to resolve ambiguity and
establish the content of the sentence. The famous retranslation of “the spirit is willing but
the ﬂesh is weak” as “the vodka is good but the meat is rotten” illustrates the difﬁculties en-
countered. In 1966, a report by an advisory committee found that “there has been no machine
translation of general scientiﬁc text, and none is in immediate prospect.” All U.S. government
funding for academic translation projects was canceled. Today, machine translation is an im-
perfect but widely used tool for technical, commercial, government, and Internet documents.
The second kind of difﬁculty was the intractability of many of the problems that AI was
attempting to solve. Most of the early AI programs solved problems by trying out different
combinations of steps until the solution was found. This strategy worked initially because
microworlds contained very few objects and hence very few possible actions and very short
solution sequences. Before the theory of computational complexity was developed, it was
widely thought that “scaling up” to larger problems was simply a matter of faster hardware
and larger memories. The optimism that accompanied the development of resolution theorem
proving, for example, was soon dampened when researchers failed to prove theorems involv-
ing more than a few dozen facts. The fact that a program can ﬁnd a solution in principle does
not mean that the program contains any of the mechanisms needed to ﬁnd it in practice.
The illusion of unlimited computational power was not conﬁned to problem-solving
programs. Early experiments in machine evolution (now called genetic algorithms) (Fried-
MACHINE EVOLUTION
GENETIC
ALGORITHM
berg, 1958; Friedberg et al., 1959) were based on the undoubtedly correct belief that by
making an appropriate series of small mutations to a machine-code program, one can gen-
erate a program with good performance for any particular task. The idea, then, was to try
random mutations with a selection process to preserve mutations that seemed useful. De-
spite thousands of hours of CPU time, almost no progress was demonstrated. Modern genetic
algorithms use better representations and have shown more success.

Chapter
1.
Introduction
Failure to come to grips with the “combinatorial explosion” was one of the main criti-
cisms of AI contained in the Lighthill report (Lighthill, 1973), which formed the basis for the
decision by the British government to end support for AI research in all but two universities.
(Oral tradition paints a somewhat different and more colorful picture, with political ambitions
and personal animosities whose description is beside the point.)
A third difﬁculty arose because of some fundamental limitations on the basic structures
being used to generate intelligent behavior. For example, Minsky and Papert’s book Percep-
trons (1969) proved that, although perceptrons (a simple form of neural network) could be
shown to learn anything they were capable of representing, they could represent very little. In
particular, a two-input perceptron (restricted to be simpler than the form Rosenblatt originally
studied) could not be trained to recognize when its two inputs were different. Although their
results did not apply to more complex, multilayer networks, research funding for neural-net
research soon dwindled to almost nothing. Ironically, the new back-propagation learning al-
gorithms for multilayer networks that were to cause an enormous resurgence in neural-net
research in the late 1980s were actually discovered ﬁrst in 1969 (Bryson and Ho, 1969).
1.3.5
Knowledge-based systems: The key to power? (1969–1979)
The picture of problem solving that had arisen during the ﬁrst decade of AI research was of
a general-purpose search mechanism trying to string together elementary reasoning steps to
ﬁnd complete solutions. Such approaches have been called weak methods because, although
WEAK METHOD
general, they do not scale up to large or difﬁcult problem instances. The alternative to weak
methods is to use more powerful, domain-speciﬁc knowledge that allows larger reasoning
steps and can more easily handle typically occurring cases in narrow areas of expertise. One
might say that to solve a hard problem, you have to almost know the answer already.
The DENDRAL program (Buchanan et al., 1969) was an early example of this approach.
It was developed at Stanford, where Ed Feigenbaum (a former student of Herbert Simon),
Bruce Buchanan (a philosopher turned computer scientist), and Joshua Lederberg (a Nobel
laureate geneticist) teamed up to solve the problem of inferring molecular structure from the
information provided by a mass spectrometer. The input to the program consists of the ele-
mentary formula of the molecule (e.g., C6H13NO2) and the mass spectrum giving the masses
of the various fragments of the molecule generated when it is bombarded by an electron beam.
For example, the mass spectrum might contain a peak at m = 15, corresponding to the mass
of a methyl (CH3) fragment.
The naive version of the program generated all possible structures consistent with the
formula, and then predicted what mass spectrum would be observed for each, comparing this
with the actual spectrum. As one might expect, this is intractable for even moderate-sized
molecules. The DENDRAL researchers consulted analytical chemists and found that they
worked by looking for well-known patterns of peaks in the spectrum that suggested common
substructures in the molecule. For example, the following rule is used to recognize a ketone
(C=O) subgroup (which weighs 28):
if there are two peaks at x1 and x2 such that
(a) x1 + x2 = M + 28 (M is the mass of the whole molecule);

Section 1.3.
The History of Artiﬁcial Intelligence

(b) x1 −28 is a high peak;
(c) x2 −28 is a high peak;
(d) At least one of x1 and x2 is high.
then there is a ketone subgroup
Recognizing that the molecule contains a particular substructure reduces the number of pos-
sible candidates enormously. DENDRAL was powerful because
All the relevant theoretical knowledge to solve these problems has been mapped over from
its general form in the [spectrum prediction component] (“ﬁrst principles”) to efﬁcient
special forms (“cookbook recipes”). (Feigenbaum et al., 1971)
The signiﬁcance of DENDRAL was that it was the ﬁrst successful knowledge-intensive sys-
tem: its expertise derived from large numbers of special-purpose rules. Later systems also
incorporated the main theme of McCarthy’s Advice Taker approach—the clean separation of
the knowledge (in the form of rules) from the reasoning component.
With this lesson in mind, Feigenbaum and others at Stanford began the Heuristic Pro-
gramming Project (HPP) to investigate the extent to which the new methodology of expert
systems could be applied to other areas of human expertise. The next major effort was in
EXPERT SYSTEMS
the area of medical diagnosis. Feigenbaum, Buchanan, and Dr. Edward Shortliffe developed
MYCIN to diagnose blood infections. With about 450 rules, MYCIN was able to perform
as well as some experts, and considerably better than junior doctors. It also contained two
major differences from DENDRAL. First, unlike the DENDRAL rules, no general theoretical
model existed from which the MYCIN rules could be deduced. They had to be acquired from
extensive interviewing of experts, who in turn acquired them from textbooks, other experts,
and direct experience of cases. Second, the rules had to reﬂect the uncertainty associated with
medical knowledge. MYCIN incorporated a calculus of uncertainty called certainty factors
CERTAINTY FACTOR
(see Chapter 14), which seemed (at the time) to ﬁt well with how doctors assessed the impact
of evidence on the diagnosis.
The importance of domain knowledge was also apparent in the area of understanding
natural language. Although Winograd’s SHRDLU system for understanding natural language
had engendered a good deal of excitement, its dependence on syntactic analysis caused some
of the same problems as occurred in the early machine translation work. It was able to
overcome ambiguity and understand pronoun references, but this was mainly because it was
designed speciﬁcally for one area—the blocks world. Several researchers, including Eugene
Charniak, a fellow graduate student of Winograd’s at MIT, suggested that robust language
understanding would require general knowledge about the world and a general method for
using that knowledge.
At Yale, linguist-turned-AI-researcher Roger Schank emphasized this point, claiming,
“There is no such thing as syntax,” which upset a lot of linguists but did serve to start a useful
discussion. Schank and his students built a series of programs (Schank and Abelson, 1977;
Wilensky, 1978; Schank and Riesbeck, 1981; Dyer, 1983) that all had the task of under-
standing natural language. The emphasis, however, was less on language per se and more on
the problems of representing and reasoning with the knowledge required for language under-
standing. The problems included representing stereotypical situations (Cullingford, 1981),

Chapter
1.
Introduction
describing human memory organization (Rieger, 1976; Kolodner, 1983), and understanding
plans and goals (Wilensky, 1983).
The widespread growth of applications to real-world problems caused a concurrent in-
crease in the demands for workable knowledge representation schemes. A large number
of different representation and reasoning languages were developed. Some were based on
logic—for example, the Prolog language became popular in Europe, and the PLANNER fam-
ily in the United States. Others, following Minsky’s idea of frames (1975), adopted a more
FRAMES
structured approach, assembling facts about particular object and event types and arranging
the types into a large taxonomic hierarchy analogous to a biological taxonomy.
1.3.6
AI becomes an industry (1980–present)
The ﬁrst successful commercial expert system, R1, began operation at the Digital Equipment
Corporation (McDermott, 1982). The program helped conﬁgure orders for new computer
systems; by 1986, it was saving the company an estimated $40 million a year. By 1988,
DEC’s AI group had 40 expert systems deployed, with more on the way. DuPont had 100 in
use and 500 in development, saving an estimated $10 million a year. Nearly every major U.S.
corporation had its own AI group and was either using or investigating expert systems.
In 1981, the Japanese announced the “Fifth Generation” project, a 10-year plan to build
intelligent computers running Prolog. In response, the United States formed the Microelec-
tronics and Computer Technology Corporation (MCC) as a research consortium designed to
assure national competitiveness. In both cases, AI was part of a broad effort, including chip
design and human-interface research. In Britain, the Alvey report reinstated the funding that
was cut by the Lighthill report.13 In all three countries, however, the projects never met their
ambitious goals.
Overall, the AI industry boomed from a few million dollars in 1980 to billions of dollars
in 1988, including hundreds of companies building expert systems, vision systems, robots,
and software and hardware specialized for these purposes. Soon after that came a period
called the “AI Winter,” in which many companies fell by the wayside as they failed to deliver
on extravagant promises.
1.3.7
The return of neural networks (1986–present)
In the mid-1980s at least four different groups reinvented the back-propagation learning
BACK-PROPAGATION
algorithm ﬁrst found in 1969 by Bryson and Ho. The algorithm was applied to many learn-
ing problems in computer science and psychology, and the widespread dissemination of the
results in the collection Parallel Distributed Processing (Rumelhart and McClelland, 1986)
caused great excitement.
These so-called connectionist models of intelligent systems were seen by some as di-
CONNECTIONIST
rect competitors both to the symbolic models promoted by Newell and Simon and to the
logicist approach of McCarthy and others (Smolensky, 1988). It might seem obvious that
at some level humans manipulate symbols—in fact, Terrence Deacon’s book The Symbolic
13 To save embarrassment, a new ﬁeld called IKBS (Intelligent Knowledge-Based Systems) was invented because
Artiﬁcial Intelligence had been ofﬁcially canceled.

Section 1.3.
The History of Artiﬁcial Intelligence

Species (1997) suggests that this is the deﬁning characteristic of humans—but the most ar-
dent connectionists questioned whether symbol manipulation had any real explanatory role in
detailed models of cognition. This question remains unanswered, but the current view is that
connectionist and symbolic approaches are complementary, not competing. As occurred with
the separation of AI and cognitive science, modern neural network research has bifurcated
into two ﬁelds, one concerned with creating effective network architectures and algorithms
and understanding their mathematical properties, the other concerned with careful modeling
of the empirical properties of actual neurons and ensembles of neurons.
1.3.8
AI adopts the scientiﬁc method (1987–present)
Recent years have seen a revolution in both the content and the methodology of work in
artiﬁcial intelligence.14 It is now more common to build on existing theories than to propose
brand-new ones, to base claims on rigorous theorems or hard experimental evidence rather
than on intuition, and to show relevance to real-world applications rather than toy examples.
AI was founded in part as a rebellion against the limitations of existing ﬁelds like control
theory and statistics, but now it is embracing those ﬁelds. As David McAllester (1998) put it:
In the early period of AI it seemed plausible that new forms of symbolic computation,
e.g., frames and semantic networks, made much of classical theory obsolete. This led to
a form of isolationism in which AI became largely separated from the rest of computer
science. This isolationism is currently being abandoned. There is a recognition that
machine learning should not be isolated from information theory, that uncertain reasoning
should not be isolated from stochastic modeling, that search should not be isolated from
classical optimization and control, and that automated reasoning should not be isolated
from formal methods and static analysis.
In terms of methodology, AI has ﬁnally come ﬁrmly under the scientiﬁc method. To be ac-
cepted, hypotheses must be subjected to rigorous empirical experiments, and the results must
be analyzed statistically for their importance (Cohen, 1995). It is now possible to replicate
experiments by using shared repositories of test data and code.
The ﬁeld of speech recognition illustrates the pattern. In the 1970s, a wide variety of
different architectures and approaches were tried. Many of these were rather ad hoc and
fragile, and were demonstrated on only a few specially selected examples. In recent years,
approaches based on hidden Markov models (HMMs) have come to dominate the area. Two
HIDDEN MARKOV
MODELS
aspects of HMMs are relevant. First, they are based on a rigorous mathematical theory. This
has allowed speech researchers to build on several decades of mathematical results developed
in other ﬁelds. Second, they are generated by a process of training on a large corpus of
real speech data. This ensures that the performance is robust, and in rigorous blind tests the
HMMs have been improving their scores steadily. Speech technology and the related ﬁeld of
handwritten character recognition are already making the transition to widespread industrial
14 Some have characterized this change as a victory of the neats—those who think that AI theories should be
grounded in mathematical rigor—over the scrufﬁes—those who would rather try out lots of ideas, write some
programs, and then assess what seems to be working. Both approaches are important. A shift toward neatness
implies that the ﬁeld has reached a level of stability and maturity. Whether that stability will be disrupted by a
new scruffy idea is another question.

Chapter
1.
Introduction
and consumer applications. Note that there is no scientiﬁc claim that humans use HMMs to
recognize speech; rather, HMMs provide a mathematical framework for understanding the
problem and support the engineering claim that they work well in practice.
Machine translation follows the same course as speech recognition. In the 1950s there
was initial enthusiasm for an approach based on sequences of words, with models learned
according to the principles of information theory. That approach fell out of favor in the
1960s, but returned in the late 1990s and now dominates the ﬁeld.
Neural networks also ﬁt this trend. Much of the work on neural nets in the 1980s was
done in an attempt to scope out what could be done and to learn how neural nets differ from
“traditional” techniques. Using improved methodology and theoretical frameworks, the ﬁeld
arrived at an understanding in which neural nets can now be compared with corresponding
techniques from statistics, pattern recognition, and machine learning, and the most promising
technique can be applied to each application. As a result of these developments, so-called
data mining technology has spawned a vigorous new industry.
DATA MINING
Judea Pearl’s (1988) Probabilistic Reasoning in Intelligent Systems led to a new accep-
tance of probability and decision theory in AI, following a resurgence of interest epitomized
by Peter Cheeseman’s (1985) article “In Defense of Probability.” The Bayesian network
BAYESIAN NETWORK
formalism was invented to allow efﬁcient representation of, and rigorous reasoning with,
uncertain knowledge. This approach largely overcomes many problems of the probabilistic
reasoning systems of the 1960s and 1970s; it now dominates AI research on uncertain reason-
ing and expert systems. The approach allows for learning from experience, and it combines
the best of classical AI and neural nets. Work by Judea Pearl (1982a) and by Eric Horvitz and
David Heckerman (Horvitz and Heckerman, 1986; Horvitz et al., 1986) promoted the idea of
normative expert systems: ones that act rationally according to the laws of decision theory
and do not try to imitate the thought steps of human experts. The WindowsTM operating sys-
tem includes several normative diagnostic expert systems for correcting problems. Chapters
13 to 16 cover this area.
Similar gentle revolutions have occurred in robotics, computer vision, and knowledge
representation. A better understanding of the problems and their complexity properties, com-
bined with increased mathematical sophistication, has led to workable research agendas and
robust methods. Although increased formalization and specialization led ﬁelds such as vision
and robotics to become somewhat isolated from “mainstream” AI in the 1990s, this trend has
reversed in recent years as tools from machine learning in particular have proved effective for
many problems. The process of reintegration is already yielding signiﬁcant beneﬁts
1.3.9
The emergence of intelligent agents (1995–present)
Perhaps encouraged by the progress in solving the subproblems of AI, researchers have also
started to look at the “whole agent” problem again. The work of Allen Newell, John Laird,
and Paul Rosenbloom on SOAR (Newell, 1990; Laird et al., 1987) is the best-known example
of a complete agent architecture. One of the most important environments for intelligent
agents is the Internet. AI systems have become so common in Web-based applications that
the “-bot” sufﬁx has entered everyday language. Moreover, AI technologies underlie many

Section 1.3.
The History of Artiﬁcial Intelligence

Internet tools, such as search engines, recommender systems, and Web site aggregators.
One consequence of trying to build complete agents is the realization that the previously
isolated subﬁelds of AI might need to be reorganized somewhat when their results are to be
tied together. In particular, it is now widely appreciated that sensory systems (vision, sonar,
speech recognition, etc.) cannot deliver perfectly reliable information about the environment.
Hence, reasoning and planning systems must be able to handle uncertainty. A second major
consequence of the agent perspective is that AI has been drawn into much closer contact
with other ﬁelds, such as control theory and economics, that also deal with agents. Recent
progress in the control of robotic cars has derived from a mixture of approaches ranging from
better sensors, control-theoretic integration of sensing, localization and mapping, as well as
a degree of high-level planning.
Despite these successes, some inﬂuential founders of AI, including John McCarthy
(2007), Marvin Minsky (2007), Nils Nilsson (1995, 2005) and Patrick Winston (Beal and
Winston, 2009), have expressed discontent with the progress of AI. They think that AI should
put less emphasis on creating ever-improved versions of applications that are good at a spe-
ciﬁc task, such as driving a car, playing chess, or recognizing speech. Instead, they believe
AI should return to its roots of striving for, in Simon’s words, “machines that think, that learn
and that create.” They call the effort human-level AI or HLAI; their ﬁrst symposium was in
HUMAN-LEVEL AI
2004 (Minsky et al., 2004). The effort will require very large knowledge bases; Hendler et al.
(1995) discuss where these knowledge bases might come from.
A related idea is the subﬁeld of Artiﬁcial General Intelligence or AGI (Goertzel and
ARTIFICIAL GENERAL
INTELLIGENCE
Pennachin, 2007), which held its ﬁrst conference and organized the Journal of Artiﬁcial Gen-
eral Intelligence in 2008. AGI looks for a universal algorithm for learning and acting in
any environment, and has its roots in the work of Ray Solomonoff (1964), one of the atten-
dees of the original 1956 Dartmouth conference. Guaranteeing that what we create is really
Friendly AI is also a concern (Yudkowsky, 2008; Omohundro, 2008), one we will return to
FRIENDLY AI
in Chapter 26.
1.3.10
The availability of very large data sets (2001–present)
Throughout the 60-year history of computer science, the emphasis has been on the algorithm
as the main subject of study. But some recent work in AI suggests that for many problems, it
makes more sense to worry about the data and be less picky about what algorithm to apply.
This is true because of the increasing availability of very large data sources: for example,
trillions of words of English and billions of images from the Web (Kilgarriff and Grefenstette,
2006); or billions of base pairs of genomic sequences (Collins et al., 2003).
One inﬂuential paper in this line was Yarowsky’s (1995) work on word-sense disam-
biguation: given the use of the word “plant” in a sentence, does that refer to ﬂora or factory?
Previous approaches to the problem had relied on human-labeled examples combined with
machine learning algorithms. Yarowsky showed that the task can be done, with accuracy
above 96%, with no labeled examples at all. Instead, given a very large corpus of unanno-
tated text and just the dictionary deﬁnitions of the two senses—“works, industrial plant” and
“ﬂora, plant life”—one can label examples in the corpus, and from there bootstrap to learn

Chapter
1.
Introduction
new patterns that help label new examples. Banko and Brill (2001) show that techniques
like this perform even better as the amount of available text goes from a million words to a
billion and that the increase in performance from using more data exceeds any difference in
algorithm choice; a mediocre algorithm with 100 million words of unlabeled training data
outperforms the best known algorithm with 1 million words.
As another example, Hays and Efros (2007) discuss the problem of ﬁlling in holes in a
photograph. Suppose you use Photoshop to mask out an ex-friend from a group photo, but
now you need to ﬁll in the masked area with something that matches the background. Hays
and Efros deﬁned an algorithm that searches through a collection of photos to ﬁnd something
that will match. They found the performance of their algorithm was poor when they used
a collection of only ten thousand photos, but crossed a threshold into excellent performance
when they grew the collection to two million photos.
Work like this suggests that the “knowledge bottleneck” in AI—the problem of how to
express all the knowledge that a system needs—may be solved in many applications by learn-
ing methods rather than hand-coded knowledge engineering, provided the learning algorithms
have enough data to go on (Halevy et al., 2009). Reporters have noticed the surge of new ap-
plications and have written that “AI Winter” may be yielding to a new Spring (Havenstein,
2005). As Kurzweil (2005) writes, “today, many thousands of AI applications are deeply
embedded in the infrastructure of every industry.”
1.4
THE STATE OF THE ART
What can AI do today? A concise answer is difﬁcult because there are so many activities in
so many subﬁelds. Here we sample a few applications; others appear throughout the book.
Robotic vehicles: A driverless robotic car named STANLEY sped through the rough
terrain of the Mojave dessert at 22 mph, ﬁnishing the 132-mile course ﬁrst to win the 2005
DARPA Grand Challenge. STANLEY is a Volkswagen Touareg outﬁtted with cameras, radar,
and laser rangeﬁnders to sense the environment and onboard software to command the steer-
ing, braking, and acceleration (Thrun, 2006). The following year CMU’s BOSS won the Ur-
ban Challenge, safely driving in trafﬁc through the streets of a closed Air Force base, obeying
trafﬁc rules and avoiding pedestrians and other vehicles.
Speech recognition: A traveler calling United Airlines to book a ﬂight can have the en-
tire conversation guided by an automated speech recognition and dialog management system.
Autonomous planning and scheduling: A hundred million miles from Earth, NASA’s
Remote Agent program became the ﬁrst on-board autonomous planning program to control
the scheduling of operations for a spacecraft (Jonsson et al., 2000). REMOTE AGENT gen-
erated plans from high-level goals speciﬁed from the ground and monitored the execution of
those plans—detecting, diagnosing, and recovering from problems as they occurred. Succes-
sor program MAPGEN (Al-Chang et al., 2004) plans the daily operations for NASA’s Mars
Exploration Rovers, and MEXAR2 (Cesta et al., 2007) did mission planning—both logistics
and science planning—for the European Space Agency’s Mars Express mission in 2008.

Section 1.5.
Summary

Game playing: IBM’s DEEP BLUE became the ﬁrst computer program to defeat the
world champion in a chess match when it bested Garry Kasparov by a score of 3.5 to 2.5 in
an exhibition match (Goodman and Keene, 1997). Kasparov said that he felt a “new kind of
intelligence” across the board from him. Newsweek magazine described the match as “The
brain’s last stand.” The value of IBM’s stock increased by $18 billion. Human champions
studied Kasparov’s loss and were able to draw a few matches in subsequent years, but the
most recent human-computer matches have been won convincingly by the computer.
Spam ﬁghting: Each day, learning algorithms classify over a billion messages as spam,
saving the recipient from having to waste time deleting what, for many users, could comprise
80% or 90% of all messages, if not classiﬁed away by algorithms. Because the spammers are
continually updating their tactics, it is difﬁcult for a static programmed approach to keep up,
and learning algorithms work best (Sahami et al., 1998; Goodman and Heckerman, 2004).
Logistics planning: During the Persian Gulf crisis of 1991, U.S. forces deployed a
Dynamic Analysis and Replanning Tool, DART (Cross and Walker, 1994), to do automated
logistics planning and scheduling for transportation. This involved up to 50,000 vehicles,
cargo, and people at a time, and had to account for starting points, destinations, routes, and
conﬂict resolution among all parameters. The AI planning techniques generated in hours
a plan that would have taken weeks with older methods. The Defense Advanced Research
Project Agency (DARPA) stated that this single application more than paid back DARPA’s
30-year investment in AI.
Robotics: The iRobot Corporation has sold over two million Roomba robotic vacuum
cleaners for home use. The company also deploys the more rugged PackBot to Iraq and
Afghanistan, where it is used to handle hazardous materials, clear explosives, and identify
the location of snipers.
Machine Translation: A computer program automatically translates from Arabic to
English, allowing an English speaker to see the headline “Ardogan Conﬁrms That Turkey
Would Not Accept Any Pressure, Urging Them to Recognize Cyprus.” The program uses a
statistical model built from examples of Arabic-to-English translations and from examples of
English text totaling two trillion words (Brants et al., 2007). None of the computer scientists
on the team speak Arabic, but they do understand statistics and machine learning algorithms.
These are just a few examples of artiﬁcial intelligence systems that exist today. Not
magic or science ﬁction—but rather science, engineering, and mathematics, to which this
book provides an introduction.
1.5
SUMMARY
This chapter deﬁnes AI and establishes the cultural background against which it has devel-
oped. Some of the important points are as follows:
• Different people approach AI with different goals in mind. Two important questions to
ask are: Are you concerned with thinking or behavior? Do you want to model humans
or work from an ideal standard?

INTELLIGENT AGENTS
In which we discuss the nature of agents, perfect or otherwise, the diversity of
environments, and the resulting menagerie of agent types.
Chapter 1 identiﬁed the concept of rational agents as central to our approach to artiﬁcial
intelligence. In this chapter, we make this notion more concrete. We will see that the concept
of rationality can be applied to a wide variety of agents operating in any imaginable environ-
ment. Our plan in this book is to use this concept to develop a small set of design principles
for building successful agents—systems that can reasonably be called intelligent.
We begin by examining agents, environments, and the coupling between them. The
observation that some agents behave better than others leads naturally to the idea of a rational
agent—one that behaves as well as possible. How well an agent can behave depends on
the nature of the environment; some environments are more difﬁcult than others. We give a
crude categorization of environments and show how properties of an environment inﬂuence
the design of suitable agents for that environment. We describe a number of basic “skeleton”
agent designs, which we ﬂesh out in the rest of the book.
2.1
AGENTS AND ENVIRONMENTS
An agent is anything that can be viewed as perceiving its environment through sensors and
ENVIRONMENT
SENSOR
acting upon that environment through actuators. This simple idea is illustrated in Figure 2.1.
ACTUATOR
A human agent has eyes, ears, and other organs for sensors and hands, legs, vocal tract, and so
on for actuators. A robotic agent might have cameras and infrared range ﬁnders for sensors
and various motors for actuators. A software agent receives keystrokes, ﬁle contents, and
network packets as sensory inputs and acts on the environment by displaying on the screen,
writing ﬁles, and sending network packets.
We use the term percept to refer to the agent’s perceptual inputs at any given instant. An
PERCEPT
agent’s percept sequence is the complete history of everything the agent has ever perceived.
PERCEPT SEQUENCE
In general, an agent’s choice of action at any given instant can depend on the entire percept
sequence observed to date, but not on anything it hasn’t perceived. By specifying the agent’s
choice of action for every possible percept sequence, we have said more or less everything

Section 2.1.
Agents and Environments

Agent
Sensors
Actuators
Environment
Percepts
Actions
?
Figure 2.1
Agents interact with environments through sensors and actuators.
there is to say about the agent. Mathematically speaking, we say that an agent’s behavior is
described by the agent function that maps any given percept sequence to an action.
AGENT FUNCTION
We can imagine tabulating the agent function that describes any given agent; for most
agents, this would be a very large table—inﬁnite, in fact, unless we place a bound on the
length of percept sequences we want to consider. Given an agent to experiment with, we can,
in principle, construct this table by trying out all possible percept sequences and recording
which actions the agent does in response.1 The table is, of course, an external characterization
of the agent. Internally, the agent function for an artiﬁcial agent will be implemented by an
agent program. It is important to keep these two ideas distinct. The agent function is an
AGENT PROGRAM
abstract mathematical description; the agent program is a concrete implementation, running
within some physical system.
To illustrate these ideas, we use a very simple example—the vacuum-cleaner world
shown in Figure 2.2. This world is so simple that we can describe everything that happens;
it’s also a made-up world, so we can invent many variations. This particular world has just two
locations: squares A and B. The vacuum agent perceives which square it is in and whether
there is dirt in the square. It can choose to move left, move right, suck up the dirt, or do
nothing. One very simple agent function is the following: if the current square is dirty, then
suck; otherwise, move to the other square. A partial tabulation of this agent function is shown
in Figure 2.3 and an agent program that implements it appears in Figure 2.8 on page 48.
Looking at Figure 2.3, we see that various vacuum-world agents can be deﬁned simply
by ﬁlling in the right-hand column in various ways. The obvious question, then, is this: What
is the right way to ﬁll out the table? In other words, what makes an agent good or bad,
intelligent or stupid? We answer these questions in the next section.
1 If the agent uses some randomization to choose its actions, then we would have to try each sequence many
times to identify the probability of each action. One might imagine that acting randomly is rather silly, but we
show later in this chapter that it can be very intelligent.

Chapter
2.
Intelligent Agents
A
B
Figure 2.2
A vacuum-cleaner world with just two locations.
Percept sequence
Action
[A, Clean]
Right
[A, Dirty]
Suck
[B, Clean]
Left
[B, Dirty]
Suck
[A, Clean], [A, Clean]
Right
[A, Clean], [A, Dirty]
Suck
...
...
[A, Clean], [A, Clean], [A, Clean]
Right
[A, Clean], [A, Clean], [A, Dirty]
Suck
...
...
Figure 2.3
Partial tabulation of a simple agent function for the vacuum-cleaner world
shown in Figure 2.2.
Before closing this section, we should emphasize that the notion of an agent is meant to
be a tool for analyzing systems, not an absolute characterization that divides the world into
agents and non-agents. One could view a hand-held calculator as an agent that chooses the
action of displaying “4” when given the percept sequence “2 + 2 =,” but such an analysis
would hardly aid our understanding of the calculator. In a sense, all areas of engineering can
be seen as designing artifacts that interact with the world; AI operates at (what the authors
consider to be) the most interesting end of the spectrum, where the artifacts have signiﬁcant
computational resources and the task environment requires nontrivial decision making.
2.2
GOOD BEHAVIOR: THE CONCEPT OF RATIONALITY
A rational agent is one that does the right thing—conceptually speaking, every entry in the
RATIONAL AGENT
table for the agent function is ﬁlled out correctly. Obviously, doing the right thing is better
than doing the wrong thing, but what does it mean to do the right thing?

Section 2.2.
Good Behavior: The Concept of Rationality

We answer this age-old question in an age-old way: by considering the consequences
of the agent’s behavior. When an agent is plunked down in an environment, it generates a
sequence of actions according to the percepts it receives. This sequence of actions causes the
environment to go through a sequence of states. If the sequence is desirable, then the agent
has performed well. This notion of desirability is captured by a performance measure that
PERFORMANCE
MEASURE
evaluates any given sequence of environment states.
Notice that we said environment states, not agent states. If we deﬁne success in terms
of agent’s opinion of its own performance, an agent could achieve perfect rationality simply
by deluding itself that its performance was perfect. Human agents in particular are notorious
for “sour grapes”—believing they did not really want something (e.g., a Nobel Prize) after
not getting it.
Obviously, there is not one ﬁxed performance measure for all tasks and agents; typically,
a designer will devise one appropriate to the circumstances. This is not as easy as it sounds.
Consider, for example, the vacuum-cleaner agent from the preceding section. We might
propose to measure performance by the amount of dirt cleaned up in a single eight-hour shift.
With a rational agent, of course, what you ask for is what you get. A rational agent can
maximize this performance measure by cleaning up the dirt, then dumping it all on the ﬂoor,
then cleaning it up again, and so on. A more suitable performance measure would reward the
agent for having a clean ﬂoor. For example, one point could be awarded for each clean square
at each time step (perhaps with a penalty for electricity consumed and noise generated). As
a general rule, it is better to design performance measures according to what one actually
wants in the environment, rather than according to how one thinks the agent should behave.
Even when the obvious pitfalls are avoided, there remain some knotty issues to untangle.
For example, the notion of “clean ﬂoor” in the preceding paragraph is based on average
cleanliness over time. Yet the same average cleanliness can be achieved by two different
agents, one of which does a mediocre job all the time while the other cleans energetically but
takes long breaks. Which is preferable might seem to be a ﬁne point of janitorial science, but
in fact it is a deep philosophical question with far-reaching implications. Which is better—
a reckless life of highs and lows, or a safe but humdrum existence? Which is better—an
economy where everyone lives in moderate poverty, or one in which some live in plenty
while others are very poor? We leave these questions as an exercise for the diligent reader.
2.2.1
Rationality
What is rational at any given time depends on four things:
• The performance measure that deﬁnes the criterion of success.
• The agent’s prior knowledge of the environment.
• The actions that the agent can perform.
• The agent’s percept sequence to date.
This leads to a deﬁnition of a rational agent:
DEFINITION OF A
RATIONAL AGENT
For each possible percept sequence, a rational agent should select an action that is ex-
pected to maximize its performance measure, given the evidence provided by the percept
sequence and whatever built-in knowledge the agent has.

Chapter
2.
Intelligent Agents
Consider the simple vacuum-cleaner agent that cleans a square if it is dirty and moves to the
other square if not; this is the agent function tabulated in Figure 2.3. Is this a rational agent?
That depends! First, we need to say what the performance measure is, what is known about
the environment, and what sensors and actuators the agent has. Let us assume the following:
• The performance measure awards one point for each clean square at each time step,
over a “lifetime” of 1000 time steps.
• The “geography” of the environment is known a priori (Figure 2.2) but the dirt distri-
bution and the initial location of the agent are not. Clean squares stay clean and sucking
cleans the current square. The Left and Right actions move the agent left and right
except when this would take the agent outside the environment, in which case the agent
remains where it is.
• The only available actions are Left, Right, and Suck.
• The agent correctly perceives its location and whether that location contains dirt.
We claim that under these circumstances the agent is indeed rational; its expected perfor-
mance is at least as high as any other agent’s. Exercise 2.2 asks you to prove this.
One can see easily that the same agent would be irrational under different circum-
stances. For example, once all the dirt is cleaned up, the agent will oscillate needlessly back
and forth; if the performance measure includes a penalty of one point for each movement left
or right, the agent will fare poorly. A better agent for this case would do nothing once it is
sure that all the squares are clean. If clean squares can become dirty again, the agent should
occasionally check and re-clean them if needed. If the geography of the environment is un-
known, the agent will need to explore it rather than stick to squares A and B. Exercise 2.2
asks you to design agents for these cases.
2.2.2
Omniscience, learning, and autonomy
We need to be careful to distinguish between rationality and omniscience. An omniscient
OMNISCIENCE
agent knows the actual outcome of its actions and can act accordingly; but omniscience is
impossible in reality. Consider the following example: I am walking along the Champs
Elys´ees one day and I see an old friend across the street. There is no trafﬁc nearby and I’m
not otherwise engaged, so, being rational, I start to cross the street. Meanwhile, at 33,000
feet, a cargo door falls off a passing airliner,2 and before I make it to the other side of the
street I am ﬂattened. Was I irrational to cross the street? It is unlikely that my obituary would
read “Idiot attempts to cross street.”
This example shows that rationality is not the same as perfection. Rationality max-
imizes expected performance, while perfection maximizes actual performance. Retreating
from a requirement of perfection is not just a question of being fair to agents. The point is
that if we expect an agent to do what turns out to be the best action after the fact, it will be
impossible to design an agent to fulﬁll this speciﬁcation—unless we improve the performance
of crystal balls or time machines.
2 See N. Henderson, “New door latches urged for Boeing 747 jumbo jets,” Washington Post, August 24, 1989.

Section 2.2.
Good Behavior: The Concept of Rationality

Our deﬁnition of rationality does not require omniscience, then, because the rational
choice depends only on the percept sequence to date. We must also ensure that we haven’t
inadvertently allowed the agent to engage in decidedly underintelligent activities. For exam-
ple, if an agent does not look both ways before crossing a busy road, then its percept sequence
will not tell it that there is a large truck approaching at high speed. Does our deﬁnition of
rationality say that it’s now OK to cross the road? Far from it! First, it would not be rational
to cross the road given this uninformative percept sequence: the risk of accident from cross-
ing without looking is too great. Second, a rational agent should choose the “looking” action
before stepping into the street, because looking helps maximize the expected performance.
Doing actions in order to modify future percepts—sometimes called information gather-
ing—is an important part of rationality and is covered in depth in Chapter 16. A second
INFORMATION
GATHERING
example of information gathering is provided by the exploration that must be undertaken by
EXPLORATION
a vacuum-cleaning agent in an initially unknown environment.
Our deﬁnition requires a rational agent not only to gather information but also to learn
LEARNING
as much as possible from what it perceives. The agent’s initial conﬁguration could reﬂect
some prior knowledge of the environment, but as the agent gains experience this may be
modiﬁed and augmented. There are extreme cases in which the environment is completely
known a priori. In such cases, the agent need not perceive or learn; it simply acts correctly.
Of course, such agents are fragile. Consider the lowly dung beetle. After digging its nest and
laying its eggs, it fetches a ball of dung from a nearby heap to plug the entrance. If the ball of
dung is removed from its grasp en route, the beetle continues its task and pantomimes plug-
ging the nest with the nonexistent dung ball, never noticing that it is missing. Evolution has
built an assumption into the beetle’s behavior, and when it is violated, unsuccessful behavior
results. Slightly more intelligent is the sphex wasp. The female sphex will dig a burrow, go
out and sting a caterpillar and drag it to the burrow, enter the burrow again to check all is
well, drag the caterpillar inside, and lay its eggs. The caterpillar serves as a food source when
the eggs hatch. So far so good, but if an entomologist moves the caterpillar a few inches
away while the sphex is doing the check, it will revert to the “drag” step of its plan and will
continue the plan without modiﬁcation, even after dozens of caterpillar-moving interventions.
The sphex is unable to learn that its innate plan is failing, and thus will not change it.
To the extent that an agent relies on the prior knowledge of its designer rather than
on its own percepts, we say that the agent lacks autonomy. A rational agent should be
AUTONOMY
autonomous—it should learn what it can to compensate for partial or incorrect prior knowl-
edge. For example, a vacuum-cleaning agent that learns to foresee where and when additional
dirt will appear will do better than one that does not. As a practical matter, one seldom re-
quires complete autonomy from the start: when the agent has had little or no experience, it
would have to act randomly unless the designer gave some assistance. So, just as evolution
provides animals with enough built-in reﬂexes to survive long enough to learn for themselves,
it would be reasonable to provide an artiﬁcial intelligent agent with some initial knowledge
as well as an ability to learn. After sufﬁcient experience of its environment, the behavior
of a rational agent can become effectively independent of its prior knowledge. Hence, the
incorporation of learning allows one to design a single rational agent that will succeed in a
vast variety of environments.

Chapter
2.
Intelligent Agents
2.3
THE NATURE OF ENVIRONMENTS
Now that we have a deﬁnition of rationality, we are almost ready to think about building
rational agents. First, however, we must think about task environments, which are essen-
TASK ENVIRONMENT
tially the “problems” to which rational agents are the “solutions.” We begin by showing how
to specify a task environment, illustrating the process with a number of examples. We then
show that task environments come in a variety of ﬂavors. The ﬂavor of the task environment
directly affects the appropriate design for the agent program.
2.3.1
Specifying the task environment
In our discussion of the rationality of the simple vacuum-cleaner agent, we had to specify
the performance measure, the environment, and the agent’s actuators and sensors. We group
all these under the heading of the task environment. For the acronymically minded, we call
this the PEAS (Performance, Environment, Actuators, Sensors) description. In designing an
PEAS
agent, the ﬁrst step must always be to specify the task environment as fully as possible.
The vacuum world was a simple example; let us consider a more complex problem: an
automated taxi driver. We should point out, before the reader becomes alarmed, that a fully
automated taxi is currently somewhat beyond the capabilities of existing technology. (page 28
describes an existing driving robot.) The full driving task is extremely open-ended. There is
no limit to the novel combinations of circumstances that can arise—another reason we chose
it as a focus for discussion. Figure 2.4 summarizes the PEAS description for the taxi’s task
environment. We discuss each element in more detail in the following paragraphs.
Agent Type
Performance
Measure
Environment
Actuators
Sensors
Taxi driver
Safe, fast, legal,
comfortable trip,
maximize proﬁts
Roads, other
trafﬁc,
pedestrians,
customers
Steering,
accelerator,
brake, signal,
horn, display
Cameras, sonar,
speedometer,
GPS, odometer,
accelerometer,
engine sensors,
keyboard
Figure 2.4
PEAS description of the task environment for an automated taxi.
First, what is the performance measure to which we would like our automated driver
to aspire? Desirable qualities include getting to the correct destination; minimizing fuel con-
sumption and wear and tear; minimizing the trip time or cost; minimizing violations of trafﬁc
laws and disturbances to other drivers; maximizing safety and passenger comfort; maximiz-
ing proﬁts. Obviously, some of these goals conﬂict, so tradeoffs will be required.
Next, what is the driving environment that the taxi will face? Any taxi driver must
deal with a variety of roads, ranging from rural lanes and urban alleys to 12-lane freeways.
The roads contain other trafﬁc, pedestrians, stray animals, road works, police cars, puddles,

Section 2.3.
The Nature of Environments

and potholes. The taxi must also interact with potential and actual passengers. There are also
some optional choices. The taxi might need to operate in Southern California, where snow
is seldom a problem, or in Alaska, where it seldom is not. It could always be driving on the
right, or we might want it to be ﬂexible enough to drive on the left when in Britain or Japan.
Obviously, the more restricted the environment, the easier the design problem.
The actuators for an automated taxi include those available to a human driver: control
over the engine through the accelerator and control over steering and braking. In addition, it
will need output to a display screen or voice synthesizer to talk back to the passengers, and
perhaps some way to communicate with other vehicles, politely or otherwise.
The basic sensors for the taxi will include one or more controllable video cameras so
that it can see the road; it might augment these with infrared or sonar sensors to detect dis-
tances to other cars and obstacles. To avoid speeding tickets, the taxi should have a speedome-
ter, and to control the vehicle properly, especially on curves, it should have an accelerometer.
To determine the mechanical state of the vehicle, it will need the usual array of engine, fuel,
and electrical system sensors. Like many human drivers, it might want a global positioning
system (GPS) so that it doesn’t get lost. Finally, it will need a keyboard or microphone for
the passenger to request a destination.
In Figure 2.5, we have sketched the basic PEAS elements for a number of additional
agent types. Further examples appear in Exercise 2.4. It may come as a surprise to some read-
ers that our list of agent types includes some programs that operate in the entirely artiﬁcial
environment deﬁned by keyboard input and character output on a screen. “Surely,” one might
say, “this is not a real environment, is it?” In fact, what matters is not the distinction between
“real” and “artiﬁcial” environments, but the complexity of the relationship among the behav-
ior of the agent, the percept sequence generated by the environment, and the performance
measure. Some “real” environments are actually quite simple. For example, a robot designed
to inspect parts as they come by on a conveyor belt can make use of a number of simplifying
assumptions: that the lighting is always just so, that the only thing on the conveyor belt will
be parts of a kind that it knows about, and that only two actions (accept or reject) are possible.
In contrast, some software agents (or software robots or softbots) exist in rich, unlim-
SOFTWARE AGENT
SOFTBOT
ited domains. Imagine a softbot Web site operator designed to scan Internet news sources and
show the interesting items to its users, while selling advertising space to generate revenue.
To do well, that operator will need some natural language processing abilities, it will need
to learn what each user and advertiser is interested in, and it will need to change its plans
dynamically—for example, when the connection for one news source goes down or when a
new one comes online. The Internet is an environment whose complexity rivals that of the
physical world and whose inhabitants include many artiﬁcial and human agents.
2.3.2
Properties of task environments
The range of task environments that might arise in AI is obviously vast. We can, however,
identify a fairly small number of dimensions along which task environments can be catego-
rized. These dimensions determine, to a large extent, the appropriate agent design and the
applicability of each of the principal families of techniques for agent implementation. First,

Chapter
2.
Intelligent Agents
Agent Type
Performance
Measure
Environment
Actuators
Sensors
Medical
diagnosis system
Healthy patient,
reduced costs
Patient, hospital,
staff
Display of
questions, tests,
diagnoses,
treatments,
referrals
Keyboard entry
of symptoms,
ﬁndings, patient’s
answers
Satellite image
analysis system
Correct image
categorization
Downlink from
orbiting satellite
Display of scene
categorization
Color pixel
arrays
Part-picking
robot
Percentage of
parts in correct
bins
Conveyor belt
with parts; bins
Jointed arm and
hand
Camera, joint
angle sensors
Reﬁnery
controller
Purity, yield,
safety
Reﬁnery,
operators
Valves, pumps,
heaters, displays
Temperature,
pressure,
chemical sensors
Interactive
English tutor
Student’s score
on test
Set of students,
testing agency
Display of
exercises,
suggestions,
corrections
Keyboard entry
Figure 2.5
Examples of agent types and their PEAS descriptions.
we list the dimensions, then we analyze several task environments to illustrate the ideas. The
deﬁnitions here are informal; later chapters provide more precise statements and examples of
each kind of environment.
Fully observable vs. partially observable: If an agent’s sensors give it access to the
FULLY OBSERVABLE
PARTIALLY
OBSERVABLE
complete state of the environment at each point in time, then we say that the task environ-
ment is fully observable. A task environment is effectively fully observable if the sensors
detect all aspects that are relevant to the choice of action; relevance, in turn, depends on the
performance measure. Fully observable environments are convenient because the agent need
not maintain any internal state to keep track of the world. An environment might be partially
observable because of noisy and inaccurate sensors or because parts of the state are simply
missing from the sensor data—for example, a vacuum agent with only a local dirt sensor
cannot tell whether there is dirt in other squares, and an automated taxi cannot see what other
drivers are thinking. If the agent has no sensors at all then the environment is unobserv-
able. One might think that in such cases the agent’s plight is hopeless, but, as we discuss in
UNOBSERVABLE
Chapter 4, the agent’s goals may still be achievable, sometimes with certainty.
Single agent vs. multiagent: The distinction between single-agent and multiagent en-
SINGLE AGENT
MULTIAGENT

Section 2.3.
The Nature of Environments

vironments may seem simple enough. For example, an agent solving a crossword puzzle by
itself is clearly in a single-agent environment, whereas an agent playing chess is in a two-
agent environment. There are, however, some subtle issues. First, we have described how an
entity may be viewed as an agent, but we have not explained which entities must be viewed
as agents. Does an agent A (the taxi driver for example) have to treat an object B (another
vehicle) as an agent, or can it be treated merely as an object behaving according to the laws of
physics, analogous to waves at the beach or leaves blowing in the wind? The key distinction
is whether B’s behavior is best described as maximizing a performance measure whose value
depends on agent A’s behavior. For example, in chess, the opponent entity B is trying to
maximize its performance measure, which, by the rules of chess, minimizes agent A’s per-
formance measure. Thus, chess is a competitive multiagent environment. In the taxi-driving
COMPETITIVE
environment, on the other hand, avoiding collisions maximizes the performance measure of
all agents, so it is a partially cooperative multiagent environment. It is also partially com-
COOPERATIVE
petitive because, for example, only one car can occupy a parking space. The agent-design
problems in multiagent environments are often quite different from those in single-agent en-
vironments; for example, communication often emerges as a rational behavior in multiagent
environments; in some competitive environments, randomized behavior is rational because
it avoids the pitfalls of predictability.
Deterministic vs. stochastic. If the next state of the environment is completely deter-
DETERMINISTIC
STOCHASTIC
mined by the current state and the action executed by the agent, then we say the environment
is deterministic; otherwise, it is stochastic. In principle, an agent need not worry about uncer-
tainty in a fully observable, deterministic environment. (In our deﬁnition, we ignore uncer-
tainty that arises purely from the actions of other agents in a multiagent environment; thus,
a game can be deterministic even though each agent may be unable to predict the actions of
the others.) If the environment is partially observable, however, then it could appear to be
stochastic. Most real situations are so complex that it is impossible to keep track of all the
unobserved aspects; for practical purposes, they must be treated as stochastic. Taxi driving is
clearly stochastic in this sense, because one can never predict the behavior of trafﬁc exactly;
moreover, one’s tires blow out and one’s engine seizes up without warning. The vacuum
world as we described it is deterministic, but variations can include stochastic elements such
as randomly appearing dirt and an unreliable suction mechanism (Exercise 2.13). We say an
environment is uncertain if it is not fully observable or not deterministic. One ﬁnal note:
UNCERTAIN
our use of the word “stochastic” generally implies that uncertainty about outcomes is quan-
tiﬁed in terms of probabilities; a nondeterministic environment is one in which actions are
NONDETERMINISTIC
characterized by their possible outcomes, but no probabilities are attached to them. Nonde-
terministic environment descriptions are usually associated with performance measures that
require the agent to succeed for all possible outcomes of its actions.
Episodic vs. sequential: In an episodic task environment, the agent’s experience is
EPISODIC
SEQUENTIAL
divided into atomic episodes. In each episode the agent receives a percept and then performs
a single action. Crucially, the next episode does not depend on the actions taken in previous
episodes. Many classiﬁcation tasks are episodic. For example, an agent that has to spot
defective parts on an assembly line bases each decision on the current part, regardless of
previous decisions; moreover, the current decision doesn’t affect whether the next part is

Chapter
2.
Intelligent Agents
defective. In sequential environments, on the other hand, the current decision could affect
all future decisions.3 Chess and taxi driving are sequential: in both cases, short-term actions
can have long-term consequences. Episodic environments are much simpler than sequential
environments because the agent does not need to think ahead.
Static vs. dynamic: If the environment can change while an agent is deliberating, then
STATIC
DYNAMIC
we say the environment is dynamic for that agent; otherwise, it is static. Static environments
are easy to deal with because the agent need not keep looking at the world while it is deciding
on an action, nor need it worry about the passage of time. Dynamic environments, on the
other hand, are continuously asking the agent what it wants to do; if it hasn’t decided yet,
that counts as deciding to do nothing. If the environment itself does not change with the
passage of time but the agent’s performance score does, then we say the environment is
semidynamic. Taxi driving is clearly dynamic: the other cars and the taxi itself keep moving
SEMIDYNAMIC
while the driving algorithm dithers about what to do next. Chess, when played with a clock,
is semidynamic. Crossword puzzles are static.
Discrete vs. continuous: The discrete/continuous distinction applies to the state of the
DISCRETE
CONTINUOUS
environment, to the way time is handled, and to the percepts and actions of the agent. For
example, the chess environment has a ﬁnite number of distinct states (excluding the clock).
Chess also has a discrete set of percepts and actions. Taxi driving is a continuous-state and
continuous-time problem: the speed and location of the taxi and of the other vehicles sweep
through a range of continuous values and do so smoothly over time. Taxi-driving actions are
also continuous (steering angles, etc.). Input from digital cameras is discrete, strictly speak-
ing, but is typically treated as representing continuously varying intensities and locations.
Known vs. unknown: Strictly speaking, this distinction refers not to the environment
KNOWN
UNKNOWN
itself but to the agent’s (or designer’s) state of knowledge about the “laws of physics” of
the environment. In a known environment, the outcomes (or outcome probabilities if the
environment is stochastic) for all actions are given. Obviously, if the environment is unknown,
the agent will have to learn how it works in order to make good decisions. Note that the
distinction between known and unknown environments is not the same as the one between
fully and partially observable environments. It is quite possible for a known environment
to be partially observable—for example, in solitaire card games, I know the rules but am
still unable to see the cards that have not yet been turned over. Conversely, an unknown
environment can be fully observable—in a new video game, the screen may show the entire
game state but I still don’t know what the buttons do until I try them.
As one might expect, the hardest case is partially observable, multiagent, stochastic,
sequential, dynamic, continuous, and unknown. Taxi driving is hard in all these senses, except
that for the most part the driver’s environment is known. Driving a rented car in a new country
with unfamiliar geography and trafﬁc laws is a lot more exciting.
Figure 2.6 lists the properties of a number of familiar environments. Note that the
answers are not always cut and dried. For example, we describe the part-picking robot as
episodic, because it normally considers each part in isolation. But if one day there is a large
3 The word “sequential” is also used in computer science as the antonym of “parallel.” The two meanings are
largely unrelated.

Section 2.3.
The Nature of Environments

Task Environment
Observable Agents Deterministic
Episodic
Static
Discrete
Crossword puzzle
Fully
Single Deterministic Sequential
Static
Discrete
Chess with a clock
Fully
Multi
Deterministic Sequential
Semi
Discrete
Poker
Partially
Multi
Stochastic
Sequential
Static
Discrete
Backgammon
Fully
Multi
Stochastic
Sequential
Static
Discrete
Taxi driving
Partially
Multi
Stochastic
Sequential Dynamic Continuous
Medical diagnosis
Partially
Single
Stochastic
Sequential Dynamic Continuous
Image analysis
Fully
Single Deterministic
Episodic
Semi
Continuous
Part-picking robot
Partially
Single
Stochastic
Episodic
Dynamic Continuous
Reﬁnery controller
Partially
Single
Stochastic
Sequential Dynamic Continuous
Interactive English tutor
Partially
Multi
Stochastic
Sequential Dynamic
Discrete
Figure 2.6
Examples of task environments and their characteristics.
batch of defective parts, the robot should learn from several observations that the distribution
of defects has changed, and should modify its behavior for subsequent parts. We have not
included a “known/unknown” column because, as explained earlier, this is not strictly a prop-
erty of the environment. For some environments, such as chess and poker, it is quite easy to
supply the agent with full knowledge of the rules, but it is nonetheless interesting to consider
how an agent might learn to play these games without such knowledge.
Several of the answers in the table depend on how the task environment is deﬁned. We
have listed the medical-diagnosis task as single-agent because the disease process in a patient
is not proﬁtably modeled as an agent; but a medical-diagnosis system might also have to
deal with recalcitrant patients and skeptical staff, so the environment could have a multiagent
aspect. Furthermore, medical diagnosis is episodic if one conceives of the task as selecting a
diagnosis given a list of symptoms; the problem is sequential if the task can include proposing
a series of tests, evaluating progress over the course of treatment, and so on. Also, many
environments are episodic at higher levels than the agent’s individual actions. For example,
a chess tournament consists of a sequence of games; each game is an episode because (by
and large) the contribution of the moves in one game to the agent’s overall performance is
not affected by the moves in its previous game. On the other hand, decision making within a
single game is certainly sequential.
The code repository associated with this book (aima.cs.berkeley.edu) includes imple-
mentations of a number of environments, together with a general-purpose environment simu-
lator that places one or more agents in a simulated environment, observes their behavior over
time, and evaluates them according to a given performance measure. Such experiments are
often carried out not for a single environment but for many environments drawn from an en-
vironment class. For example, to evaluate a taxi driver in simulated trafﬁc, we would want to
ENVIRONMENT
CLASS
run many simulations with different trafﬁc, lighting, and weather conditions. If we designed
the agent for a single scenario, we might be able to take advantage of speciﬁc properties
of the particular case but might not identify a good design for driving in general. For this

Chapter
2.
Intelligent Agents
reason, the code repository also includes an environment generator for each environment
ENVIRONMENT
GENERATOR
class that selects particular environments (with certain likelihoods) in which to run the agent.
For example, the vacuum environment generator initializes the dirt pattern and agent location
randomly. We are then interested in the agent’s average performance over the environment
class. A rational agent for a given environment class maximizes this average performance.
Exercises 2.8 to 2.13 take you through the process of developing an environment class and
evaluating various agents therein.
2.4
THE STRUCTURE OF AGENTS
So far we have talked about agents by describing behavior—the action that is performed after
any given sequence of percepts. Now we must bite the bullet and talk about how the insides
work. The job of AI is to design an agent program that implements the agent function—
AGENT PROGRAM
the mapping from percepts to actions. We assume this program will run on some sort of
computing device with physical sensors and actuators—we call this the architecture:
ARCHITECTURE
agent = architecture + program .
Obviously, the program we choose has to be one that is appropriate for the architecture. If the
program is going to recommend actions like Walk, the architecture had better have legs. The
architecture might be just an ordinary PC, or it might be a robotic car with several onboard
computers, cameras, and other sensors. In general, the architecture makes the percepts from
the sensors available to the program, runs the program, and feeds the program’s action choices
to the actuators as they are generated. Most of this book is about designing agent programs,
although Chapters 24 and 25 deal directly with the sensors and actuators.
2.4.1
Agent programs
The agent programs that we design in this book all have the same skeleton: they take the
current percept as input from the sensors and return an action to the actuators.4 Notice the
difference between the agent program, which takes the current percept as input, and the agent
function, which takes the entire percept history. The agent program takes just the current
percept as input because nothing more is available from the environment; if the agent’s actions
need to depend on the entire percept sequence, the agent will have to remember the percepts.
We describe the agent programs in the simple pseudocode language that is deﬁned in
Appendix B. (The online code repository contains implementations in real programming
languages.) For example, Figure 2.7 shows a rather trivial agent program that keeps track of
the percept sequence and then uses it to index into a table of actions to decide what to do.
The table—an example of which is given for the vacuum world in Figure 2.3—represents
explicitly the agent function that the agent program embodies. To build a rational agent in
4 There are other choices for the agent program skeleton; for example, we could have the agent programs be
coroutines that run asynchronously with the environment. Each such coroutine has an input and output port and
consists of a loop that reads the input port for percepts and writes actions to the output port.

Section 2.4.
The Structure of Agents

function TABLE-DRIVEN-AGENT(percept) returns an action
persistent: percepts, a sequence, initially empty
table, a table of actions, indexed by percept sequences, initially fully speciﬁed
append percept to the end of percepts
action ←LOOKUP(percepts,table)
return action
Figure 2.7
The TABLE-DRIVEN-AGENT program is invoked for each new percept and
returns an action each time. It retains the complete percept sequence in memory.
this way, we as designers must construct a table that contains the appropriate action for every
possible percept sequence.
It is instructive to consider why the table-driven approach to agent construction is
doomed to failure. Let P be the set of possible percepts and let T be the lifetime of the
agent (the total number of percepts it will receive). The lookup table will contain T
t = 1 |P|t
entries. Consider the automated taxi: the visual input from a single camera comes in at the
rate of roughly 27 megabytes per second (30 frames per second, 640 × 480 pixels with 24
bits of color information). This gives a lookup table with over 10250,000,000,000 entries for an
hour’s driving. Even the lookup table for chess—a tiny, well-behaved fragment of the real
world—would have at least 10150 entries. The daunting size of these tables (the number of
atoms in the observable universe is less than 1080) means that (a) no physical agent in this
universe will have the space to store the table, (b) the designer would not have time to create
the table, (c) no agent could ever learn all the right table entries from its experience, and (d)
even if the environment is simple enough to yield a feasible table size, the designer still has
no guidance about how to ﬁll in the table entries.
Despite all this, TABLE-DRIVEN-AGENT does do what we want: it implements the
desired agent function. The key challenge for AI is to ﬁnd out how to write programs that,
to the extent possible, produce rational behavior from a smallish program rather than from
a vast table. We have many examples showing that this can be done successfully in other
areas: for example, the huge tables of square roots used by engineers and schoolchildren prior
to the 1970s have now been replaced by a ﬁve-line program for Newton’s method running
on electronic calculators. The question is, can AI do for general intelligent behavior what
Newton did for square roots? We believe the answer is yes.
In the remainder of this section, we outline four basic kinds of agent programs that
embody the principles underlying almost all intelligent systems:
• Simple reﬂex agents;
• Model-based reﬂex agents;
• Goal-based agents; and
• Utility-based agents.
Each kind of agent program combines particular components in particular ways to generate
actions. Section 2.4.6 explains in general terms how to convert all these agents into learning

Chapter
2.
Intelligent Agents
function REFLEX-VACUUM-AGENT([location,status]) returns an action
if status = Dirty then return Suck
else if location = A then return Right
else if location = B then return Left
Figure 2.8
The agent program for a simple reﬂex agent in the two-state vacuum environ-
ment. This program implements the agent function tabulated in Figure 2.3.
agents that can improve the performance of their components so as to generate better actions.
Finally, Section 2.4.7 describes the variety of ways in which the components themselves can
be represented within the agent. This variety provides a major organizing principle for the
ﬁeld and for the book itself.
2.4.2
Simple reﬂex agents
The simplest kind of agent is the simple reﬂex agent. These agents select actions on the basis
SIMPLE REFLEX
AGENT
of the current percept, ignoring the rest of the percept history. For example, the vacuum agent
whose agent function is tabulated in Figure 2.3 is a simple reﬂex agent, because its decision
is based only on the current location and on whether that location contains dirt. An agent
program for this agent is shown in Figure 2.8.
Notice that the vacuum agent program is very small indeed compared to the correspond-
ing table. The most obvious reduction comes from ignoring the percept history, which cuts
down the number of possibilities from 4T to just 4. A further, small reduction comes from
the fact that when the current square is dirty, the action does not depend on the location.
Simple reﬂex behaviors occur even in more complex environments. Imagine yourself
as the driver of the automated taxi. If the car in front brakes and its brake lights come on, then
you should notice this and initiate braking. In other words, some processing is done on the
visual input to establish the condition we call “The car in front is braking.” Then, this triggers
some established connection in the agent program to the action “initiate braking.” We call
such a connection a condition–action rule,5 written as
CONDITION–ACTION
RULE
if car-in-front-is-braking then initiate-braking.
Humans also have many such connections, some of which are learned responses (as for driv-
ing) and some of which are innate reﬂexes (such as blinking when something approaches the
eye). In the course of the book, we show several different ways in which such connections
can be learned and implemented.
The program in Figure 2.8 is speciﬁc to one particular vacuum environment. A more
general and ﬂexible approach is ﬁrst to build a general-purpose interpreter for condition–
action rules and then to create rule sets for speciﬁc task environments. Figure 2.9 gives the
structure of this general program in schematic form, showing how the condition–action rules
allow the agent to make the connection from percept to action. (Do not worry if this seems
5 Also called situation–action rules, productions, or if–then rules.

Section 2.4.
The Structure of Agents

Agent
Environment
Sensors
What action I
should do now
Condition-action rules
Actuators
What the world
is like now
Figure 2.9
Schematic diagram of a simple reﬂex agent.
function SIMPLE-REFLEX-AGENT(percept) returns an action
persistent: rules, a set of condition–action rules
state ←INTERPRET-INPUT(percept)
rule ←RULE-MATCH(state,rules)
action ←rule.ACTION
return action
Figure 2.10
A simple reﬂex agent. It acts according to a rule whose condition matches
the current state, as deﬁned by the percept.
trivial; it gets more interesting shortly.) We use rectangles to denote the current internal state
of the agent’s decision process, and ovals to represent the background information used in
the process. The agent program, which is also very simple, is shown in Figure 2.10. The
INTERPRET-INPUT function generates an abstracted description of the current state from the
percept, and the RULE-MATCH function returns the ﬁrst rule in the set of rules that matches
the given state description. Note that the description in terms of “rules” and “matching” is
purely conceptual; actual implementations can be as simple as a collection of logic gates
implementing a Boolean circuit.
Simple reﬂex agents have the admirable property of being simple, but they turn out to be
of limited intelligence. The agent in Figure 2.10 will work only if the correct decision can be
made on the basis of only the current percept—that is, only if the environment is fully observ-
able. Even a little bit of unobservability can cause serious trouble. For example, the braking
rule given earlier assumes that the condition car-in-front-is-braking can be determined from
the current percept—a single frame of video. This works if the car in front has a centrally
mounted brake light. Unfortunately, older models have different conﬁgurations of taillights,

Chapter
2.
Intelligent Agents
brake lights, and turn-signal lights, and it is not always possible to tell from a single image
whether the car is braking. A simple reﬂex agent driving behind such a car would either brake
continuously and unnecessarily, or, worse, never brake at all.
We can see a similar problem arising in the vacuum world. Suppose that a simple reﬂex
vacuum agent is deprived of its location sensor and has only a dirt sensor. Such an agent
has just two possible percepts: [Dirty] and [Clean]. It can Suck in response to [Dirty]; what
should it do in response to [Clean]? Moving Left fails (forever) if it happens to start in square
A, and moving Right fails (forever) if it happens to start in square B. Inﬁnite loops are often
unavoidable for simple reﬂex agents operating in partially observable environments.
Escape from inﬁnite loops is possible if the agent can randomize its actions. For ex-
RANDOMIZATION
ample, if the vacuum agent perceives [Clean], it might ﬂip a coin to choose between Left and
Right. It is easy to show that the agent will reach the other square in an average of two steps.
Then, if that square is dirty, the agent will clean it and the task will be complete. Hence, a
randomized simple reﬂex agent might outperform a deterministic simple reﬂex agent.
We mentioned in Section 2.3 that randomized behavior of the right kind can be rational
in some multiagent environments. In single-agent environments, randomization is usually not
rational. It is a useful trick that helps a simple reﬂex agent in some situations, but in most
cases we can do much better with more sophisticated deterministic agents.
2.4.3
Model-based reﬂex agents
The most effective way to handle partial observability is for the agent to keep track of the
part of the world it can’t see now. That is, the agent should maintain some sort of internal
state that depends on the percept history and thereby reﬂects at least some of the unobserved
INTERNAL STATE
aspects of the current state. For the braking problem, the internal state is not too extensive—
just the previous frame from the camera, allowing the agent to detect when two red lights at
the edge of the vehicle go on or off simultaneously. For other driving tasks such as changing
lanes, the agent needs to keep track of where the other cars are if it can’t see them all at once.
And for any driving to be possible at all, the agent needs to keep track of where its keys are.
Updating this internal state information as time goes by requires two kinds of knowl-
edge to be encoded in the agent program. First, we need some information about how the
world evolves independently of the agent—for example, that an overtaking car generally will
be closer behind than it was a moment ago. Second, we need some information about how
the agent’s own actions affect the world—for example, that when the agent turns the steering
wheel clockwise, the car turns to the right, or that after driving for ﬁve minutes northbound
on the freeway, one is usually about ﬁve miles north of where one was ﬁve minutes ago. This
knowledge about “how the world works”—whether implemented in simple Boolean circuits
or in complete scientiﬁc theories—is called a model of the world. An agent that uses such a
model is called a model-based agent.
MODEL-BASED
AGENT
Figure 2.11 gives the structure of the model-based reﬂex agent with internal state, show-
ing how the current percept is combined with the old internal state to generate the updated
description of the current state, based on the agent’s model of how the world works. The agent
program is shown in Figure 2.12. The interesting part is the function UPDATE-STATE, which

Section 2.4.
The Structure of Agents

Agent
Environment
Sensors
State
How the world evolves
What my actions do
Condition-action rules
Actuators
What the world
is like now
What action I
should do now
Figure 2.11
A model-based reﬂex agent.
function MODEL-BASED-REFLEX-AGENT(percept) returns an action
persistent: state, the agent’s current conception of the world state
model, a description of how the next state depends on current state and action
rules, a set of condition–action rules
action, the most recent action, initially none
state ←UPDATE-STATE(state,action,percept,model)
rule ←RULE-MATCH(state,rules)
action ←rule.ACTION
return action
Figure 2.12
A model-based reﬂex agent. It keeps track of the current state of the world,
using an internal model. It then chooses an action in the same way as the reﬂex agent.
is responsible for creating the new internal state description. The details of how models and
states are represented vary widely depending on the type of environment and the particular
technology used in the agent design. Detailed examples of models and updating algorithms
appear in Chapters 4, 12, 11, 15, 17, and 25.
Regardless of the kind of representation used, it is seldom possible for the agent to
determine the current state of a partially observable environment exactly. Instead, the box
labeled “what the world is like now” (Figure 2.11) represents the agent’s “best guess” (or
sometimes best guesses). For example, an automated taxi may not be able to see around the
large truck that has stopped in front of it and can only guess about what may be causing the
hold-up. Thus, uncertainty about the current state may be unavoidable, but the agent still has
to make a decision.
A perhaps less obvious point about the internal “state” maintained by a model-based
agent is that it does not have to describe “what the world is like now” in a literal sense. For

Chapter
2.
Intelligent Agents
Agent
Environment
Sensors
What action I
should do now
State
How the world evolves
What my actions do
Actuators
What the world
is like now
What it will be like
  if I do action A
Goals
Figure 2.13
A model-based, goal-based agent. It keeps track of the world state as well as
a set of goals it is trying to achieve, and chooses an action that will (eventually) lead to the
achievement of its goals.
example, the taxi may be driving back home, and it may have a rule telling it to ﬁll up with
gas on the way home unless it has at least half a tank. Although “driving back home” may
seem to an aspect of the world state, the fact of the taxi’s destination is actually an aspect of
the agent’s internal state. If you ﬁnd this puzzling, consider that the taxi could be in exactly
the same place at the same time, but intending to reach a different destination.
2.4.4
Goal-based agents
Knowing something about the current state of the environment is not always enough to decide
what to do. For example, at a road junction, the taxi can turn left, turn right, or go straight
on. The correct decision depends on where the taxi is trying to get to. In other words, as well
as a current state description, the agent needs some sort of goal information that describes
GOAL
situations that are desirable—for example, being at the passenger’s destination. The agent
program can combine this with the model (the same information as was used in the model-
based reﬂex agent) to choose actions that achieve the goal. Figure 2.13 shows the goal-based
agent’s structure.
Sometimes goal-based action selection is straightforward—for example, when goal sat-
isfaction results immediately from a single action. Sometimes it will be more tricky—for
example, when the agent has to consider long sequences of twists and turns in order to ﬁnd a
way to achieve the goal. Search (Chapters 3 to 5) and planning (Chapters 10 and 11) are the
subﬁelds of AI devoted to ﬁnding action sequences that achieve the agent’s goals.
Notice that decision making of this kind is fundamentally different from the condition–
action rules described earlier, in that it involves consideration of the future—both “What will
happen if I do such-and-such?” and “Will that make me happy?” In the reﬂex agent designs,
this information is not explicitly represented, because the built-in rules map directly from

Section 2.4.
The Structure of Agents

percepts to actions. The reﬂex agent brakes when it sees brake lights. A goal-based agent, in
principle, could reason that if the car in front has its brake lights on, it will slow down. Given
the way the world usually evolves, the only action that will achieve the goal of not hitting
other cars is to brake.
Although the goal-based agent appears less efﬁcient, it is more ﬂexible because the
knowledge that supports its decisions is represented explicitly and can be modiﬁed. If it starts
to rain, the agent can update its knowledge of how effectively its brakes will operate; this will
automatically cause all of the relevant behaviors to be altered to suit the new conditions.
For the reﬂex agent, on the other hand, we would have to rewrite many condition–action
rules. The goal-based agent’s behavior can easily be changed to go to a different destination,
simply by specifying that destination as the goal. The reﬂex agent’s rules for when to turn
and when to go straight will work only for a single destination; they must all be replaced to
go somewhere new.
2.4.5
Utility-based agents
Goals alone are not enough to generate high-quality behavior in most environments. For
example, many action sequences will get the taxi to its destination (thereby achieving the
goal) but some are quicker, safer, more reliable, or cheaper than others. Goals just provide a
crude binary distinction between “happy” and “unhappy” states. A more general performance
measure should allow a comparison of different world states according to exactly how happy
they would make the agent. Because “happy” does not sound very scientiﬁc, economists and
computer scientists use the term utility instead.6
UTILITY
We have already seen that a performance measure assigns a score to any given sequence
of environment states, so it can easily distinguish between more and less desirable ways of
getting to the taxi’s destination. An agent’s utility function is essentially an internalization
UTILITY FUNCTION
of the performance measure. If the internal utility function and the external performance
measure are in agreement, then an agent that chooses actions to maximize its utility will be
rational according to the external performance measure.
Let us emphasize again that this is not the only way to be rational—we have already
seen a rational agent program for the vacuum world (Figure 2.8) that has no idea what its
utility function is—but, like goal-based agents, a utility-based agent has many advantages in
terms of ﬂexibility and learning. Furthermore, in two kinds of cases, goals are inadequate but
a utility-based agent can still make rational decisions. First, when there are conﬂicting goals,
only some of which can be achieved (for example, speed and safety), the utility function
speciﬁes the appropriate tradeoff. Second, when there are several goals that the agent can
aim for, none of which can be achieved with certainty, utility provides a way in which the
likelihood of success can be weighed against the importance of the goals.
Partial observability and stochasticity are ubiquitous in the real world, and so, therefore,
is decision making under uncertainty. Technically speaking, a rational utility-based agent
chooses the action that maximizes the expected utility of the action outcomes—that is, the
EXPECTED UTILITY
utility the agent expects to derive, on average, given the probabilities and utilities of each
6 The word “utility” here refers to “the quality of being useful,” not to the electric company or waterworks.

Chapter
2.
Intelligent Agents
Agent
Environment
Sensors
How happy I will be
in such a state
State
How the world evolves
What my actions do
Utility
Actuators
What action I
should do now
What it will be like
if I do action A
What the world
is like now
Figure 2.14
A model-based, utility-based agent. It uses a model of the world, along with
a utility function that measures its preferences among states of the world. Then it chooses the
action that leads to the best expected utility, where expected utility is computed by averaging
over all possible outcome states, weighted by the probability of the outcome.
outcome. (Appendix A deﬁnes expectation more precisely.) In Chapter 16, we show that any
rational agent must behave as if it possesses a utility function whose expected value it tries
to maximize. An agent that possesses an explicit utility function can make rational decisions
with a general-purpose algorithm that does not depend on the speciﬁc utility function being
maximized. In this way, the “global” deﬁnition of rationality—designating as rational those
agent functions that have the highest performance—is turned into a “local” constraint on
rational-agent designs that can be expressed in a simple program.
The utility-based agent structure appears in Figure 2.14. Utility-based agent programs
appear in Part IV, where we design decision-making agents that must handle the uncertainty
inherent in stochastic or partially observable environments.
At this point, the reader may be wondering, “Is it that simple? We just build agents that
maximize expected utility, and we’re done?” It’s true that such agents would be intelligent,
but it’s not simple. A utility-based agent has to model and keep track of its environment,
tasks that have involved a great deal of research on perception, representation, reasoning,
and learning. The results of this research ﬁll many of the chapters of this book. Choosing
the utility-maximizing course of action is also a difﬁcult task, requiring ingenious algorithms
that ﬁll several more chapters. Even with these algorithms, perfect rationality is usually
unachievable in practice because of computational complexity, as we noted in Chapter 1.
2.4.6
Learning agents
We have described agent programs with various methods for selecting actions. We have
not, so far, explained how the agent programs come into being. In his famous early paper,
Turing (1950) considers the idea of actually programming his intelligent machines by hand.

Section 2.4.
The Structure of Agents

Performance standard
Agent
Environment
Sensors
Performance
element
changes
knowledge
learning
  goals
Problem
generator
feedback
  Learning
element
Critic
Actuators
Figure 2.15
A general learning agent.
He estimates how much work this might take and concludes “Some more expeditious method
seems desirable.” The method he proposes is to build learning machines and then to teach
them. In many areas of AI, this is now the preferred method for creating state-of-the-art
systems. Learning has another advantage, as we noted earlier: it allows the agent to operate
in initially unknown environments and to become more competent than its initial knowledge
alone might allow. In this section, we brieﬂy introduce the main ideas of learning agents.
Throughout the book, we comment on opportunities and methods for learning in particular
kinds of agents. Part V goes into much more depth on the learning algorithms themselves.
A learning agent can be divided into four conceptual components, as shown in Fig-
ure 2.15. The most important distinction is between the learning element, which is re-
LEARNING ELEMENT
sponsible for making improvements, and the performance element, which is responsible for
PERFORMANCE
ELEMENT
selecting external actions. The performance element is what we have previously considered
to be the entire agent: it takes in percepts and decides on actions. The learning element uses
feedback from the critic on how the agent is doing and determines how the performance
CRITIC
element should be modiﬁed to do better in the future.
The design of the learning element depends very much on the design of the performance
element. When trying to design an agent that learns a certain capability, the ﬁrst question is
not “How am I going to get it to learn this?” but “What kind of performance element will my
agent need to do this once it has learned how?” Given an agent design, learning mechanisms
can be constructed to improve every part of the agent.
The critic tells the learning element how well the agent is doing with respect to a ﬁxed
performance standard. The critic is necessary because the percepts themselves provide no
indication of the agent’s success. For example, a chess program could receive a percept
indicating that it has checkmated its opponent, but it needs a performance standard to know
that this is a good thing; the percept itself does not say so. It is important that the performance

Chapter
2.
Intelligent Agents
standard be ﬁxed. Conceptually, one should think of it as being outside the agent altogether
because the agent must not modify it to ﬁt its own behavior.
The last component of the learning agent is the problem generator. It is responsible
PROBLEM
GENERATOR
for suggesting actions that will lead to new and informative experiences. The point is that
if the performance element had its way, it would keep doing the actions that are best, given
what it knows. But if the agent is willing to explore a little and do some perhaps suboptimal
actions in the short run, it might discover much better actions for the long run. The problem
generator’s job is to suggest these exploratory actions. This is what scientists do when they
carry out experiments. Galileo did not think that dropping rocks from the top of a tower in
Pisa was valuable in itself. He was not trying to break the rocks or to modify the brains of
unfortunate passers-by. His aim was to modify his own brain by identifying a better theory
of the motion of objects.
To make the overall design more concrete, let us return to the automated taxi example.
The performance element consists of whatever collection of knowledge and procedures the
taxi has for selecting its driving actions. The taxi goes out on the road and drives, using
this performance element. The critic observes the world and passes information along to the
learning element. For example, after the taxi makes a quick left turn across three lanes of traf-
ﬁc, the critic observes the shocking language used by other drivers. From this experience, the
learning element is able to formulate a rule saying this was a bad action, and the performance
element is modiﬁed by installation of the new rule. The problem generator might identify
certain areas of behavior in need of improvement and suggest experiments, such as trying out
the brakes on different road surfaces under different conditions.
The learning element can make changes to any of the “knowledge” components shown
in the agent diagrams (Figures 2.9, 2.11, 2.13, and 2.14). The simplest cases involve learning
directly from the percept sequence. Observation of pairs of successive states of the environ-
ment can allow the agent to learn “How the world evolves,” and observation of the results of
its actions can allow the agent to learn “What my actions do.” For example, if the taxi exerts
a certain braking pressure when driving on a wet road, then it will soon ﬁnd out how much
deceleration is actually achieved. Clearly, these two learning tasks are more difﬁcult if the
environment is only partially observable.
The forms of learning in the preceding paragraph do not need to access the external
performance standard—in a sense, the standard is the universal one of making predictions
that agree with experiment. The situation is slightly more complex for a utility-based agent
that wishes to learn utility information. For example, suppose the taxi-driving agent receives
no tips from passengers who have been thoroughly shaken up during the trip. The external
performance standard must inform the agent that the loss of tips is a negative contribution to
its overall performance; then the agent might be able to learn that violent maneuvers do not
contribute to its own utility. In a sense, the performance standard distinguishes part of the
incoming percept as a reward (or penalty) that provides direct feedback on the quality of the
agent’s behavior. Hard-wired performance standards such as pain and hunger in animals can
be understood in this way. This issue is discussed further in Chapter 21.
In summary, agents have a variety of components, and those components can be repre-
sented in many ways within the agent program, so there appears to be great variety among

Section 2.4.
The Structure of Agents

learning methods. There is, however, a single unifying theme. Learning in intelligent agents
can be summarized as a process of modiﬁcation of each component of the agent to bring the
components into closer agreement with the available feedback information, thereby improv-
ing the overall performance of the agent.
2.4.7
How the components of agent programs work
We have described agent programs (in very high-level terms) as consisting of various compo-
nents, whose function it is to answer questions such as: “What is the world like now?” “What
action should I do now?” “What do my actions do?” The next question for a student of AI
is, “How on earth do these components work?” It takes about a thousand pages to begin to
answer that question properly, but here we want to draw the reader’s attention to some basic
distinctions among the various ways that the components can represent the environment that
the agent inhabits.
Roughly speaking, we can place the representations along an axis of increasing com-
plexity and expressive power—atomic, factored, and structured. To illustrate these ideas,
it helps to consider a particular agent component, such as the one that deals with “What my
actions do.” This component describes the changes that might occur in the environment as
the result of taking an action, and Figure 2.16 provides schematic depictions of how those
transitions might be represented.
B
C
(a) Atomic
(b) Factored
(b) Structured
B
C
Figure 2.16
Three ways to represent states and the transitions between them. (a) Atomic
representation: a state (such as B or C) is a black box with no internal structure; (b) Factored
representation: a state consists of a vector of attribute values; values can be Boolean, real-
valued, or one of a ﬁxed set of symbols. (c) Structured representation: a state includes
objects, each of which may have attributes of its own as well as relationships to other objects.
In an atomic representation each state of the world is indivisible—it has no internal
ATOMIC
REPRESENTATION
structure. Consider the problem of ﬁnding a driving route from one end of a country to the
other via some sequence of cities (we address this problem in Figure 3.2 on page 68). For the
purposes of solving this problem, it may sufﬁce to reduce the state of world to just the name
of the city we are in—a single atom of knowledge; a “black box” whose only discernible
property is that of being identical to or different from another black box. The algorithms

Chapter
2.
Intelligent Agents
underlying search and game-playing (Chapters 3–5), Hidden Markov models (Chapter 15),
and Markov decision processes (Chapter 17) all work with atomic representations—or, at
least, they treat representations as if they were atomic.
Now consider a higher-ﬁdelity description for the same problem, where we need to be
concerned with more than just atomic location in one city or another; we might need to pay
attention to how much gas is in the tank, our current GPS coordinates, whether or not the oil
warning light is working, how much spare change we have for toll crossings, what station is
on the radio, and so on. A factored representation splits up each state into a ﬁxed set of
FACTORED
REPRESENTATION
variables or attributes, each of which can have a value. While two different atomic states
VARIABLE
ATTRIBUTE
VALUE
have nothing in common—they are just different black boxes—two different factored states
can share some attributes (such as being at some particular GPS location) and not others (such
as having lots of gas or having no gas); this makes it much easier to work out how to turn
one state into another. With factored representations, we can also represent uncertainty—for
example, ignorance about the amount of gas in the tank can be represented by leaving that
attribute blank. Many important areas of AI are based on factored representations, including
constraint satisfaction algorithms (Chapter 6), propositional logic (Chapter 7), planning
(Chapters 10 and 11), Bayesian networks (Chapters 13–16), and the machine learning al-
gorithms in Chapters 18, 20, and 21.
For many purposes, we need to understand the world as having things in it that are
related to each other, not just variables with values. For example, we might notice that a
large truck ahead of us is reversing into the driveway of a dairy farm but a cow has got loose
and is blocking the truck’s path. A factored representation is unlikely to be pre-equipped
with the attribute TruckAheadBackingIntoDairyFarmDrivewayBlockedByLooseCow with
value true or false. Instead, we would need a structured representation, in which ob-
STRUCTURED
REPRESENTATION
jects such as cows and trucks and their various and varying relationships can be described
explicitly. (See Figure 2.16(c).) Structured representations underlie relational databases
and ﬁrst-order logic (Chapters 8, 9, and 12), ﬁrst-order probability models (Chapter 14),
knowledge-based learning (Chapter 19) and much of natural language understanding
(Chapters 22 and 23). In fact, almost everything that humans express in natural language
concerns objects and their relationships.
As we mentioned earlier, the axis along which atomic, factored, and structured repre-
sentations lie is the axis of increasing expressiveness. Roughly speaking, a more expressive
EXPRESSIVENESS
representation can capture, at least as concisely, everything a less expressive one can capture,
plus some more. Often, the more expressive language is much more concise; for example, the
rules of chess can be written in a page or two of a structured-representation language such
as ﬁrst-order logic but require thousands of pages when written in a factored-representation
language such as propositional logic. On the other hand, reasoning and learning become
more complex as the expressive power of the representation increases. To gain the beneﬁts
of expressive representations while avoiding their drawbacks, intelligent systems for the real
world may need to operate at all points along the axis simultaneously.

---

## Module 2 Textbook

SOLVING PROBLEMS BY
SEARCHING
In which we see how an agent can ﬁnd a sequence of actions that achieves its
goals when no single action will do.
The simplest agents discussed in Chapter 2 were the reﬂex agents, which base their actions on
a direct mapping from states to actions. Such agents cannot operate well in environments for
which this mapping would be too large to store and would take too long to learn. Goal-based
agents, on the other hand, consider future actions and the desirability of their outcomes.
This chapter describes one kind of goal-based agent called a problem-solving agent.
PROBLEM-SOLVING
AGENT
Problem-solving agents use atomic representations, as described in Section 2.4.7—that is,
states of the world are considered as wholes, with no internal structure visible to the problem-
solving algorithms. Goal-based agents that use more advanced factored or structured rep-
resentations are usually called planning agents and are discussed in Chapters 7 and 10.
Our discussion of problem solving begins with precise deﬁnitions of problems and their
solutions and give several examples to illustrate these deﬁnitions. We then describe several
general-purpose search algorithms that can be used to solve these problems. We will see
several uninformed search algorithms—algorithms that are given no information about the
problem other than its deﬁnition. Although some of these algorithms can solve any solvable
problem, none of them can do so efﬁciently. Informed search algorithms, on the other hand,
can do quite well given some guidance on where to look for solutions.
In this chapter, we limit ourselves to the simplest kind of task environment, for which
the solution to a problem is always a ﬁxed sequence of actions. The more general case—where
the agent’s future actions may vary depending on future percepts—is handled in Chapter 4.
This chapter uses the concepts of asymptotic complexity (that is, O() notation) and
NP-completeness. Readers unfamiliar with these concepts should consult Appendix A.
3.1
PROBLEM-SOLVING AGENTS
Intelligent agents are supposed to maximize their performance measure. As we mentioned
in Chapter 2, achieving this is sometimes simpliﬁed if the agent can adopt a goal and aim at
satisfying it. Let us ﬁrst look at why and how an agent might do this.

MODULE 2

Section 3.1.
Problem-Solving Agents

Imagine an agent in the city of Arad, Romania, enjoying a touring holiday. The agent’s
performance measure contains many factors: it wants to improve its suntan, improve its Ro-
manian, take in the sights, enjoy the nightlife (such as it is), avoid hangovers, and so on. The
decision problem is a complex one involving many tradeoffs and careful reading of guide-
books. Now, suppose the agent has a nonrefundable ticket to ﬂy out of Bucharest the follow-
ing day. In that case, it makes sense for the agent to adopt the goal of getting to Bucharest.
Courses of action that don’t reach Bucharest on time can be rejected without further consid-
eration and the agent’s decision problem is greatly simpliﬁed. Goals help organize behavior
by limiting the objectives that the agent is trying to achieve and hence the actions it needs
to consider. Goal formulation, based on the current situation and the agent’s performance
GOAL FORMULATION
measure, is the ﬁrst step in problem solving.
We will consider a goal to be a set of world states—exactly those states in which the
goal is satisﬁed. The agent’s task is to ﬁnd out how to act, now and in the future, so that it
reaches a goal state. Before it can do this, it needs to decide (or we need to decide on its
behalf) what sorts of actions and states it should consider. If it were to consider actions at
the level of “move the left foot forward an inch” or “turn the steering wheel one degree left,”
the agent would probably never ﬁnd its way out of the parking lot, let alone to Bucharest,
because at that level of detail there is too much uncertainty in the world and there would be
too many steps in a solution. Problem formulation is the process of deciding what actions
PROBLEM
FORMULATION
and states to consider, given a goal. We discuss this process in more detail later. For now, let
us assume that the agent will consider actions at the level of driving from one major town to
another. Each state therefore corresponds to being in a particular town.
Our agent has now adopted the goal of driving to Bucharest and is considering where
to go from Arad. Three roads lead out of Arad, one toward Sibiu, one to Timisoara, and one
to Zerind. None of these achieves the goal, so unless the agent is familiar with the geography
of Romania, it will not know which road to follow.1 In other words, the agent will not know
which of its possible actions is best, because it does not yet know enough about the state
that results from taking each action. If the agent has no additional information—i.e., if the
environment is unknown in the sense deﬁned in Section 2.3—then it is has no choice but to
try one of the actions at random. This sad situation is discussed in Chapter 4.
But suppose the agent has a map of Romania. The point of a map is to provide the
agent with information about the states it might get itself into and the actions it can take. The
agent can use this information to consider subsequent stages of a hypothetical journey via
each of the three towns, trying to ﬁnd a journey that eventually gets to Bucharest. Once it has
found a path on the map from Arad to Bucharest, it can achieve its goal by carrying out the
driving actions that correspond to the legs of the journey. In general, an agent with several
immediate options of unknown value can decide what to do by ﬁrst examining future actions
that eventually lead to states of known value.
To be more speciﬁc about what we mean by “examining future actions,” we have to
be more speciﬁc about properties of the environment, as deﬁned in Section 2.3. For now,
1 We are assuming that most readers are in the same position and can easily imagine themselves to be as clueless
as our agent. We apologize to Romanian readers who are unable to take advantage of this pedagogical device.

Chapter
3.
Solving Problems by Searching
we assume that the environment is observable, so the agent always knows the current state.
For the agent driving in Romania, it’s reasonable to suppose that each city on the map has a
sign indicating its presence to arriving drivers. We also assume the environment is discrete,
so at any given state there are only ﬁnitely many actions to choose from. This is true for
navigating in Romania because each city is connected to a small number of other cities. We
will assume the environment is known, so the agent knows which states are reached by each
action. (Having an accurate map sufﬁces to meet this condition for navigation problems.)
Finally, we assume that the environment is deterministic, so each action has exactly one
outcome. Under ideal conditions, this is true for the agent in Romania—it means that if it
chooses to drive from Arad to Sibiu, it does end up in Sibiu. Of course, conditions are not
always ideal, as we show in Chapter 4.
Under these assumptions, the solution to any problem is a ﬁxed sequence of actions.
“Of course!” one might say, “What else could it be?” Well, in general it could be a branching
strategy that recommends different actions in the future depending on what percepts arrive.
For example, under less than ideal conditions, the agent might plan to drive from Arad to
Sibiu and then to Rimnicu Vilcea but may also need to have a contingency plan in case it
arrives by accident in Zerind instead of Sibiu. Fortunately, if the agent knows the initial state
and the environment is known and deterministic, it knows exactly where it will be after the
ﬁrst action and what it will perceive. Since only one percept is possible after the ﬁrst action,
the solution can specify only one possible second action, and so on.
The process of looking for a sequence of actions that reaches the goal is called search.
SEARCH
A search algorithm takes a problem as input and returns a solution in the form of an action
SOLUTION
sequence. Once a solution is found, the actions it recommends can be carried out. This
is called the execution phase. Thus, we have a simple “formulate, search, execute” design
EXECUTION
for the agent, as shown in Figure 3.1. After formulating a goal and a problem to solve,
the agent calls a search procedure to solve it. It then uses the solution to guide its actions,
doing whatever the solution recommends as the next thing to do—typically, the ﬁrst action of
the sequence—and then removing that step from the sequence. Once the solution has been
executed, the agent will formulate a new goal.
Notice that while the agent is executing the solution sequence it ignores its percepts
when choosing an action because it knows in advance what they will be. An agent that
carries out its plans with its eyes closed, so to speak, must be quite certain of what is going
on. Control theorists call this an open-loop system, because ignoring the percepts breaks the
OPEN-LOOP
loop between agent and environment.
We ﬁrst describe the process of problem formulation, and then devote the bulk of the
chapter to various algorithms for the SEARCH function. We do not discuss the workings of
the UPDATE-STATE and FORMULATE-GOAL functions further in this chapter.
3.1.1
Well-deﬁned problems and solutions
A problem can be deﬁned formally by ﬁve components:
PROBLEM
• The initial state that the agent starts in. For example, the initial state for our agent in
INITIAL STATE
Romania might be described as In(Arad).

Section 3.1.
Problem-Solving Agents

function SIMPLE-PROBLEM-SOLVING-AGENT(percept) returns an action
persistent: seq, an action sequence, initially empty
state, some description of the current world state
goal, a goal, initially null
problem, a problem formulation
state ←UPDATE-STATE(state,percept)
if seq is empty then
goal ←FORMULATE-GOAL(state)
problem ←FORMULATE-PROBLEM(state,goal)
seq ←SEARCH(problem)
if seq = failure then return a null action
action ←FIRST(seq)
seq ←REST(seq)
return action
Figure 3.1
A simple problem-solving agent. It ﬁrst formulates a goal and a problem,
searches for a sequence of actions that would solve the problem, and then executes the actions
one at a time. When this is complete, it formulates another goal and starts over.
• A description of the possible actions available to the agent. Given a particular state s,
ACTIONS
ACTIONS(s) returns the set of actions that can be executed in s. We say that each of
these actions is applicable in s. For example, from the state In(Arad), the applicable
APPLICABLE
actions are {Go(Sibiu), Go(Timisoara), Go(Zerind)}.
• A description of what each action does; the formal name for this is the transition
model, speciﬁed by a function RESULT(s, a) that returns the state that results from
TRANSITION MODEL
doing action a in state s. We also use the term successor to refer to any state reachable
SUCCESSOR
from a given state by a single action.2 For example, we have
RESULT(In(Arad), Go(Zerind)) = In(Zerind) .
Together, the initial state, actions, and transition model implicitly deﬁne the state space
STATE SPACE
of the problem—the set of all states reachable from the initial state by any sequence
of actions. The state space forms a directed network or graph in which the nodes
GRAPH
are states and the links between nodes are actions. (The map of Romania shown in
Figure 3.2 can be interpreted as a state-space graph if we view each road as standing
for two driving actions, one in each direction.) A path in the state space is a sequence
PATH
of states connected by a sequence of actions.
• The goal test, which determines whether a given state is a goal state. Sometimes there
GOAL TEST
is an explicit set of possible goal states, and the test simply checks whether the given
state is one of them. The agent’s goal in Romania is the singleton set {In(Bucharest)}.
2 Many treatments of problem solving, including previous editions of this book, use a successor function, which
returns the set of all successors, instead of separate ACTIONS and RESULT functions. The successor function
makes it difﬁcult to describe an agent that knows what actions it can try but not what they achieve. Also, note
some author use RESULT(a, s) instead of RESULT(s, a), and some use DO instead of RESULT.

Chapter
3.
Solving Problems by Searching
Giurgiu
Urziceni
Hirsova
Eforie
Neamt
Oradea
Zerind
Arad
Timisoara
Lugoj
Mehadia
Drobeta
Craiova
Sibiu
Fagaras
Pitesti
Vaslui
Iasi
Rimnicu Vilcea
Bucharest

Figure 3.2
A simpliﬁed road map of part of Romania.
Sometimes the goal is speciﬁed by an abstract property rather than an explicitly enumer-
ated set of states. For example, in chess, the goal is to reach a state called “checkmate,”
where the opponent’s king is under attack and can’t escape.
• A path cost function that assigns a numeric cost to each path. The problem-solving
PATH COST
agent chooses a cost function that reﬂects its own performance measure. For the agent
trying to get to Bucharest, time is of the essence, so the cost of a path might be its length
in kilometers. In this chapter, we assume that the cost of a path can be described as the
sum of the costs of the individual actions along the path.3 The step cost of taking action
STEP COST
a in state s to reach state s′ is denoted by c(s, a, s′). The step costs for Romania are
shown in Figure 3.2 as route distances. We assume that step costs are nonnegative.4
The preceding elements deﬁne a problem and can be gathered into a single data structure
that is given as input to a problem-solving algorithm. A solution to a problem is an action
sequence that leads from the initial state to a goal state. Solution quality is measured by the
path cost function, and an optimal solution has the lowest path cost among all solutions.
OPTIMAL SOLUTION
3.1.2
Formulating problems
In the preceding section we proposed a formulation of the problem of getting to Bucharest in
terms of the initial state, actions, transition model, goal test, and path cost. This formulation
seems reasonable, but it is still a model—an abstract mathematical description—and not the
3 This assumption is algorithmically convenient but also theoretically justiﬁable—see page 649 in Chapter 17.
4 The implications of negative costs are explored in Exercise 3.8.

Section 3.2.
Example Problems

real thing. Compare the simple state description we have chosen, In(Arad), to an actual cross-
country trip, where the state of the world includes so many things: the traveling companions,
the current radio program, the scenery out of the window, the proximity of law enforcement
ofﬁcers, the distance to the next rest stop, the condition of the road, the weather, and so on.
All these considerations are left out of our state descriptions because they are irrelevant to the
problem of ﬁnding a route to Bucharest. The process of removing detail from a representation
is called abstraction.
ABSTRACTION
In addition to abstracting the state description, we must abstract the actions themselves.
A driving action has many effects. Besides changing the location of the vehicle and its oc-
cupants, it takes up time, consumes fuel, generates pollution, and changes the agent (as they
say, travel is broadening). Our formulation takes into account only the change in location.
Also, there are many actions that we omit altogether: turning on the radio, looking out of
the window, slowing down for law enforcement ofﬁcers, and so on. And of course, we don’t
specify actions at the level of “turn steering wheel to the left by one degree.”
Can we be more precise about deﬁning the appropriate level of abstraction? Think of the
abstract states and actions we have chosen as corresponding to large sets of detailed world
states and detailed action sequences. Now consider a solution to the abstract problem: for
example, the path from Arad to Sibiu to Rimnicu Vilcea to Pitesti to Bucharest. This abstract
solution corresponds to a large number of more detailed paths. For example, we could drive
with the radio on between Sibiu and Rimnicu Vilcea, and then switch it off for the rest of
the trip. The abstraction is valid if we can expand any abstract solution into a solution in the
more detailed world; a sufﬁcient condition is that for every detailed state that is “in Arad,”
there is a detailed path to some state that is “in Sibiu,” and so on.5 The abstraction is useful
if carrying out each of the actions in the solution is easier than the original problem; in this
case they are easy enough that they can be carried out without further search or planning by
an average driving agent. The choice of a good abstraction thus involves removing as much
detail as possible while retaining validity and ensuring that the abstract actions are easy to
carry out. Were it not for the ability to construct useful abstractions, intelligent agents would
be completely swamped by the real world.
3.2
EXAMPLE PROBLEMS
The problem-solving approach has been applied to a vast array of task environments. We
list some of the best known here, distinguishing between toy and real-world problems. A
toy problem is intended to illustrate or exercise various problem-solving methods. It can be
TOY PROBLEM
given a concise, exact description and hence is usable by different researchers to compare the
performance of algorithms. A real-world problem is one whose solutions people actually
REAL-WORLD
PROBLEM
care about. Such problems tend not to have a single agreed-upon description, but we can give
the general ﬂavor of their formulations.
5 See Section 11.2 for a more complete set of deﬁnitions and algorithms.

Chapter
3.
Solving Problems by Searching
R
L
S
S
S
S
R
L
R
L
R
L
S
S
S
S
L
L
L
L
R
R
R
R
Figure 3.3
The state space for the vacuum world. Links denote actions: L = Left, R =
Right, S = Suck.
3.2.1
Toy problems
The ﬁrst example we examine is the vacuum world ﬁrst introduced in Chapter 2. (See
Figure 2.2.) This can be formulated as a problem as follows:
• States: The state is determined by both the agent location and the dirt locations. The
agent is in one of two locations, each of which might or might not contain dirt. Thus,
there are 2 × 22 = 8 possible world states. A larger environment with n locations has
n · 2n states.
• Initial state: Any state can be designated as the initial state.
• Actions: In this simple environment, each state has just three actions: Left, Right, and
Suck. Larger environments might also include Up and Down.
• Transition model: The actions have their expected effects, except that moving Left in
the leftmost square, moving Right in the rightmost square, and Sucking in a clean square
have no effect. The complete state space is shown in Figure 3.3.
• Goal test: This checks whether all the squares are clean.
• Path cost: Each step costs 1, so the path cost is the number of steps in the path.
Compared with the real world, this toy problem has discrete locations, discrete dirt, reliable
cleaning, and it never gets any dirtier. Chapter 4 relaxes some of these assumptions.
The 8-puzzle, an instance of which is shown in Figure 3.4, consists of a 3×3 board with
8-PUZZLE
eight numbered tiles and a blank space. A tile adjacent to the blank space can slide into the
space. The object is to reach a speciﬁed goal state, such as the one shown on the right of the
ﬁgure. The standard formulation is as follows:

Section 3.2.
Example Problems

Start State
Goal State

Figure 3.4
A typical instance of the 8-puzzle.
• States: A state description speciﬁes the location of each of the eight tiles and the blank
in one of the nine squares.
• Initial state: Any state can be designated as the initial state. Note that any given goal
can be reached from exactly half of the possible initial states (Exercise 3.4).
• Actions: The simplest formulation deﬁnes the actions as movements of the blank space
Left, Right, Up, or Down. Different subsets of these are possible depending on where
the blank is.
• Transition model: Given a state and action, this returns the resulting state; for example,
if we apply Left to the start state in Figure 3.4, the resulting state has the 5 and the blank
switched.
• Goal test: This checks whether the state matches the goal conﬁguration shown in Fig-
ure 3.4. (Other goal conﬁgurations are possible.)
• Path cost: Each step costs 1, so the path cost is the number of steps in the path.
What abstractions have we included here? The actions are abstracted to their beginning and
ﬁnal states, ignoring the intermediate locations where the block is sliding. We have abstracted
away actions such as shaking the board when pieces get stuck and ruled out extracting the
pieces with a knife and putting them back again. We are left with a description of the rules of
the puzzle, avoiding all the details of physical manipulations.
The 8-puzzle belongs to the family of sliding-block puzzles, which are often used as
SLIDING-BLOCK
PUZZLES
test problems for new search algorithms in AI. This family is known to be NP-complete,
so one does not expect to ﬁnd methods signiﬁcantly better in the worst case than the search
algorithms described in this chapter and the next. The 8-puzzle has 9!/2 = 181, 440 reachable
states and is easily solved. The 15-puzzle (on a 4×4 board) has around 1.3 trillion states, and
random instances can be solved optimally in a few milliseconds by the best search algorithms.
The 24-puzzle (on a 5 × 5 board) has around 1025 states, and random instances take several
hours to solve optimally.
The goal of the 8-queens problem is to place eight queens on a chessboard such that
8-QUEENS PROBLEM
no queen attacks any other. (A queen attacks any piece in the same row, column or diago-
nal.) Figure 3.5 shows an attempted solution that fails: the queen in the rightmost column is
attacked by the queen at the top left.

Chapter
3.
Solving Problems by Searching
Figure 3.5
Almost a solution to the 8-queens problem. (Solution is left as an exercise.)
Although efﬁcient special-purpose algorithms exist for this problem and for the whole
n-queens family, it remains a useful test problem for search algorithms. There are two main
kinds of formulation. An incremental formulation involves operators that augment the state
INCREMENTAL
FORMULATION
description, starting with an empty state; for the 8-queens problem, this means that each
action adds a queen to the state. A complete-state formulation starts with all 8 queens on
COMPLETE-STATE
FORMULATION
the board and moves them around. In either case, the path cost is of no interest because only
the ﬁnal state counts. The ﬁrst incremental formulation one might try is the following:
• States: Any arrangement of 0 to 8 queens on the board is a state.
• Initial state: No queens on the board.
• Actions: Add a queen to any empty square.
• Transition model: Returns the board with a queen added to the speciﬁed square.
• Goal test: 8 queens are on the board, none attacked.
In this formulation, we have 64 · 63 · · · 57 ≈1.8 × 1014 possible sequences to investigate. A
better formulation would prohibit placing a queen in any square that is already attacked:
• States: All possible arrangements of n queens (0 ≤n ≤8), one per column in the
leftmost n columns, with no queen attacking another.
• Actions: Add a queen to any square in the leftmost empty column such that it is not
attacked by any other queen.
This formulation reduces the 8-queens state space from 1.8 × 1014 to just 2,057, and solutions
are easy to ﬁnd. On the other hand, for 100 queens the reduction is from roughly 10400 states
to about 1052 states (Exercise 3.5)—a big improvement, but not enough to make the problem
tractable. Section 4.1 describes the complete-state formulation, and Chapter 6 gives a simple
algorithm that solves even the million-queens problem with ease.

Section 3.2.
Example Problems

Our ﬁnal toy problem was devised by Donald Knuth (1964) and illustrates how inﬁnite
state spaces can arise. Knuth conjectured that, starting with the number 4, a sequence of fac-
torial, square root, and ﬂoor operations will reach any desired positive integer. For example,
we can reach 5 from 4 as follows:





	
(4!)!

= 5 .
The problem deﬁnition is very simple:
• States: Positive numbers.
• Initial state: 4.
• Actions: Apply factorial, square root, or ﬂoor operation (factorial for integers only).
• Transition model: As given by the mathematical deﬁnitions of the operations.
• Goal test: State is the desired positive integer.
To our knowledge there is no bound on how large a number might be constructed in the pro-
cess of reaching a given target—for example, the number 620,448,401,733,239,439,360,000
is generated in the expression for 5—so the state space for this problem is inﬁnite. Such
state spaces arise frequently in tasks involving the generation of mathematical expressions,
circuits, proofs, programs, and other recursively deﬁned objects.
3.2.2
Real-world problems
We have already seen how the route-ﬁnding problem is deﬁned in terms of speciﬁed loca-
ROUTE-FINDING
PROBLEM
tions and transitions along links between them. Route-ﬁnding algorithms are used in a variety
of applications. Some, such as Web sites and in-car systems that provide driving directions,
are relatively straightforward extensions of the Romania example. Others, such as routing
video streams in computer networks, military operations planning, and airline travel-planning
systems, involve much more complex speciﬁcations. Consider the airline travel problems that
must be solved by a travel-planning Web site:
• States: Each state obviously includes a location (e.g., an airport) and the current time.
Furthermore, because the cost of an action (a ﬂight segment) may depend on previous
segments, their fare bases, and their status as domestic or international, the state must
record extra information about these “historical” aspects.
• Initial state: This is speciﬁed by the user’s query.
• Actions: Take any ﬂight from the current location, in any seat class, leaving after the
current time, leaving enough time for within-airport transfer if needed.
• Transition model: The state resulting from taking a ﬂight will have the ﬂight’s desti-
nation as the current location and the ﬂight’s arrival time as the current time.
• Goal test: Are we at the ﬁnal destination speciﬁed by the user?
• Path cost: This depends on monetary cost, waiting time, ﬂight time, customs and im-
migration procedures, seat quality, time of day, type of airplane, frequent-ﬂyer mileage
awards, and so on.

Chapter
3.
Solving Problems by Searching
Commercial travel advice systems use a problem formulation of this kind, with many addi-
tional complications to handle the byzantine fare structures that airlines impose. Any sea-
soned traveler knows, however, that not all air travel goes according to plan. A really good
system should include contingency plans—such as backup reservations on alternate ﬂights—
to the extent that these are justiﬁed by the cost and likelihood of failure of the original plan.
Touring problems are closely related to route-ﬁnding problems, but with an impor-
TOURING PROBLEM
tant difference. Consider, for example, the problem “Visit every city in Figure 3.2 at least
once, starting and ending in Bucharest.”
As with route ﬁnding, the actions correspond
to trips between adjacent cities. The state space, however, is quite different. Each state
must include not just the current location but also the set of cities the agent has visited.
So the initial state would be In(Bucharest), Visited({Bucharest}), a typical intermedi-
ate state would be In(Vaslui), Visited({Bucharest, Urziceni, Vaslui}), and the goal test
would check whether the agent is in Bucharest and all 20 cities have been visited.
The traveling salesperson problem (TSP) is a touring problem in which each city
TRAVELING
SALESPERSON
PROBLEM
must be visited exactly once. The aim is to ﬁnd the shortest tour. The problem is known to
be NP-hard, but an enormous amount of effort has been expended to improve the capabilities
of TSP algorithms. In addition to planning trips for traveling salespersons, these algorithms
have been used for tasks such as planning movements of automatic circuit-board drills and of
stocking machines on shop ﬂoors.
A VLSI layout problem requires positioning millions of components and connections
VLSI LAYOUT
on a chip to minimize area, minimize circuit delays, minimize stray capacitances, and max-
imize manufacturing yield. The layout problem comes after the logical design phase and is
usually split into two parts: cell layout and channel routing. In cell layout, the primitive
components of the circuit are grouped into cells, each of which performs some recognized
function. Each cell has a ﬁxed footprint (size and shape) and requires a certain number of
connections to each of the other cells. The aim is to place the cells on the chip so that they do
not overlap and so that there is room for the connecting wires to be placed between the cells.
Channel routing ﬁnds a speciﬁc route for each wire through the gaps between the cells. These
search problems are extremely complex, but deﬁnitely worth solving. Later in this chapter,
we present some algorithms capable of solving them.
Robot navigation is a generalization of the route-ﬁnding problem described earlier.
ROBOT NAVIGATION
Rather than following a discrete set of routes, a robot can move in a continuous space with
(in principle) an inﬁnite set of possible actions and states. For a circular robot moving on a
ﬂat surface, the space is essentially two-dimensional. When the robot has arms and legs or
wheels that must also be controlled, the search space becomes many-dimensional. Advanced
techniques are required just to make the search space ﬁnite. We examine some of these
methods in Chapter 25. In addition to the complexity of the problem, real robots must also
deal with errors in their sensor readings and motor controls.
Automatic assembly sequencing of complex objects by a robot was ﬁrst demonstrated
AUTOMATIC
ASSEMBLY
SEQUENCING
by FREDDY (Michie, 1972). Progress since then has been slow but sure, to the point where
the assembly of intricate objects such as electric motors is economically feasible. In assembly
problems, the aim is to ﬁnd an order in which to assemble the parts of some object. If the
wrong order is chosen, there will be no way to add some part later in the sequence without

Section 3.3.
Searching for Solutions

undoing some of the work already done. Checking a step in the sequence for feasibility is a
difﬁcult geometrical search problem closely related to robot navigation. Thus, the generation
of legal actions is the expensive part of assembly sequencing. Any practical algorithm must
avoid exploring all but a tiny fraction of the state space. Another important assembly problem
is protein design, in which the goal is to ﬁnd a sequence of amino acids that will fold into a
PROTEIN DESIGN
three-dimensional protein with the right properties to cure some disease.
3.3
SEARCHING FOR SOLUTIONS
Having formulated some problems, we now need to solve them. A solution is an action
sequence, so search algorithms work by considering various possible action sequences. The
possible action sequences starting at the initial state form a search tree with the initial state
SEARCH TREE
at the root; the branches are actions and the nodes correspond to states in the state space of
NODE
the problem. Figure 3.6 shows the ﬁrst few steps in growing the search tree for ﬁnding a route
from Arad to Bucharest. The root node of the tree corresponds to the initial state, In(Arad).
The ﬁrst step is to test whether this is a goal state. (Clearly it is not, but it is important to
check so that we can solve trick problems like “starting in Arad, get to Arad.”) Then we
need to consider taking various actions. We do this by expanding the current state; that is,
EXPANDING
applying each legal action to the current state, thereby generating a new set of states. In
GENERATING
this case, we add three branches from the parent node In(Arad) leading to three new child
PARENT NODE
nodes: In(Sibiu), In(Timisoara), and In(Zerind). Now we must choose which of these three
CHILD NODE
possibilities to consider further.
This is the essence of search—following up one option now and putting the others aside
for later, in case the ﬁrst choice does not lead to a solution. Suppose we choose Sibiu ﬁrst.
We check to see whether it is a goal state (it is not) and then expand it to get In(Arad),
In(Fagaras), In(Oradea), and In(RimnicuVilcea). We can then choose any of these four or go
back and choose Timisoara or Zerind. Each of these six nodes is a leaf node, that is, a node
LEAF NODE
with no children in the tree. The set of all leaf nodes available for expansion at any given
point is called the frontier. (Many authors call it the open list, which is both geographically
FRONTIER
OPEN LIST
less evocative and less accurate, because other data structures are better suited than a list.) In
Figure 3.6, the frontier of each tree consists of those nodes with bold outlines.
The process of expanding nodes on the frontier continues until either a solution is found
or there are no more states to expand. The general TREE-SEARCH algorithm is shown infor-
mally in Figure 3.7. Search algorithms all share this basic structure; they vary primarily
according to how they choose which state to expand next—the so-called search strategy.
SEARCH STRATEGY
The eagle-eyed reader will notice one peculiar thing about the search tree shown in Fig-
ure 3.6: it includes the path from Arad to Sibiu and back to Arad again! We say that In(Arad)
is a repeated state in the search tree, generated in this case by a loopy path. Considering
REPEATED STATE
LOOPY PATH
such loopy paths means that the complete search tree for Romania is inﬁnite because there
is no limit to how often one can traverse a loop. On the other hand, the state space—the
map shown in Figure 3.2—has only 20 states. As we discuss in Section 3.4, loops can cause

Chapter
3.
Solving Problems by Searching
certain algorithms to fail, making otherwise solvable problems unsolvable. Fortunately, there
is no need to consider loopy paths. We can rely on more than intuition for this: because path
costs are additive and step costs are nonnegative, a loopy path to any given state is never
better than the same path with the loop removed.
Loopy paths are a special case of the more general concept of redundant paths, which
REDUNDANT PATH
exist whenever there is more than one way to get from one state to another. Consider the paths
Arad–Sibiu (140 km long) and Arad–Zerind–Oradea–Sibiu (297 km long). Obviously, the
second path is redundant—it’s just a worse way to get to the same state. If you are concerned
about reaching the goal, there’s never any reason to keep more than one path to any given
state, because any goal state that is reachable by extending one path is also reachable by
extending the other.
In some cases, it is possible to deﬁne the problem itself so as to eliminate redundant
paths. For example, if we formulate the 8-queens problem (page 71) so that a queen can be
placed in any column, then each state with n queens can be reached by n! different paths; but
if we reformulate the problem so that each new queen is placed in the leftmost empty column,
then each state can be reached only through one path.
(a) The initial state
(b) After expanding Arad
(c) After expanding Sibiu
Rimnicu Vilcea
Lugoj
Arad
Fagaras
Oradea
Arad
Arad
Oradea
Rimnicu Vilcea
Lugoj
Zerind
Sibiu
Arad
Fagaras
Oradea
Timisoara
Arad
Arad
Oradea
Lugoj
Arad
Arad
Oradea
Zerind
Arad
Sibiu
Timisoara
Arad
Rimnicu Vilcea
Zerind
Arad
Sibiu
Arad
Fagaras
Oradea
Timisoara
Figure 3.6
Partial search trees for ﬁnding a route from Arad to Bucharest. Nodes that
have been expanded are shaded; nodes that have been generated but not yet expanded are
outlined in bold; nodes that have not yet been generated are shown in faint dashed lines.

Section 3.3.
Searching for Solutions

function TREE-SEARCH(problem) returns a solution, or failure
initialize the frontier using the initial state of problem
loop do
if the frontier is empty then return failure
choose a leaf node and remove it from the frontier
if the node contains a goal state then return the corresponding solution
expand the chosen node, adding the resulting nodes to the frontier
function GRAPH-SEARCH(problem) returns a solution, or failure
initialize the frontier using the initial state of problem
initialize the explored set to be empty
loop do
if the frontier is empty then return failure
choose a leaf node and remove it from the frontier
if the node contains a goal state then return the corresponding solution
add the node to the explored set
expand the chosen node, adding the resulting nodes to the frontier
only if not in the frontier or explored set
Figure 3.7
An informal description of the general tree-search and graph-search algo-
rithms. The parts of GRAPH-SEARCH marked in bold italic are the additions needed to
handle repeated states.
In other cases, redundant paths are unavoidable.
This includes all problems where
the actions are reversible, such as route-ﬁnding problems and sliding-block puzzles. Route-
ﬁnding on a rectangular grid (like the one used later for Figure 3.9) is a particularly impor-
RECTANGULAR GRID
tant example in computer games. In such a grid, each state has four successors, so a search
tree of depth d that includes repeated states has 4d leaves; but there are only about 2d2 distinct
states within d steps of any given state. For d = 20, this means about a trillion nodes but only
about 800 distinct states. Thus, following redundant paths can cause a tractable problem to
become intractable. This is true even for algorithms that know how to avoid inﬁnite loops.
As the saying goes, algorithms that forget their history are doomed to repeat it.
The
way to avoid exploring redundant paths is to remember where one has been. To do this, we
augment the TREE-SEARCH algorithm with a data structure called the explored set (also
EXPLORED SET
known as the closed list), which remembers every expanded node. Newly generated nodes
CLOSED LIST
that match previously generated nodes—ones in the explored set or the frontier—can be dis-
carded instead of being added to the frontier. The new algorithm, called GRAPH-SEARCH, is
shown informally in Figure 3.7. The speciﬁc algorithms in this chapter draw on this general
design.
Clearly, the search tree constructed by the GRAPH-SEARCH algorithm contains at most
one copy of each state, so we can think of it as growing a tree directly on the state-space graph,
as shown in Figure 3.8. The algorithm has another nice property: the frontier separates the
SEPARATOR
state-space graph into the explored region and the unexplored region, so that every path from

Chapter
3.
Solving Problems by Searching
Figure 3.8
A sequence of search trees generated by a graph search on the Romania prob-
lem of Figure 3.2. At each stage, we have extended each path by one step. Notice that at the
third stage, the northernmost city (Oradea) has become a dead end: both of its successors are
already explored via other paths.
(c)
(b)
(a)
Figure 3.9
The separation property of GRAPH-SEARCH, illustrated on a rectangular-grid
problem. The frontier (white nodes) always separates the explored region of the state space
(black nodes) from the unexplored region (gray nodes). In (a), just the root has been ex-
panded. In (b), one leaf node has been expanded. In (c), the remaining successors of the root
have been expanded in clockwise order.
the initial state to an unexplored state has to pass through a state in the frontier. (If this
seems completely obvious, try Exercise 3.13 now.) This property is illustrated in Figure 3.9.
As every step moves a state from the frontier into the explored region while moving some
states from the unexplored region into the frontier, we see that the algorithm is systematically
examining the states in the state space, one by one, until it ﬁnds a solution.
3.3.1
Infrastructure for search algorithms
Search algorithms require a data structure to keep track of the search tree that is being con-
structed. For each node n of the tree, we have a structure that contains four components:
• n.STATE: the state in the state space to which the node corresponds;
• n.PARENT: the node in the search tree that generated this node;
• n.ACTION: the action that was applied to the parent to generate the node;
• n.PATH-COST: the cost, traditionally denoted by g(n), of the path from the initial state
to the node, as indicated by the parent pointers.

Section 3.3.
Searching for Solutions

Node
STATE
PARENT
ACTION = Right
PATH-COST = 6
Figure 3.10
Nodes are the data structures from which the search tree is constructed. Each
has a parent, a state, and various bookkeeping ﬁelds. Arrows point from child to parent.
Given the components for a parent node, it is easy to see how to compute the necessary
components for a child node. The function CHILD-NODE takes a parent node and an action
and returns the resulting child node:
function CHILD-NODE(problem,parent,action) returns a node
return a node with
STATE = problem.RESULT(parent.STATE,action),
PARENT = parent, ACTION = action,
PATH-COST = parent.PATH-COST + problem.STEP-COST(parent.STATE,action)
The node data structure is depicted in Figure 3.10. Notice how the PARENT pointers
string the nodes together into a tree structure. These pointers also allow the solution path to be
extracted when a goal node is found; we use the SOLUTION function to return the sequence
of actions obtained by following parent pointers back to the root.
Up to now, we have not been very careful to distinguish between nodes and states, but in
writing detailed algorithms it’s important to make that distinction. A node is a bookkeeping
data structure used to represent the search tree. A state corresponds to a conﬁguration of the
world. Thus, nodes are on particular paths, as deﬁned by PARENT pointers, whereas states
are not. Furthermore, two different nodes can contain the same world state if that state is
generated via two different search paths.
Now that we have nodes, we need somewhere to put them. The frontier needs to be
stored in such a way that the search algorithm can easily choose the next node to expand
according to its preferred strategy. The appropriate data structure for this is a queue. The
QUEUE
operations on a queue are as follows:
• EMPTY?(queue) returns true only if there are no more elements in the queue.
• POP(queue) removes the ﬁrst element of the queue and returns it.
• INSERT(element, queue) inserts an element and returns the resulting queue.

Chapter
3.
Solving Problems by Searching
Queues are characterized by the order in which they store the inserted nodes. Three common
variants are the ﬁrst-in, ﬁrst-out or FIFO queue, which pops the oldest element of the queue;
FIFO QUEUE
the last-in, ﬁrst-out or LIFO queue (also known as a stack), which pops the newest element
LIFO QUEUE
of the queue; and the priority queue, which pops the element of the queue with the highest
PRIORITY QUEUE
priority according to some ordering function.
The explored set can be implemented with a hash table to allow efﬁcient checking for
repeated states. With a good implementation, insertion and lookup can be done in roughly
constant time no matter how many states are stored. One must take care to implement the
hash table with the right notion of equality between states. For example, in the traveling
salesperson problem (page 74), the hash table needs to know that the set of visited cities
{Bucharest,Urziceni,Vaslui} is the same as {Urziceni,Vaslui,Bucharest}. Sometimes this can
be achieved most easily by insisting that the data structures for states be in some canonical
form; that is, logically equivalent states should map to the same data structure. In the case
CANONICAL FORM
of states described by sets, for example, a bit-vector representation or a sorted list without
repetition would be canonical, whereas an unsorted list would not.
3.3.2
Measuring problem-solving performance
Before we get into the design of speciﬁc search algorithms, we need to consider the criteria
that might be used to choose among them. We can evaluate an algorithm’s performance in
four ways:
• Completeness: Is the algorithm guaranteed to ﬁnd a solution when there is one?
COMPLETENESS
• Optimality: Does the strategy ﬁnd the optimal solution, as deﬁned on page 68?
OPTIMALITY
• Time complexity: How long does it take to ﬁnd a solution?
TIME COMPLEXITY
• Space complexity: How much memory is needed to perform the search?
SPACE COMPLEXITY
Time and space complexity are always considered with respect to some measure of the prob-
lem difﬁculty. In theoretical computer science, the typical measure is the size of the state
space graph, |V | + |E|, where V is the set of vertices (nodes) of the graph and E is the set
of edges (links). This is appropriate when the graph is an explicit data structure that is input
to the search program. (The map of Romania is an example of this.) In AI, the graph is often
represented implicitly by the initial state, actions, and transition model and is frequently inﬁ-
nite. For these reasons, complexity is expressed in terms of three quantities: b, the branching
factor or maximum number of successors of any node; d, the depth of the shallowest goal
BRANCHING FACTOR
DEPTH
node (i.e., the number of steps along the path from the root); and m, the maximum length of
any path in the state space. Time is often measured in terms of the number of nodes generated
during the search, and space in terms of the maximum number of nodes stored in memory.
For the most part, we describe time and space complexity for search on a tree; for a graph,
the answer depends on how “redundant” the paths in the state space are.
To assess the effectiveness of a search algorithm, we can consider just the search cost—
SEARCH COST
which typically depends on the time complexity but can also include a term for memory
usage—or we can use the total cost, which combines the search cost and the path cost of the
TOTAL COST
solution found. For the problem of ﬁnding a route from Arad to Bucharest, the search cost
is the amount of time taken by the search and the solution cost is the total length of the path

Section 3.4.
Uninformed Search Strategies

in kilometers. Thus, to compute the total cost, we have to add milliseconds and kilometers.
There is no “ofﬁcial exchange rate” between the two, but it might be reasonable in this case to
convert kilometers into milliseconds by using an estimate of the car’s average speed (because
time is what the agent cares about). This enables the agent to ﬁnd an optimal tradeoff point
at which further computation to ﬁnd a shorter path becomes counterproductive. The more
general problem of tradeoffs between different goods is taken up in Chapter 16.
3.4
UNINFORMED SEARCH STRATEGIES
This section covers several search strategies that come under the heading of uninformed
search (also called blind search). The term means that the strategies have no additional
UNINFORMED
SEARCH
BLIND SEARCH
information about states beyond that provided in the problem deﬁnition. All they can do is
generate successors and distinguish a goal state from a non-goal state. All search strategies
are distinguished by the order in which nodes are expanded. Strategies that know whether
one non-goal state is “more promising” than another are called informed search or heuristic
INFORMED SEARCH
search strategies; they are covered in Section 3.5.
HEURISTIC SEARCH
3.4.1
Breadth-ﬁrst search
Breadth-ﬁrst search is a simple strategy in which the root node is expanded ﬁrst, then all the
BREADTH-FIRST
SEARCH
successors of the root node are expanded next, then their successors, and so on. In general,
all the nodes are expanded at a given depth in the search tree before any nodes at the next
level are expanded.
Breadth-ﬁrst search is an instance of the general graph-search algorithm (Figure 3.7) in
which the shallowest unexpanded node is chosen for expansion. This is achieved very simply
by using a FIFO queue for the frontier. Thus, new nodes (which are always deeper than their
parents) go to the back of the queue, and old nodes, which are shallower than the new nodes,
get expanded ﬁrst. There is one slight tweak on the general graph-search algorithm, which is
that the goal test is applied to each node when it is generated rather than when it is selected for
expansion. This decision is explained below, where we discuss time complexity. Note also
that the algorithm, following the general template for graph search, discards any new path to
a state already in the frontier or explored set; it is easy to see that any such path must be at
least as deep as the one already found. Thus, breadth-ﬁrst search always has the shallowest
path to every node on the frontier.
Pseudocode is given in Figure 3.11. Figure 3.12 shows the progress of the search on a
simple binary tree.
How does breadth-ﬁrst search rate according to the four criteria from the previous sec-
tion? We can easily see that it is complete—if the shallowest goal node is at some ﬁnite depth
d, breadth-ﬁrst search will eventually ﬁnd it after generating all shallower nodes (provided
the branching factor b is ﬁnite). Note that as soon as a goal node is generated, we know it
is the shallowest goal node because all shallower nodes must have been generated already
and failed the goal test. Now, the shallowest goal node is not necessarily the optimal one;

Chapter
3.
Solving Problems by Searching
function BREADTH-FIRST-SEARCH(problem) returns a solution, or failure
node ←a node with STATE = problem.INITIAL-STATE, PATH-COST = 0
if problem.GOAL-TEST(node.STATE) then return SOLUTION(node)
frontier ←a FIFO queue with node as the only element
explored ←an empty set
loop do
if EMPTY?(frontier) then return failure
node ←POP(frontier) /* chooses the shallowest node in frontier */
add node.STATE to explored
for each action in problem.ACTIONS(node.STATE) do
child ←CHILD-NODE(problem,node,action)
if child.STATE is not in explored or frontier then
if problem.GOAL-TEST(child.STATE) then return SOLUTION(child)
frontier ←INSERT(child,frontier)
Figure 3.11
Breadth-ﬁrst search on a graph.
technically, breadth-ﬁrst search is optimal if the path cost is a nondecreasing function of the
depth of the node. The most common such scenario is that all actions have the same cost.
So far, the news about breadth-ﬁrst search has been good. The news about time and
space is not so good. Imagine searching a uniform tree where every state has b successors.
The root of the search tree generates b nodes at the ﬁrst level, each of which generates b more
nodes, for a total of b2 at the second level. Each of these generates b more nodes, yielding b3
nodes at the third level, and so on. Now suppose that the solution is at depth d. In the worst
case, it is the last node generated at that level. Then the total number of nodes generated is
b + b2 + b3 + · · · + bd = O(bd) .
(If the algorithm were to apply the goal test to nodes when selected for expansion, rather than
when generated, the whole layer of nodes at depth d would be expanded before the goal was
detected and the time complexity would be O(bd+1).)
As for space complexity: for any kind of graph search, which stores every expanded
node in the explored set, the space complexity is always within a factor of b of the time
complexity. For breadth-ﬁrst graph search in particular, every node generated remains in
memory. There will be O(bd−1) nodes in the explored set and O(bd) nodes in the frontier,
A
B
C
E
F
G
D
A
B
D
E
F
G
C
A
C
D
E
F
G
B
B
C
D
E
F
G
A
Figure 3.12
Breadth-ﬁrst search on a simple binary tree. At each stage, the node to be
expanded next is indicated by a marker.

Section 3.4.
Uninformed Search Strategies

so the space complexity is O(bd), i.e., it is dominated by the size of the frontier. Switching
to a tree search would not save much space, and in a state space with many redundant paths,
switching could cost a great deal of time.
An exponential complexity bound such as O(bd) is scary. Figure 3.13 shows why. It
lists, for various values of the solution depth d, the time and memory required for a breadth-
ﬁrst search with branching factor b = 10. The table assumes that 1 million nodes can be
generated per second and that a node requires 1000 bytes of storage. Many search problems
ﬁt roughly within these assumptions (give or take a factor of 100) when run on a modern
personal computer.
Depth
Nodes
Time
Memory

.11 milliseconds
107 kilobytes

11,110
11 milliseconds
10.6 megabytes

1.1 seconds
1 gigabyte

2 minutes
103 gigabytes

3 hours
10 terabytes

13 days
1 petabyte

3.5 years
99 petabytes

350 years
10 exabytes
Figure 3.13
Time and memory requirements for breadth-ﬁrst search. The numbers shown
assume branching factor b = 10; 1 million nodes/second; 1000 bytes/node.
Two lessons can be learned from Figure 3.13. First, the memory requirements are a
bigger problem for breadth-ﬁrst search than is the execution time. One might wait 13 days
for the solution to an important problem with search depth 12, but no personal computer has
the petabyte of memory it would take. Fortunately, other strategies require less memory.
The second lesson is that time is still a major factor. If your problem has a solution at
depth 16, then (given our assumptions) it will take about 350 years for breadth-ﬁrst search (or
indeed any uninformed search) to ﬁnd it. In general, exponential-complexity search problems
cannot be solved by uninformed methods for any but the smallest instances.
3.4.2
Uniform-cost search
When all step costs are equal, breadth-ﬁrst search is optimal because it always expands the
shallowest unexpanded node. By a simple extension, we can ﬁnd an algorithm that is optimal
with any step-cost function. Instead of expanding the shallowest node, uniform-cost search
UNIFORM-COST
SEARCH
expands the node n with the lowest path cost g(n). This is done by storing the frontier as a
priority queue ordered by g. The algorithm is shown in Figure 3.14.
In addition to the ordering of the queue by path cost, there are two other signiﬁcant
differences from breadth-ﬁrst search. The ﬁrst is that the goal test is applied to a node when
it is selected for expansion (as in the generic graph-search algorithm shown in Figure 3.7)
rather than when it is ﬁrst generated. The reason is that the ﬁrst goal node that is generated

Chapter
3.
Solving Problems by Searching
function UNIFORM-COST-SEARCH(problem) returns a solution, or failure
node ←a node with STATE = problem.INITIAL-STATE, PATH-COST = 0
frontier ←a priority queue ordered by PATH-COST, with node as the only element
explored ←an empty set
loop do
if EMPTY?(frontier) then return failure
node ←POP(frontier) /* chooses the lowest-cost node in frontier */
if problem.GOAL-TEST(node.STATE) then return SOLUTION(node)
add node.STATE to explored
for each action in problem.ACTIONS(node.STATE) do
child ←CHILD-NODE(problem,node,action)
if child.STATE is not in explored or frontier then
frontier ←INSERT(child,frontier)
else if child.STATE is in frontier with higher PATH-COST then
replace that frontier node with child
Figure 3.14
Uniform-cost search on a graph. The algorithm is identical to the general
graph search algorithm in Figure 3.7, except for the use of a priority queue and the addition
of an extra check in case a shorter path to a frontier state is discovered. The data structure for
frontier needs to support efﬁcient membership testing, so it should combine the capabilities
of a priority queue and a hash table.
Sibiu
Fagaras
Pitesti
Rimnicu Vilcea
Bucharest

Figure 3.15
Part of the Romania state space, selected to illustrate uniform-cost search.
may be on a suboptimal path. The second difference is that a test is added in case a better
path is found to a node currently on the frontier.
Both of these modiﬁcations come into play in the example shown in Figure 3.15, where
the problem is to get from Sibiu to Bucharest. The successors of Sibiu are Rimnicu Vilcea and
Fagaras, with costs 80 and 99, respectively. The least-cost node, Rimnicu Vilcea, is expanded
next, adding Pitesti with cost 80 + 97 = 177. The least-cost node is now Fagaras, so it is
expanded, adding Bucharest with cost 99 + 211 = 310. Now a goal node has been generated,
but uniform-cost search keeps going, choosing Pitesti for expansion and adding a second path

Section 3.4.
Uninformed Search Strategies

to Bucharest with cost 80+97+101 = 278. Now the algorithm checks to see if this new path
is better than the old one; it is, so the old one is discarded. Bucharest, now with g-cost 278,
is selected for expansion and the solution is returned.
It is easy to see that uniform-cost search is optimal in general. First, we observe that
whenever uniform-cost search selects a node n for expansion, the optimal path to that node
has been found. (Were this not the case, there would have to be another frontier node n′ on
the optimal path from the start node to n, by the graph separation property of Figure 3.9;
by deﬁnition, n′ would have lower g-cost than n and would have been selected ﬁrst.) Then,
because step costs are nonnegative, paths never get shorter as nodes are added. These two
facts together imply that uniform-cost search expands nodes in order of their optimal path
cost. Hence, the ﬁrst goal node selected for expansion must be the optimal solution.
Uniform-cost search does not care about the number of steps a path has, but only about
their total cost. Therefore, it will get stuck in an inﬁnite loop if there is a path with an inﬁnite
sequence of zero-cost actions—for example, a sequence of NoOp actions.6 Completeness is
guaranteed provided the cost of every step exceeds some small positive constant ϵ.
Uniform-cost search is guided by path costs rather than depths, so its complexity is not
easily characterized in terms of b and d. Instead, let C∗be the cost of the optimal solution,7
and assume that every action costs at least ϵ. Then the algorithm’s worst-case time and space
complexity is O(b1+⌊C∗/ϵ⌋), which can be much greater than bd. This is because uniform-
cost search can explore large trees of small steps before exploring paths involving large and
perhaps useful steps. When all step costs are equal, b1+⌊C∗/ϵ⌋is just bd+1. When all step
costs are the same, uniform-cost search is similar to breadth-ﬁrst search, except that the latter
stops as soon as it generates a goal, whereas uniform-cost search examines all the nodes at
the goal’s depth to see if one has a lower cost; thus uniform-cost search does strictly more
work by expanding nodes at depth d unnecessarily.
3.4.3
Depth-ﬁrst search
Depth-ﬁrst search always expands the deepest node in the current frontier of the search tree.
DEPTH-FIRST
SEARCH
The progress of the search is illustrated in Figure 3.16. The search proceeds immediately
to the deepest level of the search tree, where the nodes have no successors. As those nodes
are expanded, they are dropped from the frontier, so then the search “backs up” to the next
deepest node that still has unexplored successors.
The depth-ﬁrst search algorithm is an instance of the graph-search algorithm in Fig-
ure 3.7; whereas breadth-ﬁrst-search uses a FIFO queue, depth-ﬁrst search uses a LIFO queue.
A LIFO queue means that the most recently generated node is chosen for expansion. This
must be the deepest unexpanded node because it is one deeper than its parent—which, in turn,
was the deepest unexpanded node when it was selected.
As an alternative to the GRAPH-SEARCH-style implementation, it is common to im-
plement depth-ﬁrst search with a recursive function that calls itself on each of its children in
turn. (A recursive depth-ﬁrst algorithm incorporating a depth limit is shown in Figure 3.17.)
6 NoOp, or “no operation,” is the name of an assembly language instruction that does nothing.
7 Here, and throughout the book, the “star” in C∗means an optimal value for C.

Chapter
3.
Solving Problems by Searching
A
C
F
G
M
N
O
A
C
F
G
L
M
N
O
A
C
F
G
L
M
N
O
C
F
G
L
M
N
O
A
B
C
E
F
G
K
L
M
N
O
A
C
E
F
G
J
K
L
M
N
O
A
C
E
F
G
J
K
L
M
N
O
A
B
C
D
E
F
G
I
J
K
L
M
N
O
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
Figure 3.16
Depth-ﬁrst search on a binary tree. The unexplored region is shown in light
gray. Explored nodes with no descendants in the frontier are removed from memory. Nodes
at depth 3 have no successors and M is the only goal node.
The properties of depth-ﬁrst search depend strongly on whether the graph-search or
tree-search version is used. The graph-search version, which avoids repeated states and re-
dundant paths, is complete in ﬁnite state spaces because it will eventually expand every node.
The tree-search version, on the other hand, is not complete—for example, in Figure 3.6 the
algorithm will follow the Arad–Sibiu–Arad–Sibiu loop forever. Depth-ﬁrst tree search can be
modiﬁed at no extra memory cost so that it checks new states against those on the path from
the root to the current node; this avoids inﬁnite loops in ﬁnite state spaces but does not avoid
the proliferation of redundant paths. In inﬁnite state spaces, both versions fail if an inﬁnite
non-goal path is encountered. For example, in Knuth’s 4 problem, depth-ﬁrst search would
keep applying the factorial operator forever.
For similar reasons, both versions are nonoptimal. For example, in Figure 3.16, depth-
ﬁrst search will explore the entire left subtree even if node C is a goal node. If node J were
also a goal node, then depth-ﬁrst search would return it as a solution instead of C, which
would be a better solution; hence, depth-ﬁrst search is not optimal.

Section 3.4.
Uninformed Search Strategies

The time complexity of depth-ﬁrst graph search is bounded by the size of the state space
(which may be inﬁnite, of course). A depth-ﬁrst tree search, on the other hand, may generate
all of the O(bm) nodes in the search tree, where m is the maximum depth of any node; this
can be much greater than the size of the state space. Note that m itself can be much larger
than d (the depth of the shallowest solution) and is inﬁnite if the tree is unbounded.
So far, depth-ﬁrst search seems to have no clear advantage over breadth-ﬁrst search,
so why do we include it? The reason is the space complexity. For a graph search, there is
no advantage, but a depth-ﬁrst tree search needs to store only a single path from the root
to a leaf node, along with the remaining unexpanded sibling nodes for each node on the
path. Once a node has been expanded, it can be removed from memory as soon as all its
descendants have been fully explored. (See Figure 3.16.) For a state space with branching
factor b and maximum depth m, depth-ﬁrst search requires storage of only O(bm) nodes.
Using the same assumptions as for Figure 3.13 and assuming that nodes at the same depth as
the goal node have no successors, we ﬁnd that depth-ﬁrst search would require 156 kilobytes
instead of 10 exabytes at depth d = 16, a factor of 7 trillion times less space. This has
led to the adoption of depth-ﬁrst tree search as the basic workhorse of many areas of AI,
including constraint satisfaction (Chapter 6), propositional satisﬁability (Chapter 7), and logic
programming (Chapter 9). For the remainder of this section, we focus primarily on the tree-
search version of depth-ﬁrst search.
A variant of depth-ﬁrst search called backtracking search uses still less memory. (See
BACKTRACKING
SEARCH
Chapter 6 for more details.) In backtracking, only one successor is generated at a time rather
than all successors; each partially expanded node remembers which successor to generate
next. In this way, only O(m) memory is needed rather than O(bm). Backtracking search
facilitates yet another memory-saving (and time-saving) trick: the idea of generating a suc-
cessor by modifying the current state description directly rather than copying it ﬁrst. This
reduces the memory requirements to just one state description and O(m) actions. For this to
work, we must be able to undo each modiﬁcation when we go back to generate the next suc-
cessor. For problems with large state descriptions, such as robotic assembly, these techniques
are critical to success.
3.4.4
Depth-limited search
The embarrassing failure of depth-ﬁrst search in inﬁnite state spaces can be alleviated by
supplying depth-ﬁrst search with a predetermined depth limit ℓ. That is, nodes at depth ℓare
treated as if they have no successors. This approach is called depth-limited search. The
DEPTH-LIMITED
SEARCH
depth limit solves the inﬁnite-path problem. Unfortunately, it also introduces an additional
source of incompleteness if we choose ℓ< d, that is, the shallowest goal is beyond the depth
limit. (This is likely when d is unknown.) Depth-limited search will also be nonoptimal if
we choose ℓ> d. Its time complexity is O(bℓ) and its space complexity is O(bℓ). Depth-ﬁrst
search can be viewed as a special case of depth-limited search with ℓ= ∞.
Sometimes, depth limits can be based on knowledge of the problem. For example, on
the map of Romania there are 20 cities. Therefore, we know that if there is a solution, it must
be of length 19 at the longest, so ℓ= 19 is a possible choice. But in fact if we studied the

Chapter
3.
Solving Problems by Searching
function DEPTH-LIMITED-SEARCH(problem,limit) returns a solution, or failure/cutoff
return RECURSIVE-DLS(MAKE-NODE(problem.INITIAL-STATE),problem,limit)
function RECURSIVE-DLS(node,problem,limit) returns a solution, or failure/cutoff
if problem.GOAL-TEST(node.STATE) then return SOLUTION(node)
else if limit = 0 then return cutoﬀ
else
cutoﬀoccurred? ←false
for each action in problem.ACTIONS(node.STATE) do
child ←CHILD-NODE(problem,node,action)
result ←RECURSIVE-DLS(child,problem,limit −1)
if result = cutoﬀthen cutoﬀoccurred? ←true
else if result̸ = failure then return result
if cutoﬀoccurred? then return cutoﬀelse return failure
Figure 3.17
A recursive implementation of depth-limited tree search.
map carefully, we would discover that any city can be reached from any other city in at most
9 steps. This number, known as the diameter of the state space, gives us a better depth limit,
DIAMETER
which leads to a more efﬁcient depth-limited search. For most problems, however, we will
not know a good depth limit until we have solved the problem.
Depth-limited search can be implemented as a simple modiﬁcation to the general tree-
or graph-search algorithm. Alternatively, it can be implemented as a simple recursive al-
gorithm as shown in Figure 3.17. Notice that depth-limited search can terminate with two
kinds of failure: the standard failure value indicates no solution; the cutoﬀvalue indicates
no solution within the depth limit.
3.4.5
Iterative deepening depth-ﬁrst search
Iterative deepening search (or iterative deepening depth-ﬁrst search) is a general strategy,
ITERATIVE
DEEPENING SEARCH
often used in combination with depth-ﬁrst tree search, that ﬁnds the best depth limit. It does
this by gradually increasing the limit—ﬁrst 0, then 1, then 2, and so on—until a goal is found.
This will occur when the depth limit reaches d, the depth of the shallowest goal node. The
algorithm is shown in Figure 3.18. Iterative deepening combines the beneﬁts of depth-ﬁrst
and breadth-ﬁrst search. Like depth-ﬁrst search, its memory requirements are modest: O(bd)
to be precise. Like breadth-ﬁrst search, it is complete when the branching factor is ﬁnite and
optimal when the path cost is a nondecreasing function of the depth of the node. Figure 3.19
shows four iterations of ITERATIVE-DEEPENING-SEARCH on a binary search tree, where the
solution is found on the fourth iteration.
Iterative deepening search may seem wasteful because states are generated multiple
times. It turns out this is not too costly. The reason is that in a search tree with the same (or
nearly the same) branching factor at each level, most of the nodes are in the bottom level,
so it does not matter much that the upper levels are generated multiple times. In an iterative
deepening search, the nodes on the bottom level (depth d) are generated once, those on the

Section 3.4.
Uninformed Search Strategies

function ITERATIVE-DEEPENING-SEARCH(problem) returns a solution, or failure
for depth = 0 to ∞do
result ←DEPTH-LIMITED-SEARCH(problem,depth)
if result̸ = cutoff then return result
Figure 3.18
The iterative deepening search algorithm, which repeatedly applies depth-
limited search with increasing limits. It terminates when a solution is found or if the depth-
limited search returns failure, meaning that no solution exists.
Limit = 3
Limit = 2
Limit = 1
Limit = 0
A
A
A
B
C
A
B
C
A
B
C
A
B
C
A
B
C
D
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
A
B
C
D
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
A
B
C
D
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
A
B
C
D
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
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
A
B
C
D
E
F
G
H
J
K
L
M
N
O
I
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
Figure 3.19
Four iterations of iterative deepening search on a binary tree.

Chapter
3.
Solving Problems by Searching
next-to-bottom level are generated twice, and so on, up to the children of the root, which are
generated d times. So the total number of nodes generated in the worst case is
N(IDS) = (d)b + (d −1)b2 + · · · + (1)bd ,
which gives a time complexity of O(bd)—asymptotically the same as breadth-ﬁrst search.
There is some extra cost for generating the upper levels multiple times, but it is not large. For
example, if b = 10 and d = 5, the numbers are
N(IDS) = 50 + 400 + 3, 000 + 20, 000 + 100, 000 = 123, 450
N(BFS) = 10 + 100 + 1, 000 + 10, 000 + 100, 000 = 111, 110 .
If you are really concerned about repeating the repetition, you can use a hybrid approach
that runs breadth-ﬁrst search until almost all the available memory is consumed, and then
runs iterative deepening from all the nodes in the frontier. In general, iterative deepening is
the preferred uninformed search method when the search space is large and the depth of the
solution is not known.
Iterative deepening search is analogous to breadth-ﬁrst search in that it explores a com-
plete layer of new nodes at each iteration before going on to the next layer. It would seem
worthwhile to develop an iterative analog to uniform-cost search, inheriting the latter algo-
rithm’s optimality guarantees while avoiding its memory requirements. The idea is to use
increasing path-cost limits instead of increasing depth limits. The resulting algorithm, called
iterative lengthening search, is explored in Exercise 3.17. It turns out, unfortunately, that
ITERATIVE
LENGTHENING
SEARCH
iterative lengthening incurs substantial overhead compared to uniform-cost search.
3.4.6
Bidirectional search
The idea behind bidirectional search is to run two simultaneous searches—one forward from
the initial state and the other backward from the goal—hoping that the two searches meet in
the middle (Figure 3.20). The motivation is that bd/2 + bd/2 is much less than bd, or in the
ﬁgure, the area of the two small circles is less than the area of one big circle centered on the
start and reaching to the goal.
Bidirectional search is implemented by replacing the goal test with a check to see
whether the frontiers of the two searches intersect; if they do, a solution has been found.
(It is important to realize that the ﬁrst such solution found may not be optimal, even if the
two searches are both breadth-ﬁrst; some additional search is required to make sure there
isn’t another short-cut across the gap.) The check can be done when each node is generated
or selected for expansion and, with a hash table, will take constant time. For example, if a
problem has solution depth d = 6, and each direction runs breadth-ﬁrst search one node at a
time, then in the worst case the two searches meet when they have generated all of the nodes
at depth 3. For b = 10, this means a total of 2,220 node generations, compared with 1,111,110
for a standard breadth-ﬁrst search. Thus, the time complexity of bidirectional search using
breadth-ﬁrst searches in both directions is O(bd/2). The space complexity is also O(bd/2).
We can reduce this by roughly half if one of the two searches is done by iterative deepening,
but at least one of the frontiers must be kept in memory so that the intersection check can be
done. This space requirement is the most signiﬁcant weakness of bidirectional search.

Section 3.4.
Uninformed Search Strategies

Goal
Start
Figure 3.20
A schematic view of a bidirectional search that is about to succeed when a
branch from the start node meets a branch from the goal node.
The reduction in time complexity makes bidirectional search attractive, but how do we
search backward? This is not as easy as it sounds. Let the predecessors of a state x be all
PREDECESSOR
those states that have x as a successor. Bidirectional search requires a method for computing
predecessors. When all the actions in the state space are reversible, the predecessors of x are
just its successors. Other cases may require substantial ingenuity.
Consider the question of what we mean by “the goal” in searching “backward from the
goal.” For the 8-puzzle and for ﬁnding a route in Romania, there is just one goal state, so the
backward search is very much like the forward search. If there are several explicitly listed
goal states—for example, the two dirt-free goal states in Figure 3.3—then we can construct a
new dummy goal state whose immediate predecessors are all the actual goal states. But if the
goal is an abstract description, such as the goal that “no queen attacks another queen” in the
n-queens problem, then bidirectional search is difﬁcult to use.
3.4.7
Comparing uninformed search strategies
Figure 3.21 compares search strategies in terms of the four evaluation criteria set forth in
Section 3.3.2. This comparison is for tree-search versions. For graph searches, the main
differences are that depth-ﬁrst search is complete for ﬁnite state spaces and that the space and
time complexities are bounded by the size of the state space.
Criterion
Breadth-
Uniform-
Depth-
Depth-
Iterative
Bidirectional
First
Cost
First
Limited
Deepening
(if applicable)
Complete?
Yesa
Yesa,b
No
No
Yesa
Yesa,d
Time
O(bd)
O(b1+⌊C∗/ϵ⌋)
O(bm)
O(bℓ)
O(bd)
O(bd/2)
Space
O(bd)
O(b1+⌊C∗/ϵ⌋)
O(bm)
O(bℓ)
O(bd)
O(bd/2)
Optimal?
Yesc
Yes
No
No
Yesc
Yesc,d
Figure 3.21
Evaluation of tree-search strategies. b is the branching factor; d is the depth
of the shallowest solution; m is the maximum depth of the search tree; l is the depth limit.
Superscript caveats are as follows: a complete if b is ﬁnite; b complete if step costs ≥ϵ for
positive ϵ; c optimal if step costs are all identical; d if both directions use breadth-ﬁrst search.

---

## Module 3 Textbook

Chapter
3.
Solving Problems by Searching
3.5
INFORMED (HEURISTIC) SEARCH STRATEGIES
This section shows how an informed search strategy—one that uses problem-speciﬁc knowl-
INFORMED SEARCH
edge beyond the deﬁnition of the problem itself—can ﬁnd solutions more efﬁciently than can
an uninformed strategy.
The general approach we consider is called best-ﬁrst search. Best-ﬁrst search is an
BEST-FIRST SEARCH
instance of the general TREE-SEARCH or GRAPH-SEARCH algorithm in which a node is
selected for expansion based on an evaluation function, f(n). The evaluation function is
EVALUATION
FUNCTION
construed as a cost estimate, so the node with the lowest evaluation is expanded ﬁrst. The
implementation of best-ﬁrst graph search is identical to that for uniform-cost search (Fig-
ure 3.14), except for the use of f instead of g to order the priority queue.
The choice of f determines the search strategy. (For example, as Exercise 3.21 shows,
best-ﬁrst tree search includes depth-ﬁrst search as a special case.) Most best-ﬁrst algorithms
include as a component of f a heuristic function, denoted h(n):
HEURISTIC
FUNCTION
h(n) = estimated cost of the cheapest path from the state at node n to a goal state.
(Notice that h(n) takes a node as input, but, unlike g(n), it depends only on the state at that
node.) For example, in Romania, one might estimate the cost of the cheapest path from Arad
to Bucharest via the straight-line distance from Arad to Bucharest.
Heuristic functions are the most common form in which additional knowledge of the
problem is imparted to the search algorithm. We study heuristics in more depth in Section 3.6.
For now, we consider them to be arbitrary, nonnegative, problem-speciﬁc functions, with one
constraint: if n is a goal node, then h(n) = 0. The remainder of this section covers two ways
to use heuristic information to guide search.
3.5.1
Greedy best-ﬁrst search
Greedy best-ﬁrst search8 tries to expand the node that is closest to the goal, on the grounds
GREEDY BEST-FIRST
SEARCH
that this is likely to lead to a solution quickly. Thus, it evaluates nodes by using just the
heuristic function; that is, f(n) = h(n).
Let us see how this works for route-ﬁnding problems in Romania; we use the straight-
line distance heuristic, which we will call hSLD.
If the goal is Bucharest, we need to
STRAIGHT-LINE
DISTANCE
know the straight-line distances to Bucharest, which are shown in Figure 3.22. For exam-
ple, hSLD(In(Arad)) = 366. Notice that the values of hSLD cannot be computed from the
problem description itself. Moreover, it takes a certain amount of experience to know that
hSLD is correlated with actual road distances and is, therefore, a useful heuristic.
Figure 3.23 shows the progress of a greedy best-ﬁrst search using hSLD to ﬁnd a path
from Arad to Bucharest. The ﬁrst node to be expanded from Arad will be Sibiu because it
is closer to Bucharest than either Zerind or Timisoara. The next node to be expanded will
be Fagaras because it is closest. Fagaras in turn generates Bucharest, which is the goal. For
this particular problem, greedy best-ﬁrst search using hSLD ﬁnds a solution without ever
8 Our ﬁrst edition called this greedy search; other authors have called it best-ﬁrst search. Our more general
usage of the latter term follows Pearl (1984).
MODULE 3

Section 3.5.
Informed (Heuristic) Search Strategies

Urziceni
Neamt
Oradea
Zerind
Timisoara
Mehadia
Sibiu
Pitesti
Rimnicu Vilcea
Vaslui
Bucharest
Giurgiu
Hirsova
Eforie
Arad
Lugoj
Drobeta
Craiova
Fagaras
Iasi

Figure 3.22
Values of hSLD—straight-line distances to Bucharest.
expanding a node that is not on the solution path; hence, its search cost is minimal. It is
not optimal, however: the path via Sibiu and Fagaras to Bucharest is 32 kilometers longer
than the path through Rimnicu Vilcea and Pitesti. This shows why the algorithm is called
“greedy”—at each step it tries to get as close to the goal as it can.
Greedy best-ﬁrst tree search is also incomplete even in a ﬁnite state space, much like
depth-ﬁrst search. Consider the problem of getting from Iasi to Fagaras. The heuristic sug-
gests that Neamt be expanded ﬁrst because it is closest to Fagaras, but it is a dead end. The
solution is to go ﬁrst to Vaslui—a step that is actually farther from the goal according to
the heuristic—and then to continue to Urziceni, Bucharest, and Fagaras. The algorithm will
never ﬁnd this solution, however, because expanding Neamt puts Iasi back into the frontier,
Iasi is closer to Fagaras than Vaslui is, and so Iasi will be expanded again, leading to an inﬁ-
nite loop. (The graph search version is complete in ﬁnite spaces, but not in inﬁnite ones.) The
worst-case time and space complexity for the tree version is O(bm), where m is the maximum
depth of the search space. With a good heuristic function, however, the complexity can be
reduced substantially. The amount of the reduction depends on the particular problem and on
the quality of the heuristic.
3.5.2
A* search: Minimizing the total estimated solution cost
The most widely known form of best-ﬁrst search is called A∗search (pronounced “A-star
A∗SEARCH
search”). It evaluates nodes by combining g(n), the cost to reach the node, and h(n), the cost
to get from the node to the goal:
f(n) = g(n) + h(n) .
Since g(n) gives the path cost from the start node to node n, and h(n) is the estimated cost
of the cheapest path from n to the goal, we have
f(n) = estimated cost of the cheapest solution through n .
Thus, if we are trying to ﬁnd the cheapest solution, a reasonable thing to try ﬁrst is the
node with the lowest value of g(n) + h(n). It turns out that this strategy is more than just
reasonable: provided that the heuristic function h(n) satisﬁes certain conditions, A∗search is
both complete and optimal. The algorithm is identical to UNIFORM-COST-SEARCH except
that A∗uses g + h instead of g.

Chapter
3.
Solving Problems by Searching
Rimnicu Vilcea
Zerind
Arad
Sibiu
Arad
Fagaras
Oradea
Timisoara
Sibiu
Bucharest

Rimnicu Vilcea
Arad
Sibiu
Arad
Fagaras
Oradea
Timisoara

Zerind

Zerind
Arad
Sibiu
Timisoara

Arad

(a) The initial state
(b) After expanding Arad
(c) After expanding Sibiu
(d) After expanding Fagaras
Figure 3.23
Stages in a greedy best-ﬁrst tree search for Bucharest with the straight-line
distance heuristic hSLD. Nodes are labeled with their h-values.
Conditions for optimality: Admissibility and consistency
The ﬁrst condition we require for optimality is that h(n) be an admissible heuristic. An
ADMISSIBLE
HEURISTIC
admissible heuristic is one that never overestimates the cost to reach the goal. Because g(n)
is the actual cost to reach n along the current path, and f(n) = g(n) + h(n), we have as an
immediate consequence that f(n) never overestimates the true cost of a solution along the
current path through n.
Admissible heuristics are by nature optimistic because they think the cost of solving
the problem is less than it actually is. An obvious example of an admissible heuristic is the
straight-line distance hSLD that we used in getting to Bucharest. Straight-line distance is
admissible because the shortest path between any two points is a straight line, so the straight

Section 3.5.
Informed (Heuristic) Search Strategies

line cannot be an overestimate. In Figure 3.24, we show the progress of an A∗tree search for
Bucharest. The values of g are computed from the step costs in Figure 3.2, and the values of
hSLD are given in Figure 3.22. Notice in particular that Bucharest ﬁrst appears on the frontier
at step (e), but it is not selected for expansion because its f-cost (450) is higher than that of
Pitesti (417). Another way to say this is that there might be a solution through Pitesti whose
cost is as low as 417, so the algorithm will not settle for a solution that costs 450.
A second, slightly stronger condition called consistency (or sometimes monotonicity)
CONSISTENCY
MONOTONICITY
is required only for applications of A∗to graph search.9 A heuristic h(n) is consistent if, for
every node n and every successor n′ of n generated by any action a, the estimated cost of
reaching the goal from n is no greater than the step cost of getting to n′ plus the estimated
cost of reaching the goal from n′:
h(n) ≤c(n, a, n′) + h(n′) .
This is a form of the general triangle inequality, which stipulates that each side of a triangle
TRIANGLE
INEQUALITY
cannot be longer than the sum of the other two sides. Here, the triangle is formed by n, n′,
and the goal Gn closest to n. For an admissible heuristic, the inequality makes perfect sense:
if there were a route from n to Gn via n′ that was cheaper than h(n), that would violate the
property that h(n) is a lower bound on the cost to reach Gn.
It is fairly easy to show (Exercise 3.29) that every consistent heuristic is also admissible.
Consistency is therefore a stricter requirement than admissibility, but one has to work quite
hard to concoct heuristics that are admissible but not consistent. All the admissible heuristics
we discuss in this chapter are also consistent. Consider, for example, hSLD. We know that
the general triangle inequality is satisﬁed when each side is measured by the straight-line
distance and that the straight-line distance between n and n′ is no greater than c(n, a, n′).
Hence, hSLD is a consistent heuristic.
Optimality of A*
As we mentioned earlier, A∗has the following properties: the tree-search version of A∗is
optimal if h(n) is admissible, while the graph-search version is optimal if h(n) is consistent.
We show the second of these two claims since it is more useful. The argument es-
sentially mirrors the argument for the optimality of uniform-cost search, with g replaced by
f—just as in the A∗algorithm itself.
The ﬁrst step is to establish the following: if h(n) is consistent, then the values of
f(n) along any path are nondecreasing. The proof follows directly from the deﬁnition of
consistency. Suppose n′ is a successor of n; then g(n′) = g(n) + c(n, a, n′) for some action
a, and we have
f(n′) = g(n′) + h(n′) = g(n) + c(n, a, n′) + h(n′) ≥g(n) + h(n) = f(n) .
The next step is to prove that whenever A∗selects a node n for expansion, the optimal path
to that node has been found. Were this not the case, there would have to be another frontier
node n′ on the optimal path from the start node to n, by the graph separation property of
9 With an admissible but inconsistent heuristic, A∗requires some extra bookkeeping to ensure optimality.

Chapter
3.
Solving Problems by Searching
(a) The initial state
(b) After expanding Arad
(c) After expanding Sibiu
Arad
Sibiu
Timisoara
447=118+329
Zerind
449=75+374
393=140+253
Arad
366=0+366
(d) After expanding Rimnicu Vilcea
(e) After expanding Fagaras
(f) After expanding Pitesti
Zerind
Arad
Sibiu
Arad
Timisoara
Rimnicu Vilcea
Fagaras
Oradea
447=118+329
449=75+374
646=280+366
413=220+193
415=239+176 671=291+380
Zerind
Arad
Sibiu
Timisoara
447=118+329
449=75+374
Rimnicu Vilcea
Craiova
Pitesti
Sibiu
526=366+160
553=300+253
417=317+100
Zerind
Arad
Sibiu
Arad
Timisoara
Sibiu
Bucharest
Fagaras
Oradea
Craiova
Pitesti
Sibiu
447=118+329
449=75+374
646=280+366
591=338+253
450=450+0
526=366+160
553=300+253
417=317+100
671=291+380
Zerind
Arad
Sibiu
Arad
Timisoara
Sibiu
Bucharest
Oradea
Craiova
Pitesti
Sibiu
Bucharest
Craiova
Rimnicu Vilcea
418=418+0
447=118+329
449=75+374
646=280+366
591=338+253
450=450+0
526=366+160
553=300+253
615=455+160 607=414+193
671=291+380
Rimnicu Vilcea
Fagaras
Rimnicu Vilcea
Arad
Fagaras
Oradea
646=280+366 415=239+176 671=291+380
Figure 3.24
Stages in an A∗search for Bucharest. Nodes are labeled with f = g + h. The
h values are the straight-line distances to Bucharest taken from Figure 3.22.

Section 3.5.
Informed (Heuristic) Search Strategies

O
Z
A
T
L
M
D
C
R
F
P
G
B
U
H
E
V
I
N

S
Figure 3.25
Map of Romania showing contours at f = 380, f = 400, and f = 420, with
Arad as the start state. Nodes inside a given contour have f-costs less than or equal to the
contour value.
Figure 3.9; because f is nondecreasing along any path, n′ would have lower f-cost than n
and would have been selected ﬁrst.
From the two preceding observations, it follows that the sequence of nodes expanded
by A∗using GRAPH-SEARCH is in nondecreasing order of f(n). Hence, the ﬁrst goal node
selected for expansion must be an optimal solution because f is the true cost for goal nodes
(which have h = 0) and all later goal nodes will be at least as expensive.
The fact that f-costs are nondecreasing along any path also means that we can draw
contours in the state space, just like the contours in a topographic map. Figure 3.25 shows
CONTOUR
an example. Inside the contour labeled 400, all nodes have f(n) less than or equal to 400,
and so on. Then, because A∗expands the frontier node of lowest f-cost, we can see that an
A∗search fans out from the start node, adding nodes in concentric bands of increasing f-cost.
With uniform-cost search (A∗search using h(n) = 0), the bands will be “circular”
around the start state. With more accurate heuristics, the bands will stretch toward the goal
state and become more narrowly focused around the optimal path. If C∗is the cost of the
optimal solution path, then we can say the following:
• A∗expands all nodes with f(n) < C∗.
• A∗might then expand some of the nodes right on the “goal contour” (where f(n) = C∗)
before selecting a goal node.
Completeness requires that there be only ﬁnitely many nodes with cost less than or equal to
C∗, a condition that is true if all step costs exceed some ﬁnite ϵ and if b is ﬁnite.
Notice that A∗expands no nodes with f(n) > C∗—for example, Timisoara is not
expanded in Figure 3.24 even though it is a child of the root. We say that the subtree below

Chapter
3.
Solving Problems by Searching
Timisoara is pruned; because hSLD is admissible, the algorithm can safely ignore this subtree
PRUNING
while still guaranteeing optimality. The concept of pruning—eliminating possibilities from
consideration without having to examine them—is important for many areas of AI.
One ﬁnal observation is that among optimal algorithms of this type—algorithms that
extend search paths from the root and use the same heuristic information—A∗is optimally
efﬁcient for any given consistent heuristic. That is, no other optimal algorithm is guaran-
OPTIMALLY
EFFICIENT
teed to expand fewer nodes than A∗(except possibly through tie-breaking among nodes with
f(n) = C∗). This is because any algorithm that does not expand all nodes with f(n) < C∗
runs the risk of missing the optimal solution.
That A∗search is complete, optimal, and optimally efﬁcient among all such algorithms
is rather satisfying. Unfortunately, it does not mean that A∗is the answer to all our searching
needs. The catch is that, for most problems, the number of states within the goal contour
search space is still exponential in the length of the solution. The details of the analysis are
beyond the scope of this book, but the basic results are as follows. For problems with constant
step costs, the growth in run time as a function of the optimal solution depth d is analyzed in
terms of the the absolute error or the relative error of the heuristic. The absolute error is
ABSOLUTE ERROR
RELATIVE ERROR
deﬁned as Δ ≡h∗−h, where h∗is the actual cost of getting from the root to the goal, and
the relative error is deﬁned as ϵ ≡(h∗−h)/h∗.
The complexity results depend very strongly on the assumptions made about the state
space. The simplest model studied is a state space that has a single goal and is essentially a
tree with reversible actions. (The 8-puzzle satisﬁes the ﬁrst and third of these assumptions.)
In this case, the time complexity of A∗is exponential in the maximum absolute error, that is,
O(bΔ). For constant step costs, we can write this as O(bϵd), where d is the solution depth.
For almost all heuristics in practical use, the absolute error is at least proportional to the path
cost h∗, so ϵ is constant or growing and the time complexity is exponential in d. We can
also see the effect of a more accurate heuristic: O(bϵd) = O((bϵ)d), so the effective branching
factor (deﬁned more formally in the next section) is bϵ.
When the state space has many goal states—particularly near-optimal goal states—the
search process can be led astray from the optimal path and there is an extra cost proportional
to the number of goals whose cost is within a factor ϵ of the optimal cost. Finally, in the
general case of a graph, the situation is even worse. There can be exponentially many states
with f(n) < C∗even if the absolute error is bounded by a constant. For example, consider
a version of the vacuum world where the agent can clean up any square for unit cost without
even having to visit it: in that case, squares can be cleaned in any order. With N initially dirty
squares, there are 2N states where some subset has been cleaned and all of them are on an
optimal solution path—and hence satisfy f(n) < C∗—even if the heuristic has an error of 1.
The complexity of A∗often makes it impractical to insist on ﬁnding an optimal solution.
One can use variants of A∗that ﬁnd suboptimal solutions quickly, or one can sometimes
design heuristics that are more accurate but not strictly admissible. In any case, the use of a
good heuristic still provides enormous savings compared to the use of an uninformed search.
In Section 3.6, we look at the question of designing good heuristics.
Computation time is not, however, A∗’s main drawback. Because it keeps all generated
nodes in memory (as do all GRAPH-SEARCH algorithms), A∗usually runs out of space long

Section 3.5.
Informed (Heuristic) Search Strategies

function RECURSIVE-BEST-FIRST-SEARCH(problem) returns a solution, or failure
return RBFS(problem, MAKE-NODE(problem.INITIAL-STATE),∞)
function RBFS(problem,node,f limit) returns a solution, or failure and a new f-cost limit
if problem.GOAL-TEST(node.STATE) then return SOLUTION(node)
successors ←[ ]
for each action in problem.ACTIONS(node.STATE) do
add CHILD-NODE(problem,node,action) into successors
if successors is empty then return failure, ∞
for each s in successors do /* update f with value from previous search, if any */
s.f ←max(s.g + s.h, node.f ))
loop do
best ←the lowest f-value node in successors
if best.f > f limit then return failure, best.f
alternative ←the second-lowest f-value among successors
result,best.f ←RBFS(problem,best,min(f limit, alternative))
if result̸ = failure then return result
Figure 3.26
The algorithm for recursive best-ﬁrst search.
before it runs out of time. For this reason, A∗is not practical for many large-scale prob-
lems. There are, however, algorithms that overcome the space problem without sacriﬁcing
optimality or completeness, at a small cost in execution time. We discuss these next.
3.5.3
Memory-bounded heuristic search
The simplest way to reduce memory requirements for A∗is to adapt the idea of iterative
deepening to the heuristic search context, resulting in the iterative-deepening A∗(IDA∗) al-
ITERATIVE-
DEEPENING
A∗
gorithm. The main difference between IDA∗and standard iterative deepening is that the cutoff
used is the f-cost (g +h) rather than the depth; at each iteration, the cutoff value is the small-
est f-cost of any node that exceeded the cutoff on the previous iteration. IDA∗is practical
for many problems with unit step costs and avoids the substantial overhead associated with
keeping a sorted queue of nodes. Unfortunately, it suffers from the same difﬁculties with real-
valued costs as does the iterative version of uniform-cost search described in Exercise 3.17.
This section brieﬂy examines two other memory-bounded algorithms, called RBFS and MA∗.
Recursive best-ﬁrst search (RBFS) is a simple recursive algorithm that attempts to
RECURSIVE
BEST-FIRST SEARCH
mimic the operation of standard best-ﬁrst search, but using only linear space. The algorithm
is shown in Figure 3.26. Its structure is similar to that of a recursive depth-ﬁrst search, but
rather than continuing indeﬁnitely down the current path, it uses the f limit variable to keep
track of the f-value of the best alternative path available from any ancestor of the current
node. If the current node exceeds this limit, the recursion unwinds back to the alternative
path. As the recursion unwinds, RBFS replaces the f-value of each node along the path
with a backed-up value—the best f-value of its children. In this way, RBFS remembers the
BACKED-UP VALUE
f-value of the best leaf in the forgotten subtree and can therefore decide whether it’s worth

Chapter
3.
Solving Problems by Searching
Zerind
Arad
Sibiu
Arad
Fagaras
Oradea
Craiova
Sibiu
Bucharest
Craiova
Rimnicu Vilcea
Zerind
Arad
Sibiu
Arad
Sibiu
Bucharest
Rimnicu Vilcea
Oradea
Zerind
Arad
Sibiu
Arad
Timisoara
Timisoara
Timisoara
Fagaras
Oradea
Rimnicu Vilcea
Craiova
Pitesti
Sibiu

413 417

415 450

Rimnicu Vilcea
Fagaras

(a) After expanding Arad, Sibiu, 
      and Rimnicu Vilcea
(c) After switching back to Rimnicu Vilcea
      and expanding Pitesti
(b) After unwinding back to Sibiu 
      and expanding Fagaras

∞
∞
∞

Pitesti
Figure 3.27
Stages in an RBFS search for the shortest route to Bucharest. The f-limit
value for each recursive call is shown on top of each current node, and every node is labeled
with its f-cost. (a) The path via Rimnicu Vilcea is followed until the current best leaf (Pitesti)
has a value that is worse than the best alternative path (Fagaras). (b) The recursion unwinds
and the best leaf value of the forgotten subtree (417) is backed up to Rimnicu Vilcea; then
Fagaras is expanded, revealing a best leaf value of 450. (c) The recursion unwinds and the
best leaf value of the forgotten subtree (450) is backed up to Fagaras; then Rimnicu Vilcea is
expanded. This time, because the best alternative path (through Timisoara) costs at least 447,
the expansion continues to Bucharest.
reexpanding the subtree at some later time. Figure 3.27 shows how RBFS reaches Bucharest.
RBFS is somewhat more efﬁcient than IDA∗, but still suffers from excessive node re-
generation. In the example in Figure 3.27, RBFS follows the path via Rimnicu Vilcea, then

Section 3.5.
Informed (Heuristic) Search Strategies

“changes its mind” and tries Fagaras, and then changes its mind back again. These mind
changes occur because every time the current best path is extended, its f-value is likely to
increase—h is usually less optimistic for nodes closer to the goal. When this happens, the
second-best path might become the best path, so the search has to backtrack to follow it.
Each mind change corresponds to an iteration of IDA∗and could require many reexpansions
of forgotten nodes to recreate the best path and extend it one more node.
Like A∗tree search, RBFS is an optimal algorithm if the heuristic function h(n) is
admissible. Its space complexity is linear in the depth of the deepest optimal solution, but
its time complexity is rather difﬁcult to characterize: it depends both on the accuracy of the
heuristic function and on how often the best path changes as nodes are expanded.
IDA∗and RBFS suffer from using too little memory. Between iterations, IDA∗retains
only a single number: the current f-cost limit. RBFS retains more information in memory,
but it uses only linear space: even if more memory were available, RBFS has no way to make
use of it. Because they forget most of what they have done, both algorithms may end up reex-
panding the same states many times over. Furthermore, they suffer the potentially exponential
increase in complexity associated with redundant paths in graphs (see Section 3.3).
It seems sensible, therefore, to use all available memory. Two algorithms that do this
are MA∗(memory-bounded A∗) and SMA∗(simpliﬁed MA∗). SMA∗is—well—simpler, so
MA*
SMA*
we will describe it. SMA∗proceeds just like A∗, expanding the best leaf until memory is full.
At this point, it cannot add a new node to the search tree without dropping an old one. SMA∗
always drops the worst leaf node—the one with the highest f-value. Like RBFS, SMA∗
then backs up the value of the forgotten node to its parent. In this way, the ancestor of a
forgotten subtree knows the quality of the best path in that subtree. With this information,
SMA∗regenerates the subtree only when all other paths have been shown to look worse than
the path it has forgotten. Another way of saying this is that, if all the descendants of a node n
are forgotten, then we will not know which way to go from n, but we will still have an idea
of how worthwhile it is to go anywhere from n.
The complete algorithm is too complicated to reproduce here,10 but there is one subtlety
worth mentioning. We said that SMA∗expands the best leaf and deletes the worst leaf. What
if all the leaf nodes have the same f-value? To avoid selecting the same node for deletion
and expansion, SMA∗expands the newest best leaf and deletes the oldest worst leaf. These
coincide when there is only one leaf, but in that case, the current search tree must be a single
path from root to leaf that ﬁlls all of memory. If the leaf is not a goal node, then even if it is on
an optimal solution path, that solution is not reachable with the available memory. Therefore,
the node can be discarded exactly as if it had no successors.
SMA∗is complete if there is any reachable solution—that is, if d, the depth of the
shallowest goal node, is less than the memory size (expressed in nodes). It is optimal if any
optimal solution is reachable; otherwise, it returns the best reachable solution. In practical
terms, SMA∗is a fairly robust choice for ﬁnding optimal solutions, particularly when the state
space is a graph, step costs are not uniform, and node generation is expensive compared to
the overhead of maintaining the frontier and the explored set.
10 A rough sketch appeared in the ﬁrst edition of this book.

Chapter
3.
Solving Problems by Searching
On very hard problems, however, it will often be the case that SMA∗is forced to switch
back and forth continually among many candidate solution paths, only a small subset of which
can ﬁt in memory. (This resembles the problem of thrashing in disk paging systems.) Then
THRASHING
the extra time required for repeated regeneration of the same nodes means that problems
that would be practically solvable by A∗, given unlimited memory, become intractable for
SMA∗. That is to say, memory limitations can make a problem intractable from the point
of view of computation time. Although no current theory explains the tradeoff between time
and memory, it seems that this is an inescapable problem. The only way out is to drop the
optimality requirement.
3.5.4
Learning to search better
We have presented several ﬁxed strategies—breadth-ﬁrst, greedy best-ﬁrst, and so on—that
have been designed by computer scientists. Could an agent learn how to search better? The
answer is yes, and the method rests on an important concept called the metalevel state space.
METALEVEL STATE
SPACE
Each state in a metalevel state space captures the internal (computational) state of a program
that is searching in an object-level state space such as Romania. For example, the internal
OBJECT-LEVEL STATE
SPACE
state of the A∗algorithm consists of the current search tree. Each action in the metalevel state
space is a computation step that alters the internal state; for example, each computation step
in A∗expands a leaf node and adds its successors to the tree. Thus, Figure 3.24, which shows
a sequence of larger and larger search trees, can be seen as depicting a path in the metalevel
state space where each state on the path is an object-level search tree.
Now, the path in Figure 3.24 has ﬁve steps, including one step, the expansion of Fagaras,
that is not especially helpful. For harder problems, there will be many such missteps, and a
metalevel learning algorithm can learn from these experiences to avoid exploring unpromis-
METALEVEL
LEARNING
ing subtrees. The techniques used for this kind of learning are described in Chapter 21. The
goal of learning is to minimize the total cost of problem solving, trading off computational
expense and path cost.
3.6
HEURISTIC FUNCTIONS
In this section, we look at heuristics for the 8-puzzle, in order to shed light on the nature of
heuristics in general.
The 8-puzzle was one of the earliest heuristic search problems. As mentioned in Sec-
tion 3.2, the object of the puzzle is to slide the tiles horizontally or vertically into the empty
space until the conﬁguration matches the goal conﬁguration (Figure 3.28).
The average solution cost for a randomly generated 8-puzzle instance is about 22 steps.
The branching factor is about 3. (When the empty tile is in the middle, four moves are
possible; when it is in a corner, two; and when it is along an edge, three.) This means
that an exhaustive tree search to depth 22 would look at about 322 ≈3.1 × 1010 states.
A graph search would cut this down by a factor of about 170,000 because only 9!/2 =
181, 440 distinct states are reachable. (See Exercise 3.4.) This is a manageable number, but

Section 3.6.
Heuristic Functions

Start State
Goal State

Figure 3.28
A typical instance of the 8-puzzle. The solution is 26 steps long.
the corresponding number for the 15-puzzle is roughly 1013, so the next order of business is
to ﬁnd a good heuristic function. If we want to ﬁnd the shortest solutions by using A∗, we
need a heuristic function that never overestimates the number of steps to the goal. There is a
long history of such heuristics for the 15-puzzle; here are two commonly used candidates:
• h1 = the number of misplaced tiles. For Figure 3.28, all of the eight tiles are out of
position, so the start state would have h1 = 8. h1 is an admissible heuristic because it
is clear that any tile that is out of place must be moved at least once.
• h2 = the sum of the distances of the tiles from their goal positions. Because tiles
cannot move along diagonals, the distance we will count is the sum of the horizontal
and vertical distances. This is sometimes called the city block distance or Manhattan
distance. h2 is also admissible because all any move can do is move one tile one step
MANHATTAN
DISTANCE
closer to the goal. Tiles 1 to 8 in the start state give a Manhattan distance of
h2 = 3 + 1 + 2 + 2 + 2 + 3 + 3 + 2 = 18 .
As expected, neither of these overestimates the true solution cost, which is 26.
3.6.1
The effect of heuristic accuracy on performance
One way to characterize the quality of a heuristic is the effective branching factor b∗. If the
EFFECTIVE
BRANCHING FACTOR
total number of nodes generated by A∗for a particular problem is N and the solution depth is
d, then b∗is the branching factor that a uniform tree of depth d would have to have in order
to contain N + 1 nodes. Thus,
N + 1 = 1 + b∗+ (b∗)2 + · · · + (b∗)d .
For example, if A∗ﬁnds a solution at depth 5 using 52 nodes, then the effective branching
factor is 1.92. The effective branching factor can vary across problem instances, but usually
it is fairly constant for sufﬁciently hard problems. (The existence of an effective branching
factor follows from the result, mentioned earlier, that the number of nodes expanded by A∗
grows exponentially with solution depth.) Therefore, experimental measurements of b∗on a
small set of problems can provide a good guide to the heuristic’s overall usefulness. A well-
designed heuristic would have a value of b∗close to 1, allowing fairly large problems to be
solved at reasonable computational cost.

Chapter
3.
Solving Problems by Searching
To test the heuristic functions h1 and h2, we generated 1200 random problems with
solution lengths from 2 to 24 (100 for each even number) and solved them with iterative
deepening search and with A∗tree search using both h1 and h2. Figure 3.29 gives the average
number of nodes generated by each strategy and the effective branching factor. The results
suggest that h2 is better than h1, and is far better than using iterative deepening search. Even
for small problems with d = 12, A∗with h2 is 50,000 times more efﬁcient than uninformed
iterative deepening search.
Search Cost (nodes generated)
Effective Branching Factor
d
IDS
A∗(h1)
A∗(h2)
IDS
A∗(h1)
A∗(h2)

2.45
1.79
1.79

2.87
1.48
1.45

2.73
1.34
1.30

2.80
1.33
1.24

2.79
1.38
1.22

2.78
1.42
1.24

–

–
1.44
1.23

–

–
1.45
1.25

–

–
1.46
1.26

–

–
1.47
1.27

–

–
1.48
1.28

–

–
1.48
1.26
Figure 3.29
Comparison of the search costs and effective branching factors for the
ITERATIVE-DEEPENING-SEARCH and A∗algorithms with h1, h2. Data are averaged over
100 instances of the 8-puzzle for each of various solution lengths d.
One might ask whether h2 is always better than h1. The answer is “Essentially, yes.” It
is easy to see from the deﬁnitions of the two heuristics that, for any node n, h2(n) ≥h1(n).
We thus say that h2 dominates h1. Domination translates directly into efﬁciency: A∗using
DOMINATION
h2 will never expand more nodes than A∗using h1 (except possibly for some nodes with
f(n) = C∗). The argument is simple. Recall the observation on page 97 that every node
with f(n) < C∗will surely be expanded. This is the same as saying that every node with
h(n) < C∗−g(n) will surely be expanded. But because h2 is at least as big as h1 for all
nodes, every node that is surely expanded by A∗search with h2 will also surely be expanded
with h1, and h1 might cause other nodes to be expanded as well. Hence, it is generally
better to use a heuristic function with higher values, provided it is consistent and that the
computation time for the heuristic is not too long.
3.6.2
Generating admissible heuristics from relaxed problems
We have seen that both h1 (misplaced tiles) and h2 (Manhattan distance) are fairly good
heuristics for the 8-puzzle and that h2 is better. How might one have come up with h2? Is it
possible for a computer to invent such a heuristic mechanically?
h1 and h2 are estimates of the remaining path length for the 8-puzzle, but they are also
perfectly accurate path lengths for simpliﬁed versions of the puzzle. If the rules of the puzzle

Section 3.6.
Heuristic Functions

were changed so that a tile could move anywhere instead of just to the adjacent empty square,
then h1 would give the exact number of steps in the shortest solution. Similarly, if a tile could
move one square in any direction, even onto an occupied square, then h2 would give the exact
number of steps in the shortest solution. A problem with fewer restrictions on the actions is
called a relaxed problem. The state-space graph of the relaxed problem is a supergraph of
RELAXED PROBLEM
the original state space because the removal of restrictions creates added edges in the graph.
Because the relaxed problem adds edges to the state space, any optimal solution in the
original problem is, by deﬁnition, also a solution in the relaxed problem; but the relaxed
problem may have better solutions if the added edges provide short cuts. Hence, the cost of
an optimal solution to a relaxed problem is an admissible heuristic for the original problem.
Furthermore, because the derived heuristic is an exact cost for the relaxed problem, it must
obey the triangle inequality and is therefore consistent (see page 95).
If a problem deﬁnition is written down in a formal language, it is possible to construct
relaxed problems automatically.11 For example, if the 8-puzzle actions are described as
A tile can move from square A to square B if
A is horizontally or vertically adjacent to B and B is blank,
we can generate three relaxed problems by removing one or both of the conditions:
(a) A tile can move from square A to square B if A is adjacent to B.
(b) A tile can move from square A to square B if B is blank.
(c) A tile can move from square A to square B.
From (a), we can derive h2 (Manhattan distance). The reasoning is that h2 would be the
proper score if we moved each tile in turn to its destination. The heuristic derived from (b) is
discussed in Exercise 3.31. From (c), we can derive h1 (misplaced tiles) because it would be
the proper score if tiles could move to their intended destination in one step. Notice that it is
crucial that the relaxed problems generated by this technique can be solved essentially without
search, because the relaxed rules allow the problem to be decomposed into eight independent
subproblems. If the relaxed problem is hard to solve, then the values of the corresponding
heuristic will be expensive to obtain.12
A program called ABSOLVER can generate heuristics automatically from problem def-
initions, using the “relaxed problem” method and various other techniques (Prieditis, 1993).
ABSOLVER generated a new heuristic for the 8-puzzle that was better than any preexisting
heuristic and found the ﬁrst useful heuristic for the famous Rubik’s Cube puzzle.
One problem with generating new heuristic functions is that one often fails to get a
single “clearly best” heuristic. If a collection of admissible heuristics h1 . . . hm is available
for a problem and none of them dominates any of the others, which should we choose? As it
turns out, we need not make a choice. We can have the best of all worlds, by deﬁning
h(n) = max{h1(n), . . . , hm(n)} .
11 In Chapters 8 and 10, we describe formal languages suitable for this task; with formal descriptions that can be
manipulated, the construction of relaxed problems can be automated. For now, we use English.
12 Note that a perfect heuristic can be obtained simply by allowing h to run a full breadth-ﬁrst search “on the
sly.” Thus, there is a tradeoff between accuracy and computation time for heuristic functions.

Chapter
3.
Solving Problems by Searching
Start State
Goal State

Figure 3.30
A subproblem of the 8-puzzle instance given in Figure 3.28. The task is to
get tiles 1, 2, 3, and 4 into their correct positions, without worrying about what happens to
the other tiles.
This composite heuristic uses whichever function is most accurate on the node in question.
Because the component heuristics are admissible, h is admissible; it is also easy to prove that
h is consistent. Furthermore, h dominates all of its component heuristics.
3.6.3
Generating admissible heuristics from subproblems: Pattern databases
Admissible heuristics can also be derived from the solution cost of a subproblem of a given
SUBPROBLEM
problem. For example, Figure 3.30 shows a subproblem of the 8-puzzle instance in Fig-
ure 3.28. The subproblem involves getting tiles 1, 2, 3, 4 into their correct positions. Clearly,
the cost of the optimal solution of this subproblem is a lower bound on the cost of the com-
plete problem. It turns out to be more accurate than Manhattan distance in some cases.
The idea behind pattern databases is to store these exact solution costs for every pos-
PATTERN DATABASE
sible subproblem instance—in our example, every possible conﬁguration of the four tiles
and the blank. (The locations of the other four tiles are irrelevant for the purposes of solv-
ing the subproblem, but moves of those tiles do count toward the cost.) Then we compute
an admissible heuristic hDB for each complete state encountered during a search simply by
looking up the corresponding subproblem conﬁguration in the database. The database itself is
constructed by searching back13 from the goal and recording the cost of each new pattern en-
countered; the expense of this search is amortized over many subsequent problem instances.
The choice of 1-2-3-4 is fairly arbitrary; we could also construct databases for 5-6-7-8,
for 2-4-6-8, and so on. Each database yields an admissible heuristic, and these heuristics can
be combined, as explained earlier, by taking the maximum value. A combined heuristic of
this kind is much more accurate than the Manhattan distance; the number of nodes generated
when solving random 15-puzzles can be reduced by a factor of 1000.
One might wonder whether the heuristics obtained from the 1-2-3-4 database and the
5-6-7-8 could be added, since the two subproblems seem not to overlap. Would this still give
an admissible heuristic? The answer is no, because the solutions of the 1-2-3-4 subproblem
and the 5-6-7-8 subproblem for a given state will almost certainly share some moves—it is
13 By working backward from the goal, the exact solution cost of every instance encountered is immediately
available. This is an example of dynamic programming, which we discuss further in Chapter 17.

Section 3.6.
Heuristic Functions

unlikely that 1-2-3-4 can be moved into place without touching 5-6-7-8, and vice versa. But
what if we don’t count those moves? That is, we record not the total cost of solving the 1-2-
3-4 subproblem, but just the number of moves involving 1-2-3-4. Then it is easy to see that
the sum of the two costs is still a lower bound on the cost of solving the entire problem. This
is the idea behind disjoint pattern databases. With such databases, it is possible to solve
DISJOINT PATTERN
DATABASES
random 15-puzzles in a few milliseconds—the number of nodes generated is reduced by a
factor of 10,000 compared with the use of Manhattan distance. For 24-puzzles, a speedup of
roughly a factor of a million can be obtained.
Disjoint pattern databases work for sliding-tile puzzles because the problem can be
divided up in such a way that each move affects only one subproblem—because only one tile
is moved at a time. For a problem such as Rubik’s Cube, this kind of subdivision is difﬁcult
because each move affects 8 or 9 of the 26 cubies. More general ways of deﬁning additive,
admissible heuristics have been proposed that do apply to Rubik’s cube (Yang et al., 2008),
but they have not yielded a heuristic better than the best nonadditive heuristic for the problem.
3.6.4
Learning heuristics from experience
A heuristic function h(n) is supposed to estimate the cost of a solution beginning from the
state at node n. How could an agent construct such a function? One solution was given in
the preceding sections—namely, to devise relaxed problems for which an optimal solution
can be found easily. Another solution is to learn from experience. “Experience” here means
solving lots of 8-puzzles, for instance. Each optimal solution to an 8-puzzle problem provides
examples from which h(n) can be learned. Each example consists of a state from the solu-
tion path and the actual cost of the solution from that point. From these examples, a learning
algorithm can be used to construct a function h(n) that can (with luck) predict solution costs
for other states that arise during search. Techniques for doing just this using neural nets, de-
cision trees, and other methods are demonstrated in Chapter 18. (The reinforcement learning
methods described in Chapter 21 are also applicable.)
Inductive learning methods work best when supplied with features of a state that are
FEATURE
relevant to predicting the state’s value, rather than with just the raw state description. For
example, the feature “number of misplaced tiles” might be helpful in predicting the actual
distance of a state from the goal. Let’s call this feature x1(n). We could take 100 randomly
generated 8-puzzle conﬁgurations and gather statistics on their actual solution costs. We
might ﬁnd that when x1(n) is 5, the average solution cost is around 14, and so on. Given
these data, the value of x1 can be used to predict h(n). Of course, we can use several features.
A second feature x2(n) might be “number of pairs of adjacent tiles that are not adjacent in the
goal state.” How should x1(n) and x2(n) be combined to predict h(n)? A common approach
is to use a linear combination:
h(n) = c1x1(n) + c2x2(n) .
The constants c1 and c2 are adjusted to give the best ﬁt to the actual data on solution costs.
One expects both c1 and c2 to be positive because misplaced tiles and incorrect adjacent pairs
make the problem harder to solve. Notice that this heuristic does satisfy the condition that
h(n) = 0 for goal states, but it is not necessarily admissible or consistent.

LOGICAL AGENTS
In which we design agents that can form representations of a complex world, use a
process of inference to derive new representations about the world, and use these
new representations to deduce what to do.
Humans, it seems, know things; and what they know helps them do things.
These are
not empty statements. They make strong claims about how the intelligence of humans is
achieved—not by purely reﬂex mechanisms but by processes of reasoning that operate on
REASONING
internal representations of knowledge. In AI, this approach to intelligence is embodied in
REPRESENTATION
knowledge-based agents.
KNOWLEDGE-BASED
AGENTS
The problem-solving agents of Chapters 3 and 4 know things, but only in a very limited,
inﬂexible sense. For example, the transition model for the 8-puzzle—knowledge of what the
actions do—is hidden inside the domain-speciﬁc code of the RESULT function. It can be
used to predict the outcome of actions but not to deduce that two tiles cannot occupy the
same space or that states with odd parity cannot be reached from states with even parity. The
atomic representations used by problem-solving agents are also very limiting. In a partially
observable environment, an agent’s only choice for representing what it knows about the
current state is to list all possible concrete states—a hopeless prospect in large environments.
Chapter 6 introduced the idea of representing states as assignments of values to vari-
ables; this is a step in the right direction, enabling some parts of the agent to work in a
domain-independent way and allowing for more efﬁcient algorithms. In this chapter and
those that follow, we take this step to its logical conclusion, so to speak—we develop logic
LOGIC
as a general class of representations to support knowledge-based agents. Such agents can
combine and recombine information to suit myriad purposes. Often, this process can be quite
far removed from the needs of the moment—as when a mathematician proves a theorem or
an astronomer calculates the earth’s life expectancy. Knowledge-based agents can accept new
tasks in the form of explicitly described goals; they can achieve competence quickly by being
told or learning new knowledge about the environment; and they can adapt to changes in the
environment by updating the relevant knowledge.
We begin in Section 7.1 with the overall agent design. Section 7.2 introduces a sim-
ple new environment, the wumpus world, and illustrates the operation of a knowledge-based
agent without going into any technical detail. Then we explain the general principles of logic

Section 7.1.
Knowledge-Based Agents

in Section 7.3 and the speciﬁcs of propositional logic in Section 7.4. While less expressive
than ﬁrst-order logic (Chapter 8), propositional logic illustrates all the basic concepts of
logic; it also comes with well-developed inference technologies, which we describe in sec-
tions 7.5 and 7.6. Finally, Section 7.7 combines the concept of knowledge-based agents with
the technology of propositional logic to build some simple agents for the wumpus world.
7.1
KNOWLEDGE-BASED AGENTS
The central component of a knowledge-based agent is its knowledge base, or KB. A knowl-
KNOWLEDGE BASE
edge base is a set of sentences. (Here “sentence” is used as a technical term. It is related
SENTENCE
but not identical to the sentences of English and other natural languages.) Each sentence is
expressed in a language called a knowledge representation language and represents some
KNOWLEDGE
REPRESENTATION
LANGUAGE
assertion about the world. Sometimes we dignify a sentence with the name axiom, when the
AXIOM
sentence is taken as given without being derived from other sentences.
There must be a way to add new sentences to the knowledge base and a way to query
what is known. The standard names for these operations are TELL and ASK, respectively.
Both operations may involve inference—that is, deriving new sentences from old. Inference
INFERENCE
must obey the requirement that when one ASKs a question of the knowledge base, the answer
should follow from what has been told (or TELLed) to the knowledge base previously. Later
in this chapter, we will be more precise about the crucial word “follow.” For now, take it to
mean that the inference process should not make things up as it goes along.
Figure 7.1 shows the outline of a knowledge-based agent program. Like all our agents,
it takes a percept as input and returns an action. The agent maintains a knowledge base, KB,
which may initially contain some background knowledge.
BACKGROUND
KNOWLEDGE
Each time the agent program is called, it does three things. First, it TELLs the knowl-
edge base what it perceives. Second, it ASKs the knowledge base what action it should
perform. In the process of answering this query, extensive reasoning may be done about
the current state of the world, about the outcomes of possible action sequences, and so on.
Third, the agent program TELLs the knowledge base which action was chosen, and the agent
executes the action.
The details of the representation language are hidden inside three functions that imple-
ment the interface between the sensors and actuators on one side and the core representation
and reasoning system on the other. MAKE-PERCEPT-SENTENCE constructs a sentence as-
serting that the agent perceived the given percept at the given time. MAKE-ACTION-QUERY
constructs a sentence that asks what action should be done at the current time. Finally,
MAKE-ACTION-SENTENCE constructs a sentence asserting that the chosen action was ex-
ecuted. The details of the inference mechanisms are hidden inside TELL and ASK. Later
sections will reveal these details.
The agent in Figure 7.1 appears quite similar to the agents with internal state described
in Chapter 2. Because of the deﬁnitions of TELL and ASK, however, the knowledge-based
agent is not an arbitrary program for calculating actions. It is amenable to a description at

Chapter
7.
Logical Agents
function KB-AGENT(percept) returns an action
persistent: KB, a knowledge base
t, a counter, initially 0, indicating time
TELL(KB, MAKE-PERCEPT-SENTENCE(percept,t))
action ←ASK(KB, MAKE-ACTION-QUERY(t))
TELL(KB, MAKE-ACTION-SENTENCE(action,t))
t ←t + 1
return action
Figure 7.1
A generic knowledge-based agent. Given a percept, the agent adds the percept
to its knowledge base, asks the knowledge base for the best action, and tells the knowledge
base that it has in fact taken that action.
the knowledge level, where we need specify only what the agent knows and what its goals
KNOWLEDGE LEVEL
are, in order to ﬁx its behavior. For example, an automated taxi might have the goal of
taking a passenger from San Francisco to Marin County and might know that the Golden
Gate Bridge is the only link between the two locations. Then we can expect it to cross the
Golden Gate Bridge because it knows that that will achieve its goal. Notice that this analysis
is independent of how the taxi works at the implementation level. It doesn’t matter whether
IMPLEMENTATION
LEVEL
its geographical knowledge is implemented as linked lists or pixel maps, or whether it reasons
by manipulating strings of symbols stored in registers or by propagating noisy signals in a
network of neurons.
A knowledge-based agent can be built simply by TELLing it what it needs to know.
Starting with an empty knowledge base, the agent designer can TELL sentences one by one
until the agent knows how to operate in its environment. This is called the declarative ap-
DECLARATIVE
proach to system building. In contrast, the procedural approach encodes desired behaviors
directly as program code. In the 1970s and 1980s, advocates of the two approaches engaged
in heated debates. We now understand that a successful agent often combines both declarative
and procedural elements in its design, and that declarative knowledge can often be compiled
into more efﬁcient procedural code.
We can also provide a knowledge-based agent with mechanisms that allow it to learn
for itself. These mechanisms, which are discussed in Chapter 18, create general knowledge
about the environment from a series of percepts. A learning agent can be fully autonomous.
7.2
THE WUMPUS WORLD
In this section we describe an environment in which knowledge-based agents can show their
worth. The wumpus world is a cave consisting of rooms connected by passageways. Lurking
WUMPUS WORLD
somewhere in the cave is the terrible wumpus, a beast that eats anyone who enters its room.
The wumpus can be shot by an agent, but the agent has only one arrow. Some rooms contain

Section 7.2.
The Wumpus World

bottomless pits that will trap anyone who wanders into these rooms (except for the wumpus,
which is too big to fall in). The only mitigating feature of this bleak environment is the
possibility of ﬁnding a heap of gold. Although the wumpus world is rather tame by modern
computer game standards, it illustrates some important points about intelligence.
A sample wumpus world is shown in Figure 7.2. The precise deﬁnition of the task
environment is given, as suggested in Section 2.3, by the PEAS description:
• Performance measure: +1000 for climbing out of the cave with the gold, –1000 for
falling into a pit or being eaten by the wumpus, –1 for each action taken and –10 for
using up the arrow. The game ends either when the agent dies or when the agent climbs
out of the cave.
• Environment: A 4 × 4 grid of rooms. The agent always starts in the square labeled
[1,1], facing to the right. The locations of the gold and the wumpus are chosen ran-
domly, with a uniform distribution, from the squares other than the start square. In
addition, each square other than the start can be a pit, with probability 0.2.
• Actuators: The agent can move Forward, TurnLeft by 90◦, or TurnRight by 90◦. The
agent dies a miserable death if it enters a square containing a pit or a live wumpus. (It
is safe, albeit smelly, to enter a square with a dead wumpus.) If an agent tries to move
forward and bumps into a wall, then the agent does not move. The action Grab can be
used to pick up the gold if it is in the same square as the agent. The action Shoot can
be used to ﬁre an arrow in a straight line in the direction the agent is facing. The arrow
continues until it either hits (and hence kills) the wumpus or hits a wall. The agent has
only one arrow, so only the ﬁrst Shoot action has any effect. Finally, the action Climb
can be used to climb out of the cave, but only from square [1,1].
• Sensors: The agent has ﬁve sensors, each of which gives a single bit of information:
– In the square containing the wumpus and in the directly (not diagonally) adjacent
squares, the agent will perceive a Stench.
– In the squares directly adjacent to a pit, the agent will perceive a Breeze.
– In the square where the gold is, the agent will perceive a Glitter.
– When an agent walks into a wall, it will perceive a Bump.
– When the wumpus is killed, it emits a woeful Scream that can be perceived any-
where in the cave.
The percepts will be given to the agent program in the form of a list of ﬁve symbols;
for example, if there is a stench and a breeze, but no glitter, bump, or scream, the agent
program will get [Stench, Breeze, None, None, None].
We can characterize the wumpus environment along the various dimensions given in Chap-
ter 2. Clearly, it is discrete, static, and single-agent. (The wumpus doesn’t move, fortunately.)
It is sequential, because rewards may come only after many actions are taken. It is partially
observable, because some aspects of the state are not directly perceivable: the agent’s lo-
cation, the wumpus’s state of health, and the availability of an arrow. As for the locations
of the pits and the wumpus: we could treat them as unobserved parts of the state that hap-
pen to be immutable—in which case, the transition model for the environment is completely

Chapter
7.
Logical Agents
PIT

START
Stench
Stench
B
r
ee
z
e
Gold
PIT
PIT
B
r
ee
z
e
B
r
ee
z
e
B
r
ee
z
e
B
r
ee
z
e
B
r
ee
z
e
Stench
Figure 7.2
A typical wumpus world. The agent is in the bottom left corner, facing right.
known; or we could say that the transition model itself is unknown because the agent doesn’t
know which Forward actions are fatal—in which case, discovering the locations of pits and
wumpus completes the agent’s knowledge of the transition model.
For an agent in the environment, the main challenge is its initial ignorance of the con-
ﬁguration of the environment; overcoming this ignorance seems to require logical reasoning.
In most instances of the wumpus world, it is possible for the agent to retrieve the gold safely.
Occasionally, the agent must choose between going home empty-handed and risking death to
ﬁnd the gold. About 21% of the environments are utterly unfair, because the gold is in a pit
or surrounded by pits.
Let us watch a knowledge-based wumpus agent exploring the environment shown in
Figure 7.2. We use an informal knowledge representation language consisting of writing
down symbols in a grid (as in Figures 7.3 and 7.4).
The agent’s initial knowledge base contains the rules of the environment, as described
previously; in particular, it knows that it is in [1,1] and that [1,1] is a safe square; we denote
that with an “A” and “OK,” respectively, in square [1,1].
The ﬁrst percept is [None, None, None, None, None], from which the agent can con-
clude that its neighboring squares, [1,2] and [2,1], are free of dangers—they are OK. Fig-
ure 7.3(a) shows the agent’s state of knowledge at this point.
A cautious agent will move only into a square that it knows to be OK. Let us suppose
the agent decides to move forward to [2,1]. The agent perceives a breeze (denoted by “B”) in
[2,1], so there must be a pit in a neighboring square. The pit cannot be in [1,1], by the rules of
the game, so there must be a pit in [2,2] or [3,1] or both. The notation “P?” in Figure 7.3(b)
indicates a possible pit in those squares. At this point, there is only one known square that is
OK and that has not yet been visited. So the prudent agent will turn around, go back to [1,1],
and then proceed to [1,2].
The agent perceives a stench in [1,2], resulting in the state of knowledge shown in
Figure 7.4(a). The stench in [1,2] means that there must be a wumpus nearby. But the

Section 7.2.
The Wumpus World

A
B
G
P
S
W
 = Agent
 = Breeze
 = Glitter, Gold
 = Pit
 = Stench
 = Wumpus
OK = Safe square
V
 = Visited
A
OK
 1,1
 2,1
 3,1
 4,1
 1,2
 2,2
 3,2
 4,2
 1,3
 2,3
 3,3
 4,3
 1,4
 2,4
 3,4
 4,4
OK
OK
B
P?
P?
A
OK
OK
OK
 1,1
 2,1
 3,1
 4,1
 1,2
 2,2
 3,2
 4,2
 1,3
 2,3
 3,3
 4,3
 1,4
 2,4
 3,4
 4,4
V
(a)
(b)
Figure 7.3
The ﬁrst step taken by the agent in the wumpus world. (a) The initial sit-
uation, after percept [None, None, None, None, None]. (b) After one move, with percept
[None, Breeze, None, None, None].
B
B
P!
A
OK
OK
OK
 1,1
 2,1
 3,1
 4,1
 1,2
 2,2
 3,2
 4,2
 1,3
 2,3
 3,3
 4,3
 1,4
 2,4
 3,4
 4,4
V
OK
W!
V
P!
A
OK
OK
OK
 1,1
 2,1
 3,1
 4,1
 1,2
 2,2
 3,2
 4,2
 1,3
 2,3
 3,3
 4,3
 1,4
 2,4
 3,4
 4,4
V
S
OK
W!
V
V
V
B
S G
P?
P?
(b)
(a)
S
A
B
G
P
S
W
 = Agent
 = Breeze
 = Glitter, Gold
 = Pit
 = Stench
 = Wumpus
OK = Safe square
V
 = Visited
Figure 7.4
Two later stages in the progress of the agent.
(a) After the third move,
with percept [Stench, None, None, None, None]. (b) After the ﬁfth move, with percept
[Stench, Breeze, Glitter, None, None].
wumpus cannot be in [1,1], by the rules of the game, and it cannot be in [2,2] (or the agent
would have detected a stench when it was in [2,1]). Therefore, the agent can infer that the
wumpus is in [1,3]. The notation W! indicates this inference. Moreover, the lack of a breeze
in [1,2] implies that there is no pit in [2,2]. Yet the agent has already inferred that there must
be a pit in either [2,2] or [3,1], so this means it must be in [3,1]. This is a fairly difﬁcult
inference, because it combines knowledge gained at different times in different places and
relies on the lack of a percept to make one crucial step.

Chapter
7.
Logical Agents
The agent has now proved to itself that there is neither a pit nor a wumpus in [2,2], so it
is OK to move there. We do not show the agent’s state of knowledge at [2,2]; we just assume
that the agent turns and moves to [2,3], giving us Figure 7.4(b). In [2,3], the agent detects a
glitter, so it should grab the gold and then return home.
Note that in each case for which the agent draws a conclusion from the available in-
formation, that conclusion is guaranteed to be correct if the available information is correct.
This is a fundamental property of logical reasoning. In the rest of this chapter, we describe
how to build logical agents that can represent information and draw conclusions such as those
described in the preceding paragraphs.
7.3
LOGIC
This section summarizes the fundamental concepts of logical representation and reasoning.
These beautiful ideas are independent of any of logic’s particular forms. We therefore post-
pone the technical details of those forms until the next section, using instead the familiar
example of ordinary arithmetic.
In Section 7.1, we said that knowledge bases consist of sentences. These sentences
are expressed according to the syntax of the representation language, which speciﬁes all the
SYNTAX
sentences that are well formed. The notion of syntax is clear enough in ordinary arithmetic:
“x + y = 4” is a well-formed sentence, whereas “x4y+ =” is not.
A logic must also deﬁne the semantics or meaning of sentences. The semantics deﬁnes
SEMANTICS
the truth of each sentence with respect to each possible world. For example, the semantics
TRUTH
POSSIBLE WORLD
for arithmetic speciﬁes that the sentence “x + y = 4” is true in a world where x is 2 and y
is 2, but false in a world where x is 1 and y is 1. In standard logics, every sentence must be
either true or false in each possible world—there is no “in between.”1
When we need to be precise, we use the term model in place of “possible world.”
MODEL
Whereas possible worlds might be thought of as (potentially) real environments that the agent
might or might not be in, models are mathematical abstractions, each of which simply ﬁxes
the truth or falsehood of every relevant sentence. Informally, we may think of a possible world
as, for example, having x men and y women sitting at a table playing bridge, and the sentence
x + y = 4 is true when there are four people in total. Formally, the possible models are just
all possible assignments of real numbers to the variables x and y. Each such assignment ﬁxes
the truth of any sentence of arithmetic whose variables are x and y. If a sentence α is true in
model m, we say that m satisﬁes α or sometimes m is a model of α. We use the notation
SATISFACTION
M(α) to mean the set of all models of α.
Now that we have a notion of truth, we are ready to talk about logical reasoning. This
involves the relation of logical entailment between sentences—the idea that a sentence fol-
ENTAILMENT
lows logically from another sentence. In mathematical notation, we write
α |= β
1 Fuzzy logic, discussed in Chapter 14, allows for degrees of truth.

Section 7.3.
Logic

PIT

PIT

PIT
PIT
PIT

PIT
PIT

PIT

PIT
PIT

PIT
PIT

KB
α1
B
r
eez
e
B
r
eez
e
B
r
eez
e
B
r
eez
e
B
r
eez
e
B
r
eez
e
B
r
eez
e
B
r
eez
e

PIT

PIT

PIT
PIT
PIT

PIT
PIT

PIT

PIT
PIT

PIT
PIT

KB
B
r
eez
e
α2
B
r
eez
e
B
r
eez
e
B
r
eez
e
B
r
eez
e
B
r
eez
e
B
r
eez
e
B
r
eez
e
(a)
(b)
Figure 7.5
Possible models for the presence of pits in squares [1,2], [2,2], and [3,1]. The
KB corresponding to the observations of nothing in [1,1] and a breeze in [2,1] is shown by
the solid line. (a) Dotted line shows models of α1 (no pit in [1,2]). (b) Dotted line shows
models of α2 (no pit in [2,2]).
to mean that the sentence α entails the sentence β. The formal deﬁnition of entailment is this:
α |= β if and only if, in every model in which α is true, β is also true. Using the notation just
introduced, we can write
α |= β if and only if M(α) ⊆M(β) .
(Note the direction of the ⊆here: if α |= β, then α is a stronger assertion than β: it rules out
more possible worlds.) The relation of entailment is familiar from arithmetic; we are happy
with the idea that the sentence x = 0 entails the sentence xy = 0. Obviously, in any model
where x is zero, it is the case that xy is zero (regardless of the value of y).
We can apply the same kind of analysis to the wumpus-world reasoning example given
in the preceding section. Consider the situation in Figure 7.3(b): the agent has detected
nothing in [1,1] and a breeze in [2,1]. These percepts, combined with the agent’s knowledge
of the rules of the wumpus world, constitute the KB. The agent is interested (among other
things) in whether the adjacent squares [1,2], [2,2], and [3,1] contain pits. Each of the three
squares might or might not contain a pit, so (for the purposes of this example) there are 23 = 8
possible models. These eight models are shown in Figure 7.5.2
The KB can be thought of as a set of sentences or as a single sentence that asserts all
the individual sentences. The KB is false in models that contradict what the agent knows—
for example, the KB is false in any model in which [1,2] contains a pit, because there is
no breeze in [1,1]. There are in fact just three models in which the KB is true, and these are
2 Although the ﬁgure shows the models as partial wumpus worlds, they are really nothing more than assignments
of true and false to the sentences “there is a pit in [1,2]” etc. Models, in the mathematical sense, do not need to
have ’orrible ’airy wumpuses in them.

Chapter
7.
Logical Agents
shown surrounded by a solid line in Figure 7.5. Now let us consider two possible conclusions:
α1 = “There is no pit in [1,2].”
α2 = “There is no pit in [2,2].”
We have surrounded the models of α1 and α2 with dotted lines in Figures 7.5(a) and 7.5(b),
respectively. By inspection, we see the following:
in every model in which KB is true, α1 is also true.
Hence, KB |= α1: there is no pit in [1,2]. We can also see that
in some models in which KB is true, α2 is false.
Hence, KB̸ |= α2: the agent cannot conclude that there is no pit in [2,2]. (Nor can it conclude
that there is a pit in [2,2].)3
The preceding example not only illustrates entailment but also shows how the deﬁnition
of entailment can be applied to derive conclusions—that is, to carry out logical inference.
LOGICAL INFERENCE
The inference algorithm illustrated in Figure 7.5 is called model checking, because it enu-
MODEL CHECKING
merates all possible models to check that α is true in all models in which KB is true, that is,
that M(KB) ⊆M(α).
In understanding entailment and inference, it might help to think of the set of all conse-
quences of KB as a haystack and of α as a needle. Entailment is like the needle being in the
haystack; inference is like ﬁnding it. This distinction is embodied in some formal notation: if
an inference algorithm i can derive α from KB, we write
KB ⊢i α ,
which is pronounced “α is derived from KB by i” or “i derives α from KB.”
An inference algorithm that derives only entailed sentences is called sound or truth-
SOUND
preserving. Soundness is a highly desirable property. An unsound inference procedure es-
TRUTH-PRESERVING
sentially makes things up as it goes along—it announces the discovery of nonexistent needles.
It is easy to see that model checking, when it is applicable,4 is a sound procedure.
The property of completeness is also desirable: an inference algorithm is complete if
COMPLETENESS
it can derive any sentence that is entailed. For real haystacks, which are ﬁnite in extent,
it seems obvious that a systematic examination can always decide whether the needle is in
the haystack. For many knowledge bases, however, the haystack of consequences is inﬁnite,
and completeness becomes an important issue.5 Fortunately, there are complete inference
procedures for logics that are sufﬁciently expressive to handle many knowledge bases.
We have described a reasoning process whose conclusions are guaranteed to be true
in any world in which the premises are true; in particular, if KB is true in the real world,
then any sentence α derived from KB by a sound inference procedure is also true in the real
world. So, while an inference process operates on “syntax”—internal physical conﬁgurations
such as bits in registers or patterns of electrical blips in brains—the process corresponds
3 The agent can calculate the probability that there is a pit in [2,2]; Chapter 13 shows how.
4 Model checking works if the space of models is ﬁnite—for example, in wumpus worlds of ﬁxed size. For
arithmetic, on the other hand, the space of models is inﬁnite: even if we restrict ourselves to the integers, there
are inﬁnitely many pairs of values for x and y in the sentence x + y = 4.
5 Compare with the case of inﬁnite search spaces in Chapter 3, where depth-ﬁrst search is not complete.

Section 7.4.
Propositional Logic: A Very Simple Logic

Follows
Sentences
Sentence
Entails
Semantics
Semantics
Representation
World
Aspects of the
    real world
Aspect of the
   real world
Figure 7.6
Sentences are physical conﬁgurations of the agent, and reasoning is a process
of constructing new physical conﬁgurations from old ones. Logical reasoning should en-
sure that the new conﬁgurations represent aspects of the world that actually follow from the
aspects that the old conﬁgurations represent.
to the real-world relationship whereby some aspect of the real world is the case6 by virtue
of other aspects of the real world being the case. This correspondence between world and
representation is illustrated in Figure 7.6.
The ﬁnal issue to consider is grounding—the connection between logical reasoning
GROUNDING
processes and the real environment in which the agent exists. In particular, how do we know
that KB is true in the real world? (After all, KB is just “syntax” inside the agent’s head.)
This is a philosophical question about which many, many books have been written. (See
Chapter 26.) A simple answer is that the agent’s sensors create the connection. For example,
our wumpus-world agent has a smell sensor. The agent program creates a suitable sentence
whenever there is a smell. Then, whenever that sentence is in the knowledge base, it is
true in the real world. Thus, the meaning and truth of percept sentences are deﬁned by the
processes of sensing and sentence construction that produce them. What about the rest of the
agent’s knowledge, such as its belief that wumpuses cause smells in adjacent squares? This
is not a direct representation of a single percept, but a general rule—derived, perhaps, from
perceptual experience but not identical to a statement of that experience. General rules like
this are produced by a sentence construction process called learning, which is the subject
of Part V. Learning is fallible. It could be the case that wumpuses cause smells except on
February 29 in leap years, which is when they take their baths. Thus, KB may not be true in
the real world, but with good learning procedures, there is reason for optimism.
7.4
PROPOSITIONAL LOGIC: A VERY SIMPLE LOGIC
We now present a simple but powerful logic called propositional logic. We cover the syntax
PROPOSITIONAL
LOGIC
of propositional logic and its semantics—the way in which the truth of sentences is deter-
mined. Then we look at entailment—the relation between a sentence and another sentence
that follows from it—and see how this leads to a simple algorithm for logical inference. Ev-
erything takes place, of course, in the wumpus world.
6 As Wittgenstein (1922) put it in his famous Tractatus: “The world is everything that is the case.”

Chapter
7.
Logical Agents
7.4.1
Syntax
The syntax of propositional logic deﬁnes the allowable sentences. The atomic sentences
ATOMIC SENTENCES
consist of a single proposition symbol. Each such symbol stands for a proposition that can
PROPOSITION
SYMBOL
be true or false. We use symbols that start with an uppercase letter and may contain other
letters or subscripts, for example: P, Q, R, W1,3 and North. The names are arbitrary but
are often chosen to have some mnemonic value—we use W1,3 to stand for the proposition
that the wumpus is in [1,3]. (Remember that symbols such as W1,3 are atomic, i.e., W, 1,
and 3 are not meaningful parts of the symbol.) There are two proposition symbols with ﬁxed
meanings: True is the always-true proposition and False is the always-false proposition.
Complex sentences are constructed from simpler sentences, using parentheses and logical
COMPLEX
SENTENCES
connectives. There are ﬁve connectives in common use:
LOGICAL
CONNECTIVES
¬ (not). A sentence such as ¬W1,3 is called the negation of W1,3. A literal is either an
NEGATION
LITERAL
atomic sentence (a positive literal) or a negated atomic sentence (a negative literal).
∧(and). A sentence whose main connective is ∧, such as W1,3 ∧P3,1, is called a con-
junction; its parts are the conjuncts. (The ∧looks like an “A” for “And.”)
CONJUNCTION
∨(or). A sentence using ∨, such as (W1,3∧P3,1)∨W2,2, is a disjunction of the disjuncts
DISJUNCTION
(W1,3 ∧P3,1) and W2,2. (Historically, the ∨comes from the Latin “vel,” which means
“or.” For most people, it is easier to remember ∨as an upside-down ∧.)
⇒(implies). A sentence such as (W1,3 ∧P3,1) ⇒¬W2,2 is called an implication (or con-
IMPLICATION
ditional). Its premise or antecedent is (W1,3 ∧P3,1), and its conclusion or consequent
PREMISE
CONCLUSION
is ¬W2,2. Implications are also known as rules or if–then statements. The implication
RULES
symbol is sometimes written in other books as ⊃or →.
⇔(if and only if). The sentence W1,3 ⇔¬W2,2 is a biconditional. Some other books
BICONDITIONAL
write this as ≡.
Sentence
→
AtomicSentence | ComplexSentence
AtomicSentence
→
True | False | P | Q | R | . . .
ComplexSentence
→
( Sentence ) | [ Sentence ]
|
¬ Sentence
|
Sentence ∧Sentence
|
Sentence ∨Sentence
|
Sentence
⇒Sentence
|
Sentence
⇔
Sentence
OPERATOR PRECEDENCE
:
¬, ∧, ∨, ⇒, ⇔
Figure 7.7
A BNF (Backus–Naur Form) grammar of sentences in propositional logic,
along with operator precedences, from highest to lowest.

Section 7.4.
Propositional Logic: A Very Simple Logic

Figure 7.7 gives a formal grammar of propositional logic; see page 1060 if you are not
familiar with the BNF notation. The BNF grammar by itself is ambiguous; a sentence with
several operators can be parsed by the grammar in multiple ways. To eliminate the ambiguity
we deﬁne a precedence for each operator. The “not” operator (¬) has the highest precedence,
which means that in the sentence ¬A ∧B the ¬ binds most tightly, giving us the equivalent
of (¬A)∧B rather than ¬(A∧B). (The notation for ordinary arithmetic is the same: −2+4
is 2, not –6.) When in doubt, use parentheses to make sure of the right interpretation. Square
brackets mean the same thing as parentheses; the choice of square brackets or parentheses is
solely to make it easier for a human to read a sentence.
7.4.2
Semantics
Having speciﬁed the syntax of propositional logic, we now specify its semantics. The se-
mantics deﬁnes the rules for determining the truth of a sentence with respect to a particular
model. In propositional logic, a model simply ﬁxes the truth value—true or false—for ev-
TRUTH VALUE
ery proposition symbol. For example, if the sentences in the knowledge base make use of the
proposition symbols P1,2, P2,2, and P3,1, then one possible model is
m1 = {P1,2 = false, P2,2 = false, P3,1 = true} .
With three proposition symbols, there are 23 = 8 possible models—exactly those depicted
in Figure 7.5. Notice, however, that the models are purely mathematical objects with no
necessary connection to wumpus worlds. P1,2 is just a symbol; it might mean “there is a pit
in [1,2]” or “I’m in Paris today and tomorrow.”
The semantics for propositional logic must specify how to compute the truth value of
any sentence, given a model. This is done recursively. All sentences are constructed from
atomic sentences and the ﬁve connectives; therefore, we need to specify how to compute the
truth of atomic sentences and how to compute the truth of sentences formed with each of the
ﬁve connectives. Atomic sentences are easy:
• True is true in every model and False is false in every model.
• The truth value of every other proposition symbol must be speciﬁed directly in the
model. For example, in the model m1 given earlier, P1,2 is false.
For complex sentences, we have ﬁve rules, which hold for any subsentences P and Q in any
model m (here “iff” means “if and only if”):
• ¬P is true iff P is false in m.
• P ∧Q is true iff both P and Q are true in m.
• P ∨Q is true iff either P or Q is true in m.
• P ⇒Q is true unless P is true and Q is false in m.
• P ⇔Q is true iff P and Q are both true or both false in m.
The rules can also be expressed with truth tables that specify the truth value of a complex
TRUTH TABLE
sentence for each possible assignment of truth values to its components. Truth tables for the
ﬁve connectives are given in Figure 7.8. From these tables, the truth value of any sentence s
can be computed with respect to any model m by a simple recursive evaluation. For example,

Chapter
7.
Logical Agents
P
Q
¬P
P ∧Q
P ∨Q
P ⇒Q
P ⇔Q
false
false
true
false
false
true
true
false
true
true
false
true
true
false
true
false
false
false
true
false
false
true
true
false
true
true
true
true
Figure 7.8
Truth tables for the ﬁve logical connectives. To use the table to compute, for
example, the value of P ∨Q when P is true and Q is false, ﬁrst look on the left for the row
where P is true and Q is false (the third row). Then look in that row under the P ∨Q column
to see the result: true.
the sentence ¬P1,2 ∧(P2,2 ∨P3,1), evaluated in m1, gives true ∧(false ∨true) = true ∧
true = true. Exercise 7.3 asks you to write the algorithm PL-TRUE?(s, m), which computes
the truth value of a propositional logic sentence s in a model m.
The truth tables for “and,” “or,” and “not” are in close accord with our intuitions about
the English words. The main point of possible confusion is that P ∨Q is true when P is true
or Q is true or both. A different connective, called “exclusive or” (“xor” for short), yields
false when both disjuncts are true.7 There is no consensus on the symbol for exclusive or;
some choices are ˙∨or̸ = or ⊕.
The truth table for ⇒may not quite ﬁt one’s intuitive understanding of “P implies Q”
or “if P then Q.” For one thing, propositional logic does not require any relation of causation
or relevance between P and Q. The sentence “5 is odd implies Tokyo is the capital of Japan”
is a true sentence of propositional logic (under the normal interpretation), even though it is
a decidedly odd sentence of English. Another point of confusion is that any implication is
true whenever its antecedent is false. For example, “5 is even implies Sam is smart” is true,
regardless of whether Sam is smart. This seems bizarre, but it makes sense if you think of
“P ⇒Q” as saying, “If P is true, then I am claiming that Q is true. Otherwise I am making
no claim.” The only way for this sentence to be false is if P is true but Q is false.
The biconditional, P ⇔Q, is true whenever both P ⇒Q and Q ⇒P are true. In
English, this is often written as “P if and only if Q.” Many of the rules of the wumpus world
are best written using ⇔. For example, a square is breezy if a neighboring square has a pit,
and a square is breezy only if a neighboring square has a pit. So we need a biconditional,
B1,1 ⇔(P1,2 ∨P2,1) ,
where B1,1 means that there is a breeze in [1,1].
7.4.3
A simple knowledge base
Now that we have deﬁned the semantics for propositional logic, we can construct a knowledge
base for the wumpus world. We focus ﬁrst on the immutable aspects of the wumpus world,
leaving the mutable aspects for a later section. For now, we need the following symbols for
each [x, y] location:
7 Latin has a separate word, aut, for exclusive or.

Section 7.4.
Propositional Logic: A Very Simple Logic

Px,y is true if there is a pit in [x, y].
Wx,y is true if there is a wumpus in [x, y], dead or alive.
Bx,y is true if the agent perceives a breeze in [x, y].
Sx,y is true if the agent perceives a stench in [x, y].
The sentences we write will sufﬁce to derive ¬P1,2 (there is no pit in [1,2]), as was done
informally in Section 7.3. We label each sentence Ri so that we can refer to them:
• There is no pit in [1,1]:
R1 :
¬P1,1 .
• A square is breezy if and only if there is a pit in a neighboring square. This has to be
stated for each square; for now, we include just the relevant squares:
R2 :
B1,1
⇔
(P1,2 ∨P2,1) .
R3 :
B2,1
⇔
(P1,1 ∨P2,2 ∨P3,1) .
• The preceding sentences are true in all wumpus worlds. Now we include the breeze
percepts for the ﬁrst two squares visited in the speciﬁc world the agent is in, leading up
to the situation in Figure 7.3(b).
R4 :
¬B1,1 .
R5 :
B2,1 .
7.4.4
A simple inference procedure
Our goal now is to decide whether KB |= α for some sentence α. For example, is ¬P1,2
entailed by our KB? Our ﬁrst algorithm for inference is a model-checking approach that is a
direct implementation of the deﬁnition of entailment: enumerate the models, and check that
α is true in every model in which KB is true. Models are assignments of true or false to
every proposition symbol. Returning to our wumpus-world example, the relevant proposi-
tion symbols are B1,1, B2,1, P1,1, P1,2, P2,1, P2,2, and P3,1. With seven symbols, there are
27 = 128 possible models; in three of these, KB is true (Figure 7.9). In those three models,
¬P1,2 is true, hence there is no pit in [1,2]. On the other hand, P2,2 is true in two of the three
models and false in one, so we cannot yet tell whether there is a pit in [2,2].
Figure 7.9 reproduces in a more precise form the reasoning illustrated in Figure 7.5. A
general algorithm for deciding entailment in propositional logic is shown in Figure 7.10. Like
the BACKTRACKING-SEARCH algorithm on page 215, TT-ENTAILS? performs a recursive
enumeration of a ﬁnite space of assignments to symbols. The algorithm is sound because it
implements directly the deﬁnition of entailment, and complete because it works for any KB
and α and always terminates—there are only ﬁnitely many models to examine.
Of course, “ﬁnitely many” is not always the same as “few.” If KB and α contain n
symbols in all, then there are 2n models. Thus, the time complexity of the algorithm is
O(2n). (The space complexity is only O(n) because the enumeration is depth-ﬁrst.) Later in
this chapter we show algorithms that are much more efﬁcient in many cases. Unfortunately,
propositional entailment is co-NP-complete (i.e., probably no easier than NP-complete—see
Appendix A), so every known inference algorithm for propositional logic has a worst-case
complexity that is exponential in the size of the input.

Chapter
7.
Logical Agents
B1,1
B2,1
P1,1
P1,2
P2,1
P2,2
P3,1
R1
R2
R3
R4
R5
KB
false
false
false
false
false
false
false
true
true
true
true
false
false
false
false
false
false
false
false
true
true
true
false
true
false
false
...
...
...
...
...
...
...
...
...
...
...
...
...
false
true
false
false
false
false
false
true
true
false
true
true
false
false
true
false
false
false
false
true
true
true
true
true
true
true
false
true
false
false
false
true
false
true
true
true
true
true
true
false
true
false
false
false
true
true
true
true
true
true
true
true
false
true
false
false
true
false
false
true
false
false
true
true
false
...
...
...
...
...
...
...
...
...
...
...
...
...
true
true
true
true
true
true
true
false
true
true
false
true
false
Figure 7.9
A truth table constructed for the knowledge base given in the text. KB is true
if R1 through R5 are true, which occurs in just 3 of the 128 rows (the ones underlined in the
right-hand column). In all 3 rows, P1,2 is false, so there is no pit in [1,2]. On the other hand,
there might (or might not) be a pit in [2,2].
function TT-ENTAILS?(KB,α) returns true or false
inputs: KB, the knowledge base, a sentence in propositional logic
α, the query, a sentence in propositional logic
symbols ←a list of the proposition symbols in KB and α
return TT-CHECK-ALL(KB,α,symbols,{ })
function TT-CHECK-ALL(KB,α,symbols,model) returns true or false
if EMPTY?(symbols) then
if PL-TRUE?(KB,model) then return PL-TRUE?(α,model)
else return true // when KB is false, always return true
else do
P ←FIRST(symbols)
rest ←REST(symbols)
return (TT-CHECK-ALL(KB,α,rest,model ∪{P = true})
and
TT-CHECK-ALL(KB,α,rest,model ∪{P = false }))
Figure 7.10
A truth-table enumeration algorithm for deciding propositional entailment.
(TT stands for truth table.) PL-TRUE? returns true if a sentence holds within a model. The
variable model represents a partial model—an assignment to some of the symbols. The key-
word “and” is used here as a logical operation on its two arguments, returning true or false.

Section 7.5.
Propositional Theorem Proving

(α ∧β) ≡(β ∧α)
commutativity of ∧
(α ∨β) ≡(β ∨α)
commutativity of ∨
((α ∧β) ∧γ) ≡(α ∧(β ∧γ))
associativity of ∧
((α ∨β) ∨γ) ≡(α ∨(β ∨γ))
associativity of ∨
¬(¬α) ≡α
double-negation elimination
(α ⇒β) ≡(¬β ⇒¬α)
contraposition
(α ⇒β) ≡(¬α ∨β)
implication elimination
(α ⇔β) ≡((α ⇒β) ∧(β ⇒α))
biconditional elimination
¬(α ∧β) ≡(¬α ∨¬β)
De Morgan
¬(α ∨β) ≡(¬α ∧¬β)
De Morgan
(α ∧(β ∨γ)) ≡((α ∧β) ∨(α ∧γ))
distributivity of ∧over ∨
(α ∨(β ∧γ)) ≡((α ∨β) ∧(α ∨γ))
distributivity of ∨over ∧
Figure 7.11
Standard logical equivalences. The symbols α, β, and γ stand for arbitrary
sentences of propositional logic.
7.5
PROPOSITIONAL THEOREM PROVING
So far, we have shown how to determine entailment by model checking: enumerating models
and showing that the sentence must hold in all models. In this section, we show how entail-
ment can be done by theorem proving—applying rules of inference directly to the sentences
THEOREM PROVING
in our knowledge base to construct a proof of the desired sentence without consulting models.
If the number of models is large but the length of the proof is short, then theorem proving can
be more efﬁcient than model checking.
Before we plunge into the details of theorem-proving algorithms, we will need some
additional concepts related to entailment. The ﬁrst concept is logical equivalence: two sen-
LOGICAL
EQUIVALENCE
tences α and β are logically equivalent if they are true in the same set of models. We write
this as α ≡β. For example, we can easily show (using truth tables) that P ∧Q and Q ∧P
are logically equivalent; other equivalences are shown in Figure 7.11. These equivalences
play much the same role in logic as arithmetic identities do in ordinary mathematics. An
alternative deﬁnition of equivalence is as follows: any two sentences α and β are equivalent
only if each of them entails the other:
α ≡β
if and only if
α |= β and β |= α .
The second concept we will need is validity. A sentence is valid if it is true in all models. For
VALIDITY
example, the sentence P ∨¬P is valid. Valid sentences are also known as tautologies—they
TAUTOLOGY
are necessarily true. Because the sentence True is true in all models, every valid sentence
is logically equivalent to True. What good are valid sentences? From our deﬁnition of
entailment, we can derive the deduction theorem, which was known to the ancient Greeks:
DEDUCTION
THEOREM
For any sentences α and β, α |= β if and only if the sentence (α ⇒β) is valid.
(Exercise 7.5 asks for a proof.) Hence, we can decide if α |= β by checking that (α ⇒β) is
true in every model—which is essentially what the inference algorithm in Figure 7.10 does—

---

## Module 4 Textbook

FIRST-ORDER LOGIC
In which we notice that the world is blessed with many objects, some of which are
related to other objects, and in which we endeavor to reason about them.
In Chapter 7, we showed how a knowledge-based agent could represent the world in which it
operates and deduce what actions to take. We used propositional logic as our representation
language because it sufﬁced to illustrate the basic concepts of logic and knowledge-based
agents. Unfortunately, propositional logic is too puny a language to represent knowledge
of complex environments in a concise way. In this chapter, we examine ﬁrst-order logic,1
FIRST-ORDER LOGIC
which is sufﬁciently expressive to represent a good deal of our commonsense knowledge.
It also either subsumes or forms the foundation of many other representation languages and
has been studied intensively for many decades. We begin in Section 8.1 with a discussion of
representation languages in general; Section 8.2 covers the syntax and semantics of ﬁrst-order
logic; Sections 8.3 and 8.4 illustrate the use of ﬁrst-order logic for simple representations.
8.1
REPRESENTATION REVISITED
In this section, we discuss the nature of representation languages. Our discussion motivates
the development of ﬁrst-order logic, a much more expressive language than the propositional
logic introduced in Chapter 7. We look at propositional logic and at other kinds of languages
to understand what works and what fails. Our discussion will be cursory, compressing cen-
turies of thought, trial, and error into a few paragraphs.
Programming languages (such as C++ or Java or Lisp) are by far the largest class of
formal languages in common use. Programs themselves represent, in a direct sense, only
computational processes. Data structures within programs can represent facts; for example,
a program could use a 4 × 4 array to represent the contents of the wumpus world. Thus, the
programming language statement World[2,2] ←Pit is a fairly natural way to assert that there
is a pit in square [2,2]. (Such representations might be considered ad hoc; database systems
were developed precisely to provide a more general, domain-independent way to store and
1 Also called ﬁrst-order predicate calculus, sometimes abbreviated as FOL or FOPC.

MODULE 4

Chapter
8.
First-Order Logic
retrieve facts.) What programming languages lack is any general mechanism for deriving
facts from other facts; each update to a data structure is done by a domain-speciﬁc procedure
whose details are derived by the programmer from his or her own knowledge of the domain.
This procedural approach can be contrasted with the declarative nature of propositional logic,
in which knowledge and inference are separate, and inference is entirely domain independent.
A second drawback of data structures in programs (and of databases, for that matter)
is the lack of any easy way to say, for example, “There is a pit in [2,2] or [3,1]” or “If the
wumpus is in [1,1] then he is not in [2,2].” Programs can store a single value for each variable,
and some systems allow the value to be “unknown,” but they lack the expressiveness required
to handle partial information.
Propositional logic is a declarative language because its semantics is based on a truth
relation between sentences and possible worlds. It also has sufﬁcient expressive power to
deal with partial information, using disjunction and negation. Propositional logic has a third
property that is desirable in representation languages, namely, compositionality. In a com-
COMPOSITIONALITY
positional language, the meaning of a sentence is a function of the meaning of its parts. For
example, the meaning of “S1,4 ∧S1,2” is related to the meanings of “S1,4” and “S1,2.” It
would be very strange if “S1,4” meant that there is a stench in square [1,4] and “S1,2” meant
that there is a stench in square [1,2], but “S1,4 ∧S1,2” meant that France and Poland drew 1–1
in last week’s ice hockey qualifying match. Clearly, noncompositionality makes life much
more difﬁcult for the reasoning system.
As we saw in Chapter 7, however, propositional logic lacks the expressive power to
concisely describe an environment with many objects. For example, we were forced to write
a separate rule about breezes and pits for each square, such as
B1,1 ⇔(P1,2 ∨P2,1) .
In English, on the other hand, it seems easy enough to say, once and for all, “Squares adjacent
to pits are breezy.” The syntax and semantics of English somehow make it possible to describe
the environment concisely.
8.1.1
The language of thought
Natural languages (such as English or Spanish) are very expressive indeed. We managed to
write almost this whole book in natural language, with only occasional lapses into other lan-
guages (including logic, mathematics, and the language of diagrams). There is a long tradi-
tion in linguistics and the philosophy of language that views natural language as a declarative
knowledge representation language. If we could uncover the rules for natural language, we
could use it in representation and reasoning systems and gain the beneﬁt of the billions of
pages that have been written in natural language.
The modern view of natural language is that it serves a as a medium for communication
rather than pure representation. When a speaker points and says, “Look!” the listener comes
to know that, say, Superman has ﬁnally appeared over the rooftops. Yet we would not want
to say that the sentence “Look!” represents that fact. Rather, the meaning of the sentence
depends both on the sentence itself and on the context in which the sentence was spoken.
Clearly, one could not store a sentence such as “Look!” in a knowledge base and expect to

Section 8.1.
Representation Revisited

recover its meaning without also storing a representation of the context—which raises the
question of how the context itself can be represented. Natural languages also suffer from
ambiguity, a problem for a representation language. As Pinker (1995) puts it: “When people
AMBIGUITY
think about spring, surely they are not confused as to whether they are thinking about a season
or something that goes boing—and if one word can correspond to two thoughts, thoughts
can’t be words.”
The famous Sapir–Whorf hypothesis claims that our understanding of the world is
strongly inﬂuenced by the language we speak. Whorf (1956) wrote “We cut nature up, orga-
nize it into concepts, and ascribe signiﬁcances as we do, largely because we are parties to an
agreement to organize it this way—an agreement that holds throughout our speech commu-
nity and is codiﬁed in the patterns of our language.” It is certainly true that different speech
communities divide up the world differently. The French have two words “chaise” and “fau-
teuil,” for a concept that English speakers cover with one: “chair.” But English speakers
can easily recognize the category fauteuil and give it a name—roughly “open-arm chair”—so
does language really make a difference? Whorf relied mainly on intuition and speculation,
but in the intervening years we actually have real data from anthropological, psychological
and neurological studies.
For example, can you remember which of the following two phrases formed the opening
of Section 8.1?
“In this section, we discuss the nature of representation languages . . .”
“This section covers the topic of knowledge representation languages . . .”
Wanner (1974) did a similar experiment and found that subjects made the right choice at
chance level—about 50% of the time—but remembered the content of what they read with
better than 90% accuracy. This suggests that people process the words to form some kind of
nonverbal representation.
More interesting is the case in which a concept is completely absent in a language.
Speakers of the Australian aboriginal language Guugu Yimithirr have no words for relative
directions, such as front, back, right, or left. Instead they use absolute directions, saying,
for example, the equivalent of “I have a pain in my north arm.” This difference in language
makes a difference in behavior: Guugu Yimithirr speakers are better at navigating in open
terrain, while English speakers are better at placing the fork to the right of the plate.
Language also seems to inﬂuence thought through seemingly arbitrary grammatical
features such as the gender of nouns. For example, “bridge” is masculine in Spanish and
feminine in German. Boroditsky (2003) asked subjects to choose English adjectives to de-
scribe a photograph of a particular bridge. Spanish speakers chose big, dangerous, strong,
and towering, whereas German speakers chose beautiful, elegant, fragile, and slender. Words
can serve as anchor points that affect how we perceive the world. Loftus and Palmer (1974)
showed experimental subjects a movie of an auto accident. Subjects who were asked “How
fast were the cars going when they contacted each other?” reported an average of 32 mph,
while subjects who were asked the question with the word “smashed” instead of “contacted”
reported 41mph for the same cars in the same movie.

Chapter
8.
First-Order Logic
In a ﬁrst-order logic reasoning system that uses CNF, we can see that the linguistic form
“¬(A ∨B)” and “¬A ∧¬B” are the same because we can look inside the system and see
that the two sentences are stored as the same canonical CNF form. Can we do that with the
human brain? Until recently the answer was “no,” but now it is “maybe.” Mitchell et al.
(2008) put subjects in an fMRI (functional magnetic resonance imaging) machine, showed
them words such as “celery,” and imaged their brains. The researchers were then able to train
a computer program to predict, from a brain image, what word the subject had been presented
with. Given two choices (e.g., “celery” or “airplane”), the system predicts correctly 77% of
the time. The system can even predict at above-chance levels for words it has never seen
an fMRI image of before (by considering the images of related words) and for people it has
never seen before (proving that fMRI reveals some level of common representation across
people). This type of work is still in its infancy, but fMRI (and other imaging technology
such as intracranial electrophysiology (Sahin et al., 2009)) promises to give us much more
concrete ideas of what human knowledge representations are like.
From the viewpoint of formal logic, representing the same knowledge in two different
ways makes absolutely no difference; the same facts will be derivable from either represen-
tation. In practice, however, one representation might require fewer steps to derive a conclu-
sion, meaning that a reasoner with limited resources could get to the conclusion using one
representation but not the other. For nondeductive tasks such as learning from experience,
outcomes are necessarily dependent on the form of the representations used. We show in
Chapter 18 that when a learning program considers two possible theories of the world, both
of which are consistent with all the data, the most common way of breaking the tie is to choose
the most succinct theory—and that depends on the language used to represent theories. Thus,
the inﬂuence of language on thought is unavoidable for any agent that does learning.
8.1.2
Combining the best of formal and natural languages
We can adopt the foundation of propositional logic—a declarative, compositional semantics
that is context-independent and unambiguous—and build a more expressive logic on that
foundation, borrowing representational ideas from natural language while avoiding its draw-
backs. When we look at the syntax of natural language, the most obvious elements are nouns
and noun phrases that refer to objects (squares, pits, wumpuses) and verbs and verb phrases
OBJECT
that refer to relations among objects (is breezy, is adjacent to, shoots). Some of these rela-
RELATION
tions are functions—relations in which there is only one “value” for a given “input.” It is
FUNCTION
easy to start listing examples of objects, relations, and functions:
• Objects: people, houses, numbers, theories, Ronald McDonald, colors, baseball games,
wars, centuries . . .
• Relations: these can be unary relations or properties such as red, round, bogus, prime,
PROPERTY
multistoried . . ., or more general n-ary relations such as brother of, bigger than, inside,
part of, has color, occurred after, owns, comes between, . . .
• Functions: father of, best friend, third inning of, one more than, beginning of . . .
Indeed, almost any assertion can be thought of as referring to objects and properties or rela-
tions. Some examples follow:

Section 8.1.
Representation Revisited

• “One plus two equals three.”
Objects: one, two, three, one plus two; Relation: equals; Function: plus. (“One plus
two” is a name for the object that is obtained by applying the function “plus” to the
objects “one” and “two.” “Three” is another name for this object.)
• “Squares neighboring the wumpus are smelly.”
Objects: wumpus, squares; Property: smelly; Relation: neighboring.
• “Evil King John ruled England in 1200.”
Objects: John, England, 1200; Relation: ruled; Properties: evil, king.
The language of ﬁrst-order logic, whose syntax and semantics we deﬁne in the next section,
is built around objects and relations. It has been so important to mathematics, philosophy, and
artiﬁcial intelligence precisely because those ﬁelds—and indeed, much of everyday human
existence—can be usefully thought of as dealing with objects and the relations among them.
First-order logic can also express facts about some or all of the objects in the universe. This
enables one to represent general laws or rules, such as the statement “Squares neighboring
the wumpus are smelly.”
The primary difference between propositional and ﬁrst-order logic lies in the ontologi-
cal commitment made by each language—that is, what it assumes about the nature of reality.
ONTOLOGICAL
COMMITMENT
Mathematically, this commitment is expressed through the nature of the formal models with
respect to which the truth of sentences is deﬁned. For example, propositional logic assumes
that there are facts that either hold or do not hold in the world. Each fact can be in one
of two states: true or false, and each model assigns true or false to each proposition sym-
bol (see Section 7.4.2).2 First-order logic assumes more; namely, that the world consists of
objects with certain relations among them that do or do not hold. The formal models are
correspondingly more complicated than those for propositional logic. Special-purpose logics
make still further ontological commitments; for example, temporal logic assumes that facts
TEMPORAL LOGIC
hold at particular times and that those times (which may be points or intervals) are ordered.
Thus, special-purpose logics give certain kinds of objects (and the axioms about them) “ﬁrst
class” status within the logic, rather than simply deﬁning them within the knowledge base.
Higher-order logic views the relations and functions referred to by ﬁrst-order logic as ob-
HIGHER-ORDER
LOGIC
jects in themselves. This allows one to make assertions about all relations—for example, one
could wish to deﬁne what it means for a relation to be transitive. Unlike most special-purpose
logics, higher-order logic is strictly more expressive than ﬁrst-order logic, in the sense that
some sentences of higher-order logic cannot be expressed by any ﬁnite number of ﬁrst-order
logic sentences.
A logic can also be characterized by its epistemological commitments—the possible
EPISTEMOLOGICAL
COMMITMENT
states of knowledge that it allows with respect to each fact. In both propositional and ﬁrst-
order logic, a sentence represents a fact and the agent either believes the sentence to be true,
believes it to be false, or has no opinion. These logics therefore have three possible states
of knowledge regarding any sentence. Systems using probability theory, on the other hand,
2 In contrast, facts in fuzzy logic have a degree of truth between 0 and 1. For example, the sentence “Vienna is
a large city” might be true in our world only to degree 0.6 in fuzzy logic.

Chapter
8.
First-Order Logic
can have any degree of belief, ranging from 0 (total disbelief) to 1 (total belief).3 For ex-
ample, a probabilistic wumpus-world agent might believe that the wumpus is in [1,3] with
probability 0.75. The ontological and epistemological commitments of ﬁve different logics
are summarized in Figure 8.1.
Language
Ontological Commitment
Epistemological Commitment
(What exists in the world)
(What an agent believes about facts)
Propositional logic
facts
true/false/unknown
First-order logic
facts, objects, relations
true/false/unknown
Temporal logic
facts, objects, relations, times
true/false/unknown
Probability theory
facts
degree of belief ∈[0, 1]
Fuzzy logic
facts with degree of truth ∈[0, 1]
known interval value
Figure 8.1
Formal languages and their ontological and epistemological commitments.
In the next section, we will launch into the details of ﬁrst-order logic. Just as a student of
physics requires some familiarity with mathematics, a student of AI must develop a talent for
working with logical notation. On the other hand, it is also important not to get too concerned
with the speciﬁcs of logical notation—after all, there are dozens of different versions. The
main things to keep hold of are how the language facilitates concise representations and how
its semantics leads to sound reasoning procedures.
8.2
SYNTAX AND SEMANTICS OF FIRST-ORDER LOGIC
We begin this section by specifying more precisely the way in which the possible worlds
of ﬁrst-order logic reﬂect the ontological commitment to objects and relations. Then we
introduce the various elements of the language, explaining their semantics as we go along.
8.2.1
Models for ﬁrst-order logic
Recall from Chapter 7 that the models of a logical language are the formal structures that
constitute the possible worlds under consideration. Each model links the vocabulary of the
logical sentences to elements of the possible world, so that the truth of any sentence can
be determined. Thus, models for propositional logic link proposition symbols to predeﬁned
truth values. Models for ﬁrst-order logic are much more interesting. First, they have objects
in them! The domain of a model is the set of objects or domain elements it contains. The do-
DOMAIN
DOMAIN ELEMENTS
main is required to be nonempty—every possible world must contain at least one object. (See
Exercise 8.7 for a discussion of empty worlds.) Mathematically speaking, it doesn’t matter
what these objects are—all that matters is how many there are in each particular model—but
for pedagogical purposes we’ll use a concrete example. Figure 8.2 shows a model with ﬁve
3 It is important not to confuse the degree of belief in probability theory with the degree of truth in fuzzy logic.
Indeed, some fuzzy systems allow uncertainty (degree of belief) about degrees of truth.

Section 8.2.
Syntax and Semantics of First-Order Logic

objects: Richard the Lionheart, King of England from 1189 to 1199; his younger brother, the
evil King John, who ruled from 1199 to 1215; the left legs of Richard and John; and a crown.
The objects in the model may be related in various ways. In the ﬁgure, Richard and
John are brothers. Formally speaking, a relation is just the set of tuples of objects that are
TUPLE
related. (A tuple is a collection of objects arranged in a ﬁxed order and is written with angle
brackets surrounding the objects.) Thus, the brotherhood relation in this model is the set
{ ⟨Richard the Lionheart, King John⟩, ⟨King John, Richard the Lionheart⟩} .
(8.1)
(Here we have named the objects in English, but you may, if you wish, mentally substitute the
pictures for the names.) The crown is on King John’s head, so the “on head” relation contains
just one tuple, ⟨the crown, King John⟩. The “brother” and “on head” relations are binary
relations—that is, they relate pairs of objects. The model also contains unary relations, or
properties: the “person” property is true of both Richard and John; the “king” property is true
only of John (presumably because Richard is dead at this point); and the “crown” property is
true only of the crown.
Certain kinds of relationships are best considered as functions, in that a given object
must be related to exactly one object in this way. For example, each person has one left leg,
so the model has a unary “left leg” function that includes the following mappings:
⟨Richard the Lionheart⟩→Richard’s left leg
⟨King John⟩→John’s left leg .
(8.2)
Strictly speaking, models in ﬁrst-order logic require total functions, that is, there must be a
TOTAL FUNCTIONS
value for every input tuple. Thus, the crown must have a left leg and so must each of the left
legs. There is a technical solution to this awkward problem involving an additional “invisible”
R
J
$
left leg
on head
brother
brother
person
person
king
crown
left leg
Figure 8.2
A model containing ﬁve objects, two binary relations, three unary relations
(indicated by labels on the objects), and one unary function, left-leg.

Chapter
8.
First-Order Logic
object that is the left leg of everything that has no left leg, including itself. Fortunately, as
long as one makes no assertions about the left legs of things that have no left legs, these
technicalities are of no import.
So far, we have described the elements that populate models for ﬁrst-order logic. The
other essential part of a model is the link between those elements and the vocabulary of the
logical sentences, which we explain next.
8.2.2
Symbols and interpretations
We turn now to the syntax of ﬁrst-order logic. The impatient reader can obtain a complete
description from the formal grammar in Figure 8.3.
The basic syntactic elements of ﬁrst-order logic are the symbols that stand for objects,
relations, and functions. The symbols, therefore, come in three kinds: constant symbols,
CONSTANT SYMBOL
which stand for objects; predicate symbols, which stand for relations; and function sym-
PREDICATE SYMBOL
bols, which stand for functions. We adopt the convention that these symbols will begin with
FUNCTION SYMBOL
uppercase letters. For example, we might use the constant symbols Richard and John; the
predicate symbols Brother, OnHead, Person, King, and Crown; and the function symbol
LeftLeg. As with proposition symbols, the choice of names is entirely up to the user. Each
predicate and function symbol comes with an arity that ﬁxes the number of arguments.
ARITY
As in propositional logic, every model must provide the information required to deter-
mine if any given sentence is true or false. Thus, in addition to its objects, relations, and
functions, each model includes an interpretation that speciﬁes exactly which objects, rela-
INTERPRETATION
tions and functions are referred to by the constant, predicate, and function symbols. One
possible interpretation for our example—which a logician would call the intended interpre-
tation—is as follows:
INTENDED
INTERPRETATION
• Richard refers to Richard the Lionheart and John refers to the evil King John.
• Brother refers to the brotherhood relation, that is, the set of tuples of objects given in
Equation (8.1); OnHead refers to the “on head” relation that holds between the crown
and King John; Person, King, and Crown refer to the sets of objects that are persons,
kings, and crowns.
• LeftLeg refers to the “left leg” function, that is, the mapping given in Equation (8.2).
There are many other possible interpretations, of course. For example, one interpretation
maps Richard to the crown and John to King John’s left leg. There are ﬁve objects in
the model, so there are 25 possible interpretations just for the constant symbols Richard
and John. Notice that not all the objects need have a name—for example, the intended
interpretation does not name the crown or the legs. It is also possible for an object to have
several names; there is an interpretation under which both Richard and John refer to the
crown.4 If you ﬁnd this possibility confusing, remember that, in propositional logic, it is
perfectly possible to have a model in which Cloudy and Sunny are both true; it is the job of
the knowledge base to rule out models that are inconsistent with our knowledge.
4 Later, in Section 8.2.8, we examine a semantics in which every object has exactly one name.

Section 8.2.
Syntax and Semantics of First-Order Logic

Sentence
→
AtomicSentence | ComplexSentence
AtomicSentence
→
Predicate | Predicate(Term, . . .) | Term = Term
ComplexSentence
→
( Sentence ) | [ Sentence ]
|
¬ Sentence
|
Sentence ∧Sentence
|
Sentence ∨Sentence
|
Sentence
⇒Sentence
|
Sentence
⇔
Sentence
|
Quantiﬁer Variable, . . . Sentence
Term
→
Function(Term, . . .)
|
Constant
|
Variable
Quantiﬁer
→
∀| ∃
Constant
→
A | X1 | John | · · ·
Variable
→
a | x | s | · · ·
Predicate
→
True | False | After | Loves | Raining | · · ·
Function
→
Mother | LeftLeg | · · ·
OPERATOR PRECEDENCE
:
¬, =, ∧, ∨, ⇒, ⇔
Figure 8.3
The syntax of ﬁrst-order logic with equality, speciﬁed in Backus–Naur form
(see page 1060 if you are not familiar with this notation). Operator precedences are speciﬁed,
from highest to lowest. The precedence of quantiﬁers is such that a quantiﬁer holds over
everything to the right of it.
R
J
R
J
R
J
R
J
R
J
R
J
. . .
. . .
. . .
Figure 8.4
Some members of the set of all models for a language with two constant sym-
bols, R and J, and one binary relation symbol. The interpretation of each constant symbol is
shown by a gray arrow. Within each model, the related objects are connected by arrows.

Chapter
8.
First-Order Logic
In summary, a model in ﬁrst-order logic consists of a set of objects and an interpretation
that maps constant symbols to objects, predicate symbols to relations on those objects, and
function symbols to functions on those objects. Just as with propositional logic, entailment,
validity, and so on are deﬁned in terms of all possible models. To get an idea of what the
set of all possible models looks like, see Figure 8.4. It shows that models vary in how many
objects they contain—from one up to inﬁnity—and in the way the constant symbols map
to objects. If there are two constant symbols and one object, then both symbols must refer
to the same object; but this can still happen even with more objects. When there are more
objects than constant symbols, some of the objects will have no names. Because the number
of possible models is unbounded, checking entailment by the enumeration of all possible
models is not feasible for ﬁrst-order logic (unlike propositional logic). Even if the number of
objects is restricted, the number of combinations can be very large. (See Exercise 8.5.) For
the example in Figure 8.4, there are 137,506,194,466 models with six or fewer objects.
8.2.3
Terms
A term is a logical expression that refers to an object. Constant symbols are therefore terms,
TERM
but it is not always convenient to have a distinct symbol to name every object. For example,
in English we might use the expression “King John’s left leg” rather than giving a name
to his leg. This is what function symbols are for: instead of using a constant symbol, we
use LeftLeg(John). In the general case, a complex term is formed by a function symbol
followed by a parenthesized list of terms as arguments to the function symbol. It is important
to remember that a complex term is just a complicated kind of name. It is not a “subroutine
call” that “returns a value.” There is no LeftLeg subroutine that takes a person as input and
returns a leg. We can reason about left legs (e.g., stating the general rule that everyone has one
and then deducing that John must have one) without ever providing a deﬁnition of LeftLeg.
This is something that cannot be done with subroutines in programming languages.5
The formal semantics of terms is straightforward. Consider a term f(t1, . . . , tn). The
function symbol f refers to some function in the model (call it F); the argument terms refer
to objects in the domain (call them d1, . . . , dn); and the term as a whole refers to the object
that is the value of the function F applied to d1, . . . , dn. For example, suppose the LeftLeg
function symbol refers to the function shown in Equation (8.2) and John refers to King John,
then LeftLeg(John) refers to King John’s left leg. In this way, the interpretation ﬁxes the
referent of every term.
8.2.4
Atomic sentences
Now that we have both terms for referring to objects and predicate symbols for referring to
relations, we can put them together to make atomic sentences that state facts. An atomic
5 λ-expressions provide a useful notation in which new function symbols are constructed “on the ﬂy.” For
example, the function that squares its argument can be written as (λx x × x) and can be applied to arguments
just like any other function symbol. A λ-expression can also be deﬁned and used as a predicate symbol. (See
Chapter 22.) The lambda operator in Lisp plays exactly the same role. Notice that the use of λ in this way does
not increase the formal expressive power of ﬁrst-order logic, because any sentence that includes a λ-expression
can be rewritten by “plugging in” its arguments to yield an equivalent sentence.

Section 8.2.
Syntax and Semantics of First-Order Logic

sentence (or atom for short) is formed from a predicate symbol optionally followed by a
ATOMIC SENTENCE
ATOM
parenthesized list of terms, such as
Brother(Richard, John).
This states, under the intended interpretation given earlier, that Richard the Lionheart is the
brother of King John.6 Atomic sentences can have complex terms as arguments. Thus,
Married(Father(Richard), Mother(John))
states that Richard the Lionheart’s father is married to King John’s mother (again, under a
suitable interpretation).
An atomic sentence is true in a given model if the relation referred to by the predicate
symbol holds among the objects referred to by the arguments.
8.2.5
Complex sentences
We can use logical connectives to construct more complex sentences, with the same syntax
and semantics as in propositional calculus. Here are four sentences that are true in the model
of Figure 8.2 under our intended interpretation:
¬Brother(LeftLeg(Richard), John)
Brother(Richard, John) ∧Brother(John, Richard)
King(Richard) ∨King(John)
¬King(Richard) ⇒King(John) .
8.2.6
Quantiﬁers
Once we have a logic that allows objects, it is only natural to want to express properties of
entire collections of objects, instead of enumerating the objects by name. Quantiﬁers let us
QUANTIFIER
do this. First-order logic contains two standard quantiﬁers, called universal and existential.
Universal quantiﬁcation (∀)
Recall the difﬁculty we had in Chapter 7 with the expression of general rules in proposi-
tional logic. Rules such as “Squares neighboring the wumpus are smelly” and “All kings
are persons” are the bread and butter of ﬁrst-order logic. We deal with the ﬁrst of these in
Section 8.3. The second rule, “All kings are persons,” is written in ﬁrst-order logic as
∀x King(x) ⇒Person(x) .
∀is usually pronounced “For all . . .”. (Remember that the upside-down A stands for “all.”)
Thus, the sentence says, “For all x, if x is a king, then x is a person.” The symbol x is called
a variable. By convention, variables are lowercase letters. A variable is a term all by itself,
VARIABLE
and as such can also serve as the argument of a function—for example, LeftLeg(x). A term
with no variables is called a ground term.
GROUND TERM
Intuitively, the sentence ∀x P, where P is any logical expression, says that P is true
for every object x. More precisely, ∀x P is true in a given model if P is true in all possible
extended interpretations constructed from the interpretation given in the model, where each
EXTENDED
INTERPRETATION
6 We usually follow the argument-ordering convention that P(x, y) is read as “x is a P of y.”

Chapter
8.
First-Order Logic
extended interpretation speciﬁes a domain element to which x refers.
This sounds complicated, but it is really just a careful way of stating the intuitive mean-
ing of universal quantiﬁcation. Consider the model shown in Figure 8.2 and the intended
interpretation that goes with it. We can extend the interpretation in ﬁve ways:
x →Richard the Lionheart,
x →King John,
x →Richard’s left leg,
x →John’s left leg,
x →the crown.
The universally quantiﬁed sentence ∀x King(x) ⇒Person(x) is true in the original model
if the sentence King(x) ⇒Person(x) is true under each of the ﬁve extended interpreta-
tions. That is, the universally quantiﬁed sentence is equivalent to asserting the following ﬁve
sentences:
Richard the Lionheart is a king ⇒Richard the Lionheart is a person.
King John is a king ⇒King John is a person.
Richard’s left leg is a king ⇒Richard’s left leg is a person.
John’s left leg is a king ⇒John’s left leg is a person.
The crown is a king ⇒the crown is a person.
Let us look carefully at this set of assertions. Since, in our model, King John is the only
king, the second sentence asserts that he is a person, as we would hope. But what about
the other four sentences, which appear to make claims about legs and crowns? Is that part
of the meaning of “All kings are persons”? In fact, the other four assertions are true in the
model, but make no claim whatsoever about the personhood qualiﬁcations of legs, crowns,
or indeed Richard. This is because none of these objects is a king. Looking at the truth table
for ⇒(Figure 7.8 on page 246), we see that the implication is true whenever its premise is
false—regardless of the truth of the conclusion. Thus, by asserting the universally quantiﬁed
sentence, which is equivalent to asserting a whole list of individual implications, we end
up asserting the conclusion of the rule just for those objects for whom the premise is true
and saying nothing at all about those individuals for whom the premise is false. Thus, the
truth-table deﬁnition of ⇒turns out to be perfect for writing general rules with universal
quantiﬁers.
A common mistake, made frequently even by diligent readers who have read this para-
graph several times, is to use conjunction instead of implication. The sentence
∀x King(x) ∧Person(x)
would be equivalent to asserting
Richard the Lionheart is a king ∧Richard the Lionheart is a person,
King John is a king ∧King John is a person,
Richard’s left leg is a king ∧Richard’s left leg is a person,
and so on. Obviously, this does not capture what we want.

Section 8.2.
Syntax and Semantics of First-Order Logic

Existential quantiﬁcation (∃)
Universal quantiﬁcation makes statements about every object. Similarly, we can make a state-
ment about some object in the universe without naming it, by using an existential quantiﬁer.
To say, for example, that King John has a crown on his head, we write
∃x Crown(x) ∧OnHead(x, John) .
∃x is pronounced “There exists an x such that . . .” or “For some x . . .”.
Intuitively, the sentence ∃x P says that P is true for at least one object x. More
precisely, ∃x P is true in a given model if P is true in at least one extended interpretation
that assigns x to a domain element. That is, at least one of the following is true:
Richard the Lionheart is a crown ∧Richard the Lionheart is on John’s head;
King John is a crown ∧King John is on John’s head;
Richard’s left leg is a crown ∧Richard’s left leg is on John’s head;
John’s left leg is a crown ∧John’s left leg is on John’s head;
The crown is a crown ∧the crown is on John’s head.
The ﬁfth assertion is true in the model, so the original existentially quantiﬁed sentence is
true in the model. Notice that, by our deﬁnition, the sentence would also be true in a model
in which King John was wearing two crowns. This is entirely consistent with the original
sentence “King John has a crown on his head.” 7
Just as ⇒appears to be the natural connective to use with ∀, ∧is the natural connective
to use with ∃. Using ∧as the main connective with ∀led to an overly strong statement in
the example in the previous section; using ⇒with ∃usually leads to a very weak statement,
indeed. Consider the following sentence:
∃x Crown(x) ⇒OnHead(x, John) .
On the surface, this might look like a reasonable rendition of our sentence. Applying the
semantics, we see that the sentence says that at least one of the following assertions is true:
Richard the Lionheart is a crown ⇒Richard the Lionheart is on John’s head;
King John is a crown ⇒King John is on John’s head;
Richard’s left leg is a crown ⇒Richard’s left leg is on John’s head;
and so on. Now an implication is true if both premise and conclusion are true, or if its premise
is false. So if Richard the Lionheart is not a crown, then the ﬁrst assertion is true and the
existential is satisﬁed. So, an existentially quantiﬁed implication sentence is true whenever
any object fails to satisfy the premise; hence such sentences really do not say much at all.
Nested quantiﬁers
We will often want to express more complex sentences using multiple quantiﬁers. The sim-
plest case is where the quantiﬁers are of the same type. For example, “Brothers are siblings”
can be written as
∀x ∀y Brother(x, y) ⇒Sibling(x, y) .
7 There is a variant of the existential quantiﬁer, usually written ∃1 or ∃!, that means “There exists exactly one.”
The same meaning can be expressed using equality statements.

Chapter
8.
First-Order Logic
Consecutive quantiﬁers of the same type can be written as one quantiﬁer with several vari-
ables. For example, to say that siblinghood is a symmetric relationship, we can write
∀x, y Sibling(x, y) ⇔Sibling(y, x) .
In other cases we will have mixtures. “Everybody loves somebody” means that for every
person, there is someone that person loves:
∀x ∃y Loves(x, y) .
On the other hand, to say “There is someone who is loved by everyone,” we write
∃y ∀x Loves(x, y) .
The order of quantiﬁcation is therefore very important. It becomes clearer if we insert paren-
theses. ∀x (∃y Loves(x, y)) says that everyone has a particular property, namely, the prop-
erty that they love someone. On the other hand, ∃y (∀x Loves(x, y)) says that someone in
the world has a particular property, namely the property of being loved by everybody.
Some confusion can arise when two quantiﬁers are used with the same variable name.
Consider the sentence
∀x (Crown(x) ∨(∃x Brother(Richard, x))) .
Here the x in Brother(Richard, x) is existentially quantiﬁed. The rule is that the variable
belongs to the innermost quantiﬁer that mentions it; then it will not be subject to any other
quantiﬁcation. Another way to think of it is this: ∃x Brother(Richard, x) is a sentence
about Richard (that he has a brother), not about x; so putting a ∀x outside it has no effect. It
could equally well have been written ∃z Brother(Richard, z). Because this can be a source
of confusion, we will always use different variable names with nested quantiﬁers.
Connections between ∀and ∃
The two quantiﬁers are actually intimately connected with each other, through negation. As-
serting that everyone dislikes parsnips is the same as asserting there does not exist someone
who likes them, and vice versa:
∀x ¬Likes(x, Parsnips)
is equivalent to
¬∃x Likes(x, Parsnips) .
We can go one step further: “Everyone likes ice cream” means that there is no one who does
not like ice cream:
∀x Likes(x, IceCream)
is equivalent to
¬∃x ¬Likes(x, IceCream) .
Because ∀is really a conjunction over the universe of objects and ∃is a disjunction, it should
not be surprising that they obey De Morgan’s rules. The De Morgan rules for quantiﬁed and
unquantiﬁed sentences are as follows:
∀x ¬P
≡¬∃x P
¬(P ∨Q) ≡¬P ∧¬Q
¬∀x P
≡∃x ¬P
¬(P ∧Q) ≡¬P ∨¬Q
∀x P
≡¬∃x ¬P
P ∧Q
≡¬(¬P ∨¬Q)
∃x P
≡¬∀x ¬P
P ∨Q
≡¬(¬P ∧¬Q) .
Thus, we do not really need both ∀and ∃, just as we do not really need both ∧and ∨. Still,
readability is more important than parsimony, so we will keep both of the quantiﬁers.

Section 8.2.
Syntax and Semantics of First-Order Logic

8.2.7
Equality
First-order logic includes one more way to make atomic sentences, other than using a predi-
cate and terms as described earlier. We can use the equality symbol to signify that two terms
EQUALITY SYMBOL
refer to the same object. For example,
Father(John) = Henry
says that the object referred to by Father(John) and the object referred to by Henry are the
same. Because an interpretation ﬁxes the referent of any term, determining the truth of an
equality sentence is simply a matter of seeing that the referents of the two terms are the same
object.
The equality symbol can be used to state facts about a given function, as we just did for
the Father symbol. It can also be used with negation to insist that two terms are not the same
object. To say that Richard has at least two brothers, we would write
∃x, y Brother(x, Richard) ∧Brother(y, Richard) ∧¬(x = y) .
The sentence
∃x, y Brother(x, Richard) ∧Brother(y, Richard)
does not have the intended meaning. In particular, it is true in the model of Figure 8.2, where
Richard has only one brother. To see this, consider the extended interpretation in which both
x and y are assigned to King John. The addition of ¬(x = y) rules out such models. The
notation x̸ = y is sometimes used as an abbreviation for ¬(x = y).
8.2.8
An alternative semantics?
Continuing the example from the previous section, suppose that we believe that Richard has
two brothers, John and Geoffrey.8 Can we capture this state of affairs by asserting
Brother(John, Richard) ∧Brother(Geoﬀrey, Richard) ?
(8.3)
Not quite. First, this assertion is true in a model where Richard has only one brother—
we need to add John̸ = Geoﬀrey. Second, the sentence doesn’t rule out models in which
Richard has many more brothers besides John and Geoffrey. Thus, the correct translation of
“Richard’s brothers are John and Geoffrey” is as follows:
Brother(John, Richard) ∧Brother(Geoﬀrey, Richard) ∧John̸ = Geoﬀrey
∧∀x Brother(x, Richard) ⇒(x = John ∨x = Geoﬀrey) .
For many purposes, this seems much more cumbersome than the corresponding natural-
language expression. As a consequence, humans may make mistakes in translating their
knowledge into ﬁrst-order logic, resulting in unintuitive behaviors from logical reasoning
systems that use the knowledge. Can we devise a semantics that allows a more straightfor-
ward logical expression?
One proposal that is very popular in database systems works as follows. First, we insist
that every constant symbol refer to a distinct object—the so-called unique-names assump-
tion. Second, we assume that atomic sentences not known to be true are in fact false—the
UNIQUE-NAMES
ASSUMPTION
closed-world assumption. Finally, we invoke domain closure, meaning that each model
CLOSED-WORLD
ASSUMPTION
DOMAIN CLOSURE
8 Actually he had four, the others being William and Henry.

Chapter
8.
First-Order Logic
. . .
R
J
R
J
R
J
R
J
R
J
R
J
R
J
R
J
R
J
R
J
Figure 8.5
Some members of the set of all models for a language with two constant sym-
bols, R and J, and one binary relation symbol, under database semantics. The interpretation
of the constant symbols is ﬁxed, and there is a distinct object for each constant symbol.
contains no more domain elements than those named by the constant symbols. Under the
resulting semantics, which we call database semantics to distinguish it from the standard
DATABASE
SEMANTICS
semantics of ﬁrst-order logic, the sentence Equation (8.3) does indeed state that Richard’s
two brothers are John and Geoffrey. Database semantics is also used in logic programming
systems, as explained in Section 9.4.5.
It is instructive to consider the set of all possible models under database semantics for
the same case as shown in Figure 8.4. Figure 8.5 shows some of the models, ranging from
the model with no tuples satisfying the relation to the model with all tuples satisfying the
relation. With two objects, there are four possible two-element tuples, so there are 24 = 16
different subsets of tuples that can satisfy the relation. Thus, there are 16 possible models in
all—a lot fewer than the inﬁnitely many models for the standard ﬁrst-order semantics. On the
other hand, the database semantics requires deﬁnite knowledge of what the world contains.
This example brings up an important point: there is no one “correct” semantics for
logic. The usefulness of any proposed semantics depends on how concise and intuitive it
makes the expression of the kinds of knowledge we want to write down, and on how easy
and natural it is to develop the corresponding rules of inference. Database semantics is most
useful when we are certain about the identity of all the objects described in the knowledge
base and when we have all the facts at hand; in other cases, it is quite awkward. For the rest
of this chapter, we assume the standard semantics while noting instances in which this choice
leads to cumbersome expressions.
8.3
USING FIRST-ORDER LOGIC
Now that we have deﬁned an expressive logical language, it is time to learn how to use it. The
best way to do this is through examples. We have seen some simple sentences illustrating the
various aspects of logical syntax; in this section, we provide more systematic representations
of some simple domains. In knowledge representation, a domain is just some part of the
DOMAIN
world about which we wish to express some knowledge.
We begin with a brief description of the TELL/ASK interface for ﬁrst-order knowledge
bases. Then we look at the domains of family relationships, numbers, sets, and lists, and at

Section 8.3.
Using First-Order Logic

the wumpus world. The next section contains a more substantial example (electronic circuits)
and Chapter 12 covers everything in the universe.
8.3.1
Assertions and queries in ﬁrst-order logic
Sentences are added to a knowledge base using TELL, exactly as in propositional logic. Such
sentences are called assertions. For example, we can assert that John is a king, Richard is a
ASSERTION
person, and all kings are persons:
TELL(KB, King(John)) .
TELL(KB, Person(Richard)) .
TELL(KB, ∀x King(x) ⇒Person(x)) .
We can ask questions of the knowledge base using ASK. For example,
ASK(KB, King(John))
returns true. Questions asked with ASK are called queries or goals. Generally speaking, any
QUERY
GOAL
query that is logically entailed by the knowledge base should be answered afﬁrmatively. For
example, given the two preceding assertions, the query
ASK(KB, Person(John))
should also return true. We can ask quantiﬁed queries, such as
ASK(KB, ∃x Person(x)) .
The answer is true, but this is perhaps not as helpful as we would like. It is rather like
answering “Can you tell me the time?” with “Yes.” If we want to know what value of x
makes the sentence true, we will need a different function, ASKVARS, which we call with
ASKVARS(KB, Person(x))
and which yields a stream of answers. In this case there will be two answers: {x/John} and
{x/Richard}. Such an answer is called a substitution or binding list. ASKVARS is usually
SUBSTITUTION
BINDING LIST
reserved for knowledge bases consisting solely of Horn clauses, because in such knowledge
bases every way of making the query true will bind the variables to speciﬁc values. That is
not the case with ﬁrst-order logic; if KB has been told King(John) ∨King(Richard), then
there is no binding to x for the query ∃x King(x), even though the query is true.
8.3.2
The kinship domain
The ﬁrst example we consider is the domain of family relationships, or kinship. This domain
includes facts such as “Elizabeth is the mother of Charles” and “Charles is the father of
William” and rules such as “One’s grandmother is the mother of one’s parent.”
Clearly, the objects in our domain are people. We have two unary predicates, Male and
Female. Kinship relations—parenthood, brotherhood, marriage, and so on—are represented
by binary predicates: Parent, Sibling, Brother, Sister, Child, Daughter, Son, Spouse,
Wife, Husband, Grandparent, Grandchild, Cousin, Aunt, and Uncle. We use functions
for Mother and Father, because every person has exactly one of each of these (at least
according to nature’s design).

Chapter
8.
First-Order Logic
We can go through each function and predicate, writing down what we know in terms
of the other symbols. For example, one’s mother is one’s female parent:
∀m, c Mother(c) = m ⇔Female(m) ∧Parent(m, c) .
One’s husband is one’s male spouse:
∀w, h Husband(h, w) ⇔Male(h) ∧Spouse(h, w) .
Male and female are disjoint categories:
∀x Male(x) ⇔¬Female(x) .
Parent and child are inverse relations:
∀p, c Parent(p, c) ⇔Child(c, p) .
A grandparent is a parent of one’s parent:
∀g, c Grandparent(g, c) ⇔∃p Parent(g, p) ∧Parent(p, c) .
A sibling is another child of one’s parents:
∀x, y Sibling(x, y) ⇔x̸ = y ∧∃p Parent(p, x) ∧Parent(p, y) .
We could go on for several more pages like this, and Exercise 8.14 asks you to do just that.
Each of these sentences can be viewed as an axiom of the kinship domain, as explained
in Section 7.1. Axioms are commonly associated with purely mathematical domains—we
will see some axioms for numbers shortly—but they are needed in all domains. They provide
the basic factual information from which useful conclusions can be derived. Our kinship
axioms are also deﬁnitions; they have the form ∀x, y P(x, y) ⇔
. . .. The axioms deﬁne
DEFINITION
the Mother function and the Husband, Male, Parent, Grandparent, and Sibling predicates
in terms of other predicates. Our deﬁnitions “bottom out” at a basic set of predicates (Child,
Spouse, and Female) in terms of which the others are ultimately deﬁned. This is a natural
way in which to build up the representation of a domain, and it is analogous to the way in
which software packages are built up by successive deﬁnitions of subroutines from primitive
library functions. Notice that there is not necessarily a unique set of primitive predicates;
we could equally well have used Parent, Spouse, and Male. In some domains, as we show,
there is no clearly identiﬁable basic set.
Not all logical sentences about a domain are axioms. Some are theorems—that is, they
THEOREM
are entailed by the axioms. For example, consider the assertion that siblinghood is symmetric:
∀x, y Sibling(x, y) ⇔Sibling(y, x) .
Is this an axiom or a theorem? In fact, it is a theorem that follows logically from the axiom
that deﬁnes siblinghood. If we ASK the knowledge base this sentence, it should return true.
From a purely logical point of view, a knowledge base need contain only axioms and
no theorems, because the theorems do not increase the set of conclusions that follow from
the knowledge base. From a practical point of view, theorems are essential to reduce the
computational cost of deriving new sentences. Without them, a reasoning system has to start
from ﬁrst principles every time, rather like a physicist having to rederive the rules of calculus
for every new problem.

Section 8.3.
Using First-Order Logic

Not all axioms are deﬁnitions. Some provide more general information about certain
predicates without constituting a deﬁnition. Indeed, some predicates have no complete deﬁ-
nition because we do not know enough to characterize them fully. For example, there is no
obvious deﬁnitive way to complete the sentence
∀x Person(x) ⇔. . .
Fortunately, ﬁrst-order logic allows us to make use of the Person predicate without com-
pletely deﬁning it. Instead, we can write partial speciﬁcations of properties that every person
has and properties that make something a person:
∀x Person(x) ⇒. . .
∀x . . . ⇒Person(x) .
Axioms can also be “just plain facts,” such as Male(Jim) and Spouse(Jim, Laura).
Such facts form the descriptions of speciﬁc problem instances, enabling speciﬁc questions
to be answered. The answers to these questions will then be theorems that follow from
the axioms. Often, one ﬁnds that the expected answers are not forthcoming—for example,
from Spouse(Jim, Laura) one expects (under the laws of many countries) to be able to infer
¬Spouse(George, Laura); but this does not follow from the axioms given earlier—even after
we add Jim̸ = George as suggested in Section 8.2.8. This is a sign that an axiom is missing.
Exercise 8.8 asks the reader to supply it.
8.3.3
Numbers, sets, and lists
Numbers are perhaps the most vivid example of how a large theory can be built up from
a tiny kernel of axioms. We describe here the theory of natural numbers or non-negative
NATURAL NUMBERS
integers. We need a predicate NatNum that will be true of natural numbers; we need one
constant symbol, 0; and we need one function symbol, S (successor). The Peano axioms
PEANO AXIOMS
deﬁne natural numbers and addition.9 Natural numbers are deﬁned recursively:
NatNum(0) .
∀n NatNum(n) ⇒NatNum(S(n)) .
That is, 0 is a natural number, and for every object n, if n is a natural number, then S(n) is
a natural number. So the natural numbers are 0, S(0), S(S(0)), and so on. (After reading
Section 8.2.8, you will notice that these axioms allow for other natural numbers besides the
usual ones; see Exercise 8.12.) We also need axioms to constrain the successor function:
∀n 0̸ = S(n) .
∀m, n m̸ = n ⇒S(m)̸ = S(n) .
Now we can deﬁne addition in terms of the successor function:
∀m NatNum(m) ⇒+ (0, m) = m .
∀m, n NatNum(m) ∧NatNum(n) ⇒+ (S(m), n) = S(+(m, n)) .
The ﬁrst of these axioms says that adding 0 to any natural number m gives m itself. Notice
the use of the binary function symbol “+” in the term +(m, 0); in ordinary mathematics, the
term would be written m + 0 using inﬁx notation. (The notation we have used for ﬁrst-order
INFIX
9 The Peano axioms also include the principle of induction, which is a sentence of second-order logic rather
than of ﬁrst-order logic. The importance of this distinction is explained in Chapter 9.

Chapter
8.
First-Order Logic
logic is called preﬁx.) To make our sentences about numbers easier to read, we allow the use
PREFIX
of inﬁx notation. We can also write S(n) as n + 1, so the second axiom becomes
∀m, n NatNum(m) ∧NatNum(n) ⇒(m + 1) + n = (m + n) + 1 .
This axiom reduces addition to repeated application of the successor function.
The use of inﬁx notation is an example of syntactic sugar, that is, an extension to or
SYNTACTIC SUGAR
abbreviation of the standard syntax that does not change the semantics. Any sentence that
uses sugar can be “desugared” to produce an equivalent sentence in ordinary ﬁrst-order logic.
Once we have addition, it is straightforward to deﬁne multiplication as repeated addi-
tion, exponentiation as repeated multiplication, integer division and remainders, prime num-
bers, and so on. Thus, the whole of number theory (including cryptography) can be built up
from one constant, one function, one predicate and four axioms.
The domain of sets is also fundamental to mathematics as well as to commonsense
SET
reasoning. (In fact, it is possible to deﬁne number theory in terms of set theory.) We want to
be able to represent individual sets, including the empty set. We need a way to build up sets
by adding an element to a set or taking the union or intersection of two sets. We will want
to know whether an element is a member of a set and we will want to distinguish sets from
objects that are not sets.
We will use the normal vocabulary of set theory as syntactic sugar. The empty set is a
constant written as { }. There is one unary predicate, Set, which is true of sets. The binary
predicates are x ∈s (x is a member of set s) and s1 ⊆s2 (set s1 is a subset, not necessarily
proper, of set s2). The binary functions are s1 ∩s2 (the intersection of two sets), s1 ∪s2
(the union of two sets), and {x|s} (the set resulting from adjoining element x to set s). One
possible set of axioms is as follows:
1. The only sets are the empty set and those made by adjoining something to a set:
∀s Set(s) ⇔(s = { }) ∨(∃x, s2 Set(s2) ∧s = {x|s2}) .
2. The empty set has no elements adjoined into it. In other words, there is no way to
decompose { } into a smaller set and an element:
¬∃x, s {x|s} = { } .
3. Adjoining an element already in the set has no effect:
∀x, s x ∈s ⇔s = {x|s} .
4. The only members of a set are the elements that were adjoined into it. We express
this recursively, saying that x is a member of s if and only if s is equal to some set s2
adjoined with some element y, where either y is the same as x or x is a member of s2:
∀x, s x ∈s ⇔∃y, s2 (s = {y|s2} ∧(x = y ∨x ∈s2)) .
5. A set is a subset of another set if and only if all of the ﬁrst set’s members are members
of the second set:
∀s1, s2 s1 ⊆s2 ⇔(∀x x ∈s1 ⇒x ∈s2) .
6. Two sets are equal if and only if each is a subset of the other:
∀s1, s2 (s1 = s2) ⇔(s1 ⊆s2 ∧s2 ⊆s1) .

Section 8.3.
Using First-Order Logic

7. An object is in the intersection of two sets if and only if it is a member of both sets:
∀x, s1, s2 x ∈(s1 ∩s2) ⇔(x ∈s1 ∧x ∈s2) .
8. An object is in the union of two sets if and only if it is a member of either set:
∀x, s1, s2 x ∈(s1 ∪s2) ⇔(x ∈s1 ∨x ∈s2) .
Lists are similar to sets. The differences are that lists are ordered and the same element can
LIST
appear more than once in a list. We can use the vocabulary of Lisp for lists: Nil is the constant
list with no elements; Cons, Append, First, and Rest are functions; and Find is the pred-
icate that does for lists what Member does for sets. List? is a predicate that is true only of
lists. As with sets, it is common to use syntactic sugar in logical sentences involving lists. The
empty list is [ ]. The term Cons(x, y), where y is a nonempty list, is written [x|y]. The term
Cons(x, Nil) (i.e., the list containing the element x) is written as [x]. A list of several ele-
ments, such as [A, B, C], corresponds to the nested term Cons(A, Cons(B, Cons(C, Nil))).
Exercise 8.16 asks you to write out the axioms for lists.
8.3.4
The wumpus world
Some propositional logic axioms for the wumpus world were given in Chapter 7. The ﬁrst-
order axioms in this section are much more concise, capturing in a natural way exactly what
we want to say.
Recall that the wumpus agent receives a percept vector with ﬁve elements. The corre-
sponding ﬁrst-order sentence stored in the knowledge base must include both the percept and
the time at which it occurred; otherwise, the agent will get confused about when it saw what.
We use integers for time steps. A typical percept sentence would be
Percept([Stench, Breeze, Glitter, None, None], 5) .
Here, Percept is a binary predicate, and Stench and so on are constants placed in a list. The
actions in the wumpus world can be represented by logical terms:
Turn(Right), Turn(Left), Forward, Shoot, Grab, Climb .
To determine which is best, the agent program executes the query
ASKVARS(∃a BestAction(a, 5)) ,
which returns a binding list such as {a/Grab}. The agent program can then return Grab as
the action to take. The raw percept data implies certain facts about the current state. For
example:
∀t, s, g, m, c Percept([s, Breeze, g, m, c], t) ⇒Breeze(t) ,
∀t, s, b, m, c Percept([s, b, Glitter, m, c], t) ⇒Glitter(t) ,
and so on. These rules exhibit a trivial form of the reasoning process called perception, which
we study in depth in Chapter 24. Notice the quantiﬁcation over time t. In propositional logic,
we would need copies of each sentence for each time step.
Simple “reﬂex” behavior can also be implemented by quantiﬁed implication sentences.
For example, we have
∀t Glitter(t) ⇒BestAction(Grab, t) .

Chapter
8.
First-Order Logic
Given the percept and rules from the preceding paragraphs, this would yield the desired con-
clusion BestAction(Grab, 5)—that is, Grab is the right thing to do.
We have represented the agent’s inputs and outputs; now it is time to represent the
environment itself. Let us begin with objects. Obvious candidates are squares, pits, and the
wumpus. We could name each square—Square1,2 and so on—but then the fact that Square1,2
and Square1,3 are adjacent would have to be an “extra” fact, and we would need one such
fact for each pair of squares. It is better to use a complex term in which the row and column
appear as integers; for example, we can simply use the list term [1, 2]. Adjacency of any two
squares can be deﬁned as
∀x, y, a, b Adjacent([x, y], [a, b]) ⇔
(x = a ∧(y = b −1 ∨y = b + 1)) ∨(y = b ∧(x = a −1 ∨x = a + 1)) .
We could name each pit, but this would be inappropriate for a different reason: there is no
reason to distinguish among pits.10 It is simpler to use a unary predicate Pit that is true of
squares containing pits. Finally, since there is exactly one wumpus, a constant Wumpus is
just as good as a unary predicate (and perhaps more digniﬁed from the wumpus’s viewpoint).
The agent’s location changes over time, so we write At(Agent, s, t) to mean that the
agent is at square s at time t. We can ﬁx the wumpus’s location with ∀t At(Wumpus, [2, 2], t).
We can then say that objects can only be at one location at a time:
∀x, s1, s2, t At(x, s1, t) ∧At(x, s2, t) ⇒s1 = s2 .
Given its current location, the agent can infer properties of the square from properties of its
current percept. For example, if the agent is at a square and perceives a breeze, then that
square is breezy:
∀s, t At(Agent, s, t) ∧Breeze(t) ⇒Breezy(s) .
It is useful to know that a square is breezy because we know that the pits cannot move about.
Notice that Breezy has no time argument.
Having discovered which places are breezy (or smelly) and, very important, not breezy
(or not smelly), the agent can deduce where the pits are (and where the wumpus is). Whereas
propositional logic necessitates a separate axiom for each square (see R2 and R3 on page 247)
and would need a different set of axioms for each geographical layout of the world, ﬁrst-order
logic just needs one axiom:
∀s Breezy(s) ⇔∃r Adjacent(r, s) ∧Pit(r) .
(8.4)
Similarly, in ﬁrst-order logic we can quantify over time, so we need just one successor-state
axiom for each predicate, rather than a different copy for each time step. For example, the
axiom for the arrow (Equation (7.2) on page 267) becomes
∀t HaveArrow(t + 1) ⇔(HaveArrow(t) ∧¬Action(Shoot, t)) .
From these two example sentences, we can see that the ﬁrst-order logic formulation is no
less concise than the original English-language description given in Chapter 7. The reader
10 Similarly, most of us do not name each bird that ﬂies overhead as it migrates to warmer regions in winter. An
ornithologist wishing to study migration patterns, survival rates, and so on does name each bird, by means of a
ring on its leg, because individual birds must be tracked.

Section 8.4.
Knowledge Engineering in First-Order Logic

is invited to construct analogous axioms for the agent’s location and orientation; in these
cases, the axioms quantify over both space and time. As in the case of propositional state
estimation, an agent can use logical inference with axioms of this kind to keep track of aspects
of the world that are not directly observed. Chapter 10 goes into more depth on the subject of
ﬁrst-order successor-state axioms and their uses for constructing plans.
8.4
KNOWLEDGE ENGINEERING IN FIRST-ORDER LOGIC
The preceding section illustrated the use of ﬁrst-order logic to represent knowledge in three
simple domains. This section describes the general process of knowledge-base construction—
a process called knowledge engineering. A knowledge engineer is someone who investigates
KNOWLEDGE
ENGINEERING
a particular domain, learns what concepts are important in that domain, and creates a formal
representation of the objects and relations in the domain. We illustrate the knowledge engi-
neering process in an electronic circuit domain that should already be fairly familiar, so that
we can concentrate on the representational issues involved. The approach we take is suitable
for developing special-purpose knowledge bases whose domain is carefully circumscribed
and whose range of queries is known in advance. General-purpose knowledge bases, which
cover a broad range of human knowledge and are intended to support tasks such as natural
language understanding, are discussed in Chapter 12.
8.4.1
The knowledge-engineering process
Knowledge engineering projects vary widely in content, scope, and difﬁculty, but all such
projects include the following steps:
1. Identify the task. The knowledge engineer must delineate the range of questions that
the knowledge base will support and the kinds of facts that will be available for each
speciﬁc problem instance. For example, does the wumpus knowledge base need to be
able to choose actions or is it required to answer questions only about the contents
of the environment? Will the sensor facts include the current location? The task will
determine what knowledge must be represented in order to connect problem instances to
answers. This step is analogous to the PEAS process for designing agents in Chapter 2.
2. Assemble the relevant knowledge. The knowledge engineer might already be an expert
in the domain, or might need to work with real experts to extract what they know—a
process called knowledge acquisition. At this stage, the knowledge is not represented
KNOWLEDGE
ACQUISITION
formally. The idea is to understand the scope of the knowledge base, as determined by
the task, and to understand how the domain actually works.
For the wumpus world, which is deﬁned by an artiﬁcial set of rules, the relevant
knowledge is easy to identify. (Notice, however, that the deﬁnition of adjacency was
not supplied explicitly in the wumpus-world rules.) For real domains, the issue of
relevance can be quite difﬁcult—for example, a system for simulating VLSI designs
might or might not need to take into account stray capacitances and skin effects.

Chapter
8.
First-Order Logic
3. Decide on a vocabulary of predicates, functions, and constants. That is, translate the
important domain-level concepts into logic-level names. This involves many questions
of knowledge-engineering style. Like programming style, this can have a signiﬁcant
impact on the eventual success of the project. For example, should pits be represented
by objects or by a unary predicate on squares? Should the agent’s orientation be a
function or a predicate? Should the wumpus’s location depend on time? Once the
choices have been made, the result is a vocabulary that is known as the ontology of
ONTOLOGY
the domain. The word ontology means a particular theory of the nature of being or
existence. The ontology determines what kinds of things exist, but does not determine
their speciﬁc properties and interrelationships.
4. Encode general knowledge about the domain. The knowledge engineer writes down
the axioms for all the vocabulary terms. This pins down (to the extent possible) the
meaning of the terms, enabling the expert to check the content. Often, this step reveals
misconceptions or gaps in the vocabulary that must be ﬁxed by returning to step 3 and
iterating through the process.
5. Encode a description of the speciﬁc problem instance. If the ontology is well thought
out, this step will be easy. It will involve writing simple atomic sentences about in-
stances of concepts that are already part of the ontology. For a logical agent, problem
instances are supplied by the sensors, whereas a “disembodied” knowledge base is sup-
plied with additional sentences in the same way that traditional programs are supplied
with input data.
6. Pose queries to the inference procedure and get answers. This is where the reward is:
we can let the inference procedure operate on the axioms and problem-speciﬁc facts to
derive the facts we are interested in knowing. Thus, we avoid the need for writing an
application-speciﬁc solution algorithm.
7. Debug the knowledge base. Alas, the answers to queries will seldom be correct on
the ﬁrst try. More precisely, the answers will be correct for the knowledge base as
written, assuming that the inference procedure is sound, but they will not be the ones
that the user is expecting. For example, if an axiom is missing, some queries will not be
answerable from the knowledge base. A considerable debugging process could ensue.
Missing axioms or axioms that are too weak can be easily identiﬁed by noticing places
where the chain of reasoning stops unexpectedly. For example, if the knowledge base
includes a diagnostic rule (see Exercise 8.13) for ﬁnding the wumpus,
∀s Smelly(s) ⇒Adjacent(Home(Wumpus), s) ,
instead of the biconditional, then the agent will never be able to prove the absence of
wumpuses. Incorrect axioms can be identiﬁed because they are false statements about
the world. For example, the sentence
∀x NumOfLegs(x, 4) ⇒Mammal(x)
is false for reptiles, amphibians, and, more importantly, tables. The falsehood of this
sentence can be determined independently of the rest of the knowledge base. In contrast,

Section 8.4.
Knowledge Engineering in First-Order Logic

a typical error in a program looks like this:
offset = position + 1 .
It is impossible to tell whether this statement is correct without looking at the rest of the
program to see whether, for example, offset is used to refer to the current position,
or to one beyond the current position, or whether the value of position is changed
by another statement and so offset should also be changed again.
To understand this seven-step process better, we now apply it to an extended example—the
domain of electronic circuits.
8.4.2
The electronic circuits domain
We will develop an ontology and knowledge base that allow us to reason about digital circuits
of the kind shown in Figure 8.6. We follow the seven-step process for knowledge engineering.
Identify the task
There are many reasoning tasks associated with digital circuits. At the highest level, one
analyzes the circuit’s functionality. For example, does the circuit in Figure 8.6 actually add
properly? If all the inputs are high, what is the output of gate A2? Questions about the
circuit’s structure are also interesting. For example, what are all the gates connected to the
ﬁrst input terminal? Does the circuit contain feedback loops? These will be our tasks in this
section. There are more detailed levels of analysis, including those related to timing delays,
circuit area, power consumption, production cost, and so on. Each of these levels would
require additional knowledge.
Assemble the relevant knowledge
What do we know about digital circuits? For our purposes, they are composed of wires and
gates. Signals ﬂow along wires to the input terminals of gates, and each gate produces a

X1
X2
A1
A2
O1
C1
Figure 8.6
A digital circuit C1, purporting to be a one-bit full adder. The ﬁrst two inputs
are the two bits to be added, and the third input is a carry bit. The ﬁrst output is the sum, and
the second output is a carry bit for the next adder. The circuit contains two XOR gates, two
AND gates, and one OR gate.

Chapter
8.
First-Order Logic
signal on the output terminal that ﬂows along another wire. To determine what these signals
will be, we need to know how the gates transform their input signals. There are four types
of gates: AND, OR, and XOR gates have two input terminals, and NOT gates have one. All
gates have one output terminal. Circuits, like gates, have input and output terminals.
To reason about functionality and connectivity, we do not need to talk about the wires
themselves, the paths they take, or the junctions where they come together. All that matters
is the connections between terminals—we can say that one output terminal is connected to
another input terminal without having to say what actually connects them. Other factors such
as the size, shape, color, or cost of the various components are irrelevant to our analysis.
If our purpose were something other than verifying designs at the gate level, the ontol-
ogy would be different. For example, if we were interested in debugging faulty circuits, then
it would probably be a good idea to include the wires in the ontology, because a faulty wire
can corrupt the signal ﬂowing along it. For resolving timing faults, we would need to include
gate delays. If we were interested in designing a product that would be proﬁtable, then the
cost of the circuit and its speed relative to other products on the market would be important.
Decide on a vocabulary
We now know that we want to talk about circuits, terminals, signals, and gates. The next step
is to choose functions, predicates, and constants to represent them. First, we need to be able
to distinguish gates from each other and from other objects. Each gate is represented as an
object named by a constant, about which we assert that it is a gate with, say, Gate(X1). The
behavior of each gate is determined by its type: one of the constants AND, OR, XOR, or
NOT. Because a gate has exactly one type, a function is appropriate: Type(X1) = XOR.
Circuits, like gates, are identiﬁed by a predicate: Circuit(C1).
Next we consider terminals, which are identiﬁed by the predicate Terminal(x). A gate
or circuit can have one or more input terminals and one or more output terminals. We use the
function In(1, X1) to denote the ﬁrst input terminal for gate X1. A similar function Out is
used for output terminals. The function Arity(c, i, j) says that circuit c has i input and j out-
put terminals. The connectivity between gates can be represented by a predicate, Connected,
which takes two terminals as arguments, as in Connected(Out(1, X1), In(1, X2)).
Finally, we need to know whether a signal is on or off. One possibility is to use a unary
predicate, On(t), which is true when the signal at a terminal is on. This makes it a little
difﬁcult, however, to pose questions such as “What are all the possible values of the signals
at the output terminals of circuit C1 ?” We therefore introduce as objects two signal values, 1
and 0, and a function Signal(t) that denotes the signal value for the terminal t.
Encode general knowledge of the domain
One sign that we have a good ontology is that we require only a few general rules, which can
be stated clearly and concisely. These are all the axioms we will need:
1. If two terminals are connected, then they have the same signal:
∀t1, t2 Terminal(t1) ∧Terminal(t2) ∧Connected(t1, t2) ⇒
Signal(t1) = Signal(t2) .

Section 8.4.
Knowledge Engineering in First-Order Logic

2. The signal at every terminal is either 1 or 0:
∀t Terminal(t) ⇒Signal(t) = 1 ∨Signal(t) = 0 .
3. Connected is commutative:
∀t1, t2 Connected(t1, t2) ⇔Connected(t2, t1) .
4. There are four types of gates:
∀g Gate(g) ∧k = Type(g) ⇒k = AND ∨k = OR ∨k = XOR ∨k = NOT .
5. An AND gate’s output is 0 if and only if any of its inputs is 0:
∀g Gate(g) ∧Type(g) = AND ⇒
Signal(Out(1, g)) = 0 ⇔∃n Signal(In(n, g)) = 0 .
6. An OR gate’s output is 1 if and only if any of its inputs is 1:
∀g Gate(g) ∧Type(g) = OR ⇒
Signal(Out(1, g)) = 1 ⇔∃n Signal(In(n, g)) = 1 .
7. An XOR gate’s output is 1 if and only if its inputs are different:
∀g Gate(g) ∧Type(g) = XOR ⇒
Signal(Out(1, g)) = 1 ⇔Signal(In(1, g))̸ = Signal(In(2, g)) .
8. A NOT gate’s output is different from its input:
∀g Gate(g) ∧(Type(g) = NOT) ⇒
Signal(Out(1, g))̸ = Signal(In(1, g)) .
9. The gates (except for NOT) have two inputs and one output.
∀g Gate(g) ∧Type(g) = NOT ⇒Arity(g, 1, 1) .
∀g Gate(g) ∧k = Type(g) ∧(k = AND ∨k = OR ∨k = XOR) ⇒
Arity(g, 2, 1)
10. A circuit has terminals, up to its input and output arity, and nothing beyond its arity:
∀c, i, j Circuit(c) ∧Arity(c, i, j) ⇒
∀n (n ≤i ⇒Terminal(In(c, n))) ∧(n > i ⇒In(c, n) = Nothing) ∧
∀n (n ≤j ⇒Terminal(Out(c, n))) ∧(n > j ⇒Out(c, n) = Nothing)
11. Gates, terminals, signals, gate types, and Nothing are all distinct.
∀g, t Gate(g) ∧Terminal(t) ⇒
g̸ = t̸ = 1̸ = 0̸ = OR̸ = AND̸ = XOR̸ = NOT̸ = Nothing .
12. Gates are circuits.
∀g Gate(g) ⇒Circuit(g)
Encode the speciﬁc problem instance
The circuit shown in Figure 8.6 is encoded as circuit C1 with the following description. First,
we categorize the circuit and its component gates:
Circuit(C1) ∧Arity(C1, 3, 2)
Gate(X1) ∧Type(X1) = XOR
Gate(X2) ∧Type(X2) = XOR
Gate(A1) ∧Type(A1) = AND
Gate(A2) ∧Type(A2) = AND
Gate(O1) ∧Type(O1) = OR .

Chapter
8.
First-Order Logic
Then, we show the connections between them:
Connected(Out(1, X1), In(1, X2))
Connected(In(1, C1), In(1, X1))
Connected(Out(1, X1), In(2, A2))
Connected(In(1, C1), In(1, A1))
Connected(Out(1, A2), In(1, O1))
Connected(In(2, C1), In(2, X1))
Connected(Out(1, A1), In(2, O1))
Connected(In(2, C1), In(2, A1))
Connected(Out(1, X2), Out(1, C1)) Connected(In(3, C1), In(2, X2))
Connected(Out(1, O1), Out(2, C1)) Connected(In(3, C1), In(1, A2)) .
Pose queries to the inference procedure
What combinations of inputs would cause the ﬁrst output of C1 (the sum bit) to be 0 and the
second output of C1 (the carry bit) to be 1?
∃i1, i2, i3 Signal(In(1, C1)) = i1 ∧Signal(In(2, C1)) = i2 ∧Signal(In(3, C1)) = i3
∧Signal(Out(1, C1)) = 0 ∧Signal(Out(2, C1)) = 1 .
The answers are substitutions for the variables i1, i2, and i3 such that the resulting sentence
is entailed by the knowledge base. ASKVARS will give us three such substitutions:
{i1/1, i2/1, i3/0}
{i1/1, i2/0, i3/1}
{i1/0, i2/1, i3/1} .
What are the possible sets of values of all the terminals for the adder circuit?
∃i1, i2, i3, o1, o2 Signal(In(1, C1)) = i1 ∧Signal(In(2, C1)) = i2
∧Signal(In(3, C1)) = i3 ∧Signal(Out(1, C1)) = o1 ∧Signal(Out(2, C1)) = o2 .
This ﬁnal query will return a complete input–output table for the device, which can be used
to check that it does in fact add its inputs correctly. This is a simple example of circuit
veriﬁcation. We can also use the deﬁnition of the circuit to build larger digital systems, for
CIRCUIT
VERIFICATION
which the same kind of veriﬁcation procedure can be carried out. (See Exercise 8.26.) Many
domains are amenable to the same kind of structured knowledge-base development, in which
more complex concepts are deﬁned on top of simpler concepts.
Debug the knowledge base
We can perturb the knowledge base in various ways to see what kinds of erroneous behaviors
emerge. For example, suppose we fail to read Section 8.2.8 and hence forget to assert that
1̸ = 0. Suddenly, the system will be unable to prove any outputs for the circuit, except for
the input cases 000 and 110. We can pinpoint the problem by asking for the outputs of each
gate. For example, we can ask
∃i1, i2, o Signal(In(1, C1)) = i1 ∧Signal(In(2, C1)) = i2 ∧Signal(Out(1, X1)) ,
which reveals that no outputs are known at X1 for the input cases 10 and 01. Then, we look
at the axiom for XOR gates, as applied to X1:
Signal(Out(1, X1)) = 1 ⇔Signal(In(1, X1))̸ = Signal(In(2, X1)) .
If the inputs are known to be, say, 1 and 0, then this reduces to
Signal(Out(1, X1)) = 1 ⇔1̸ = 0 .
Now the problem is apparent: the system is unable to infer that Signal(Out(1, X1)) = 1, so
we need to tell it that 1̸ = 0.

INFERENCE IN
FIRST-ORDER LOGIC
In which we deﬁne effective procedures for answering questions posed in ﬁrst-
order logic.
Chapter 7 showed how sound and complete inference can be achieved for propositional logic.
In this chapter, we extend those results to obtain algorithms that can answer any answer-
able question stated in ﬁrst-order logic. Section 9.1 introduces inference rules for quantiﬁers
and shows how to reduce ﬁrst-order inference to propositional inference, albeit at potentially
great expense. Section 9.2 describes the idea of uniﬁcation, showing how it can be used
to construct inference rules that work directly with ﬁrst-order sentences. We then discuss
three major families of ﬁrst-order inference algorithms. Forward chaining and its applica-
tions to deductive databases and production systems are covered in Section 9.3; backward
chaining and logic programming systems are developed in Section 9.4. Forward and back-
ward chaining can be very efﬁcient, but are applicable only to knowledge bases that can
be expressed as sets of Horn clauses. General ﬁrst-order sentences require resolution-based
theorem proving, which is described in Section 9.5.
9.1
PROPOSITIONAL VS. FIRST-ORDER INFERENCE
This section and the next introduce the ideas underlying modern logical inference systems.
We begin with some simple inference rules that can be applied to sentences with quantiﬁers
to obtain sentences without quantiﬁers. These rules lead naturally to the idea that ﬁrst-order
inference can be done by converting the knowledge base to propositional logic and using
propositional inference, which we already know how to do. The next section points out an
obvious shortcut, leading to inference methods that manipulate ﬁrst-order sentences directly.
9.1.1
Inference rules for quantiﬁers
Let us begin with universal quantiﬁers. Suppose our knowledge base contains the standard
folkloric axiom stating that all greedy kings are evil:
∀x King(x) ∧Greedy(x) ⇒Evil(x) .

Section 9.1.
Propositional vs. First-Order Inference

Then it seems quite permissible to infer any of the following sentences:
King(John) ∧Greedy(John) ⇒Evil(John)
King(Richard) ∧Greedy(Richard) ⇒Evil(Richard)
King(Father(John)) ∧Greedy(Father(John)) ⇒Evil(Father(John)) .
...
The rule of Universal Instantiation (UI for short) says that we can infer any sentence ob-
UNIVERSAL
INSTANTIATION
tained by substituting a ground term (a term without variables) for the variable.1 To write
GROUND TERM
out the inference rule formally, we use the notion of substitutions introduced in Section 8.3.
Let SUBST(θ, α) denote the result of applying the substitution θ to the sentence α. Then the
rule is written
∀v α
SUBST({v/g}, α)
for any variable v and ground term g. For example, the three sentences given earlier are
obtained with the substitutions {x/John}, {x/Richard}, and {x/Father(John)}.
In the rule for Existential Instantiation, the variable is replaced by a single new con-
EXISTENTIAL
INSTANTIATION
stant symbol. The formal statement is as follows: for any sentence α, variable v, and constant
symbol k that does not appear elsewhere in the knowledge base,
∃v α
SUBST({v/k}, α) .
For example, from the sentence
∃x Crown(x) ∧OnHead(x, John)
we can infer the sentence
Crown(C1) ∧OnHead(C1, John)
as long as C1 does not appear elsewhere in the knowledge base. Basically, the existential
sentence says there is some object satisfying a condition, and applying the existential instan-
tiation rule just gives a name to that object. Of course, that name must not already belong
to another object. Mathematics provides a nice example: suppose we discover that there is a
number that is a little bigger than 2.71828 and that satisﬁes the equation d(xy)/dy = xy for x.
We can give this number a name, such as e, but it would be a mistake to give it the name of
an existing object, such as π. In logic, the new name is called a Skolem constant. Existen-
SKOLEM CONSTANT
tial Instantiation is a special case of a more general process called skolemization, which we
cover in Section 9.5.
Whereas Universal Instantiation can be applied many times to produce many different
consequences, Existential Instantiation can be applied once, and then the existentially quan-
tiﬁed sentence can be discarded. For example, we no longer need ∃x Kill(x, Victim) once
we have added the sentence Kill(Murderer, Victim). Strictly speaking, the new knowledge
base is not logically equivalent to the old, but it can be shown to be inferentially equivalent
INFERENTIAL
EQUIVALENCE
in the sense that it is satisﬁable exactly when the original knowledge base is satisﬁable.
1 Do not confuse these substitutions with the extended interpretations used to deﬁne the semantics of quantiﬁers.
The substitution replaces a variable with a term (a piece of syntax) to produce a new sentence, whereas an
interpretation maps a variable to an object in the domain.

Chapter
9.
Inference in First-Order Logic
9.1.2
Reduction to propositional inference
Once we have rules for inferring nonquantiﬁed sentences from quantiﬁed sentences, it be-
comes possible to reduce ﬁrst-order inference to propositional inference. In this section we
give the main ideas; the details are given in Section 9.5.
The ﬁrst idea is that, just as an existentially quantiﬁed sentence can be replaced by
one instantiation, a universally quantiﬁed sentence can be replaced by the set of all possible
instantiations. For example, suppose our knowledge base contains just the sentences
∀x King(x) ∧Greedy(x) ⇒Evil(x)
King(John)
Greedy(John)
Brother(Richard, John) .
(9.1)
Then we apply UI to the ﬁrst sentence using all possible ground-term substitutions from the
vocabulary of the knowledge base—in this case, {x/John} and {x/Richard}. We obtain
King(John) ∧Greedy(John) ⇒Evil(John)
King(Richard) ∧Greedy(Richard) ⇒Evil(Richard) ,
and we discard the universally quantiﬁed sentence. Now, the knowledge base is essentially
propositional if we view the ground atomic sentences—King(John), Greedy(John), and
so on—as proposition symbols. Therefore, we can apply any of the complete propositional
algorithms in Chapter 7 to obtain conclusions such as Evil(John).
This technique of propositionalization can be made completely general, as we show
in Section 9.5; that is, every ﬁrst-order knowledge base and query can be propositionalized
in such a way that entailment is preserved. Thus, we have a complete decision procedure
for entailment . . . or perhaps not. There is a problem: when the knowledge base includes
a function symbol, the set of possible ground-term substitutions is inﬁnite! For example, if
the knowledge base mentions the Father symbol, then inﬁnitely many nested terms such as
Father(Father(Father(John))) can be constructed. Our propositional algorithms will have
difﬁculty with an inﬁnitely large set of sentences.
Fortunately, there is a famous theorem due to Jacques Herbrand (1930) to the effect
that if a sentence is entailed by the original, ﬁrst-order knowledge base, then there is a proof
involving just a ﬁnite subset of the propositionalized knowledge base. Since any such subset
has a maximum depth of nesting among its ground terms, we can ﬁnd the subset by ﬁrst
generating all the instantiations with constant symbols (Richard and John), then all terms of
depth 1 (Father(Richard) and Father(John)), then all terms of depth 2, and so on, until we
are able to construct a propositional proof of the entailed sentence.
We have sketched an approach to ﬁrst-order inference via propositionalization that is
complete—that is, any entailed sentence can be proved. This is a major achievement, given
that the space of possible models is inﬁnite. On the other hand, we do not know until the
proof is done that the sentence is entailed! What happens when the sentence is not entailed?
Can we tell? Well, for ﬁrst-order logic, it turns out that we cannot. Our proof procedure can
go on and on, generating more and more deeply nested terms, but we will not know whether
it is stuck in a hopeless loop or whether the proof is just about to pop out. This is very much

Section 9.2.
Uniﬁcation and Lifting

like the halting problem for Turing machines. Alan Turing (1936) and Alonzo Church (1936)
both proved, in rather different ways, the inevitability of this state of affairs. The question of
entailment for ﬁrst-order logic is semidecidable—that is, algorithms exist that say yes to every
entailed sentence, but no algorithm exists that also says no to every nonentailed sentence.
9.2
UNIFICATION AND LIFTING
The preceding section described the understanding of ﬁrst-order inference that existed up
to the early 1960s. The sharp-eyed reader (and certainly the computational logicians of the
early 1960s) will have noticed that the propositionalization approach is rather inefﬁcient. For
example, given the query Evil(x) and the knowledge base in Equation (9.1), it seems per-
verse to generate sentences such as King(Richard) ∧Greedy(Richard) ⇒Evil(Richard).
Indeed, the inference of Evil(John) from the sentences
∀x King(x) ∧Greedy(x) ⇒Evil(x)
King(John)
Greedy(John)
seems completely obvious to a human being. We now show how to make it completely
obvious to a computer.
9.2.1
A ﬁrst-order inference rule
The inference that John is evil—that is, that {x/John} solves the query Evil(x)—works like
this: to use the rule that greedy kings are evil, ﬁnd some x such that x is a king and x is
greedy, and then infer that this x is evil. More generally, if there is some substitution θ that
makes each of the conjuncts of the premise of the implication identical to sentences already
in the knowledge base, then we can assert the conclusion of the implication, after applying θ.
In this case, the substitution θ = {x/John} achieves that aim.
We can actually make the inference step do even more work. Suppose that instead of
knowing Greedy(John), we know that everyone is greedy:
∀y Greedy(y) .
(9.2)
Then we would still like to be able to conclude that Evil(John), because we know that
John is a king (given) and John is greedy (because everyone is greedy). What we need for
this to work is to ﬁnd a substitution both for the variables in the implication sentence and
for the variables in the sentences that are in the knowledge base. In this case, applying the
substitution {x/John, y/John} to the implication premises King(x) and Greedy(x) and the
knowledge-base sentences King(John) and Greedy(y) will make them identical. Thus, we
can infer the conclusion of the implication.
This inference process can be captured as a single inference rule that we call Gener-
alized Modus Ponens:2 For atomic sentences pi, pi′, and q, where there is a substitution θ
GENERALIZED
MODUS PONENS

Chapter
9.
Inference in First-Order Logic
such that SUBST(θ, pi′) = SUBST(θ, pi), for all i,
p1′, p2′, . . . , pn′, (p1 ∧p2 ∧. . . ∧pn ⇒q)
SUBST(θ, q)
.
There are n+1 premises to this rule: the n atomic sentences pi′ and the one implication. The
conclusion is the result of applying the substitution θ to the consequent q. For our example:
p1′ is King(John)
p1 is King(x)
p2′ is Greedy(y)
p2 is Greedy(x)
θ is {x/John, y/John}
q is Evil(x)
SUBST(θ, q) is Evil(John) .
It is easy to show that Generalized Modus Ponens is a sound inference rule. First, we observe
that, for any sentence p (whose variables are assumed to be universally quantiﬁed) and for
any substitution θ,
p |= SUBST(θ, p)
holds by Universal Instantiation. It holds in particular for a θ that satisﬁes the conditions of
the Generalized Modus Ponens rule. Thus, from p1′, . . . , pn′ we can infer
SUBST(θ, p1′) ∧. . . ∧SUBST(θ, pn′)
and from the implication p1 ∧. . . ∧pn ⇒q we can infer
SUBST(θ, p1) ∧. . . ∧SUBST(θ, pn) ⇒SUBST(θ, q) .
Now, θ in Generalized Modus Ponens is deﬁned so that SUBST(θ, pi′) = SUBST(θ, pi), for
all i; therefore the ﬁrst of these two sentences matches the premise of the second exactly.
Hence, SUBST(θ, q) follows by Modus Ponens.
Generalized Modus Ponens is a lifted version of Modus Ponens—it raises Modus Po-
LIFTING
nens from ground (variable-free) propositional logic to ﬁrst-order logic. We will see in the
rest of this chapter that we can develop lifted versions of the forward chaining, backward
chaining, and resolution algorithms introduced in Chapter 7. The key advantage of lifted
inference rules over propositionalization is that they make only those substitutions that are
required to allow particular inferences to proceed.
9.2.2
Uniﬁcation
Lifted inference rules require ﬁnding substitutions that make different logical expressions
look identical. This process is called uniﬁcation and is a key component of all ﬁrst-order
UNIFICATION
inference algorithms. The UNIFY algorithm takes two sentences and returns a uniﬁer for
UNIFIER
them if one exists:
UNIFY(p, q) = θ where SUBST(θ, p) = SUBST(θ, q) .
Let us look at some examples of how UNIFY should behave. Suppose we have a query
AskVars(Knows(John, x)): whom does John know? Answers to this query can be found
2 Generalized Modus Ponens is more general than Modus Ponens (page 249) in the sense that the known facts
and the premise of the implication need match only up to a substitution, rather than exactly. On the other hand,
Modus Ponens allows any sentence α as the premise, rather than just a conjunction of atomic sentences.

Section 9.2.
Uniﬁcation and Lifting

by ﬁnding all sentences in the knowledge base that unify with Knows(John, x). Here are the
results of uniﬁcation with four different sentences that might be in the knowledge base:
UNIFY(Knows(John, x), Knows(John, Jane)) = {x/Jane}
UNIFY(Knows(John, x), Knows(y, Bill)) = {x/Bill, y/John}
UNIFY(Knows(John, x), Knows(y, Mother(y))) = {y/John, x/Mother(John)}
UNIFY(Knows(John, x), Knows(x, Elizabeth)) = fail .
The last uniﬁcation fails because x cannot take on the values John and Elizabeth at the
same time. Now, remember that Knows(x, Elizabeth) means “Everyone knows Elizabeth,”
so we should be able to infer that John knows Elizabeth. The problem arises only because
the two sentences happen to use the same variable name, x. The problem can be avoided
by standardizing apart one of the two sentences being uniﬁed, which means renaming its
STANDARDIZING
APART
variables to avoid name clashes. For example, we can rename x in Knows(x, Elizabeth) to
x17 (a new variable name) without changing its meaning. Now the uniﬁcation will work:
UNIFY(Knows(John, x), Knows(x17, Elizabeth)) = {x/Elizabeth, x17/John} .
Exercise 9.12 delves further into the need for standardizing apart.
There is one more complication: we said that UNIFY should return a substitution
that makes the two arguments look the same. But there could be more than one such uni-
ﬁer. For example, UNIFY(Knows(John, x), Knows(y, z)) could return {y/John, x/z} or
{y/John, x/John, z/John}. The ﬁrst uniﬁer gives Knows(John, z) as the result of uniﬁ-
cation, whereas the second gives Knows(John, John). The second result could be obtained
from the ﬁrst by an additional substitution {z/John}; we say that the ﬁrst uniﬁer is more
general than the second, because it places fewer restrictions on the values of the variables. It
turns out that, for every uniﬁable pair of expressions, there is a single most general uniﬁer (or
MOST GENERAL
UNIFIER
MGU) that is unique up to renaming and substitution of variables. (For example, {x/John}
and {y/John} are considered equivalent, as are {x/John, y/John} and {x/John, y/x}.) In
this case it is {y/John, x/z}.
An algorithm for computing most general uniﬁers is shown in Figure 9.1. The process
is simple: recursively explore the two expressions simultaneously “side by side,” building up
a uniﬁer along the way, but failing if two corresponding points in the structures do not match.
There is one expensive step: when matching a variable against a complex term, one must
check whether the variable itself occurs inside the term; if it does, the match fails because no
consistent uniﬁer can be constructed. For example, S(x) can’t unify with S(S(x)). This so-
called occur check makes the complexity of the entire algorithm quadratic in the size of the
OCCUR CHECK
expressions being uniﬁed. Some systems, including all logic programming systems, simply
omit the occur check and sometimes make unsound inferences as a result; other systems use
more complex algorithms with linear-time complexity.
9.2.3
Storage and retrieval
Underlying the TELL and ASK functions used to inform and interrogate a knowledge base
are the more primitive STORE and FETCH functions. STORE(s) stores a sentence s into the
knowledge base and FETCH(q) returns all uniﬁers such that the query q uniﬁes with some

Chapter
9.
Inference in First-Order Logic
function UNIFY(x,y,θ) returns a substitution to make x and y identical
inputs: x, a variable, constant, list, or compound expression
y, a variable, constant, list, or compound expression
θ, the substitution built up so far (optional, defaults to empty)
if θ = failure then return failure
else if x = y then return θ
else if VARIABLE?(x) then return UNIFY-VAR(x,y,θ)
else if VARIABLE?(y) then return UNIFY-VAR(y,x,θ)
else if COMPOUND?(x) and COMPOUND?(y) then
return UNIFY(x.ARGS,y.ARGS, UNIFY(x.OP,y.OP,θ))
else if LIST?(x) and LIST?(y) then
return UNIFY(x.REST,y.REST, UNIFY(x.FIRST,y.FIRST,θ))
else return failure
function UNIFY-VAR(var,x,θ) returns a substitution
if {var/val} ∈θ then return UNIFY(val,x,θ)
else if {x/val} ∈θ then return UNIFY(var,val,θ)
else if OCCUR-CHECK?(var,x) then return failure
else return add {var/x} to θ
Figure 9.1
The uniﬁcation algorithm. The algorithm works by comparing the structures
of the inputs, element by element. The substitution θ that is the argument to UNIFY is built
up along the way and is used to make sure that later comparisons are consistent with bindings
that were established earlier. In a compound expression such as F(A, B), the OP ﬁeld picks
out the function symbol F and the ARGS ﬁeld picks out the argument list (A, B).
sentence in the knowledge base. The problem we used to illustrate uniﬁcation—ﬁnding all
facts that unify with Knows(John, x)—is an instance of FETCHing.
The simplest way to implement STORE and FETCH is to keep all the facts in one long
list and unify each query against every element of the list. Such a process is inefﬁcient, but
it works, and it’s all you need to understand the rest of the chapter. The remainder of this
section outlines ways to make retrieval more efﬁcient; it can be skipped on ﬁrst reading.
We can make FETCH more efﬁcient by ensuring that uniﬁcations are attempted only
with sentences that have some chance of unifying. For example, there is no point in trying
to unify Knows(John, x) with Brother(Richard, John). We can avoid such uniﬁcations by
indexing the facts in the knowledge base. A simple scheme called predicate indexing puts
INDEXING
PREDICATE
INDEXING
all the Knows facts in one bucket and all the Brother facts in another. The buckets can be
stored in a hash table for efﬁcient access.
Predicate indexing is useful when there are many predicate symbols but only a few
clauses for each symbol. Sometimes, however, a predicate has many clauses. For example,
suppose that the tax authorities want to keep track of who employs whom, using a predi-
cate Employs(x, y). This would be a very large bucket with perhaps millions of employers

Section 9.2.
Uniﬁcation and Lifting

Employs(x,y)
Employs(x,Richard)
Employs(IBM,y)
Employs(IBM,Richard)
Employs(x,y)
Employs(John,John)
Employs(x,x)
Employs(x,John)
Employs(John,y)
(a)
(b)
Figure 9.2
(a) The subsumption lattice whose lowest node is Employs(IBM , Richard).
(b) The subsumption lattice for the sentence Employs(John, John).
and tens of millions of employees. Answering a query such as Employs(x, Richard) with
predicate indexing would require scanning the entire bucket.
For this particular query, it would help if facts were indexed both by predicate and by
second argument, perhaps using a combined hash table key. Then we could simply construct
the key from the query and retrieve exactly those facts that unify with the query. For other
queries, such as Employs(IBM , y), we would need to have indexed the facts by combining
the predicate with the ﬁrst argument. Therefore, facts can be stored under multiple index
keys, rendering them instantly accessible to various queries that they might unify with.
Given a sentence to be stored, it is possible to construct indices for all possible queries
that unify with it. For the fact Employs(IBM , Richard), the queries are
Employs(IBM , Richard)
Does IBM employ Richard?
Employs(x, Richard)
Who employs Richard?
Employs(IBM , y)
Whom does IBM employ?
Employs(x, y)
Who employs whom?
These queries form a subsumption lattice, as shown in Figure 9.2(a). The lattice has some
SUBSUMPTION
LATTICE
interesting properties. For example, the child of any node in the lattice is obtained from its
parent by a single substitution; and the “highest” common descendant of any two nodes is
the result of applying their most general uniﬁer. The portion of the lattice above any ground
fact can be constructed systematically (Exercise 9.5). A sentence with repeated constants has
a slightly different lattice, as shown in Figure 9.2(b). Function symbols and variables in the
sentences to be stored introduce still more interesting lattice structures.
The scheme we have described works very well whenever the lattice contains a small
number of nodes. For a predicate with n arguments, however, the lattice contains O(2n)
nodes. If function symbols are allowed, the number of nodes is also exponential in the size
of the terms in the sentence to be stored. This can lead to a huge number of indices. At some
point, the beneﬁts of indexing are outweighed by the costs of storing and maintaining all
the indices. We can respond by adopting a ﬁxed policy, such as maintaining indices only on
keys composed of a predicate plus each argument, or by using an adaptive policy that creates
indices to meet the demands of the kinds of queries being asked. For most AI systems, the
number of facts to be stored is small enough that efﬁcient indexing is considered a solved
problem. For commercial databases, where facts number in the billions, the problem has
been the subject of intensive study and technology development..

Chapter
9.
Inference in First-Order Logic
9.3
FORWARD CHAINING
A forward-chaining algorithm for propositional deﬁnite clauses was given in Section 7.5.
The idea is simple: start with the atomic sentences in the knowledge base and apply Modus
Ponens in the forward direction, adding new atomic sentences, until no further inferences
can be made. Here, we explain how the algorithm is applied to ﬁrst-order deﬁnite clauses.
Deﬁnite clauses such as Situation ⇒Response are especially useful for systems that make
inferences in response to newly arrived information. Many systems can be deﬁned this way,
and forward chaining can be implemented very efﬁciently.
9.3.1
First-order deﬁnite clauses
First-order deﬁnite clauses closely resemble propositional deﬁnite clauses (page 256): they
are disjunctions of literals of which exactly one is positive. A deﬁnite clause either is atomic
or is an implication whose antecedent is a conjunction of positive literals and whose conse-
quent is a single positive literal. The following are ﬁrst-order deﬁnite clauses:
King(x) ∧Greedy(x) ⇒Evil(x) .
King(John) .
Greedy(y) .
Unlike propositional literals, ﬁrst-order literals can include variables, in which case those
variables are assumed to be universally quantiﬁed. (Typically, we omit universal quantiﬁers
when writing deﬁnite clauses.) Not every knowledge base can be converted into a set of
deﬁnite clauses because of the single-positive-literal restriction, but many can. Consider the
following problem:
The law says that it is a crime for an American to sell weapons to hostile nations. The
country Nono, an enemy of America, has some missiles, and all of its missiles were sold
to it by Colonel West, who is American.
We will prove that West is a criminal. First, we will represent these facts as ﬁrst-order deﬁnite
clauses. The next section shows how the forward-chaining algorithm solves the problem.
“. . . it is a crime for an American to sell weapons to hostile nations”:
American(x) ∧Weapon(y) ∧Sells(x, y, z) ∧Hostile(z) ⇒Criminal(x) .
(9.3)
“Nono . . . has some missiles.” The sentence ∃x Owns(Nono, x)∧Missile(x) is transformed
into two deﬁnite clauses by Existential Instantiation, introducing a new constant M1:
Owns(Nono, M1)
(9.4)
Missile(M1)
.
(9.5)
“All of its missiles were sold to it by Colonel West”:
Missile(x) ∧Owns(Nono, x) ⇒Sells(West, x, Nono) .
(9.6)
We will also need to know that missiles are weapons:
Missile(x) ⇒Weapon(x)
(9.7)

Section 9.3.
Forward Chaining

and we must know that an enemy of America counts as “hostile”:
Enemy(x, America) ⇒Hostile(x) .
(9.8)
“West, who is American . . .”:
American(West) .
(9.9)
“The country Nono, an enemy of America . . .”:
Enemy(Nono, America) .
(9.10)
This knowledge base contains no function symbols and is therefore an instance of the class
of Datalog knowledge bases. Datalog is a language that is restricted to ﬁrst-order deﬁnite
DATALOG
clauses with no function symbols. Datalog gets its name because it can represent the type of
statements typically made in relational databases. We will see that the absence of function
symbols makes inference much easier.
9.3.2
A simple forward-chaining algorithm
The ﬁrst forward-chaining algorithm we consider is a simple one, shown in Figure 9.3. Start-
ing from the known facts, it triggers all the rules whose premises are satisﬁed, adding their
conclusions to the known facts. The process repeats until the query is answered (assuming
that just one answer is required) or no new facts are added. Notice that a fact is not “new”
if it is just a renaming of a known fact. One sentence is a renaming of another if they
RENAMING
are identical except for the names of the variables. For example, Likes(x, IceCream) and
Likes(y, IceCream) are renamings of each other because they differ only in the choice of x
or y; their meanings are identical: everyone likes ice cream.
We use our crime problem to illustrate how FOL-FC-ASK works. The implication
sentences are (9.3), (9.6), (9.7), and (9.8). Two iterations are required:
• On the ﬁrst iteration, rule (9.3) has unsatisﬁed premises.
Rule (9.6) is satisﬁed with {x/M1}, and Sells(West, M1, Nono) is added.
Rule (9.7) is satisﬁed with {x/M1}, and Weapon(M1) is added.
Rule (9.8) is satisﬁed with {x/Nono}, and Hostile(Nono) is added.
• On the second iteration, rule (9.3) is satisﬁed with {x/West, y/M1, z/Nono}, and
Criminal(West) is added.
Figure 9.4 shows the proof tree that is generated. Notice that no new inferences are possible
at this point because every sentence that could be concluded by forward chaining is already
contained explicitly in the KB. Such a knowledge base is called a ﬁxed point of the inference
process. Fixed points reached by forward chaining with ﬁrst-order deﬁnite clauses are similar
to those for propositional forward chaining (page 258); the principal difference is that a ﬁrst-
order ﬁxed point can include universally quantiﬁed atomic sentences.
FOL-FC-ASK is easy to analyze. First, it is sound, because every inference is just an
application of Generalized Modus Ponens, which is sound. Second, it is complete for deﬁnite
clause knowledge bases; that is, it answers every query whose answers are entailed by any
knowledge base of deﬁnite clauses. For Datalog knowledge bases, which contain no function
symbols, the proof of completeness is fairly easy. We begin by counting the number of

Chapter
9.
Inference in First-Order Logic
function FOL-FC-ASK(KB,α) returns a substitution or false
inputs: KB, the knowledge base, a set of ﬁrst-order deﬁnite clauses
α, the query, an atomic sentence
local variables: new, the new sentences inferred on each iteration
repeat until new is empty
new ←{ }
for each rule in KB do
(p1 ∧. . . ∧pn ⇒q) ←STANDARDIZE-VARIABLES(rule)
for each θ such that SUBST(θ,p1 ∧. . . ∧pn) = SUBST(θ,p′
1 ∧. . . ∧p′
n)
for some p′
1, . . . , p′
n in KB
q′ ←SUBST(θ,q)
if q′ does not unify with some sentence already in KB or new then
add q′ to new
φ ←UNIFY(q′,α)
if φ is not fail then return φ
add new to KB
return false
Figure 9.3
A conceptually straightforward, but very inefﬁcient, forward-chaining algo-
rithm. On each iteration, it adds to KB all the atomic sentences that can be inferred in one
step from the implication sentences and the atomic sentences already in KB. The function
STANDARDIZE-VARIABLES replaces all variables in its arguments with new ones that have
not been used before.
Hostile(Nono)
Enemy(Nono,America)
Owns(Nono,M1)
Missile(M1)
American(West)
Weapon(M1)
Criminal(West)
Sells(West,M1,Nono)
Figure 9.4
The proof tree generated by forward chaining on the crime example. The initial
facts appear at the bottom level, facts inferred on the ﬁrst iteration in the middle level, and
facts inferred on the second iteration at the top level.
possible facts that can be added, which determines the maximum number of iterations. Let k
be the maximum arity (number of arguments) of any predicate, p be the number of predicates,
and n be the number of constant symbols. Clearly, there can be no more than pnk distinct
ground facts, so after this many iterations the algorithm must have reached a ﬁxed point. Then
we can make an argument very similar to the proof of completeness for propositional forward

Section 9.3.
Forward Chaining

chaining. (See page 258.) The details of how to make the transition from propositional to
ﬁrst-order completeness are given for the resolution algorithm in Section 9.5.
For general deﬁnite clauses with function symbols, FOL-FC-ASK can generate in-
ﬁnitely many new facts, so we need to be more careful. For the case in which an answer to
the query sentence q is entailed, we must appeal to Herbrand’s theorem to establish that the
algorithm will ﬁnd a proof. (See Section 9.5 for the resolution case.) If the query has no
answer, the algorithm could fail to terminate in some cases. For example, if the knowledge
base includes the Peano axioms
NatNum(0)
∀n NatNum(n) ⇒NatNum(S(n)) ,
then forward chaining adds NatNum(S(0)), NatNum(S(S(0))), NatNum(S(S(S(0)))),
and so on. This problem is unavoidable in general. As with general ﬁrst-order logic, entail-
ment with deﬁnite clauses is semidecidable.
9.3.3
Efﬁcient forward chaining
The forward-chaining algorithm in Figure 9.3 is designed for ease of understanding rather
than for efﬁciency of operation. There are three possible sources of inefﬁciency. First, the
“inner loop” of the algorithm involves ﬁnding all possible uniﬁers such that the premise of
a rule uniﬁes with a suitable set of facts in the knowledge base. This is often called pattern
matching and can be very expensive. Second, the algorithm rechecks every rule on every
PATTERN MATCHING
iteration to see whether its premises are satisﬁed, even if very few additions are made to the
knowledge base on each iteration. Finally, the algorithm might generate many facts that are
irrelevant to the goal. We address each of these issues in turn.
Matching rules against known facts
The problem of matching the premise of a rule against the facts in the knowledge base might
seem simple enough. For example, suppose we want to apply the rule
Missile(x) ⇒Weapon(x) .
Then we need to ﬁnd all the facts that unify with Missile(x); in a suitably indexed knowledge
base, this can be done in constant time per fact. Now consider a rule such as
Missile(x) ∧Owns(Nono, x) ⇒Sells(West, x, Nono) .
Again, we can ﬁnd all the objects owned by Nono in constant time per object; then, for each
object, we could check whether it is a missile. If the knowledge base contains many objects
owned by Nono and very few missiles, however, it would be better to ﬁnd all the missiles ﬁrst
and then check whether they are owned by Nono. This is the conjunct ordering problem:
CONJUNCT
ORDERING
ﬁnd an ordering to solve the conjuncts of the rule premise so that the total cost is minimized.
It turns out that ﬁnding the optimal ordering is NP-hard, but good heuristics are available.
For example, the minimum-remaining-values (MRV) heuristic used for CSPs in Chapter 6
would suggest ordering the conjuncts to look for missiles ﬁrst if fewer missiles than objects
are owned by Nono.

Chapter
9.
Inference in First-Order Logic
WA
NT
SA
Q
NSW
V
T
Diﬀ(wa, nt) ∧Diﬀ(wa, sa) ∧
Diﬀ(nt, q) ∧Diﬀ(nt, sa) ∧
Diﬀ(q, nsw) ∧Diﬀ(q, sa) ∧
Diﬀ(nsw, v) ∧Diﬀ(nsw, sa) ∧
Diﬀ(v, sa) ⇒Colorable()
Diﬀ(Red, Blue)
Diﬀ(Red, Green)
Diﬀ(Green, Red) Diﬀ(Green, Blue)
Diﬀ(Blue, Red)
Diﬀ(Blue, Green)
(a)
(b)
Figure 9.5
(a) Constraint graph for coloring the map of Australia. (b) The map-coloring
CSP expressed as a single deﬁnite clause. Each map region is represented as a variable whose
value can be one of the constants Red, Green or Blue.
The connection between pattern matching and constraint satisfaction is actually very
close. We can view each conjunct as a constraint on the variables that it contains—for ex-
ample, Missile(x) is a unary constraint on x. Extending this idea, we can express every
ﬁnite-domain CSP as a single deﬁnite clause together with some associated ground facts.
Consider the map-coloring problem from Figure 6.1, shown again in Figure 9.5(a). An equiv-
alent formulation as a single deﬁnite clause is given in Figure 9.5(b). Clearly, the conclusion
Colorable() can be inferred only if the CSP has a solution. Because CSPs in general include
3-SAT problems as special cases, we can conclude that matching a deﬁnite clause against a
set of facts is NP-hard.
It might seem rather depressing that forward chaining has an NP-hard matching problem
in its inner loop. There are three ways to cheer ourselves up:
• We can remind ourselves that most rules in real-world knowledge bases are small and
simple (like the rules in our crime example) rather than large and complex (like the
CSP formulation in Figure 9.5). It is common in the database world to assume that
both the sizes of rules and the arities of predicates are bounded by a constant and to
worry only about data complexity—that is, the complexity of inference as a function
DATA COMPLEXITY
of the number of ground facts in the knowledge base. It is easy to show that the data
complexity of forward chaining is polynomial.
• We can consider subclasses of rules for which matching is efﬁcient. Essentially every
Datalog clause can be viewed as deﬁning a CSP, so matching will be tractable just
when the corresponding CSP is tractable. Chapter 6 describes several tractable families
of CSPs. For example, if the constraint graph (the graph whose nodes are variables
and whose links are constraints) forms a tree, then the CSP can be solved in linear
time. Exactly the same result holds for rule matching. For instance, if we remove South

Section 9.3.
Forward Chaining

Australia from the map in Figure 9.5, the resulting clause is
Diﬀ(wa, nt) ∧Diﬀ(nt, q) ∧Diﬀ(q, nsw) ∧Diﬀ(nsw, v) ⇒Colorable()
which corresponds to the reduced CSP shown in Figure 6.12 on page 224. Algorithms
for solving tree-structured CSPs can be applied directly to the problem of rule matching.
• We can try to to eliminate redundant rule-matching attempts in the forward-chaining
algorithm, as described next.
Incremental forward chaining
When we showed how forward chaining works on the crime example, we cheated; in partic-
ular, we omitted some of the rule matching done by the algorithm shown in Figure 9.3. For
example, on the second iteration, the rule
Missile(x) ⇒Weapon(x)
matches against Missile(M1) (again), and of course the conclusion Weapon(M1) is already
known so nothing happens. Such redundant rule matching can be avoided if we make the
following observation: Every new fact inferred on iteration t must be derived from at least
one new fact inferred on iteration t −1.
This is true because any inference that does not
require a new fact from iteration t −1 could have been done at iteration t −1 already.
This observation leads naturally to an incremental forward-chaining algorithm where,
at iteration t, we check a rule only if its premise includes a conjunct pi that uniﬁes with a fact
p′
i newly inferred at iteration t −1. The rule-matching step then ﬁxes pi to match with p′
i, but
allows the other conjuncts of the rule to match with facts from any previous iteration. This
algorithm generates exactly the same facts at each iteration as the algorithm in Figure 9.3, but
is much more efﬁcient.
With suitable indexing, it is easy to identify all the rules that can be triggered by any
given fact, and indeed many real systems operate in an “update” mode wherein forward chain-
ing occurs in response to each new fact that is TELLed to the system. Inferences cascade
through the set of rules until the ﬁxed point is reached, and then the process begins again for
the next new fact.
Typically, only a small fraction of the rules in the knowledge base are actually triggered
by the addition of a given fact. This means that a great deal of redundant work is done in
repeatedly constructing partial matches that have some unsatisﬁed premises. Our crime ex-
ample is rather too small to show this effectively, but notice that a partial match is constructed
on the ﬁrst iteration between the rule
American(x) ∧Weapon(y) ∧Sells(x, y, z) ∧Hostile(z) ⇒Criminal(x)
and the fact American(West). This partial match is then discarded and rebuilt on the second
iteration (when the rule succeeds). It would be better to retain and gradually complete the
partial matches as new facts arrive, rather than discarding them.
The rete algorithm3 was the ﬁrst to address this problem. The algorithm preprocesses
RETE
the set of rules in the knowledge base to construct a sort of dataﬂow network in which each
3 Rete is Latin for net. The English pronunciation rhymes with treaty.

Chapter
9.
Inference in First-Order Logic
node is a literal from a rule premise. Variable bindings ﬂow through the network and are
ﬁltered out when they fail to match a literal. If two literals in a rule share a variable—for
example, Sells(x, y, z) ∧Hostile(z) in the crime example—then the bindings from each
literal are ﬁltered through an equality node. A variable binding reaching a node for an n-
ary literal such as Sells(x, y, z) might have to wait for bindings for the other variables to be
established before the process can continue. At any given point, the state of a rete network
captures all the partial matches of the rules, avoiding a great deal of recomputation.
Rete networks, and various improvements thereon, have been a key component of so-
called production systems, which were among the earliest forward-chaining systems in
PRODUCTION
SYSTEM
widespread use.4 The XCON system (originally called R1; McDermott, 1982) was built
with a production-system architecture. XCON contained several thousand rules for designing
conﬁgurations of computer components for customers of the Digital Equipment Corporation.
It was one of the ﬁrst clear commercial successes in the emerging ﬁeld of expert systems.
Many other similar systems have been built with the same underlying technology, which has
been implemented in the general-purpose language OPS-5.
Production systems are also popular in cognitive architectures—that is, models of hu-
COGNITIVE
ARCHITECTURES
man reasoning—such as ACT (Anderson, 1983) and SOAR (Laird et al., 1987). In such sys-
tems, the “working memory” of the system models human short-term memory, and the pro-
ductions are part of long-term memory. On each cycle of operation, productions are matched
against the working memory of facts. A production whose conditions are satisﬁed can add or
delete facts in working memory. In contrast to the typical situation in databases, production
systems often have many rules and relatively few facts. With suitably optimized matching
technology, some modern systems can operate in real time with tens of millions of rules.
Irrelevant facts
The ﬁnal source of inefﬁciency in forward chaining appears to be intrinsic to the approach
and also arises in the propositional context. Forward chaining makes all allowable inferences
based on the known facts, even if they are irrelevant to the goal at hand. In our crime example,
there were no rules capable of drawing irrelevant conclusions, so the lack of directedness was
not a problem. In other cases (e.g., if many rules describe the eating habits of Americans and
the prices of missiles), FOL-FC-ASK will generate many irrelevant conclusions.
One way to avoid drawing irrelevant conclusions is to use backward chaining, as de-
scribed in Section 9.4. Another solution is to restrict forward chaining to a selected subset of
rules, as in PL-FC-ENTAILS? (page 258). A third approach has emerged in the ﬁeld of de-
ductive databases, which are large-scale databases, like relational databases, but which use
DEDUCTIVE
DATABASES
forward chaining as the standard inference tool rather than SQL queries. The idea is to rewrite
the rule set, using information from the goal, so that only relevant variable bindings—those
belonging to a so-called magic set—are considered during forward inference. For example, if
MAGIC SET
the goal is Criminal(West), the rule that concludes Criminal(x) will be rewritten to include
an extra conjunct that constrains the value of x:
Magic(x) ∧American(x) ∧Weapon(y) ∧Sells(x, y, z) ∧Hostile(z) ⇒Criminal(x) .
4 The word production in production systems denotes a condition–action rule.

Section 9.4.
Backward Chaining

The fact Magic(West) is also added to the KB. In this way, even if the knowledge base
contains facts about millions of Americans, only Colonel West will be considered during the
forward inference process. The complete process for deﬁning magic sets and rewriting the
knowledge base is too complex to go into here, but the basic idea is to perform a sort of
“generic” backward inference from the goal in order to work out which variable bindings
need to be constrained. The magic sets approach can therefore be thought of as a kind of
hybrid between forward inference and backward preprocessing.
9.4
BACKWARD CHAINING
The second major family of logical inference algorithms uses the backward chaining ap-
proach introduced in Section 7.5 for deﬁnite clauses. These algorithms work backward from
the goal, chaining through rules to ﬁnd known facts that support the proof. We describe
the basic algorithm, and then we describe how it is used in logic programming, which is the
most widely used form of automated reasoning. We also see that backward chaining has some
disadvantages compared with forward chaining, and we look at ways to overcome them. Fi-
nally, we look at the close connection between logic programming and constraint satisfaction
problems.
9.4.1
A backward-chaining algorithm
Figure 9.6 shows a backward-chaining algorithm for deﬁnite clauses. FOL-BC-ASK(KB,
goal) will be proved if the knowledge base contains a clause of the form lhs ⇒goal, where
lhs (left-hand side) is a list of conjuncts. An atomic fact like American(West) is considered
as a clause whose lhs is the empty list. Now a query that contains variables might be proved
in multiple ways. For example, the query Person(x) could be proved with the substitution
{x/John} as well as with {x/Richard}. So we implement FOL-BC-ASK as a generator—
GENERATOR
a function that returns multiple times, each time giving one possible result.
Backward chaining is a kind of AND/OR search—the OR part because the goal query
can be proved by any rule in the knowledge base, and the AND part because all the conjuncts
in the lhs of a clause must be proved. FOL-BC-OR works by fetching all clauses that might
unify with the goal, standardizing the variables in the clause to be brand-new variables, and
then, if the rhs of the clause does indeed unify with the goal, proving every conjunct in the
lhs, using FOL-BC-AND. That function in turn works by proving each of the conjuncts in
turn, keeping track of the accumulated substitution as we go. Figure 9.7 is the proof tree for
deriving Criminal(West) from sentences (9.3) through (9.10).
Backward chaining, as we have written it, is clearly a depth-ﬁrst search algorithm.
This means that its space requirements are linear in the size of the proof (neglecting, for
now, the space required to accumulate the solutions). It also means that backward chaining
(unlike forward chaining) suffers from problems with repeated states and incompleteness. We
will discuss these problems and some potential solutions, but ﬁrst we show how backward
chaining is used in logic programming systems.

---

## Module 5 Textbook

Section 9.4.
Backward Chaining

The fact Magic(West) is also added to the KB. In this way, even if the knowledge base
contains facts about millions of Americans, only Colonel West will be considered during the
forward inference process. The complete process for deﬁning magic sets and rewriting the
knowledge base is too complex to go into here, but the basic idea is to perform a sort of
“generic” backward inference from the goal in order to work out which variable bindings
need to be constrained. The magic sets approach can therefore be thought of as a kind of
hybrid between forward inference and backward preprocessing.
9.4
BACKWARD CHAINING
The second major family of logical inference algorithms uses the backward chaining ap-
proach introduced in Section 7.5 for deﬁnite clauses. These algorithms work backward from
the goal, chaining through rules to ﬁnd known facts that support the proof. We describe
the basic algorithm, and then we describe how it is used in logic programming, which is the
most widely used form of automated reasoning. We also see that backward chaining has some
disadvantages compared with forward chaining, and we look at ways to overcome them. Fi-
nally, we look at the close connection between logic programming and constraint satisfaction
problems.
9.4.1
A backward-chaining algorithm
Figure 9.6 shows a backward-chaining algorithm for deﬁnite clauses. FOL-BC-ASK(KB,
goal) will be proved if the knowledge base contains a clause of the form lhs ⇒goal, where
lhs (left-hand side) is a list of conjuncts. An atomic fact like American(West) is considered
as a clause whose lhs is the empty list. Now a query that contains variables might be proved
in multiple ways. For example, the query Person(x) could be proved with the substitution
{x/John} as well as with {x/Richard}. So we implement FOL-BC-ASK as a generator—
GENERATOR
a function that returns multiple times, each time giving one possible result.
Backward chaining is a kind of AND/OR search—the OR part because the goal query
can be proved by any rule in the knowledge base, and the AND part because all the conjuncts
in the lhs of a clause must be proved. FOL-BC-OR works by fetching all clauses that might
unify with the goal, standardizing the variables in the clause to be brand-new variables, and
then, if the rhs of the clause does indeed unify with the goal, proving every conjunct in the
lhs, using FOL-BC-AND. That function in turn works by proving each of the conjuncts in
turn, keeping track of the accumulated substitution as we go. Figure 9.7 is the proof tree for
deriving Criminal(West) from sentences (9.3) through (9.10).
Backward chaining, as we have written it, is clearly a depth-ﬁrst search algorithm.
This means that its space requirements are linear in the size of the proof (neglecting, for
now, the space required to accumulate the solutions). It also means that backward chaining
(unlike forward chaining) suffers from problems with repeated states and incompleteness. We
will discuss these problems and some potential solutions, but ﬁrst we show how backward
chaining is used in logic programming systems.
MODULE 5

Chapter
9.
Inference in First-Order Logic
function FOL-BC-ASK(KB,query) returns a generator of substitutions
return FOL-BC-OR(KB,query,{ })
generator FOL-BC-OR(KB,goal,θ) yields a substitution
for each rule (lhs ⇒rhs) in FETCH-RULES-FOR-GOAL(KB, goal) do
(lhs, rhs) ←STANDARDIZE-VARIABLES((lhs, rhs))
for each θ′ in FOL-BC-AND(KB,lhs, UNIFY(rhs, goal, θ)) do
yield θ′
generator FOL-BC-AND(KB,goals,θ) yields a substitution
if θ = failure then return
else if LENGTH(goals) = 0 then yield θ
else do
ﬁrst,rest ←FIRST(goals), REST(goals)
for each θ′ in FOL-BC-OR(KB, SUBST(θ, ﬁrst), θ) do
for each θ′′ in FOL-BC-AND(KB,rest,θ′) do
yield θ′′
Figure 9.6
A simple backward-chaining algorithm for ﬁrst-order knowledge bases.
Hostile(Nono)
Enemy(Nono,America)
Owns(Nono,M1)
Missile(M1)
Criminal(West)
Missile(y)
Weapon(y)
Sells(West,M1,z)
American(West)
{y/M1}
{ }
{ }
{ }
 {z/Nono}
{ }
Figure 9.7
Proof tree constructed by backward chaining to prove that West is a criminal.
The tree should be read depth ﬁrst, left to right. To prove Criminal(West), we have to prove
the four conjuncts below it. Some of these are in the knowledge base, and others require
further backward chaining. Bindings for each successful uniﬁcation are shown next to the
corresponding subgoal. Note that once one subgoal in a conjunction succeeds, its substitution
is applied to subsequent subgoals. Thus, by the time FOL-BC-ASK gets to the last conjunct,
originally Hostile(z), z is already bound to Nono.

Section 9.4.
Backward Chaining

9.4.2
Logic programming
Logic programming is a technology that comes fairly close to embodying the declarative
ideal described in Chapter 7: that systems should be constructed by expressing knowledge in
a formal language and that problems should be solved by running inference processes on that
knowledge. The ideal is summed up in Robert Kowalski’s equation,
Algorithm = Logic + Control .
Prolog is the most widely used logic programming language. It is used primarily as a rapid-
PROLOG
prototyping language and for symbol-manipulation tasks such as writing compilers (Van Roy,
1990) and parsing natural language (Pereira and Warren, 1980). Many expert systems have
been written in Prolog for legal, medical, ﬁnancial, and other domains.
Prolog programs are sets of deﬁnite clauses written in a notation somewhat different
from standard ﬁrst-order logic. Prolog uses uppercase letters for variables and lowercase for
constants—the opposite of our convention for logic. Commas separate conjuncts in a clause,
and the clause is written “backwards” from what we are used to; instead of A ∧B ⇒C in
Prolog we have C :- A, B. Here is a typical example:
criminal(X) :- american(X), weapon(Y), sells(X,Y,Z), hostile(Z).
The notation [E|L] denotes a list whose ﬁrst element is E and whose rest is L. Here is a
Prolog program for append(X,Y,Z), which succeeds if list Z is the result of appending
lists X and Y:
append([],Y,Y).
append([A|X],Y,[A|Z]) :- append(X,Y,Z).
In English, we can read these clauses as (1) appending an empty list with a list Y produces
the same list Y and (2) [A|Z] is the result of appending [A|X] onto Y, provided that Z is
the result of appending X onto Y. In most high-level languages we can write a similar recur-
sive function that describes how to append two lists. The Prolog deﬁnition is actually much
more powerful, however, because it describes a relation that holds among three arguments,
rather than a function computed from two arguments. For example, we can ask the query
append(X,Y,[1,2]): what two lists can be appended to give [1,2]? We get back the
solutions
X=[]
Y=[1,2];
X=[1]
Y=[2];
X=[1,2] Y=[]
The execution of Prolog programs is done through depth-ﬁrst backward chaining, where
clauses are tried in the order in which they are written in the knowledge base. Some aspects
of Prolog fall outside standard logical inference:
• Prolog uses the database semantics of Section 8.2.8 rather than ﬁrst-order semantics,
and this is apparent in its treatment of equality and negation (see Section 9.4.5).
• There is a set of built-in functions for arithmetic. Literals using these function symbols
are “proved” by executing code rather than doing further inference. For example, the

Chapter
9.
Inference in First-Order Logic
goal “X is 4+3” succeeds with X bound to 7. On the other hand, the goal “5 is X+Y”
fails, because the built-in functions do not do arbitrary equation solving.5
• There are built-in predicates that have side effects when executed. These include input–
output predicates and the assert/retract predicates for modifying the knowledge
base. Such predicates have no counterpart in logic and can produce confusing results—
for example, if facts are asserted in a branch of the proof tree that eventually fails.
• The occur check is omitted from Prolog’s uniﬁcation algorithm. This means that some
unsound inferences can be made; these are almost never a problem in practice.
• Prolog uses depth-ﬁrst backward-chaining search with no checks for inﬁnite recursion.
This makes it very fast when given the right set of axioms, but incomplete when given
the wrong ones.
Prolog’s design represents a compromise between declarativeness and execution efﬁciency—
inasmuch as efﬁciency was understood at the time Prolog was designed.
9.4.3
Efﬁcient implementation of logic programs
The execution of a Prolog program can happen in two modes: interpreted and compiled.
Interpretation essentially amounts to running the FOL-BC-ASK algorithm from Figure 9.6,
with the program as the knowledge base. We say “essentially” because Prolog interpreters
contain a variety of improvements designed to maximize speed. Here we consider only two.
First, our implementation had to explicitly manage the iteration over possible results
generated by each of the subfunctions.
Prolog interpreters have a global data structure,
a stack of choice points, to keep track of the multiple possibilities that we considered in
CHOICE POINT
FOL-BC-OR. This global stack is more efﬁcient, and it makes debugging easier, because
the debugger can move up and down the stack.
Second, our simple implementation of FOL-BC-ASK spends a good deal of time gener-
ating substitutions. Instead of explicitly constructing substitutions, Prolog has logic variables
that remember their current binding. At any point in time, every variable in the program ei-
ther is unbound or is bound to some value. Together, these variables and values implicitly
deﬁne the substitution for the current branch of the proof. Extending the path can only add
new variable bindings, because an attempt to add a different binding for an already bound
variable results in a failure of uniﬁcation. When a path in the search fails, Prolog will back
up to a previous choice point, and then it might have to unbind some variables. This is done
by keeping track of all the variables that have been bound in a stack called the trail. As each
TRAIL
new variable is bound by UNIFY-VAR, the variable is pushed onto the trail. When a goal fails
and it is time to back up to a previous choice point, each of the variables is unbound as it is
removed from the trail.
Even the most efﬁcient Prolog interpreters require several thousand machine instruc-
tions per inference step because of the cost of index lookup, uniﬁcation, and building the
recursive call stack. In effect, the interpreter always behaves as if it has never seen the pro-
gram before; for example, it has to ﬁnd clauses that match the goal. A compiled Prolog
5 Note that if the Peano axioms are provided, such goals can be solved by inference within a Prolog program.

Section 9.4.
Backward Chaining

procedure APPEND(ax,y,az,continuation)
trail ←GLOBAL-TRAIL-POINTER()
if ax = [ ] and UNIFY(y,az) then CALL(continuation)
RESET-TRAIL(trail)
a, x, z ←NEW-VARIABLE(), NEW-VARIABLE(), NEW-VARIABLE()
if UNIFY(ax,[a | x]) and UNIFY(az,[a | z]) then APPEND(x,y,z,continuation)
Figure 9.8
Pseudocode representing the result of compiling the Append predicate. The
function NEW-VARIABLE returns a new variable, distinct from all other variables used so far.
The procedure CALL(continuation) continues execution with the speciﬁed continuation.
program, on the other hand, is an inference procedure for a speciﬁc set of clauses, so it knows
what clauses match the goal. Prolog basically generates a miniature theorem prover for each
different predicate, thereby eliminating much of the overhead of interpretation. It is also pos-
sible to open-code the uniﬁcation routine for each different call, thereby avoiding explicit
OPEN-CODE
analysis of term structure. (For details of open-coded uniﬁcation, see Warren et al. (1977).)
The instruction sets of today’s computers give a poor match with Prolog’s semantics,
so most Prolog compilers compile into an intermediate language rather than directly into ma-
chine language. The most popular intermediate language is the Warren Abstract Machine,
or WAM, named after David H. D. Warren, one of the implementers of the ﬁrst Prolog com-
piler. The WAM is an abstract instruction set that is suitable for Prolog and can be either
interpreted or translated into machine language. Other compilers translate Prolog into a high-
level language such as Lisp or C and then use that language’s compiler to translate to machine
language. For example, the deﬁnition of the Append predicate can be compiled into the code
shown in Figure 9.8. Several points are worth mentioning:
• Rather than having to search the knowledge base for Append clauses, the clauses be-
come a procedure and the inferences are carried out simply by calling the procedure.
• As described earlier, the current variable bindings are kept on a trail. The ﬁrst step of the
procedure saves the current state of the trail, so that it can be restored by RESET-TRAIL
if the ﬁrst clause fails. This will undo any bindings generated by the ﬁrst call to UNIFY.
• The trickiest part is the use of continuations to implement choice points. You can think
CONTINUATION
of a continuation as packaging up a procedure and a list of arguments that together
deﬁne what should be done next whenever the current goal succeeds. It would not
do just to return from a procedure like APPEND when the goal succeeds, because it
could succeed in several ways, and each of them has to be explored. The continuation
argument solves this problem because it can be called each time the goal succeeds. In
the APPEND code, if the ﬁrst argument is empty and the second argument uniﬁes with
the third, then the APPEND predicate has succeeded. We then CALL the continuation,
with the appropriate bindings on the trail, to do whatever should be done next. For
example, if the call to APPEND were at the top level, the continuation would print the
bindings of the variables.

Chapter
9.
Inference in First-Order Logic
Before Warren’s work on the compilation of inference in Prolog, logic programming was
too slow for general use. Compilers by Warren and others allowed Prolog code to achieve
speeds that are competitive with C on a variety of standard benchmarks (Van Roy, 1990).
Of course, the fact that one can write a planner or natural language parser in a few dozen
lines of Prolog makes it somewhat more desirable than C for prototyping most small-scale AI
research projects.
Parallelization can also provide substantial speedup. There are two principal sources of
parallelism. The ﬁrst, called OR-parallelism, comes from the possibility of a goal unifying
OR-PARALLELISM
with many different clauses in the knowledge base. Each gives rise to an independent branch
in the search space that can lead to a potential solution, and all such branches can be solved
in parallel. The second, called AND-parallelism, comes from the possibility of solving
AND-PARALLELISM
each conjunct in the body of an implication in parallel. AND-parallelism is more difﬁcult to
achieve, because solutions for the whole conjunction require consistent bindings for all the
variables. Each conjunctive branch must communicate with the other branches to ensure a
global solution.
9.4.4
Redundant inference and inﬁnite loops
We now turn to the Achilles heel of Prolog: the mismatch between depth-ﬁrst search and
search trees that include repeated states and inﬁnite paths. Consider the following logic pro-
gram that decides if a path exists between two points on a directed graph:
path(X,Z) :- link(X,Z).
path(X,Z) :- path(X,Y), link(Y,Z).
A simple three-node graph, described by the facts link(a,b) and link(b,c), is shown
in Figure 9.9(a). With this program, the query path(a,c) generates the proof tree shown
in Figure 9.10(a). On the other hand, if we put the two clauses in the order
path(X,Z) :- path(X,Y), link(Y,Z).
path(X,Z) :- link(X,Z).
then Prolog follows the inﬁnite path shown in Figure 9.10(b). Prolog is therefore incomplete
as a theorem prover for deﬁnite clauses—even for Datalog programs, as this example shows—
because, for some knowledge bases, it fails to prove sentences that are entailed. Notice that
forward chaining does not suffer from this problem: once path(a,b), path(b,c), and
path(a,c) are inferred, forward chaining halts.
Depth-ﬁrst backward chaining also has problems with redundant computations. For
example, when ﬁnding a path from A1 to J4 in Figure 9.9(b), Prolog performs 877 inferences,
most of which involve ﬁnding all possible paths to nodes from which the goal is unreachable.
This is similar to the repeated-state problem discussed in Chapter 3. The total amount of
inference can be exponential in the number of ground facts that are generated. If we apply
forward chaining instead, at most n2 path(X,Y) facts can be generated linking n nodes.
For the problem in Figure 9.9(b), only 62 inferences are needed.
Forward chaining on graph search problems is an example of dynamic programming,
DYNAMIC
PROGRAMMING
in which the solutions to subproblems are constructed incrementally from those of smaller

Section 9.4.
Backward Chaining

(a)
(b)
A
B
C
A1
J4
Figure 9.9
(a) Finding a path from A to C can lead Prolog into an inﬁnite loop. (b) A
graph in which each node is connected to two random successors in the next layer. Finding a
path from A1 to J4 requires 877 inferences.
path(a,c)
fail
{
}
/
Y b
{ }
link(a,c)
path(a,Y)
link(a,Y)
link(b,c)
path(a,c)
path(a,Y)
link(Y,c)
path(a,Y’)
link(Y’,Y)
(a)
(b)
Figure 9.10
(a) Proof that a path exists from A to C. (b) Inﬁnite proof tree generated
when the clauses are in the “wrong” order.
subproblems and are cached to avoid recomputation. We can obtain a similar effect in a
backward chaining system using memoization—that is, caching solutions to subgoals as
they are found and then reusing those solutions when the subgoal recurs, rather than repeat-
ing the previous computation. This is the approach taken by tabled logic programming sys-
TABLED LOGIC
PROGRAMMING
tems, which use efﬁcient storage and retrieval mechanisms to perform memoization. Tabled
logic programming combines the goal-directedness of backward chaining with the dynamic-
programming efﬁciency of forward chaining. It is also complete for Datalog knowledge
bases, which means that the programmer need worry less about inﬁnite loops. (It is still pos-
sible to get an inﬁnite loop with predicates like father(X,Y) that refer to a potentially
unbounded number of objects.)
9.4.5
Database semantics of Prolog
Prolog uses database semantics, as discussed in Section 8.2.8. The unique names assumption
says that every Prolog constant and every ground term refers to a distinct object, and the
closed world assumption says that the only sentences that are true are those that are entailed

Chapter
9.
Inference in First-Order Logic
by the knowledge base. There is no way to assert that a sentence is false in Prolog. This makes
Prolog less expressive than ﬁrst-order logic, but it is part of what makes Prolog more efﬁcient
and more concise. Consider the following Prolog assertions about some course offerings:
Course(CS, 101), Course(CS, 102), Course(CS, 106), Course(EE, 101). (9.11)
Under the unique names assumption, CS and EE are different (as are 101, 102, and 106),
so this means that there are four distinct courses. Under the closed-world assumption there
are no other courses, so there are exactly four courses. But if these were assertions in FOL
rather than in Prolog, then all we could say is that there are somewhere between one and
inﬁnity courses. That’s because the assertions (in FOL) do not deny the possibility that other
unmentioned courses are also offered, nor do they say that the courses mentioned are different
from each other. If we wanted to translate Equation (9.11) into FOL, we would get this:
Course(d, n)
⇔
(d = CS ∧n = 101) ∨(d = CS ∧n = 102)
∨(d = CS ∧n = 106) ∨(d = EE ∧n = 101) .
(9.12)
This is called the completion of Equation (9.11). It expresses in FOL the idea that there are
COMPLETION
at most four courses. To express in FOL the idea that there are at least four courses, we need
to write the completion of the equality predicate:
x = y
⇔
(x = CS ∧y = CS) ∨(x = EE ∧y = EE) ∨(x = 101 ∧y = 101)
∨(x = 102 ∧y = 102) ∨(x = 106 ∧y = 106) .
The completion is useful for understanding database semantics, but for practical purposes, if
your problem can be described with database semantics, it is more efﬁcient to reason with
Prolog or some other database semantics system, rather than translating into FOL and rea-
soning with a full FOL theorem prover.
9.4.6
Constraint logic programming
In our discussion of forward chaining (Section 9.3), we showed how constraint satisfaction
problems (CSPs) can be encoded as deﬁnite clauses. Standard Prolog solves such problems
in exactly the same way as the backtracking algorithm given in Figure 6.5.
Because backtracking enumerates the domains of the variables, it works only for ﬁnite-
domain CSPs. In Prolog terms, there must be a ﬁnite number of solutions for any goal
with unbound variables. (For example, the goal diff(Q,SA), which says that Queensland
and South Australia must be different colors, has six solutions if three colors are allowed.)
Inﬁnite-domain CSPs—for example, with integer or real-valued variables—require quite dif-
ferent algorithms, such as bounds propagation or linear programming.
Consider the following example. We deﬁne triangle(X,Y,Z) as a predicate that
holds if the three arguments are numbers that satisfy the triangle inequality:
triangle(X,Y,Z) :-
X>0, Y>0, Z>0, X+Y>=Z, Y+Z>=X, X+Z>=Y.
If we ask Prolog the query triangle(3,4,5), it succeeds. On the other hand, if we
ask triangle(3,4,Z), no solution will be found, because the subgoal Z>=0 cannot be
handled by Prolog; we can’t compare an unbound value to 0.

Section 9.5.
Resolution

Constraint logic programming (CLP) allows variables to be constrained rather than
CONSTRAINT LOGIC
PROGRAMMING
bound. A CLP solution is the most speciﬁc set of constraints on the query variables that can
be derived from the knowledge base. For example, the solution to the triangle(3,4,Z)
query is the constraint 7 >= Z >= 1. Standard logic programs are just a special case of
CLP in which the solution constraints must be equality constraints—that is, bindings.
CLP systems incorporate various constraint-solving algorithms for the constraints al-
lowed in the language. For example, a system that allows linear inequalities on real-valued
variables might include a linear programming algorithm for solving those constraints. CLP
systems also adopt a much more ﬂexible approach to solving standard logic programming
queries. For example, instead of depth-ﬁrst, left-to-right backtracking, they might use any of
the more efﬁcient algorithms discussed in Chapter 6, including heuristic conjunct ordering,
backjumping, cutset conditioning, and so on. CLP systems therefore combine elements of
constraint satisfaction algorithms, logic programming, and deductive databases.
Several systems that allow the programmer more control over the search order for in-
ference have been deﬁned. The MRS language (Genesereth and Smith, 1981; Russell, 1985)
allows the programmer to write metarules to determine which conjuncts are tried ﬁrst. The
METARULE
user could write a rule saying that the goal with the fewest variables should be tried ﬁrst or
could write domain-speciﬁc rules for particular predicates.
9.5
RESOLUTION
The last of our three families of logical systems is based on resolution. We saw on page 250
that propositional resolution using refutation is a complete inference procedure for proposi-
tional logic. In this section, we describe how to extend resolution to ﬁrst-order logic.
9.5.1
Conjunctive normal form for ﬁrst-order logic
As in the propositional case, ﬁrst-order resolution requires that sentences be in conjunctive
normal form (CNF)—that is, a conjunction of clauses, where each clause is a disjunction of
literals.6 Literals can contain variables, which are assumed to be universally quantiﬁed. For
example, the sentence
∀x American(x) ∧Weapon(y) ∧Sells(x, y, z) ∧Hostile(z) ⇒Criminal(x)
becomes, in CNF,
¬American(x) ∨¬Weapon(y) ∨¬Sells(x, y, z) ∨¬Hostile(z) ∨Criminal(x) .
Every sentence of ﬁrst-order logic can be converted into an inferentially equivalent CNF
sentence. In particular, the CNF sentence will be unsatisﬁable just when the original sentence
is unsatisﬁable, so we have a basis for doing proofs by contradiction on the CNF sentences.
6 A clause can also be represented as an implication with a conjunction of atoms in the premise and a disjunction
of atoms in the conclusion (Exercise 7.13). This is called implicative normal form or Kowalski form (especially
when written with a right-to-left implication symbol (Kowalski, 1979)) and is often much easier to read.

Chapter
9.
Inference in First-Order Logic
The procedure for conversion to CNF is similar to the propositional case, which we saw
on page 253. The principal difference arises from the need to eliminate existential quantiﬁers.
We illustrate the procedure by translating the sentence “Everyone who loves all animals is
loved by someone,” or
∀x [∀y Animal(y) ⇒Loves(x, y)] ⇒[∃y Loves(y, x)] .
The steps are as follows:
• Eliminate implications:
∀x [¬∀y ¬Animal(y) ∨Loves(x, y)] ∨[∃y Loves(y, x)] .
• Move ¬ inwards: In addition to the usual rules for negated connectives, we need rules
for negated quantiﬁers. Thus, we have
¬∀x p
becomes
∃x ¬p
¬∃x p
becomes
∀x ¬p .
Our sentence goes through the following transformations:
∀x [∃y ¬(¬Animal(y) ∨Loves(x, y))] ∨[∃y Loves(y, x)] .
∀x [∃y ¬¬Animal(y) ∧¬Loves(x, y)] ∨[∃y Loves(y, x)] .
∀x [∃y Animal(y) ∧¬Loves(x, y)] ∨[∃y Loves(y, x)] .
Notice how a universal quantiﬁer (∀y) in the premise of the implication has become
an existential quantiﬁer. The sentence now reads “Either there is some animal that x
doesn’t love, or (if this is not the case) someone loves x.” Clearly, the meaning of the
original sentence has been preserved.
• Standardize variables: For sentences like (∃x P(x))∨(∃x Q(x)) which use the same
variable name twice, change the name of one of the variables. This avoids confusion
later when we drop the quantiﬁers. Thus, we have
∀x [∃y Animal(y) ∧¬Loves(x, y)] ∨[∃z Loves(z, x)] .
• Skolemize: Skolemization is the process of removing existential quantiﬁers by elimi-
SKOLEMIZATION
nation. In the simple case, it is just like the Existential Instantiation rule of Section 9.1:
translate ∃x P(x) into P(A), where A is a new constant. However, we can’t apply Ex-
istential Instantiation to our sentence above because it doesn’t match the pattern ∃v α;
only parts of the sentence match the pattern. If we blindly apply the rule to the two
matching parts we get
∀x [Animal(A) ∧¬Loves(x, A)] ∨Loves(B, x) ,
which has the wrong meaning entirely: it says that everyone either fails to love a par-
ticular animal A or is loved by some particular entity B. In fact, our original sentence
allows each person to fail to love a different animal or to be loved by a different person.
Thus, we want the Skolem entities to depend on x and z:
∀x [Animal(F(x)) ∧¬Loves(x, F(x))] ∨Loves(G(z), x) .
Here F and G are Skolem functions. The general rule is that the arguments of the
SKOLEM FUNCTION
Skolem function are all the universally quantiﬁed variables in whose scope the exis-
tential quantiﬁer appears. As with Existential Instantiation, the Skolemized sentence is
satisﬁable exactly when the original sentence is satisﬁable.

Section 9.5.
Resolution

• Drop universal quantiﬁers: At this point, all remaining variables must be universally
quantiﬁed. Moreover, the sentence is equivalent to one in which all the universal quan-
tiﬁers have been moved to the left. We can therefore drop the universal quantiﬁers:
[Animal(F(x)) ∧¬Loves(x, F(x))] ∨Loves(G(z), x) .
• Distribute ∨over ∧:
[Animal(F(x)) ∨Loves(G(z), x)] ∧[¬Loves(x, F(x)) ∨Loves(G(z), x)] .
This step may also require ﬂattening out nested conjunctions and disjunctions.
The sentence is now in CNF and consists of two clauses. It is quite unreadable. (It may
help to explain that the Skolem function F(x) refers to the animal potentially unloved by x,
whereas G(z) refers to someone who might love x.) Fortunately, humans seldom need look
at CNF sentences—the translation process is easily automated.
9.5.2
The resolution inference rule
The resolution rule for ﬁrst-order clauses is simply a lifted version of the propositional reso-
lution rule given on page 253. Two clauses, which are assumed to be standardized apart so
that they share no variables, can be resolved if they contain complementary literals. Propo-
sitional literals are complementary if one is the negation of the other; ﬁrst-order literals are
complementary if one uniﬁes with the negation of the other. Thus, we have
ℓ1 ∨· · · ∨ℓk,
m1 ∨· · · ∨mn
SUBST(θ, ℓ1 ∨· · · ∨ℓi−1 ∨ℓi+1 ∨· · · ∨ℓk ∨m1 ∨· · · ∨mj−1 ∨mj+1 ∨· · · ∨mn)
where UNIFY(ℓi, ¬mj) = θ. For example, we can resolve the two clauses
[Animal(F(x)) ∨Loves(G(x), x)]
and
[¬Loves(u, v) ∨¬Kills(u, v)]
by eliminating the complementary literals Loves(G(x), x) and ¬Loves(u, v), with uniﬁer
θ = {u/G(x), v/x}, to produce the resolvent clause
[Animal(F(x)) ∨¬Kills(G(x), x)] .
This rule is called the binary resolution rule because it resolves exactly two literals. The
BINARY RESOLUTION
binary resolution rule by itself does not yield a complete inference procedure. The full reso-
lution rule resolves subsets of literals in each clause that are uniﬁable. An alternative approach
is to extend factoring—the removal of redundant literals—to the ﬁrst-order case. Proposi-
tional factoring reduces two literals to one if they are identical; ﬁrst-order factoring reduces
two literals to one if they are uniﬁable. The uniﬁer must be applied to the entire clause. The
combination of binary resolution and factoring is complete.
9.5.3
Example proofs
Resolution proves that KB |= α by proving KB ∧¬α unsatisﬁable, that is, by deriving the
empty clause. The algorithmic approach is identical to the propositional case, described in

Chapter
9.
Inference in First-Order Logic
¬American(x)    ¬Weapon(y)    ¬Sells(x,y,z)   ¬Hostile(z)   Criminal(x)
¬Criminal(West)
¬Enemy(Nono,America)
Enemy(Nono,America)
¬Missile(x)   Weapon(x)
¬Weapon(y)   ¬Sells(West,y,z)   ¬Hostile(z)
Missile(M1)
¬Missile(y)   ¬Sells(West,y,z)   ¬Hostile(z)
¬Missile(x)   ¬Owns(Nono,x)    Sells(West,x,Nono)
¬Sells(West,M1,z)   ¬Hostile(z)
¬American(West)   ¬Weapon(y)   ¬Sells(West,y,z)   ¬Hostile(z)
American(West)
¬Missile(M1)   ¬Owns(Nono,M1)   ¬Hostile(Nono)
Missile(M1)
¬Owns(Nono,M1)   ¬Hostile(Nono)
Owns(Nono,M1)
¬Enemy(x,America)   Hostile(x)
¬Hostile(Nono)
^
^
^
^
^
^
^
^
^
^
^
^
^
^
^
^
^
^
^
Figure 9.11
A resolution proof that West is a criminal. At each step, the literals that unify
are in bold.
Figure 7.12, so we need not repeat it here. Instead, we give two example proofs. The ﬁrst is
the crime example from Section 9.3. The sentences in CNF are
¬American(x) ∨¬Weapon(y) ∨¬Sells(x, y, z) ∨¬Hostile(z) ∨Criminal(x)
¬Missile(x) ∨¬Owns(Nono, x) ∨Sells(West, x, Nono)
¬Enemy(x, America) ∨Hostile(x)
¬Missile(x) ∨Weapon(x)
Owns(Nono, M1)
Missile(M1)
American(West)
Enemy(Nono, America) .
We also include the negated goal ¬Criminal(West). The resolution proof is shown in Fig-
ure 9.11. Notice the structure: single “spine” beginning with the goal clause, resolving against
clauses from the knowledge base until the empty clause is generated. This is characteristic
of resolution on Horn clause knowledge bases. In fact, the clauses along the main spine
correspond exactly to the consecutive values of the goals variable in the backward-chaining
algorithm of Figure 9.6. This is because we always choose to resolve with a clause whose
positive literal uniﬁed with the leftmost literal of the “current” clause on the spine; this is
exactly what happens in backward chaining. Thus, backward chaining is just a special case
of resolution with a particular control strategy to decide which resolution to perform next.
Our second example makes use of Skolemization and involves clauses that are not def-
inite clauses. This results in a somewhat more complex proof structure. In English, the
problem is as follows:
Everyone who loves all animals is loved by someone.
Anyone who kills an animal is loved by no one.
Jack loves all animals.
Either Jack or Curiosity killed the cat, who is named Tuna.
Did Curiosity kill the cat?

Section 9.5.
Resolution

First, we express the original sentences, some background knowledge, and the negated goal
G in ﬁrst-order logic:
A.
∀x [∀y Animal(y) ⇒Loves(x, y)] ⇒[∃y Loves(y, x)]
B.
∀x [∃z Animal(z) ∧Kills(x, z)] ⇒[∀y ¬Loves(y, x)]
C.
∀x Animal(x) ⇒Loves(Jack, x)
D.
Kills(Jack, Tuna) ∨Kills(Curiosity, Tuna)
E.
Cat(Tuna)
F.
∀x Cat(x) ⇒Animal(x)
¬G.
¬Kills(Curiosity, Tuna)
Now we apply the conversion procedure to convert each sentence to CNF:
A1.
Animal(F(x)) ∨Loves(G(x), x)
A2.
¬Loves(x, F(x)) ∨Loves(G(x), x)
B.
¬Loves(y, x) ∨¬Animal(z) ∨¬Kills(x, z)
C.
¬Animal(x) ∨Loves(Jack, x)
D.
Kills(Jack, Tuna) ∨Kills(Curiosity, Tuna)
E.
Cat(Tuna)
F.
¬Cat(x) ∨Animal(x)
¬G.
¬Kills(Curiosity, Tuna)
The resolution proof that Curiosity killed the cat is given in Figure 9.12. In English, the proof
could be paraphrased as follows:
Suppose Curiosity did not kill Tuna. We know that either Jack or Curiosity did; thus
Jack must have. Now, Tuna is a cat and cats are animals, so Tuna is an animal. Because
anyone who kills an animal is loved by no one, we know that no one loves Jack. On the
other hand, Jack loves all animals, so someone loves him; so we have a contradiction.
Therefore, Curiosity killed the cat.
¬Loves(y, Jack)
Loves(G(Jack), Jack)
¬Kills(Curiosity, Tuna)
Kills(Jack, Tuna)   Kills(Curiosity, Tuna)
¬Cat(x)   Animal(x)
Cat(Tuna)
¬Animal(F(Jack))   Loves(G(Jack), Jack)
Animal(F(x))   Loves(G(x), x) 
¬Loves(y, x)   ¬Kills(x, Tuna)
Kills(Jack, Tuna)
¬Loves(y, x)   ¬Animal(z)   ¬Kills(x, z)
Animal(Tuna)
¬Loves(x,F(x))   Loves(G(x), x)
¬Animal(x)   Loves(Jack, x)
^
^
^
^
^
^
^
^
^
Figure 9.12
A resolution proof that Curiosity killed the cat. Notice the use of factoring
in the derivation of the clause Loves(G(Jack), Jack). Notice also in the upper right, the
uniﬁcation of Loves(x, F(x)) and Loves(Jack, x) can only succeed after the variables have
been standardized apart.

Chapter
9.
Inference in First-Order Logic
The proof answers the question “Did Curiosity kill the cat?” but often we want to pose more
general questions, such as “Who killed the cat?” Resolution can do this, but it takes a little
more work to obtain the answer. The goal is ∃w Kills(w, Tuna), which, when negated,
becomes ¬Kills(w, Tuna) in CNF. Repeating the proof in Figure 9.12 with the new negated
goal, we obtain a similar proof tree, but with the substitution {w/Curiosity} in one of the
steps. So, in this case, ﬁnding out who killed the cat is just a matter of keeping track of the
bindings for the query variables in the proof.
Unfortunately, resolution can produce nonconstructive proofs for existential goals.
NONCONSTRUCTIVE
PROOF
For example, ¬Kills(w, Tuna) resolves with Kills(Jack, Tuna) ∨Kills(Curiosity, Tuna)
to give Kills(Jack, Tuna), which resolves again with ¬Kills(w, Tuna) to yield the empty
clause. Notice that w has two different bindings in this proof; resolution is telling us that,
yes, someone killed Tuna—either Jack or Curiosity. This is no great surprise! One so-
lution is to restrict the allowed resolution steps so that the query variables can be bound
only once in a given proof; then we need to be able to backtrack over the possible bind-
ings. Another solution is to add a special answer literal to the negated goal, which be-
ANSWER LITERAL
comes ¬Kills(w, Tuna) ∨Answer(w). Now, the resolution process generates an answer
whenever a clause is generated containing just a single answer literal. For the proof in Fig-
ure 9.12, this is Answer(Curiosity). The nonconstructive proof would generate the clause
Answer(Curiosity) ∨Answer(Jack), which does not constitute an answer.
9.5.4
Completeness of resolution
This section gives a completeness proof of resolution. It can be safely skipped by those who
are willing to take it on faith.
We show that resolution is refutation-complete, which means that if a set of sentences
REFUTATION
COMPLETENESS
is unsatisﬁable, then resolution will always be able to derive a contradiction. Resolution
cannot be used to generate all logical consequences of a set of sentences, but it can be used
to establish that a given sentence is entailed by the set of sentences. Hence, it can be used to
ﬁnd all answers to a given question, Q(x), by proving that KB ∧¬Q(x) is unsatisﬁable.
We take it as given that any sentence in ﬁrst-order logic (without equality) can be rewrit-
ten as a set of clauses in CNF. This can be proved by induction on the form of the sentence,
using atomic sentences as the base case (Davis and Putnam, 1960). Our goal therefore is to
prove the following: if S is an unsatisﬁable set of clauses, then the application of a ﬁnite
number of resolution steps to S will yield a contradiction.
Our proof sketch follows Robinson’s original proof with some simpliﬁcations from
Genesereth and Nilsson (1987). The basic structure of the proof (Figure 9.13) is as follows:
1. First, we observe that if S is unsatisﬁable, then there exists a particular set of ground
instances of the clauses of S such that this set is also unsatisﬁable (Herbrand’s theorem).
2. We then appeal to the ground resolution theorem given in Chapter 7, which states that
propositional resolution is complete for ground sentences.
3. We then use a lifting lemma to show that, for any propositional resolution proof using
the set of ground sentences, there is a corresponding ﬁrst-order resolution proof using
the ﬁrst-order sentences from which the ground sentences were obtained.

Section 9.5.
Resolution

Resolution can find a contradiction in S'
There is a resolution proof for the contradiction in S'
Herbrand’s theorem
Some set S' of ground instances is unsatisfiable
Any set of sentences S is representable in clausal form
Assume S is unsatisfiable, and in clausal form
Lifting lemma
Ground resolution
theorem
Figure 9.13
Structure of a completeness proof for resolution.
To carry out the ﬁrst step, we need three new concepts:
• Herbrand universe: If S is a set of clauses, then HS, the Herbrand universe of S, is
HERBRAND
UNIVERSE
the set of all ground terms constructable from the following:
a. The function symbols in S, if any.
b. The constant symbols in S, if any; if none, then the constant symbol A.
For example, if S contains just the clause ¬P(x, F(x, A))∨¬Q(x, A)∨R(x, B), then
HS is the following inﬁnite set of ground terms:
{A, B, F(A, A), F(A, B), F(B, A), F(B, B), F(A, F(A, A)), . . .} .
• Saturation: If S is a set of clauses and P is a set of ground terms, then P(S), the
SATURATION
saturation of S with respect to P, is the set of all ground clauses obtained by applying
all possible consistent substitutions of ground terms in P with variables in S.
• Herbrand base: The saturation of a set S of clauses with respect to its Herbrand uni-
HERBRAND BASE
verse is called the Herbrand base of S, written as HS(S). For example, if S contains
solely the clause just given, then HS(S) is the inﬁnite set of clauses
{¬P(A, F(A, A)) ∨¬Q(A, A) ∨R(A, B),
¬P(B, F(B, A)) ∨¬Q(B, A) ∨R(B, B),
¬P(F(A, A), F(F(A, A), A)) ∨¬Q(F(A, A), A) ∨R(F(A, A), B),
¬P(F(A, B), F(F(A, B), A)) ∨¬Q(F(A, B), A) ∨R(F(A, B), B), . . . }
These deﬁnitions allow us to state a form of Herbrand’s theorem (Herbrand, 1930):
HERBRAND’S
THEOREM
If a set S of clauses is unsatisﬁable, then there exists a ﬁnite subset of HS(S) that
is also unsatisﬁable.
Let S′ be this ﬁnite subset of ground sentences. Now, we can appeal to the ground resolution
theorem (page 255) to show that the resolution closure RC(S′) contains the empty clause.
That is, running propositional resolution to completion on S′ will derive a contradiction.
Now that we have established that there is always a resolution proof involving some
ﬁnite subset of the Herbrand base of S, the next step is to show that there is a resolution

Chapter
9.
Inference in First-Order Logic
G ¨ODEL’S INCOMPLETENESS THEOREM
By slightly extending the language of ﬁrst-order logic to allow for the mathemat-
ical induction schema in arithmetic, Kurt G¨odel was able to show, in his incom-
pleteness theorem, that there are true arithmetic sentences that cannot be proved.
The proof of the incompleteness theorem is somewhat beyond the scope of
this book, occupying, as it does, at least 30 pages, but we can give a hint here. We
begin with the logical theory of numbers. In this theory, there is a single constant,
0, and a single function, S (the successor function). In the intended model, S(0)
denotes 1, S(S(0)) denotes 2, and so on; the language therefore has names for all
the natural numbers. The vocabulary also includes the function symbols +, ×, and
Expt (exponentiation) and the usual set of logical connectives and quantiﬁers. The
ﬁrst step is to notice that the set of sentences that we can write in this language can
be enumerated. (Imagine deﬁning an alphabetical order on the symbols and then
arranging, in alphabetical order, each of the sets of sentences of length 1, 2, and
so on.) We can then number each sentence α with a unique natural number #α
(the G¨odel number). This is crucial: number theory contains a name for each of
its own sentences. Similarly, we can number each possible proof P with a G¨odel
number G(P), because a proof is simply a ﬁnite sequence of sentences.
Now suppose we have a recursively enumerable set A of sentences that are
true statements about the natural numbers. Recalling that A can be named by a
given set of integers, we can imagine writing in our language a sentence α(j, A) of
the following sort:
∀i i is not the G¨odel number of a proof of the sentence whose G¨odel
number is j, where the proof uses only premises in A.
Then let σ be the sentence α(#σ, A), that is, a sentence that states its own unprov-
ability from A. (That this sentence always exists is true but not entirely obvious.)
Now we make the following ingenious argument: Suppose that σ is provable
from A; then σ is false (because σ says it cannot be proved). But then we have a
false sentence that is provable from A, so A cannot consist of only true sentences—
a violation of our premise. Therefore, σ is not provable from A. But this is exactly
what σ itself claims; hence σ is a true sentence.
So, we have shown (barring 29 1
2 pages) that for any set of true sentences of
number theory, and in particular any set of basic axioms, there are other true sen-
tences that cannot be proved from those axioms. This establishes, among other
things, that we can never prove all the theorems of mathematics within any given
system of axioms. Clearly, this was an important discovery for mathematics. Its
signiﬁcance for AI has been widely debated, beginning with speculations by G¨odel
himself. We take up the debate in Chapter 26.

Section 9.5.
Resolution

proof using the clauses of S itself, which are not necessarily ground clauses. We start by
considering a single application of the resolution rule. Robinson stated this lemma:
Let C1 and C2 be two clauses with no shared variables, and let C′
1 and C′
2 be
ground instances of C1 and C2. If C′ is a resolvent of C′
1 and C′
2, then there exists
a clause C such that (1) C is a resolvent of C1 and C2 and (2) C′ is a ground
instance of C.
This is called a lifting lemma, because it lifts a proof step from ground clauses up to general
LIFTING LEMMA
ﬁrst-order clauses. In order to prove his basic lifting lemma, Robinson had to invent uniﬁ-
cation and derive all of the properties of most general uniﬁers. Rather than repeat the proof
here, we simply illustrate the lemma:
C1 = ¬P(x, F(x, A)) ∨¬Q(x, A) ∨R(x, B)
C2 = ¬N(G(y), z) ∨P(H(y), z)
C′
1 = ¬P(H(B), F(H(B), A)) ∨¬Q(H(B), A) ∨R(H(B), B)
C′
2 = ¬N(G(B), F(H(B), A)) ∨P(H(B), F(H(B), A))
C′ = ¬N(G(B), F(H(B), A)) ∨¬Q(H(B), A) ∨R(H(B), B)
C = ¬N(G(y), F(H(y), A)) ∨¬Q(H(y), A) ∨R(H(y), B) .
We see that indeed C′ is a ground instance of C. In general, for C′
1 and C′
2 to have any
resolvents, they must be constructed by ﬁrst applying to C1 and C2 the most general uniﬁer
of a pair of complementary literals in C1 and C2. From the lifting lemma, it is easy to derive
a similar statement about any sequence of applications of the resolution rule:
For any clause C′ in the resolution closure of S′ there is a clause C in the resolu-
tion closure of S such that C′ is a ground instance of C and the derivation of C is
the same length as the derivation of C′.
From this fact, it follows that if the empty clause appears in the resolution closure of S′, it
must also appear in the resolution closure of S. This is because the empty clause cannot be a
ground instance of any other clause. To recap: we have shown that if S is unsatisﬁable, then
there is a ﬁnite derivation of the empty clause using the resolution rule.
The lifting of theorem proving from ground clauses to ﬁrst-order clauses provides a vast
increase in power. This increase comes from the fact that the ﬁrst-order proof need instantiate
variables only as far as necessary for the proof, whereas the ground-clause methods were
required to examine a huge number of arbitrary instantiations.
9.5.5
Equality
None of the inference methods described so far in this chapter handle an assertion of the form
x = y. Three distinct approaches can be taken. The ﬁrst approach is to axiomatize equality—
to write down sentences about the equality relation in the knowledge base. We need to say that
equality is reﬂexive, symmetric, and transitive, and we also have to say that we can substitute
equals for equals in any predicate or function. So we need three basic axioms, and then one

Chapter
9.
Inference in First-Order Logic
for each predicate and function:
∀x x = x
∀x, y x = y ⇒y = x
∀x, y, z x = y ∧y = z ⇒x = z
∀x, y x = y ⇒(P1(x) ⇔P1(y))
∀x, y x = y ⇒(P2(x) ⇔P2(y))
...
∀w, x, y, z w = y ∧x = z ⇒(F1(w, x) = F1(y, z))
∀w, x, y, z w = y ∧x = z ⇒(F2(w, x) = F2(y, z))
...
Given these sentences, a standard inference procedure such as resolution can perform tasks
requiring equality reasoning, such as solving mathematical equations. However, these axioms
will generate a lot of conclusions, most of them not helpful to a proof. So there has been a
search for more efﬁcient ways of handling equality. One alternative is to add inference rules
rather than axioms. The simplest rule, demodulation, takes a unit clause x = y and some
clause α that contains the term x, and yields a new clause formed by substituting y for x
within α. It works if the term within α uniﬁes with x; it need not be exactly equal to x.
Note that demodulation is directional; given x = y, the x always gets replaced with y, never
vice versa. That means that demodulation can be used for simplifying expressions using
demodulators such as x + 0 = x or x1 = x. As another example, given
Father(Father(x)) = PaternalGrandfather (x)
Birthdate(Father(Father(Bella)), 1926)
we can conclude by demodulation
Birthdate(PaternalGrandfather (Bella), 1926) .
More formally, we have
• Demodulation: For any terms x, y, and z, where z appears somewhere in literal mi
DEMODULATION
and where UNIFY(x, z) = θ,
x = y,
m1 ∨· · · ∨mn
SUB(SUBST(θ, x), SUBST(θ, y), m1 ∨· · · ∨mn) .
where SUBST is the usual substitution of a binding list, and SUB(x, y, m) means to
replace x with y everywhere that x occurs within m.
The rule can also be extended to handle non-unit clauses in which an equality literal appears:
• Paramodulation: For any terms x, y, and z, where z appears somewhere in literal mi,
PARAMODULATION
and where UNIFY(x, z) = θ,
ℓ1 ∨· · · ∨ℓk ∨x = y,
m1 ∨· · · ∨mn
SUB(SUBST(θ, x), SUBST(θ, y), SUBST(θ, ℓ1 ∨· · · ∨ℓk ∨m1 ∨· · · ∨mn) .
For example, from
P(F(x, B), x) ∨Q(x)
and
F(A, y) = y ∨R(y)

Section 9.5.
Resolution

we have θ = UNIFY(F(A, y), F(x, B)) = {x/A, y/B}, and we can conclude by paramodu-
lation the sentence
P(B, A) ∨Q(A) ∨R(B) .
Paramodulation yields a complete inference procedure for ﬁrst-order logic with equality.
A third approach handles equality reasoning entirely within an extended uniﬁcation
algorithm. That is, terms are uniﬁable if they are provably equal under some substitution,
where “provably” allows for equality reasoning. For example, the terms 1 + 2 and 2 + 1
normally are not uniﬁable, but a uniﬁcation algorithm that knows that x + y = y + x could
unify them with the empty substitution. Equational uniﬁcation of this kind can be done with
EQUATIONAL
UNIFICATION
efﬁcient algorithms designed for the particular axioms used (commutativity, associativity, and
so on) rather than through explicit inference with those axioms. Theorem provers using this
technique are closely related to the CLP systems described in Section 9.4.
9.5.6
Resolution strategies
We know that repeated applications of the resolution inference rule will eventually ﬁnd a
proof if one exists. In this subsection, we examine strategies that help ﬁnd proofs efﬁciently.
Unit preference: This strategy prefers to do resolutions where one of the sentences is a single
UNIT PREFERENCE
literal (also known as a unit clause). The idea behind the strategy is that we are trying to
produce an empty clause, so it might be a good idea to prefer inferences that produce shorter
clauses. Resolving a unit sentence (such as P) with any other sentence (such as ¬P ∨¬Q∨R)
always yields a clause (in this case, ¬Q ∨R) that is shorter than the other clause. When
the unit preference strategy was ﬁrst tried for propositional inference in 1964, it led to a
dramatic speedup, making it feasible to prove theorems that could not be handled without the
preference. Unit resolution is a restricted form of resolution in which every resolution step
must involve a unit clause. Unit resolution is incomplete in general, but complete for Horn
clauses. Unit resolution proofs on Horn clauses resemble forward chaining.
The OTTER theorem prover (Organized Techniques for Theorem-proving and Effective
Research, McCune, 1992), uses a form of best-ﬁrst search. Its heuristic function measures
the “weight” of each clause, where lighter clauses are preferred. The exact choice of heuristic
is up to the user, but generally, the weight of a clause should be correlated with its size or
difﬁculty. Unit clauses are treated as light; the search can thus be seen as a generalization of
the unit preference strategy.
Set of support: Preferences that try certain resolutions ﬁrst are helpful, but in general it is
SET OF SUPPORT
more effective to try to eliminate some potential resolutions altogether. For example, we can
insist that every resolution step involve at least one element of a special set of clauses—the
set of support. The resolvent is then added into the set of support. If the set of support is
small relative to the whole knowledge base, the search space will be reduced dramatically.
We have to be careful with this approach because a bad choice for the set of support
will make the algorithm incomplete. However, if we choose the set of support S so that the
remainder of the sentences are jointly satisﬁable, then set-of-support resolution is complete.
For example, one can use the negated query as the set of support, on the assumption that the

Chapter
9.
Inference in First-Order Logic
original knowledge base is consistent. (After all, if it is not consistent, then the fact that the
query follows from it is vacuous.) The set-of-support strategy has the additional advantage of
generating goal-directed proof trees that are often easy for humans to understand.
Input resolution: In this strategy, every resolution combines one of the input sentences (from
INPUT RESOLUTION
the KB or the query) with some other sentence. The proof in Figure 9.11 on page 348 uses
only input resolutions and has the characteristic shape of a single “spine” with single sen-
tences combining onto the spine. Clearly, the space of proof trees of this shape is smaller
than the space of all proof graphs. In Horn knowledge bases, Modus Ponens is a kind of
input resolution strategy, because it combines an implication from the original KB with some
other sentences. Thus, it is no surprise that input resolution is complete for knowledge bases
that are in Horn form, but incomplete in the general case. The linear resolution strategy is a
LINEAR RESOLUTION
slight generalization that allows P and Q to be resolved together either if P is in the original
KB or if P is an ancestor of Q in the proof tree. Linear resolution is complete.
Subsumption: The subsumption method eliminates all sentences that are subsumed by (that
SUBSUMPTION
is, more speciﬁc than) an existing sentence in the KB. For example, if P(x) is in the KB, then
there is no sense in adding P(A) and even less sense in adding P(A) ∨Q(B). Subsumption
helps keep the KB small and thus helps keep the search space small.
Practical uses of resolution theorem provers
Theorem provers can be applied to the problems involved in the synthesis and veriﬁcation
SYNTHESIS
VERIFICATION
of both hardware and software. Thus, theorem-proving research is carried out in the ﬁelds of
hardware design, programming languages, and software engineering—not just in AI.
In the case of hardware, the axioms describe the interactions between signals and cir-
cuit elements. (See Section 8.4.2 on page 309 for an example.) Logical reasoners designed
specially for veriﬁcation have been able to verify entire CPUs, including their timing prop-
erties (Srivas and Bickford, 1990). The AURA theorem prover has been applied to design
circuits that are more compact than any previous design (Wojciechowski and Wojcik, 1983).
In the case of software, reasoning about programs is quite similar to reasoning about
actions, as in Chapter 7: axioms describe the preconditions and effects of each statement.
The formal synthesis of algorithms was one of the ﬁrst uses of theorem provers, as outlined
by Cordell Green (1969a), who built on earlier ideas by Herbert Simon (1963). The idea
is to constructively prove a theorem to the effect that “there exists a program p satisfying a
certain speciﬁcation.” Although fully automated deductive synthesis, as it is called, has not
DEDUCTIVE
SYNTHESIS
yet become feasible for general-purpose programming, hand-guided deductive synthesis has
been successful in designing several novel and sophisticated algorithms. Synthesis of special-
purpose programs, such as scientiﬁc computing code, is also an active area of research.
Similar techniques are now being applied to software veriﬁcation by systems such as the
SPIN model checker (Holzmann, 1997). For example, the Remote Agent spacecraft control
program was veriﬁed before and after ﬂight (Havelund et al., 2000). The RSA public key
encryption algorithm and the Boyer–Moore string-matching algorithm have been veriﬁed this
way (Boyer and Moore, 1984).

CLASSICAL PLANNING
In which we see how an agent can take advantage of the structure of a problem to
construct complex plans of action.
We have deﬁned AI as the study of rational action, which means that planning—devising a
plan of action to achieve one’s goals—is a critical part of AI. We have seen two examples
of planning agents so far: the search-based problem-solving agent of Chapter 3 and the hy-
brid logical agent of Chapter 7. In this chapter we introduce a representation for planning
problems that scales up to problems that could not be handled by those earlier approaches.
Section 10.1 develops an expressive yet carefully constrained language for representing
planning problems. Section 10.2 shows how forward and backward search algorithms can
take advantage of this representation, primarily through accurate heuristics that can be derived
automatically from the structure of the representation. (This is analogous to the way in which
effective domain-independent heuristics were constructed for constraint satisfaction problems
in Chapter 6.) Section 10.3 shows how a data structure called the planning graph can make the
search for a plan more efﬁcient. We then describe a few of the other approaches to planning,
and conclude by comparing the various approaches.
This chapter covers fully observable, deterministic, static environments with single
agents. Chapters 11 and 17 cover partially observable, stochastic, dynamic environments
with multiple agents.
10.1
DEFINITION OF CLASSICAL PLANNING
The problem-solving agent of Chapter 3 can ﬁnd sequences of actions that result in a goal
state. But it deals with atomic representations of states and thus needs good domain-speciﬁc
heuristics to perform well. The hybrid propositional logical agent of Chapter 7 can ﬁnd plans
without domain-speciﬁc heuristics because it uses domain-independent heuristics based on
the logical structure of the problem. But it relies on ground (variable-free) propositional
inference, which means that it may be swamped when there are many actions and states. For
example, in the wumpus world, the simple action of moving a step forward had to be repeated
for all four agent orientations, T time steps, and n2 current locations.

Section 10.1.
Deﬁnition of Classical Planning

In response to this, planning researchers have settled on a factored representation—
one in which a state of the world is represented by a collection of variables. We use a language
called PDDL, the Planning Domain Deﬁnition Language, that allows us to express all 4Tn2
PDDL
actions with one action schema. There have been several versions of PDDL; we select a
simple version and alter its syntax to be consistent with the rest of the book.1 We now show
how PDDL describes the four things we need to deﬁne a search problem: the initial state, the
actions that are available in a state, the result of applying an action, and the goal test.
Each state is represented as a conjunction of ﬂuents that are ground, functionless atoms.
For example, Poor ∧Unknown might represent the state of a hapless agent, and a state
in a package delivery problem might be At(Truck 1, Melbourne) ∧At(Truck 2, Sydney).
Database semantics is used: the closed-world assumption means that any ﬂuents that are not
mentioned are false, and the unique names assumption means that Truck 1 and Truck 2 are
distinct. The following ﬂuents are not allowed in a state: At(x, y) (because it is non-ground),
¬Poor (because it is a negation), and At(Father(Fred), Sydney) (because it uses a function
symbol). The representation of states is carefully designed so that a state can be treated
either as a conjunction of ﬂuents, which can be manipulated by logical inference, or as a set
of ﬂuents, which can be manipulated with set operations. The set semantics is sometimes
SET SEMANTICS
easier to deal with.
Actions are described by a set of action schemas that implicitly deﬁne the ACTIONS(s)
and RESULT(s, a) functions needed to do a problem-solving search. We saw in Chapter 7 that
any system for action description needs to solve the frame problem—to say what changes and
what stays the same as the result of the action. Classical planning concentrates on problems
where most actions leave most things unchanged. Think of a world consisting of a bunch of
objects on a ﬂat surface. The action of nudging an object causes that object to change its lo-
cation by a vector Δ. A concise description of the action should mention only Δ; it shouldn’t
have to mention all the objects that stay in place. PDDL does that by specifying the result of
an action in terms of what changes; everything that stays the same is left unmentioned.
A set of ground (variable-free) actions can be represented by a single action schema.
ACTION SCHEMA
The schema is a lifted representation—it lifts the level of reasoning from propositional logic
to a restricted subset of ﬁrst-order logic. For example, here is an action schema for ﬂying a
plane from one location to another:
Action(Fly(p, from, to),
PRECOND:At(p, from) ∧Plane(p) ∧Airport(from) ∧Airport(to)
EFFECT:¬At(p, from) ∧At(p, to))
The schema consists of the action name, a list of all the variables used in the schema, a
precondition and an effect. Although we haven’t said yet how the action schema converts
PRECONDITION
EFFECT
into logical sentences, think of the variables as being universally quantiﬁed. We are free to
choose whatever values we want to instantiate the variables. For example, here is one ground
1 PDDL was derived from the original STRIPS planning language(Fikes and Nilsson, 1971). which is slightly
more restricted than PDDL: STRIPS preconditions and goals cannot contain negative literals.

Chapter
10.
Classical Planning
action that results from substituting values for all the variables:
Action(Fly(P1, SFO, JFK),
PRECOND:At(P1, SFO) ∧Plane(P1) ∧Airport(SFO) ∧Airport(JFK)
EFFECT:¬At(P1, SFO) ∧At(P1, JFK))
The precondition and effect of an action are each conjunctions of literals (positive or negated
atomic sentences). The precondition deﬁnes the states in which the action can be executed,
and the effect deﬁnes the result of executing the action. An action a can be executed in state
s if s entails the precondition of a. Entailment can also be expressed with the set semantics:
s |= q iff every positive literal in q is in s and every negated literal in q is not. In formal
notation we say
(a ∈ACTIONS(s)) ⇔s |= PRECOND(a) ,
where any variables in a are universally quantiﬁed. For example,
∀p, from, to (Fly(p, from, to) ∈ACTIONS(s)) ⇔
s |= (At(p, from) ∧Plane(p) ∧Airport(from) ∧Airport(to))
We say that action a is applicable in state s if the preconditions are satisﬁed by s. When
APPLICABLE
an action schema a contains variables, it may have multiple applicable instantiations. For
example, with the initial state deﬁned in Figure 10.1, the Fly action can be instantiated as
Fly(P1, SFO, JFK) or as Fly(P2, JFK , SFO), both of which are applicable in the initial
state. If an action a has v variables, then, in a domain with k unique names of objects, it takes
O(vk) time in the worst case to ﬁnd the applicable ground actions.
Sometimes we want to propositionalize a PDDL problem—replace each action schema
PROPOSITIONALIZE
with a set of ground actions and then use a propositional solver such as SATPLAN to ﬁnd a
solution. However, this is impractical when v and k are large.
The result of executing action a in state s is deﬁned as a state s′ which is represented
by the set of ﬂuents formed by starting with s, removing the ﬂuents that appear as negative
literals in the action’s effects (what we call the delete list or DEL(a)), and adding the ﬂuents
DELETE LIST
that are positive literals in the action’s effects (what we call the add list or ADD(a)):
ADD LIST
RESULT(s, a) = (s −DEL(a)) ∪ADD(a) .
(10.1)
For example, with the action Fly(P1, SFO, JFK), we would remove At(P1, SFO) and add
At(P1, JFK). It is a requirement of action schemas that any variable in the effect must also
appear in the precondition. That way, when the precondition is matched against the state s,
all the variables will be bound, and RESULT(s, a) will therefore have only ground atoms. In
other words, ground states are closed under the RESULT operation.
Also note that the ﬂuents do not explicitly refer to time, as they did in Chapter 7. There
we needed superscripts for time, and successor-state axioms of the form
F t+1 ⇔ActionCausesF t ∨(F t ∧¬ActionCausesNotF t) .
In PDDL the times and states are implicit in the action schemas: the precondition always
refers to time t and the effect to time t + 1.
A set of action schemas serves as a deﬁnition of a planning domain. A speciﬁc problem
within the domain is deﬁned with the addition of an initial state and a goal. The initial

Section 10.1.
Deﬁnition of Classical Planning

Init(At(C1, SFO) ∧At(C2, JFK) ∧At(P1, SFO) ∧At(P2, JFK)
∧Cargo(C1) ∧Cargo(C2) ∧Plane(P1) ∧Plane(P2)
∧Airport(JFK) ∧Airport(SFO))
Goal(At(C1, JFK) ∧At(C2, SFO))
Action(Load(c, p, a),
PRECOND: At(c, a) ∧At(p, a) ∧Cargo(c) ∧Plane(p) ∧Airport(a)
EFFECT: ¬ At(c, a) ∧In(c, p))
Action(Unload(c, p, a),
PRECOND: In(c, p) ∧At(p, a) ∧Cargo(c) ∧Plane(p) ∧Airport(a)
EFFECT: At(c, a) ∧¬ In(c, p))
Action(Fly(p, from, to),
PRECOND: At(p, from) ∧Plane(p) ∧Airport(from) ∧Airport(to)
EFFECT: ¬ At(p, from) ∧At(p, to))
Figure 10.1
A PDDL description of an air cargo transportation planning problem.
state is a conjunction of ground atoms. (As with all states, the closed-world assumption is
INITIAL STATE
used, which means that any atoms that are not mentioned are false.) The goal is just like a
GOAL
precondition: a conjunction of literals (positive or negative) that may contain variables, such
as At(p, SFO) ∧Plane(p). Any variables are treated as existentially quantiﬁed, so this goal
is to have any plane at SFO. The problem is solved when we can ﬁnd a sequence of actions
that end in a state s that entails the goal. For example, the state Rich ∧Famous ∧Miserable
entails the goal Rich ∧Famous, and the state Plane(Plane1) ∧At(Plane1, SFO) entails
the goal At(p, SFO) ∧Plane(p).
Now we have deﬁned planning as a search problem: we have an initial state, an ACTIONS
function, a RESULT function, and a goal test. We’ll look at some example problems before
investigating efﬁcient search algorithms.
10.1.1
Example: Air cargo transport
Figure 10.1 shows an air cargo transport problem involving loading and unloading cargo and
ﬂying it from place to place. The problem can be deﬁned with three actions: Load, Unload,
and Fly. The actions affect two predicates: In(c, p) means that cargo c is inside plane p, and
At(x, a) means that object x (either plane or cargo) is at airport a. Note that some care must
be taken to make sure the At predicates are maintained properly. When a plane ﬂies from
one airport to another, all the cargo inside the plane goes with it. In ﬁrst-order logic it would
be easy to quantify over all objects that are inside the plane. But basic PDDL does not have
a universal quantiﬁer, so we need a different solution. The approach we use is to say that a
piece of cargo ceases to be At anywhere when it is In a plane; the cargo only becomes At the
new airport when it is unloaded. So At really means “available for use at a given location.”
The following plan is a solution to the problem:
[Load(C1, P1, SFO), Fly(P1, SFO, JFK ), Unload(C1, P1, JFK),
Load(C2, P2, JFK ), Fly(P2, JFK , SFO), Unload(C2, P2, SFO)] .

Chapter
10.
Classical Planning
Finally, there is the problem of spurious actions such as Fly(P1, JFK, JFK ), which should
be a no-op, but which has contradictory effects (according to the deﬁnition, the effect would
include At(P1, JFK) ∧¬At(P1, JFK)). It is common to ignore such problems, because
they seldom cause incorrect plans to be produced. The correct approach is to add inequality
preconditions saying that the from and to airports must be different; see another example of
this in Figure 10.3.
10.1.2
Example: The spare tire problem
Consider the problem of changing a ﬂat tire (Figure 10.2). The goal is to have a good spare
tire properly mounted onto the car’s axle, where the initial state has a ﬂat tire on the axle and
a good spare tire in the trunk. To keep it simple, our version of the problem is an abstract
one, with no sticky lug nuts or other complications. There are just four actions: removing the
spare from the trunk, removing the ﬂat tire from the axle, putting the spare on the axle, and
leaving the car unattended overnight. We assume that the car is parked in a particularly bad
neighborhood, so that the effect of leaving it overnight is that the tires disappear. A solution
to the problem is [Remove(Flat, Axle), Remove(Spare, Trunk), PutOn(Spare, Axle)].
Init(Tire(Flat) ∧Tire(Spare) ∧At(Flat, Axle) ∧At(Spare, Trunk))
Goal(At(Spare, Axle))
Action(Remove(obj , loc),
PRECOND: At(obj , loc)
EFFECT: ¬ At(obj , loc) ∧At(obj , Ground))
Action(PutOn(t, Axle),
PRECOND: Tire(t) ∧At(t, Ground) ∧¬ At(Flat, Axle)
EFFECT: ¬ At(t, Ground) ∧At(t, Axle))
Action(LeaveOvernight,
PRECOND:
EFFECT: ¬ At(Spare, Ground) ∧¬ At(Spare, Axle) ∧¬ At(Spare, Trunk)
∧¬ At(Flat, Ground) ∧¬ At(Flat, Axle) ∧¬ At(Flat, Trunk))
Figure 10.2
The simple spare tire problem.
10.1.3
Example: The blocks world
One of the most famous planning domains is known as the blocks world. This domain
BLOCKS WORLD
consists of a set of cube-shaped blocks sitting on a table.2 The blocks can be stacked, but
only one block can ﬁt directly on top of another. A robot arm can pick up a block and move
it to another position, either on the table or on top of another block. The arm can pick up
only one block at a time, so it cannot pick up a block that has another one on it. The goal will
always be to build one or more stacks of blocks, speciﬁed in terms of what blocks are on top
2 The blocks world used in planning research is much simpler than SHRDLU’s version, shown on page 20.

Section 10.1.
Deﬁnition of Classical Planning

Init(On(A, Table) ∧On(B, Table) ∧On(C, A)
∧Block(A) ∧Block(B) ∧Block(C) ∧Clear(B) ∧Clear(C))
Goal(On(A, B) ∧On(B, C))
Action(Move(b, x, y),
PRECOND: On(b, x) ∧Clear(b) ∧Clear(y) ∧Block(b) ∧Block(y) ∧
(b̸=x) ∧(b̸=y) ∧(x̸=y),
EFFECT: On(b, y) ∧Clear(x) ∧¬On(b, x) ∧¬Clear(y))
Action(MoveToTable(b, x),
PRECOND: On(b, x) ∧Clear(b) ∧Block(b) ∧(b̸=x),
EFFECT: On(b, Table) ∧Clear(x) ∧¬On(b, x))
Figure 10.3
A planning problem in the blocks world: building a three-block tower. One
solution is the sequence [MoveToTable(C, A), Move(B, Table, C), Move(A, Table, B)].
Start State
Goal State
B
A
C
A
B
C
Figure 10.4
Diagram of the blocks-world problem in Figure 10.3.
of what other blocks. For example, a goal might be to get block A on B and block B on C
(see Figure 10.4).
We use On(b, x) to indicate that block b is on x, where x is either another block or the
table. The action for moving block b from the top of x to the top of y will be Move(b, x, y).
Now, one of the preconditions on moving b is that no other block be on it. In ﬁrst-order logic,
this would be ¬∃x On(x, b) or, alternatively, ∀x ¬On(x, b). Basic PDDL does not allow
quantiﬁers, so instead we introduce a predicate Clear(x) that is true when nothing is on x.
(The complete problem description is in Figure 10.3.)
The action Move moves a block b from x to y if both b and y are clear. After the move
is made, b is still clear but y is not. A ﬁrst attempt at the Move schema is
Action(Move(b, x, y),
PRECOND:On(b, x) ∧Clear(b) ∧Clear(y),
EFFECT:On(b, y) ∧Clear(x) ∧¬On(b, x) ∧¬Clear(y)) .
Unfortunately, this does not maintain Clear properly when x or y is the table. When x is the
Table, this action has the effect Clear(Table), but the table should not become clear; and
when y = Table, it has the precondition Clear(Table), but the table does not have to be clear

Chapter
10.
Classical Planning
for us to move a block onto it. To ﬁx this, we do two things. First, we introduce another
action to move a block b from x to the table:
Action(MoveToTable(b, x),
PRECOND:On(b, x) ∧Clear(b),
EFFECT:On(b, Table) ∧Clear(x) ∧¬On(b, x)) .
Second, we take the interpretation of Clear(x) to be “there is a clear space on x to hold a
block.” Under this interpretation, Clear(Table) will always be true. The only problem is that
nothing prevents the planner from using Move(b, x, Table) instead of MoveToTable(b, x).
We could live with this problem—it will lead to a larger-than-necessary search space, but will
not lead to incorrect answers—or we could introduce the predicate Block and add Block(b)∧
Block(y) to the precondition of Move.
10.1.4
The complexity of classical planning
In this subsection we consider the theoretical complexity of planning and distinguish two
decision problems. PlanSAT is the question of whether there exists any plan that solves a
PLANSAT
planning problem. Bounded PlanSAT asks whether there is a solution of length k or less;
BOUNDED PLANSAT
this can be used to ﬁnd an optimal plan.
The ﬁrst result is that both decision problems are decidable for classical planning. The
proof follows from the fact that the number of states is ﬁnite. But if we add function symbols
to the language, then the number of states becomes inﬁnite, and PlanSAT becomes only
semidecidable: an algorithm exists that will terminate with the correct answer for any solvable
problem, but may not terminate on unsolvable problems. The Bounded PlanSAT problem
remains decidable even in the presence of function symbols. For proofs of the assertions in
this section, see Ghallab et al. (2004).
Both PlanSAT and Bounded PlanSAT are in the complexity class PSPACE, a class that
is larger (and hence more difﬁcult) than NP and refers to problems that can be solved by a
deterministic Turing machine with a polynomial amount of space. Even if we make some
rather severe restrictions, the problems remain quite difﬁcult. For example, if we disallow
negative effects, both problems are still NP-hard. However, if we also disallow negative
preconditions, PlanSAT reduces to the class P.
These worst-case results may seem discouraging. We can take solace in the fact that
agents are usually not asked to ﬁnd plans for arbitrary worst-case problem instances, but
rather are asked for plans in speciﬁc domains (such as blocks-world problems with n blocks),
which can be much easier than the theoretical worst case. For many domains (including the
blocks world and the air cargo world), Bounded PlanSAT is NP-complete while PlanSAT is
in P; in other words, optimal planning is usually hard, but sub-optimal planning is sometimes
easy. To do well on easier-than-worst-case problems, we will need good search heuristics.
That’s the true advantage of the classical planning formalism: it has facilitated the develop-
ment of very accurate domain-independent heuristics, whereas systems based on successor-
state axioms in ﬁrst-order logic have had less success in coming up with good heuristics.

Section 10.2.
Algorithms for Planning as State-Space Search

10.2
ALGORITHMS FOR PLANNING AS STATE-SPACE SEARCH
Now we turn our attention to planning algorithms. We saw how the description of a planning
problem deﬁnes a search problem: we can search from the initial state through the space
of states, looking for a goal. One of the nice advantages of the declarative representation of
action schemas is that we can also search backward from the goal, looking for the initial state.
Figure 10.5 compares forward and backward searches.
10.2.1
Forward (progression) state-space search
Now that we have shown how a planning problem maps into a search problem, we can solve
planning problems with any of the heuristic search algorithms from Chapter 3 or a local
search algorithm from Chapter 4 (provided we keep track of the actions used to reach the
goal). From the earliest days of planning research (around 1961) until around 1998 it was
assumed that forward state-space search was too inefﬁcient to be practical. It is not hard to
come up with reasons why.
First, forward search is prone to exploring irrelevant actions. Consider the noble task
of buying a copy of AI: A Modern Approach from an online bookseller. Suppose there is an
(a)
(b)
At(P1, A)
Fly(P1, A, B)
Fly(P2, A, B)
Fly(P1, A, B)
Fly(P2, A, B)
At(P2, A)
At(P1, B)
At(P2, A)
At(P1, A)
At(P2, B)
At(P1, B)
At(P2, B)
At(P1, B)
At(P2, A)
At(P1, A)
At(P2, B)
Figure 10.5
Two approaches to searching for a plan. (a) Forward (progression) search
through the space of states, starting in the initial state and using the problem’s actions to
search forward for a member of the set of goal states. (b) Backward (regression) search
through sets of relevant states, starting at the set of states representing the goal and using the
inverse of the actions to search backward for the initial state.

Chapter
10.
Classical Planning
action schema Buy(isbn) with effect Own(isbn). ISBNs are 10 digits, so this action schema
represents 10 billion ground actions. An uninformed forward-search algorithm would have
to start enumerating these 10 billion actions to ﬁnd one that leads to the goal.
Second, planning problems often have large state spaces. Consider an air cargo problem
with 10 airports, where each airport has 5 planes and 20 pieces of cargo. The goal is to move
all the cargo at airport A to airport B. There is a simple solution to the problem: load the 20
pieces of cargo into one of the planes at A, ﬂy the plane to B, and unload the cargo. Finding
the solution can be difﬁcult because the average branching factor is huge: each of the 50
planes can ﬂy to 9 other airports, and each of the 200 packages can be either unloaded (if
it is loaded) or loaded into any plane at its airport (if it is unloaded). So in any state there
is a minimum of 450 actions (when all the packages are at airports with no planes) and a
maximum of 10,450 (when all packages and planes are at the same airport). On average, let’s
say there are about 2000 possible actions per state, so the search graph up to the depth of the
obvious solution has about 200041 nodes.
Clearly, even this relatively small problem instance is hopeless without an accurate
heuristic. Although many real-world applications of planning have relied on domain-speciﬁc
heuristics, it turns out (as we see in Section 10.2.3) that strong domain-independent heuristics
can be derived automatically; that is what makes forward search feasible.
10.2.2
Backward (regression) relevant-states search
In regression search we start at the goal and apply the actions backward until we ﬁnd a
sequence of steps that reaches the initial state. It is called relevant-states search because we
RELEVANT-STATES
only consider actions that are relevant to the goal (or current state). As in belief-state search
(Section 4.4), there is a set of relevant states to consider at each step, not just a single state.
We start with the goal, which is a conjunction of literals forming a description of a set of
states—for example, the goal ¬Poor ∧Famous describes those states in which Poor is false,
Famous is true, and any other ﬂuent can have any value. If there are n ground ﬂuents in a
domain, then there are 2n ground states (each ﬂuent can be true or false), but 3n descriptions
of sets of goal states (each ﬂuent can be positive, negative, or not mentioned).
In general, backward search works only when we know how to regress from a state
description to the predecessor state description. For example, it is hard to search backwards
for a solution to the n-queens problem because there is no easy way to describe the states that
are one move away from the goal. Happily, the PDDL representation was designed to make
it easy to regress actions—if a domain can be expressed in PDDL, then we can do regression
search on it. Given a ground goal description g and a ground action a, the regression from g
over a gives us a state description g′ deﬁned by
g′ = (g −ADD(a)) ∪Precond(a) .
That is, the effects that were added by the action need not have been true before, and also
the preconditions must have held before, or else the action could not have been executed.
Note that DEL(a) does not appear in the formula; that’s because while we know the ﬂuents
in DEL(a) are no longer true after the action, we don’t know whether or not they were true
before, so there’s nothing to be said about them.

Section 10.2.
Algorithms for Planning as State-Space Search

To get the full advantage of backward search, we need to deal with partially uninstanti-
ated actions and states, not just ground ones. For example, suppose the goal is to deliver a spe-
ciﬁc piece of cargo to SFO: At(C2, SFO). That suggests the action Unload(C2, p′, SFO):
Action(Unload(C2, p′, SFO),
PRECOND:In(C2, p′) ∧At(p′, SFO) ∧Cargo(C2) ∧Plane(p′) ∧Airport(SFO)
EFFECT:At(C2, SFO) ∧¬In(C2, p′) .
(Note that we have standardized variable names (changing p to p′ in this case) so that there
will be no confusion between variable names if we happen to use the same action schema
twice in a plan. The same approach was used in Chapter 9 for ﬁrst-order logical inference.)
This represents unloading the package from an unspeciﬁed plane at SFO; any plane will do,
but we need not say which one now. We can take advantage of the power of ﬁrst-order
representations: a single description summarizes the possibility of using any of the planes by
implicitly quantifying over p′. The regressed state description is
g′ = In(C2, p′) ∧At(p′, SFO) ∧Cargo(C2) ∧Plane(p′) ∧Airport(SFO) .
The ﬁnal issue is deciding which actions are candidates to regress over. In the forward direc-
tion we chose actions that were applicable—those actions that could be the next step in the
plan. In backward search we want actions that are relevant—those actions that could be the
RELEVANCE
last step in a plan leading up to the current goal state.
For an action to be relevant to a goal it obviously must contribute to the goal: at least
one of the action’s effects (either positive or negative) must unify with an element of the goal.
What is less obvious is that the action must not have any effect (positive or negative) that
negates an element of the goal. Now, if the goal is A ∧B ∧C and an action has the effect
A∧B∧¬C then there is a colloquial sense in which that action is very relevant to the goal—it
gets us two-thirds of the way there. But it is not relevant in the technical sense deﬁned here,
because this action could not be the ﬁnal step of a solution—we would always need at least
one more step to achieve C.
Given the goal At(C2, SFO), several instantiations of Unload are relevant: we could
chose any speciﬁc plane to unload from, or we could leave the plane unspeciﬁed by using
the action Unload(C2, p′, SFO). We can reduce the branching factor without ruling out any
solutions by always using the action formed by substituting the most general uniﬁer into the
(standardized) action schema.
As another example, consider the goal Own(0136042597), given an initial state with
10 billion ISBNs, and the single action schema
A = Action(Buy(i), PRECOND:ISBN (i), EFFECT:Own(i)) .
As we mentioned before, forward search without a heuristic would have to start enumer-
ating the 10 billion ground Buy actions. But with backward search, we would unify the
goal Own(0136042597) with the (standardized) effect Own(i′), yielding the substitution
θ = {i′/0136042597}. Then we would regress over the action Subst(θ, A′) to yield the
predecessor state description ISBN (0136042597). This is part of, and thus entailed by, the
initial state, so we are done.

Chapter
10.
Classical Planning
We can make this more formal. Assume a goal description g which contains a goal
literal gi and an action schema A that is standardized to produce A′. If A′ has an effect literal
e′
j where Unify(gi, e′
j) = θ and where we deﬁne a′ = SUBST(θ, A′) and if there is no effect
in a′ that is the negation of a literal in g, then a′ is a relevant action towards g.
Backward search keeps the branching factor lower than forward search, for most prob-
lem domains. However, the fact that backward search uses state sets rather than individual
states makes it harder to come up with good heuristics. That is the main reason why the
majority of current systems favor forward search.
10.2.3
Heuristics for planning
Neither forward nor backward search is efﬁcient without a good heuristic function. Recall
from Chapter 3 that a heuristic function h(s) estimates the distance from a state s to the
goal and that if we can derive an admissible heuristic for this distance—one that does not
overestimate—then we can use A∗search to ﬁnd optimal solutions. An admissible heuristic
can be derived by deﬁning a relaxed problem that is easier to solve. The exact cost of a
solution to this easier problem then becomes the heuristic for the original problem.
By deﬁnition, there is no way to analyze an atomic state, and thus it it requires some
ingenuity by a human analyst to deﬁne good domain-speciﬁc heuristics for search problems
with atomic states. Planning uses a factored representation for states and action schemas.
That makes it possible to deﬁne good domain-independent heuristics and for programs to
automatically apply a good domain-independent heuristic for a given problem.
Think of a search problem as a graph where the nodes are states and the edges are
actions. The problem is to ﬁnd a path connecting the initial state to a goal state. There are
two ways we can relax this problem to make it easier: by adding more edges to the graph,
making it strictly easier to ﬁnd a path, or by grouping multiple nodes together, forming an
abstraction of the state space that has fewer states, and thus is easier to search.
We look ﬁrst at heuristics that add edges to the graph. For example, the ignore pre-
conditions heuristic drops all preconditions from actions. Every action becomes applicable
IGNORE
PRECONDITIONS
HEURISTIC
in every state, and any single goal ﬂuent can be achieved in one step (if there is an applica-
ble action—if not, the problem is impossible). This almost implies that the number of steps
required to solve the relaxed problem is the number of unsatisﬁed goals—almost but not
quite, because (1) some action may achieve multiple goals and (2) some actions may undo
the effects of others. For many problems an accurate heuristic is obtained by considering (1)
and ignoring (2). First, we relax the actions by removing all preconditions and all effects
except those that are literals in the goal. Then, we count the minimum number of actions
required such that the union of those actions’ effects satisﬁes the goal. This is an instance
of the set-cover problem. There is one minor irritation: the set-cover problem is NP-hard.
SET-COVER
PROBLEM
Fortunately a simple greedy algorithm is guaranteed to return a set covering whose size is
within a factor of log n of the true minimum covering, where n is the number of literals in
the goal. Unfortunately, the greedy algorithm loses the guarantee of admissibility.
It is also possible to ignore only selected preconditions of actions. Consider the sliding-
block puzzle (8-puzzle or 15-puzzle) from Section 3.2. We could encode this as a planning

Section 10.2.
Algorithms for Planning as State-Space Search

problem involving tiles with a single schema Slide:
Action(Slide(t, s1, s2),
PRECOND:On(t, s1) ∧Tile(t) ∧Blank(s2) ∧Adjacent(s1, s2)
EFFECT:On(t, s2) ∧Blank(s1) ∧¬On(t, s1) ∧¬Blank(s2))
As we saw in Section 3.6, if we remove the preconditions Blank(s2) ∧Adjacent(s1, s2)
then any tile can move in one action to any space and we get the number-of-misplaced-tiles
heuristic. If we remove Blank(s2) then we get the Manhattan-distance heuristic. It is easy to
see how these heuristics could be derived automatically from the action schema description.
The ease of manipulating the schemas is the great advantage of the factored representation of
planning problems, as compared with the atomic representation of search problems.
Another possibility is the ignore delete lists heuristic. Assume for a moment that all
IGNORE DELETE
LISTS
goals and preconditions contain only positive literals3 We want to create a relaxed version of
the original problem that will be easier to solve, and where the length of the solution will serve
as a good heuristic. We can do that by removing the delete lists from all actions (i.e., removing
all negative literals from effects). That makes it possible to make monotonic progress towards
the goal—no action will ever undo progress made by another action. It turns out it is still NP-
hard to ﬁnd the optimal solution to this relaxed problem, but an approximate solution can be
found in polynomial time by hill-climbing. Figure 10.6 diagrams part of the state space for
two planning problems using the ignore-delete-lists heuristic. The dots represent states and
the edges actions, and the height of each dot above the bottom plane represents the heuristic
value. States on the bottom plane are solutions. In both these problems, there is a wide path
to the goal. There are no dead ends, so no need for backtracking; a simple hillclimbing search
will easily ﬁnd a solution to these problems (although it may not be an optimal solution).
The relaxed problems leave us with a simpliﬁed—but still expensive—planning prob-
lem just to calculate the value of the heuristic function. Many planning problems have 10100
states or more, and relaxing the actions does nothing to reduce the number of states. There-
fore, we now look at relaxations that decrease the number of states by forming a state ab-
straction—a many-to-one mapping from states in the ground representation of the problem
STATE ABSTRACTION
to the abstract representation.
The easiest form of state abstraction is to ignore some ﬂuents. For example, consider
an air cargo problem with 10 airports, 50 planes, and 200 pieces of cargo. Each plane can
be at one of 10 airports and each package can be either in one of the planes or unloaded at
one of the airports. So there are 5010 × 20050+10 ≈10155 states. Now consider a particular
problem in that domain in which it happens that all the packages are at just 5 of the airports,
and all packages at a given airport have the same destination. Then a useful abstraction of the
problem is to drop all the At ﬂuents except for the ones involving one plane and one package
at each of the 5 airports. Now there are only 510 × 55+10 ≈1017 states. A solution in this
abstract state space will be shorter than a solution in the original space (and thus will be an
admissible heuristic), and the abstract solution is easy to extend to a solution to the original
problem (by adding additional Load and Unload actions).
3 Many problems are written with this convention. For problems that aren’t, replace every negative literal ¬P
in a goal or precondition with a new positive literal, P ′.

Chapter
10.
Classical Planning
Figure 10.6
Two state spaces from planning problems with the ignore-delete-lists heuris-
tic. The height above the bottom plane is the heuristic score of a state; states on the bottom
plane are goals. There are no local minima, so search for the goal is straightforward. From
Hoffmann (2005).
A key idea in deﬁning heuristics is decomposition: dividing a problem into parts, solv-
DECOMPOSITION
ing each part independently, and then combining the parts. The subgoal independence as-
SUBGOAL
INDEPENDENCE
sumption is that the cost of solving a conjunction of subgoals is approximated by the sum
of the costs of solving each subgoal independently. The subgoal independence assumption
can be optimistic or pessimistic. It is optimistic when there are negative interactions between
the subplans for each subgoal—for example, when an action in one subplan deletes a goal
achieved by another subplan. It is pessimistic, and therefore inadmissible, when subplans
contain redundant actions—for instance, two actions that could be replaced by a single action
in the merged plan.
Suppose the goal is a set of ﬂuents G, which we divide into disjoint subsets G1, . . . , Gn.
We then ﬁnd plans P1, . . . , Pn that solve the respective subgoals. What is an estimate of the
cost of the plan for achieving all of G? We can think of each Cost(Pi) as a heuristic estimate,
and we know that if we combine estimates by taking their maximum value, we always get an
admissible heuristic. So maxi COST(Pi) is admissible, and sometimes it is exactly correct:
it could be that P1 serendipitously achieves all the Gi. But in most cases, in practice the
estimate is too low. Could we sum the costs instead? For many problems that is a reasonable
estimate, but it is not admissible. The best case is when we can determine that Gi and Gj are
independent. If the effects of Pi leave all the preconditions and goals of Pj unchanged, then
the estimate COST(Pi) + COST(Pj) is admissible, and more accurate than the max estimate.
We show in Section 10.3.1 that planning graphs can help provide better heuristic estimates.
It is clear that there is great potential for cutting down the search space by forming ab-
stractions. The trick is choosing the right abstractions and using them in a way that makes
the total cost—deﬁning an abstraction, doing an abstract search, and mapping the abstraction
back to the original problem—less than the cost of solving the original problem. The tech-

Section 10.3.
Planning Graphs

niques of pattern databases from Section 3.6.3 can be useful, because the cost of creating
the pattern database can be amortized over multiple problem instances.
An example of a system that makes use of effective heuristics is FF, or FASTFORWARD
(Hoffmann, 2005), a forward state-space searcher that uses the ignore-delete-lists heuristic,
estimating the heuristic with the help of a planning graph (see Section 10.3). FF then uses
hill-climbing search (modiﬁed to keep track of the plan) with the heuristic to ﬁnd a solution.
When it hits a plateau or local maximum—when no action leads to a state with better heuristic
score—then FF uses iterative deepening search until it ﬁnds a state that is better, or it gives
up and restarts hill-climbing.
10.3
PLANNING GRAPHS
All of the heuristics we have suggested can suffer from inaccuracies. This section shows
how a special data structure called a planning graph can be used to give better heuristic
PLANNING GRAPH
estimates. These heuristics can be applied to any of the search techniques we have seen so
far. Alternatively, we can search for a solution over the space formed by the planning graph,
using an algorithm called GRAPHPLAN.
A planning problem asks if we can reach a goal state from the initial state. Suppose we
are given a tree of all possible actions from the initial state to successor states, and their suc-
cessors, and so on. If we indexed this tree appropriately, we could answer the planning ques-
tion “can we reach state G from state S0” immediately, just by looking it up. Of course, the
tree is of exponential size, so this approach is impractical. A planning graph is polynomial-
size approximation to this tree that can be constructed quickly. The planning graph can’t
answer deﬁnitively whether G is reachable from S0, but it can estimate how many steps it
takes to reach G. The estimate is always correct when it reports the goal is not reachable, and
it never overestimates the number of steps, so it is an admissible heuristic.
A planning graph is a directed graph organized into levels: ﬁrst a level S0 for the initial
LEVEL
state, consisting of nodes representing each ﬂuent that holds in S0; then a level A0 consisting
of nodes for each ground action that might be applicable in S0; then alternating levels Si
followed by Ai; until we reach a termination condition (to be discussed later).
Roughly speaking, Si contains all the literals that could hold at time i, depending on
the actions executed at preceding time steps. If it is possible that either P or ¬P could hold,
then both will be represented in Si. Also roughly speaking, Ai contains all the actions that
could have their preconditions satisﬁed at time i. We say “roughly speaking” because the
planning graph records only a restricted subset of the possible negative interactions among
actions; therefore, a literal might show up at level Sj when actually it could not be true until
a later level, if at all. (A literal will never show up too late.) Despite the possible error, the
level j at which a literal ﬁrst appears is a good estimate of how difﬁcult it is to achieve the
literal from the initial state.
Planning graphs work only for propositional planning problems—ones with no vari-
ables. As we mentioned on page 368, it is straightforward to propositionalize a set of ac-

Chapter
10.
Classical Planning
Init(Have(Cake))
Goal(Have(Cake) ∧Eaten(Cake))
Action(Eat(Cake)
PRECOND: Have(Cake)
EFFECT: ¬ Have(Cake) ∧Eaten(Cake))
Action(Bake(Cake)
PRECOND: ¬ Have(Cake)
EFFECT: Have(Cake))
Figure 10.7
The “have cake and eat cake too” problem.
Bake(Cake)
Eat(Cake)
Have(Cake)
S0
A0
S1
A1
S2
Have(Cake)
Have(Cake)
Have(Cake)
Have(Cake)
Eaten(Cake)
Eaten(Cake)
Eaten(Cake)
Eaten(Cake)
Eaten(Cake)
Eat(Cake)
¬
¬
¬
¬
¬
Figure 10.8
The planning graph for the “have cake and eat cake too” problem up to level
S2. Rectangles indicate actions (small squares indicate persistence actions), and straight
lines indicate preconditions and effects. Mutex links are shown as curved gray lines. Not all
mutex links are shown, because the graph would be too cluttered. In general, if two literals
are mutex at Si, then the persistence actions for those literals will be mutex at Ai and we
need not draw that mutex link.
tion schemas. Despite the resulting increase in the size of the problem description, planning
graphs have proved to be effective tools for solving hard planning problems.
Figure 10.7 shows a simple planning problem, and Figure 10.8 shows its planning
graph. Each action at level Ai is connected to its preconditions at Si and its effects at Si+1.
So a literal appears because an action caused it, but we also want to say that a literal can
persist if no action negates it. This is represented by a persistence action (sometimes called
PERSISTENCE
ACTION
a no-op). For every literal C, we add to the problem a persistence action with precondition C
and effect C. Level A0 in Figure 10.8 shows one “real” action, Eat(Cake), along with two
persistence actions drawn as small square boxes.
Level A0 contains all the actions that could occur in state S0, but just as important it
records conﬂicts between actions that would prevent them from occurring together. The gray
lines in Figure 10.8 indicate mutual exclusion (or mutex) links. For example, Eat(Cake) is
MUTUAL EXCLUSION
MUTEX
mutually exclusive with the persistence of either Have(Cake) or ¬Eaten(Cake). We shall
see shortly how mutex links are computed.
Level S1 contains all the literals that could result from picking any subset of the actions
in A0, as well as mutex links (gray lines) indicating literals that could not appear together,
regardless of the choice of actions. For example, Have(Cake) and Eaten(Cake) are mutex:

Section 10.3.
Planning Graphs

depending on the choice of actions in A0, either, but not both, could be the result. In other
words, S1 represents a belief state: a set of possible states. The members of this set are all
subsets of the literals such that there is no mutex link between any members of the subset.
We continue in this way, alternating between state level Si and action level Ai until we
reach a point where two consecutive levels are identical. At this point, we say that the graph
has leveled off. The graph in Figure 10.8 levels off at S2.
LEVELED OFF
What we end up with is a structure where every Ai level contains all the actions that are
applicable in Si, along with constraints saying that two actions cannot both be executed at the
same level. Every Si level contains all the literals that could result from any possible choice
of actions in Ai−1, along with constraints saying which pairs of literals are not possible.
It is important to note that the process of constructing the planning graph does not require
choosing among actions, which would entail combinatorial search. Instead, it just records the
impossibility of certain choices using mutex links.
We now deﬁne mutex links for both actions and literals. A mutex relation holds between
two actions at a given level if any of the following three conditions holds:
• Inconsistent effects: one action negates an effect of the other. For example, Eat(Cake)
and the persistence of Have(Cake) have inconsistent effects because they disagree on
the effect Have(Cake).
• Interference: one of the effects of one action is the negation of a precondition of the
other. For example Eat(Cake) interferes with the persistence of Have(Cake) by negat-
ing its precondition.
• Competing needs: one of the preconditions of one action is mutually exclusive with a
precondition of the other. For example, Bake(Cake) and Eat(Cake) are mutex because
they compete on the value of the Have(Cake) precondition.
A mutex relation holds between two literals at the same level if one is the negation of the other
or if each possible pair of actions that could achieve the two literals is mutually exclusive.
This condition is called inconsistent support. For example, Have(Cake) and Eaten(Cake)
are mutex in S1 because the only way of achieving Have(Cake), the persistence action, is
mutex with the only way of achieving Eaten(Cake), namely Eat(Cake). In S2 the two
literals are not mutex, because there are new ways of achieving them, such as Bake(Cake)
and the persistence of Eaten(Cake), that are not mutex.
A planning graph is polynomial in the size of the planning problem. For a planning
problem with l literals and a actions, each Si has no more than l nodes and l2 mutex links,
and each Ai has no more than a + l nodes (including the no-ops), (a + l)2 mutex links, and
2(al + l) precondition and effect links. Thus, an entire graph with n levels has a size of
O(n(a + l)2). The time to build the graph has the same complexity.
10.3.1
Planning graphs for heuristic estimation
A planning graph, once constructed, is a rich source of information about the problem. First,
if any goal literal fails to appear in the ﬁnal level of the graph, then the problem is unsolvable.
Second, we can estimate the cost of achieving any goal literal gi from state s as the level at
which gi ﬁrst appears in the planning graph constructed from initial state s. We call this the

Chapter
10.
Classical Planning
level cost of gi. In Figure 10.8, Have(Cake) has level cost 0 and Eaten(Cake) has level cost
LEVEL COST
1. It is easy to show (Exercise 10.10) that these estimates are admissible for the individual
goals. The estimate might not always be accurate, however, because planning graphs allow
several actions at each level, whereas the heuristic counts just the level and not the number
of actions. For this reason, it is common to use a serial planning graph for computing
SERIAL PLANNING
GRAPH
heuristics. A serial graph insists that only one action can actually occur at any given time
step; this is done by adding mutex links between every pair of nonpersistence actions. Level
costs extracted from serial graphs are often quite reasonable estimates of actual costs.
To estimate the cost of a conjunction of goals, there are three simple approaches. The
max-level heuristic simply takes the maximum level cost of any of the goals; this is admissi-
MAX-LEVEL
ble, but not necessarily accurate.
The level sum heuristic, following the subgoal independence assumption, returns the
LEVEL SUM
sum of the level costs of the goals; this can be inadmissible but works well in practice
for problems that are largely decomposable. It is much more accurate than the number-
of-unsatisﬁed-goals heuristic from Section 10.2. For our problem, the level-sum heuristic
estimate for the conjunctive goal Have(Cake) ∧Eaten(Cake) will be 0 + 1 = 1, whereas
the correct answer is 2, achieved by the plan [Eat(Cake), Bake(Cake)]. That doesn’t seem
so bad. A more serious error is that if Bake(Cake) were not in the set of actions, then the
estimate would still be 1, when in fact the conjunctive goal would be impossible.
Finally, the set-level heuristic ﬁnds the level at which all the literals in the conjunctive
SET-LEVEL
goal appear in the planning graph without any pair of them being mutually exclusive. This
heuristic gives the correct values of 2 for our original problem and inﬁnity for the problem
without Bake(Cake). It is admissible, it dominates the max-level heuristic, and it works
extremely well on tasks in which there is a good deal of interaction among subplans. It is not
perfect, of course; for example, it ignores interactions among three or more literals.
As a tool for generating accurate heuristics, we can view the planning graph as a relaxed
problem that is efﬁciently solvable. To understand the nature of the relaxed problem, we
need to understand exactly what it means for a literal g to appear at level Si in the planning
graph. Ideally, we would like it to be a guarantee that there exists a plan with i action levels
that achieves g, and also that if g does not appear, there is no such plan. Unfortunately,
making that guarantee is as difﬁcult as solving the original planning problem. So the planning
graph makes the second half of the guarantee (if g does not appear, there is no plan), but
if g does appear, then all the planning graph promises is that there is a plan that possibly
achieves g and has no “obvious” ﬂaws. An obvious ﬂaw is deﬁned as a ﬂaw that can be
detected by considering two actions or two literals at a time—in other words, by looking at
the mutex relations. There could be more subtle ﬂaws involving three, four, or more actions,
but experience has shown that it is not worth the computational effort to keep track of these
possible ﬂaws. This is similar to a lesson learned from constraint satisfaction problems—that
it is often worthwhile to compute 2-consistency before searching for a solution, but less often
worthwhile to compute 3-consistency or higher. (See page 211.)
One example of an unsolvable problem that cannot be recognized as such by a planning
graph is the blocks-world problem where the goal is to get block A on B, B on C, and C on
A. This is an impossible goal; a tower with the bottom on top of the top. But a planning graph

Section 10.3.
Planning Graphs

cannot detect the impossibility, because any two of the three subgoals are achievable. There
are no mutexes between any pair of literals, only between the three as a whole. To detect that
this problem is impossible, we would have to search over the planning graph.
10.3.2
The GRAPHPLAN algorithm
This subsection shows how to extract a plan directly from the planning graph, rather than just
using the graph to provide a heuristic. The GRAPHPLAN algorithm (Figure 10.9) repeatedly
adds a level to a planning graph with EXPAND-GRAPH. Once all the goals show up as non-
mutex in the graph, GRAPHPLAN calls EXTRACT-SOLUTION to search for a plan that solves
the problem. If that fails, it expands another level and tries again, terminating with failure
when there is no reason to go on.
function GRAPHPLAN(problem) returns solution or failure
graph ←INITIAL-PLANNING-GRAPH(problem)
goals ←CONJUNCTS(problem.GOAL)
nogoods ←an empty hash table
for tl = 0 to ∞do
if goals all non-mutex in St of graph then
solution ←EXTRACT-SOLUTION(graph, goals, NUMLEVELS(graph), nogoods)
if solution̸ = failure then return solution
if graph and nogoods have both leveled off then return failure
graph ←EXPAND-GRAPH(graph, problem)
Figure 10.9
The GRAPHPLAN algorithm. GRAPHPLAN calls EXPAND-GRAPH to add a
level until either a solution is found by EXTRACT-SOLUTION, or no solution is possible.
Let us now trace the operation of GRAPHPLAN on the spare tire problem from page 370.
The graph is shown in Figure 10.10. The ﬁrst line of GRAPHPLAN initializes the planning
graph to a one-level (S0) graph representing the initial state. The positive ﬂuents from the
problem description’s initial state are shown, as are the relevant negative ﬂuents. Not shown
are the unchanging positive literals (such as Tire(Spare)) and the irrelevant negative literals.
The goal At(Spare, Axle) is not present in S0, so we need not call EXTRACT-SOLUTION—
we are certain that there is no solution yet. Instead, EXPAND-GRAPH adds into A0 the three
actions whose preconditions exist at level S0 (i.e., all the actions except PutOn(Spare, Axle)),
along with persistence actions for all the literals in S0. The effects of the actions are added at
level S1. EXPAND-GRAPH then looks for mutex relations and adds them to the graph.
At(Spare, Axle) is still not present in S1, so again we do not call EXTRACT-SOLUTION.
We call EXPAND-GRAPH again, adding A1 and S1 and giving us the planning graph shown
in Figure 10.10. Now that we have the full complement of actions, it is worthwhile to look at
some of the examples of mutex relations and their causes:
• Inconsistent effects: Remove(Spare, Trunk) is mutex with LeaveOvernight because
one has the effect At(Spare, Ground) and the other has its negation.

Chapter
10.
Classical Planning
S0
A1
S2
At(Spare,Trunk)
At(Spare,Trunk)
At(Flat,Axle)
At(Flat,Axle)
At(Spare,Axle)
At(Flat,Ground)
At(Flat,Ground)
At(Spare,Ground)
At(Spare,Ground)
At(Spare,Trunk)
At(Spare,Trunk)
At(Flat,Axle)
At(Flat,Axle)
At(Spare,Axle)
At(Flat,Ground)
At(Flat,Ground)
At(Spare,Ground)
At(Spare,Ground)
At(Spare,Axle)
At(Spare,Trunk)
At(Flat,Axle)
At(Spare,Axle)
At(Flat,Ground)
At(Spare,Ground)
PutOn(Spare,Axle)
LeaveOvernight
Remove(Flat,Axle)
Remove(Spare,Trunk)
Remove(Spare,Trunk)
Remove(Flat,Axle)
LeaveOvernight
¬
¬
¬
¬
¬
¬
¬
¬
¬
¬
¬
¬
¬
A0
S1
Figure 10.10
The planning graph for the spare tire problem after expansion to level S2.
Mutex links are shown as gray lines. Not all links are shown, because the graph would be too
cluttered if we showed them all. The solution is indicated by bold lines and outlines.
• Interference: Remove(Flat, Axle) is mutex with LeaveOvernight because one has the
precondition At(Flat, Axle) and the other has its negation as an effect.
• Competing needs: PutOn(Spare, Axle) is mutex with Remove(Flat, Axle) because
one has At(Flat, Axle) as a precondition and the other has its negation.
• Inconsistent support: At(Spare, Axle) is mutex with At(Flat, Axle) in S2 because the
only way of achieving At(Spare, Axle) is by PutOn(Spare, Axle), and that is mutex
with the persistence action that is the only way of achieving At(Flat, Axle). Thus, the
mutex relations detect the immediate conﬂict that arises from trying to put two objects
in the same place at the same time.
This time, when we go back to the start of the loop, all the literals from the goal are present
in S2, and none of them is mutex with any other. That means that a solution might exist,
and EXTRACT-SOLUTION will try to ﬁnd it. We can formulate EXTRACT-SOLUTION as a
Boolean constraint satisfaction problem (CSP) where the variables are the actions at each
level, the values for each variable are in or out of the plan, and the constraints are the mutexes
and the need to satisfy each goal and precondition.
Alternatively, we can deﬁne EXTRACT-SOLUTION as a backward search problem, where
each state in the search contains a pointer to a level in the planning graph and a set of unsat-
isﬁed goals. We deﬁne this search problem as follows:
• The initial state is the last level of the planning graph, Sn, along with the set of goals
from the planning problem.
• The actions available in a state at level Si are to select any conﬂict-free subset of the
actions in Ai−1 whose effects cover the goals in the state. The resulting state has level
Si−1 and has as its set of goals the preconditions for the selected set of actions. By
“conﬂict free,” we mean a set of actions such that no two of them are mutex and no two
of their preconditions are mutex.

Section 10.3.
Planning Graphs

• The goal is to reach a state at level S0 such that all the goals are satisﬁed.
• The cost of each action is 1.
For this particular problem, we start at S2 with the goal At(Spare, Axle). The only choice we
have for achieving the goal set is PutOn(Spare, Axle). That brings us to a search state at S1
with goals At(Spare, Ground) and ¬At(Flat, Axle). The former can be achieved only by
Remove(Spare, Trunk), and the latter by either Remove(Flat, Axle) or LeaveOvernight.
But LeaveOvernight is mutex with Remove(Spare, Trunk), so the only solution is to choose
Remove(Spare, Trunk) and Remove(Flat, Axle). That brings us to a search state at S0 with
the goals At(Spare, Trunk) and At(Flat, Axle). Both of these are present in the state, so
we have a solution: the actions Remove(Spare, Trunk) and Remove(Flat, Axle) in level
A0, followed by PutOn(Spare, Axle) in A1.
In the case where EXTRACT-SOLUTION fails to ﬁnd a solution for a set of goals at
a given level, we record the (level, goals) pair as a no-good, just as we did in constraint
learning for CSPs (page 220). Whenever EXTRACT-SOLUTION is called again with the same
level and goals, we can ﬁnd the recorded no-good and immediately return failure rather than
searching again. We see shortly that no-goods are also used in the termination test.
We know that planning is PSPACE-complete and that constructing the planning graph
takes polynomial time, so it must be the case that solution extraction is intractable in the worst
case. Therefore, we will need some heuristic guidance for choosing among actions during the
backward search. One approach that works well in practice is a greedy algorithm based on
the level cost of the literals. For any set of goals, we proceed in the following order:
1. Pick ﬁrst the literal with the highest level cost.
2. To achieve that literal, prefer actions with easier preconditions. That is, choose an action
such that the sum (or maximum) of the level costs of its preconditions is smallest.
10.3.3
Termination of GRAPHPLAN
So far, we have skated over the question of termination. Here we show that GRAPHPLAN will
in fact terminate and return failure when there is no solution.
The ﬁrst thing to understand is why we can’t stop expanding the graph as soon as it has
leveled off. Consider an air cargo domain with one plane and n pieces of cargo at airport
A, all of which have airport B as their destination. In this version of the problem, only one
piece of cargo can ﬁt in the plane at a time. The graph will level off at level 4, reﬂecting the
fact that for any single piece of cargo, we can load it, ﬂy it, and unload it at the destination in
three steps. But that does not mean that a solution can be extracted from the graph at level 4;
in fact a solution will require 4n −1 steps: for each piece of cargo we load, ﬂy, and unload,
and for all but the last piece we need to ﬂy back to airport A to get the next piece.
How long do we have to keep expanding after the graph has leveled off? If the function
EXTRACT-SOLUTION fails to ﬁnd a solution, then there must have been at least one set of
goals that were not achievable and were marked as a no-good. So if it is possible that there
might be fewer no-goods in the next level, then we should continue. As soon as the graph
itself and the no-goods have both leveled off, with no solution found, we can terminate with
failure because there is no possibility of a subsequent change that could add a solution.

Chapter
10.
Classical Planning
Now all we have to do is prove that the graph and the no-goods will always level off. The
key to this proof is that certain properties of planning graphs are monotonically increasing or
decreasing. “X increases monotonically” means that the set of Xs at level i + 1 is a superset
(not necessarily proper) of the set at level i. The properties are as follows:
• Literals increase monotonically: Once a literal appears at a given level, it will appear
at all subsequent levels. This is because of the persistence actions; once a literal shows
up, persistence actions cause it to stay forever.
• Actions increase monotonically: Once an action appears at a given level, it will appear
at all subsequent levels. This is a consequence of the monotonic increase of literals; if
the preconditions of an action appear at one level, they will appear at subsequent levels,
and thus so will the action.
• Mutexes decrease monotonically: If two actions are mutex at a given level Ai, then they
will also be mutex for all previous levels at which they both appear. The same holds for
mutexes between literals. It might not always appear that way in the ﬁgures, because
the ﬁgures have a simpliﬁcation: they display neither literals that cannot hold at level
Si nor actions that cannot be executed at level Ai. We can see that “mutexes decrease
monotonically” is true if you consider that these invisible literals and actions are mutex
with everything.
The proof can be handled by cases: if actions A and B are mutex at level Ai, it
must be because of one of the three types of mutex. The ﬁrst two, inconsistent effects
and interference, are properties of the actions themselves, so if the actions are mutex
at Ai, they will be mutex at every level. The third case, competing needs, depends on
conditions at level Si: that level must contain a precondition of A that is mutex with
a precondition of B. Now, these two preconditions can be mutex if they are negations
of each other (in which case they would be mutex in every level) or if all actions for
achieving one are mutex with all actions for achieving the other. But we already know
that the available actions are increasing monotonically, so, by induction, the mutexes
must be decreasing.
• No-goods decrease monotonically: If a set of goals is not achievable at a given level,
then they are not achievable in any previous level. The proof is by contradiction: if they
were achievable at some previous level, then we could just add persistence actions to
make them achievable at a subsequent level.
Because the actions and literals increase monotonically and because there are only a ﬁnite
number of actions and literals, there must come a level that has the same number of actions
and literals as the previous level. Because mutexes and no-goods decrease, and because there
can never be fewer than zero mutexes or no-goods, there must come a level that has the
same number of mutexes and no-goods as the previous level. Once a graph has reached this
state, then if one of the goals is missing or is mutex with another goal, then we can stop the
GRAPHPLAN algorithm and return failure. That concludes a sketch of the proof; for more
details see Ghallab et al. (2004).

Section 10.4.
Other Classical Planning Approaches

Year
Track
Winning Systems (approaches)

Optimal
GAMER (model checking, bidirectional search)

Satisﬁcing
LAMA (fast downward search with FF heuristic)

Optimal
SATPLAN, MAXPLAN (Boolean satisﬁability)

Satisﬁcing
SGPLAN (forward search; partitions into independent subproblems)

Optimal
SATPLAN (Boolean satisﬁability)

Satisﬁcing
FAST DIAGONALLY DOWNWARD (forward search with causal graph)

Automated
LPG (local search, planning graphs converted to CSPs)

Hand-coded
TLPLAN (temporal action logic with control rules for forward search)

Automated
FF (forward search)

Hand-coded
TALPLANNER (temporal action logic with control rules for forward search)

Automated
IPP (planning graphs); HSP (forward search)
Figure 10.11
Some of the top-performing systems in the International Planning Compe-
tition. Each year there are various tracks: “Optimal” means the planners must produce the
shortest possible plan, while “Satisﬁcing” means nonoptimal solutions are accepted. “Hand-
coded” means domain-speciﬁc heuristics are allowed; “Automated” means they are not.
10.4
OTHER CLASSICAL PLANNING APPROACHES
Currently the most popular and effective approaches to fully automated planning are:
• Translating to a Boolean satisﬁability (SAT) problem
• Forward state-space search with carefully crafted heuristics (Section 10.2)
• Search using a planning graph (Section 10.3)
These three approaches are not the only ones tried in the 40-year history of automated plan-
ning. Figure 10.11 shows some of the top systems in the International Planning Competitions,
which have been held every even year since 1998. In this section we ﬁrst describe the transla-
tion to a satisﬁability problem and then describe three other inﬂuential approaches: planning
as ﬁrst-order logical deduction; as constraint satisfaction; and as plan reﬁnement.
10.4.1
Classical planning as Boolean satisﬁability
In Section 7.7.4 we saw how SATPLAN solves planning problems that are expressed in propo-
sitional logic. Here we show how to translate a PDDL description into a form that can be
processed by SATPLAN. The translation is a series of straightforward steps:
• Propositionalize the actions: replace each action schema with a set of ground actions
formed by substituting constants for each of the variables. These ground actions are not
part of the translation, but will be used in subsequent steps.
• Deﬁne the initial state: assert F 0 for every ﬂuent F in the problem’s initial state, and
¬F for every ﬂuent not mentioned in the initial state.
• Propositionalize the goal: for every variable in the goal, replace the literals that contain
the variable with a disjunction over constants. For example, the goal of having block A

---
