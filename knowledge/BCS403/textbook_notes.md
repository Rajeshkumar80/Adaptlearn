# BCS403 — Textbook Notes

**Subject:** BCS403 (Database Management Systems)
**Content type:** textbook_notes
**Primary Reference:** Ramez Elmasri, Shamkant B. Navathe — Fundamentals of Database Systems & Silberschatz, Korth, Sudarshan — Database System Concepts

---

# BCS403 — Textbook Notes (Module-wise)
**Subject:** Database Management Systems
**Prescribed Textbooks:** Ramez Elmasri, Shamkant B. Navathe — Fundamentals of Database Systems & Silberschatz, Korth, Sudarshan — Database System Concepts

---

## Module 1 Textbook: Introduction to DBMS and ER Model

### Textbook Excerpt — Reference: T1_Fundamentals_of_Database_Systems_Elmasri_Navathe.txt

a record. For example, we
can specify that Name of STUDENT is a string of alphabetic characters,
Student_number of STUDENT is an integer, and Grade of GRADE_REPORT is a single
character from the set {‘A’,‘B’,‘C’,‘D’,‘F’,‘I’}. We may also use a coding scheme to rep-
resent the values of a data item. For example, in Figure 1.2 we represent the Class of
a STUDENT as 1 for freshman, 2 for sophomore, 3 for junior, 4 for senior, and 5 for
graduate student.
To construct the UNIVERSITY database, we store data to represent each student,
course, section, grade report, and prerequisite as a record in the appropriate file.
Notice that records in the various files may be related. For example, the record for
Smith in the STUDENT file is related to two records in the GRADE_REPORT file that
specify Smith’s grades in two sections. Similarly, each record in the PREREQUISITE
file relates two course records: one representing the course and the other represent-
ing the prerequisite. Most medium-size and large databases include many types of
records and have many relationships among the records.

Chapter 1 Databases and Database Users
Name
Student_number
Class
Major
Smith
CS
Brown
CS
STUDENT
Course_name
Course_number
Credit_hours
Department
Intro to Computer Science
CS1310
CS
Data Structures
CS3320
CS
Discrete Mathematics
MATH2410
MATH
Database
CS3380
CS
COURSE
Section_identifier
Course_number
Semester
Year
Instructor
MATH2410
Fall
King
CS1310
Fall
Anderson
CS3320
Spring
Knuth
MATH2410
Fall
Chang
CS1310
Fall
Anderson
CS3380
Fall
Stone
SECTION
Student_number
Section_identifier
Grade
B
C
A
A
B
A
GRADE_REPORT
Course_number
Prerequisite_number
CS3380
CS3320
CS3380
MATH2410
CS3320
CS1310
PREREQUISITE
Figure 1.2
A database that stores
student and course
information.

Database manipulation involves querying and updating. Examples of queries are as
follows:
■Retrieve the transcript—a list of all courses and grades—of ‘Smith’
■List the names of students who took the section of the ‘Database’ course
offered in fall 2008 and their grades in that section
■List the prerequisites of the ‘Database’ course
Examples of updates include the following:
■Change the class of ‘Smith’ to sophomore
■Create a new section for the ‘Database’ course for this semester
■Enter a grade of ‘A’ for ‘Smith’ in the ‘Database’ section of last semester
These informal queries and updates must be specified precisely in the query lan-
guage of the DBMS before they can be processed.
At this stage, it is useful to describe the database as a part of a larger undertaking
known as an information system within any organization. The Information
Technology (IT) department within a company designs and maintains an informa-
tion system consisting of various computers, storage systems, application software,
and databases. Design of a new application for an existing database or design of a
brand new database starts off with a phase called requirements specification and
analysis. These requirements are documented in detai

### Textbook Excerpt — Reference: T1_Fundamentals_of_Database_Systems_Elmasri_Navathe.txt

of the unit of
measure could occur if one schema represented Weight in pounds and the
other used kilograms.
d. Conflicts among constraints. Two schemas may impose different con-
straints; for example, the key of an entity type may be different in each
schema. Another example involves different structural constraints on
a relationship such as TEACHES; one schema may represent it as 1:N (a
course has one instructor), while the other schema represents it as M:N (a
course may have more than one instructor).

