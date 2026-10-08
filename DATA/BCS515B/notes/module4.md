# BCS515B — Module 4

## DevOps Fundamentals

**Subject:** BCS515B (Cloud Computing and DevOps)
**Module:** Module 4
**Content type:** module_notes
**Sources:** BCS515B-module-4-pdf.txt

---

Module 4 
8.1 REPRESENTATION REVISITED 
Drawbacks of Procedural Languages  
• Programming languages (such as C++ or Java or Lisp) are by far the largest class of formal 
languages in common use. Programs themselves represent only computational processes. Data 
structures within programs can represent facts.  
• For example, a program could use a 4 × 4 array to represent the contents of the wumpus world. 
Thus, the programming language statement World*2,2+← Pit is a fairly natural way to assert that 
there is a pit in square [2,2].  
• What programming languages lack is any general mechanism for deriving facts from other facts; 
each update to a data structure is done by a domain-specific procedure whose details are derived by 
the programmer from his or her own knowledge of the domain.  
• A second drawback of is the lack the expressiveness required to handle partial information . For 
example data structures in programs lack the easy way to say, “There is a pit in *2,2+ or *3,1+” or 
“If the wumpus is in *1,1+ then he is not in *2,2+.”  
Advantages of Propositional Logic  
• The declarative nature of propositional logic, specify that knowledge and inference are separate, 
and inference is entirely domain-independent.  
• Propositional logic is a declarative language because its semantics is based on a truth relation 
between sentences and possible worlds. 
•  It also has sufficient expressive power to deal with partial information, using disjunction and 
negation.  
•  Propositional logic has a third COMPOSITIONALITY property that is desirable in representation 
languages, namely, compositionality. In a compositional language, the meaning of a sentence is a 
function of the meaning of its parts. For example, the meaning of “S1,4∧ S1,2” is related to the 
meanings of “S1,4” and “S1,2".  
Drawbacks of Propositional Logic  
• Propositional logic lacks the expressive power to concisely describe an environment with many 
objects.  
• For example, we were forced to write a separate rule about breezes and pits for each square, such 
as B1,1⇔ (P1,2 ∨ P2,1) . 
• In English, it seems easy enough to say, “Squares adjacent to pits are breezy.”  
• The syntax and semantics of English somehow make it possible to describe the environment 
concisely. 
8.1.1 The language of thought: 
The modern view of natural language is that it serves a as a medium for communication rather than pure 
representation. When a speaker points and says, “Look!” the listener comes to know that, say, Superman 
has finally appeared over the rooftops. Yet we would not want to say that the sentence “Look!” represents 
that fact. Rather, the meaning of the sentence depends both on the sentence itself and on the context in 
which the sentence was spoken. Natural languages also suffer from ambiguity, a problem for representation 
AMBIGUITY language. From the viewpoint of formal logic, representing the same knowledge in two 
different ways makes absolutely no difference; the same facts will be derivable from either representation. 
In practice, however, one representation might require fewer steps to derive a conclusion, meaning that a 

reasoner with limited resources could get to the conclusion using one representation but not the other. For 
nondeductive tasks such as learning from experience, outcomes are necessarily dependent on the form of 
the representations used. We show in Chapter 18 that when a learning program considers two possible 
theories of the world, both of which are consistent with all the data, the most common way of breaking the 
tie is to choose the most succinct theory—and that depends on the language used to represent theories. 
Thus, the influence of language on thought is unavoidable for any agent that does learning. 
8.1.2 Combining the best of formal and natural languages 
When we look at the syntax of natural language, the most obvious elements are nouns and noun phrases 
that refer to objects (squares, pits, wumpuses) and verbs and verb phrases that refer to relations among 
objects (is breezy, is adjacent to, shoots). Some of these relations are functions—relations in which there 
is only one “value” for a given “input.” It is easy to start listing examples of objects, relations, and functions, 
 
The language of first-order logic, whose syntax and semantics, is built around objects and relations. The 
primary difference between propositional and first-order logic lies in the ontological commitment made 
by each language—that is, what it assumes about the nature of reality. Mathematically, this commitment is 
expressed through the nature of the formal models with respect to which the truth of sentences is defined. 
Special-purpose logics make still further ontological commitments; for example, temporal logic assumes 
that facts hold at particular times and that those times (which may be points or intervals) are ordered. Thus, 
special-purpose logics give certain kinds of objects (and the axioms about them) “first class” status within 
the logic, rather than simply defining them within the knowledge base. Higher-order logic views the 
relations and functions referred to by first-order logic as objects in themselves. This allows one to make 
assertions about all relations.  
A logic can also be characterized by its epistemological commitments—the possible states of knowledge 
that it allows with respect to each fact. In both propositional and first order logic, a sentence represents a 
fact and the agent either believes the sentence to be true, believes it to be false, or has no opinion. These 
logics therefore have three possible states of knowledge regarding any sentence. Systems using probability 
theory, on the other hand, can have any degree of belief, ranging from 0 (total disbelief) to 1 (total belief). 
The ontological and epistemological commitments of five different logics are summarized in Figure 8.1. 
 
 
 

