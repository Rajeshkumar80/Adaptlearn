<!-- PROVENANCE: subject_code=BCS306A | subject_name=Object Oriented Programming with Java | semester=3 | module=5 | source_type=MODULE_NOTES | source_file=module5.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS306A — Module 5

## Collections and Generics

**Subject:** BCS306A (Object Oriented Programming with Java)
**Module:** Module 5
**Content type:** module_notes
**Sources:** BCS306A-module-5-pdf.txt

---

MODULE-5 
Chapter -  1 
Multithreaded 
Programming 
 
 
 
 
 
 Java provides built-in support for multithreaded 
programming.  
 A multithreaded program contains two or more parts 
that can run concurrently. Each part of such a 
program is called a thread, and each thread defines a 
separate path of execution. 
  Thus, multithreading is a specialized form of 
multitasking.  
 However, there are two distinct types of multitasking: 
process-based and thread-based. 

  It is important to understand the difference between the 
two.  
 For many readers, process-based multitasking is the 
more familiar form. 
  A process is, in essence, a program that is executing.  
 Thus, process-based multitasking is the feature that 
allows your computer to run two or more programs 
concurrently. 
  For example, process based multitasking enables you to 
run the Java compiler at the same time that you are using 
a text editor or visiting a web site. 
  In a thread-based multitasking environment, the 
thread is the smallest unit of dispatchable code.  
 This means that a single program can perform two or 
more tasks simultaneously.  
 Multithreading enables you to write efficient programs 
that make maximum use of the processing power 
available in the system.  
 One important way multithreading achieves this is by 
keeping idle time to a minimum.  
 Multithreading helps you reduce this idle time because 
another thread can run when one is waiting.  
 
 
The Java Thread Model 
 The Java Thread Model The Java run-time system 
depends on threads for many things, and all the class 
libraries are designed with multithreading in mind.  
 In fact, Java uses threads to enable the entire 
environment to be asynchronous. This helps reduce 
inefficiency by preventing the waste of CPU cycles.  

 Single-threaded systems use an approach called an 
event loop with polling.  
 In this model, a single thread of control runs in an 
infinite loop, polling a single event queue to decide 
what to do next. 
  Once this polling mechanism returns with, say, a 
signal that a network file is ready to be read, then the 
event loop dispatches control to the appropriate event 
handler. 
  Until this event handler returns, nothing else can 
happen in the program.  
 This wastes CPU time.  
 It can also result in one part of a program dominating 
the system and preventing any other events from 
being processed. 
  In general, in a single-threaded environment, when a 
thread blocks (that is, suspends execution) because it 
is waiting for some resource, the entire program stops 
running.  
 The benefit of Java’s multithreading is that the main 
loop/polling mechanism is eliminated. One thread can 
pause without stopping other parts of your program.  
 Multithreading allows animation loops to sleep for a 
second between each frame without causing the whole 
system to pause.  
 When a thread blocks in a Java program, only the single 
thread that is blocked pauses.  
 All other threads continue to run.  
 As most readers know, over the past few years, multi-core 
systems have become common place. Of course, single-
core systems are still in widespread use.  

 It is important to understand that Java’s multithreading 
features work in both types of systems. 
  In a single core system, concurrently executing 
threads share the CPU, with each thread receiving a 
slice of CPU time. 
  Therefore, in a single-core system, two or more 
threads do not actually run at the same time, but idle 
CPU time is utilized.  
 However, in multi-core systems, it is possible for two or 
more threads to actually execute simultaneously.  
 In many cases, this can further improve program 
efficiency and increase the speed of certain operations. 
 It provides a powerful means of creating multithreaded 
applications that automatically scale to make best use of 
multi-core environments. 
  The Fork/Join Framework is part of Java’s support 
for parallel programming, which is the name 
commonly given to the techniques that optimize some 
types of algorithms for parallel execution in systems 
that have more than one CPU.  
 Threads exist in several states. Here is a general 
description. A thread can be running. It can be ready 
to run as soon as it gets CPU time. 
  A running thread can be suspended, which temporarily 
halts its activity.  
 A suspended thread can then be resumed, allowing it to 
