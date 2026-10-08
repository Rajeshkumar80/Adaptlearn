<!-- PROVENANCE: subject_code=BCS306A | subject_name=Object Oriented Programming with Java | semester=3 | module=1 | source_type=MODULE_NOTES | source_file=module1.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS306A — Module 1

## Introduction to Java — Classes and Objects

**Subject:** BCS306A (Object Oriented Programming with Java)
**Module:** Module 1
**Content type:** textbook_fallback
**Sources:** R1_Effective_Java_Joshua_Bloch.txt

---

Praise for the First Edition
“I sure wish I had this book ten years ago. Some might think that I don’t need 
any Java books, but I need this one.”
—James Gosling, fellow and vice president, Sun Microsystems, Inc., and
inventor of the Java programming language
“An excellent book, crammed with good advice on using the Java program-
ming language and object-oriented programming in general.”
—Gilad Bracha, distinguished engineer, Cadence Design Systems,
and coauthor of The Java™ Language Specification,
Third Edition (Addison-Wesley, 2005)
“10/10—anyone aspiring to write good Java code that others will appreciate 
reading and maintaining should be required to own a copy of this book. This 
is one of those rare books where the information won’t become obsolete with 
subsequent releases of the JDK library.”
—Peter Tran, bartender, JavaRanch.com
“The best Java book yet written.... Really great; very readable and eminently 
useful. I can’t say enough good things about this book. At JavaOne 2001, 
James Gosling said, ‘Go buy this book!’ I’m glad I did, and I couldn’t agree 
more.”
—Keith Edwards, senior member of research staff,
Computer Science Lab at the Palo Alto Research Center (PARC),
and author of Core JINI (Prentice Hall, 2000)
“This is a truly excellent book done by the guy who designed several of the 
better recent Java platform APIs (including the Collections API).”
—James Clark, technical lead of the XML Working Group
during the creation of the XML 1.0 Recommendation;
editor of the XPath and XSLT Recommendations

“Great content. Analogous to Scott Meyers’s classic Effective C++. If you know 
the basics of Java, this has to be your next book.”
—Gary K. Evans, OO mentor and consultant, Evanetics, Inc.
“Josh Bloch gives great insight into best practices that really can only be discov-
ered after years of study and experience.”
—Mark Mascolino, software engineer
“This is a superb book. It clearly covers many of the language/platform subtleties 
and trickery you need to learn to become a real Java master.”
—Victor Wiewiorowski, vice president development and code quality manager,
ValueCommerce Co., Tokyo, Japan
“I like books that under-promise in their titles and over-deliver in their contents. 
This book has 57 items of programming advice that are well chosen. Each item 
reveals a clear, deep grasp of the language. Each one illustrates in simple, practical 
terms the limits of programming on intuition alone, or taking the most direct path 
to a solution without fully understanding what the language offers.”
—Michael Ernest, Inkling Research, Inc.
“I don’t find many programming books that make me want to read every page—
this is one of them.”
—Matt Tucker, chief technical officer, Jive Software
“Great how-to resource for the experienced developer.”
—John Zukowski, author of numerous Java books
“I picked this book up two weeks ago and can safely say I learned more about the 
Java language in three days of reading than I did in three months of study! An 
excellent book and a welcome addition to my Java library.”
—Jane Griscti, I/T advisory specialist

Effective Java™
Second Edition

The Java™Series
Ken Arnold, James Gosling, David Holmes
The Java™Programming Language, Fourth Edition
Joshua Bloch
Effective Java™Programming Language Guide
Joshua Bloch
Effective Java,™Second Edition
Stephanie Bodoff, Dale Green, Kim Haase, Eric Jendrock
The J2EE™Tutorial, Second Edition 
Mary Campione, Kathy Walrath, Alison Huml
The Java™Tutorial, Third Edition: A Short Course on
the Basics
Mary Campione, Kathy Walrath, Alison Huml, The
Tutorial Team
The Java™Tutorial Continued: The Rest of the JDK™
Patrick Chan
The Java™Developers Almanac 1.4, Volume 1
Patrick Chan
The Java™Developers Almanac 1.4, Volume 2
Patrick Chan, Rosanna Lee
The Java™Class Libraries, Second Edition, Volume 2: 
java.applet, java.awt, java.beans
Patrick Chan, Rosanna Lee, Doug Kramer 
The Java
™Class Libraries, Second Edition, Volume 1: 
Supplement for the Java™2 Platform, Standard Edition,
v1.2
Kirk Chen, Li Gong
Programming Open Service Gateways with Java™
Embedded Server
Zhiqun Chen
Java Card™Technology for Smart Cards: Architecture
and Programmer’s Guide
Maydene Fisher, Jon Ellis, Jonathan Bruce 
JDBC™API Tutorial and Reference, Third Edition
Eric Freeman, Susanne Hupfer, Ken Arnold
JavaSpaces™Principles, Patterns, and Practice
Li Gong, Gary Ellison, Mary Dageforde 
Inside Java™2 Platform Security, Second Edition: 
Architecture, API Design, and Implementation
James Gosling, Bill Joy, Guy Steele, Gilad Bracha 
The Java™Language Speciﬁcation, Third Edition
Chet Haase, Romain Guy
Filthy Rich Clients: Developing Animated and Graphical
Effects for Desktop Java™Applications
Mark Hapner, Rich Burridge, Rahul Sharma, Joseph
Fialli, Kim Haase
Java™Message Service API Tutorial and Reference:
Messaging for the J2EE™Platform
Eric Jendrock, Jennifer Ball
The Java™EE 5 Tutorial, Third Edition
Jonni Kanerva
The Java™FAQ
Jonathan Knudsen
Kicking Butt with MIDP and MSA: Creating Great
Mobile Applications
David Lambert
Smarter Selling: Consultative Selling Strategies to Meet
Your Buyer’s Needs Every Time
Doug Lea
Concurrent Programming in Java™, Second Edition:
Design Principles and Patterns
Rosanna Lee, Scott Seligman
JNDI API Tutorial and Reference: Building Directory-
Enabled Java™Applications
Sheng Liang
The Java™Native Interface: Programmer’s Guide and 
Speciﬁcation
Tim Lindholm, Frank Yellin
The Java™Virtual Machine Speciﬁcation, Second Edition
Roger Riggs, Antero Taivalsaari, Jim Van Peursem, Jyri
Huopaniemi, Mark Patel, Aleksi Uotila
Programming Wireless Devices with the Java™2
Platform, Micro Edition, Second Edition
Rahul Sharma, Beth Stearns, Tony Ng
J2EE™Connector Architecture and Enterprise
Application Integration
Inderjeet Singh, Beth Stearns, Mark Johnson, Enterprise
Team
Designing Enterprise Applications with the J2EE™
Platform, Second Edition
Inderjeet Singh, Sean Brydon, Greg Murray, Vijay
Ramachandran, Thierry Violleau, Beth Stearns
Designing Web Services with the J2EE™1.4 Platform:
JAX-RPC, SOAP, and XML Technologies
Kathy Walrath, Mary Campione, Alison Huml, Sharon
Zakhour
The JFC Swing Tutorial, Second Edition: A Guide to
Constructing GUIs
Steve Wilson, Jeff Kesselman
Java™Platform Performance: Strategies and Tactics
Sharon  Zakhour, Scott Hommel, Jacob Royal, 
Isaac Rabinovitch, Tom Risser, Mark Hoeber
The Java™Tutorial, Fourth Edition: A Short Course 
on the Basics

Effective Java™
Second Edition
Joshua Bloch
Upper Saddle River, NJ • Boston • Indianapolis • San Francisco
New York • Toronto • Montreal London • Munich • Paris • Madrid
Capetown • Sydney • Tokyo • Singapore • Mexico City

Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where
those designations appear in this book, and the publisher was aware of a trademark claim, the designations have been
printed with initial capital letters or in all capitals.
Sun Microsystems, Inc. has intellectual property rights relating to implementations of the technology described in this pub-
lication. In particular, and without limitation, these intellectual property rights may include one or more U.S. patents, for-
eign patents, or pending applications.
Sun, Sun Microsystems, the Sun logo, J2ME, J2EE, Java Card, and all Sun and Java based trademarks and logos are trade-
marks or registered trademarks of Sun Microsystems, Inc., in the United States and other countries. UNIX is a registered
trademark in the United States and other countries, exclusively licensed through X/Open Company, Ltd. THIS PUBLICA-
TION IS PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUD-
ING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE, OR NON-INFRINGEMENT. THIS PUBLICATION COULD INCLUDE TECHNICAL
INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMA-
TION HEREIN; THESE CHANGES WILL BE INCORPORATED IN NEW EDITIONS OF THE PUBLICATION. SUN
MICROSYSTEMS, INC. MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE PRODUCT(S) AND/OR THE
PROGRAM(S) DESCRIBED IN THIS PUBLICATION AT ANY TIME.
The author and publisher have taken care in the preparation of this book, but make no expressed or implied warranty of any
kind and assume no responsibility for errors or omissions. No liability is assumed for incidental or consequential damages
in connection with or arising out of the use of the information or programs contained herein.
The publisher offers excellent discounts on this book when ordered in quantity for bulk purchases or special sales, which
may include electronic versions and/or custom covers and content particular to your business, training goals, marketing
focus, and branding interests. For more information, please contact:
U.S. Corporate and Government Sales
(800) 382-3419
corpsales@pearsontechgroup.com
For sales outside the United States please contact:
International Sales
international@pearsoned.com
Visit us on the Web: informit.com/aw
Library of Congress Control Number: 2008926278
Copyright © 2008 Sun Microsystems, Inc.
4150 Network Circle,
Santa Clara, California 95054 U.S.A.
All rights reserved. Printed in the United States of America. This publication is protected by copyright, and permis-
sion must be obtained from the publisher prior to any prohibited reproduction, storage in a retrieval system, or trans-
mission in any form or by any means, electronic, mechanical, photocopying, recording, or likewise. For information
regarding permissions, write to:
Pearson Education, Inc.
Rights and Contracts Department
501 Boylston Street, Suite 900
Boston, MA 02116
Fax: (617) 671-3447
ISBN-13: 978-0-321-35668-0
ISBN-10:  0-321-35668-3
Text printed in the United States on recycled paper at Courier in Stoughton, Massachusetts.
First printing, May 2008

To my family: Cindy, Tim, and Matt

This page intentionally left blank 

ix
Contents
Foreword . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . xiii
Preface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .xv
Acknowledgments. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . xix
1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .1
2 Creating and Destroying Objects. . . . . . . . . . . . . . . . . . .5
Item 1: Consider static factory methods instead of constructors. . . 5
Item 2: Consider a builder when faced with many constructor 
parameters . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11
Item 3: Enforce the singleton property with a private 
constructor or an enum type . . . . . . . . . . . . . . . . . . . . . . . 17
Item 4: Enforce noninstantiability with a private constructor . . . . 19
Item 5: Avoid creating unnecessary objects . . . . . . . . . . . . . . . . . 20
Item 6: Eliminate obsolete object references. . . . . . . . . . . . . . . . . 24
Item 7: Avoid finalizers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27
3 Methods Common to All Objects. . . . . . . . . . . . . . . . . .33
Item 8: Obey the general contract when overriding equals . . . . . 33
Item 9: Always override hashCode when you 
override equals. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45
Item 10: Always override toString . . . . . . . . . . . . . . . . . . . . . . . . 51
Item 11: Override clone judiciously. . . . . . . . . . . . . . . . . . . . . . . . 54
Item 12: Consider implementing Comparable . . . . . . . . . . . . . . . . 62