so that they conform to other schemas more closely. Some of the conflicts
identified in the first subtask are resolved during this step.
schemas. Corresponding concepts are represented only once in the global
schema, and mappings between the views and the global schema are speci-
fied. This is the most difficult step to achieve in real-life databases involving
dozens or hundreds of entities and relationships. It involves a considerable
amount of human intervention and negotiation to resolve conflicts and to
settle on the most reasonable and acceptable solutions for a global schema.
and restructured to remove any redundancies or unnecessary complexity.
Some of these ideas are illustrated by the rather simple example presented in Figures
base. During identification of correspondences between the two views, we discover
that RESEARCHER and AUTHOR are synonyms (as far as this database is con-
cerned), as are CONTRIBUTED_BY and WRITTEN_BY. Further, we decide to modify
VIEW 1 to include a SUBJECT for ARTICLE, as shown in Figure 10.4, to conform to
VIEW 2. Figure 10.5 shows the result of merging MODIFIED VIEW 1 with VIEW 2. We
generalize the entity types ARTICLE and BOOK into the entity type PUBLICATION,
with their common attribute Title. The relationships CONTRIBUTED_BY and
WRITTEN_BY are merged, as are the entity types RESEARCHER and AUTHOR. The
attribute Publisher applies only to the entity type BOOK, whereas the attribute Size
and the relationship type PUBLISHED_IN apply only to ARTICLE.
This simple example illustrates the complexity of the merging process and how the
meaning of the various concepts must be accounted for in simplifying the resultant
schema design. For real-life designs, the process of schema integration requires a
more disciplined and systematic approach. Several strategies have been proposed
for the view integration process (see Figure 10.6):
first. The resulting schema is then integrated with another schema, and the
process is repeated until all schemas are integrated. The ordering of schemas
for integration can be based on some measure of schema similarity. This strat-
egy is suitable for manual integration because of its step-by-step approach.
analysis and specification of their correspondences. This strategy requires
computerized tools for large design problems. Such tools have been built as
research prototypes but are not yet commercially available.
resulting schemas are paired for further integration; this procedure is
repeate

---

## Module 2 Textbook: Relational Model and SQL

### Textbook Excerpt — Reference: T1_Fundamentals_of_Database_Systems_Elmasri_Navathe.txt

a record. For example, we
can specify that Name of STUDENT is a string of alphabetic characters,
Student_number of STUDENT is an integer, and Grade of GRADE_REPORT is a single
character from the set {‘A’,‘B’,‘C’,‘D’,‘F’,‘I’}. We may also use a coding scheme to rep-
resent the values of a data item. For example, in Figure 1.2 we represent the Class of
a STUDENT as 1 for freshman, 2 for sophomore, 3 for junior, 4 for senior, and 5 for
graduate student.
To construct the UNIVERSITY database, we store data to represent each student,
course, section, grade report, and prerequisite as a record in the appropriate file.
Notice that records in the various files may be related. For example, the record for
Smith in the STUDENT file is related to two records in the GRADE_REPORT file that
specify Smith’s grades in two sections. Similarly, each record in the PREREQUISITE
file relates two course records: one representing the course and the other represent-
ing the prerequisite. Most medium-size and large databases include many types of
records and have many relationships among the records.

Chapter 1 Databases and Database Users
Name
Student_number
Class
Major
Smith
CS
Brown
CS
STUDENT
Course_name
Course_number
Credit_hours
Department
Intro to Computer Science
CS1310
CS
Data Structures
CS3320
CS
Discrete Mathematics
MATH2410
MATH
Database
CS3380
CS
COURSE
Section_identifier
Course_number
Semester
Year
Instructor
MATH2410
Fall
King
CS1310
Fall
Anderson
CS3320
Spring
Knuth
MATH2410
Fall
Chang
CS1310
Fall
Anderson
CS3380
Fall
Stone
SECTION
Student_number
Section_identifier
Grade
B
C
A
A
B
A
GRADE_REPORT
Course_number
Prerequisite_number
CS3380
CS3320
CS3380
MATH2410
CS3320
CS1310
PREREQUISITE
Figure 1.2
A database that stores
student and course
information.

Database manipulation involves querying and updating. Examples of queries are as
follows:
■Retrieve the transcript—a list of all courses and grades—of ‘Smith’
■List the names of students who took the section of the ‘Database’ course
offered in fall 2008 and their grades in that section
■List the prerequisites of the ‘Database’ course
Examples of updates include the following:
■Change the class of ‘Smith’ to sophomore
■Create a new section for the ‘Database’ course for this semester
■Enter a grade of ‘A’ for ‘Smith’ in the ‘Database’ section of last semester
These informal queries and updates must be specified precisely in the query lan-
guage of the DBMS before they can be processed.
At this stage, it is useful to describe the database as a part of a larger undertaking
known as an information system within any organization. The Information
Technology (IT) department within a company designs and maintains an informa-
tion system consisting of various computers, storage systems, application software,
and databases. Design of a new application for an existing database or design of a
brand new database starts off with a phase called requirements specification and
analysis. These requirements are documented in detai

### Textbook Excerpt — Reference: T1_Fundamentals_of_Database_Systems_Elmasri_Navathe.txt

lable copy is proposed by
Bernstein and Goodman (1984), and one that uses the idea of a group is presented
in ElAbbadi and Toueg (1988). Other work that discusses replicated data includes
Gladney (1989), Agrawal and ElAbbadi (1990), ElAbbadi and Toueg (1989), Kumar
and Segev (1993), Mukkamala (1989), and Wolfson and Milo (1991). Bassiouni
(1988) discusses optimistic protocols for DDB concurrency control. Garcia-Molina
(1983) and Kumar and Stonebraker (1987) discuss techniques that use the seman-
tics of the transactions. Distributed concurrency control techniques based on lock-
ing and distinguished copies are presented by Menasce et al. (1980) and Minoura
and Wiederhold (1982). Obermark (1982) presents algorithms for distributed
deadlock detection. In more recent work, Vadivelu et al. (2008) propose using
backup mechanism and multilevel security to develop algorithms for improving
concurrency. Madria et al. (2007) propose a mechanism based on a multiversion
two-phase locking scheme and timestamping to address concurrency issues specific
to mobile database systems. Boukerche and Tuck (2001) propose a technique that
allows transactions to be out of order to a limited extent. They attempt to ease the
load on the application developer by exploiting the network environment and pro-
ducing a schedule equivalent to a temporally ordered serial schedule. Han et al.
(2004) propose a deadlock-free and serializable extended Petri net model for Web-
based distributed real-time databases.
A survey of recovery techniques in distributed systems is given by Kohler (1981).
Reed (1983) discusses atomic actions on distributed data. Bhargava (1987) presents
an edited compilation of various approaches and techniques for concurrency and
reliability in distributed systems.
Federated database systems were first defined in McLeod and Heimbigner (1985).
Techniques for schema integration in federated databases are presented by Elmasri
et al. (1986), Batini et al. (1987), Hayne and Ram (1990), and Motro (1987).

Chapter 25 Distributed Databases
Elmagarmid and Helal (1988) and Gamal-Eldin et al. (1988) discuss the update
problem in heterogeneous DDBSs. Heterogeneous distributed database issues are
discussed in Hsiao and Kamel (1989). Sheth and Larson (1990) present an exhaus-
tive survey of federated database management.
Since late 1980s multidatabase systems and interoperability have become important
topics. Techniques for dealing with semantic incompatibilities among multiple
databases are examined in DeMichiel (1989), Siegel and Madnick (1991),
Krishnamurthy et al. (1991), and Wang and Madnick (1989). Castano et al. (1998)
present an excellent survey of techniques for analysis of schemas. Pitoura et al.
(1995) discuss object orientation in multidatabase systems. Xiao et al. (2003) pro-
pose an XML-based model for a common data model for multidatabase systems
and present a new approach for schema mapping based on this model. Lakshmanan
et al. (2001) propose extending SQL f

---

## Module 3 Textbook: Normalization

### Textbook Excerpt — Reference: T2_Database_System_Concepts_Silberschatz_Korth.txt

the issues in this chapter, note that the reason we could deﬁne
rigorous approaches to relational database design is that the relational data
model rests on a ﬁrm mathematical foundation. That is one of the primary
advantages of the relational model compared with the other data models that
we have studied.
Review Terms
• E-R model and normalization
• Decomposition
• Functional dependencies
• Lossless decomposition
• Atomic domains
• First normal form (1NF)
• Legal relations
• Superkey
• R satisﬁes F
• F holds on R
• Boyce–Codd normal form
(BCNF)
• Dependency preservation
• Third normal form (3NF)
• Trivial functional dependencies
• Closure of a set of functional
dependencies
• Armstrong’s axioms
• Closure of attribute sets
• Restriction of F to Ri
• Canonical cover
• Extraneous attributes
• BCNF decomposition algorithm
• 3NF decomposition algorithm
• Multivalued dependencies
• Fourth normal form (4NF)
• Restriction of a multivalued
dependency
• Project-join normal form (PJNF)
• Domain-key normal form (DKNF)
• Universal relation
• Unique-role assumption
• Denormalization
Practice Exercises
Suppose that we decompose the schema r(A, B, C, D, E) into
r1(A, B, C)
r2(A, D, E)

Practice Exercises
Show that this decomposition is a lossless decomposition if the following
set F of functional dependencies holds:
A →BC
CD →E
B →D
E →A
List all functional dependencies satisﬁed by the relation of Figure 8.17.
Explain how functional dependencies can be used to indicate the following:
• A one-to-one relationship set exists between entity sets student and
instructor.
• A many-to-one relationship set exists between entity sets student and
instructor.
Use Armstrong’s axioms to prove the soundness of the union rule. (Hint:
Use the augmentation rule to show that, if  →, then  →. Apply
the augmentation rule again, using  →, and then apply the transitivity
rule.)
Use Armstrong’s axioms to prove the soundness of the pseudotransitivity
rule.
Compute the closure of the following set F of functional dependencies for
relation schema r (A, B, C, D, E).
A →BC
CD →E
B →D
E →A
List the candidate keys for R.
Using the functional dependencies of Practice Exercise 8.6, compute the
canonical cover Fc.
A
B
C
a1
b1
c1
a1
b1
c2
a2
b1
c1
a2
b1
c3
Figure 8.17
Relation of Practice Exercise 8.2.

Chapter 8
Relational Database Design
Consider the algorithm in Figure 8.18 to compute +. Show that this algo-
rithm is more efﬁcient than the one presented in Figure 8.8 (Section 8.4.2)
and that it computes + correctly.
Given the database schema R(a, b, c), and a relation r on the schema R,
write an SQL query to test whether the functional dependency b →c holds
on relation r. Also write an SQL assertion that enforces the functional de-
pendency; assume that no null values are present. (Although part of the
SQL standard, such assertions are not supported by any database imple-
mentation currently.)
Our discussion of lossless-join decomposition implicitly assumed that at-
tributes on the left-hand 

---

## Module 4 Textbook: Transactions and Concurrency Control

### Textbook Excerpt — Reference: T1_Fundamentals_of_Database_Systems_Elmasri_Navathe.txt

a record. For example, we
can specify that Name of STUDENT is a string of alphabetic characters,
Student_number of STUDENT is an integer, and Grade of GRADE_REPORT is a single
character from the set {‘A’,‘B’,‘C’,‘D’,‘F’,‘I’}. We may also use a coding scheme to rep-
resent the values of a data item. For example, in Figure 1.2 we represent the Class of
a STUDENT as 1 for freshman, 2 for sophomore, 3 for junior, 4 for senior, and 5 for
graduate student.
To construct the UNIVERSITY database, we store data to represent each student,
course, section, grade report, and prerequisite as a record in the appropriate file.
Notice that records in the various files may be related. For example, the record for
Smith in the STUDENT file is related to two records in the GRADE_REPORT file that
specify Smith’s grades in two sections. Similarly, each record in the PREREQUISITE
file relates two course records: one representing the course and the other represent-
ing the prerequisite. Most medium-size and large databases include many types of
records and have many relationships among the records.

Chapter 1 Databases and Database Users
Name
Student_number
Class
Major
Smith
CS
Brown
CS
STUDENT
Course_name
Course_number
Credit_hours
Department
Intro to Computer Science
CS1310
CS
Data Structures
CS3320
CS
Discrete Mathematics
MATH2410
MATH
Database
CS3380
CS
COURSE
Section_identifier
Course_number
Semester
Year
Instructor
MATH2410
Fall
King
CS1310
Fall
Anderson
CS3320
Spring
Knuth
MATH2410
Fall
Chang
CS1310
Fall
Anderson
CS3380
Fall
Stone
SECTION
Student_number
Section_identifier
Grade
B
C
A
A
B
A
GRADE_REPORT
Course_number
Prerequisite_number
CS3380
CS3320
CS3380
MATH2410
CS3320
CS1310
PREREQUISITE
Figure 1.2
A database that stores
student and course
information.

Database manipulation involves querying and updating. Examples of queries are as
follows:
■Retrieve the transcript—a list of all courses and grades—of ‘Smith’
■List the names of students who took the section of the ‘Database’ course
offered in fall 2008 and their grades in that section
■List the prerequisites of the ‘Database’ course
Examples of updates include the following:
■Change the class of ‘Smith’ to sophomore
■Create a new section for the ‘Database’ course for this semester
■Enter a grade of ‘A’ for ‘Smith’ in the ‘Database’ section of last semester
These informal queries and updates must be specified precisely in the query lan-
guage of the DBMS before they can be processed.
At this stage, it is useful to describe the database as a part of a larger undertaking
known as an information system within any organization. The Information
Technology (IT) department within a company designs and maintains an informa-
tion system consisting of various computers, storage systems, application software,
and databases. Design of a new application for an existing database or design of a
brand new database starts off with a phase called requirements specification and
analysis. These requirements are documented in detai

### Textbook Excerpt — Reference: T1_Fundamentals_of_Database_Systems_Elmasri_Navathe.txt

of the unit of
measure could occur if one schema represented Weight in pounds and the
other used kilograms.
d. Conflicts among constraints. Two schemas may impose different con-
straints; for example, the key of an entity type may be different in each
schema. Another example involves different structural constraints on
a relationship such as TEACHES; one schema may represent it as 1:N (a
course has one instructor), while the other schema represents it as M:N (a
course may have more than one instructor).

so that they conform to other schemas more closely. Some of the conflicts
identified in the first subtask are resolved during this step.
schemas. Corresponding concepts are represented only once in the global
schema, and mappings between the views and the global schema are speci-
fied. This is the most difficult step to achieve in real-life databases involving
dozens or hundreds of entities and relationships. It involves a considerable
amount of human intervention and negotiation to resolve conflicts and to
settle on the most reasonable and acceptable solutions for a global schema.
and restructured to remove any redundancies or unnecessary complexity.
Some of these ideas are illustrated by the rather simple example presented in Figures
base. During identification of correspondences between the two views, we discover
that RESEARCHER and AUTHOR are synonyms (as far as this database is con-
cerned), as are CONTRIBUTED_BY and WRITTEN_BY. Further, we decide to modify
VIEW 1 to include a SUBJECT for ARTICLE, as shown in Figure 10.4, to conform to
VIEW 2. Figure 10.5 shows the result of merging MODIFIED VIEW 1 with VIEW 2. We
generalize the entity types ARTICLE and BOOK into the entity type PUBLICATION,
with their common attribute Title. The relationships CONTRIBUTED_BY and
WRITTEN_BY are merged, as are the entity types RESEARCHER and AUTHOR. The
attribute Publisher applies only to the entity type BOOK, whereas the attribute Size
and the relationship type PUBLISHED_IN apply only to ARTICLE.
This simple example illustrates the complexity of the merging process and how the
meaning of the various concepts must be accounted for in simplifying the resultant
schema design. For real-life designs, the process of schema integration requires a
more disciplined and systematic approach. Several strategies have been proposed
for the view integration process (see Figure 10.6):
first. The resulting schema is then integrated with another schema, and the
process is repeated until all schemas are integrated. The ordering of schemas
for integration can be based on some measure of schema similarity. This strat-
egy is suitable for manual integration because of its step-by-step approach.
analysis and specification of their correspondences. This strategy requires
computerized tools for large design problems. Such tools have been built as
research prototypes but are not yet commercially available.
resulting schemas are paired for further integration; this procedure is
repeate

---

## Module 5 Textbook: Indexing, Hashing and File Organization

### Textbook Excerpt — Reference: T1_Fundamentals_of_Database_Systems_Elmasri_Navathe.txt

a record. For example, we
can specify that Name of STUDENT is a string of alphabetic characters,
Student_number of STUDENT is an integer, and Grade of GRADE_REPORT is a single
character from the set {‘A’,‘B’,‘C’,‘D’,‘F’,‘I’}. We may also use a coding scheme to rep-
resent the values of a data item. For example, in Figure 1.2 we represent the Class of
a STUDENT as 1 for freshman, 2 for sophomore, 3 for junior, 4 for senior, and 5 for
graduate student.
To construct the UNIVERSITY database, we store data to represent each student,
course, section, grade report, and prerequisite as a record in the appropriate file.
Notice that records in the various files may be related. For example, the record for
Smith in the STUDENT file is related to two records in the GRADE_REPORT file that
specify Smith’s grades in two sections. Similarly, each record in the PREREQUISITE
file relates two course records: one representing the course and the other represent-
ing the prerequisite. Most medium-size and large databases include many types of
records and have many relationships among the records.

Chapter 1 Databases and Database Users
Name
Student_number
Class
Major
Smith
CS
Brown
CS
STUDENT
Course_name
Course_number
Credit_hours
Department
Intro to Computer Science
CS1310
CS
Data Structures
CS3320
CS
Discrete Mathematics
MATH2410
MATH
Database
CS3380
CS
COURSE
Section_identifier
Course_number
Semester
Year
Instructor
MATH2410
Fall
King
CS1310
Fall
Anderson
CS3320
Spring
Knuth
MATH2410
Fall
Chang
CS1310
Fall
Anderson
CS3380
Fall
Stone
SECTION
Student_number
Section_identifier
Grade
B
C
A
A
B
A
GRADE_REPORT
Course_number
Prerequisite_number
CS3380
CS3320
CS3380
MATH2410
CS3320
CS1310
PREREQUISITE
Figure 1.2
A database that stores
student and course
information.

Database manipulation involves querying and updating. Examples of queries are as
follows:
■Retrieve the transcript—a list of all courses and grades—of ‘Smith’
■List the names of students who took the section of the ‘Database’ course
offered in fall 2008 and their grades in that section
■List the prerequisites of the ‘Database’ course
Examples of updates include the following:
■Change the class of ‘Smith’ to sophomore
■Create a new section for the ‘Database’ course for this semester
■Enter a grade of ‘A’ for ‘Smith’ in the ‘Database’ section of last semester
These informal queries and updates must be specified precisely in the query lan-
guage of the DBMS before they can be processed.
At this stage, it is useful to describe the database as a part of a larger undertaking
known as an information system within any organization. The Information
Technology (IT) department within a company designs and maintains an informa-
tion system consisting of various computers, storage systems, application software,
and databases. Design of a new application for an existing database or design of a
brand new database starts off with a phase called requirements specification and
analysis. These requirements are documented in detai

### Textbook Excerpt — Reference: T1_Fundamentals_of_Database_Systems_Elmasri_Navathe.txt

or insertion, deletion,
and modification of a file record. State any assumptions you make.
unordered overflow file to handle insertion. Both files use unspanned
records. Outline algorithms for insertion, deletion, and modification of a file
record and for reorganizing the file. State any assumptions you make.
be used to make insertions in an ordered file more efficient?
overflow is handled by chaining. Outline algorithms for insertion, deletion,
and modification of a file record. State any assumptions you make.

Exercises
in external hashing?
extendible hashing.
following circumstances. For each case, state the assumptions you make con-
cerning pointers, separator characters, and so on. Determine the type of
information needed in the file header in order for your code to be general in
each case.
a. Fixed-length records with unspanned blocking
b. Fixed-length records with spanned blocking
c. Variable-length records with variable-length fields and spanned blocking
d. Variable-length records with repeating groups and spanned blocking
e. Variable-length records with optional fields and spanned blocking
f. Variable-length records that allow all three cases in parts c, d, and e
each in an unsorted (heap) file. The block size B = 2400 bytes, the average
seek time s = 16 ms, the average rotational latency rd = 8.3 ms, and the block
transfer time btt = 0.8 ms. Assume that 1 record is deleted for every 2 records
added until the total number of active records is 240,000.
a. How many block transfers are needed to reorganize the file?
b. How long does it take to find a record right before reorganization?
c. How long does it take to find a record right after reorganization?
record is 240 bytes. Assume that B = 2400 bytes, s = 16 ms, rd = 8.3 ms, and
btt = 0.8 ms. Suppose we want to make X independent random record reads
from the file. We could make X random block reads or we could perform one
exhaustive read of the entire file looking for those X records. The question is
to decide when it would be more efficient to perform one exhaustive read of
the entire file than to perform X individual random reads. That is, what is
the value for X when an exhaustive read of the file is more efficient than ran-
dom X reads? Develop this as a function of X.
and that records are inserted that create an overflow area of 600 buckets. If
we reorganize the hash file, we can assume that most of the overflow is elim-
inated. If the cost of reorganizing the file is the cost of the bucket transfers
(reading and writing all of the buckets) and the only periodic file operation
is the fetch operation, then how many times would we have to perform a
fetch (successfully) to make the reorganization cost effective? That is, the
reorganization cost and subsequent search cost are less than the search cost
before reorganization. Support your answer. Assume s = 16 ms, rd = 8.3 ms,
and btt = 1 ms.

Chapter 17 Disk Storage, Basic File Structures, and Hashing
a blocking factor of 20 records per bu

---