pick up where it left off.  
 A thread can be blocked when waiting for a resource.  
 At any time, a thread can be terminated, which halts its 
execution immediately. Once terminated, a thread cannot 
be resumed. 

Thread Priorities 
  Java assigns to each thread a priority that determines 
how that thread should be treated with respect to the 
others.  
 Thread priorities are integers that specify the relative 
priority of one thread to another.  
 a higher-priority thread doesn’t run any faster than a 
lower-priority thread if it is the only thread running.  
 Instead, a thread’s priority is used to decide when to 
switch from one running thread to the next. This is 
called a context switch.  
 The rules that determine when a context switch takes 
place are simple:  
  A thread can voluntarily relinquish 
control: This is done by explicitly 
yielding, sleeping, or blocking on pending 
I/O. In this scenario, all other threads are 
examined, and the highest-priority thread 
that is ready to run is given the CPU. 
 A thread can be preempted by a higher-
priority thread: In this case, a lower-
priority thread that does not yield the 
processor is simply preempted—no matter 
what it is doing— by a higher-priority 
thread. Basically, as soon as a higher-
priority thread wants to run, it does. 
This is called preemptive multitasking. 
In cases where two threads with the same priority are 
competing for CPU cycles, the situation is a bit 
complicated.  

For operating systems such as Windows, threads of equal 
priority are time-sliced automatically in round-robin fashion. 
For other types of operating systems, threads of equal priority 
must voluntarily yield control to their peers. If they don’t, the 
other threads will not run. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

The Main Thread  
 When a Java program starts up, one thread begins 
running immediately. This is usually called the main 
thread of your program, because it is the one that is 
executed when your program begins.  
 The main thread is important for two reasons:  
1. It is the thread from which other “child” threads 
will be spawned.  
2. Often, it must be the last thread to finish 
execution 
because 
it 
performs 
various 
shutdown actions.  
3. Although 
the 
main 
thread 
is 
created 
automatically when your program is started, 
it can be controlled through a Thread object. 
4.  To do so, you must obtain a reference to it by 
calling the method currentThread( ), which 
is a public static member of Thread.  
5. Its general form is shown here:  
  
 
  
static Thread currentThread( )  
 
 This method returns a reference to the thread in 
which it is called. 
 Once you have a reference to the main thread, 
you can control it just like any other thread.  

 
 
 
 
 
 

 
 
 
 
 
 
 

 
 
Implementing Runnable  
 The easiest way to create a thread is to create a class 
that implements the Runnable interface.  
 Runnable abstracts a unit of executable code.  
 You can construct a thread on any object that implements 
Runnable.  
 To implement Runnable, a class need only implement 
a single method called run( ), which is declared like 
this:  
  
 
public void run( )  
 Inside run( ), you will define the code that constitutes the 
new thread.  
 It is important to understand that run( ) can call other 
methods, use other classes, and declare variables, just 
like the main thread can.  
 The only difference is that run( ) establishes the entry 
point for another, concurrent thread of execution 
within your program. 
  This thread will end when run( ) returns. 
  After you create a class that implements Runnable, you 
will instantiate an object of type Thread from within 
that class.  
 Thread defines several constructors. 

  The one that we will use is shown here: 
Thread(Runnable threadOb, String threadName)  
 In this constructor, threadOb is an instance of a class 
that implements the Runnable interface. This defines 
where execution of the thread will begin. 
  The name of the new thread is specified by 
threadName. After the new thread is created, it will 
not start running until you call its start( ) method, 
which is declared within Thread.  
 In essence, start( ) executes a call to run( ). The start( ) 
method is shown here: void start( ) 
 
 

 
 
 
 
 
 

Using isAlive( ) and join( )  
 As mentioned, often you will want the main thread to 
finish last. 
  In the preceding examples, this is accomplished by 
calling sleep( ) within main( ), with a long enough delay 
to ensure that all child threads terminate prior to the main 
thread 
 However, this is hardly  satisfactory solution, and it also 
raises a larger question: How can one thread know when 
another thread has ended? Fortunately, Thread provides a 
means by which you can answer this question. 
  Two ways exist to determine whether a thread has 
finished.  
 First, you can call isAlive( ) on the thread. 
  This method is defined by Thread, and its general 
