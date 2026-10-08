# BCS306A — Module 4

## Packages and I/O Streams

**Subject:** BCS306A (Object Oriented Programming with Java)
**Module:** Module 4
**Content type:** module_notes
**Sources:** BCS306A-module-4-pdf.txt

---

Defining a Package  
 A set of classes and interfaces grouped together are known as 
Packages in JAVA. 
 To create a package is quite easy: simply include a package 
command as the first statement in a Java source file. 
  Any classes declared within that file will belong to the specified 
package.  
 The package statement defines a name space in which classes are stored.  
Module 4
Packages: Packages, Packages and Member Access, Importing Packages.
 
Exceptions: Exception-Handling Fundamentals, Exception Types, Uncaught Exceptions, Using try
and catch, Multiple catch Clauses, Nested try Statements, throw, throws, finally, Java’s Built-in
Exceptions, Creating Your Own Exception Subclasses, Chained Exceptions.
website: vtucode.in

 If you omit the package statement, the class names are put into the default 
package, which has no name 
 While the default package is fine for short, sample programs, it is 
inadequate for real applications. 
 This is the general form of the package statement: 

 
 
 
 
 
 
 

Packages and Member Access 
 Classes and packages are both means of encapsulating and 
containing the name space and scope of variables and methods.  
 Packages act as containers for classes and other subordinate packages. 
  Classes act as containers for data and code.  
 The class is Java’s smallest unit of abstraction. Because of the 
interplay between classes and packages, Java addresses four categories 
of visibility for class members: 
 
 
 
 

Importing Packages. 
 Java includes the import statement to bring certain classes, or entire 
packages, into visibility.  
 Once imported, a class can be referred to directly, using only its name.  
 The import statement is a convenience to the programmer and is not 
technically needed to write a complete Java program. 
  If you are going to refer to a few dozen classes in your application, 
however, the import statement will save a lot of typing. 
  In a Java source file, import statements occur immediately following the 
package statement (if it exists) and before any class definitions.  
 This is the general form of the import statement: 
 
Here, pkg1 is the name of a top-level package, and pkg2 is the name 
of a subordinate package inside the outer package separated by a dot 
(.).  
 you specify either an explicit classname or a star (*), which indicates 
that the Java compiler should import the entire package.  
 This code fragment shows both forms in use: 

 
 

 
 
MODULE-4 
CHAPTER-2 
Exceptions 
 
 
 
An exception is an abnormal condition that arises in a code sequence at run 
time. In other words, an exception is a run time error 
Exception-Handling Fundamentals 
 Java exception handling is managed via five keywords: try, catch, 
throw, throws, and finally.  
 Program statements that you want to monitor for exceptions are 
contained within a try block. 
  If an exception occurs within the try block, it is thrown.  
 Your code can catch this exception (using catch) and handle it in some 
rational manner.  
 System-generated exceptions are automatically thrown by the Java 
run time system.  

 To manually throw an exception, use the keyword throw. Any 
exception that is thrown out of a method must be specified as such by 
a throws clause.  
 Any code that absolutely must be executed after a try block completes is 
put in a finally block. 
 
 
 
 
 
 
 
 
 
 

Exception Types 
 
Exception Types  
 All exception types are subclasses of the built-in class Throwable.  
 Thus, Throwable is at the top of the exception class hierarchy.  
 Immediately below Throwable are two subclasses that partition 
exceptions into two distinct branches.  
 One branch is headed by Exception.  
 This class is used for exceptional conditions that user programs 
should catch. This is also the class that you will subclass to create 
your own custom exception types.  
 There is an important subclass of Exception, called 
RuntimeException. 
  Exceptions of this type are automatically defined for the programs 
that you write and include things such as division by zero and invalid 
array indexing.  
 The other branch is topped by Error, which defines exceptions that 
are not expected to be caught under normal circumstances by your 
program.  
 Exceptions of type Error are used by the Java run-time system to 
indicate errors having to do with the run-time environment, itself.  
 Stack overflow is an example of such an error.  

 
we haven’t supplied any exception handlers of our own, so the 
exception is caught by the default handler provided by the Java run-
time system. 
  Any exception that is not caught by your program will ultimately be 
processed by the default handler.  
 The default handler displays a string describing the exception, prints 
a stack trace from the point at which the exception occurred, and 
terminates the program. 
 
 
 
 
Using try and catch  
 Although the default exception handler provided by the Java run-
time system is useful for debugging, you will usually want to handle 
an exception yourself. 
  Doing so provides two benefits.  
 
First, it allows you to fix the error.  
 
Second, it prevents the program from automatically terminating. 

  Most users would be confused, to prevent this Programmers used  
guard against and handle a run-time error, simply enclose the code 
that you want to monitor inside a try block. 
  Immediately following the try block, include a catch clause that 
specifies the exception type that you wish to catch.  
 
 
 

 
 
 
Multiple catch Clauses  
 In some cases, more than one exception could be raised by a single 
piece of code. 
  To handle this type of situation, you can specify two or more catch 
clauses, each catching a different type of exception.  
 When an exception is thrown, each catch statement is inspected in 
order, and the first one whose type matches that of the exception is 
executed. 
  After one catch statement executes, the others are bypassed, and 
execution continues after the try / catch block.  
 The following example traps two different exception types: 

 
 
 
 
 

Nested try Statements  
 The try statement can be nested. 
  That is, a try statement can be inside the block of another try.  
 Each time a try statement is entered, the context of that exception is 
pushed on the stack.  
 If an inner try statement does not have a catch handler for a 
