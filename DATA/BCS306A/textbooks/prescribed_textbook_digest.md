# BCS306A — Textbook Notes

**Subject:** BCS306A (Object Oriented Programming with Java)
**Content type:** textbook_notes
**Primary Reference:** Herbert Schildt — Java: The Complete Reference & Cay Horstmann — Core Java & Joshua Bloch — Effective Java

---

# BCS306A — Textbook Notes (Module-wise)
**Subject:** Object Oriented Programming with Java
**Prescribed Textbooks:** Herbert Schildt — Java: The Complete Reference & Cay Horstmann — Core Java & Joshua Bloch — Effective Java

---

## Module 1 Textbook: Introduction to Java — Classes and Objects

### Textbook Excerpt — Reference: T1_Java_The_Complete_Reference_Herbert_Schildt.txt

. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 490

SecurityManager . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 490

StackTraceElement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 491

Enum . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 492

ClassValue . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 493

The CharSequence Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 493

The Comparable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 493

The Appendable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 494

The Iterable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 494

The Readable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 495

The AutoCloseable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 495

The Thread.UncaughtExceptionHandler Interface . . . . . . . . . . . . . . . 495

The java.lang Subpackages . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 495

java.lang.annotation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.instrument . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.invoke . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.management . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.ref . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.reflect . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496


Contents    xvii
Chapter 18	 java.util Part 1: The Collections Framework . . . . . . . . . . . . . . . . . . . . . 497

Collections Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 498

JDK 5 Changed the Collections Framework . . . . . . . . . . . . . . . . . . . . . . 500

Generics Fundamentally Changed the Collections Framework . . 500

Autoboxing Facilitates the Use of Primitive Types . . . . . . . . . . . . . 500

The For-Each Style for Loop . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 500

The Collection Interfaces . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 501

The Collection Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 501

The List Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 504

The Set Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 504

The SortedSet Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 506

The NavigableSet In

### Textbook Excerpt — Reference: T1_Java_The_Complete_Reference_Herbert_Schildt.txt

this declaration, @MaxLen annotates the type of the first level and @NotZeroLen
annotates the type of the second level. In this declaration
@TypeAnno Integer[] vec;
the element type Integer is annotated.
Repeating Annotations
Another new JDK 8 annotation feature enables an annotation to be repeated on the same
element. This is called repeating annotations. For an annotation to be repeatable, it must be
annotated with the @Repeatable annotation, defined in java.lang.annotation. Its value field
specifies the container type for the repeatable annotation. The container is specified as an
annotation for which the value field is an array of the repeatable annotation type. Thus, to
create a repeatable annotation, you must create a container annotation and then specify
that annotation type as an argument to the @Repeatable annotation.
To access the repeated annotations using a method such as getAnnotation( ), you will
use the container annotation, not the repeatable annotation. The following program shows
this approach. It converts the version of MyAnno shown previously into a repeatable
annotation and demonstrates its use.
// Demonstrate a repeated annotation.

import java.lang.annotation.*;
import java.lang.reflect.*;

// Make MyAnno repeatable.
@Retention(RetentionPolicy.RUNTIME)
@Repeatable(MyRepeatedAnnos.class)
@interface MyAnno {
String str() default "Testing";
int val() default 9000;
}

// This is the container annotation.
@Retention(RetentionPolicy.RUNTIME)
@interface MyRepeatedAnnos {
MyAnno[] value();
}

class RepeatAnno {

// Repeat MyAnno on myMeth().
@MyAnno(str = "First annotation", val = -1)
@MyAnno(str = "Second annotation", val = 100)
public static void myMeth(String str, int i)

{
RepeatAnno ob = new RepeatAnno();

try {
Class<?> c = ob.getClass();

// Obtain the annotations for myMeth().
Method m = c.getMethod("myMeth", String.class, int.class);

// Display the repeated MyAnno annotations.
Annotation anno = m.getAnnotation(MyRepeatedAnnos.class);
System.out.println(anno);

} catch (NoSuchMethodException exc) {
System.out.println("Method Not Found.");
}
}

public static void main(String args[]) {
myMeth("test", 10);
}
}
The output is shown here:
@MyRepeatedAnnos(value=[@MyAnno(str=First annotation, val=-1),
@MyAnno(str=Second annotation, val=100)])
As explained, in order for MyAnno to be repeatable, it must be annotated with the
@Repeatable annotation, which specifies its container annotation. The container annotation
is called MyRepeatedAnnos. The program accesses the repeated annotations by calling
getAnnotation( ), passing in the class of the container annotation, not the repeatable
annotation, itself. As the output shows, the repeated annotations are separated by a comma.
They are not returned individually.
Another way to obtain the repeated annotations is to use one of the new methods
added to AnnotatedElement by JDK 8, which can operate directly on a repeated annotation.
These are getAnnotationsByType( ) and getDeclaredAnnotation

