# BCS601 — Module 4

## Syntax-Directed Translation & Intermediate Code Generation

**Subject:** BCS601 (Compiler Design)
**Module:** Module 4
**Content type:** primary_module
**Sources:** Compilers: Principles, Techniques, and Tools (Dragon Book, 2nd Edition), VTU BCS601 Syllabus

---

### 1. Syntax-Directed Definitions (SDD) & Attributes

A **Syntax-Directed Definition (SDD)** is a context-free grammar augmented with semantic attributes and rules:
- **Synthesized Attribute:** The value of an attribute at a parse tree node is computed from attribute values at the **children** of that node or from the node itself.
  - An SDD using only synthesized attributes is called an **S-attributed definition**.
  - Can be evaluated naturally during bottom-up parsing using a post-order traversal.
- **Inherited Attribute:** The value of an attribute at a node is computed from attribute values at the **parent** and/or **siblings** of that node.
  - An SDD where each attribute is either synthesized or inherits only from left siblings is called an **L-attributed definition**.
  - Can be evaluated during top-down parsing (e.g., recursive descent).

---

### 2. Intermediate Representations & Three-Address Code (TAC)

**Three-Address Code (TAC)** is a sequence of instructions where each instruction has at most one operator on the right side and at most three address operands.

#### Standard Forms of TAC Instructions:
1. `x = y op z` (Binary arithmetic or logical operation)
2. `x = op y` (Unary operation: minus, negation)
3. `x = y` (Copy assignment)
4. `goto L` (Unconditional jump)
5. `if x relop y goto L` (Conditional jump)
6. `param x` / `call p, n` / `return y` (Procedure call)
7. `x = y[i]` / `x[i] = y` (Indexed array access)
8. `x = &y` / `x = *y` (Pointer address and dereference)

#### Data Structure Implementations of TAC:
1. **Quadruples:** A record with 4 fields: `(op, arg1, arg2, result)`. Explicitly names temporary variables.
2. **Triples:** A record with 3 fields: `(op, arg1, arg2)`. Refers to intermediate results using their statement index/pointer `(i)`, saving space.
3. **Indirect Triples:** An array of pointers to triple records, enabling easy code reordering during optimization without shifting triple indices.

#### Backpatching:
A technique for generating target code for boolean expressions and control-flow statements in a single pass. Unresolved jump targets are placed on lists (`truelist`, `falselist`, `nextlist`) and "backpatched" with the correct target labels as soon as they become known.\n