8.2 SYNTAX AND SEMANTICS OF FIRST-ORDER LOGIC 
8.2.1 Models for first-order logic:  
The models of a logical language are the formal structures that constitute the possible worlds under 
consideration. Each model links the vocabulary of the logical sentences to elements of the possible world, 
so that the truth of any sentence can be determined. Thus, models for propositional logic link proposition 
symbols to predefined truth values. Models for first-order logic have objects. The domain of a model is the 
set of objects or domain elements it contains. The domain is required to be nonempty—every possible world 
must contain at least one object.  
A relation is just the set of tuples of objects that are related.  
• Unary Relation: Relations relates to single Object. 
• Binary Relation: Relation Relates to multiple objects Certain kinds of relationships are best 
considered as functions, in that a given object must be related to exactly one object.  
For Example:  
Richard the Lionheart, King of England from 1189 to 1199; His younger brother, the evil King John, who 
ruled from 1199 to 1215; the left legs of Richard and John; crown Unary Relation: John is a king Binary 
Relation : crown is on head of john , Richard is brother ofjohn The unary "left leg" function includes the 
following mappings:  
(Richard the Lionheart) ->Richard's left leg (King John) ->Johns left Leg 
 
 
8.2.2 Symbols and interpretations  
Symbols are the basic syntactic elements of first-order logic. Symbols stand for objects, relations, and 
functions.  
The symbols are of three kinds:  

• Constant symbols which stand for objects; Example: John, Richard  
• Predicate symbols, which stand for relations; Example: On Head, Person, King, and Crown  
• Function symbols, which stand for functions. Example: left leg  
Symbols will begin with uppercase letters.  
Interpretation The semantics must relate sentences to models in order to determine truth. For this to happen, 
we need an interpretation that specifies exactly which objects, relations and functions are referred to by the 
constant, predicate, and function symbols.  
For Example:  
• Richard refers to Richard the Lionheart and John refers to the evil king John.  
• Brother refers to the brotherhood relation  
• On Head refers to the "on head relation that holds between the crown and King John;  
• Person, King, and Crown refer to the sets of objects that are persons, kings, and crowns. 
• Left Leg refers to the "left leg" function,  
The truth of any sentence is determined by a model and an interpretation for the sentence's symbols. 
Therefore, entailment, validity, and so on are defined in terms of all possible models and all possible 
interpretations. The number of domain elements in each model may be unbounded-for example, the domain 
elements may be integers or real numbers. Hence, the number of possible models is an bounded, as is the 
number of interpretations.  
 

8.2.3 Term: 
A term is a logical expression that refers to an object. Constant symbols are therefore terms. Complex Terms 
A complex term is just a complicated kind of name. A complex term is formed by a function symbol 
followed by a parenthesized list of terms as arguments to the function symbol For example: "King John's 
left leg" Instead of using a constant symbol, we use LeftLeg(John). The formal semantics of terms:  
Consider a term f (tl,. . . , t,). The function symbol frefers to some function in the model (F); the argument 
terms refer to objects in the domain (call them d1….dn); and the term as a whole refers to the object that is 
the value of the function Fapplied to dl, . . . , d,.  
For example,: the LeftLeg function symbol refers to the function “ (King John) -+ John's left leg” and John 
refers to King John, then LeftLeg(John) refers to King John's left leg. In this way, the interpretation fixes 
the referent of every term.  
8.2.4 Atomic sentences  
An atomic sentence is formed from a predicate symbol followed by a parenthesized list of terms: For 
Example: Brother(Richard, John).  
Atomic sentences can have complex terms as arguments. For Example: Married (Father(Richard), Mother( 
John)).  
An atomic sentence is true in a given model, under a given interpretation, if the relation referred to by the 
predicate symbol holds among the objects referred to by the arguments  
8.2.5 Complex sentences  
Complex sentences can be constructed using logical Connectives, just as in propositional calculus. For 
Example: 
 
Thus, the sentence says, ―For all x, if x is a king, then x is a person.‖ The symbol x is called a variable. 
Variables are lowercase letters. A variable is a term all by itself, and can also serve as the argument of a 
function A term with no variables is called a ground term.  