form is shown here:  
  
final boolean isAlive( )  
 The isAlive( ) method returns true if the thread upon 
which it is called is still running.  
 It returns false otherwise. 
  While isAlive( ) is occasionally useful, the method that 
you will more commonly use to wait for a thread to 
finish is called join( ), shown here:  
  
final void join( ) throws InterruptedException  
 This method waits until the thread on which it is called 
terminates. 
  Its name comes from the concept of the calling thread 
waiting until the specified thread joins it.  
 Additional forms of join( ) allow you to specify a 
maximum amount of time that you want to wait for 
the specified thread to terminate. 

OUTPUT 
 

 
 
 
 
Thread Priorities  
 Thread priorities are used by the thread scheduler to 
decide when each thread should be allowed to run. 
 In theory, over a given period of time, higher-priority 
threads get more CPU time than lower-priority threads. 
 In practice, the amount of CPU time that a thread gets 
often depends on several factors besides its priority. (For 
example, 
how 
an 
operating 
system implements 
multitasking can affect the relative availability of CPU 
time.)  
 A higher-priority thread can also preempt a lower-
priority one. 
  For instance, when a lower-priority thread is running 
and a higher-priority thread resumes (from sleeping 
or waiting on I/O, for example), it will preempt the 
lower-priority thread.  
 In theory, threads of equal priority should get equal 
access to the CPU. But you need to be careful.  
 Remember, Java is designed to work in a wide range of 
environments. Some of those environments implement 
multitasking fundamentally differently than others. 

 
 
 
Synchronization  
 When two or more threads need access to a shared 
resource, they need some way to ensure that the 
resource will be used by only one thread at a time. 
  The process by which this is achieved is called 
synchronization.  
 Key to synchronization is the concept of the monitor.  
 A monitor is an object that is used as a mutually 
exclusive lock. 
  Only one thread can own a monitor at a given time.  
 When a thread acquires a lock, it is said to have entered 
the monitor. 

  All other threads attempting to enter the locked monitor 
will be suspended until the first thread exits the monitor.  
 These other threads are said to be waiting for the monitor.  
 A thread that owns a monitor can reenter the same 
monitor if it so desires.  
 You can synchronize your code in either of two ways. 
Both involve the use of the synchronized keyword, and 
both are examined here. 
 
 
Using Synchronized Methods 
 Synchronization is easy in Java, because all objects have 
their own implicit monitor associated with them.  
 To enter an object’s monitor, just call a method that 
has been modified with the synchronized keyword.  
 While a thread is inside a synchronized method, all other 
threads that try to call it (or any other synchronized 
method) on the same instance have to wait.  
 let’s begin with a simple example that does not use it—
but should.  

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 

 
 
 
 
 
 
 
 

The synchronized Statement  
 While creating synchronized methods within classes 
that you create is an easy and effective means of 
achieving synchronization, it will not work in all cases. 
 To understand why, consider the following. Imagine that 
you want to synchronize access to objects of a class 
that was not designed for multithreaded access.  
 That is, the class does not use synchronized methods. 
Further, this class was not created by you, but by a third 
party, and you do not have access to the source code. 
 Thus, you can’t add synchronized to the appropriate 
methods within the class.  
 How can access to an object of this class be 
synchronized? Fortunately, the solution to this 
problem is quite easy: You simply put calls to the 
methods defined by this class inside a synchronized 
block. 
 
 
 

 
 
 
 
 
 
 
 

 
 
 
 
Interthread Communication  
 As you will see, this is especially easy in Java.  
 As discussed earlier, multithreading replaces event loop 
programming by dividing your tasks into discrete, logical 
units.  
 Threads also provide a secondary benefit: they do away 
with polling. Polling is usually implemented by a loop 
that is used to check some condition repeatedly. 
  Once the condition is true, appropriate action is taken.  
 This wastes CPU time.  

 For example, consider the classic queuing problem, 
where one thread is producing some data and another is 
consuming it. 
  To make the problem more interesting, suppose that the 
producer has to wait until the consumer is finished before 
it generates more data. 
  In a polling system, the consumer would waste many 
CPU cycles while it waited for the producer to produce.  
 Once the producer was finished, it would start polling, 