---

## Module 2 Textbook: Inheritance and Interfaces

### Textbook Excerpt — Reference: T1_Java_The_Complete_Reference_Herbert_Schildt.txt

. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 490

SecurityManager . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 490

StackTraceElement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 491

Enum . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 492

ClassValue . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 493

The CharSequence Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 493

The Comparable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 493

The Appendable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 494

The Iterable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 494

The Readable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 495

The AutoCloseable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 495

The Thread.UncaughtExceptionHandler Interface . . . . . . . . . . . . . . . 495

The java.lang Subpackages . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 495

java.lang.annotation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.instrument . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.invoke . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.management . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.ref . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.reflect . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496


Contents    xvii
Chapter 18	 java.util Part 1: The Collections Framework . . . . . . . . . . . . . . . . . . . . . 497

Collections Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 498

JDK 5 Changed the Collections Framework . . . . . . . . . . . . . . . . . . . . . . 500

Generics Fundamentally Changed the Collections Framework . . 500

Autoboxing Facilitates the Use of Primitive Types . . . . . . . . . . . . . 500

The For-Each Style for Loop . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 500

The Collection Interfaces . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 501

The Collection Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 501

The List Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 504

The Set Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 504

The SortedSet Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 506

The NavigableSet In

### Textbook Excerpt — Reference: R1_Effective_Java_Joshua_Bloch.txt