particular exception, the stack is unwound and the next try 
statement’s catch handlers are inspected for a match.  
 This continues until one of the catch statements succeeds, or until all 
of the nested try statements are exhausted.  
 If no catch statement matches, then the Java run-time system will 
handle the exception. 
  Here is an example that uses nested try statements: 
 

OUTPUT 
 
 
 
 
throw  
 So far, you have only been catching exceptions that are thrown by the 
Java run-time system.  
 However, it is possible for your program to throw an exception 
explicitly, using the throw statement.  
 The general form of throw is shown here: throw ThrowableInstance;  
 Here, ThrowableInstance must be an object of type Throwable or a 
subclass of Throwable. 

  Primitive types, such as int or char, as well as non-Throwable 
classes, such as String and Object, cannot be used as exceptions. 
There are two ways you can obtain a Throwable object: using a 
parameter in a catch clause or creating one with the new operator.  
 The flow of execution stops immediately after the throw statement; 
any subsequent statements are not executed.  
 The nearest enclosing try block is inspected to see if it has a catch 
statement that matches the type of exception. 
  If it does find a match, control is transferred to that statement. If 
not, then the next enclosing try statement is inspected, and so on. If 
no matching catch is found, then the default exception handler halts 
the program and prints the stack trace.  
 Here is a sample program that creates and throws an exception. The 
handler that catches the exception rethrows it to the outer handler. 
 

 
 

Throws 
 If a method is capable of causing an exception that it does not handle, it 
must specify this behavior so that callers of the method can guard 
themselves against that exception.  
 You do this by including a throws clause in the method’s declaration.  
 A throws clause lists the types of exceptions that a method might 
throw. This is necessary for all exceptions, except those of type Error 
or RuntimeException, or any of their subclasses.  
 All other exceptions that a method can throw must be declared in the 
throws clause. If they are not, a compile-time error will result. 
 
 
 
 
 
 
 

 
 
 
finally  
 finally creates a block of code that will be executed after a try /catch 
block has completed and before the code following the try/catch block.  
 The finally block will execute whether or not an exception is thrown.  
 If an exception is thrown, the finally block will execute even if no 
catch statement matches the exception.  
 Any time a method is about to return to the caller from inside a try/catch 
block, via an uncaught exception or an explicit return statement, the 
finally clause is also executed just before the method returns.  
 This can be useful for closing file handles and freeing up any other 
resources that might have been allocated at the beginning of a method 
with the intent of disposing of them before returning.  
 The finally clause is optional.  

 However, each try statement requires at least one catch or a finally clause 
 
 
 
Java’s Built-in Exceptions 
 In the language of Java, these are called unchecked exceptions because 
the compiler does not check to see if a method handles or throws these 
exceptions. The unchecked exceptions defined in java.lang are listed 
in Table 10-1.  
 Table 10-2 lists those exceptions defined by java.lang that must be 
included in a method’s throws list if that method can generate one of 
these exceptions and does not handle it itself.  

 These are called checked exceptions.  
 In addition to the exceptions in java.lang, Java defines several more that 
relate to its other standard packages. 
 
 

 
Creating Your Own Exception Subclasses  
 The Exception class does not define any methods of its own.  
 It does, of course, inherit those methods provided by Throwable.  
 Thus, all exceptions, including those that you create, have the methods 
defined by Throwable available to them.  
 They are shown in Table 10-3. You may also wish to override one or 
more of these methods in exception classes that you create.  
 Exception defines four public constructors.  
 Two support chained exceptions. 
 The other two are shown here: 
 
 
 The first form creates an exception that has no description.  
 The second form lets you specify a description of the exception. 

  
 
 

 
 
 
 
 
 

Chained Exceptions  
 Beginning with JDK 1.4, a feature was incorporated into the 
exception subsystem: chained exceptions.  
 The chained exception feature allows you to associate another 
exception with an exception.  
 This second exception describes the cause of the first exception.  
 For example, imagine a situation in which a method throws an 
ArithmeticException because of an attempt to divide by zero.  
 However, the actual cause of the problem was that an I/O error occurred, 
which caused the divisor to be set improperly.  
 Although the method must certainly throw an ArithmeticException, 
since that is the error that occurred, you might also want to let the 
calling code know that the underlying cause was an I/O error.  
 Chained exceptions let you handle this, and any other situation in 
which layers of exceptions exist.  
 To allow chained exceptions, two constructors and two methods were 
added to Throwable. The constructors are shown here: 
 
 
 In the first form, causeExc is the exception that causes the current 
exception.  
 That is, causeExc is the underlying reason that an exception occurred.  
 The second form allows you to specify a description at the same time 
that you specify a cause exception.  
 These two constructors have also been added to the Error, Exception, 
and RuntimeException classes. 
  The chained exception methods supported by Throwable are 
getCause( ) and initCause( ).  
 These methods are shown in Table 10-3 and are repeated here for the 
sake of discussion. 

  
 The getCause( ) method returns the exception that underlies the current 
exception.  
 If there is no underlying exception, null is returned.  
 The initCause( ) method associates causeExc with the invoking 
exception and returns a reference to the exception.  
 Thus, you can associate a cause with an exception after the exception has 
been created.  
 However, the cause exception can be set only once.  
 Thus, you can call initCause( ) only once for each exception object.  
 Furthermore, if the cause exception was set by a constructor, then you 
can’t set it again using initCause( ). 
  In general, initCause( ) is used to set a cause for legacy exception 
classes that don’t support the two additional constructors described 
earlier.  
 Here is an example that illustrates the mechanics of handling chained 
exceptions:
