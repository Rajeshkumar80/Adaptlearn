<!-- PROVENANCE: subject_code=BCS306A | subject_name=Object Oriented Programming with Java | semester=3 | module=2 | source_type=MODULE_NOTES | source_file=module2.md | extraction_method=STRUCTURED_MARKDOWN_DIRECT | confidence=0.98 -->

# BCS306A — Module 2

## Inheritance and Interfaces

**Subject:** BCS306A (Object Oriented Programming with Java)
**Module:** Module 2
**Content type:** textbook_fallback
**Sources:** R1_Effective_Java_Joshua_Bloch.txt

---

of the correct type:
@Override public boolean equals(Object o) {
if (!(o instanceof MyType))
return false;
MyType mt = (MyType) o;
...
}
If this type check were missing and the equals method were passed an argument
of the wrong type, the equals method would throw a ClassCastException,
which violates the equals contract. But the instanceof operator is specified to
return false if its first operand is null, regardless of what type appears in the sec-
ond operand [JLS, 15.20.2]. Therefore the type check will return false if null is
passed in, so you don’t need a separate null check. 
Putting it all together, here’s a recipe for a high-quality equals method:
1. Use the == operator to check if the argument is a reference to this object.
If so, return true. This is just a performance optimization, but one that is worth
doing if the comparison is potentially expensive.
2. Use the instanceof operator to check if the argument has the correct type.
If not, return false. Typically, the correct type is the class in which the method
occurs. Occasionally, it is some interface implemented by this class. Use an in-
terface if the class implements an interface that refines the equals contract to
permit comparisons across classes that implement the interface. Collection in-
terfaces such as Set, List, Map, and Map.Entry have this property.
3. Cast the argument to the correct type. Because this cast was preceded by an
instanceof test, it is guaranteed to succeed.

ITEM 8: OBEY THE GENERAL CONTRACT WHEN OVERRIDING EQUALS
4. For each “significant” field in the class, check if that field of the argument
matches the corresponding field of this object. If all these tests succeed, re-
turn true; otherwise, return false. If the type in step 2 is an interface, you
must access the argument’s fields via interface methods; if the type is a class,
you may be able to access the fields directly, depending on their accessibility. 
For primitive fields whose type is not float or double, use the == operator for
comparisons; for object reference fields, invoke the equals method recursive-
ly; for float fields, use the Float.compare method; and for double fields, use
Double.compare. The special treatment of float and double fields is made
necessary by the existence of Float.NaN, -0.0f and the analogous double
constants; see the Float.equals documentation for details. For array fields,
apply these guidelines to each element. If every element in an array field is sig-
nificant, you can use one of the Arrays.equals methods added in release 1.5.
Some object reference fields may legitimately contain null. To avoid the pos-
sibility of a NullPointerException, use this idiom to compare such fields:
(field == null ? o.field == null : field.equals(o.field))
This alternative may be faster if field and o.field are often identical:
(field == o.field || (field != null && field.equals(o.field)))
For some classes, such as CaseInsensitiveString above, field comparisons
are more complex than simple equality tests. If this is the case, you may want
to store a canonical form of the field, so the equals method can do cheap exact
comparisons on these canonical forms rather than more costly inexact compar-
isons. This technique is most appropriate for immutable classes (Item 15); if
the object can change, you must keep the canonical form up to date.
The performance of the equals method may be affected by the order in which
fields are compared. For best performance, you should first compare fields that
are more likely to differ, less expensive to compare, or, ideally, both. You must
not compare fields that are not part of an object’s logical state, such as Lock
fields used to synchronize operations. You need not compare redundant fields,
which can be calculated from “significant fields,” but doing so may improve
the performance of the equals method. If a redundant field amounts to a sum-
mary description of the entire object, comparing this field will save you the ex-
pense of comparing the actual data if the comparison fails. For example,
suppose you have a Polygon class, and you cache the area. If two polygons
have unequal areas, you needn’t bother comparing their edges and vertices.

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
5. When you are finished writing your equals method, ask yourself three
questions: Is it symmetric? Is it transitive? Is it consistent? And don’t just
ask yourself; write unit tests to check that these properties hold! If they don’t,
figure out why not, and modify the equals method accordingly. Of course
your equals method also has to satisfy the other two properties (reflexivity and
“non-nullity”), but these two usually take care of themselves.
For a concrete example of an equals method constructed according to the
above recipe, see PhoneNumber.equals in Item 9. Here are a few final caveats:
• Always override hashCode when you override equals (Item 9).
• Don’t try to be too clever. If you simply test fields for equality, it’s not hard
to adhere to the equals contract. If you are overly aggressive in searching for
equivalence, it’s easy to get into trouble. It is generally a bad idea to take any
form of aliasing into account. For example, the File class shouldn’t attempt to
equate symbolic links referring to the same file. Thankfully, it doesn’t.
• Don’t substitute another type for Object in the equals declaration. It is not
uncommon for a programmer to write an equals method that looks like this,
and then spend hours puzzling over why it doesn’t work properly:
public boolean equals(MyClass o) {
...
}
The problem is that this method does not override Object.equals, whose ar-
gument is of type Object, but overloads it instead (Item 41). It is acceptable to
provide such a “strongly typed” equals method in addition to the normal one
as long as the two methods return the same result, but there is no compelling
reason to do so. It may provide minor performance gains under certain circum-
stances, but it isn’t worth the added complexity (Item 55). 
Consistent use of the @Override annotation, as illustrated throughout this item,
will prevent you from making this mistake (Item 36). This equals method
won’t compile and the error message will tell you exactly what is wrong:
@Override public boolean equals(MyClass o) {
...
}

ITEM 9: ALWAYS OVERRIDE HASHCODE WHEN YOU OVERRIDE EQUALS
Item 9:
Always override hashCode when you override equals
A common source of bugs is the failure to override the hashCode method. You
must override hashCode in every class that overrides equals. Failure to do so
will result in a violation of the general contract for Object.hashCode, which will
prevent your class from functioning properly in conjunction with all hash-based
collections, including HashMap, HashSet, and Hashtable.
Here is the contract, copied from the Object specification [JavaSE6]:
• Whenever it is invoked on the same object more than once during an execu-
tion of an application, the hashCode method must consistently return the
same integer, provided no information used in equals comparisons on the
object is modified. This integer need not remain consistent from one execu-
tion of an application to another execution of the same application.
• If two objects are equal according to the equals(Object) method, then call-
ing the hashCode method on each of the two objects must produce the same
integer result. 
• It is not required that if two objects are unequal according to the equals(Ob-
ject) method, then calling the hashCode method on each of the two objects
must produce distinct integer results. However, the programmer should be
aware that producing distinct integer results for unequal objects may improve
the performance of hash tables.
The key provision that is violated when you fail to override hashCode is
the second one: equal objects must have equal hash codes. Two distinct
instances may be logically equal according to a class’s equals method, but to
Object’s hashCode method, they’re just two objects with nothing much in com-
mon. Therefore Object’s hashCode method returns two seemingly random num-
bers instead of two equal numbers as required by the contract.
For example, consider the following simplistic PhoneNumber class, whose
equals method is constructed according to the recipe in Item 8:
public final class PhoneNumber {
private final short areaCode;
private final short prefix;
private final short lineNumber;
public PhoneNumber(int areaCode, int prefix,
int lineNumber) {
rangeCheck(areaCode,
999, "area code");
rangeCheck(prefix,
999, "prefix");
rangeCheck(lineNumber, 9999, "line number");

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
this.areaCode  = (short) areaCode;
this.prefix  = (short) prefix;
this.lineNumber = (short) lineNumber;
}
private static void rangeCheck(int arg, int max,
String name) {
if (arg < 0 || arg > max)
throw new IllegalArgumentException(name +": " + arg);
}
@Override public boolean equals(Object o) {
if (o == this)
return true;
if (!(o instanceof PhoneNumber))
return false;
PhoneNumber pn = (PhoneNumber)o;
return pn.lineNumber == lineNumber
&& pn.prefix  == prefix
&& pn.areaCode  == areaCode;
}
// Broken - no hashCode method!
... // Remainder omitted
}
Suppose you attempt to use this class with a HashMap:
Map<PhoneNumber, String> m
= new HashMap<PhoneNumber, String>();
m.put(new PhoneNumber(707, 867, 5309), "Jenny");
At this point, you might expect m.get(new PhoneNumber(707, 867, 5309)) to
return "Jenny", but it returns null. Notice that two PhoneNumber instances are
involved: one is used for insertion into the HashMap, and a second, equal, instance
is used for (attempted) retrieval. The PhoneNumber class’s failure to override
hashCode causes the two equal instances to have unequal hash codes, in violation
of the hashCode contract. Therefore the get method is likely to look for the phone
number in a different hash bucket from the one in which it was stored by the put
method. Even if the two instances happen to hash to the same bucket, the get
method will almost certainly return null, as HashMap has an optimization that
caches the hash code associated with each entry and doesn’t bother checking for
object equality if the hash codes don’t match.

ITEM 9: ALWAYS OVERRIDE HASHCODE WHEN YOU OVERRIDE EQUALS
Fixing this problem is as simple as providing a proper hashCode method for
the PhoneNumber class. So what should a hashCode method look like? It’s trivial
to write one that is legal but not good. This one, for example, is always legal but
should never be used:
// The worst possible legal hash function - never use!
@Override public int hashCode() { return 42; }
It’s legal because it ensures that equal objects have the same hash code. It’s
atrocious because it ensures that every object has the same hash code. Therefore,
every object hashes to the same bucket, and hash tables degenerate to linked lists.
Programs that should run in linear time instead run in quadratic time. For large
hash tables, this is the difference between working and not working.
A good hash function tends to produce unequal hash codes for unequal
objects. This is exactly what is meant by the third provision of the hashCode con-
tract. Ideally, a hash function should distribute any reasonable collection of
unequal instances uniformly across all possible hash values. Achieving this ideal
can be difficult. Luckily it’s not too difficult to achieve a fair approximation. Here
is a simple recipe:
1. Store some constant nonzero value, say, 17, in an int variable called result.
2. For each significant field f in your object (each field taken into account by the
equals method, that is), do the following:
a. Compute an int hash code c for the field:
i.
If the field is a boolean, compute (f ? 1 : 0).
ii.
If the field is a byte, char, short, or int, compute (int) f.
iii. If the field is a long, compute (int) (f ^ (f >>> 32)).
iv. If the field is a float, compute Float.floatToIntBits(f).
v.
If the field is a double, compute Double.doubleToLongBits(f), and
then hash the resulting long as in step 2.a.iii.
vi. If the field is an object reference and this class’s equals method
compares the field by recursively invoking equals, recursively
invoke hashCode on the field. If a more complex comparison is
required, compute a “canonical representation” for this field and
invoke hashCode on the canonical representation. If the value of the
field is null, return 0 (or some other constant, but 0 is traditional).

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
vii. If the field is an array, treat it as if each element were a separate field.
That is, compute a hash code for each significant element by applying
these rules recursively, and combine these values per step 2.b. If every
element in an array field is significant, you can use one of the
Arrays.hashCode methods added in release 1.5.
b. Combine the hash code c computed in step 2.a into result as follows:
  result = 31 * result + c;
3. Return result.
4. When you are finished writing the hashCode method, ask yourself whether
equal instances have equal hash codes. Write unit tests to verify your intuition!
If equal instances have unequal hash codes, figure out why and fix the problem.
You may exclude redundant fields from the hash code computation. In other
words, you may ignore any field whose value can be computed from fields included
in the computation. You must exclude any fields that are not used in equals com-
parisons, or you risk violating the second provision of the hashCode contract.
A nonzero initial value is used in step 1 so the hash value will be affected by
initial fields whose hash value, as computed in step 2.a, is zero. If zero were used
as the initial value in step 1, the overall hash value would be unaffected by any
such initial fields, which could increase collisions. The value 17 is arbitrary.
The multiplication in step 2.b makes the result depend on the order of the
fields, yielding a much better hash function if the class has multiple similar fields.
For example, if the multiplication were omitted from a String hash function, all
anagrams would have identical hash codes. The value 31 was chosen because it is
an odd prime. If it were even and the multiplication overflowed, information
would be lost, as multiplication by 2 is equivalent to shifting. The advantage of
using a prime is less clear, but it is traditional. A nice property of 31 is that the
multiplication can be replaced by a shift and a subtraction for better performance:
31 * i == (i << 5) - i. Modern VMs do this sort of optimization automatically.
Let’s apply the above recipe to the PhoneNumber class. There are three signif-
icant fields, all of type short:
@Override public int hashCode() {
int result = 17;
result = 31 * result + areaCode;
result = 31 * result + prefix;
result = 31 * result + lineNumber;
return result;
}

ITEM 9: ALWAYS OVERRIDE HASHCODE WHEN YOU OVERRIDE EQUALS
Because this method returns the result of a simple deterministic computation
whose only inputs are the three significant fields in a PhoneNumber instance, it is
clear that equal PhoneNumber instances have equal hash codes. This method is, in
fact, a perfectly good hashCode implementation for PhoneNumber, on a par with
those in the Java platform libraries. It is simple, reasonably fast, and does a rea-
sonable job of dispersing unequal phone numbers into different hash buckets.
If a class is immutable and the cost of computing the hash code is significant,
you might consider caching the hash code in the object rather than recalculating it
each time it is requested. If you believe that most objects of this type will be used
as hash keys, then you should calculate the hash code when the instance is created.
Otherwise, you might choose to lazily initialize it the first time hashCode is
invoked (Item 71). It is not clear that our PhoneNumber class merits this treatment,
but just to show you how it’s done:
// Lazily initialized, cached hashCode
private volatile int hashCode;
// (See Item 71)
@Override public int hashCode() {
int result = hashCode;
if (result == 0) {
result = 17;
result = 31 * result + areaCode;
result = 31 * result + prefix;
result = 31 * result + lineNumber;
hashCode = result;
}
return result;
}
While the recipe in this item yields reasonably good hash functions, it does
not yield state-of-the-art hash functions, nor do the Java platform libraries provide
such hash functions as of release 1.6. Writing such hash functions is a research
topic, best left to mathematicians and theoretical computer scientists. Perhaps a
later release of the platform will provide state-of-the-art hash functions for its
classes and utility methods to allow average programmers to construct such hash
functions. In the meantime, the techniques described in this item should be ade-
quate for most applications.
Do not be tempted to exclude significant parts of an object from the hash
code computation to improve performance. While the resulting hash function
may run faster, its poor quality may degrade hash tables’ performance to the point
where they become unusably slow. In particular, the hash function may, in prac-

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
tice, be confronted with a large collection of instances that differ largely in the
regions that you’ve chosen to ignore. If this happens, the hash function will map
all the instances to a very few hash codes, and hash-based collections will display
quadratic performance. This is not just a theoretical problem. The String hash
function implemented in all releases prior to 1.2 examined at most sixteen charac-
ters, evenly spaced throughout the string, starting with the first character. For large
collections of hierarchical names, such as URLs, this hash function displayed
exactly the pathological behavior noted here. 
Many classes in the Java platform libraries, such as String, Integer, and
Date, include in their specifications the exact value returned by their hashCode
method as a function of the instance value. This is generally not a good idea, as it
severely limits your ability to improve the hash function in future releases. If you
leave the details of a hash function unspecified and a flaw is found or a better hash
function discovered, you can change the hash function in a subsequent release,
confident that no clients depend on the exact values returned by the hash function.

ITEM 10: ALWAYS OVERRIDE TOSTRING
Item 10: Always override toString
While java.lang.Object provides an implementation of the toString method,
the string that it returns is generally not what the user of your class wants to see. It
consists of the class name followed by an “at” sign (@) and the unsigned hexadeci-
mal representation of the hash code, for example, “PhoneNumber@163b91.” The
general contract for toString says that the returned string should be “a concise
but informative representation that is easy for a person to read” [JavaSE6]. While
it could be argued that “PhoneNumber@163b91” is concise and easy to read, it isn’t
very informative when compared to “(707) 867-5309.” The toString contract
goes on to say, “It is recommended that all subclasses override this method.” Good
advice, indeed!
While it isn’t as important as obeying the equals and hashCode contracts
(Item 8, Item 9), providing a good toString implementation makes your class
much more pleasant to use. The toString method is automatically invoked
when an object is passed to println, printf, the string concatenation operator, or
assert, or printed by a debugger. (The printf method was added to the platform
in release 1.5, as were related methods including String.format, which is
roughly equivalent to C’s sprintf.)
If you’ve provided a good toString method for PhoneNumber, generating a
useful diagnostic message is as easy as this:
System.out.println("Failed to connect: " + phoneNumber);
Programmers will generate diagnostic messages in this fashion whether or not
you override toString, but the messages won’t be useful unless you do. The ben-
efits of providing a good toString method extend beyond instances of the class to
objects containing references to these instances, especially collections. Which
would you rather see when printing a map, “{Jenny=PhoneNumber@163b91}” or
“{Jenny=(707) 867-5309}”?
When practical, the toString method should return all of the interesting
information contained in the object, as in the phone number example just
shown. It is impractical if the object is large or if it contains state that is not condu-
cive to string representation. Under these circumstances, toString should return a
summary such as “Manhattan
white
pages
(1487536
listings)” or
“Thread[main,5,main]”. Ideally, the string should be self-explanatory. (The
Thread example flunks this test.)

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
One important decision you’ll have to make when implementing a toString
method is whether to specify the format of the return value in the documentation.
It is recommended that you do this for value classes, such as phone numbers or
matrices. The advantage of specifying the format is that it serves as a standard,
unambiguous, human-readable representation of the object. This representation
can be used for input and output and in persistent human-readable data objects,
such as XML documents. If you specify the format, it’s usually a good idea to pro-
vide a matching static factory or constructor so programmers can easily translate
back and forth between the object and its string representation. This approach is
taken by many value classes in the Java platform libraries, including BigInteger,
BigDecimal, and most of the boxed primitive classes.
The disadvantage of specifying the format of the toString return value is that
once you’ve specified it, you’re stuck with it for life, assuming your class is
widely used. Programmers will write code to parse the representation, to generate
it, and to embed it into persistent data. If you change the representation in a future
release, you’ll break their code and data, and they will yowl. By failing to specify
a format, you preserve the flexibility to add information or improve the format in
a subsequent release.
Whether or not you decide to specify the format, you should clearly docu-
ment your intentions. If you specify the format, you should do so precisely. For
example, here’s a toString method to go with the PhoneNumber class in Item 9:
/**
 * Returns the string representation of this phone number.
 * The string consists of fourteen characters whose format
 * is "(XXX) YYY-ZZZZ", where XXX is the area code, YYY is
 * the prefix, and ZZZZ is the line number.  (Each of the
 * capital letters represents a single decimal digit.)
 *
 * If any of the three parts of this phone number is too small
 * to fill up its field, the field is padded with leading zeros.
 * For example, if the value of the line number is 123, the last
 * four characters of the string representation will be "0123".
 *
 * Note that there is a single space separating the closing
 * parenthesis after the area code from the first digit of the
 * prefix.
 */
@Override public String toString() {
return String.format("(%03d) %03d-%04d",
areaCode, prefix, lineNumber);
}

ITEM 10: ALWAYS OVERRIDE TOSTRING
If you decide not to specify a format, the documentation comment should read
something like this:
/**
* Returns a brief description of this potion. The exact details
* of the representation are unspecified and subject to change,
* but the following may be regarded as typical:
*
* "[Potion #9: type=love, smell=turpentine, look=india ink]"
*/
@Override public String toString() { ... }
After reading this comment, programmers who produce code or persistent
data that depends on the details of the format will have no one but themselves to
blame when the format is changed.
Whether or not you specify the format, provide programmatic access to all
of the information contained in the value returned by toString. For example,
the PhoneNumber class should contain accessors for the area code, prefix, and line
number. If you fail to do this, you force programmers who need this information
to parse the string. Besides reducing performance and making unnecessary work
for programmers, this process is error-prone and results in fragile systems that
break if you change the format. By failing to provide accessors, you turn the string
format into a de facto API, even if you’ve specified that it’s subject to change.

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
Item 11: Override clone judiciously
The Cloneable interface was intended as a mixin interface (Item 18) for objects to
advertise that they permit cloning. Unfortunately, it fails to serve this purpose. Its
primary flaw is that it lacks a clone method, and Object’s clone method is pro-
tected. You cannot, without resorting to reflection (Item 53), invoke the clone
method on an object merely because it implements Cloneable. Even a reflective
invocation may fail, as there is no guarantee that the object has an accessible
clone method. Despite this flaw and others, the facility is in wide use so it pays to
understand it. This item tells you how to implement a well-behaved clone
method, discusses when it is appropriate to do so, and presents alternatives.
So what does Cloneable do, given that it contains no methods? It determines
the behavior of Object’s protected clone implementation: if a class implements
Cloneable, Object’s clone method returns a field-by-field copy of the object;
otherwise it throws CloneNotSupportedException. This is a highly atypical use
of interfaces and not one to be emulated. Normally, implementing an interface
says something about what a class can do for its clients. In the case of Cloneable,
it modifies the behavior of a protected method on a superclass.
If implementing the Cloneable interface is to have any effect on a class, the
class and all of its superclasses must obey a fairly complex, unenforceable, and
thinly documented protocol. The resulting mechanism is extralinguistic: it creates
an object without calling a constructor.
The general contract for the clone method is weak. Here it is, copied from the
specification for java.lang.Object [JavaSE6]:
Creates and returns a copy of this object. The precise meaning of “copy” may
depend on the class of the object. The general intent is that, for any object x,
the expression
x.clone() != x
will be true, and the expression
x.clone().getClass() == x.getClass()
will be true, but these are not absolute requirements. While it is typically the
case that
x.clone().equals(x)
will be true, this is not an absolute requirement. Copying an object will typi-
cally entail creating a new instance of its class, but it may require copying of
internal data structures as well. No constructors are called.

ITEM 11: OVERRIDE CLONE JUDICIOUSLY
There are a number of problems with this contract. The provision that “no
constructors are called” is too strong. A well-behaved clone method can call con-
structors to create objects internal to the clone under construction. If the class is
final, clone can even return an object created by a constructor.
The provision that x.clone().getClass() should generally be identical to
x.getClass(), however, is too weak. In practice, programmers assume that if
they extend a class and invoke super.clone from the subclass, the returned object
will be an instance of the subclass. The only way a superclass can provide this
functionality is to return an object obtained by calling super.clone. If a clone
method returns an object created by a constructor, it will have the wrong class.
Therefore, if you override the clone method in a nonfinal class, you should
return an object obtained by invoking super.clone. If all of a class’s super-
classes obey this rule, then invoking super.clone will eventually invoke
Object’s clone method, creating an instance of the right class. This mechanism is
vaguely similar to automatic constructor chaining, except that it isn’t enforced.
The Cloneable interface does not, as of release 1.6, spell out in detail the
responsibilities that a class takes on when it implements this interface. In prac-
tice, a class that implements Cloneable is expected to provide a properly
functioning public clone method. It is not, in general, possible to do so unless
all of the class’s superclasses provide a well-behaved clone implementation,
whether public or protected.
Suppose you want to implement Cloneable in a class whose superclasses pro-
vide well-behaved clone methods. The object you get from super.clone() may
or may not be close to what you’ll eventually return, depending on the nature of
the class. This object will be, from the standpoint of each superclass, a fully func-
tional clone of the original object. The fields declared in your class (if any) will
have values identical to those of the object being cloned. If every field contains a
primitive value or a reference to an immutable object, the returned object may be
exactly what you need, in which case no further processing is necessary. This is
the case, for example, for the PhoneNumber class in Item 9. In this case, all you
need do in addition to declaring that you implement Cloneable is to provide pub-
lic access to Object’s protected clone method:
@Override public PhoneNumber clone() {
try {
return (PhoneNumber) super.clone();
} catch(CloneNotSupportedException e) {
throw new AssertionError();  // Can't happen
}
}

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
Note that the above clone method returns PhoneNumber, not Object. As of
release 1.5, it is legal and desirable to do this, because covariant return types were
introduced in release 1.5 as part of generics. In other words, it is now legal for an
overriding method’s return type to be a subclass of the overridden method’s return
type. This allows the overriding method to provide more information about the
returned object and eliminates the need for casting in the client. Because
Object.clone returns Object, PhoneNumber.clone must cast the result of
super.clone() before returning it, but this is far preferable to requiring every
caller of PhoneNumber.clone to cast the result. The general principle at play here
is never make the client do anything the library can do for the client.
If an object contains fields that refer to mutable objects, using the simple
clone implementation shown above can be disastrous. For example, consider the
Stack class in Item 6:
public class Stack {
private Object[] elements;
private int size = 0;
private static final int DEFAULT_INITIAL_CAPACITY = 16;
public Stack() {
this.elements = new Object[DEFAULT_INITIAL_CAPACITY];
}
public void push(Object e) {
ensureCapacity();
elements[size++] = e;
}
public Object pop() {
if (size == 0)
throw new EmptyStackException();
Object result = elements[--size];
elements[size] = null; // Eliminate obsolete reference
return result;
}
// Ensure space for at least one more element.
private void ensureCapacity() {
if (elements.length == size)
elements = Arrays.copyOf(elements, 2 * size + 1);
}
}
Suppose you want to make this class cloneable. If its clone method merely
returns super.clone(), the resulting Stack instance will have the correct value in