rovider framework sketch
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
ages programmers to use composition instead of inheritance (Item 16

---

## Module 3 Textbook: Exception Handling and Multithreading

### Textbook Excerpt — Reference: T1_Java_The_Complete_Reference_Herbert_Schildt.txt

. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 490

SecurityManager . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 490

StackTraceElement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 491

Enum . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 492

ClassValue . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 493

The CharSequence Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 493

The Comparable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 493

The Appendable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 494

The Iterable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 494

The Readable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 495

The AutoCloseable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 495

The Thread.UncaughtExceptionHandler Interface . . . . . . . . . . . . . . . 495

The java.lang Subpackages . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 495

java.lang.annotation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.instrument . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.invoke . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.management . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.ref . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.reflect . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496


Contents    xvii
Chapter 18	 java.util Part 1: The Collections Framework . . . . . . . . . . . . . . . . . . . . . 497

Collections Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 498

JDK 5 Changed the Collections Framework . . . . . . . . . . . . . . . . . . . . . . 500

Generics Fundamentally Changed the Collections Framework . . 500

Autoboxing Facilitates the Use of Primitive Types . . . . . . . . . . . . . 500

The For-Each Style for Loop . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 500

The Collection Interfaces . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 501

The Collection Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 501

The List Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 504

The Set Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 504

The SortedSet Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 506

The NavigableSet In

### Textbook Excerpt — Reference: T1_Java_The_Complete_Reference_Herbert_Schildt.txt

this declaration, @MaxLen annotates the type of the first level and @NotZeroLen
annotates the type of the second level. In this declaration
@TypeAnno Integer[] vec;
the element type Integer is annotated.
Repeating Annotations
Another new JDK 8 annotation feature enables an annotation to be repeated on the same
element. This is called repeating annotations. For an annotation to be repeatable, it must be
annotated with the @Repeatable annotation, defined in java.lang.annotation. Its value field
specifies the container type for the repeatable annotation. The container is specified as an
annotation for which the value field is an array of the repeatable annotation type. Thus, to
create a repeatable annotation, you must create a container annotation and then specify
that annotation type as an argument to the @Repeatable annotation.
To access the repeated annotations using a method such as getAnnotation( ), you will
use the container annotation, not the repeatable annotation. The following program shows
this approach. It converts the version of MyAnno shown previously into a repeatable
annotation and demonstrates its use.
// Demonstrate a repeated annotation.

import java.lang.annotation.*;
import java.lang.reflect.*;

// Make MyAnno repeatable.
@Retention(RetentionPolicy.RUNTIME)
@Repeatable(MyRepeatedAnnos.class)
@interface MyAnno {
String str() default "Testing";
int val() default 9000;
}

// This is the container annotation.
@Retention(RetentionPolicy.RUNTIME)
@interface MyRepeatedAnnos {
MyAnno[] value();
}

class RepeatAnno {

// Repeat MyAnno on myMeth().
@MyAnno(str = "First annotation", val = -1)
@MyAnno(str = "Second annotation", val = 100)
public static void myMeth(String str, int i)

{
RepeatAnno ob = new RepeatAnno();

try {
Class<?> c = ob.getClass();

// Obtain the annotations for myMeth().
Method m = c.getMethod("myMeth", String.class, int.class);

// Display the repeated MyAnno annotations.
Annotation anno = m.getAnnotation(MyRepeatedAnnos.class);
System.out.println(anno);

} catch (NoSuchMethodException exc) {
System.out.println("Method Not Found.");
}
}

public static void main(String args[]) {
myMeth("test", 10);
}
}
The output is shown here:
@MyRepeatedAnnos(value=[@MyAnno(str=First annotation, val=-1),
@MyAnno(str=Second annotation, val=100)])
As explained, in order for MyAnno to be repeatable, it must be annotated with the
@Repeatable annotation, which specifies its container annotation. The container annotation
is called MyRepeatedAnnos. The program accesses the repeated annotations by calling
getAnnotation( ), passing in the class of the container annotation, not the repeatable
annotation, itself. As the output shows, the repeated annotations are separated by a comma.
They are not returned individually.
Another way to obtain the repeated annotations is to use one of the new methods
added to AnnotatedElement by JDK 8, which can operate directly on a repeated annotation.
These are getAnnotationsByType( ) and getDeclaredAnnotation

---

## Module 4 Textbook: Packages and I/O Streams

### Textbook Excerpt — Reference: T1_Java_The_Complete_Reference_Herbert_Schildt.txt

. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 490

SecurityManager . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 490

StackTraceElement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 491

Enum . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 492

ClassValue . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 493

The CharSequence Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 493

The Comparable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 493

The Appendable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 494

The Iterable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 494

The Readable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 495

The AutoCloseable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 495

The Thread.UncaughtExceptionHandler Interface . . . . . . . . . . . . . . . 495

The java.lang Subpackages . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 495

java.lang.annotation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.instrument . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.invoke . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.management . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.ref . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.reflect . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496


Contents    xvii
Chapter 18	 java.util Part 1: The Collections Framework . . . . . . . . . . . . . . . . . . . . . 497

Collections Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 498

JDK 5 Changed the Collections Framework . . . . . . . . . . . . . . . . . . . . . . 500

Generics Fundamentally Changed the Collections Framework . . 500

Autoboxing Facilitates the Use of Primitive Types . . . . . . . . . . . . . 500

The For-Each Style for Loop . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 500

The Collection Interfaces . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 501

The Collection Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 501

The List Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 504

The Set Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 504

The SortedSet Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 506

The NavigableSet In

### Textbook Excerpt — Reference: T1_Java_The_Complete_Reference_Herbert_Schildt.txt

this declaration, @MaxLen annotates the type of the first level and @NotZeroLen
annotates the type of the second level. In this declaration
@TypeAnno Integer[] vec;
the element type Integer is annotated.
Repeating Annotations
Another new JDK 8 annotation feature enables an annotation to be repeated on the same
element. This is called repeating annotations. For an annotation to be repeatable, it must be
annotated with the @Repeatable annotation, defined in java.lang.annotation. Its value field
specifies the container type for the repeatable annotation. The container is specified as an
annotation for which the value field is an array of the repeatable annotation type. Thus, to
create a repeatable annotation, you must create a container annotation and then specify
that annotation type as an argument to the @Repeatable annotation.
To access the repeated annotations using a method such as getAnnotation( ), you will
use the container annotation, not the repeatable annotation. The following program shows
this approach. It converts the version of MyAnno shown previously into a repeatable
annotation and demonstrates its use.
// Demonstrate a repeated annotation.

import java.lang.annotation.*;
import java.lang.reflect.*;

// Make MyAnno repeatable.
@Retention(RetentionPolicy.RUNTIME)
@Repeatable(MyRepeatedAnnos.class)
@interface MyAnno {
String str() default "Testing";
int val() default 9000;
}

// This is the container annotation.
@Retention(RetentionPolicy.RUNTIME)
@interface MyRepeatedAnnos {
MyAnno[] value();
}

class RepeatAnno {

// Repeat MyAnno on myMeth().
@MyAnno(str = "First annotation", val = -1)
@MyAnno(str = "Second annotation", val = 100)
public static void myMeth(String str, int i)

{
RepeatAnno ob = new RepeatAnno();

try {
Class<?> c = ob.getClass();

// Obtain the annotations for myMeth().
Method m = c.getMethod("myMeth", String.class, int.class);

// Display the repeated MyAnno annotations.
Annotation anno = m.getAnnotation(MyRepeatedAnnos.class);
System.out.println(anno);

} catch (NoSuchMethodException exc) {
System.out.println("Method Not Found.");
}
}

public static void main(String args[]) {
myMeth("test", 10);
}
}
The output is shown here:
@MyRepeatedAnnos(value=[@MyAnno(str=First annotation, val=-1),
@MyAnno(str=Second annotation, val=100)])
As explained, in order for MyAnno to be repeatable, it must be annotated with the
@Repeatable annotation, which specifies its container annotation. The container annotation
is called MyRepeatedAnnos. The program accesses the repeated annotations by calling
getAnnotation( ), passing in the class of the container annotation, not the repeatable
annotation, itself. As the output shows, the repeated annotations are separated by a comma.
They are not returned individually.
Another way to obtain the repeated annotations is to use one of the new methods
added to AnnotatedElement by JDK 8, which can operate directly on a repeated annotation.
These are getAnnotationsByType( ) and getDeclaredAnnotation

---

## Module 5 Textbook: Collections and Generics

### Textbook Excerpt — Reference: T1_Java_The_Complete_Reference_Herbert_Schildt.txt

. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 490

SecurityManager . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 490

StackTraceElement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 491

Enum . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 492

ClassValue . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 493

The CharSequence Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 493

The Comparable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 493

The Appendable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 494

The Iterable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 494

The Readable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 495

The AutoCloseable Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 495

The Thread.UncaughtExceptionHandler Interface . . . . . . . . . . . . . . . 495

The java.lang Subpackages . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 495

java.lang.annotation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.instrument . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.invoke . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.management . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.ref . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496

java.lang.reflect . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 496


Contents    xvii
Chapter 18	 java.util Part 1: The Collections Framework . . . . . . . . . . . . . . . . . . . . . 497

Collections Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 498

JDK 5 Changed the Collections Framework . . . . . . . . . . . . . . . . . . . . . . 500

Generics Fundamentally Changed the Collections Framework . . 500

Autoboxing Facilitates the Use of Primitive Types . . . . . . . . . . . . . 500

The For-Each Style for Loop . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 500

The Collection Interfaces . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 501

The Collection Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 501

The List Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 504

The Set Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 504

The SortedSet Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 506

The NavigableSet In

### Textbook Excerpt — Reference: T1_Java_The_Complete_Reference_Herbert_Schildt.txt

this declaration, @MaxLen annotates the type of the first level and @NotZeroLen
annotates the type of the second level. In this declaration
@TypeAnno Integer[] vec;
the element type Integer is annotated.
Repeating Annotations
Another new JDK 8 annotation feature enables an annotation to be repeated on the same
element. This is called repeating annotations. For an annotation to be repeatable, it must be
annotated with the @Repeatable annotation, defined in java.lang.annotation. Its value field
specifies the container type for the repeatable annotation. The container is specified as an
annotation for which the value field is an array of the repeatable annotation type. Thus, to
create a repeatable annotation, you must create a container annotation and then specify
that annotation type as an argument to the @Repeatable annotation.
To access the repeated annotations using a method such as getAnnotation( ), you will
use the container annotation, not the repeatable annotation. The following program shows
this approach. It converts the version of MyAnno shown previously into a repeatable
annotation and demonstrates its use.
// Demonstrate a repeated annotation.

import java.lang.annotation.*;
import java.lang.reflect.*;

// Make MyAnno repeatable.
@Retention(RetentionPolicy.RUNTIME)
@Repeatable(MyRepeatedAnnos.class)
@interface MyAnno {
String str() default "Testing";
int val() default 9000;
}

// This is the container annotation.
@Retention(RetentionPolicy.RUNTIME)
@interface MyRepeatedAnnos {
MyAnno[] value();
}

class RepeatAnno {

// Repeat MyAnno on myMeth().
@MyAnno(str = "First annotation", val = -1)
@MyAnno(str = "Second annotation", val = 100)
public static void myMeth(String str, int i)

{
RepeatAnno ob = new RepeatAnno();

try {
Class<?> c = ob.getClass();

// Obtain the annotations for myMeth().
Method m = c.getMethod("myMeth", String.class, int.class);

// Display the repeated MyAnno annotations.
Annotation anno = m.getAnnotation(MyRepeatedAnnos.class);
System.out.println(anno);

} catch (NoSuchMethodException exc) {
System.out.println("Method Not Found.");
}
}

public static void main(String args[]) {
myMeth("test", 10);
}
}
The output is shown here:
@MyRepeatedAnnos(value=[@MyAnno(str=First annotation, val=-1),
@MyAnno(str=Second annotation, val=100)])
As explained, in order for MyAnno to be repeatable, it must be annotated with the
@Repeatable annotation, which specifies its container annotation. The container annotation
is called MyRepeatedAnnos. The program accesses the repeated annotations by calling
getAnnotation( ), passing in the class of the container annotation, not the repeatable
annotation, itself. As the output shows, the repeated annotations are separated by a comma.
They are not returned individually.
Another way to obtain the repeated annotations is to use one of the new methods
added to AnnotatedElement by JDK 8, which can operate directly on a repeated annotation.
These are getAnnotationsByType( ) and getDeclaredAnnotation

---