CONTENTS
x
4 Classes and Interfaces. . . . . . . . . . . . . . . . . . . . . . . . . . .67
Item 13: Minimize the accessibility of classes and members. . . . . . 67
Item 14: In public classes, use accessor methods, 
not public fields . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71
Item 15: Minimize mutability. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
Item 16: Favor composition over inheritance. . . . . . . . . . . . . . . . . . 81
Item 17: Design and document for inheritance or else prohibit it . . 87
Item 18: Prefer interfaces to abstract classes . . . . . . . . . . . . . . . . . . 93
Item 19: Use interfaces only to define types. . . . . . . . . . . . . . . . . . . 98
Item 20: Prefer class hierarchies to tagged classes . . . . . . . . . . . . . 100
Item 21: Use function objects to represent strategies . . . . . . . . . . . 103
Item 22: Favor static member classes over nonstatic . . . . . . . . . . . 106
5 Generics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .109
Item 23: Don’t use raw types in new code . . . . . . . . . . . . . . . . . . . 109
Item 24: Eliminate unchecked warnings. . . . . . . . . . . . . . . . . . . . . 116
Item 25: Prefer lists to arrays . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 119
Item 26: Favor generic types. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 124
Item 27: Favor generic methods . . . . . . . . . . . . . . . . . . . . . . . . . . . 129
Item 28: Use bounded wildcards to increase API flexibility . . . . . 134
Item 29: Consider typesafe heterogeneous containers . . . . . . . . . . 142
6 Enums and Annotations . . . . . . . . . . . . . . . . . . . . . . . .147
Item 30: Use enums instead of int constants. . . . . . . . . . . . . . . . . 147
Item 31: Use instance fields instead of ordinals . . . . . . . . . . . . . . . 158
Item 32: Use EnumSet instead of bit fields. . . . . . . . . . . . . . . . . . . 159
Item 33: Use EnumMap instead of ordinal indexing. . . . . . . . . . . . . 161
Item 34: Emulate extensible enums with interfaces . . . . . . . . . . . . 165
Item 35: Prefer annotations to naming patterns . . . . . . . . . . . . . . . 169
Item 36: Consistently use the Override annotation. . . . . . . . . . . . 176
Item 37: Use marker interfaces to define types . . . . . . . . . . . . . . . 179
7 Methods . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .181
Item 38: Check parameters for validity . . . . . . . . . . . . . . . . . . . . . 181
Item 39: Make defensive copies when needed . . . . . . . . . . . . . . . . 184
Item 40: Design method signatures carefully . . . . . . . . . . . . . . . . . 189
Item 41: Use overloading judiciously. . . . . . . . . . . . . . . . . . . . . . . 191

CONTENTS
xi
Item 42: Use varargs judiciously . . . . . . . . . . . . . . . . . . . . . . . . . . 197
Item 43: Return empty arrays or collections, not nulls . . . . . . . . . 201
Item 44: Write doc comments for all exposed API elements . . . . 203
8 General Programming . . . . . . . . . . . . . . . . . . . . . . . . .209
Item 45: Minimize the scope of local variables. . . . . . . . . . . . . . . 209
Item 46: Prefer for-each loops to traditional for loops. . . . . . . . . 212
Item 47: Know and use the libraries . . . . . . . . . . . . . . . . . . . . . . . 215
Item 48: Avoid float and double if exact answers 
are required . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 218
Item 49: Prefer primitive types to boxed primitives . . . . . . . . . . . 221
Item 50: Avoid strings where other types are more appropriate . . 224
Item 51: Beware the performance of string concatenation . . . . . . 227
Item 52: Refer to objects by their interfaces . . . . . . . . . . . . . . . . . 228
Item 53: Prefer interfaces to reflection . . . . . . . . . . . . . . . . . . . . . 230
Item 54: Use native methods judiciously. . . . . . . . . . . . . . . . . . . . 233
Item 55: Optimize judiciously . . . . . . . . . . . . . . . . . . . . . . . . . . . . 234
Item 56: Adhere to generally accepted naming conventions. . . . . 237
9 Exceptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .241
Item 57: Use exceptions only for exceptional conditions . . . . . . . 241
Item 58: Use checked exceptions for recoverable conditions 
and runtime exceptions for programming errors. . . . . . . 244
Item 59: Avoid unnecessary use of checked exceptions . . . . . . . . 246
Item 60: Favor the use of standard exceptions. . . . . . . . . . . . . . . . 248
Item 61: Throw exceptions appropriate to the abstraction. . . . . . . 250
Item 62: Document all exceptions thrown by each method. . . . . . 252
Item 63: Include failure-capture information in 
detail messages . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 254
Item 64: Strive for failure atomicity . . . . . . . . . . . . . . . . . . . . . . . 256
Item 65: Don’t ignore exceptions . . . . . . . . . . . . . . . . . . . . . . . . . 258
10 Concurrency. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .259
Item 66: Synchronize access to shared mutable data. . . . . . . . . . . 259
Item 67: Avoid excessive synchronization . . . . . . . . . . . . . . . . . . 265
Item 68: Prefer executors and tasks to threads. . . . . . . . . . . . . . . . 271
Item 69: Prefer concurrency utilities to wait and notify. . . . . . . 273

CONTENTS
xii
Item 70: Document thread safety . . . . . . . . . . . . . . . . . . . . . . . . . . 278
Item 71: Use lazy initialization judiciously . . . . . . . . . . . . . . . . . . 282
Item 72: Don’t depend on the thread scheduler . . . . . . . . . . . . . . . 286
Item 73: Avoid thread groups . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 288
11 Serialization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .289
Item 74: Implement Serializable judiciously. . . . . . . . . . . . . . . 289
Item 75: Consider using a custom serialized form . . . . . . . . . . . . . 295
Item 76: Write readObject methods defensively . . . . . . . . . . . . . 302
Item 77: For instance control, prefer enum types 
to readResolve . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 308
Item 78: Consider serialization proxies instead of serialized 
instances . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 312
Appendix: Items Corresponding to First Edition . . . . . .317
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .321
Index . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .327

xiii
Foreword
IF a colleague were to say to you, “Spouse of me this night today manufactures the
unusual meal in a home. You will join?” three things would likely cross your mind:
third, that you had been invited to dinner; second, that English was not your col-
league’s first language; and first, a good deal of puzzlement.
If you have ever studied a second language yourself and then tried to use it
outside the classroom, you know that there are three things you must master: how
the language is structured (grammar), how to name things you want to talk about
(vocabulary), and the customary and effective ways to say everyday things
(usage). Too often only the first two are covered in the classroom, and you find
native speakers constantly suppressing their laughter as you try to make yourself
understood.
It is much the same with a programming language. You need to understand the
core language: is it algorithmic, functional, object-oriented? You need to know the
vocabulary: what data structures, operations, and facilities are provided by the
standard libraries? And you need to be familiar with the customary and effective
ways to structure your code. Books about programming languages often cover
only the first two, or discuss usage only spottily. Maybe that’s because the first
two are in some ways easier to write about. Grammar and vocabulary are proper-
ties of the language alone, but usage is characteristic of a community that uses it.
The Java programming language, for example, is object-oriented with single
inheritance and supports an imperative (statement-oriented) coding style within
each method. The libraries address graphic display support, networking, distrib-
uted computing, and security. But how is the language best put to use in practice?
There is another point. Programs, unlike spoken sentences and unlike most
books and magazines, are likely to be changed over time. It’s typically not enough
to produce code that operates effectively and is readily understood by other per-
sons; one must also organize the code so that it is easy to modify. There may be
ten ways to write code for some task T. Of those ten ways, seven will be awkward,
inefficient, or puzzling. Of the other three, which is most likely to be similar to the
code needed for the task T' in next year’s software release?

FOREWORD
xiv
There are numerous books from which you can learn the grammar of the Java
Programming Language, including The Java™ Programming Language by Arnold,
Gosling, and Holmes [Arnold05] or The Java™ Language Specification by Gos-
ling, Joy, yours truly, and Bracha [JLS]. Likewise, there are dozens of books on
the libraries and APIs associated with the Java programming language.
This book addresses your third need: customary and effective usage. Joshua
Bloch has spent years extending, implementing, and using the Java programming
language at Sun Microsystems; he has also read a lot of other people’s code,
including mine. Here he offers good advice, systematically organized, on how to
structure your code so that it works well, so that other people can understand it, so
that future modifications and improvements are less likely to cause headaches—
perhaps, even, so that your programs will be pleasant, elegant, and graceful.
Guy L. Steele Jr.
Burlington, Massachusetts
April 2001

xv
Preface
Preface to the Second Edition
A lot has happened to the Java platform since I wrote the first edition of this book
in 2001, and it’s high time for a second edition. The most significant set of changes
was the addition of generics, enum types, annotations, autoboxing, and the for-each
loop in Java 5. A close second was the addition of the new concurrency library,
java.util.concurrent, also released in Java 5. With Gilad Bracha, I had the good
fortune to lead the teams that designed the new language features. I also had the
good fortune to serve on the team that designed and developed the concurrency
library, which was led by Doug Lea.
The other big change in the platform is the widespread adoption of modern
Integrated Development Environments (IDEs), such as Eclipse, IntelliJ IDEA, and
NetBeans, and of static analysis tools, such as FindBugs. While I have not been
involved in these efforts, I’ve benefited from them immensely and learned how
they affect the Java development experience. 
In 2004, I moved from Sun to Google, but I’ve continued my involvement in
the development of the Java platform over the past four years, contributing to the
concurrency and collections APIs through the good offices of Google and the Java
Community Process. I’ve also had the pleasure of using the Java platform to
develop libraries for use within Google. Now I know what it feels like to be a user.
As was the case in 2001 when I wrote the first edition, my primary goal is to
share my experience with you so that you can imitate my successes while avoiding
my failures. The new material continues to make liberal use of real-world exam-
ples from the Java platform libraries.
The first edition succeeded beyond my wildest expectations, and I’ve done my
best to stay true to its spirit while covering all of the new material that was
required to bring the book up to date. It was inevitable that the book would grow,
and grow it did, from fifty-seven items to seventy-eight. Not only did I add
twenty-three items, but I thoroughly revised all the original material and retired a

PREFACE
xvi
few items whose better days had passed. In the Appendix, you can see how the
material in this edition relates to the material in the first edition.
In the Preface to the First Edition, I wrote that the Java programming language
and its libraries were immensely conducive to quality and productivity, and a joy
to work with. The changes in releases 5 and 6 have taken a good thing and made it
better. The platform is much bigger now than it was in 2001 and more complex,
but once you learn the patterns and idioms for using the new features, they make
your programs better and your life easier. I hope this edition captures my contin-
ued enthusiasm for the platform and helps make your use of the platform and its
new features more effective and enjoyable.
San Jose, California
April 2008
Preface to the First Edition
In 1996 I pulled up stakes and headed west to work for JavaSoft, as it was then
known, because it was clear that that was where the action was. In the intervening
five years I’ve served as Java platform libraries architect. I’ve designed, imple-
mented, and maintained many of the libraries and served as a consultant for many
others. Presiding over these libraries as the Java platform matured was a once-in-a-
lifetime opportunity. It is no exaggeration to say that I had the privilege to work with
some of the great software engineers of our generation. In the process, I learned a lot
about the Java programming language—what works, what doesn’t, and how to use
the language and its libraries to best effect.
This book is my attempt to share my experience with you so that you can imi-
tate my successes while avoiding my failures. I borrowed the format from Scott
Meyers’s Effective C++ [Meyers98], which consists of fifty items, each convey-
ing one specific rule for improving your programs and designs. I found the format
to be singularly effective, and I hope you do too.
In many cases, I took the liberty of illustrating the items with real-world
examples from the Java platform libraries. When describing something that could
have been done better, I tried to pick on code that I wrote myself, but occasionally
I pick on something written by a colleague. I sincerely apologize if, despite my
best efforts, I’ve offended anyone. Negative examples are cited not to cast blame

PREFACE
xvii
but in the spirit of cooperation, so that all of us can benefit from the experience of
those who’ve gone before.
While this book is not targeted solely at developers of reusable components, it
is inevitably colored by my experience writing such components over the past two
decades. I naturally think in terms of exported APIs (Application Programming
Interfaces), and I encourage you to do likewise. Even if you aren’t developing
reusable components, thinking in these terms tends to improve the quality of the
software you write. Furthermore, it’s not uncommon to write a reusable compo-
nent without knowing it: You write something useful, share it with your buddy
across the hall, and before long you have half a dozen users. At this point, you no
longer have the flexibility to change the API at will and are thankful for all the
effort that you put into designing the API when you first wrote the software.
My focus on API design may seem a bit unnatural to devotees of the new
lightweight software development methodologies, such as Extreme Programming
[Beck99]. These methodologies emphasize writing the simplest program that
could possibly work. If you’re using one of these methodologies, you’ll find that a
focus on API design serves you well in the refactoring process. The fundamental
goals of refactoring are the improvement of system structure and the avoidance of
code duplication. These goals are impossible to achieve in the absence of well-
designed APIs for the components of the system.
No language is perfect, but some are excellent. I have found the Java
programming language and its libraries to be immensely conducive to quality and
productivity, and a joy to work with. I hope this book captures my enthusiasm and
helps make your use of the language more effective and enjoyable.
Cupertino, California
April 2001

This page intentionally left blank 

xix
Acknowledgments
Acknowledgments for the Second Edition
I thank the readers of the first edition of this book for giving it such a kind and
enthusiastic reception, for taking its ideas to heart, and for letting me know what a
positive influence it had on them and their work. I thank the many professors who
used the book in their courses, and the many engineering teams that adopted it.
I thank the whole team at Addison-Wesley for the their kindness, profession-
alism, patience, and grace under pressure. Through it all, my editor Greg Doench
remained unflappable: a fine editor and a perfect gentleman. My production man-
ager, Julie Nahil, was everything that a production manager should be: diligent,
prompt, organized, and friendly. My copy editor, Barbara Wood, was meticulous
and tasteful.
I have once again been blessed with the best team of reviewers imaginable,
and I give my sincerest thanks to each of them. The core team, who reviewed
every chapter, consisted of Lexi Baugher, Cindy Bloch, Beth Bottos, Joe Bowbeer,
Brian Goetz, Tim Halloran, Brian Kernighan, Rob Konigsberg, Tim Peierls, Bill
Pugh, Yoshiki Shibata, Peter Stout, Peter Weinberger, and Frank Yellin. Other
reviewers included Pablo Bellver, Dan Bloch, Dan Bornstein, Kevin Bourrillion,
Martin Buchholz, Joe Darcy, Neal Gafter, Laurence Gonsalves, Aaron Green-
house, Barry Hayes, Peter Jones, Angelika Langer, Doug Lea, Bob Lee, Jeremy
Manson, Tom May, Mike McCloskey, Andriy Tereshchenko, and Paul Tyma.
Again, these reviewers made numerous suggestions that led to great improve-
ments in this book and saved me from many embarrassments. And again, any
remaining embarrassments are my responsibility.
I give special thanks to Doug Lea and Tim Peierls, who served as sounding
boards for many of the ideas in this book. Doug and Tim were unfailingly gener-
ous with their time and knowledge.
I thank my manager at Google, Prabha Krishna, for her continued support and
encouragement.

ACKNOWLEDGMENTS
xx
Finally, I thank my wife, Cindy Bloch, for encouraging me to write, for read-
ing each item in raw form, for helping me with Framemaker, for writing the index,
and for putting up with me while I wrote.
Acknowledgments for the First Edition
I thank Patrick Chan for suggesting that I write this book and for pitching the idea to
Lisa Friendly, the series managing editor; Tim Lindholm, the series technical editor;
and Mike Hendrickson, executive editor of Addison-Wesley. I thank Lisa, Tim, and
Mike for encouraging me to pursue the project and for their superhuman patience
and unyielding faith that I would someday write this book.
I thank James Gosling and his original team for giving me something great to
write about, and I thank the many Java platform engineers who followed in
James’s footsteps. In particular, I thank my colleagues in Sun’s Java Platform
Tools and Libraries Group for their insights, their encouragement, and their sup-
port. The team consists of Andrew Bennett, Joe Darcy, Neal Gafter, Iris Garcia,
Konstantin Kladko, Ian Little, Mike McCloskey, and Mark Reinhold. Former
members include Zhenghua Li, Bill Maddox, and Naveen Sanjeeva. 
I thank my manager, Andrew Bennett, and my director, Larry Abrahams, for
lending their full and enthusiastic support to this project. I thank Rich Green, the
VP of Engineering at Java Software, for providing an environment where engi-
neers are free to think creatively and to publish their work.
I have been blessed with the best team of reviewers imaginable, and I give my
sincerest thanks to each of them: Andrew Bennett, Cindy Bloch, Dan Bloch, Beth
Bottos, Joe Bowbeer, Gilad Bracha, Mary Campione, Joe Darcy, David Eckhardt,
Joe Fialli, Lisa Friendly, James Gosling, Peter Haggar, David Holmes, Brian
Kernighan, Konstantin Kladko, Doug Lea, Zhenghua Li, Tim Lindholm, Mike
McCloskey, Tim Peierls, Mark Reinhold, Ken Russell, Bill Shannon, Peter Stout,
Phil Wadler, and two anonymous reviewers. They made numerous suggestions
that led to great improvements in this book and saved me from many
embarrassments. Any remaining embarrassments are my responsibility.
Numerous colleagues, inside and outside Sun, participated in technical
discussions that improved the quality of this book. Among others, Ben Gomes,
Steffen Grarup, Peter Kessler, Richard Roda, John Rose, and David Stoutamire

ACKNOWLEDGMENTS
xxi
contributed useful insights. A special thanks is due Doug Lea, who served as a
sounding board for many of the ideas in this book. Doug has been unfailingly
generous with his time and his knowledge.
I thank Julie Dinicola, Jacqui Doucette, Mike Hendrickson, Heather Olszyk,
Tracy Russ, and the whole team at Addison-Wesley for their support and profes-
sionalism. Even under an impossibly tight schedule, they were always friendly
and accommodating.
I thank Guy Steele for writing the Foreword. I am honored that he chose to
participate in this project.
Finally, I thank my wife, Cindy Bloch, for encouraging and occasionally
threatening me to write this book, for reading each item in its raw form, for help-
ing me with Framemaker, for writing the index, and for putting up with me while I
wrote.

This page intentionally left blank 

C H A P T E R 1
Introduction
THIS book is designed to help you make the most effective use of the Java™
programming language and its fundamental libraries, java.lang, java.util,
and, to a lesser extent, java.util.concurrent and java.io. The book discusses
other libraries from time to time, but it does not cover graphical user interface
programming, enterprise APIs, or mobile devices.
This book consists of seventy-eight items, each of which conveys one rule.
The rules capture practices generally held to be beneficial by the best and most
experienced programmers. The items are loosely grouped into ten chapters, each
concerning one broad aspect of software design. The book is not intended to be
read from cover to cover: each item stands on its own, more or less. The items are
heavily cross-referenced so you can easily plot your own course through the book.
Many new features were added to the platform in Java 5 (release 1.5). Most of
the items in this book use these features in some way. The following table shows
you where to go for primary coverage of these features:
Feature
Chapter or Item
Generics 
 Chapter 5
Enums 
 Items 30–34
Annotations
 Items 35–37
For-each loop 
 Item 46
Autoboxing 
 Items 40, 49
Varargs
 Item 42
Static import 
 Item 19
java.util.concurrent
 Items 68, 69

CHAPTER 1
INTRODUCTION
Most items are illustrated with program examples. A key feature of this book
is that it contains code examples illustrating many design patterns and idioms.
Where appropriate, they are cross-referenced to the standard reference work in
this area [Gamma95].
Many items contain one or more program examples illustrating some practice
to be avoided. Such examples, sometimes known as antipatterns, are clearly
labeled with a comment such as “// Never do this!” In each case, the item
explains why the example is bad and suggests an alternative approach.
This book is not for beginners: it assumes that you are already comfortable
with the Java programming language. If you are not, consider one of the many fine
introductory texts [Arnold05, Sestoft05]. While the book is designed to be acces-
sible to anyone with a working knowledge of the language, it should provide food
for thought even for advanced programmers.
Most of the rules in this book derive from a few fundamental principles. Clar-
ity and simplicity are of paramount importance. The user of a module should
never be surprised by its behavior. Modules should be as small as possible but no
smaller. (As used in this book, the term module refers to any reusable software
component, from an individual method to a complex system consisting of multiple
packages.) Code should be reused rather than copied. The dependencies between
modules should be kept to a minimum. Errors should be detected as soon as possi-
ble after they are made, ideally at compile time.
While the rules in this book do not apply 100 percent of the time, they do
characterize best programming practices in the great majority of cases. You
should not slavishly follow these rules, but violate them only occasionally and
with good reason. Learning the art of programming, like most other disciplines,
consists of first learning the rules and then learning when to break them.
For the most part, this book is not about performance. It is about writing pro-
grams that are clear, correct, usable, robust, flexible, and maintainable. If you can
do that, it’s usually a relatively simple matter to get the performance you need
(Item 55). Some items do discuss performance concerns, and a few of these items
provide performance numbers. These numbers, which are introduced with the
phrase “On my machine,” should be regarded as approximate at best.
For what it’s worth, my machine is an aging homebuilt 2.2 GHz dual-core
AMD Opteron™ 170 with 2 gigabytes of RAM, running Sun’s 1.6_05 release of
the Java SE Development Kit (JDK) atop Microsoft Windows® XP Professional
SP2. This JDK has two virtual machines, the Java HotSpot™ Client and Server
VMs. Performance numbers were measured on the Server VM.

CHAPTER 1
INTRODUCTION
When discussing features of the Java programming language and its libraries,
it is sometimes necessary to refer to specific releases. For brevity, this book uses
“engineering version numbers” in preference to official release names. This table
shows the mapping between release names and engineering version numbers.
The examples are reasonably complete, but they favor readability over com-
pleteness. They freely use classes from the packages java.util and java.io. In
order to compile the examples, you may have to add one or more of these import
statements:
import java.util.*;
import java.util.concurrent.*;
import java.io.*;
Other boilerplate is similarly omitted. The book’s Web site, http://
java.sun.com/docs/books/effective, contains an expanded version of each
example, which you can compile and run.
For the most part, this book uses technical terms as they are defined in The
Java Language Specification, Third Edition [JLS]. A few terms deserve special
mention. The language supports four kinds of types: interfaces (including annota-
tions), classes (including enums), arrays, and primitives. The first three are known
as reference types. Class instances and arrays are objects; primitive values are not.
A class’s members consist of its fields, methods, member classes, and member
interfaces. A method’s signature consists of its name and the types of its formal
parameters; the signature does not include the method’s return type.
This book uses a few terms differently from the The Java Language Specifica-
tion. Unlike The Java Language Specification, this book uses inheritance as a syn-
onym for subclassing. Instead of using the term inheritance for interfaces, this
Official Release Name
Engineering Version Number
JDK 1.1.x / JRE 1.1.x
1.1
Java 2 Platform, Standard Edition, v 1.2 
1.2
Java 2 Platform, Standard Edition, v 1.3
1.3
Java 2 Platform, Standard Edition, v 1.4
1.4
Java 2 Platform, Standard Edition, v 5.0
1.5
Java Platform, Standard Edition 6
1.6

CHAPTER 1
INTRODUCTION
book simply states that a class implements an interface or that one interface
extends another. To describe the access level that applies when none is specified,
this book uses the descriptive term package-private instead of the technically cor-
rect term default access [JLS, 6.6.1].
This book uses a few technical terms that are not defined in The Java Lan-
guage Specification. The term exported API, or simply API, refers to the classes,
interfaces, constructors, members, and serialized forms by which a programmer
accesses a class, interface, or package. (The term API, which is short for applica-
tion programming interface, is used in preference to the otherwise preferable term
interface to avoid confusion with the language construct of that name.) A pro-
grammer who writes a program that uses an API is referred to as a user of the API.
A class whose implementation uses an API is a client of the API.
Classes, interfaces, constructors, members, and serialized forms are collec-
tively known as API elements. An exported API consists of the API elements that
are accessible outside of the package that defines the API. These are the API ele-
ments that any client can use and the author of the API commits to support. Not
coincidentally, they are also the elements for which the Javadoc utility generates
documentation in its default mode of operation. Loosely speaking, the exported
API of a package consists of the public and protected members and constructors
of every public class or interface in the package.

C H A P T E R 2
Creating and Destroying Objects
THIS chapter concerns creating and destroying objects: when and how to create
them, when and how to avoid creating them, how to ensure they are destroyed in a
timely manner, and how to manage any cleanup actions that must precede their
destruction.
Item 1:
Consider static factory methods instead of constructors
The normal way for a class to allow a client to obtain an instance of itself is to pro-
vide a public constructor. There is another technique that should be a part of every
programmer’s toolkit. A class can provide a public static factory method, which is
simply a static method that returns an instance of the class. Here’s a simple exam-
ple from Boolean (the boxed primitive class for the primitive type boolean). This
method translates a boolean primitive value into a Boolean object reference:
public static Boolean valueOf(boolean b) {
return b ? Boolean.TRUE : Boolean.FALSE;
}
Note that a static factory method is not the same as the Factory Method pattern
from Design Patterns [Gamma95, p. 107]. The static factory method described in
this item has no direct equivalent in Design Patterns.
A class can provide its clients with static factory methods instead of, or in
addition to, constructors. Providing a static factory method instead of a public
constructor has both advantages and disadvantages.
One advantage of static factory methods is that, unlike constructors, they
have names. If the parameters to a constructor do not, in and of themselves,
describe the object being returned, a static factory with a well-chosen name is eas-
ier to use and the resulting client code easier to read. For example, the constructor

CHAPTER 2
CREATING AND DESTROYING OBJECTS
BigInteger(int, int, Random), which returns a BigInteger that is probably
prime, would have been better expressed as a static factory method named BigIn-
teger.probablePrime. (This method was eventually added in the 1.4 release.)
A class can have only a single constructor with a given signature. Program-
mers have been known to get around this restriction by providing two constructors
whose parameter lists differ only in the order of their parameter types. This is a
really bad idea. The user of such an API will never be able to remember which
constructor is which and will end up calling the wrong one by mistake. People
reading code that uses these constructors will not know what the code does with-
out referring to the class documentation.
Because they have names, static factory methods don’t share the restriction
discussed in the previous paragraph. In cases where a class seems to require multi-
ple constructors with the same signature, replace the constructors with static fac-
tory methods and carefully chosen names to highlight their differences.
A second advantage of static factory methods is that, unlike constructors,
they are not required to create a new object each time they’re invoked. This
allows immutable classes (Item 15) to use preconstructed instances, or to cache
instances as they’re constructed, and dispense them repeatedly to avoid creating
unnecessary duplicate objects. The Boolean.valueOf(boolean) method illus-
trates this technique: it never creates an object. This technique is similar to the
Flyweight pattern [Gamma95, p. 195]. It can greatly improve performance if
equivalent objects are requested often, especially if they are expensive to create.
The ability of static factory methods to return the same object from repeated
invocations allows classes to maintain strict control over what instances exist at
any time. Classes that do this are said to be instance-controlled. There are several
reasons to write instance-controlled classes. Instance control allows a class to
guarantee that it is a singleton (Item 3) or noninstantiable (Item 4). Also, it allows
an immutable class (Item 15) to make the guarantee that no two equal instances
exist: a.equals(b) if and only if a==b. If a class makes this guarantee, then its cli-
ents can use the == operator instead of the equals(Object) method, which may
result in improved performance. Enum types (Item 30) provide this guarantee.
A third advantage of static factory methods is that, unlike constructors,
they can return an object of any subtype of their return type. This gives you
great flexibility in choosing the class of the returned object. 
One application of this flexibility is that an API can return objects without
making their classes public. Hiding implementation classes in this fashion leads to
a very compact API. This technique lends itself to interface-based frameworks
(Item 18), where interfaces provide natural return types for static factory methods.

ITEM 1: CONSIDER STATIC FACTORY METHODS INSTEAD OF CONSTRUCTORS
Interfaces can’t have static methods, so by convention, static factory methods for
an interface named Type are put in a noninstantiable class (Item 4) named Types.
For example, the Java Collections Framework has thirty-two convenience
implementations of its collection interfaces, providing unmodifiable collections,
synchronized collections, and the like. Nearly all of these implementations are
exported via static factory methods in one noninstantiable class (java.util.Col-
lections). The classes of the returned objects are all nonpublic.
The Collections Framework API is much smaller than it would have been had
it exported thirty-two separate public classes, one for each convenience imple-
mentation. It is not just the bulk of the API that is reduced, but the conceptual
weight. The user knows that the returned object has precisely the API specified by
its interface, so there is no need to read additional class documentation for the
implementation classes. Furthermore, using such a static factory method requires
the client to refer to the returned object by its interface rather than its implementa-
tion class, which is generally good practice (Item 52).
Not only can the class of an object returned by a public static factory method
be nonpublic, but the class can vary from invocation to invocation depending on
the values of the parameters to the static factory. Any class that is a subtype of the
declared return type is permissible. The class of the returned object can also vary
from release to release for enhanced software maintainability and performance.
The class java.util.EnumSet (Item 32), introduced in release 1.5, has no
public constructors, only static factories. They return one of two implementations,
depending on the size of the underlying enum type: if it has sixty-four or fewer
elements, as most enum types do, the static factories return a RegularEnumSet
instance, which is backed by a single long; if the enum type has sixty-five or more
elements, the factories return a JumboEnumSet instance, backed by a long array. 
The existence of these two implementation classes is invisible to clients. If
RegularEnumSet ceased to offer performance advantages for small enum types, it
could be eliminated from a future release with no ill effects. Similarly, a future
release could add a third or fourth implementation of EnumSet if it proved benefi-
cial for performance. Clients neither know nor care about the class of the object
they get back from the factory; they care only that it is some subclass of EnumSet.
The class of the object returned by a static factory method need not even exist
at the time the class containing the method is written. Such flexible static factory
methods form the basis of service provider frameworks, such as the Java Database
Connectivity API (JDBC). A service provider framework is a system in which
multiple service providers implement a service, and the system makes the imple-
mentations available to its clients, decoupling them from the implementations.

CHAPTER 2
CREATING AND DESTROYING OBJECTS
There are three essential components of a service provider framework: a ser-
vice interface, which providers implement; a provider registration API, which the
system uses to register implementations, giving clients access to them; and a ser-
vice access API, which clients use to obtain an instance of the service. The service
access API typically allows but does not require the client to specify some criteria
for choosing a provider. In the absence of such a specification, the API returns an
instance of a default implementation. The service access API is the “flexible static
factory” that forms the basis of the service provider framework.
An optional fourth component of a service provider framework is a service
provider interface, which providers implement to create instances of their service
implementation. In the absence of a service provider interface, implementations
are registered by class name and instantiated reflectively (Item 53). In the case of
JDBC, Connection plays the part of the service interface, DriverManager.reg-
isterDriver is the provider registration API, DriverManager.getConnection is
the service access API, and Driver is the service provider interface.
There are numerous variants of the service provider framework pattern. For
example, the service access API can return a richer service interface than the one
required of the provider, using the Adapter pattern [Gamma95, p. 139]. Here is a
simple implementation with a service provider interface and a default provider:
// Service provider framework sketch
// Service interface
public interface Service {
... // Service-specific methods go here
}
// Service provider interface
public interface Provider {
Service newService();
}
// Noninstantiable class for service registration and access
public class Services {
private Services() { }
// Prevents instantiation (Item 4)
// Maps service names to services
private static final Map<String, Provider> providers =
new ConcurrentHashMap<String, Provider>();
public static final String DEFAULT_PROVIDER_NAME = "<def>";

ITEM 1: CONSIDER STATIC FACTORY METHODS INSTEAD OF CONSTRUCTORS
// Provider registration API
public static void registerDefaultProvider(Provider p) {
registerProvider(DEFAULT_PROVIDER_NAME, p);
}
public static void registerProvider(String name, Provider p){
providers.put(name, p);
}
// Service access API
public static Service newInstance() {
return newInstance(DEFAULT_PROVIDER_NAME);
}
public static Service newInstance(String name) {
Provider p = providers.get(name);
if (p == null)
throw new IllegalArgumentException(
"No provider registered with name: " + name);
return p.newService();
}
}
A fourth advantage of static factory methods is that they reduce the ver-
bosity of creating parameterized type instances. Unfortunately, you must spec-
ify the type parameters when you invoke the constructor of a parameterized class
even if they’re obvious from context. This typically requires you to provide the
type parameters twice in quick succession:
Map<String, List<String>> m = 
new HashMap<String, List<String>>();
This redundant specification quickly becomes painful as the length and complex-
ity of the type parameters increase. With static factories, however, the compiler
can figure out the type parameters for you. This is known as type inference. For
example, suppose that HashMap provided this static factory:
public static <K, V> HashMap<K, V> newInstance() {
return new HashMap<K, V>();
}
Then you could replace the wordy declaration above with this succinct alternative:
Map<String, List<String>> m = HashMap.newInstance();
Someday the language may perform this sort of type inference on constructor
invocations as well as method invocations, but as of release 1.6, it does not.

CHAPTER 2
CREATING AND DESTROYING OBJECTS
Unfortunately, the standard collection implementations such as HashMap do
not have factory methods as of release 1.6, but you can put these methods in your
own utility class. More importantly, you can provide such static factories in your
own parameterized classes.
The main disadvantage of providing only static factory methods is that
classes without public or protected constructors cannot be subclassed. The
same is true for nonpublic classes returned by public static factories. For example,
it is impossible to subclass any of the convenience implementation classes in the
Collections Framework. Arguably this can be a blessing in disguise, as it encour-
ages programmers to use composition instead of inheritance (Item 16).
A second disadvantage of static factory methods is that they are not
readily distinguishable from other static methods. They do not stand out in API
documentation in the way that constructors do, so it can be difficult to figure out
how to instantiate a class that provides static factory methods instead of construc-
tors. The Javadoc tool may someday draw attention to static factory methods. In
the meantime, you can reduce this disadvantage by drawing attention to static fac-
tories in class or interface comments, and by adhering to common naming conven-
tions. Here are some common names for static factory methods:
• valueOf—Returns an instance that has, loosely speaking, the same value as its
parameters. Such static factories are effectively type-conversion methods.
• of—A concise alternative to valueOf, popularized by EnumSet (Item 32).
• getInstance—Returns an instance that is described by the parameters but
cannot be said to have the same value. In the case of a singleton, getInstance
takes no parameters and returns the sole instance.
• newInstance—Like getInstance, except that newInstance guarantees that
each instance returned is distinct from all others.
• getType—Like getInstance, but used when the factory method is in a differ-
ent class. Type indicates the type of object returned by the factory method.
• newType—Like newInstance, but used when the factory method is in a differ-
ent class. Type indicates the type of object returned by the factory method.
In summary, static factory methods and public constructors both have their
uses, and it pays to understand their relative merits. Often static factories are pref-
erable, so avoid the reflex to provide public constructors without first considering
static factories.

ITEM 2: CONSIDER A BUILDER WHEN FACED WITH MANY CONSTRUCTOR PARAMETERS
Item 2:
Consider a builder when faced with many constructor 
parameters
Static factories and constructors share a limitation: they do not scale well to large
numbers of optional parameters. Consider the case of a class representing the
Nutrition Facts label that appears on packaged foods. These labels have a few
required fields—serving size, servings per container, and calories per serving—
and over twenty optional fields—total fat, saturated fat, trans fat, cholesterol,
sodium, and so on. Most products have nonzero values for only a few of these
optional fields.
What sort of constructors or static factories should you write for such a class?
Traditionally, programmers have used the telescoping constructor pattern, in
which you provide a constructor with only the required parameters, another with a
single optional parameter, a third with two optional parameters, and so on, culmi-
nating in a constructor with all the optional parameters. Here’s how it looks in
practice. For brevity’s sake, only four optional fields are shown:
// Telescoping constructor pattern - does not scale well!
public class NutritionFacts {
private final int servingSize;
// (mL) 
required
private final int servings;
// (per container) required
private final int calories;
// 
optional
private final int fat;
// (g)
optional
private final int sodium;
// (mg)
optional
private final int carbohydrate;
// (g)
 
optional
public NutritionFacts(int servingSize, int servings) {
this(servingSize, servings, 0);
}
public NutritionFacts(int servingSize, int servings,
int calories) {
this(servingSize, servings, calories, 0);
}
public NutritionFacts(int servingSize, int servings,
int calories, int fat) {
this(servingSize, servings, calories, fat, 0);
}
public NutritionFacts(int servingSize, int servings,
int calories, int fat, int sodium) {
this(servingSize, servings, calories, fat, sodium, 0);
}

CHAPTER 2
CREATING AND DESTROYING OBJECTS
public NutritionFacts(int servingSize, int servings,
int calories, int fat, int sodium, int carbohydrate) {
this.servingSize  = servingSize;
this.servings  = servings;
this.calories  = calories;
this.fat  = fat;
this.sodium  = sodium;
this.carbohydrate = carbohydrate;
}
}
When you want to create an instance, you use the constructor with the shortest
parameter list containing all the parameters you want to set:
NutritionFacts cocaCola =
new NutritionFacts(240, 8, 100, 0, 35, 27);
Typically this constructor invocation will require many parameters that you don’t
want to set, but you’re forced to pass a value for them anyway. In this case, we
passed a value of 0 for fat. With “only” six parameters this may not seem so bad,
but it quickly gets out of hand as the number of parameters increases. 
In short, the telescoping constructor pattern works, but it is hard to write
client code when there are many parameters, and harder still to read it. The
reader is left wondering what all those values mean and must carefully count
parameters to find out. Long sequences of identically typed parameters can cause
subtle bugs. If the client accidentally reverses two such parameters, the compiler
won’t complain, but the program will misbehave at runtime (Item 40).
A second alternative when you are faced with many constructor parameters is
the JavaBeans pattern, in which you call a parameterless constructor to create the
object and then call setter methods to set each required parameter and each
optional parameter of interest:
// JavaBeans Pattern - allows inconsistency, mandates mutability
public class NutritionFacts {
// Parameters initialized to default values (if any)
private int servingSize
= -1;  // Required; no default value
private int servings  = -1;  //  "  "  "  "
private int calories  = 0;
private int fat  = 0;
private int sodium  = 0;
private int carbohydrate = 0;
public NutritionFacts() { }

ITEM 2: CONSIDER A BUILDER WHEN FACED WITH MANY CONSTRUCTOR PARAMETERS
// Setters
public void setServingSize(int val)
{ servingSize = val; }
public void setServings(int val)
{ servings = val; }
public void setCalories(int val)
{ calories = val; }
public void setFat(int val)
{ fat = val; }
public void setSodium(int val)
{ sodium = val; }
public void setCarbohydrate(int val) { carbohydrate = val; }
}
This pattern has none of the disadvantages of the telescoping constructor pattern.
It is easy, if a bit wordy, to create instances, and easy to read the resulting code:
NutritionFacts cocaCola = new NutritionFacts();
cocaCola.setServingSize(240);
cocaCola.setServings(8);
cocaCola.setCalories(100);
cocaCola.setSodium(35);
cocaCola.setCarbohydrate(27);
Unfortunately, the JavaBeans pattern has serious disadvantages of its own.
Because construction is split across multiple calls, a JavaBean may be in an
inconsistent state partway through its construction. The class does not have
the option of enforcing consistency merely by checking the validity of the con-
structor parameters. Attempting to use an object when it’s in an inconsistent state
may cause failures that are far removed from the code containing the bug, hence
difficult to debug. A related disadvantage is that the JavaBeans pattern pre-
cludes the possibility of making a class immutable (Item 15), and requires
added effort on the part of the programmer to ensure thread safety.
It is possible to reduce these disadvantages by manually “freezing” the object
when its construction is complete and not allowing it to be used until frozen, but
this variant is unwieldy and rarely used in practice. Moreover, it can cause errors
at runtime, as the compiler cannot ensure that the programmer calls the freeze
method on an object before using it.
Luckily, there is a third alternative that combines the safety of the telescoping
constructor pattern with the readability of the JavaBeans pattern. It is a form of the
Builder pattern [Gamma95, p. 97]. Instead of making the desired object directly,
the client calls a constructor (or static factory) with all of the required parameters
and gets a builder object. Then the client calls setter-like methods on the builder
object to set each optional parameter of interest. Finally, the client calls a parame-
terless build method to generate the object, which is immutable. The builder is a
static member class (Item 22) of the class it builds. Here’s how it looks in practice:

CHAPTER 2
CREATING AND DESTROYING OBJECTS
// Builder Pattern
public class NutritionFacts {
private final int servingSize;
private final int servings;
private final int calories;
private final int fat;
private final int sodium;
private final int carbohydrate;
public static class Builder {
// Required parameters
private final int servingSize;
private final int servings;
// Optional parameters - initialized to default values
private int calories
= 0;
private int fat
= 0;
private int carbohydrate
= 0;
private int sodium
= 0;
public Builder(int servingSize, int servings) {
this.servingSize = servingSize;
this.servings  = servings;
}
public Builder calories(int val)
{ calories = val;
return this; }
public Builder fat(int val)
{ fat = val;
return this; }
public Builder carbohydrate(int val)
{ carbohydrate = val;
return this; }
public Builder sodium(int val)
{ sodium = val;
return this; }
public NutritionFacts build() {
return new NutritionFacts(this);
}
}
private NutritionFacts(Builder builder) {
servingSize
= builder.servingSize;
servings
= builder.servings;
calories
= builder.calories;
fat
= builder.fat;
sodium
= builder.sodium;
carbohydrate = builder.carbohydrate;
}
}

ITEM 2: CONSIDER A BUILDER WHEN FACED WITH MANY CONSTRUCTOR PARAMETERS
Note that NutritionFacts is immutable, and that all parameter default values
are in a single location. The builder’s setter methods return the builder itself so
that invocations can be chained. Here’s how the client code looks:
NutritionFacts cocaCola = new NutritionFacts.Builder(240, 8).
calories(100).sodium(35).carbohydrate(27).build();
This client code is easy to write and, more importantly, to read. The Builder pat-
tern simulates named optional parameters as found in Ada and Python.
Like a constructor, a builder can impose invariants on its parameters. The
build method can check these invariants. It is critical that they be checked after
copying the parameters from the builder to the object, and that they be checked on
the object fields rather than the builder fields (Item 39). If any invariants are vio-
lated, the build method should throw an IllegalStateException (Item 60). The
exception’s detail method should indicate which invariant is violated (Item 63).
Another way to impose invariants involving multiple parameters is to have
setter methods take entire groups of parameters on which some invariant must
hold. If the invariant isn’t satisfied, the setter method throws an IllegalArgu-
mentException. This has the advantage of detecting the invariant failure as soon
as the invalid parameters are passed, instead of waiting for build to be invoked.
A minor advantage of builders over constructors is that builders can have mul-
tiple varargs parameters. Constructors, like methods, can have only one varargs
parameter. Because builders use separate methods to set each parameter, they can
have as many varargs parameters as you like, up to one per setter method.
The Builder pattern is flexible. A single builder can be used to build multiple
objects. The parameters of the builder can be tweaked between object creations to
vary the objects. The builder can fill in some fields automatically, such as a serial
number that automatically increases each time an object is created.
A builder whose parameters have been set makes a fine Abstract Factory
[Gamma95, p. 87]. In other words, a client can pass such a builder to a method to
enable the method to create one or more objects for the client. To enable this
usage, you need a type to represent the builder. If you are using release 1.5 or a
later release, a single generic type (Item 26) suffices for all builders, no matter
what type of object they’re building:
// A builder for objects of type T
public interface Builder<T> {
public T build();
}

CHAPTER 2
CREATING AND DESTROYING OBJECTS
Note that our NutritionFacts.Builder class could be declared to implement
Builder<NutritionFacts>.
Methods that take a Builder instance would typically constrain the builder’s
type parameter using a bounded wildcard type (Item 28). For example, here is a
method that builds a tree using a client-provided Builder instance to build each
node:
Tree buildTree(Builder<? extends Node> nodeBuilder) { ... }
The traditional Abstract Factory implementation in Java has been the Class
object, with the newInstance method playing the part of the build method. This
usage is fraught with problems. The newInstance method always attempts to
invoke the class’s parameterless constructor, which may not even exist. You don’t
get a compile-time error if the class has no accessible parameterless constructor.
Instead, the client code must cope with InstantiationException or IllegalAc-
cessException at runtime, which is ugly and inconvenient. Also, the newIn-
stance method propagates any exceptions thrown by the parameterless
constructor, even though newInstance lacks the corresponding throws clauses. In
other words, Class.newInstance breaks compile-time exception checking. The
Builder interface, shown above, corrects these deficiencies.
The Builder pattern does have disadvantages of its own. In order to create an
object, you must first create its builder. While the cost of creating the builder is
unlikely to be noticeable in practice, it could be a problem in some performance-
critical situations. Also, the Builder pattern is more verbose than the telescoping
constructor pattern, so it should be used only if there are enough parameters, say,
four or more. But keep in mind that you may want to add parameters in the future.
If you start out with constructors or static factories, and add a builder when the
class evolves to the point where the number of parameters starts to get out of hand,
the obsolete constructors or static factories will stick out like a sore thumb. There-
fore, it’s often better to start with a builder in the first place.
In summary, the Builder pattern is a good choice when designing classes
whose constructors or static factories would have more than a handful of
parameters, especially if most of those parameters are optional. Client code is
much easier to read and write with builders than with the traditional telescoping
constructor pattern, and builders are much safer than JavaBeans.

ITEM 3: ENFORCE THE SINGLETON PROPERTY WITH A PRIVATE CONSTRUCTOR OR AN ENUM TYPE
Item 3:
Enforce the singleton property with a private 
constructor or an enum type 
A singleton is simply a class that is instantiated exactly once [Gamma95, p. 127].
Singletons typically represent a system component that is intrinsically unique,
such as the window manager or file system. Making a class a singleton can
make it difficult to test its clients, as it’s impossible to substitute a mock imple-
mentation for a singleton unless it implements an interface that serves as its type.
Before release 1.5, there were two ways to implement singletons. Both are
based on keeping the constructor private and exporting a public static member to
provide access to the sole instance. In one approach, the member is a final field:
// Singleton with public final field
public class Elvis {
public static final Elvis INSTANCE = new Elvis();
private Elvis() { ... }
public void leaveTheBuilding() { ... }
}
The private constructor is called only once, to initialize the public static final field
Elvis.INSTANCE. The lack of a public or protected constructor guarantees a
“monoelvistic” universe: exactly one Elvis instance will exist once the Elvis
class is initialized—no more, no less. Nothing that a client does can change this,
with one caveat: a privileged client can invoke the private constructor reflectively
(Item 53) with the aid of the AccessibleObject.setAccessible method. If you
need to defend against this attack, modify the constructor to make it throw an
exception if it’s asked to create a second instance.
In the second approach to implementing singletons, the public member is a
static factory method:
// Singleton with static factory
public class Elvis {
private static final Elvis INSTANCE = new Elvis();
private Elvis() { ... }
public static Elvis getInstance() { return INSTANCE; }
public void leaveTheBuilding() { ... }
}
All calls to Elvis.getInstance return the same object reference, and no other
Elvis instance will ever be created (with the same caveat mentioned above).

CHAPTER 2
CREATING AND DESTROYING OBJECTS
The main advantage of the public field approach is that the declarations make
it clear that the class is a singleton: the public static field is final, so it will always
contain the same object reference. There is no longer any performance advantage
to the public field approach: modern Java virtual machine (JVM) implementations
are almost certain to inline the call to the static factory method.
One advantage of the factory-method approach is that it gives you the flexibil-
ity to change your mind about whether the class should be a singleton without
changing its API. The factory method returns the sole instance but could easily be
modified to return, say, a unique instance for each thread that invokes it. A second
advantage, concerning generic types, is discussed in Item 27. Often neither of
these advantages is relevant, and the final-field approach is simpler.
To make a singleton class that is implemented using either of the previous
approaches serializable (Chapter 11), it is not sufficient merely to add imple-
ments Serializable to its declaration. To maintain the singleton guarantee, you
have to declare all instance fields transient and provide a readResolve method
(Item 77). Otherwise, each time a serialized instance is deserialized, a new
instance will be created, leading, in the case of our example, to spurious Elvis
sightings. To prevent this, add this readResolve method to the Elvis class:
// readResolve method to preserve singleton property
private Object readResolve() {
// Return the one true Elvis and let the garbage collector
// take care of the Elvis impersonator.
return INSTANCE;
}
As of release 1.5, there is a third approach to implementing singletons. Simply
make an enum type with one element:
// Enum singleton - the preferred approach
public enum Elvis {
INSTANCE;
public void leaveTheBuilding() { ... }
}
This approach is functionally equivalent to the public field approach, except that it
is more concise, provides the serialization machinery for free, and provides an
ironclad guarantee against multiple instantiation, even in the face of sophisticated
serialization or reflection attacks. While this approach has yet to be widely
adopted, a single-element enum type is the best way to implement a singleton.

ITEM 4: ENFORCE NONINSTANTIABILITY WITH A PRIVATE CONSTRUCTOR
Item 4:
Enforce noninstantiability with a private constructor
Occasionally you’ll want to write a class that is just a grouping of static methods
and static fields. Such classes have acquired a bad reputation because some people
abuse them to avoid thinking in terms of objects, but they do have valid uses. They
can be used to group related methods on primitive values or arrays, in the manner
of java.lang.Math or java.util.Arrays. They can also be used to group static
methods, including factory methods (Item 1), for objects that implement a particu-
lar interface, in the manner of java.util.Collections. Lastly, they can be used
to group methods on a final class, instead of extending the class.
Such utility classes were not designed to be instantiated: an instance would be
nonsensical. In the absence of explicit constructors, however, the compiler pro-
vides a public, parameterless default constructor. To a user, this constructor is
indistinguishable from any other. It is not uncommon to see unintentionally
instantiable classes in published APIs.
Attempting to enforce noninstantiability by making a class abstract does
not work. The class can be subclassed and the subclass instantiated. Furthermore,
it misleads the user into thinking the class was designed for inheritance (Item 17).
There is, however, a simple idiom to ensure noninstantiability. A default construc-
tor is generated only if a class contains no explicit constructors, so a class can be
made noninstantiable by including a private constructor:
// Noninstantiable utility class
public class UtilityClass {
// Suppress default constructor for noninstantiability
private UtilityClass() {
throw new AssertionError();
}
...
// Remainder omitted
}
Because the explicit constructor is private, it is inaccessible outside of the
class. The AssertionError isn’t strictly required, but it provides insurance in
case the constructor is accidentally invoked from within the class. It guarantees
that the class will never be instantiated under any circumstances. This idiom is
mildly counterintuitive, as the constructor is provided expressly so that it cannot
be invoked. It is therefore wise to include a comment, as shown above.
As a side effect, this idiom also prevents the class from being subclassed. All
constructors must invoke a superclass constructor, explicitly or implicitly, and a
subclass would have no accessible superclass constructor to invoke.

CHAPTER 2
CREATING AND DESTROYING OBJECTS
Item 5:
Avoid creating unnecessary objects
It is often appropriate to reuse a single object instead of creating a new function-
ally equivalent object each time it is needed. Reuse can be both faster and more
stylish. An object can always be reused if it is immutable (Item 15).
As an extreme example of what not to do, consider this statement:
String s = new String("stringette");  // DON'T DO THIS!
The statement creates a new String instance each time it is executed, and
none of those object creations is necessary. The argument to the String construc-
tor ("stringette") is itself a String instance, functionally identical to all of the
objects created by the constructor. If this usage occurs in a loop or in a frequently
invoked method, millions of String instances can be created needlessly.
The improved version is simply the following:
 String s = "stringette";
This version uses a single String instance, rather than creating a new one
each time it is executed. Furthermore, it is guaranteed that the object will be
reused by any other code running in the same virtual machine that happens to con-
tain the same string literal [JLS, 3.10.5].
You can often avoid creating unnecessary objects by using static factory meth-
ods (Item 1) in preference to constructors on immutable classes that provide both.
For example, the static factory method Boolean.valueOf(String) is almost
always preferable to the constructor Boolean(String). The constructor creates a
new object each time it’s called, while the static factory method is never required
to do so and won’t in practice.
In addition to reusing immutable objects, you can also reuse mutable objects
if you know they won’t be modified. Here is a slightly more subtle, and much
more common, example of what not to do. It involves mutable Date objects that
are never modified once their values have been computed. This class models a
person and has an isBabyBoomer method that tells whether the person is a “baby
boomer,” in other words, whether the person was born between 1946 and 1964:
public class Person {
private final Date birthDate;
// Other fields, methods, and constructor omitted

ITEM 5: AVOID CREATING UNNECESSARY OBJECTS
// DON'T DO THIS!
public boolean isBabyBoomer() {
// Unnecessary allocation of expensive object
Calendar gmtCal =
Calendar.getInstance(TimeZone.getTimeZone("GMT"));
gmtCal.set(1946, Calendar.JANUARY, 1, 0, 0, 0);
Date boomStart = gmtCal.getTime();
gmtCal.set(1965, Calendar.JANUARY, 1, 0, 0, 0);
Date boomEnd = gmtCal.getTime();
return birthDate.compareTo(boomStart) >= 0 &&
birthDate.compareTo(boomEnd)  <  0;
}
}
The isBabyBoomer method unnecessarily creates a new Calendar, TimeZone,
and two Date instances each time it is invoked. The version that follows avoids
this inefficiency with a static initializer:
class Person {
private final Date birthDate;
// Other fields, methods, and constructor omitted
/**
* The starting and ending dates of the baby boom.
*/
private static final Date BOOM_START;
private static final Date BOOM_END;
static {
Calendar gmtCal =
Calendar.getInstance(TimeZone.getTimeZone("GMT"));
gmtCal.set(1946, Calendar.JANUARY, 1, 0, 0, 0);
BOOM_START = gmtCal.getTime();
gmtCal.set(1965, Calendar.JANUARY, 1, 0, 0, 0);
BOOM_END = gmtCal.getTime();
}
public boolean isBabyBoomer() {
return birthDate.compareTo(BOOM_START) >= 0 &&
birthDate.compareTo(BOOM_END)  <  0;
}
}
The improved version of the Person class creates Calendar, TimeZone, and
Date instances only once, when it is initialized, instead of creating them every
time isBabyBoomer is invoked. This results in significant performance gains if the

CHAPTER 2
CREATING AND DESTROYING OBJECTS
method is invoked frequently. On my machine, the original version takes 32,000
ms for 10 million invocations, while the improved version takes 130 ms, which is
about 250 times faster. Not only is performance improved, but so is clarity.
Changing boomStart and boomEnd from local variables to static final fields makes
it clear that these dates are treated as constants, making the code more understand-
able. In the interest of full disclosure, the savings from this sort of optimization
will not always be this dramatic, as Calendar instances are particularly expensive
to create.
If the improved version of the Person class is initialized but its isBabyBoomer
method is never invoked, the BOOM_START and BOOM_END fields will be initialized
unnecessarily. It would be possible to eliminate the unnecessary initializations by
lazily initializing these fields (Item 71) the first time the isBabyBoomer method is
invoked, but it is not recommended. As is often the case with lazy initialization, it
would complicate the implementation and would be unlikely to result in a notice-
able performance improvement beyond what we’ve already achieved (Item 55).
In the previous examples in this item, it was obvious that the objects in ques-
tion could be reused because they were not modified after initialization. There are
other situations where it is less obvious. Consider the case of adapters [Gamma95,
p. 139], also known as views. An adapter is an object that delegates to a backing
object, providing an alternative interface to the backing object. Because an adapter
has no state beyond that of its backing object, there’s no need to create more than
one instance of a given adapter to a given object.
For example, the keySet method of the Map interface returns a Set view of the
Map object, consisting of all the keys in the map. Naively, it would seem that every
call to keySet would have to create a new Set instance, but every call to keySet
on a given Map object may return the same Set instance. Although the returned
Set instance is typically mutable, all of the returned objects are functionally iden-
tical: when one of the returned objects changes, so do all the others because
they’re all backed by the same Map instance. While it is harmless to create multiple
instances of the keySet view object, it is also unnecessary.
There’s a new way to create unnecessary objects in release 1.5. It is called
autoboxing, and it allows the programmer to mix primitive and boxed primitive
types, boxing and unboxing automatically as needed. Autoboxing blurs but does
not erase the distinction between primitive and boxed primitive types. There are
subtle semantic distinctions, and not-so-subtle performance differences (Item 49).
Consider the following program, which calculates the sum of all the positive int

ITEM 5: AVOID CREATING UNNECESSARY OBJECTS
values. To do this, the program has to use long arithmetic, because an int is not
big enough to hold the sum of all the positive int values:
// Hideously slow program! Can you spot the object creation?
public static void main(String[] args) {
Long sum = 0L;
for (long i = 0; i < Integer.MAX_VALUE; i++) {
sum += i;
}
System.out.println(sum);
}
This program gets the right answer, but it is much slower than it should be,
due to a one-character typographical error. The variable sum is declared as a Long
instead of a long, which means that the program constructs about 231 unnecessary
Long instances (roughly one for each time the long i is added to the Long sum).
Changing the declaration of sum from Long to long reduces the runtime from 43
seconds to 6.8 seconds on my machine. The lesson is clear: prefer primitives to
boxed primitives, and watch out for unintentional autoboxing.
This item should not be misconstrued to imply that object creation is expen-
sive and should be avoided. On the contrary, the creation and reclamation of small
objects whose constructors do little explicit work is cheap, especially on modern
JVM implementations. Creating additional objects to enhance the clarity, simplic-
ity, or power of a program is generally a good thing. 
Conversely, avoiding object creation by maintaining your own object pool is a
bad idea unless the objects in the pool are extremely heavyweight. The classic
example of an object that does justify an object pool is a database connection. The
cost of establishing the connection is sufficiently high that it makes sense to reuse
these objects. Also, your database license may limit you to a fixed number of con-
nections. Generally speaking, however, maintaining your own object pools clut-
ters your code, increases memory footprint, and harms performance. Modern
JVM implementations have highly optimized garbage collectors that easily out-
perform such object pools on lightweight objects.
The counterpoint to this item is Item 39 on defensive copying. Item 5 says,
“Don’t create a new object when you should reuse an existing one,” while Item 39
says, “Don’t reuse an existing object when you should create a new one.” Note
that the penalty for reusing an object when defensive copying is called for is far
greater than the penalty for needlessly creating a duplicate object. Failing to make
defensive copies where required can lead to insidious bugs and security holes; cre-
ating objects unnecessarily merely affects style and performance.

CHAPTER 2
CREATING AND DESTROYING OBJECTS
Item 6:
Eliminate obsolete object references
When you switch from a language with manual memory management, such as C
or C++, to a garbage-collected language, your job as a programmer is made much
easier by the fact that your objects are automatically reclaimed when you’re
through with them. It seems almost like magic when you first experience it. It can
easily lead to the impression that you don’t have to think about memory manage-
ment, but this isn’t quite true.
Consider the following simple stack implementation:
// Can you spot the "memory leak"?
public class Stack {
private Object[] elements;
private int size = 0;
private static final int DEFAULT_INITIAL_CAPACITY = 16;
public Stack() {
elements = new Object[DEFAULT_INITIAL_CAPACITY];
}
public void push(Object e) {
ensureCapacity();
elements[size++] = e;
}
public Object pop() {
if (size == 0)
throw new EmptyStackException();
return elements[--size];
}
/**
* Ensure space for at least one more element, roughly
* doubling the capacity each time the array needs to grow.
*/
private void ensureCapacity() {
if (elements.length == size)
elements = Arrays.copyOf(elements, 2 * size + 1);
}
}
There’s nothing obviously wrong with this program (but see Item 26 for a
generic version). You could test it exhaustively, and it would pass every test with
flying colors, but there’s a problem lurking. Loosely speaking, the program has a
“memory leak,” which can silently manifest itself as reduced performance due to

ITEM 6: ELIMINATE OBSOLETE OBJECT REFERENCES
increased garbage collector activity or increased memory footprint. In extreme
cases, such memory leaks can cause disk paging and even program failure with an
OutOfMemoryError, but such failures are relatively rare.
So where is the memory leak? If a stack grows and then shrinks, the objects
that were popped off the stack will not be garbage collected, even if the program
using the stack has no more references to them. This is because the stack main-
tains obsolete references to these objects. An obsolete reference is simply a refer-
ence that will never be dereferenced again. In this case, any references outside of
the “active portion” of the element array are obsolete. The active portion consists
of the elements whose index is less than size.
Memory leaks in garbage-collected languages (more properly known as unin-
tentional object retentions) are insidious. If an object reference is unintentionally
retained, not only is that object excluded from garbage collection, but so too are
any objects referenced by that object, and so on. Even if only a few object refer-
ences are unintentionally retained, many, many objects may be prevented from
being garbage collected, with potentially large effects on performance.
The fix for this sort of problem is simple: null out references once they
become obsolete. In the case of our Stack class, the reference to an item becomes
obsolete as soon as it’s popped off the stack. The corrected version of the pop
method looks like this:
public Object pop() {
if (size == 0)
throw new EmptyStackException();
Object result = elements[--size];
elements[size] = null; // Eliminate obsolete reference
return result;
}
An added benefit of nulling out obsolete references is that, if they are subse-
quently dereferenced by mistake, the program will immediately fail with a
NullPointerException, rather than quietly doing the wrong thing. It is always
beneficial to detect programming errors as quickly as possible.
When programmers are first stung by this problem, they may overcompensate
by nulling out every object reference as soon as the program is finished using it.
This is neither necessary nor desirable, as it clutters up the program unnecessarily.
Nulling out object references should be the exception rather than the norm.
The best way to eliminate an obsolete reference is to let the variable that contained
the reference fall out of scope. This occurs naturally if you define each variable in
the narrowest possible scope (Item 45).

CHAPTER 2
CREATING AND DESTROYING OBJECTS
So when should you null out a reference? What aspect of the Stack class
makes it susceptible to memory leaks? Simply put, it manages its own memory.
The storage pool consists of the elements of the elements array (the object refer-
ence cells, not the objects themselves). The elements in the active portion of the
array (as defined earlier) are allocated, and those in the remainder of the array are
free. The garbage collector has no way of knowing this; to the garbage collector,
all of the object references in the elements array are equally valid. Only the pro-
grammer knows that the inactive portion of the array is unimportant. The pro-
grammer effectively communicates this fact to the garbage collector by manually
nulling out array elements as soon as they become part of the inactive portion.
Generally speaking, whenever a class manages its own memory, the pro-
grammer should be alert for memory leaks. Whenever an element is freed, any
object references contained in the element should be nulled out.
Another common source of memory leaks is caches. Once you put an
object reference into a cache, it’s easy to forget that it’s there and leave it in the
cache long after it becomes irrelevant. There are several solutions to this problem.
If you’re lucky enough to implement a cache for which an entry is relevant exactly
so long as there are references to its key outside of the cache, represent the cache
as a WeakHashMap; entries will be removed automatically after they become obso-
lete. Remember that WeakHashMap is useful only if the desired lifetime of cache
entries is determined by external references to the key, not the value.
More commonly, the useful lifetime of a cache entry is less well defined, with
entries becoming less valuable over time. Under these circumstances, the cache
should occasionally be cleansed of entries that have fallen into disuse. This can be
done by a background thread (perhaps a Timer or ScheduledThreadPoolExecu-
tor) or as a side effect of adding new entries to the cache. The LinkedHashMap
class facilitates the latter approach with its removeEldestEntry method. For
more sophisticated caches, you may need to use java.lang.ref directly.
A third common source of memory leaks is listeners and other callbacks.
If you implement an API where clients register callbacks but don’t deregister them
explicitly, they will accumulate unless you take some action. The best way to
ensure that callbacks are garbage collected promptly is to store only weak refer-
ences to them, for instance, by storing them only as keys in a WeakHashMap.
Because memory leaks typically do not manifest themselves as obvious fail-
ures, they may remain present in a system for years. They are typically discovered
only as a result of careful code inspection or with the aid of a debugging tool
known as a heap profiler. Therefore, it is very desirable to learn to anticipate prob-
lems like this before they occur and prevent them from happening.

ITEM 7: AVOID FINALIZERS
Item 7:
Avoid finalizers
Finalizers are unpredictable, often dangerous, and generally unnecessary.
Their use can cause erratic behavior, poor performance, and portability problems.
Finalizers have a few valid uses, which we’ll cover later in this item, but as a rule
of thumb, you should avoid finalizers.
C++ programmers are cautioned not to think of finalizers as Java’s analog of
C++ destructors. In C++, destructors are the normal way to reclaim the resources
associated with an object, a necessary counterpart to constructors. In Java, the gar-
bage collector reclaims the storage associated with an object when it becomes
unreachable, requiring no special effort on the part of the programmer. C++
destructors are also used to reclaim other nonmemory resources. In Java, the try-
finally block is generally used for this purpose.
One shortcoming of finalizers is that there is no guarantee they’ll be executed
promptly [JLS, 12.6]. It can take arbitrarily long between the time that an object
becomes unreachable and the time that its finalizer is executed. This means that
you should never do anything time-critical in a finalizer. For example, it is a
grave error to depend on a finalizer to close files, because open file descriptors are
a limited resource. If many files are left open because the JVM is tardy in execut-
ing finalizers, a program may fail because it can no longer open files.
The promptness with which finalizers are executed is primarily a function of
the garbage collection algorithm, which varies widely from JVM implementation
to JVM implementation. The behavior of a program that depends on the prompt-
ness of finalizer execution may likewise vary. It is entirely possible that such a
program will run perfectly on the JVM on which you test it and then fail miserably
on the JVM favored by your most important customer.
Tardy finalization is not just a theoretical problem. Providing a finalizer for a
class can, under rare conditions, arbitrarily delay reclamation of its instances. A
colleague debugged a long-running GUI application that was mysteriously dying
with an OutOfMemoryError. Analysis revealed that at the time of its death, the
application had thousands of graphics objects on its finalizer queue just waiting to
be finalized and reclaimed. Unfortunately, the finalizer thread was running at a
lower priority than another application thread, so objects weren’t getting finalized
at the rate they became eligible for finalization. The language specification makes
no guarantees as to which thread will execute finalizers, so there is no portable
way to prevent this sort of problem other than to refrain from using finalizers.
Not only does the language specification provide no guarantee that finalizers
will get executed promptly; it provides no guarantee that they’ll get executed at

CHAPTER 2
CREATING AND DESTROYING OBJECTS
all. It is entirely possible, even likely, that a program terminates without executing
finalizers on some objects that are no longer reachable. As a consequence, you
should never depend on a finalizer to update critical persistent state. For
example, depending on a finalizer to release a persistent lock on a shared resource
such as a database is a good way to bring your entire distributed system to a
grinding halt.
Don’t be seduced by the methods System.gc and System.runFinalization.
They may increase the odds of finalizers getting executed, but they don’t guaran-
tee it. The only methods that claim to guarantee finalization are System.runFi-
nalizersOnExit and its evil twin, Runtime.runFinalizersOnExit. These
methods are fatally flawed and have been deprecated [ThreadStop].
In case you are not yet convinced that finalizers should be avoided, here’s
another tidbit worth considering: if an uncaught exception is thrown during final-
ization, the exception is ignored, and finalization of that object terminates [JLS,
12.6]. Uncaught exceptions can leave objects in a corrupt state. If another thread
attempts to use such a corrupted object, arbitrary nondeterministic behavior may
result. Normally, an uncaught exception will terminate the thread and print a stack
trace, but not if it occurs in a finalizer—it won’t even print a warning.
Oh, and one more thing: there is a severe performance penalty for using
finalizers. On my machine, the time to create and destroy a simple object is about
5.6 ns. Adding a finalizer increases the time to 2,400 ns. In other words, it is about
430 times slower to create and destroy objects with finalizers.
So what should you do instead of writing a finalizer for a class whose objects
encapsulate resources that require termination, such as files or threads? Just pro-
vide an explicit termination method, and require clients of the class to invoke this
method on each instance when it is no longer needed. One detail worth mention-
ing is that the instance must keep track of whether it has been terminated: the
explicit termination method must record in a private field that the object is no
longer valid, and other methods must check this field and throw an Illegal-
StateException if they are called after the object has been terminated.
Typical examples of explicit termination methods are the close methods on
InputStream, OutputStream, and java.sql.Connection. Another example is
the cancel method on java.util.Timer, which performs the necessary state
change to cause the thread associated with a Timer instance to terminate itself
gently. Examples from java.awt include Graphics.dispose and Window.dis-
pose. These methods are often overlooked, with predictably dire performance
consequences. A related method is Image.flush, which deallocates all the

ITEM 7: AVOID FINALIZERS
resources associated with an Image instance but leaves it in a state where it can
still be used, reallocating the resources if necessary.
Explicit termination methods are typically used in combination with the
try-finally construct to ensure termination. Invoking the explicit termination
method inside the finally clause ensures that it will get executed even if an
exception is thrown while the object is being used:
// try-finally block guarantees execution of termination method
Foo foo = new Foo(...);
try {
// Do what must be done with foo
...
} finally {
foo.terminate();  // Explicit termination method
}
So what, if anything, are finalizers good for? There are perhaps two legitimate
uses. One is to act as a “safety net” in case the owner of an object forgets to call its
explicit termination method. While there’s no guarantee that the finalizer will be
invoked promptly, it may be better to free the resource late than never, in those
(hopefully rare) cases when the client fails to call the explicit termination method.
But the finalizer should log a warning if it finds that the resource has not been
terminated, as this indicates a bug in the client code, which should be fixed. If
you are considering writing such a safety-net finalizer, think long and hard about
whether the extra protection is worth the extra cost.
The four classes cited as examples of the explicit termination method pattern
(FileInputStream, FileOutputStream, Timer, and Connection) have finalizers
that serve as safety nets in case their termination methods aren’t called. Unfortu-
nately these finalizers do not log warnings. Such warnings generally can’t be
added after an API is published, as it would appear to break existing clients.
A second legitimate use of finalizers concerns objects with native peers. A
native peer is a native object to which a normal object delegates via native meth-
ods. Because a native peer is not a normal object, the garbage collector doesn’t
know about it and can’t reclaim it when its Java peer is reclaimed. A finalizer is an
appropriate vehicle for performing this task, assuming the native peer holds no
critical resources. If the native peer holds resources that must be terminated
promptly, the class should have an explicit termination method, as described
above. The termination method should do whatever is required to free the critical
resource. The termination method can be a native method, or it can invoke one.

CHAPTER 2
CREATING AND DESTROYING OBJECTS
It is important to note that “finalizer chaining” is not performed automatically.
If a class (other than Object) has a finalizer and a subclass overrides it, the sub-
class finalizer must invoke the superclass finalizer manually. You should finalize
the subclass in a try block and invoke the superclass finalizer in the correspond-
ing finally block. This ensures that the superclass finalizer gets executed even if
the subclass finalization throws an exception and vice versa. Here’s how it looks.
Note that this example uses the Override annotation (@Override), which was
added to the platform in release 1.5. You can ignore Override annotations for
now, or see Item 36 to find out what they mean:
// Manual finalizer chaining
@Override protected void finalize() throws Throwable {
try {
... // Finalize subclass state
} finally {
super.finalize();
}
}
If a subclass implementor overrides a superclass finalizer but forgets to invoke
it, the superclass finalizer will never be invoked. It is possible to defend against
such a careless or malicious subclass at the cost of creating an additional object
for every object to be finalized. Instead of putting the finalizer on the class
requiring finalization, put the finalizer on an anonymous class (Item 22) whose
sole purpose is to finalize its enclosing instance. A single instance of the
anonymous class, called a finalizer guardian, is created for each instance of the
enclosing class. The enclosing instance stores the sole reference to its finalizer
guardian in a private instance field so the finalizer guardian becomes eligible for
finalization at the same time as the enclosing instance. When the guardian is
finalized, it performs the finalization activity desired for the enclosing instance,
just as if its finalizer were a method on the enclosing class:
// Finalizer Guardian idiom
public class Foo {
// Sole purpose of this object is to finalize outer Foo object
private final Object finalizerGuardian = new Object() {
@Override protected void finalize() throws Throwable {
... // Finalize outer Foo object
}
};
...
// Remainder omitted
}

ITEM 7: AVOID FINALIZERS
Note that the public class, Foo, has no finalizer (other than the trivial one it
inherits from Object), so it doesn’t matter whether a subclass finalizer calls
super.finalize or not. This technique should be considered for every nonfinal
public class that has a finalizer.
In summary, don’t use finalizers except as a safety net or to terminate
noncritical native resources. In those rare instances where you do use a finalizer,
remember to invoke super.finalize. If you use a finalizer as a safety net,
remember to log the invalid usage from the finalizer. Lastly, if you need to
associate a finalizer with a public, nonfinal class, consider using a finalizer
guardian, so finalization can take place even if a subclass finalizer fails to invoke
super.finalize.

This page intentionally left blank 

C H A P T E R 3
Methods Common to All Objects
ALTHOUGH Object is a concrete class, it is designed primarily for extension.
All of its nonfinal methods (equals, hashCode, toString, clone, and finalize)
have explicit general contracts because they are designed to be overridden. It is
the responsibility of any class overriding these methods to obey their general con-
tracts; failure to do so will prevent other classes that depend on the contracts (such
as HashMap and HashSet) from functioning properly in conjunction with the class.
This chapter tells you when and how to override the nonfinal Object methods.
The finalize method is omitted from this chapter because it was discussed in
Item 7. While not an Object method, Comparable.compareTo is discussed in this
chapter because it has a similar character.
Item 8:
Obey the general contract when overriding equals
Overriding the equals method seems simple, but there are many ways to get it
wrong, and consequences can be dire. The easiest way to avoid problems is not to
override the equals method, in which case each instance of the class is equal only
to itself. This is the right thing to do if any of the following conditions apply:
• Each instance of the class is inherently unique. This is true for classes such
as Thread that represent active entities rather than values. The equals imple-
mentation provided by Object has exactly the right behavior for these classes.
• You don’t care whether the class provides a “logical equality” test. For
example, java.util.Random could have overridden equals to check whether
two Random instances would produce the same sequence of random numbers
going forward, but the designers didn’t think that clients would need or want
this functionality. Under these circumstances, the equals implementation
inherited from Object is adequate.

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
• A superclass has already overridden equals, and the superclass behavior
is appropriate for this class. For example, most Set implementations inherit
their equals implementation from AbstractSet, List implementations from
AbstractList, and Map implementations from AbstractMap.
• The class is private or package-private, and you are certain that its equals
method will never be invoked. Arguably, the equals method should be over-
ridden under these circumstances, in case it is accidentally invoked:
@Override public boolean equals(Object o) {
throw new AssertionError(); // Method is never called
}
So when is it appropriate to override Object.equals? When a class has a
notion of logical equality that differs from mere object identity, and a superclass
has not already overridden equals to implement the desired behavior. This is gen-
erally the case for value classes. A value class is simply a class that represents a
value, such as Integer or Date. A programmer who compares references to value
objects using the equals method expects to find out whether they are logically
equivalent, not whether they refer to the same object. Not only is overriding the
equals method necessary to satisfy programmer expectations; it enables instances
to serve as map keys or set elements with predictable, desirable behavior.
One kind of value class that does not require the equals method to be overrid-
den is a class that uses instance control (Item 1) to ensure that at most one object
exists with each value. Enum types (Item 30) fall into this category. For these
classes, logical equality is the same as object identity, so Object’s equals method
functions as a logical equals method.
When you override the equals method, you must adhere to its general con-
tract. Here is the contract, copied from the specification for Object [JavaSE6]:
The equals method implements an equivalence relation. It is:
• Reflexive: For any non-null reference value x, x.equals(x) must return true.
• Symmetric: For any non-null reference values x and y, x.equals(y) must re-
turn true if and only if y.equals(x) returns true.
• Transitive: For any non-null reference values x, y, z, if x.equals(y) returns
true and y.equals(z) returns true, then x.equals(z) must return true.
• Consistent: For any non-null reference values x and y, multiple invocations
of x.equals(y) consistently return true or consistently return false, pro-
vided no information used in equals comparisons on the objects is modified.
• For any non-null reference value x, x.equals(null) must return false.

