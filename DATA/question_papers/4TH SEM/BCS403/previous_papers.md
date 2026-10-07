# BCS403 — Previous Year Question Papers (PYQ)
**Subject:** Database Management Systems (DBMS)
**Generated:** 2026-10-02

---

## June July 2025

Fourth Semester B.E./B.Tech. Degree Examination, June/July 2025 
Database Management Systems    
 
Time: 3 hrs.                                                                                                Max. Marks: 100 
 
Note: 1. Answer any FIVE full questions, choosing ONE full question from each module. 
                    2. M : Marks , L: Bloom’s level , C: Course outcomes.    
 
                  Module – 1 
M
L 
C 
Q.1 
a. Explain the types of attributes with example. 

L2
CO1
 
b.
Define database. Explain the main characteristics of the database approach. 

L2
CO1
 
c. Show the ER diagram for an EMPLOYEE  database by assuming your own 
entities (minimum 4) attributes and relationships, mention cardinality ratios 
wherever appropriate. 

L3
CO2
                                                                           OR 
Q.2 
a. Describe the three schema architecture. 

L2
CO1
 
b.
Explain the component models of DBMS and their interaction with the help 
of diagram. 

L2
CO1
 
c. Design ER diagram for a university database by assuming your own entities 
(4). Mention primary key , constraints and relationships. 

L3
CO2
                                                                      Module – 2  
Q.3 
a. Explain relational model constraints. 

L2
CO1
 
b.
Explain the characteristics of relations with suitable example for each. 

L2
CO1
 
c. Considering the following schema : 
Sailors (sid , sname , rating , age) 
Boats (bid , bname , color) 
Reserves (sid , bid , day) 
Write a relational algebra queries for the following : 
i)    Find the names of sailors, who have reserved red and a green boat. 
ii)   Find the names of sailors who have reserved a red boat. 
iii)  Find the names of sailors who have reserved a red or green boat. 
iv)  Find the names of sailors who have reserved all boats. 

L3
CO1
                                                                           OR 
Q.4 
a. Explain the steps to convert the basic ER model to relational Database 
schema. 

L2
CO1
 
b.
Explain Unary relational operations with example. 

L2
CO1
 
 
 
 
1 of 3 
 
USN 
 
 
 
 
 
 
 
 
 
 
BCS403 
VTU-09-07-2025 01:11:55pm
09-07-2025 01:31:23pm
AD - AD - AD - AD - AD - AD - AD - AD - AD
AD - AD - AD - AD - AD - AD - AD - AD - AD

 
BCS403
 
 
 
c. Consider the relation schema Employee database. 
EMPLOYEE (Fname ,Minit , Lname , SSn , Bdates , Address , Sex , Salary  
                      Super_SSn , Dno) 
DEPARTMENT (Dname , Dnumber , Mgr_SSn , Mgr_start_date) 
PROJECT (Pname , PNumber , Plocation , Dnum) 
WORKS_ON (Essn , Pno , Hours) 
DEPENDENT (Essn , Dependent_name , sex, Bdate , Relationship) 
Write relational algebra queries for the following : 
i)    Retrieve the name and address of all employees who work for the  
      ‘Research’ department. 
ii)   List the names of all employees with 2 or more dependents. 
iii)  Find the names of employees who work on all the projects controlled  
       by department number 5. 
iv)  List the names of employees who have no dependents. 

L3
CO3
                                                                      Module – 3  
Q.5 
a. What is the need for normalization? Explain second and third normal form 
with examples. 

L2
CO4
 
b.
Outline constraints in SQL. 

L2
CO1
 
c. Identify the given Relation R(ABCDE) and its instance, check whether 
FDS given hold or not. Give reasons. 
i)   A → B      ii)   B → C     iii)   D → E    iv)   CD → E. 
A
B 
C D E 
a1
b1
c1
d1
e1
a1
b2
c1
d1
e1
a2
b2
c1
d2
e3
a2
b3
c3
d2
e2