wasting more CPU cycles waiting for the consumer to 
finish, and so on. 
  Clearly, this situation is undesirable.  
 To avoid polling, Java includes an elegant inter process 
communication mechanism via the wait( ), notify( ), and 
notifyAll( ) methods. 
  These methods are implemented as final methods in 
Object, so all classes have them.  
 All three methods can be called only from within a 
synchronized context.  
 Although conceptually advanced from a computer 
science perspective, the rules for using these methods are 
actually quite simple: 

 
 
 Before working through an example that 
illustrates 
interthread 
communication, 
an 
important point needs to be made. 
  Although wait( ) normally waits until notify( ) or 
notifyAll( ) is called, there is a possibility that in very 
rare cases the waiting thread could be awakened(stop 
of sleep) due to a spurious wakeup.(without 
satisfaction) 
  In this case, a waiting thread resumes without notify( ) 
or notifyAll( ) having been called.  
 (In essence, the thread resumes for no apparent reason.) 
Because of this remote possibility, Oracle recommends 
that calls to wait( ) should take place within a loop that 
checks the condition on which the thread is waiting.  
 

 
 
 
 
 
Deadlock  
 A special type of error that you need to avoid that 
relates specifically to multitasking is deadlock, which 
occurs when two threads have a circular dependency 
on a pair of synchronized objects.  
 For example, suppose one thread enters the monitor on 
object X and another thread enters the monitor on object 
Y.  
 If the thread in X tries to call any synchronized method 
on Y, it will block as expected. 

  However, if the thread in Y, in turn, tries to call any 
synchronized method on X, the thread waits forever, 
because to access X, it would have to release its own lock 
on Y so that the first thread could complete.  
 Deadlock is a difficult error to debug for two reasons: 
 
 
 
 

 
 

 
 
 
 
 
 
 
Suspending, Resuming, and Stopping Threads 
 Sometimes, suspending execution of a thread is useful. 
  For example, a separate thread can be used to display 
the time of day.  
 If the user doesn’t want a clock, then its thread can be 
suspended.  
 Whatever the case, suspending a thread is a simple 
matter.  

 Once suspended, restarting the thread is also a simple 
matter.  
 The mechanisms to suspend, stop, and resume threads 
differ between early versions of Java, such as Java 1.0, 
and modern versions, beginning with Java 2.  
 Prior to Java 2, a program used suspend( ), resume( ), 
and stop( ), which are methods defined by Thread, to 
pause, restart, and stop the execution of a thread. 
 The suspend( ) method of the Thread class was 
deprecated by Java 2 several years ago. 
 This was done because suspend( ) can sometimes cause 
serious system failures. 
  Assume that a thread has obtained locks on critical 
data structures.  
 If that thread is suspended at that point, those locks are 
not relinquished.(retreat) 
  Other threads that may be waiting for those resources can 
be deadlocked. 
  The resume( ) method is also deprecated.  
 It does not cause problems, but cannot be used without 
the suspend( ) method as its counterpart.  
 The stop( ) method of the Thread class, too, was 
deprecated by Java 2.  
 This was done because this method can sometimes cause 
serious system failures.  
 Assume that a thread is writing to a critically important 
data structure and has completed only part of its changes. 
  If that thread is stopped at that point, that data structure 
might be left in a corrupted state. The trouble is that stop( 
) causes any lock the calling thread holds to be released. 

  Thus, the corrupted data might be used by another 
thread that is waiting on the same lock.  
 Because you can’t now use the suspend( ), resume( ), 
or stop( ) methods to control a thread, you might be 
thinking that no way exists to pause, restart, or 
terminate a thread. 
  But, fortunately, this is not true. Instead, a thread must 
be designed so that the run( ) method periodically 
checks to determine whether that thread should 
suspend, resume, or stop its own execution.  
 
 

 
 
 
 
 

MODULE-5 
CHAPTER-2 
Enumerations, 
Type Wrappers 
and 
Autoboxing 
 
 
 
 
 
 
 

Enumerations  
 Versions of Java prior to JDK 5 lacked one feature 
that 
many 
programmers 
felt 
was 
needed: 
enumerations.  
 In its simplest form, an enumeration is a list of named 