Assume we can extend the interpretation in different ways: x→ Richard the Lionheart, x→ King John, x→ 
Richard’s left leg, x→ John’s left leg, x→ the crown  
The universally quantified sentence ∀x King(x) ⇒Person(x) is true in the original model if the sentence 
King(x) ⇒Person(x) is true under each of the five extended interpretations. That is, the universally 
quantified sentence is equivalent to asserting the following five sentences:  
Richard the Lionheart is a king ⇒Richard the Lionheart is a person. King John is a king ⇒King John is a 
person. Richard’s left leg is a king ⇒Richard’s left leg is a person. John’s left leg is a king ⇒John’s left leg 
is a person. The crown is a king ⇒the crown is a person. 
Existential quantification (∃)  
Universal quantification makes statements about every object. Similarly, we can make a statement about 
some object in the universe without naming it, by using an existential quantifier. 
“The sentence ∃x P says that P is true for at least one object x. More precisely, ∃x P is true in a given model 
if P is true in at least one extended interpretation that assigns x to a domain element.” ∃x is pronounced 
“There exists an x such that . . .” or “For some x . . .”.  
For example, that King John has a crown on his head, we write ∃xCrown(x) ∧OnHead(x, John)  
Given assertions:  
Richard the Lionheart is a crown ∧Richard the Lionheart is on John’s head; King John is a crown ∧King 
John is on John’s head; Richard’s left leg is a crown ∧Richard’s left leg is on John’s head; John’s left leg is 
a crown ∧John’s left leg is on John’s head; The crown is a crown ∧the crown is on John’s head. The fifth 
assertion is true in the model, so the original existentially quantified sentence is true in the model. Just as 
⇒appears to be the natural connective to use with ∀, ∧is the natural connective to use with ∃.  
Nested quantifiers  
One can express more complex sentences using multiple quantifiers.  
For example, “Brothers are siblings” can be written as ∀x∀y Brother (x, y) ⇒Sibling(x, y). Consecutive 
quantifiers of the same type can be written as one quantifier with several variables.  
For example, to say that siblinghood is a symmetric relationship,  
we can write∀x, y Sibling(x, y) ⇔Sibling(y, x).  
In other cases we will have mixtures. For example: 1. “Everybody loves somebody” means that for every 
person, there is someone that person loves: ∀x∃y Loves(x, y) . 2. On the other hand, to say “There is 
someone who is loved by everyone,” we write ∃y∀x Loves(x, y) .  
Connections between ∀and ∃  
Universal and Existential quantifiers are actually intimately connected with each other, through negation. 
Example assertions: 1. “ Everyone dislikes medicine” is the same as asserting “ there does not exist someone 
who likes medicine” , and vice versa: “∀x ￢Likes(x, medicine)” is equivalent to “￢∃x Likes(x, 
medicine)”. 2. “Everyone likes ice cream” means that “ there is no one who does not like ice cream” : 
∀xLikes(x, IceCream) is equivalent to ￢∃x ￢Likes(x, IceCream) .  

 
8.2.7 Equality  
First-order logic includes one more way to make atomic sentences, other than using a predicate and terms. 
We can use the equality symbol to signify that two terms refer to the same object.  
For example,  
“Father (John) =Henry” says that the object referred to by Father (John) and the object referred to by Henry 
are the same.  
Because an interpretation fixes the referent of any term, determining the truth of an equality sentence is 
simply a matter of seeing that the referents of the two terms are the same object.The equality symbol can 
be used to state facts about a given function. It can also be used with negation to insist that two terms are 
not the same object.  
For example,  
“Richard has at least two brothers” can be written as, ∃x, y Brother (x,Richard ) ∧Brother (y,Richard ) ∧￢
(x=y) The sentence  ∃x, y Brother (x,Richard ) ∧Brother (y,Richard ) does not have the intended meaning. 
In particular, it is true only in the model where Richard has only one brother considering the extended 
interpretation in which both x and y are assigned to King John. The addition of ￢(x=y) rules out such 
models. 
8.3 USING FIRST-ORDER LOGIC 
8.3.1 Assertions and queries in first-order logic 
Assertions:  
Sentences are added to a knowledge base using TELL, exactly as in propositional logic. Such sentences are 
called assertions.  
For example,  
John is a king, TELL (KB, King (John)). Richard is a person. TELL (KB, Person (Richard)). All kings are 
persons: TELL (KB, ∀x King(x) ⇒Person(x)).  
Asking Queries:  
We can ask questions of the knowledge base using ASK. Questions asked with ASK are called queries or 
goals. 
For example,  
ASK (KB, King (John)) returns true. Any query that is logically entailed by the knowledge base should be 
answered affirmatively.  

For example, given the two preceding assertions, the query:  
“ASK (KB, Person (John))” should also return true.  
Substitution or binding list  We can ask quantified queries, such as ASK (KB, ∃x Person(x)) .  
The answer is true, but this is perhaps not as helpful as we would like. It is rather like answering “Can you 
tell me the time?” with “Yes.” If we want to know what value of x makes the sentence true, we will need a 
different function, ASKVARS, which we call with ASKVARS (KB, Person(x)) and which yields a stream 
of answers.  
In this case there will be two answers: {x/John} and {x/Richard}. Such an answer is called a substitution 
or binding list. ASKVARS is usually reserved for knowledge bases consisting solely of Horn clauses, 
because in such knowledge bases every way of making the query true will bind the variables to specific 
values. 
8.3.2 The kinship domain 
The objects in Kinship domain are people. We have two unary predicates, Male and Female.  
Kinship relations—parenthood, brotherhood, marriage, and so on—are represented by binary predicates: 
Parent, Sibling, Brother,Sister,Child, Daughter, Son, Spouse, Wife, Husband, Grandparent,Grandchild, 
Cousin, Aunt, and Uncle.  
We use functions for Mother and Father, because every person has exactly one of each of these.  
We can represent each function and predicate, writing down what we know in terms of the other symbols. 
 
Axioms:  
Each of these sentences can be viewed as an axiom of the kinship domain. Axioms are commonly associated 
with purely mathematical domains. They provide the basic factual information from which useful 
conclusions can be derived.  
Kinship axioms are also definitions; they have the form ∀x, y P(x, y) ⇔. . ..  
The axioms define the Mother function, Husband, Male, Parent, Grandparent, and Sibling predicates in 
terms of other predicates.  

Our definitions “bottom out” at a basic set of predicates (Child, Spouse, and Female) in terms of which the 
others are ultimately defined. This is a natural way in which to build up the representation of a domain, and 
it is analogous to the way in which software packages are built up by successive definitions of subroutines 
from primitive library functions.  
Theorems:  
Not all logical sentences about a domain are axioms. Some are theorems—that is, they are entailed by the 
axioms.  
For example, consider the assertion that siblinghood is symmetric:  
∀x, y Sibling(x, y) ⇔Sibling(y, x) . 
It is a theorem that follows logically from the axiom that defines siblinghood. If we ASK the knowledge 
base this sentence, it should return true. From a purely logical point of view, a knowledge base need contain 
only axioms and no theorems, because the theorems do not increase the set of conclusions that follow from 
the knowledge base. From a practical point of view, theorems are essential to reduce the computational cost 
of deriving new sentences. Without them, a reasoning system has to start from first principles every time.  
Axioms : Axioms without Definition  
Not all axioms are definitions. Some provide more general information about certain predicates without 
constituting a definition. Indeed, some predicates have no complete definition because we do not know 
enough to characterize them fully.  
For example, there is no obvious definitive way to complete the sentence  
∀xPerson(x) ⇔. . . 
Fortunately, first-order logic allows us to make use of the Person predicate without completely defining it. 
Instead, we can write partial specifications of properties that every person has and properties that make 
something a person:  
∀xPerson(x) ⇒. . . ∀x . . . ⇒Person(x) . 
Axioms can also be “just plain facts,” such as Male (Jim) and Spouse (Jim, Laura).Such facts form the 
descriptions of specific problem instances, enabling specific questions to be answered. The answers to these 
questions will then be theorems that follow from the axioms 
8.3.3 Numbers, sets, and lists 
Number theory  
Numbers are perhaps the most vivid example of how a large theory can be built up from NATURAL 
NUMBERS a tiny kernel of axioms. We describe here the theory of natural numbers or non-negative 
integers. We need:  
• predicate NatNum that will be true of natural numbers;  
• one PEANO AXIOMS constant symbol, 0;  
• One function symbol, S (successor).  
• The Peano axioms define natural numbers and addition. 
Natural numbers are defined recursively: NatNum(0) . ∀n NatNum(n) ⇒ NatNum(S(n)) .  
That is, 0 is a natural number, and for every object n, if n is a natural number, then S(n) is a natural number.  
So the natural numbers are 0, S(0), S(S(0)), and so on.  
We also need axioms to constrain the successor function: ∀n 0 != S(n) . ∀m, n m != n ⇒ S(m) != S(n) .  

Now we can define addition in terms of the successor function: ∀m NatNum(m) ⇒ + (0, m) = m . ∀m, n 
NatNum(m) ∧ NatNum(n) ⇒ + (S(m), n) = S(+(m, n))  
The first of these axioms says that adding 0 to any natural number m gives m itself. Addition is represented 
using the binary function symbol “+” in the term + (m, 0);  
 
To make our sentences about numbers easier to read, we allow the use of infix notation. We can also write 
S(n) as n + 1, so the second axiom becomes :  
∀m, n NatNum (m) ∧ NatNum(n) ⇒ (m + 1) + n = (m + n)+1 . 
This axiom reduces addition to repeated application of the successor function. Once we have addition, it 
is straightforward to define multiplication as repeated addition, exponentiation as repeated multiplication, 
integer division and remainders, prime numbers, and so on. Thus, the whole of number theory (including 
cryptography) can be built up from one constant, one function, one predicate and four axioms. 
Sets  
The domain of sets is also fundamental to mathematics as well as to commonsense reasoning. Sets can be 
represented as individual sets, including empty sets.  
Sets can be built up by:  
• adding an element to a set or  
• Taking the union or intersection of two sets.  
Operations that can be performed on sets are:  
• To know whether an element is a member of a set. 
•  Distinguish sets from objects that are not sets. 
Vocabulary of set theory: 
 

 
 
8.3.4 The wumpus world 
The wumpus agent receives a percept vector with five elements. The corresponding first-order sentence 
stored in the knowledge base must include both the percept and the time at which it occurred; otherwise, 
the agent will get confused about when it saw what.We use integers for time steps. A typical percept 
sentence would be 
 
 
8.4 KNOWLEDGE ENGINEERING IN FIRST-ORDER LOGIC 
A knowledge engineer is someone who investigates a particular domain, learns what concepts are important 
in that domain, and creates a formal representation of the objects and relations in the domain. 
8.4.1 The knowledge-engineering process 
Knowledge engineering projects vary widely in content, scope, and difficulty, but all such projects include 
the following steps: 

 
 

8.4.2 The electronic circuits domain 
We will develop an ontology and knowledge base that allow us to reason about digital circuits of the kind 
shown in Figure 8.6. We follow the seven-step process for knowledge engineering. 
Identify the task 
There are many reasoning tasks associated with digital circuits. At the highest level, one analyzes the 
circuit’s functionality. For example, does the circuit in Figure 8.6 actually add properly? If all the inputs are 
high, what is the output of gate A2? Questions about the circuit’s structure are also interesting. For example, 
what are all the gates connected to the first input terminal? Does the circuit contain feedback loops? These 
will be our tasks. There are more detailed levels of analysis, including those related to timing delays, circuit 
area, power consumption, production cost, and so on. Each of these levels would require additional 
knowledge. 
Assemble the relevant knowledge 
What do we know about digital circuits? For our purposes, they are composed of wires and gates. Signals 
flow along wires to the input terminals of gates, and each gate produces a signal on the output terminal that 
flows along another wire. To determine what these signals will be, we need to know how the gates transform 
their input signals. There are four types of gates: AND, OR, and XOR gates have two input terminals, and 
NOT gates have one. All gates have one output terminal. Circuits, like gates, have input and output 
terminals. 
 
Decide on a vocabulary 
We now know that we want to talk about circuits, terminals, signals, and gates. The next step is to choose 
functions, predicates, and constants to represent them.  
First, we need to be able to distinguish gates from each other and from other objects. Each gate is 
represented  an object named by a constant, about which we assert that it is a gate with, say, Gate(X1). The 
behavior of each gate is determined by its type: one of the constants AND,OR, XOR, or NOT. Because a 
gate has exactly one type, a function is appropriate: Type(X1)=XOR. Circuits, like gates, are identified by 
a predicate: Circuit(C1). 
Next we consider terminals, which are identified by the predicate Terminal (x). A gate or circuit can have 
one or more input terminals and one or more output terminals. We use the function In(1,X1) to denote the 
first input terminal for gate X1. A similar function Out is used for output terminals. The function Arity(c, i, 
j) says that circuit c has i input and j output terminals. The connectivity between gates can be represented 
by a predicate, Connected, which takes two terminals as arguments, as in Connected(Out(1,X1), In(1,X2)). 
Finally, we need to know whether a signal is on or off. One possibility is to use a unary predicate, On(t), 
which is true when the signal at a terminal is on. This makes it a little difficult, however, to pose questions 
such as “What are all the possible values of the signals at the output terminals of circuit C1 ?” We therefore 

introduce as objects two signal values, 1 and 0, and a function Signal (t) that denotes the signal value for 
the terminal t. 
Encode general knowledge of the domain 
One sign that we have a good ontology is that we require only a few general rules, which can be stated 
clearly and concisely. These are all the axioms we will need: 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

9.INFERENCE IN FIRST-ORDER LOGIC 
9.1 PROPOSITIONAL VS. FIRST-ORDER INFERENCE 
Earlier inference in first order logic is performed with Propositionalization which is a process of 
converting the Knowledgebase present in First Order logic into Propositional logic and on that using any 
inference mechanisms of propositional logic are used to check inference.  
Inference rules for quantifiers:  
There are some Inference rules that can be applied to sentences with quantifiers to obtain sentences 
without quantifiers. These rules will lead us to make the conversion.  
∀ x King(x) ∧ Greedy(x) ⇒ Evil(x)  
Then it seems quite permissible to infer any of the following sentences: 
King(John) ∧ Greedy(John) ⇒ Evil(John) 
King(Richard ) ∧ Greedy(Richard) ⇒ Evil(Richard) 
King(Father (John)) ∧ Greedy(Father (John)) ⇒ Evil(Father (John)) . 
 
Universal Instantiation (UI):  
The rule says that we can infer any sentence obtained by substituting a ground term (a term without 
variables) for the variable. Let SUBST (θ) denote the result of applying the substitution θto the sentence 
a. Then the rule is written  
 
For any variable v and ground term g.  
For example, there is a sentence in knowledge base stating that all greedy kings are Evils  
∀ x King(x) ∧ Greedy(x) ⇒ Evil(x) 
For the variable x, with the substitutions like {x/John},{x/Richard}the following sentences can be inferred. 
King(John) ∧ Greedy(John) ⇒ Evil(John) 
King(Richard ) ∧ Greedy(Richard) ⇒ Evil(Richard) 
Thus a universally quantified sentence can be replaced by the set of all possible instantiations. 
 
Existential Instantiation (EI):  
 
The existential sentence says there is some object satisfying a condition, and the instantiation process is 
just giving a name to that object, that name must not already belong to another object. This new name is 
called a Skolem constant. Existential Instantiation is a special case of a more general process called 
“skolemization”.  
 
For any sentence a, variable v, and constant symbol k that does not appear elsewhere in the knowledge base, 
 
As long as C1 does not appear elsewhere in the knowledge base. Thus an existentially quantified sentence 
can be replaced by one instantiation  

Elimination of Universal and Existential quantifiers should give new knowledge base which can be 
shown to be inferentially equivalent to old in the sense that it is satisfiable exactly when the original 
knowledge base is satisfiable. 
9.1.2 Reduction to propositional inference 
Once we have rules for inferring non quantified sentences from quantified sentences, it becomes possible 
to reduce first-order inference to propositional inference. For example, suppose our knowledge base 
contains just the sentences 
 
Then we apply UI to the first sentence using all possible ground term substitutions from the vocabulary of 
the knowledge base-in this case, {xl John) and {x/Richard). We obtain  
 
We discard the universally quantified sentence. Now, the knowledge base is essentially propositional if 
we view the ground atomic sentences-King (John), Greedy (John), and Brother (Richard, John) as 
proposition symbols. Therefore, we can apply any of the complete propositional algorithms to obtain 
conclusions such as Evil (John).  
Disadvantage:  
If the knowledge base includes a function symbol, the set of possible ground term substitutions is infinite. 
Propositional algorithms will have difficulty with an infinitely large set of sentences.  
NOTE:  
Entailment for first-order logic is semi decidable which means algorithms exist that say yes to every 
entailed sentence, but no algorithm exists that also says no to every non entailed sentence 
9.2 UNIFICATION AND LIFTING 
Consider the above discussed example, if we add Siblings (Peter, Sharon) to the knowledge base then it 
will be 
 
Removing Universal Quantifier will add new sentences to the knowledge base which are not necessary for 
the query Evil (John)?  
 
Hence we need to teach the computer to make better inferences. For this purpose Inference rules were used. 
First Order Inference Rule:  
The key advantage of lifted inference rules over propositionalization is that they make only those 
substitutions which are required to allow particular inferences to proceed.  
Generalized Modus Ponens:  

If there is some substitution θ that makes the premise of the implication identical to sentences already in 
the knowledge base, then we can assert the conclusion of the implication, after applying θ. This inference 
process can be captured as a single inference rule called Generalized Modus Ponens which is a lifted version 
of Modus Ponens-it raises Modus Ponens from propositional to first-order logic  
For atomic sentences pi, pi ', and q, where there is a substitution θ such that SUBST( θ , pi ) = SUBST(θ , 
pi '), for all i, 
 
There are N + 1 premises to this rule, N atomic sentences + one implication.  
Applying SUBST (θ, q) yields the conclusion we seek. It is a sound inference rule. Suppose that instead of 
knowing Greedy (John) in our example we know that everyone is greedy:  
∀y Greedy(y) 
We would conclude that Evil(John).  
Applying the substitution {x/John, y / John) to the implication premises King ( x ) and Greedy ( x ) and the 
knowledge base sentences King(John) and Greedy(y)will make them identical. Thus, we can infer the 
conclusion of the implication.  
For our example, 
 
9.2.2 Unification 
It is the process used to find substitutions that make different logical expressions look identical. Unification 
is a key component of all first-order Inference algorithms.  
UNIFY (p, q) = θ where SUBST (θ, p) = SUBST (θ, q) θ is our unifier value (if one exists).  
Ex: ―Who does John know?‖  
UNIFY (Knows (John, x), Knows (John, Jane)) = {x/ Jane}.  
UNIFY (Knows (John, x), Knows (y, Bill)) = {x/Bill, y/ John}.  
UNIFY (Knows (John, x), Knows (y, Mother(y))) = {x/Bill, y/ John}  
UNIFY (Knows (John, x), Knows (x, Elizabeth)) = FAIL  
➢ The last unification fails because both use the same variable, X. X can’t equal both John and 
Elizabeth. To avoid this change the variable X to Y (or any other value) in Knows(X, Elizabeth)  
Knows(X, Elizabeth) → Knows(Y, Elizabeth) 
  Still means the same. This is called standardizing apart.  
➢ sometimes it is possible for more than one unifier returned:  
 
UNIFY (Knows (John, x), Knows(y, z)) =??? 
 
This can return two possible unifications: {y/ John, x/ z} which means Knows (John, z) OR {y/ John, x/ 
John, z/ John}. For each unifiable pair of expressions there is a single most general unifier (MGU), In 
this case it is {y/ John, x/z).  

An algorithm for computing most general unifiers is shown below. 
 
The process is very simple: recursively explore the two expressions simultaneously "side by side," building 
up a unifier along the way, but failing if two corresponding points in the structures do not match. Occur 
check step makes sure same variable isn’t used twice.  
Storage and retrieval  
➢ STORE(s) stores a sentence s into the knowledge base . 
➢ FETCH(s) returns all unifiers such that the query q unifies with some sentence in the knowledge 
base.  
Easy way to implement these functions is Store all sentences in a long list, browse list one 
sentence at a time with UNIFY on an ASK query. But this is inefficient. To make FETCH 
more efficient by ensuring that unifications are attempted only with sentences that have some 
chance of unifying. (i.e. Knows(John, x) vs. Brother(Richard, John) are not compatible for 
unification)  
➢ To avoid this, a simple scheme called predicate indexing puts all the Knows facts in one bucket and 
all the Brother facts in another.  
➢ The buckets can be stored in a hash table for efficient access. Predicate indexing is useful when 
there are many predicate symbols but only a few clauses for each symbol.  
But if we have many clauses for a given predicate symbol, facts can be stored under multiple index keys.  
For the fact Employs (AIMA.org, Richard), the queries are  
➢ Employs (A IMA. org, Richard) Does AIMA.org employ Richard?  

➢ Employs (x, Richard) who employs Richard?  
➢ Employs (AIMA.org, y) whom does AIMA.org employ?  
➢ Employs Y(x), who employs whom? 
We can arrange this into a subsumption lattice, as shown below. 
 
A subsumption lattice has the following properties:  
➢ child of any node obtained from its parents by one substitution  
➢ the highest common descendant of any two nodes is the result of applying their most general unifier. 
➢ predicate with n arguments contains O(2n ) nodes (in our example, we have two arguments, so our 
lattice has four nodes) . 
➢ Repeated constants = slightly different lattice.  
9.3 FORWARD CHAINING 
First-Order Definite Clauses:  
A definite clause either is atomic or is an implication whose antecedent is a conjunction of positive literals 
and whose consequent is a single positive literal. The following are first-order definite clauses: 
 