L3
CO4
                                                                           OR 
Q.6 
a. What is Multivalued dependency? Explain 4NF and 5NF with suitable 
example. 

L2
CO4
 
b.
Outline the informal design guidelines for relational schema. 

L2
CO4
 
c. Consider relation R with following function dependency : 
EMPPROJ (SSn , Pnumber , Hours , Ename , Pname , Plocation) 
                  SSN , Pnumber → Hours,  
                  SSN → Ename 
                  Pnumber → Pname , Plocation. 
Is it 2NF? Verify? If no give reason. 

L3
CO4
 
 
 
 
 
 
 
 
2 of 3 
VTU-09-07-2025 01:11:55pm
09-07-2025 01:31:23pm
AD - AD - AD - AD - AD - AD - AD - AD - AD
AD - AD - AD - AD - AD - AD - AD - AD - AD

 
BCS403
 
                                                                      Module – 4  
Q.7 
a. Consider the following schema for a company database : 
Employee (FName , LName , SSn , Adderss , Sex , Salary , Dno ,  
                Super_SSn) 
Department (Dname , Dnumber , mgr_SSn, mgr_st_date) 
Project (Pname , Pnumber , Plocation , Dnum) 
WORKS_on (Essn , Pno , Hours) 
DEPENDENT (Essn , Dependent name , Sex , Bdate, relationship). 
Write the SQL queries for the following : 
i)    List the names of managers who have atleast one dependent (use  
       correlated nested). 
ii)    Retrieve the name of each employee who has a dependent with the  
       same first name and is the same sex as the employee. 
iii)   For each project retrieve the project number , project name and the  
        number of employees who work on that project. 
iv)   Retrieve the SSN of all employees who work on project number 1, 2  
       or 3. (Use 1N). 
v)    Find the sum of the salaries of all employees of the ‘Research’  
       department as well as maximum salary , minimum salary , average  
       salary in this department. 

L3
CO3
 
b.
Why concurrency control is needed? Demonstrate with an example. 

L2
CO5
                                                                           OR 
Q.8 
a. Consider the following schedule. The actions are listed in the order they are 
scheduled and prefixed with the transaction name. 
S1 : T1 : R(X) , T2 : R(X) T1 : W(Y) , T2 : W(Y) , T1 : R(Y) , T2 : R(Y) 
S2 : T3 : W(X) , T1 : R(X) , T1 : W(Y) , T2 : R(Z) , T2 : W(Z) , T3 : R(Z) 
For each schedule answer the following : 
i)    What is the precedence graph for the schedule? 
ii)   Is the schedule conflict_serializable? If so what are all the conflicts  
       equivalent serial schedules? 
iii)  Is the schedule view serializable? If so what are all the view equivalent  
      serial schedules? 

L3
CO5
 
b.
Explain triggers with example write a trigger in SQL to call a procedure 
“Inform_Supervisor” whenever an employees salary is greater than the 
salary of his or her direct supervisor in the COMPANY database. 

L3
CO5
                                                                      Module – 5  
Q.9 
a. Describe the two – phase locking protocol for concurrency control provide 
example to illustrate how it ensures serializability in transaction schedule. 

L2
CO5
 
b.
Explain the characteristics of NOSQL system. 

L2
CO6
                                                                           OR 
Q.10
a. Explain binary locks and shared lock with algorithm. 

L2
CO5
 
b.
Explain MongoDB data model, CRUD operations and distributed system 
characteristics. 

L2
CO6
                                                                       
* * * * * 
3 of 3 
VTU-09-07-2025 01:11:55pm
09-07-2025 01:31:23pm
AD - AD - AD - AD - AD - AD - AD - AD - AD
AD - AD - AD - AD - AD - AD - AD - AD - AD

---

## Dec 2025 Jan 2026

Fourth Semester B.E./B.Tech. Degree Examination, Dec.2025/Jan.2026 
Database Management Systems     
 