constants. 
  Although Java offered other features that provide 
somewhat similar functionality, such as final variables, 
many programmers still missed the conceptual purity of 
enumerations— especially because enumerations are 
supported by many other commonly used languages.  
 Beginning with JDK 5, enumerations were added to the 
Java language, and they are now an integral and widely 
used part of Java. 
  In their simplest form, Java enumerations appear 
similar to enumerations in other languages. However, 
this similarity may be only skin deep because, in Java, 
an enumeration defines a class type.  
 By making enumerations into classes, the capabilities of 
the enumeration are greatly expanded.  
 For example, in Java, an enumeration can have 
constructors, methods, and instance variables.  
 

 
 
 

 
 
 
 
 The values( ) method returns an array that contains a 
list of the enumeration constants.  
 The valueOf( ) method returns the enumeration 
constant whose value corresponds to the string passed 
in str.  
 In both cases, enum-type is the type of the 
enumeration.  

 
 
 
 
 

Type Wrappers 
 As you know, Java uses primitive types (also called 
simple types), such as int or double, to hold the basic 
data types supported by the language.  
 the primitive types are not part of the object hierarchy, 
and they do not inherit Object.  
 Despite the performance benefit offered by the primitive 
types, there are times when you will need an object 
representation.  
 For example, you can’t pass a primitive type by 
reference to a method. Also, many of the standard 
data structures implemented by Java operate on 
objects, which means that you can’t use these data 
structures to store primitive types.  
 To handle these (and other) situations, Java provides 
type wrappers, which are classes that encapsulate a 
primitive type within an object.  
 The type wrapper classes are described in detail in 
Part II, but they are introduced here because they 
relate directly to Java’s autoboxing feature.  
 The type wrappers are Double, Float, Long, Integer, 
Short, Byte, Character, and Boolean.  
 These classes offer a wide array of methods that allow 
you to fully integrate the primitive types into Java’s 
object hierarchy.  

 
 
 
The Numeric Type Wrappers  
 By far, the most commonly used type wrappers are those 
that represent numeric values.  
 These are Byte, Short, Integer, Long, Float, and 
Double.  
 All of the numeric type wrappers inherit the abstract 
class Number.  
 Number declares methods that return the value of an 
object in each of the different number formats.  
 These methods are shown here: 

 

Autoboxing  
 Beginning with JDK 5, Java added two important 
features: autoboxing and auto-unboxing.  
 Autoboxing is the process by which a primitive type is 
automatically encapsulated (boxed) into its equivalent 
type wrapper whenever an object of that type is 
needed.  
 There is no need to explicitly construct an object.  
 Auto-unboxing is the process by which the value of a 
boxed object is automatically extracted (unboxed) 
from a type wrapper when its value is needed.  
 There is no need to call a method such as intValue( ) or 
doubleValue( ).  
 The addition of autoboxing and auto-unboxing greatly 
streamlines the coding of several algorithms, removing 
the tedium of manually boxing and unboxing values. 
  It also helps prevent errors.  
 Moreover, it is very important to generics, which operate 
only on objects. 
  Finally, autoboxing makes working with the Collections 
Framework. 
 With autoboxing, it is no longer necessary to manually 
construct an object in order to wrap a primitive type.  
 You need only assign that value to a type-wrapper 
reference.  
 Java automatically constructs the object for you. 
 For example, here is the modern way to construct an 
Integer 
object 
that 
has 
the 
value 
100:

 
 
 
Autoboxing and Methods  
 In addition to the simple case of assignments, autoboxing 
automatically occurs whenever a primitive type must 
be converted into an object;  
 auto-unboxing takes place whenever an object must be 
converted into a primitive type.  
 Thus, autoboxing/unboxing might occur when an 
argument is passed to a method, or when a value is 
returned by a method. 

 
 
 
 
Autoboxing/Unboxing Occurs in Expressions  
 In general, autoboxing and unboxing take place 
whenever a conversion into an object or from an 
object is required.  
 This applies to expressions.  
 Within 
an 
expression, 
a 
numeric 
object 
is 
automatically unboxed.  
 The outcome of the expression is reboxed, if necessary.  
 For example, consider the following program:
