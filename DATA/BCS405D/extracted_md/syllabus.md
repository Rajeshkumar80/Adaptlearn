<!-- PROVENANCE: subject_code=BCS405D | semester=4 | source_type=SYLLABUS | source_file=BCS405D_Unix_Shell_Programming.md | confidence=1.0 -->

# BCS405D — Unix Shell Programming

> **VTU B.E. CSE | 2022 Scheme | 4th Semester**

---

## 📋 Course Information

| Field | Details |
|---|---|
| **Subject Name** | Unix Shell Programming |
| **Subject Code** | BCS405D |
| **Semester** | 4th |
| **Credits** | 03 |
| **Teaching Hours/Week** | 3L : 0T : 0P : 0S |
| **Total Pedagogy Hours** | 40 |
| **CIE Marks** | 50 |
| **SEE Marks** | 50 |
| **Total Marks** | 100 |
| **Exam Duration** | 3 Hours |

---

## 🎯 Course Objectives

1. Understand Unix/Linux operating system architecture, file system, and command line tools.
2. Master file permissions, process management, and input/output redirection.
3. Learn text processing utilities: grep, sed, and awk.
4. Develop robust shell scripts using variables, control structures, and functions.
5. Understand Unix system calls for process control, file management, and inter-process communication.

---

## 📚 Module-Wise Syllabus

### Module 1: Unix Architecture & Basic Commands
- Architecture of Unix/Linux: Kernel, Shell, File System, Utilities
- Features of Unix: Multi-user, Multitasking, Portability, Security
- General-Purpose Utilities: date, cal, who, uname, echo, printf, bc, passwd
- The File System: File types (Ordinary, Directory, Device, FIFO), File system hierarchy (/, /bin, /etc, /home, /dev)
- Navigating the File System: pwd, cd, mkdir, rmdir, ls (options: -l, -a, -R, -t, -d)
- File Handling Commands: cat, cp, rm, mv, more, less, head, tail, touch, wc

### Module 2: File Attributes, Permissions & Process Management
- File Attributes: Detailed output of ls -l, Inode numbers, Hard links and Soft (Symbolic) links (ln command)
- File Permissions: Read, Write, Execute for User, Group, Others; chmod command (Relative and Absolute octal modes)
- umask, chown, chgrp commands
- Standard I/O and Redirection: Standard input (0), Standard output (1), Standard error (2); Redirection operators (<, >, >>, 2>)
- Pipes (|) and tee command
- Processes in Unix: Process ID (PID), Parent Process ID (PPID), ps command, Background jobs (&), nohup, kill, top, nice

### Module 3: Filters & Regular Expressions (grep, sed)
- Simple Filters: cut, paste, sort (numeric, reverse, unique), uniq, tr, pr
- Regular Expressions: Basic and Extended regular expressions, Meta-characters (^, $, ., *, [], [^], +, ?, |, ())
- The grep Family: grep, egrep, fgrep; Options (-i, -v, -n, -c, -l, -w)
- The Stream Editor (sed): sed execution model, Line addressing, Context addressing
- sed Commands: Substitution (s), Deletion (d), Printing (p), Appending (a), Inserting (i)

### Module 4: AWK Programming & Shell Scripting Basics
- The awk Pattern Scanning and Processing Language: Execution model, Syntax, BEGIN and END patterns
- awk Variables: $0, $1..$n, NR, NF, FS, OFS, RS, ORS
- awk Operators, Conditionals, Loops, Arrays, Built-in string and math functions
- Shell Scripting: Shell variables, Environment variables, Read statement, Command substitution
- Positional parameters ($0, $1, $#, $*, $@), Exit status ($?)
- Test command, Arithmetic expressions (expr, $(( )), let)

### Module 5: Advanced Shell Scripting & Unix System Calls
- Control Structures in Shell: if-then-else, elif, case statement
- Looping Statements: while, until, for loop, break, continue
- Shell Functions: Definition, Arguments, Returning values
- Debugging Shell Scripts (set -x, set -v)
- Introduction to Unix System Calls: open, read, write, close, lseek
- Process Control System Calls: fork, vfork, exec family, wait, waitpid, exit
- Inter-Process Communication (IPC) overview: Pipes and Signals

---

## ✅ Course Outcomes (COs)

| CO | Description |
|---|---|
| **CO1** | Demonstrate understanding of Unix/Linux architecture, command line environment, and file hierarchies. |
| **CO2** | Manage file permissions, directory structures, I/O redirections, pipelines, and background processes. |
| **CO3** | Process and extract text patterns using regular expressions with grep, egrep, and sed utilities. |
| **CO4** | Write data extraction and report generation scripts using AWK programming language. |
| **CO5** | Develop automated bash shell scripts with control logic, functions, and explain Unix system calls. |

---

## 📖 Textbooks & References

- **Unix Concepts and Applications** — Sumitabha Das, 4th Edition, Tata McGraw-Hill.
- **Linux Command Line and Shell Scripting Bible** — Richard Blum and Christine Bresnahan, 4th Edition, Wiley.
- **Advanced Programming in the UNIX Environment** — W. Richard Stevens and Stephen A. Rago, 3rd Edition, Addison-Wesley.

---

> ⚠️ *Always refer to the official VTU website or your college's academic portal for the most current syllabus updates.*