Time: 3 hrs.                                                                                                Max. Marks: 100 
 
Note: 1. Answer any FIVE full questions, choosing ONE full question from each module. 
                     2. M : Marks , L: Bloom’s level , C: Course outcomes.    
 
                  Module – 1 
M
L 
C 
Q.1 
a. Define Database. Explain the characteristics of database. 

L2 CO1
 
b.
Discuss three schema architecture with a diagram and explain the 
importance of mappings between the schema levels. 

L2 CO1
 
c. Discuss the types of end users with suitable examples. 

L2 CO1
                                                                           OR 
Q.2 
a. Illustrate the component modulus of DBMS and their interaction with a 
neat diagram.  

L2 CO1
 
b.
List and explain different types of attributes with example. 

L2 CO1
 
c. Draw an ER-diagram for keeping track of information about ‘Employee’ 
database, taking into accounts at least five entities.   

L2 CO1
                                                                      Module – 2  
Q.3 
a. Define the following terms:  
i)  Primary key       ii) Super key      iii) Candidate key      iv) Foreign key  

L1 CO2
 
b.
Discuss the various constraints violations during insert, delete and update 
operations with examples for each.   

L3 CO2
 
c. Explain binary relational algebra operations with suitable examples. 

L2 CO2
                                                                           OR 
Q.4 
a. Summarize the E-R to Relational Mapping algorithm with examples for 
each step.   

L3 CO2
 
b.
Discuss the various types of JOIN operation with an examples. 

L2 CO2
 
c. Consider the following system: 
SAILORS(Sid, Sname, rating, age) 
BOATS(Bid, Bname, Bcolor) 
RESERVES(Sid, Bid, day)  
 
Obtain the relational algebra queries for the following : 
i) 
Find the name of sailors who reserved green boat. 
ii) Find the color of the boat reserve by “Naresh” 
iii) Find the name of the sailor who has reserved boat no. 1. 
iv) Find the Sid of sailors with age over 20 who have not reserved a boat. 

L3
 
CO2
 
                                                                            1 of 2                                                 
USN 
BCS403
VTU-21-02-2026 08:33:22am
21-02-2026 09:09:53am
AD - AD - AD - AD - AD - AD - AD - AD - AD
AD - AD - AD - AD - AD - AD - AD - AD - AD

 
BCS403
                                                                      Module – 3  
Q.5 
a. Explain informal design guidelines for relational schema design. 

L2 CO3
 
b.
Define Normalization. Explain with examples 1NF, 2NF, 3NF.  

L3 CO3
 
c. Discuss the types of update anomalies in SQL with an example. 

L3 CO3
                                                                           OR 
Q.6 
a. Explain with suitable example how constraints are specified in SQL during 
table creation. 

L3 CO3
 
b.
Consider the following schema: 
Employee (SSN, F_name, M_name, L_name, Address, Salary, D_no) 
Department (Dname, Dno, MgrSSN, Mgr_S_Date) 
i) 
Retrieve the name and address of all employees who work for the 
‘Research’ Department. 
ii) 
Retrieve all employees whose address is in Houton, Texas. 
iii) Retrieve all employees in department 5 whose salary is between 
$30,000 and $40,000. 
iv) Update all employees in the ‘Research’ department a raise in salary of 
10%. 
v) 
Delete employee having SSN = 123456789; 

L3 CO3
                                                                      Module – 4  
Q.7 
a. Discuss the importance of concurrency control and give an example for the 
same. 

L2 CO4
 
b.
Explain the states in transaction processing with a neat diagram.  

L2 CO4
 
c. Discuss the ACID properties of database transaction.  

L2 CO4
                                                                           OR 
Q.8 
a. What is the difference between ‘where’ and ‘having’ clause? Give an 
example. 

L2 CO4
 
b.
Write a note on the following with an example : 
i)   Assertion              ii)  Triggers   

L2 CO4
 
c. Create cursor for employee table and extract the values from the table. 
Declare the variable open the cursor and extract the values from the cursor. 
Close the cursor for the given relation Employee(E_id, E_Name, Age, 
Salary). 

L3 CO4
                                                                      Module – 5  
Q.9 
a. Discuss the two phase locking protocol used for concurrency control. 

L2 CO5
 
b.
Explain Multiversion concurrency control techniques in detail. 

L2 CO5
 
c. Write a note on intension locking used to achieve granularity. 

L2 CO5
                                                                           OR 
Q.10
a. Explain the characteristic of NOSQL systems. 

L2 CO5
 
b.
What are the basic operations of CRUD in MongoDB? 

L2 CO5
 
c. Write a note on Neo4j Interfaces and Distributed System Characteristics.  

L2 CO5
                                                                    * * * * * 
                                                                 2 of 2 
VTU-21-02-2026 08:33:22am
21-02-2026 09:09:53am
AD - AD - AD - AD - AD - AD - AD - AD - AD
AD - AD - AD - AD - AD - AD - AD - AD - AD

---

## Dec 2024 Jan 2025

Fourth Semester B.E./B.Tech. Degree Examination, Dec.2024/Jan.2025 
Database Management System    
 
Time: 3 hrs.                                                                                                Max. Marks: 100 
 
Note: 1. Answer any FIVE full questions, choosing ONE full question from each module. 
                       2. M : Marks , L: Bloom’s level , C: Course outcomes.    
 
                  Module – 1 
M
L 
C 
Q.1 
a. Define the following terms: 
(i)   Database                        (ii) Schema                        (iii) Entity     
(iv) DDL                               (v) Degree of a relationship 

L1 CO1
 
b.
Briefly explain characteristics of database approach. 

L2 CO1
 
c. List and explain advantages of using DBMS approach. 

L2 CO1
                                                                           OR 
Q.2 
a. Define the following terms: 
(i)   Cardinality         (ii) Weak entity       (iii) Program data independence 
(iv) DML                   (v) Value sets 

L1 CO1
 
b.
Describe three-schema architecture. Why do we need mappings between 
schema levels? 

L2 CO1
 
c. Explain different types of attributes in ER model with suitable example for 
each. 

L2 CO1
                                                                      Module – 2  
Q.3 
a. With suitable example, explain the entity integrity and referential integrity 
constraints. Why each is considered important? 

L2 CO2
 
b.
Discuss equijoin and natural join with suitable example using relational 
algebra notation. 

L2 CO2
 
c. Given the relational tables: 
Employee: 
EID
Name
DepID
Salary

Alice 
Bob 
Eve 

Department: 
DeptID 
DeptName 

HR 
IT 
Sales 
 
Project 
PID
Project Name 
DeptID

Project Alpha 
Project Beta 
Project Gamma

Write relational algebra expression for the following: 
(i) Find the names and salaries of all employees in the ‘IT’ department. 
(ii) Find the ID’s and names of employees who are in the ‘IT’ department 
and have a salary greater than 6000. 
(iii) Find the ID’s and names of employees who are either in the ‘HR’ 
department or have a salary greater than 6000. 
(iv) Find the names of employees who are not in the ‘IT’ department 
(v) Find the names of employees along with their department names. 

L3 CO2
 
 
1 of 3 
 
USN 
BCS403 
VTU-15-01-2025 08:40:34am
15-01-2025 09:04:54am
AD - AD - AD - AD - AD - AD - AD - AD - AD
AD - AD - AD - AD - AD - AD - AD - AD - AD

BCS403
 
                                                                           OR 
Q.4 
a. Explain any two operations that change the state of relation in a database. 
Provide suitable examples. 

L2 CO2
 
b.
Discuss the aggregation functions and grouping in relational algebra with 
suitable examples. 

L2 CO2
 
c. Given the relational tables: 
Student: 
Project: 
SID
Name
PID
Project Name
a 
b 
c 
Alice 
Bob 
Carol 
p 
q 
r 
Alpha 
Beta 
Gamma 
    
Language: 
Enrollment:
LID
Language Name
SID 
PID 
x 
y 
z 
Python 
Java 
C++ 
a 
a 
b 
c 
p 
q 
q 
r 
Write relational algebra expression for the following: 
(i) Rename the student table to Learner and display it. 
(ii) Find the students (learners) who are not enrolled in any project. 
(iii) Find the students who are enrolled in all projects. 
(iv) Find the students who are not enrolled in any project. 
(v) Find the students who are enrolled in both the ‘Alpha’ and ‘Beta’ 
projects. 

L3 CO2
                                                                      Module – 3  
Q.5 
a. Explain Armstrong inference rules. 

L2 CO4
 
b.
What is the need for normalization? Explain 1NF, 2NF and 3NF with 
examples. 

L2 CO4
 
c. What is functional dependency? Write an algorithm to find minimal cover 
for set of functional dependencies. Construct minimal cover M for set of 
functional dependencies which are: E = {B  A, D  A, AB  D} 

L3 CO4
                                                                           OR 
Q.6 
a. Explain the types of update anomalies in SQL with an example. 

L2 CO4
 
b.
Explain types of JBBC drivers. 

L2 CO5
 
c. Consider the schema R = ABCD, subjected to FDs F = {A B, B C}, 
and the non-binary partition D1 = {ACD, AB, BC}. State whether D1 is a 
lossless decomposition? [give all steps in detail]. 

L3 CO4
                                                                      Module – 4  
Q.7 
a. Define transaction. Discuss ACID properties. 

L2 CO5
 
b.
With a neat diagram, explain transition diagram of a transaction. 

L2 CO5
 
c. Demonstrate working of assertion and triggers in SQL with example. 

L3 CO5
                                                                           OR 
Q.8 
a. Explain cursor and its properties in embedded SQL with suitable example. 

L2 CO5
 
b.
Determine if the following schedule is serializable and explain your 
reasoning: 
i) T1 : R(X)W(X)   T2 : R(X)W(X)  T1 : COMMIT  T2 : COMMIT 
ii) T1 : W(X)R(Y)  T2 : R(X)W(Y)   T1 : COMMIT  T2 : COMMIT 

L2 CO5
 
2 of 3 
VTU-15-01-2025 08:40:34am
15-01-2025 09:04:54am
AD - AD - AD - AD - AD - AD - AD - AD - AD
AD - AD - AD - AD - AD - AD - AD - AD - AD

BCS403
 
 
c. Consider the tables below: 
Sailors (sid : integer, sname : string, rating : integer, age : real) 
Boats (bid : integer, bname : string, color : string); 
Reserves (sid : integer, bid : integer, day : date) 
Write SQL queries for the following: 
(i) Write create table statement for reserves. 
(ii) Find all information of sailors who have reserved boat number 101. 
(iii) Find the names of sailors who have reserved at least one boat. 
(iv) Find the names of sailors who have reserved a red boat. 
(v) Find the average age of sailors for each rating level. 

L3 CO5
                                                                      Module – 5  
Q.9 
a. Explain the CAP theorem. 

L2 CO6
 
b.
What is NOSQL graph database? Explain Neo4j. 

L2 CO6
 
c. Why concurrency control and recovery are needed in DBMS? Demonstrate 
with suitable examples types of problems that may occur when two simple 
transactions run concurrently. 

L3 CO5
                                                                           OR 
Q.10
a. Explain basic operations CRUD in MongoDB. 

L2 CO6
 
b.
Explain deadlock prevention protocols. 

L2 CO5
 
c. Briefly discuss the two-phase looking techniques f0 concurrency control. 

L3 CO5
                                                                           
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
3 of 3 
VTU-15-01-2025 08:40:34am
15-01-2025 09:04:54am
AD - AD - AD - AD - AD - AD - AD - AD - AD
AD - AD - AD - AD - AD - AD - AD - AD - AD

---
