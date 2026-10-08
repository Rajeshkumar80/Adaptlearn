<!-- PROVENANCE: subject_code=BCV654C | subject_name=Integrated Waste Management for a Smart City | semester=6 | source_type=TEXTBOOK_DIGEST | source_file=textbook_notes.md | extraction_method=STRUCTURED_COMPREHENSIVE | confidence=0.95 -->

# BCV654C — Textbook Notes

**Subject:** BCV654C (Python for Data Analysis)
**Content type:** textbook_notes
**Primary Reference:** Wes McKinney — Python for Data Analysis (O'Reilly Media)

---

# BCV654C — Textbook Notes (Module-wise)
**Subject:** Python for Data Analysis
**Prescribed Textbooks:** Wes McKinney — Python for Data Analysis (O'Reilly Media)

---

## Module 1 Textbook: Introduction to Waste Management

### Textbook Excerpt — Reference: T1_Python_for_Data_Analysis_Wes_McKinney.txt

aconda is installed. The installer is a shell script that
must be executed in the terminal. Depending on whether you have a 32-bit or 64-bit
system, you will either need to install the x86 (32-bit) or x86_64 (64-bit) installer. You
will then have a file named something similar to Anaconda3-4.1.0-Linux-x86_64.sh.
To install it, execute this script with bash:
$ bash Anaconda3-4.1.0-Linux-x86_64.sh
|

Some Linux distributions have versions of all the required Python
packages in their package managers and can be installed using a
tool like apt. The setup described here uses Anaconda, as it’s both
easily reproducible across distributions and simpler to upgrade
packages to their latest versions.
After accepting the license, you will be presented with a choice of where to put the
Anaconda files. I recommend installing the files in the default location in your home
directory—for example, /home/$USER/anaconda (with your username, naturally).
The Anaconda installer may ask if you wish to prepend its bin/ directory to your
$PATH variable. If you have any problems after installation, you can do this yourself by
modifying your .bashrc (or .zshrc, if you are using the zsh shell) with something akin
to:
export PATH=/home/$USER/anaconda/bin:$PATH
After doing this you can either start a new terminal process or execute your .bashrc
again with source ~/.bashrc.
Installing or Updating Python Packages
At some point while reading, you may wish to install additional Python packages that
are not included in the Anaconda distribution. In general, these can be installed with
the following command:
conda install package_name
If this does not work, you may also be able to install the package using the pip pack‐
age management tool:
pip install package_name
You can update packages by using the conda update command:
conda update package_name
pip also supports upgrades using the --upgrade flag:
pip install --upgrade package_name
You will have several opportunities to try out these commands throughout the book.
While you can use both conda and pip to install packages, you
should not attempt to update conda packages with pip, as doing so
can lead to environment problems. When using Anaconda or Min‐
iconda, it’s best to first try updating with conda.
|
Chapter 1: Preliminaries

Python 2 and Python 3
The first version of the Python 3.x line of interpreters was released at the end of 2008.
It included a number of changes that made some previously written Python 2.x code
incompatible. Because 17 years had passed since the very first release of Python in
1991, creating a “breaking” release of Python 3 was viewed to be for the greater good
given the lessons learned during that time.
In 2012, much of the scientific and data analysis community was still using Python
first edition of this book used Python 2.7. Now, users are free to choose between
Python 2.x and 3.x and in general have full library support with either flavor.
However, Python 2.x will reach its development end of life in 

---

## Module 2 Textbook: Solid Waste Management

### Textbook Excerpt — Reference: T1_Python_for_Data_Analysis_Wes_McKinney.txt

aconda is installed. The installer is a shell script that
must be executed in the terminal. Depending on whether you have a 32-bit or 64-bit
system, you will either need to install the x86 (32-bit) or x86_64 (64-bit) installer. You
will then have a file named something similar to Anaconda3-4.1.0-Linux-x86_64.sh.
To install it, execute this script with bash:
$ bash Anaconda3-4.1.0-Linux-x86_64.sh
|

Some Linux distributions have versions of all the required Python
packages in their package managers and can be installed using a
tool like apt. The setup described here uses Anaconda, as it’s both
easily reproducible across distributions and simpler to upgrade
packages to their latest versions.
After accepting the license, you will be presented with a choice of where to put the
Anaconda files. I recommend installing the files in the default location in your home
directory—for example, /home/$USER/anaconda (with your username, naturally).
The Anaconda installer may ask if you wish to prepend its bin/ directory to your
$PATH variable. If you have any problems after installation, you can do this yourself by
modifying your .bashrc (or .zshrc, if you are using the zsh shell) with something akin
to:
export PATH=/home/$USER/anaconda/bin:$PATH
After doing this you can either start a new terminal process or execute your .bashrc
again with source ~/.bashrc.
Installing or Updating Python Packages
At some point while reading, you may wish to install additional Python packages that
are not included in the Anaconda distribution. In general, these can be installed with
the following command:
conda install package_name
If this does not work, you may also be able to install the package using the pip pack‐
age management tool:
pip install package_name
You can update packages by using the conda update command:
conda update package_name
pip also supports upgrades using the --upgrade flag:
pip install --upgrade package_name
You will have several opportunities to try out these commands throughout the book.
While you can use both conda and pip to install packages, you
should not attempt to update conda packages with pip, as doing so
can lead to environment problems. When using Anaconda or Min‐
iconda, it’s best to first try updating with conda.
|
Chapter 1: Preliminaries

Python 2 and Python 3
The first version of the Python 3.x line of interpreters was released at the end of 2008.
It included a number of changes that made some previously written Python 2.x code
incompatible. Because 17 years had passed since the very first release of Python in
1991, creating a “breaking” release of Python 3 was viewed to be for the greater good
given the lessons learned during that time.
In 2012, much of the scientific and data analysis community was still using Python
first edition of this book used Python 2.7. Now, users are free to choose between
Python 2.x and 3.x and in general have full library support with either flavor.
However, Python 2.x will reach its development end of life in 

---

## Module 3 Textbook: Liquid Waste Management

### Textbook Excerpt — Reference: T1_Python_for_Data_Analysis_Wes_McKinney.txt

aconda is installed. The installer is a shell script that
must be executed in the terminal. Depending on whether you have a 32-bit or 64-bit
system, you will either need to install the x86 (32-bit) or x86_64 (64-bit) installer. You
will then have a file named something similar to Anaconda3-4.1.0-Linux-x86_64.sh.
To install it, execute this script with bash:
$ bash Anaconda3-4.1.0-Linux-x86_64.sh
|

Some Linux distributions have versions of all the required Python
packages in their package managers and can be installed using a
tool like apt. The setup described here uses Anaconda, as it’s both
easily reproducible across distributions and simpler to upgrade
packages to their latest versions.
After accepting the license, you will be presented with a choice of where to put the
Anaconda files. I recommend installing the files in the default location in your home
directory—for example, /home/$USER/anaconda (with your username, naturally).
The Anaconda installer may ask if you wish to prepend its bin/ directory to your
$PATH variable. If you have any problems after installation, you can do this yourself by
modifying your .bashrc (or .zshrc, if you are using the zsh shell) with something akin
to:
export PATH=/home/$USER/anaconda/bin:$PATH
After doing this you can either start a new terminal process or execute your .bashrc
again with source ~/.bashrc.
Installing or Updating Python Packages
At some point while reading, you may wish to install additional Python packages that
are not included in the Anaconda distribution. In general, these can be installed with
the following command:
conda install package_name
If this does not work, you may also be able to install the package using the pip pack‐
age management tool:
pip install package_name
You can update packages by using the conda update command:
conda update package_name
pip also supports upgrades using the --upgrade flag:
pip install --upgrade package_name
You will have several opportunities to try out these commands throughout the book.
While you can use both conda and pip to install packages, you
should not attempt to update conda packages with pip, as doing so
can lead to environment problems. When using Anaconda or Min‐
iconda, it’s best to first try updating with conda.
|
Chapter 1: Preliminaries

Python 2 and Python 3
The first version of the Python 3.x line of interpreters was released at the end of 2008.
It included a number of changes that made some previously written Python 2.x code
incompatible. Because 17 years had passed since the very first release of Python in
1991, creating a “breaking” release of Python 3 was viewed to be for the greater good
given the lessons learned during that time.
In 2012, much of the scientific and data analysis community was still using Python
first edition of this book used Python 2.7. Now, users are free to choose between
Python 2.x and 3.x and in general have full library support with either flavor.
However, Python 2.x will reach its development end of life in 

---

## Module 4 Textbook: Hazardous Waste Management

### Textbook Excerpt — Reference: T1_Python_for_Data_Analysis_Wes_McKinney.txt

aconda is installed. The installer is a shell script that
must be executed in the terminal. Depending on whether you have a 32-bit or 64-bit
system, you will either need to install the x86 (32-bit) or x86_64 (64-bit) installer. You
will then have a file named something similar to Anaconda3-4.1.0-Linux-x86_64.sh.
To install it, execute this script with bash:
$ bash Anaconda3-4.1.0-Linux-x86_64.sh
|

Some Linux distributions have versions of all the required Python
packages in their package managers and can be installed using a
tool like apt. The setup described here uses Anaconda, as it’s both
easily reproducible across distributions and simpler to upgrade
packages to their latest versions.
After accepting the license, you will be presented with a choice of where to put the
Anaconda files. I recommend installing the files in the default location in your home
directory—for example, /home/$USER/anaconda (with your username, naturally).
The Anaconda installer may ask if you wish to prepend its bin/ directory to your
$PATH variable. If you have any problems after installation, you can do this yourself by
modifying your .bashrc (or .zshrc, if you are using the zsh shell) with something akin
to:
export PATH=/home/$USER/anaconda/bin:$PATH
After doing this you can either start a new terminal process or execute your .bashrc
again with source ~/.bashrc.
Installing or Updating Python Packages
At some point while reading, you may wish to install additional Python packages that
are not included in the Anaconda distribution. In general, these can be installed with
the following command:
conda install package_name
If this does not work, you may also be able to install the package using the pip pack‐
age management tool:
pip install package_name
You can update packages by using the conda update command:
conda update package_name
pip also supports upgrades using the --upgrade flag:
pip install --upgrade package_name
You will have several opportunities to try out these commands throughout the book.
While you can use both conda and pip to install packages, you
should not attempt to update conda packages with pip, as doing so
can lead to environment problems. When using Anaconda or Min‐
iconda, it’s best to first try updating with conda.
|
Chapter 1: Preliminaries

Python 2 and Python 3
The first version of the Python 3.x line of interpreters was released at the end of 2008.
It included a number of changes that made some previously written Python 2.x code
incompatible. Because 17 years had passed since the very first release of Python in
1991, creating a “breaking” release of Python 3 was viewed to be for the greater good
given the lessons learned during that time.
In 2012, much of the scientific and data analysis community was still using Python
first edition of this book used Python 2.7. Now, users are free to choose between
Python 2.x and 3.x and in general have full library support with either flavor.
However, Python 2.x will reach its development end of life in 

---

## Module 5 Textbook: Smart City Waste Solutions

### Textbook Excerpt — Reference: T1_Python_for_Data_Analysis_Wes_McKinney.txt

aconda is installed. The installer is a shell script that
must be executed in the terminal. Depending on whether you have a 32-bit or 64-bit
system, you will either need to install the x86 (32-bit) or x86_64 (64-bit) installer. You
will then have a file named something similar to Anaconda3-4.1.0-Linux-x86_64.sh.
To install it, execute this script with bash:
$ bash Anaconda3-4.1.0-Linux-x86_64.sh
|

Some Linux distributions have versions of all the required Python
packages in their package managers and can be installed using a
tool like apt. The setup described here uses Anaconda, as it’s both
easily reproducible across distributions and simpler to upgrade
packages to their latest versions.
After accepting the license, you will be presented with a choice of where to put the
Anaconda files. I recommend installing the files in the default location in your home
directory—for example, /home/$USER/anaconda (with your username, naturally).
The Anaconda installer may ask if you wish to prepend its bin/ directory to your
$PATH variable. If you have any problems after installation, you can do this yourself by
modifying your .bashrc (or .zshrc, if you are using the zsh shell) with something akin
to:
export PATH=/home/$USER/anaconda/bin:$PATH
After doing this you can either start a new terminal process or execute your .bashrc
again with source ~/.bashrc.
Installing or Updating Python Packages
At some point while reading, you may wish to install additional Python packages that
are not included in the Anaconda distribution. In general, these can be installed with
the following command:
conda install package_name
If this does not work, you may also be able to install the package using the pip pack‐
age management tool:
pip install package_name
You can update packages by using the conda update command:
conda update package_name
pip also supports upgrades using the --upgrade flag:
pip install --upgrade package_name
You will have several opportunities to try out these commands throughout the book.
While you can use both conda and pip to install packages, you
should not attempt to update conda packages with pip, as doing so
can lead to environment problems. When using Anaconda or Min‐
iconda, it’s best to first try updating with conda.
|
Chapter 1: Preliminaries

Python 2 and Python 3
The first version of the Python 3.x line of interpreters was released at the end of 2008.
It included a number of changes that made some previously written Python 2.x code
incompatible. Because 17 years had passed since the very first release of Python in
1991, creating a “breaking” release of Python 3 was viewed to be for the greater good
given the lessons learned during that time.
In 2012, much of the scientific and data analysis community was still using Python
first edition of this book used Python 2.7. Now, users are free to choose between
Python 2.x and 3.x and in general have full library support with either flavor.
However, Python 2.x will reach its development end of life in 

---