ITEM 11: OVERRIDE CLONE JUDICIOUSLY
its size field, but its elements field will refer to the same array as the original
Stack instance. Modifying the original will destroy the invariants in the clone and
vice versa. You will quickly find that your program produces nonsensical results
or throws a NullPointerException.
This situation could never occur as a result of calling the sole constructor in
the Stack class. In effect, the clone method functions as another constructor;
you must ensure that it does no harm to the original object and that it prop-
erly establishes invariants on the clone. In order for the clone method on Stack
to work properly, it must copy the internals of the stack. The easiest way to do this
is to call clone recursively on the elements array:
@Override public Stack clone() {
try {
Stack result = (Stack) super.clone();
result.elements = elements.clone();
return result;
} catch (CloneNotSupportedException e) {
throw new AssertionError();
}
}
Note that we do not have to cast the result of elements.clone() to Object[].
As of release 1.5, calling clone on an array returns an array whose compile-time
type is the same as that of the array being cloned.
Note also that the above solution would not work if the elements field were
final, because clone would be prohibited from assigning a new value to the field.
This is a fundamental problem: the clone architecture is incompatible with
normal use of final fields referring to mutable objects, except in cases where
the mutable objects may be safely shared between an object and its clone. In order
to make a class cloneable, it may be necessary to remove final modifiers from
some fields.
It is not always sufficient to call clone recursively. For example, suppose you
are writing a clone method for a hash table whose internals consist of an array of
buckets, each of which references the first entry in a linked list of key-value pairs
or is null if the bucket is empty. For performance, the class implements its own
lightweight singly linked list instead of using java.util.LinkedList internally:
public class HashTable implements Cloneable {
private Entry[] buckets = ...;

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
private static class Entry {
final Object key;
Object value;
Entry  next;
Entry(Object key, Object value, Entry next) {
this.key  = key;
this.value = value;
this.next  = next;  
}
}
... // Remainder omitted
}
Suppose you merely clone the bucket array recursively, as we did for Stack:
// Broken - results in shared internal state!
@Override public HashTable clone() {
try {
HashTable result = (HashTable) super.clone();
result.buckets = buckets.clone();
return result;
} catch (CloneNotSupportedException e) {
throw new AssertionError();
}
}
Though the clone has its own bucket array, this array references the same
linked lists as the original, which can easily cause nondeterministic behavior in
both the clone and the original. To fix this problem, you’ll have to copy the linked
list that comprises each bucket individually. Here is one common approach:
public class HashTable implements Cloneable {
private Entry[] buckets = ...;
private static class Entry {
final Object key;
Object value;
Entry  next;
Entry(Object key, Object value, Entry next) {
this.key  = key;
this.value = value;
this.next  = next;  
}

ITEM 11: OVERRIDE CLONE JUDICIOUSLY
// Recursively copy the linked list headed by this Entry
Entry deepCopy() {
return new Entry(key, value,
next == null ? null : next.deepCopy());
}
} 
@Override public HashTable clone() {
try {
HashTable result = (HashTable) super.clone();
result.buckets = new Entry[buckets.length];
for (int i = 0; i < buckets.length; i++)
if (buckets[i] != null)
result.buckets[i] = buckets[i].deepCopy();
return result;
} catch (CloneNotSupportedException e) {
throw new AssertionError();
}
}
... // Remainder omitted
}
The private class HashTable.Entry has been augmented to support a “deep
copy” method. The clone method on HashTable allocates a new buckets array of
the proper size and iterates over the original buckets array, deep-copying each
nonempty bucket. The deep-copy method on Entry invokes itself recursively to
copy the entire linked list headed by the entry. While this technique is cute and
works fine if the buckets aren’t too long, it is not a good way to clone a linked list
because it consumes one stack frame for each element in the list. If the list is long,
this could easily cause a stack overflow. To prevent this from happening, you can
replace the recursion in deepCopy with iteration:
// Iteratively copy the linked list headed by this Entry
Entry deepCopy() {
Entry result = new Entry(key, value, next);
for (Entry p = result; p.next != null; p = p.next)
p.next = new Entry(p.next.key, p.next.value, p.next.next);
return result;
}
A final approach to cloning complex objects is to call super.clone, set all of
the fields in the resulting object to their virgin state, and then call higher-level
methods to regenerate the state of the object. In the case of our HashTable exam-

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
ple, the buckets field would be initialized to a new bucket array, and the
put(key, value) method (not shown) would be invoked for each key-value map-
ping in the hash table being cloned. This approach typically yields a simple, rea-
sonably elegant clone method that generally doesn’t run quite as fast as one that
directly manipulates the innards of the object and its clone.
Like a constructor, a clone method should not invoke any nonfinal methods
on the clone under construction (Item 17). If clone invokes an overridden method,
this method will execute before the subclass in which it is defined has had a
chance to fix its state in the clone, quite possibly leading to corruption in the clone
and the original. Therefore the put(key, value) method discussed in the previ-
ous paragraph should be either final or private. (If it is private, it is presumably the
“helper method” for a nonfinal public method.)
Object’s clone method is declared to throw CloneNotSupportedException,
but overriding clone methods can omit this declaration. Public clone methods
should omit it because methods that don’t throw checked exceptions are easier to
use (Item 59). If a class that is designed for inheritance (Item 17) overrides clone,
the overriding method should mimic the behavior of Object.clone: it should be
declared protected, it should be declared to throw CloneNotSupportedExcep-
tion, and the class should not implement Cloneable. This gives subclasses the
freedom to implement Cloneable or not, just as if they extended Object directly.
One more detail bears noting. If you decide to make a thread-safe class imple-
ment Cloneable, remember that its clone method must be properly synchronized
just like any other method (Item 66). Object’s clone method is not synchronized,
so even if it is otherwise satisfactory, you may have to write a synchronized clone
method that invokes super.clone().
To recap, all classes that implement Cloneable should override clone with a
public method whose return type is the class itself. This method should first call
super.clone and then fix any fields that need to be fixed. Typically, this means
copying any mutable objects that comprise the internal “deep structure” of the
object being cloned, and replacing the clone’s references to these objects with ref-
erences to the copies. While these internal copies can generally be made by call-
ing clone recursively, this is not always the best approach. If the class contains
only primitive fields or references to immutable objects, then it is probably the
case that no fields need to be fixed. There are exceptions to this rule. For example,
a field representing a serial number or other unique ID or a field representing the
object’s creation time will need to be fixed, even if it is primitive or immutable.
Is all this complexity really necessary? Rarely. If you extend a class that
implements Cloneable, you have little choice but to implement a well-behaved

ITEM 11: OVERRIDE CLONE JUDICIOUSLY
clone method. Otherwise, you are better off providing an alternative means of
object copying, or simply not providing the capability. For example, it doesn’t
make sense for immutable classes to support object copying, because copies
would be virtually indistinguishable from the original.
A fine approach to object copying is to provide a copy constructor or copy
factory. A copy constructor is simply a constructor that takes a single argument
whose type is the class containing the constructor, for example,
public Yum(Yum yum);
A copy factory is the static factory analog of a copy constructor:
public static Yum newInstance(Yum yum);
The copy constructor approach and its static factory variant have many
advantages over Cloneable/clone: they don’t rely on a risk-prone extralinguistic
object creation mechanism; they don’t demand unenforceable adherence to thinly
documented conventions; they don’t conflict with the proper use of final fields;
they don’t throw unnecessary checked exceptions; and they don’t require casts.
While it is impossible to put a copy constructor or factory in an interface,
Cloneable fails to function as an interface because it lacks a public clone
method. Therefore you aren’t giving up interface functionality by using a copy
constructor or factory in preference to a clone method.
Furthermore, a copy constructor or factory can take an argument whose type
is an interface implemented by the class. For example, by convention all general-
purpose collection implementations provide a constructor whose argument is of
type Collection or Map. Interface-based copy constructors and factories, more
properly known as conversion constructors and conversion factories, allow the
client to choose the implementation type of the copy rather than forcing the client
to accept the implementation type of the original. Suppose you have a HashSet s,
and you want to copy it as a TreeSet. The clone method can’t offer this function-
ality, but it’s easy with a conversion constructor: new TreeSet(s).
Given all of the problems associated with Cloneable, it’s safe to say that
other interfaces should not extend it, and that classes designed for inheritance
(Item 17) should not implement it. Because of its many shortcomings, some
expert programmers simply choose never to override the clone method and never
to invoke it except, perhaps, to copy arrays. If you design a class for inheritance,
be aware that if you choose not to provide a well-behaved protected clone
method, it will be impossible for subclasses to implement Cloneable.

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
Item 12: Consider implementing Comparable
Unlike the other methods discussed in this chapter, the compareTo method is not
declared in Object. Rather, it is the sole method in the Comparable interface. It is
similar in character to Object’s equals method, except that it permits order com-
parisons in addition to simple equality comparisons, and it is generic. By imple-
menting Comparable, a class indicates that its instances have a natural ordering.
Sorting an array of objects that implement Comparable is as simple as this:
Arrays.sort(a);
It is similarly easy to search, compute extreme values, and maintain automati-
cally sorted collections of Comparable objects. For example, the following pro-
gram, which relies on the fact that String implements Comparable, prints an
alphabetized list of its command-line arguments with duplicates eliminated:
public class WordList {
public static void main(String[] args) {
Set<String> s = new TreeSet<String>();
Collections.addAll(s, args);
System.out.println(s);
}
}
By implementing Comparable, you allow your class to interoperate with all of
the many generic algorithms and collection implementations that depend on this
interface. You gain a tremendous amount of power for a small amount of effort.
Virtually all of the value classes in the Java platform libraries implement Compa-
rable. If you are writing a value class with an obvious natural ordering, such as
alphabetical order, numerical order, or chronological order, you should strongly
consider implementing the interface:
public interface Comparable<T> {
int compareTo(T t);
}
The general contract of the compareTo method is similar to that of equals:
Compares this object with the specified object for order. Returns a negative in-
teger, zero, or a positive integer as this object is less than, equal to, or greater
than the specified object. Throws ClassCastException if the specified ob-
ject’s type prevents it from being compared to this object. 

ITEM 12: CONSIDER IMPLEMENTING COMPARABLE
In the following description, the notation sgn(expression) designates the math-
ematical signum function, which is defined to return -1, 0, or 1, according to
whether the value of expression is negative, zero, or positive.
• The implementor must ensure sgn(x.compareTo(y)) == -sgn(y.compare-
To(x)) for all x and y. (This implies that x.compareTo(y) must throw an ex-
ception if and only if y.compareTo(x) throws an exception.)
• The implementor must also ensure that the relation is transitive: (x.com-
pareTo(y) > 0 && y.compareTo(z) > 0) implies x.compareTo(z) > 0.
• Finally, the implementor must ensure that x.compareTo(y) == 0 implies that
sgn(x.compareTo(z)) == sgn(y.compareTo(z)), for all z.
• It is strongly recommended, but not strictly required, that (x.compareTo(y)
== 0) == (x.equals(y)). Generally speaking, any class that implements the
Comparable interface and violates this condition should clearly indicate this
fact. The recommended language is “Note: This class has a natural ordering
that is inconsistent with equals.”
Don’t be put off by the mathematical nature of this contract. Like the equals
contract (Item 8), this contract isn’t as complicated as it looks. Within a class, any
reasonable ordering will satisfy it. Across classes, compareTo, unlike equals,
doesn’t have to work: it is permitted to throw ClassCastException if two object
references being compared refer to objects of different classes. Usually, that is
exactly what compareTo should do, and what it will do if the class is properly
parameterized. While the contract doesn’t preclude interclass comparisons, there
are, as of release 1.6, no classes in the Java platform libraries that support them.
Just as a class that violates the hashCode contract can break other classes that
depend on hashing, a class that violates the compareTo contract can break other
classes that depend on comparison. Classes that depend on comparison include
the sorted collections TreeSet and TreeMap, and the utility classes Collections
and Arrays, which contain searching and sorting algorithms.
Let’s go over the provisions of the compareTo contract. The first provision
says that if you reverse the direction of a comparison between two object refer-
ences, the expected thing happens: if the first object is less than the second, then
the second must be greater than the first; if the first object is equal to the second,
then the second must be equal to the first; and if the first object is greater than the
second, then the second must be less than the first. The second provision says that
if one object is greater than a second, and the second is greater than a third, then
the first must be greater than the third. The final provision says that all objects that
compare as equal must yield the same results when compared to any other object.

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
One consequence of these three provisions is that the equality test imposed by
a compareTo method must obey the same restrictions imposed by the equals con-
tract: reflexivity, symmetry, and transitivity. Therefore the same caveat applies:
there is no way to extend an instantiable class with a new value component while
preserving the compareTo contract, unless you are willing to forgo the benefits of
object-oriented abstraction (Item 8). The same workaround applies, too. If you
want to add a value component to a class that implements Comparable, don’t
extend it; write an unrelated class containing an instance of the first class. Then
provide a “view” method that returns this instance. This frees you to implement
whatever compareTo method you like on the second class, while allowing its cli-
ent to view an instance of the second class as an instance of the first class when
needed.
The final paragraph of the compareTo contract, which is a strong suggestion
rather than a true provision, simply states that the equality test imposed by the
compareTo method should generally return the same results as the equals
method. If this provision is obeyed, the ordering imposed by the compareTo
method is said to be consistent with equals. If it’s violated, the ordering is said to
be inconsistent with equals. A class whose compareTo method imposes an order
that is inconsistent with equals will still work, but sorted collections containing
elements of the class may not obey the general contract of the appropriate collec-
tion interfaces (Collection, Set, or Map). This is because the general contracts
for these interfaces are defined in terms of the equals method, but sorted collec-
tions use the equality test imposed by compareTo in place of equals. It is not a
catastrophe if this happens, but it’s something to be aware of.
For example, consider the BigDecimal class, whose compareTo method is
inconsistent with equals. If you create a HashSet instance and add new
BigDecimal("1.0") and new BigDecimal("1.00"), the set will contain two
elements because the two BigDecimal instances added to the set are unequal
when compared using the equals method. If, however, you perform the same
procedure using a TreeSet instead of a HashSet, the set will contain only one
element because the two BigDecimal instances are equal when compared using
the compareTo method. (See the BigDecimal documentation for details.)
Writing a compareTo method is similar to writing an equals method, but
there are a few key differences. Because the Comparable interface is parameter-
ized, the compareTo method is statically typed, so you don’t need to type check or
cast its argument. If the argument is of the wrong type, the invocation won’t even
compile. If the argument is null, the invocation should throw a NullPointerEx-
ception, and it will, as soon as the method attempts to access its members.

ITEM 12: CONSIDER IMPLEMENTING COMPARABLE
The field comparisons in a compareTo method are order comparisons rather
than equality comparisons. Compare object reference fields by invoking the
compareTo method recursively. If a field does not implement Comparable, or you
need to use a nonstandard ordering, you can use an explicit Comparator instead.
Either write your own, or use a preexisting one as in this compareTo method for
the CaseInsensitiveString class in Item 8.
public final class CaseInsensitiveString
implements Comparable<CaseInsensitiveString> {
public int compareTo(CaseInsensitiveString cis) {
return String.CASE_INSENSITIVE_ORDER.compare(s, cis.s);
}
... // Remainder omitted
}
Note that the 
CaseInsensitiveString class implements 
Compara-
ble<CaseInsensitiveString>. This means that a CaseInsensitiveString ref-
erence can be compared only to other CaseInsensitiveString references. It is
the normal pattern to follow when declaring a class to implement Comparable.
Note also that the parameter of the compareTo method is a CaseInsensitive-
String, not an Object. This is required by the aforementioned class declaration.
Compare integral primitive fields using the relational operators < and >. For
floating-point fields, use Double.compare or Float.compare in place of the
relational operators, which do not obey the general contract for compareTo when
applied to floating point values. For array fields, apply these guidelines to each
element.
If a class has multiple significant fields, the order in which you compare them
is critical. You must start with the most significant field and work your way down.
If a comparison results in anything other than zero (which represents equality),
you’re done; just return the result. If the most significant fields are equal, go on to
compare the next-most-significant fields, and so on. If all fields are equal, the
objects are equal; return zero. The technique is demonstrated by this compareTo
method for the PhoneNumber class in Item 9:
public int compareTo(PhoneNumber pn) {
// Compare area codes
if (areaCode < pn.areaCode)
return -1;
if (areaCode > pn.areaCode)
return  1;

CHAPTER 3
METHODS COMMON TO ALL OBJECTS
// Area codes are equal, compare prefixes
if (prefix < pn.prefix)
return -1;
if (prefix > pn.prefix)
return  1;
// Area codes and prefixes are equal, compare line numbers
if (lineNumber < pn.lineNumber)
return -1;
if (lineNumber > pn.lineNumber)
return  1;
return 0;
// All fields are equal
}
While this method works, it can be improved. Recall that the contract for com-
pareTo does not specify the magnitude of the return value, only the sign. You can
take advantage of this to simplify the code and probably make it run a bit faster:
public int compareTo(PhoneNumber pn) {
// Compare area codes
int areaCodeDiff = areaCode - pn.areaCode;
if (areaCodeDiff != 0)
return areaCodeDiff;
// Area codes are equal, compare prefixes
int prefixDiff = prefix - pn.prefix;
if (prefixDiff != 0)
return prefixDiff;
// Area codes and prefixes are equal, compare line numbers
return lineNumber - pn.lineNumber;
}
This trick works fine here but should be used with extreme caution. Don’t use
it unless you’re certain the fields in question are non-negative or, more generally,
that the difference between the lowest and highest possible field values is less than
or equal to Integer.MAX_VALUE (231-1). The reason this trick doesn’t always work
is that a signed 32-bit integer isn’t big enough to hold the difference between two
arbitrary signed 32-bit integers. If i is a large positive int and j is a large negative
int, (i - j) will overflow and return a negative value. The resulting compareTo
method will return incorrect results for some arguments and violate the first and
second provisions of the compareTo contract. This is not a purely theoretical prob-
lem: it has caused failures in real systems. These failures can be difficult to debug,
as the broken compareTo method works properly for most input values.

C H A P T E R 4
Classes and Interfaces
CLASSES and interfaces lie at the heart of the Java programming language.
They are its basic units of abstraction. The language provides many powerful ele-
ments that you can use to design classes and interfaces. This chapter contains
guidelines to help you make the best use of these elements so that your classes and
interfaces are usable, robust, and flexible.
Item 13: Minimize the accessibility of classes and members
The single most important factor that distinguishes a well-designed module from a
poorly designed one is the degree to which the module hides its internal data and
other implementation details from other modules. A well-designed module hides
all of its implementation details, cleanly separating its API from its implementa-
tion. Modules then communicate only through their APIs and are oblivious to
each others’ inner workings. This concept, known as information hiding or encap-
sulation, is one of the fundamental tenets of software design [Parnas72].
Information hiding is important for many reasons, most of which stem from
the fact that it decouples the modules that comprise a system, allowing them to be
developed, tested, optimized, used, understood, and modified in isolation. This
speeds up system development because modules can be developed in parallel. It
eases the burden of maintenance because modules can be understood more
quickly and debugged with little fear of harming other modules. While informa-
tion hiding does not, in and of itself, cause good performance, it enables effective
performance tuning: once a system is complete and profiling has determined
which modules are causing performance problems (Item 55), those modules can
be optimized without affecting the correctness of other modules. Information hid-
ing increases software reuse because modules that aren’t tightly coupled often
prove useful in other contexts besides the ones for which they were developed.

CHAPTER 4
CLASSES AND INTERFACES
Finally, information hiding decreases the risk in building large systems, because
individual modules may prove successful even if the system does not.
Java has many facilities to aid in information hiding. The access control mecha-
nism [JLS, 6.6] specifies the accessibility of classes, interfaces, and members. The
accessibility of an entity is determined by the location of its declaration and by
which, if any, of the access modifiers (private, protected, and public) is present
on the declaration. Proper use of these modifiers is essential to information hiding.
The rule of thumb is simple: make each class or member as inaccessible as
possible. In other words, use the lowest possible access level consistent with the
proper functioning of the software that you are writing. 
For top-level (non-nested) classes and interfaces, there are only two possible
access levels: package-private and public. If you declare a top-level class or inter-
face with the public modifier, it will be public; otherwise, it will be package-pri-
vate. If a top-level class or interface can be made package-private, it should be. By
making it package-private, you make it part of the implementation rather than the
exported API, and you can modify it, replace it, or eliminate it in a subsequent
release without fear of harming existing clients. If you make it public, you are
obligated to support it forever to maintain compatibility.
If a package-private top-level class (or interface) is used by only one class,
consider making the top-level class a private nested class of the sole class that uses
it (Item 22). This reduces its accessibility from all the classes in its package to the
one class that uses it. But it is far more important to reduce the accessibility of a
gratuitously public class than of a package-private top-level class: the public class
is part of the package’s API, while the package-private top-level class is already
part of its implementation.
For members (fields, methods, nested classes, and nested interfaces), there are
four possible access levels, listed here in order of increasing accessibility:
• private—The member is accessible only from the top-level class where it is
declared.
• package-private—The member is accessible from any class in the package
where it is declared. Technically known as default access, this is the access lev-
el you get if no access modifier is specified.
• protected—The member is accessible from subclasses of the class where it is
declared (subject to a few restrictions [JLS, 6.6.2]) and from any class in the
package where it is declared.
• public—The member is accessible from anywhere.

ITEM 13: MINIMIZE THE ACCESSIBILITY OF CLASSES AND MEMBERS
After carefully designing your class’s public API, your reflex should be to
make all other members private. Only if another class in the same package really
needs to access a member should you remove the private modifier, making the
member package-private. If you find yourself doing this often, you should reex-
amine the design of your system to see if another decomposition might yield
classes that are better decoupled from one another. That said, both private and
package-private members are part of a class’s implementation and do not normally
impact its exported API. These fields can, however, “leak” into the exported API
if the class implements Serializable (Item 74, Item 75).
For members of public classes, a huge increase in accessibility occurs when
the access level goes from package-private to protected. A protected member is
part of the class’s exported API and must be supported forever. Also, a protected
member of an exported class represents a public commitment to an implementa-
tion detail (Item 17). The need for protected members should be relatively rare.
There is one rule that restricts your ability to reduce the accessibility of meth-
ods. If a method overrides a superclass method, it is not permitted to have a lower
access level in the subclass than it does in the superclass [JLS, 8.4.8.3]. This is
necessary to ensure that an instance of the subclass is usable anywhere that an
instance of the superclass is usable. If you violate this rule, the compiler will gen-
erate an error message when you try to compile the subclass. A special case of this
rule is that if a class implements an interface, all of the class methods that are also
present in the interface must be declared public. This is so because all members of
an interface are implicitly public [JLS, 9.1.5].
To facilitate testing, you may be tempted to make a class, interface, or mem-
ber more accessible. This is fine up to a point. It is acceptable to make a private
member of a public class package-private in order to test it, but it is not acceptable
to raise the accessibility any higher than that. In other words, it is not acceptable to
make a class, interface, or member a part of a package’s exported API to facilitate
testing. Luckily, it isn’t necessary either, as tests can be made to run as part of the
package being tested, thus gaining access to its package-private elements.
Instance fields should never be public (Item 14). If an instance field is non-
final, or is a final reference to a mutable object, then by making the field public,
you give up the ability to limit the values that can be stored in the field. This
means you also give up the ability to enforce invariants involving the field. Also,
you give up the ability to take any action when the field is modified, so classes
with public mutable fields are not thread-safe. Even if a field is final and refers
to an immutable object, by making the field public you give up the flexibility to
switch to a new internal data representation in which the field does not exist.

CHAPTER 4
CLASSES AND INTERFACES
The same advice applies to static fields, with the one exception. You can
expose constants via public static final fields, assuming the constants form an inte-
gral part of the abstraction provided by the class. By convention, such fields have
names consisting of capital letters, with words separated by underscores (Item
56). It is critical that these fields contain either primitive values or references to
immutable objects (Item 15). A final field containing a reference to a mutable
object has all the disadvantages of a nonfinal field. While the reference cannot be
modified, the referenced object can be modified—with disastrous results.
Note that a nonzero-length array is always mutable, so it is wrong for a class
to have a public static final array field, or an accessor that returns such a
field. If a class has such a field or accessor, clients will be able to modify the con-
tents of the array. This is a frequent source of security holes:
// Potential security hole!
public static final Thing[] VALUES =  { ... };
Beware of the fact that many IDEs generate accessors that return references to pri-
vate array fields, resulting in exactly this problem. There are two ways to fix the
problem. You can make the public array private and add a public immutable list:
private static final Thing[] PRIVATE_VALUES = { ... };
public static final List<Thing> VALUES =
  Collections.unmodifiableList(Arrays.asList(PRIVATE_VALUES));
Alternatively, you can make the array private and add a public method that
returns a copy of a private array:
private static final Thing[] PRIVATE_VALUES = { ... };
public static final Thing[] values() {
return PRIVATE_VALUES.clone();
}
To choose between these alternatives, think about what the client is likely to do
with the result. Which return type will be more convenient? Which will give bet-
ter performance?
To summarize, you should always reduce accessibility as much as possible.
After carefully designing a minimal public API, you should prevent any stray
classes, interfaces, or members from becoming a part of the API. With the excep-
tion of public static final fields, public classes should have no public fields.
Ensure that objects referenced by public static final fields are immutable.

ITEM 14: IN PUBLIC CLASSES, USE ACCESSOR METHODS, NOT PUBLIC FIELDS
Item 14: In public classes, use accessor methods, not public fields
Occasionally, you may be tempted to write degenerate classes that serve no pur-
pose other than to group instance fields:
// Degenerate classes like this should not be public!
class Point {
public double x;
public double y;
}
Because the data fields of such classes are accessed directly, these classes do
not offer the benefits of encapsulation (Item 13). You can’t change the representa-
tion without changing the API, you can’t enforce invariants, and you can’t take
auxiliary action when a field is accessed. Hard-line object-oriented programmers
feel that such classes are anathema and should always be replaced by classes with
private fields and public accessor methods (getters) and, for mutable classes,
mutators (setters):
// Encapsulation of data by accessor methods and mutators
class Point {
private double x;
private double y;
public Point(double x, double y) {
this.x = x;
this.y = y;
}
public double getX() { return x; }
public double getY() { return y; }
public void setX(double x) { this.x = x; }
public void setY(double y) { this.y = y; }
}
Certainly, the hard-liners are correct when it comes to public classes: if a class
is accessible outside its package, provide accessor methods, to preserve the
flexibility to change the class’s internal representation. If a public class exposes its
data fields, all hope of changing its representation is lost, as client code can be dis-
tributed far and wide.
However, if a class is package-private or is a private nested class, there is
nothing inherently wrong with exposing its data fields—assuming they do an

CHAPTER 4
CLASSES AND INTERFACES
adequate job of describing the abstraction provided by the class. This approach
generates less visual clutter than the accessor-method approach, both in the class
definition and in the client code that uses it. While the client code is tied to the
class’s internal representation, this code is confined to the package containing the
class. If a change in representation becomes desirable, you can make the change
without touching any code outside the package. In the case of a private nested
class, the scope of the change is further restricted to the enclosing class.
Several classes in the Java platform libraries violate the advice that public
classes should not expose fields directly. Prominent examples include the Point
and Dimension classes in the java.awt package. Rather than examples to be emu-
lated, these classes should be regarded as cautionary tales. As described in Item
55, the decision to expose the internals of the Dimension class resulted in a seri-
ous performance problem that is still with us today.
While it’s never a good idea for a public class to expose fields directly, it is
less harmful if the fields are immutable. You can’t change the representation of
such a class without changing its API, and you can’t take auxiliary actions when a
field is read, but you can enforce invariants. For example, this class guarantees
that each instance represents a valid time:
// Public class with exposed immutable fields - questionable
public final class Time {
private static final int HOURS_PER_DAY  = 24;
private static final int MINUTES_PER_HOUR = 60;
public final int hour;
public final int minute;
public Time(int hour, int minute) {
if (hour < 0 || hour >= HOURS_PER_DAY)
throw new IllegalArgumentException("Hour: " + hour);
if (minute < 0 || minute >= MINUTES_PER_HOUR)
throw new IllegalArgumentException("Min: " + minute);
this.hour = hour;
this.minute = minute;
}
... // Remainder omitted
}
In summary, public classes should never expose mutable fields. It is less
harmful, though still questionable, for public classes to expose immutable fields.
It is, however, sometimes desirable for package-private or private nested classes to
expose fields, whether mutable or immutable.

ITEM 15: MINIMIZE MUTABILITY
Item 15: Minimize mutability
An immutable class is simply a class whose instances cannot be modified. All of
the information contained in each instance is provided when it is created and is
fixed for the lifetime of the object. The Java platform libraries contain many
immutable classes, including String, the boxed primitive classes, and BigInte-
ger and BigDecimal. There are many good reasons for this: Immutable classes
are easier to design, implement, and use than mutable classes. They are less prone
to error and are more secure.
To make a class immutable, follow these five rules:
1. Don’t provide any methods that modify the object’s state (known as muta-
tors).
2. Ensure that the class can’t be extended. This prevents careless or malicious
subclasses from compromising the immutable behavior of the class by behav-
ing as if the object’s state has changed. Preventing subclassing is generally ac-
complished by making the class final, but there is an alternative that we’ll
discuss later.
3. Make all fields final. This clearly expresses your intent in a manner that is en-
forced by the system. Also, it is necessary to ensure correct behavior if a refer-
ence to a newly created instance is passed from one thread to another without
synchronization, as spelled out in the memory model [JLS, 17.5; Goetz06 16].
4. Make all fields private. This prevents clients from obtaining access to muta-
ble objects referred to by fields and modifying these objects directly. While it
is technically permissible for immutable classes to have public final fields con-
taining primitive values or references to immutable objects, it is not recom-
mended because it precludes changing the internal representation in a later
release (Item 13).
5. Ensure exclusive access to any mutable components. If your class has any
fields that refer to mutable objects, ensure that clients of the class cannot obtain
references to these objects. Never initialize such a field to a client-provided ob-
ject reference or return the object reference from an accessor. Make defensive
copies (Item 39) in constructors, accessors, and readObject methods (Item
76).

CHAPTER 4
CLASSES AND INTERFACES
Many of the example classes in previous items are immutable. One such class
is PhoneNumber in Item 9, which has accessors for each attribute but no corre-
sponding mutators. Here is a slightly more complex example:
public final class Complex {
private final double re;
private final double im;
public Complex(double re, double im) {
this.re = re;
this.im = im;
}
// Accessors with no corresponding mutators
public double realPart()  { return re; }
public double imaginaryPart() { return im; }
public Complex add(Complex c) {
return new Complex(re + c.re, im + c.im);
}
public Complex subtract(Complex c) {
return new Complex(re - c.re, im - c.im);
}
public Complex multiply(Complex c) {
return new Complex(re * c.re - im * c.im,
re * c.im + im * c.re);
}
public Complex divide(Complex c) {
double tmp = c.re * c.re + c.im * c.im;
return new Complex((re * c.re + im * c.im) / tmp,
(im * c.re - re * c.im) / tmp);
}
@Override public boolean equals(Object o) {
if (o == this)
return true;
if (!(o instanceof Complex))
return false;
Complex c = (Complex) o;
// See page 43 to find out why we use compare instead of ==
return Double.compare(re, c.re) == 0 &&
Double.compare(im, c.im) == 0;
}

ITEM 15: MINIMIZE MUTABILITY
@Override public int hashCode() {
int result = 17 + hashDouble(re);
result = 31 * result + hashDouble(im);
return result;
}
private int hashDouble(double val) {
long longBits = Double.doubleToLongBits(re);
return (int) (longBits ^ (longBits >>> 32));
}
@Override public String toString() {
return "(" + re + " + " + im + "i)";
}
}
This class represents a complex number (a number with both real and imagi-
nary parts). In addition to the standard Object methods, it provides accessors for
the real and imaginary parts and provides the four basic arithmetic operations:
addition, subtraction, multiplication, and division. Notice how the arithmetic
operations create and return a new Complex instance rather than modifying this
instance. This pattern is used in most nontrivial immutable classes. It is known as
the functional approach because methods return the result of applying a function
to their operand without modifying it. Contrast this to the more common proce-
dural or imperative approach in which methods apply a procedure to their oper-
and, causing its state to change.
The functional approach may appear unnatural if you’re not familiar with it,
but it enables immutability, which has many advantages. Immutable objects are
simple. An immutable object can be in exactly one state, the state in which it was
created. If you make sure that all constructors establish class invariants, then it is
guaranteed that these invariants will remain true for all time, with no further effort
on your part or on the part of the programmer who uses the class. Mutable objects,
on the other hand, can have arbitrarily complex state spaces. If the documentation
does not provide a precise description of the state transitions performed by muta-
tor methods, it can be difficult or impossible to use a mutable class reliably.
Immutable objects are inherently thread-safe; they require no synchroni-
zation. They cannot be corrupted by multiple threads accessing them concur-
rently. This is far and away the easiest approach to achieving thread safety. In fact,
no thread can ever observe any effect of another thread on an immutable object.
Therefore, immutable objects can be shared freely. Immutable classes should
take advantage of this by encouraging clients to reuse existing instances wherever

CHAPTER 4
CLASSES AND INTERFACES
possible. One easy way to do this is to provide public static final constants for fre-
quently used values. For example, the Complex class might provide these con-
stants:
public static final Complex ZERO = new Complex(0, 0);
public static final Complex ONE
= new Complex(1, 0);
public static final Complex I
= new Complex(0, 1);
This approach can be taken one step further. An immutable class can provide
static factories (Item 1) that cache frequently requested instances to avoid creating
new instances when existing ones would do. All the boxed primitive classes and
BigInteger do this. Using such static factories causes clients to share instances
instead of creating new ones, reducing memory footprint and garbage collection
costs. Opting for static factories in place of public constructors when designing a
new class gives you the flexibility to add caching later, without modifying clients.
A consequence of the fact that immutable objects can be shared freely is that
you never have to make defensive copies (Item 39). In fact, you never have to
make any copies at all because the copies would be forever equivalent to the orig-
inals. Therefore, you need not and should not provide a clone method or copy
constructor (Item 11) on an immutable class. This was not well understood in the
early days of the Java platform, so the String class does have a copy constructor,
but it should rarely, if ever, be used (Item 5).
Not only can you share immutable objects, but you can share their inter-
nals. For example, the BigInteger class uses a sign-magnitude representation
internally. The sign is represented by an int, and the magnitude is represented by
an int array. The negate method produces a new BigInteger of like magnitude
and opposite sign. It does not need to copy the array; the newly created BigInte-
ger points to the same internal array as the original.
Immutable objects make great building blocks for other objects, whether
mutable or immutable. It’s much easier to maintain the invariants of a complex
object if you know that its component objects will not change underneath it. A
special case of this principle is that immutable objects make great map keys and
set elements: you don’t have to worry about their values changing once they’re in
the map or set, which would destroy the map or set’s invariants.
The only real disadvantage of immutable classes is that they require a
separate object for each distinct value. Creating these objects can be costly,
especially if they are large. For example, suppose that you have a million-bit Big-
Integer and you want to change its low-order bit:

ITEM 15: MINIMIZE MUTABILITY
BigInteger moby = ...;
moby = moby.flipBit(0);
The flipBit method creates a new BigInteger instance, also a million bits long,
that differs from the original in only one bit. The operation requires time and
space proportional to the size of the 
BigInteger. Contrast this to
java.util.BitSet. Like BigInteger, BitSet represents an arbitrarily long
sequence of bits, but unlike BigInteger, BitSet is mutable. The BitSet class
provides a method that allows you to change the state of a single bit of a million-
bit instance in constant time. 
The performance problem is magnified if you perform a multistep operation
that generates a new object at every step, eventually discarding all objects except
the final result. There are two approaches to coping with this problem. The first is
to guess which multistep operations will be commonly required and provide them
as primitives. If a multistep operation is provided as a primitive, the immutable
class does not have to create a separate object at each step. Internally, the immuta-
ble class can be arbitrarily clever. For example, BigInteger has a package-private
mutable “companion class” that it uses to speed up multistep operations such as
modular exponentiation. It is much harder to use the mutable companion class
than to use BigInteger for all of the reasons outlined earlier, but luckily you
don’t have to: the implementors of BigInteger did the hard work for you.
The package-private mutable companion class approach works fine if you can
accurately predict which complex multistage operations clients will want to
perform on your immutable class. If not, then your best bet is to provide a public
mutable companion class. The main example of this approach in the Java platform
libraries is the String class, whose mutable companion is StringBuilder (and
the largely obsolete StringBuffer). Arguably, BitSet plays the role of mutable
companion to BigInteger under certain circumstances.
Now that you know how to make an immutable class and you understand the
pros and cons of immutability, let’s discuss a few design alternatives. Recall that
to guarantee immutability, a class must not permit itself to be subclassed.
Typically this is done by making the class final, but there is another, more flexible
way to do it. The alternative to making an immutable class final is to make all of
its constructors private or package-private, and to add public static factories in
place of the public constructors (Item 1). 

CHAPTER 4
CLASSES AND INTERFACES
To make this concrete, here’s how Complex would look if you took this
approach:
// Immutable class with static factories instead of constructors
public class Complex {
private final double re;
private final double im;
private Complex(double re, double im) {
this.re = re;
this.im = im;
}
public static Complex valueOf(double re, double im) {
return new Complex(re, im);
}
... // Remainder unchanged
}
While this approach is not commonly used, it is often the best alternative. It is
the most flexible because it allows the use of multiple package-private implemen-
tation classes. To its clients that reside outside its package, the immutable class is
effectively final because it is impossible to extend a class that comes from another
package and that lacks a public or protected constructor. Besides allowing the
flexibility of multiple implementation classes, this approach makes it possible to
tune the performance of the class in subsequent releases by improving the object-
caching capabilities of the static factories.
Static factories have many other advantages over constructors, as discussed in
Item 1. For example, suppose that you want to provide a means of creating a com-
plex number based on its polar coordinates. This would be very messy using con-
structors because the natural constructor would have the same signature that we
already used: Complex(double, double). With static factories it’s easy. Just add
a second static factory with a name that clearly identifies its function:
public static Complex valueOfPolar(double r, double theta) {
return new Complex(r * Math.cos(theta),
r * Math.sin(theta));
}
It was not widely understood that immutable classes had to be effectively final
when BigInteger and BigDecimal were written, so all of their methods may be

ITEM 15: MINIMIZE MUTABILITY
overridden. Unfortunately, this could not be corrected after the fact while preserv-
ing backward compatibility. If you write a class whose security depends on the
immutability of a BigInteger or BigDecimal argument from an untrusted client,
you must check to see that the argument is a “real” BigInteger or BigDecimal,
rather than an instance of an untrusted subclass. If it is the latter, you must defen-
sively copy it under the assumption that it might be mutable (Item 39):
public static BigInteger safeInstance(BigInteger val) {
if (val.getClass() != BigInteger.class)
return new BigInteger(val.toByteArray());
return val;
}
The list of rules for immutable classes at the beginning of this item says that
no methods may modify the object and that all its fields must be final. In fact these
rules are a bit stronger than necessary and can be relaxed to improve performance.
In truth, no method may produce an externally visible change in the object’s state.
However, some immutable classes have one or more nonfinal fields in which they
cache the results of expensive computations the first time they are needed. If the
same value is requested again, the cached value is returned, saving the cost of
recalculation. This trick works precisely because the object is immutable, which
guarantees that the computation would yield the same result if it were repeated.
For example, PhoneNumber’s hashCode method (Item 9, page 49) computes
the hash code the first time it’s invoked and caches it in case it’s invoked again.
This technique, an example of lazy initialization (Item 71), is also used by
String.
One caveat should be added concerning serializability. If you choose to have
your immutable class implement Serializable and it contains one or more fields
that refer to mutable objects, you must provide an explicit readObject or
readResolve method, or use the ObjectOutputStream.writeUnshared and
ObjectInputStream.readUnshared methods, even if the default serialized form
is acceptable. Otherwise an attacker could create a mutable instance of your not-
quite-immutable class. This topic is covered in detail in Item 76.
To summarize, resist the urge to write a set method for every get method.
Classes should be immutable unless there’s a very good reason to make them
mutable. Immutable classes provide many advantages, and their only disadvan-
tage is the potential for performance problems under certain circumstances. You
should always make small value objects, such as PhoneNumber and Complex,
immutable. (There are several classes in the Java platform libraries, such as

CHAPTER 4
CLASSES AND INTERFACES
java.util.Date and java.awt.Point, that should have been immutable but
aren’t.) You should seriously consider making larger value objects, such as
String and BigInteger, immutable as well. You should provide a public mutable
companion class for your immutable class only once you’ve confirmed that it’s
necessary to achieve satisfactory performance (Item 55).
There are some classes for which immutability is impractical. If a class can-
not be made immutable, limit its mutability as much as possible. Reducing the
number of states in which an object can exist makes it easier to reason about the
object and reduces the likelihood of errors. Therefore, make every field final
unless there is a compelling reason to make it nonfinal.
Constructors should create fully initialized objects with all of their invariants
established. Don’t provide a public initialization method separate from the con-
structor or static factory unless there is a compelling reason to do so. Similarly,
don’t provide a “reinitialize” method that enables an object to be reused as if it
had been constructed with a different initial state. Such methods generally provide
little if any performance benefit at the expense of increased complexity.
The TimerTask class exemplifies these principles. It is mutable, but its state
space is kept intentionally small. You create an instance, schedule it for execution,
and optionally cancel it. Once a timer task has run to completion or has been can-
celed, you may not reschedule it.
A final note should be added concerning the Complex class in this item. This
example was meant only to illustrate immutability. It is not an industrial-strength
complex number implementation. It uses the standard formulas for complex
multiplication and division, which are not correctly rounded and provide poor
semantics for complex NaNs and infinities [Kahan91, Smith62, Thomas94].

ITEM 16: FAVOR COMPOSITION OVER INHERITANCE
Item 16: Favor composition over inheritance
Inheritance is a powerful way to achieve code reuse, but it is not always the best
tool for the job. Used inappropriately, it leads to fragile software. It is safe to use
inheritance within a package, where the subclass and the superclass implementa-
tions are under the control of the same programmers. It is also safe to use inherit-
ance when extending classes specifically designed and documented for extension
(Item 17). Inheriting from ordinary concrete classes across package boundaries,
however, is dangerous. As a reminder, this book uses the word “inheritance” to
mean implementation inheritance (when one class extends another). The problems
discussed in this item do not apply to interface inheritance (when a class imple-
ments an interface or where one interface extends another).
Unlike method invocation, inheritance violates encapsulation [Snyder86].
In other words, a subclass depends on the implementation details of its superclass
for its proper function. The superclass’s implementation may change from release
to release, and if it does, the subclass may break, even though its code has not
been touched. As a consequence, a subclass must evolve in tandem with its super-
class, unless the superclass’s authors have designed and documented it specifi-
cally for the purpose of being extended.
To make this concrete, let’s suppose we have a program that uses a HashSet.
To tune the performance of our program, we need to query the HashSet as to how
many elements have been added since it was created (not to be confused with its
current size, which goes down when an element is removed). To provide this func-
tionality, we write a HashSet variant that keeps count of the number of attempted
element insertions and exports an accessor for this count. The HashSet class con-
tains two methods capable of adding elements, add and addAll, so we override
both of these methods: 
// Broken - Inappropriate use of inheritance!
public class InstrumentedHashSet<E> extends HashSet<E> {
// The number of attempted element insertions
private int addCount = 0;
public InstrumentedHashSet() {
}
public InstrumentedHashSet(int initCap, float loadFactor) {
super(initCap, loadFactor);
}

CHAPTER 4
CLASSES AND INTERFACES
@Override public boolean add(E e) {
addCount++;
return super.add(e);
}
@Override public boolean addAll(Collection<? extends E> c) {
addCount += c.size();
return super.addAll(c);
}
public int getAddCount() {
return addCount;
}
}
This class looks reasonable, but it doesn’t work. Suppose we create an
instance and add three elements using the addAll method:
InstrumentedHashSet<String> s =
new InstrumentedHashSet<String>();
s.addAll(Arrays.asList("Snap", "Crackle", "Pop"));
We would expect the getAddCount method to return three at this point, but it
returns six. What went wrong? Internally, HashSet’s addAll method is imple-
mented on top of its add method, although HashSet, quite reasonably, does not
document this implementation detail. The addAll method in InstrumentedHash-
Set added three to addCount and then invoked HashSet’s addAll implementation
using super.addAll. This in turn invoked the add method, as overridden in
InstrumentedHashSet, once for each element. Each of these three invocations
added one more to addCount, for a total increase of six: each element added with
the addAll method is double-counted.
We could “fix” the subclass by eliminating its override of the addAll method.
While the resulting class would work, it would depend for its proper function on
the fact that HashSet’s addAll method is implemented on top of its add method.
This “self-use” is an implementation detail, not guaranteed to hold in all imple-
mentations of the Java platform and subject to change from release to release.
Therefore, the resulting InstrumentedHashSet class would be fragile.
It would be slightly better to override the addAll method to iterate over the
specified collection, calling the add method once for each element. This would
guarantee the correct result whether or not HashSet’s addAll method were
implemented atop its add method, because HashSet’s addAll implementation
would no longer be invoked. This technique, however, does not solve all our
problems. It amounts to reimplementing superclass methods that may or may not

ITEM 16: FAVOR COMPOSITION OVER INHERITANCE
result in self-use, which is difficult, time-consuming, and error-prone.
Additionally, it isn’t always possible, as some methods cannot be implemented
without access to private fields inaccessible to the subclass.
A related cause of fragility in subclasses is that their superclass can acquire
new methods in subsequent releases. Suppose a program depends for its security
on the fact that all elements inserted into some collection satisfy some predicate.
This can be guaranteed by subclassing the collection and overriding each method
capable of adding an element to ensure that the predicate is satisfied before adding
the element. This works fine until a new method capable of inserting an element is
added to the superclass in a subsequent release. Once this happens, it becomes
possible to add an “illegal” element merely by invoking the new method, which is
not overridden in the subclass. This is not a purely theoretical problem. Several
security holes of this nature had to be fixed when Hashtable and Vector were ret-
rofitted to participate in the Collections Framework.
Both of the above problems stem from overriding methods. You might think
that it is safe to extend a class if you merely add new methods and refrain from
overriding existing methods. While this sort of extension is much safer, it is not
without risk. If the superclass acquires a new method in a subsequent release and
you have the bad luck to have given the subclass a method with the same signature
and a different return type, your subclass will no longer compile [JLS, 8.4.8.3]. If
you’ve given the subclass a method with the same signature and return type as the
new superclass method, then you’re now overriding it, so you’re subject to the two
problems described above. Furthermore, it is doubtful that your method will fulfill
the contract of the new superclass method, as that contract had not yet been writ-
ten when you wrote the subclass method.
Luckily, there is a way to avoid all of the problems described earlier. Instead
of extending an existing class, give your new class a private field that references
an instance of the existing class. This design is called composition because the
existing class becomes a component of the new one. Each instance method in the
new class invokes the corresponding method on the contained instance of the
existing class and returns the results. This is known as forwarding, and the meth-
ods in the new class are known as forwarding methods. The resulting class will be
rock solid, with no dependencies on the implementation details of the existing
class. Even adding new methods to the existing class will have no impact on the
new class. To make this concrete, here’s a replacement for InstrumentedHashSet
that uses the composition-and-forwarding approach. Note that the implementation
is broken into two pieces, the class itself and a reusable forwarding class, which
contains all of the forwarding methods and nothing else:

CHAPTER 4
CLASSES AND INTERFACES
// Wrapper class - uses composition in place of inheritance
public class InstrumentedSet<E> extends ForwardingSet<E> {
  private int addCount = 0;
  public InstrumentedSet(Set<E> s) {
  super(s);
  }
  @Override public boolean add(E e) {
  addCount++;
  return super.add(e);
  }
  @Override public boolean addAll(Collection<? extends E> c) {
  addCount += c.size();
  return super.addAll(c);
  }
  public int getAddCount() {
  return addCount;
  }
}
// Reusable forwarding class
public class ForwardingSet<E> implements Set<E> {
  private final Set<E> s;
  public ForwardingSet(Set<E> s) { this.s = s; }
  public void clear()  { s.clear();  }
  public boolean contains(Object o) { return s.contains(o); }
  public boolean isEmpty()  { return s.isEmpty();  }
  public int size()  { return s.size();  }
  public Iterator<E> iterator()  { return s.iterator();  }
  public boolean add(E e)  { return s.add(e);  }
  public boolean remove(Object o)  { return s.remove(o);  }
  public boolean containsAll(Collection<?> c)
  { return s.containsAll(c); }
  public boolean addAll(Collection<? extends E> c)
  { return s.addAll(c);  }
  public boolean removeAll(Collection<?> c)
  { return s.removeAll(c);  }
  public boolean retainAll(Collection<?> c)
  { return s.retainAll(c);  }
  public Object[] toArray()  { return s.toArray();  }
  public <T> T[] toArray(T[] a)  { return s.toArray(a); }
  @Override public boolean equals(Object o)
  { return s.equals(o);  }
  @Override public int hashCode()  { return s.hashCode(); }
  @Override public String toString() { return s.toString(); }
}

ITEM 16: FAVOR COMPOSITION OVER INHERITANCE
The design of the InstrumentedSet class is enabled by the existence of the
Set interface, which captures the functionality of the HashSet class. Besides
being robust, this design is extremely flexible. The InstrumentedSet class imple-
ments the Set interface and has a single constructor whose argument is also of
type Set. In essence, the class transforms one Set into another, adding the instru-
mentation functionality. Unlike the inheritance-based approach, which works only
for a single concrete class and requires a separate constructor for each supported
constructor in the superclass, the wrapper class can be used to instrument any Set
implementation and will work in conjunction with any preexisting constructor:
Set<Date> s = new InstrumentedSet<Date>(new TreeSet<Date>(cmp));
Set<E> s2 = new InstrumentedSet<E>(new HashSet<E>(capacity));
The InstrumentedSet class can even be used to temporarily instrument a set
instance that has already been used without instrumentation:
static void walk(Set<Dog> dogs) {
InstrumentedSet<Dog> iDogs = new InstrumentedSet<Dog>(dogs);
... // Within this method use iDogs instead of dogs
}
The InstrumentedSet class is known as a wrapper class because each
InstrumentedSet instance contains (“wraps”) another Set instance. This is also
known as the Decorator pattern [Gamma95, p. 175], because the Instrumented-
Set class “decorates” a set by adding instrumentation. Sometimes the combina-
tion of composition and forwarding is loosely referred to as delegation.
Technically it’s not delegation unless the wrapper object passes itself to the
wrapped object [Lieberman86; Gamma95, p. 20].
The disadvantages of wrapper classes are few. One caveat is that wrapper
classes are not suited for use in callback frameworks, wherein objects pass self-
references to other objects for subsequent invocations (“callbacks”). Because a
wrapped object doesn’t know of its wrapper, it passes a reference to itself (this)
and callbacks elude the wrapper. This is known as the SELF problem
[Lieberman86]. Some people worry about the performance impact of forwarding
method invocations or the memory footprint impact of wrapper objects. Neither
turn out to have much impact in practice. It’s tedious to write forwarding methods,
but you have to write the forwarding class for each interface only once, and for-
warding classes may be provided for you by the package containing the interface.
Inheritance is appropriate only in circumstances where the subclass really is a
subtype of the superclass. In other words, a class B should extend a class A only if

CHAPTER 4
CLASSES AND INTERFACES
an “is-a” relationship exists between the two classes. If you are tempted to have a
class B extend a class A, ask yourself the question: Is every B really an A? If you
cannot truthfully answer yes to this question, B should not extend A. If the answer
is no, it is often the case that B should contain a private instance of A and expose a
smaller and simpler API: A is not an essential part of B, merely a detail of its
implementation.
There are a number of obvious violations of this principle in the Java platform
libraries. For example, a stack is not a vector, so Stack should not extend Vector.
Similarly, a property list is not a hash table, so Properties should not extend
Hashtable. In both cases, composition would have been preferable.
If you use inheritance where composition is appropriate, you needlessly
expose implementation details. The resulting API ties you to the original imple-
mentation, forever limiting the performance of your class. More seriously, by
exposing the internals you let the client access them directly. At the very least, this
can lead to confusing semantics. For example, if p refers to a Properties
instance, then 
p.getProperty(key) may yield different results from
p.get(key): the former method takes defaults into account, while the latter
method, which is inherited from Hashtable, does not. Most seriously, the client
may be able to corrupt invariants of the subclass by modifying the superclass
directly. In the case of Properties, the designers intended that only strings be
allowed as keys and values, but direct access to the underlying Hashtable allows
this invariant to be violated. Once this invariant is violated, it is no longer possible
to use other parts of the Properties API (load and store). By the time this prob-
lem was discovered, it was too late to correct it because clients depended on the
use of nonstring keys and values.
There is one last set of questions you should ask yourself before deciding to
use inheritance in place of composition. Does the class that you contemplate
extending have any flaws in its API? If so, are you comfortable propagating those
flaws into your class’s API? Inheritance propagates any flaws in the superclass’s
API, while composition lets you design a new API that hides these flaws.
To summarize, inheritance is powerful, but it is problematic because it
violates encapsulation. It is appropriate only when a genuine subtype relationship
exists between the subclass and the superclass. Even then, inheritance may lead to
fragility if the subclass is in a different package from the superclass and the
superclass is not designed for inheritance. To avoid this fragility, use composition
and forwarding instead of inheritance, especially if an appropriate interface to
implement a wrapper class exists. Not only are wrapper classes more robust than
subclasses, they are also more powerful.

ITEM 17: DESIGN AND DOCUMENT FOR INHERITANCE OR ELSE PROHIBIT IT
Item 17: Design and document for inheritance or else prohibit it
Item 16 alerted you to the dangers of subclassing a “foreign” class that was not
designed and documented for inheritance. So what does it mean for a class to be
designed and documented for inheritance?
First, the class must document precisely the effects of overriding any method.
In other words, the class must document its self-use of overridable methods.
For each public or protected method or constructor, the documentation must
indicate which overridable methods the method or constructor invokes, in what
sequence, and how the results of each invocation affect subsequent processing.
(By overridable, we mean nonfinal and either public or protected.) More
generally, a class must document any circumstances under which it might invoke
an overridable method. For example, invocations might come from background
threads or static initializers.
By convention, a method that invokes overridable methods contains a descrip-
tion of these invocations at the end of its documentation comment. The descrip-
tion begins with the phrase “This implementation.” This phrase should not be
taken to indicate that the behavior may change from release to release. It connotes
that the description concerns the inner workings of the method. Here’s an exam-
ple, copied from the specification for java.util.AbstractCollection:
public boolean remove(Object o)
Removes a single instance of the specified element from this collection, if it
is present (optional operation). More formally, removes an element e such
that (o==null ? e==null : o.equals(e)), if the collection contains one or
more such elements. Returns true if the collection contained the specified
element (or equivalently, if the collection changed as a result of the call).
This implementation iterates over the collection looking for the specified el-
ement. If it finds the element, it removes the element from the collection us-
ing the iterator’s remove method. Note that this implementation throws an
UnsupportedOperationException if the iterator returned by this collec-
tion’s iterator method does not implement the remove method.
This documentation leaves no doubt that overriding the iterator method will
affect the behavior of the remove method. Furthermore, it describes exactly how
the behavior of the Iterator returned by the iterator method will affect the
behavior of the remove method. Contrast this to the situation in Item 16, where the

CHAPTER 4
CLASSES AND INTERFACES
programmer subclassing HashSet simply could not say whether overriding the
add method would affect the behavior of the addAll method.
But doesn’t this violate the dictum that good API documentation should
describe what a given method does and not how it does it? Yes, it does! This is an
unfortunate consequence of the fact that inheritance violates encapsulation. To
document a class so that it can be safely subclassed, you must describe implemen-
tation details that should otherwise be left unspecified. 
Design for inheritance involves more than just documenting patterns of self-
use. To allow programmers to write efficient subclasses without undue pain, a
class may have to provide hooks into its internal workings in the form of judi-
ciously chosen protected methods or, in rare instances, protected fields. For
example, consider the removeRange method from java.util.AbstractList:
protected void removeRange(int fromIndex, int toIndex)
Removes from this list all of the elements whose index is between
fromIndex, inclusive, and toIndex, exclusive. Shifts any succeeding
elements to the left (reduces their index). This call shortens the ArrayList
by (toIndex - fromIndex) elements. (If toIndex == fromIndex, this
operation has no effect.)
This method is called by the clear operation on this list and its sublists.
Overriding this method to take advantage of the internals of the list imple-
mentation can substantially improve the performance of the clear operation
on this list and its sublists.
This implementation gets a list iterator positioned before fromIndex and re-
peatedly calls ListIterator.next followed by ListIterator.remove, un-
til the entire range has been removed. Note: If ListIterator.remove
requires linear time, this implementation requires quadratic time.
Parameters:
fromIndex
index of first element to be removed.
toIndex
index after last element to be removed.
This method is of no interest to end users of a List implementation. It is
provided solely to make it easy for subclasses to provide a fast clear method on
sublists. In the absence of the removeRange method, subclasses would have to
make do with quadratic performance when the clear method was invoked on
sublists or rewrite the entire subList mechanism from scratch—not an easy task!

ITEM 17: DESIGN AND DOCUMENT FOR INHERITANCE OR ELSE PROHIBIT IT
So how do you decide what protected members to expose when you design a
class for inheritance? Unfortunately, there is no magic bullet. The best you can do
is to think hard, take your best guess, and then test it by writing subclasses. You
should expose as few protected members as possible, because each one represents
a commitment to an implementation detail. On the other hand, you must not
expose too few, as a missing protected member can render a class practically
unusable for inheritance.
The only way to test a class designed for inheritance is to write subclasses.
If you omit a crucial protected member, trying to write a subclass will make the
omission painfully obvious. Conversely, if several subclasses are written and none
uses a protected member, you should probably make it private. Experience shows
that three subclasses are usually sufficient to test an extendable class. One or more
of these subclasses should be written by someone other than the superclass author.
When you design for inheritance a class that is likely to achieve wide use,
realize that you are committing forever to the self-use patterns that you document
and to the implementation decisions implicit in its protected methods and fields.
These commitments can make it difficult or impossible to improve the perfor-
mance or functionality of the class in a subsequent release. Therefore, you must
test your class by writing subclasses before you release it.
Also, note that the special documentation required for inheritance clutters up
normal documentation, which is designed for programmers who create instances
of your class and invoke methods on them. As of this writing, there is little in the
way of tools or commenting conventions to separate ordinary API documentation
from information of interest only to programmers implementing subclasses.
There are a few more restrictions that a class must obey to allow inheritance.
Constructors must not invoke overridable methods, directly or indirectly. If
you violate this rule, program failure will result. The superclass constructor runs
before the subclass constructor, so the overriding method in the subclass will get
invoked before the subclass constructor has run. If the overriding method depends
on any initialization performed by the subclass constructor, the method will not
behave as expected. To make this concrete, here’s a class that violates this rule:
public class Super {
// Broken - constructor invokes an overridable method
public Super() {
overrideMe();
}
public void overrideMe() {
}
}

CHAPTER 4
CLASSES AND INTERFACES
Here’s a subclass that overrides the overrideMe, method which is erroneously
invoked by Super’s sole constructor:
public final class Sub extends Super {
private final Date date; // Blank final, set by constructor
Sub() {
date = new Date();
}
// Overriding method invoked by superclass constructor
@Override public void overrideMe() {
System.out.println(date);
}
public static void main(String[] args) {
Sub sub = new Sub();
sub.overrideMe();
}
}
You might expect this program to print out the date twice, but it prints out null
the first time, because the overrideMe method is invoked by the Super construc-
tor before the Sub constructor has a chance to initialize the date field. Note that
this program observes a final field in two different states! Note also that if over-
rideMe had invoked any method on date, the invocation would have thrown a
NullPointerException when the Super constructor invoked overrideMe. The
only reason this program doesn’t throw a NullPointerException as it stands is
that the println method has special provisions for dealing with a null argument.
The Cloneable and Serializable interfaces present special difficulties
when designing for inheritance. It is generally not a good idea for a class designed
for inheritance to implement either of these interfaces, as they place a substantial
burden on programmers who extend the class. There are, however, special actions
that you can take to allow subclasses to implement these interfaces without man-
dating that they do so. These actions are described in Item 11 and Item 74.
If you do decide to implement Cloneable or Serializable in a class
designed for inheritance, you should be aware that because the clone and
readObject methods behave a lot like constructors, a similar restriction applies:
neither clone nor readObject may invoke an overridable method, directly or
indirectly. In the case of the readObject method, the overriding method will run
before the subclass’s state has been deserialized. In the case of the clone method,
the overriding method will run before the subclass’s clone method has a chance to

ITEM 17: DESIGN AND DOCUMENT FOR INHERITANCE OR ELSE PROHIBIT IT
fix the clone’s state. In either case, a program failure is likely to follow. In the case
of clone, the failure can damage the original object as well as the clone. This can
happen, for example, if the overriding method assumes it is modifying the clone’s
copy of the object’s deep structure, but the copy hasn’t been made yet.
Finally, if you decide to implement Serializable in a class designed for
inheritance and the class has a readResolve or writeReplace method, you must
make the readResolve or writeReplace method protected rather than private. If
these methods are private, they will be silently ignored by subclasses. This is one
more case where an implementation detail becomes part of a class’s API to permit
inheritance.
By now it should be apparent that designing a class for inheritance places
substantial limitations on the class. This is not a decision to be undertaken
lightly. There are some situations where it is clearly the right thing to do, such as
abstract classes, including skeletal implementations of interfaces (Item 18). There
are other situations where it is clearly the wrong thing to do, such as immutable
classes (Item 15).
But what about ordinary concrete classes? Traditionally, they are neither final
nor designed and documented for subclassing, but this state of affairs is danger-
ous. Each time a change is made in such a class, there is a chance that client
classes that extend the class will break. This is not just a theoretical problem. It is
not uncommon to receive subclassing-related bug reports after modifying the
internals of a nonfinal concrete class that was not designed and documented for
inheritance.
The best solution to this problem is to prohibit subclassing in classes that
are not designed and documented to be safely subclassed. There are two ways
to prohibit subclassing. The easier of the two is to declare the class final. The
alternative is to make all the constructors private or package-private and to add
public static factories in place of the constructors. This alternative, which pro-
vides the flexibility to use subclasses internally, is discussed in Item 15. Either
approach is acceptable.
This advice may be somewhat controversial, as many programmers have
grown accustomed to subclassing ordinary concrete classes to add facilities such
as instrumentation, notification, and synchronization or to limit functionality. If a
class implements some interface that captures its essence, such as Set, List, or
Map, then you should feel no compunction about prohibiting subclassing. The
wrapper class pattern, described in Item 16, provides a superior alternative to
inheritance for augmenting the functionality.

CHAPTER 4
CLASSES AND INTERFACES
If a concrete class does not implement a standard interface, then you may
inconvenience some programmers by prohibiting inheritance. If you feel that you
must allow inheritance from such a class, one reasonable approach is to ensure
that the class never invokes any of its overridable methods and to document this
fact. In other words, eliminate the class’s self-use of overridable methods entirely.
In doing so, you’ll create a class that is reasonably safe to subclass. Overriding a
method will never affect the behavior of any other method.
You can eliminate a class’s self-use of overridable methods mechanically,
without changing its behavior. Move the body of each overridable method to a pri-
vate “helper method” and have each overridable method invoke its private helper
method. Then replace each self-use of an overridable method with a direct invoca-
tion of the overridable method’s private helper method. 

ITEM 18: PREFER INTERFACES TO ABSTRACT CLASSES
Item 18: Prefer interfaces to abstract classes
The Java programming language provides two mechanisms for defining a type
that permits multiple implementations: interfaces and abstract classes. The most
obvious difference between the two mechanisms is that abstract classes are per-
mitted to contain implementations for some methods while interfaces are not. A
more important difference is that to implement the type defined by an abstract
class, a class must be a subclass of the abstract class. Any class that defines all of
the required methods and obeys the general contract is permitted to implement an
interface, regardless of where the class resides in the class hierarchy. Because Java
permits only single inheritance, this restriction on abstract classes severely con-
strains their use as type definitions.
Existing classes can be easily retrofitted to implement a new interface. All
you have to do is add the required methods if they don’t yet exist and add an
implements clause to the class declaration. For example, many existing classes
were retrofitted to implement the Comparable interface when it was introduced
into the platform. Existing classes cannot, in general, be retrofitted to extend a
new abstract class. If you want to have two classes extend the same abstract class,
you have to place the abstract class high up in the type hierarchy where it
subclasses an ancestor of both classes. Unfortunately, this causes great collateral
damage to the type hierarchy, forcing all descendants of the common ancestor to
extend the new abstract class whether or not it is appropriate for them to do so.
Interfaces are ideal for defining mixins. Loosely speaking, a mixin is a type
that a class can implement in addition to its “primary type” to declare that it pro-
vides some optional behavior. For example, Comparable is a mixin interface that
allows a class to declare that its instances are ordered with respect to other mutu-
ally comparable objects. Such an interface is called a mixin because it allows the
optional functionality to be “mixed in” to the type’s primary functionality.
Abstract classes can’t be used to define mixins for the same reason that they can’t
be retrofitted onto existing classes: a class cannot have more than one parent, and
there is no reasonable place in the class hierarchy to insert a mixin.
Interfaces allow the construction of nonhierarchical type frameworks.
Type hierarchies are great for organizing some things, but other things don’t fall
neatly into a rigid hierarchy. For example, suppose we have an interface represent-
ing a singer and another representing a songwriter:
public interface Singer {
AudioClip sing(Song s);
}

CHAPTER 4
CLASSES AND INTERFACES
public interface Songwriter {
Song compose(boolean hit);
}
In real life, some singers are also songwriters. Because we used interfaces
rather than abstract classes to define these types, it is perfectly permissible for a
single class to implement both Singer and Songwriter. In fact, we can define a
third interface that extends both Singer and Songwriter and adds new methods
that are appropriate to the combination:
public interface SingerSongwriter extends Singer, Songwriter {
AudioClip strum();
void actSensitive();
}
You don’t always need this level of flexibility, but when you do, interfaces are
a lifesaver. The alternative is a bloated class hierarchy containing a separate class
for every supported combination of attributes. If there are n attributes in the type
system, there are 2n possible combinations that you might have to support. This is
what’s known as a combinatorial explosion. Bloated class hierarchies can lead to
bloated classes containing many methods that differ only in the type of their argu-
ments, as there are no types in the class hierarchy to capture common behaviors.
Interfaces enable safe, powerful functionality enhancements via the wrap-
per class idiom, described in Item 16. If you use abstract classes to define types,
you leave the programmer who wants to add functionality with no alternative but
to use inheritance. The resulting classes are less powerful and more fragile than
wrapper classes.
While interfaces are not permitted to contain method implementations, using
interfaces to define types does not prevent you from providing implementation
assistance to programmers. You can combine the virtues of interfaces and
abstract classes by providing an abstract skeletal implementation class to go
with each nontrivial interface that you export. The interface still defines the
type, but the skeletal implementation takes all of the work out of implementing it. 
By convention, skeletal implementations are called AbstractInterface, where
Interface is the name of the interface they implement. For example, the Collec-
tions Framework provides a skeletal implementation to go along with each main
collection interface: AbstractCollection, AbstractSet, AbstractList, and
AbstractMap. Arguably it would have made sense to call them SkeletalCollec-
tion, SkeletalSet, SkeletalList, and SkeletalMap, but the Abstract conven-
tion is now firmly established.

ITEM 18: PREFER INTERFACES TO ABSTRACT CLASSES
When properly designed, skeletal implementations can make it very easy for
programmers to provide their own implementations of your interfaces. For exam-
ple, here’s a static factory method containing a complete, fully functional List
implementation:
// Concrete implementation built atop skeletal implementation
static List<Integer> intArrayAsList(final int[] a) {
if (a == null)
throw new NullPointerException();
return new AbstractList<Integer>() {
public Integer get(int i) {
return a[i];
// Autoboxing (Item 5)
}
@Override public Integer set(int i, Integer val) {
int oldVal = a[i];
a[i] = val;
// Auto-unboxing
return oldVal;
// Autoboxing
}
public int size() {
return a.length;
}
};
}
When you consider all that a List implementation does for you, this example
is an impressive demonstration of the power of skeletal implementations. Inciden-
tally, the example is an Adapter [Gamma95, p. 139] that allows an int array to be
viewed as a list of Integer instances. Because of all the translation back and forth
between int values and Integer instances (boxing and unboxing), its perfor-
mance is not terribly good. Note that a static factory is provided and that the class
is an inaccessible anonymous class (Item 22) hidden inside the static factory.
The beauty of skeletal implementations is that they provide the implementa-
tion assistance of abstract classes without imposing the severe constraints that
abstract classes impose when they serve as type definitions. For most implemen-
tors of a