ITEM 8: OBEY THE GENERAL CONTRACT WHEN OVERRIDING EQUALS
Unless you are mathematically inclined, this might look a bit scary, but do not
ignore it! If you violate it, you may well find that your program behaves errati-
cally or crashes, and it can be very difficult to pin down the source of the failure.
To paraphrase John Donne, no class is an island. Instances of one class are fre-
quently passed to another. Many classes, including all collections classes, depend
on the objects passed to them obeying the equals contract.
Now that you are aware of the dangers of violating the equals contract, let’s
go over the contract in detail. The good news is that, appearances notwithstand-
ing, the contract really isn’t very complicated. Once you understand it, it’s not
hard to adhere to it. Let’s examine the five requirements in turn:
Reflexivity—The first requirement says merely that an object must be equal
to itself. It is hard to imagine violating this requirement unintentionally. If you
were to violate it and then add an instance of your class to a collection, the collec-
tion’s contains method might well say that the collection didn’t contain the
instance that you just added.
Symmetry—The second requirement says that any two objects must agree on
whether they are equal. Unlike the first requirement, it’s not hard to imagine vio-
lating this one unintentionally. For example, consider the following class, which
implements a case-insensitive string. The case of the string is preserved by
toString but ignored in comparisons:
// Broken - violates symmetry!
public final class CaseInsensitiveString {
private final String s;
public CaseInsensitiveString(String s) {
if (s == null)
throw new NullPointerException();
this.s = s;
}
// Broken - violates symmetry!
@Override public boolean equals(Object o) {
if (o instanceof CaseInsensitiveString)
return s.equalsIgnoreCase(
((CaseInsensitiveString) o).s);
if (o instanceof String)  // One-way interoperability!
return s.equalsIgnoreCase((String) o);
return false;
}
...
// Remainder omitted
}

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
The well-intentioned equals method in this class naively attempts to interop-
erate with ordinary strings. Let’s suppose that we have one case-insensitive string
and one ordinary one:
CaseInsensitiveString cis = new CaseInsensitiveString("Polish");
String s = "polish";
As expected, cis.equals(s) returns true. The problem is that while the
equals method in CaseInsensitiveString knows about ordinary strings, the
equals method in String is oblivious to case-insensitive strings. Therefore
s.equals(cis) returns false, a clear violation of symmetry. Suppose you put a
case-insensitive string into a collection:
List<CaseInsensitiveString> list =
new ArrayList<CaseInsensitiveString>();
list.add(cis);
What does list.contains(s) return at this point? Who knows? In Sun’s cur-
rent implementation, it happens to return false, but that’s just an implementation
artifact. In another implementation, it could just as easily return true or throw a
runtime exception. Once you’ve violated the equals contract, you simply don’t
know how other objects will behave when confronted with your object.
To eliminate the problem, merely remove the ill-conceived attempt to interop-
erate with String from the equals method. Once you do this, you can refactor the
method to give it a single return:
@Override public boolean equals(Object o) {
return o instanceof CaseInsensitiveString &&
((CaseInsensitiveString) o).s.equalsIgnoreCase(s);
}
Transitivity—The third requirement of the equals contract says that if one
object is equal to a second and the second object is equal to a third, then the first
object must be equal to the third. Again, it’s not hard to imagine violating this
requirement unintentionally. Consider the case of a subclass that adds a new value
component to its superclass. In other words, the subclass adds a piece of informa-

ITEM 8: OBEY THE GENERAL CONTRACT WHEN OVERRIDING EQUALS
tion that affects equals comparisons. Let’s start with a simple immutable two-
dimensional integer point class:
public class Point {
private final int x;
private final int y;
public Point(int x, int y) {
this.x = x;
this.y = y;
}
@Override public boolean equals(Object o) {
if (!(o instanceof Point))
return false;
Point p = (Point)o;
return p.x == x && p.y == y;
}
...
// Remainder omitted
}
Suppose you want to extend this class, adding the notion of color to a point:
public class ColorPoint extends Point {
private final Color color;
public ColorPoint(int x, int y, Color color) {
super(x, y);
this.color = color;
}
...
// Remainder omitted
}
How should the equals method look? If you leave it out entirely, the imple-
mentation is inherited from Point and color information is ignored in equals
comparisons. While this does not violate the equals contract, it is clearly unac-
ceptable. Suppose you write an equals method that returns true only if its argu-
ment is another color point with the same position and color:
// Broken - violates symmetry!
@Override public boolean equals(Object o) {
if (!(o instanceof ColorPoint))
return false;
return super.equals(o) && ((ColorPoint) o).color == color;
}

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
The problem with this method is that you might get different results when
comparing a point to a color point and vice versa. The former comparison ignores
color, while the latter comparison always returns false because the type of the
argument is incorrect. To make this concrete, let’s create one point and one color
point:
Point p = new Point(1, 2);
ColorPoint cp = new ColorPoint(1, 2, Color.RED);
Then p.equals(cp) returns true, while cp.equals(p) returns false. You
might try to fix the problem by having ColorPoint.equals ignore color when
doing “mixed comparisons”:
// Broken - violates transitivity!
@Override public boolean equals(Object o) {
if (!(o instanceof Point))
return false;
// If o is a normal Point, do a color-blind comparison
if (!(o instanceof ColorPoint))
return o.equals(this);
// o is a ColorPoint; do a full comparison
return super.equals(o) && ((ColorPoint)o).color == color;
}
This approach does provide symmetry, but at the expense of transitivity:
ColorPoint p1 = new ColorPoint(1, 2, Color.RED);
Point p2 = new Point(1, 2);
ColorPoint p3 = new ColorPoint(1, 2, Color.BLUE);
Now p1.equals(p2) and p2.equals(p3) return true, while p1.equals(p3)
returns false, a clear violation of transitivity. The first two comparisons are
“color-blind,” while the third takes color into account.
So what’s the solution? It turns out that this is a fundamental problem of
equivalence relations in object-oriented languages. There is no way to extend an
instantiable class and add a value component while preserving the equals
contract, unless you are willing to forgo the benefits of object-oriented abstrac-
tion.

ITEM 8: OBEY THE GENERAL CONTRACT WHEN OVERRIDING EQUALS
You may hear it said that you can extend an instantiable class and add a value
component while preserving the equals contract by using a getClass test in
place of the instanceof test in the equals method:
// Broken - violates Liskov substitution principle (page 40)
@Override public boolean equals(Object o) {
if (o == null || o.getClass() != getClass())
return false;
Point p = (Point) o;
return p.x == x && p.y == y;
}
This has the effect of equating objects only if they have the same implementation
class. While this may not seem so bad, the consequences are unacceptable.
Let’s suppose we want to write a method to tell whether an integer point is on
the unit circle. Here is one way we could do it:
// Initialize UnitCircle to contain all Points on the unit circle
private static final Set<Point> unitCircle;
static {
unitCircle = new HashSet<Point>();
unitCircle.add(new Point( 1,  0));
unitCircle.add(new Point( 0,  1));
unitCircle.add(new Point(-1,  0));
unitCircle.add(new Point( 0, -1));
}
public static boolean onUnitCircle(Point p) {
  return unitCircle.contains(p);
}
While this may not be the fastest way to implement the functionality, it works fine.
But suppose you extend Point in some trivial way that doesn’t add a value com-
ponent, say, by having its constructor keep track of how many instances have been
created:
public class CounterPoint extends Point {
private static final AtomicInteger counter =
new AtomicInteger();
public CounterPoint(int x, int y) {
super(x, y);
counter.incrementAndGet();
}
public int numberCreated() { return counter.get(); }
}

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
The Liskov substitution principle says that any important property of a type
should also hold for its subtypes, so that any method written for the type should
work equally well on its subtypes [Liskov87]. But suppose we pass a Counter-
Point instance to the onUnitCircle method. If the Point class uses a getClass-
based equals method, the onUnitCircle method will return false regardless of
the CounterPoint instance’s x and y values. This is so because collections, such
as the HashSet used by the onUnitCircle method, use the equals method to test
for containment, and no CounterPoint instance is equal to any Point. If, how-
ever, you use a proper instanceof-based equals method on Point, the same
onUnitCircle method will work fine when presented with a CounterPoint.
While there is no satisfactory way to extend an instantiable class and add a
value component, there is a fine workaround. Follow the advice of Item 16, “Favor
composition over inheritance.” Instead of having ColorPoint extend Point, give
ColorPoint a private Point field and a public view method (Item 5) that returns
the point at the same position as this color point:
// Adds a value component without violating the equals contract
public class ColorPoint {
private final Point point;
private final Color color;
public ColorPoint(int x, int y, Color color) {
if (color == null)
throw new NullPointerException();
point = new Point(x, y);
this.color = color;
}
/**
* Returns the point-view of this color point.
*/
public Point asPoint() {
return point;
}
@Override public boolean equals(Object o) {
if (!(o instanceof ColorPoint))
return false;
ColorPoint cp = (ColorPoint) o;
return cp.point.equals(point) && cp.color.equals(color);
}
...
// Remainder omitted
}

ITEM 8: OBEY THE GENERAL CONTRACT WHEN OVERRIDING EQUALS
There are some classes in the Java platform libraries that do extend an instan-
tiable class and add a value component. For example, java.sql.Timestamp
extends java.util.Date and adds a nanoseconds field. The equals implementa-
tion for Timestamp does violate symmetry and can cause erratic behavior if
Timestamp and Date objects are used in the same collection or are otherwise inter-
mixed. The Timestamp class has a disclaimer cautioning programmers against
mixing dates and timestamps. While you won’t get into trouble as long as you
keep them separate, there’s nothing to prevent you from mixing them, and the
resulting errors can be hard to debug. This behavior of the Timestamp class was a
mistake and should not be emulated.
Note that you can add a value component to a subclass of an abstract class
without violating the equals contract. This is important for the sort of class hier-
archies that you get by following the advice in Item 20, “Prefer class hierarchies to
tagged classes.” For example, you could have an abstract class Shape with no
value components, a subclass Circle that adds a radius field, and a subclass
Rectangle that adds length and width fields. Problems of the sort shown above
won’t occur so long as it is impossible to create a superclass instance directly.
Consistency—The fourth requirement of the equals contract says that if two
objects are equal, they must remain equal for all time unless one (or both) of them
is modified. In other words, mutable objects can be equal to different objects at
different times while immutable objects can’t. When you write a class, think hard
about whether it should be immutable (Item 15). If you conclude that it should,
make sure that your equals method enforces the restriction that equal objects
remain equal and unequal objects remain unequal for all time.
Whether or not a class is immutable, do not write an equals method that
depends on unreliable resources. It’s extremely difficult to satisfy the consis-
tency requirement if you violate this prohibition. For example, java.net.URL’s
equals method relies on comparison of the IP addresses of the hosts associated
with the URLs. Translating a host name to an IP address can require network
access, and it isn’t guaranteed to yield the same results over time. This can cause
the URL equals method to violate the equals contract and has caused problems in
practice. (Unfortunately, this behavior cannot be changed due to compatibility
requirements.) With very few exceptions, equals methods should perform deter-
ministic computations on memory-resident objects.
“Non-nullity”—The final requirement, which in the absence of a name I have
taken the liberty of calling “non-nullity,” says that all objects must be unequal to
null. While it is hard to imagine accidentally returning true in response to the
invocation o.equals(null), it isn’t hard to imagine accidentally throwing a

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
NullPointerException. The general contract does not allow this. Many classes
have equals methods that guard against this with an explicit test for null:
@Override public boolean equals(Object o) {
if (o == null)
return false;
...
}
This test is unnecessary. To test its argument for equality, the equals method must
first cast its argument to an appropriate type so its accessors may be invoked or its
fields accessed. Before doing the cast, the method must use the instanceof oper-
ator to check that its argument is