Unlike propositional literals, first-order literals can include variables, in which case those variables are 
assumed to be universally quantified.  
Consider the following problem;  
“The law says that it is a crime for an American to sell weapons to hostile nations. The country Nono, 
an enemy of America, has some missiles, and all of its missiles were sold to it by Colonel West, who is 
American.”  
We will represent the facts as first-order definite clauses  
". . . It is a crime for an American to sell weapons to hostile nations": 
American(x) ∧Weapon(y) ∧ Sells(x, y, z) ∧ Hostile(z) ⇒ Criminal (x) ----------(1) 
"Nono . . . has some missiles." The sentence 3 x Owns (Nono, .rc) A Missile (x) is transformed into two 
definite clauses by Existential Elimination, introducing a new constant M1:  
Owns (Nono, M1) ----------------- (2) 
Missile (Ml) ------------------------- (3) 
"All of its missiles were sold to it by Colonel West":  
Missile (x) A Owns (Nono, x) =>Sells (West, z, Nono) ----------------- (4) 

We will also need to know that missiles are weapons:  
Missile (x) =>Weapon (x) ---------- (5) 
We must know that an enemy of America counts as "hostile":  
Enemy (x, America) =>Hostile(x) ----------- (6) 
"West, who is American":  
American (West) --------------- (7) 
"The country Nono, an enemy of America ":  
Enemy (Nono, America) ------------ (8) 
A simple forward-chaining algorithm:  
➢ Starting from the known facts, it triggers all the rules whose premises are satisfied, adding their 
conclusions lo the known facts . 
➢ The process repeats until the query is answered or no new facts are added. Notice that a fact is not 
"new" if it is just renaming of a known fact.  
We will use our crime problem to illustrate how FOL-FC-ASK works. The implication sentences are (1), 
(4), (5), and (6). Two iterations are required:  
➢ On the first iteration, rule (1) has unsatisfied premises.  
Rule (4) is satisfied with {x/Ml), and Sells (West, M1, Nono) is added.  
Rule (5) is satisfied with {x/M1) and Weapon (M1) is added.  
Rule (6) is satisfied with {x/Nono}, and Hostile (Nono) is added.  
➢ On the second iteration, rule (1) is satisfied with {x/West, Y/MI, z /Nono), and Criminal (West) is 
added.  
It is sound, because every inference is just an application of Generalized Modus Ponens, it is complete for 
definite clause knowledge bases; that is, it answers every query whose answers are entailed by any 
knowledge base of definite clauses 

 
 
Efficient forward chaining:  
The above given forward chaining algorithm was lack with efficiency due to the three sources of 
complexities:  
➢ Pattern Matching  
➢ Rechecking of every rule on every iteration even a few additions are made to rules  
➢ Irrelevant facts  
 
1. Matching rules against known facts:  
For example, consider this rule,  

Missile(x) A Owns (Nono, x) =>Sells (West, x, Nono). 
The algorithm will check all the objects owned by Nono in and then for each object, it could check whether 
it is a missile. This is the conjunct ordering problem:  
“Find an ordering to solve the conjuncts of the rule premise so that the total cost is minimized”. The most 
constrained variable heuristic used for CSPs would suggest ordering the conjuncts to look for missiles 
first if there are fewer missiles than objects that are owned by Nono.  
The connection between pattern matching and constraint satisfaction is actually very close. We can view 
each conjunct as a constraint on the variables that it contains-for example, Missile(x) is a unary constraint 
on x. Extending this idea, we can express every finite-domain CSP as a single definite clause together with 
some associated ground facts. Matching a definite clause against a set of facts is NP-hard. 
2. Incremental forward chaining:  
On the second iteration, the rule Missile (x) =>Weapon (x)  
Matches against Missile (M1) (again), and of course the conclusion Weapon(x/M1) is already known so 
nothing happens. Such redundant rule matching can be avoided if we make the following observation:  
“Every new fact inferred on iteration t must be derived from at least  one new fact inferred on iteration  
t – 1”  
This observation leads naturally to an incremental forward chaining algorithm where, at iteration t, we 
check a rule only if its premise includes a conjunct p, that unifies with a fact p: newly inferred at iteration 
t - 1. The rule matching step then fixes p, to match with p’, but allows the other conjuncts of the rule to 
match with facts from any previous iteration. 
3. Irrelevant facts: 
➢ One way to avoid drawing irrelevant conclusions is to use backward chaining.  
➢ Another solution is to restrict forward chaining to a selected subset of rules  
➢ A third approach, is to rewrite the rule set, using information from the goal.so that only relevant 
variable bindings-those belonging to a so-called magic set-are considered during forward inference.  
For example, if the goal is Criminal (West), the rule that concludes Criminal (x) will be rewritten to include 
an extra conjunct that constrains the value of x:  
Magic(x) A American(z) A Weapon(y)A Sells(x, y, z) A Hostile(z) =>Criminal(x ) 
The fact Magic (West) is also added to the KB. In this way, even if the knowledge base contains facts about 
millions of Americans, only Colonel West will be considered during the forward inference process.
