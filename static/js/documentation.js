const contentData = {
    intro: `
        <h1>Introduction to Python</h1>
        <p>Python is an easy-to-learn, high-level, and general-purpose programming language that has gained immense popularity due to its simplicity, readability, and versatility. Python is widely used in various domains such as web development, data analysis, machine learning, artificial intelligence, scientific computing, automation, and more.</p>
        
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Hello World in Python

        print("Hello, World!")
        </pre>

        <h2>Why Python?</h2>
        <p>Python is often chosen by developers and data scientists because of the following reasons:</p>
        <ul>
            <li><strong>Easy Syntax:</strong> Python's syntax is clean and easy to read, making it beginner-friendly. It uses indentation to define blocks of code, which reduces clutter and makes the code more readable.</li>
            <li><strong>Versatility:</strong> Python can be used for various purposes such as web development (Django, Flask), data science (NumPy, Pandas), artificial intelligence (TensorFlow, Keras), and more.</li>
            <li><strong>Large Standard Library:</strong> Python comes with an extensive library of pre-built modules, which makes it easier to perform various tasks such as file manipulation, networking, database interaction, and web scraping.</li>
            <li><strong>Cross-Platform:</strong> Python is a cross-platform language, meaning it works on multiple platforms such as Windows, Linux, and macOS. This allows you to write code that runs on different operating systems without modification.</li>
            <li><strong>Open-Source:</strong> Python is free to use, distribute, and modify, making it accessible to everyone. It has an active community that constantly contributes to its development.</li>
        </ul>

        <h2>Key Features of Python</h2>
        <p>Python has several key features that set it apart from other programming languages:</p>
        <ul>
            <li><strong>Interpreted Language:</strong> Python code is executed line-by-line by the Python interpreter, which helps catch errors early in the development process. It also makes debugging easier.</li>
            <li><strong>Dynamically Typed:</strong> You don’t need to declare the type of a variable in Python. The interpreter assigns the type automatically at runtime.</li>
            <li><strong>Object-Oriented:</strong> Python supports object-oriented programming (OOP), which allows for the creation of classes and objects to model real-world entities.</li>
            <li><strong>Extensive Community Support:</strong> Python has a large community of developers and resources, making it easy to find help and tutorials for any topic.</li>
            <li><strong>Easy Integration:</strong> Python can be integrated with other languages like C, C++, and Java, making it easier to extend its functionality when needed.</li>
        </ul>

        <h2>Basic Python Syntax</h2>
        <p>Now, let’s take a look at some basic Python syntax and how to write simple programs:</p>
        <ul>
            <li><strong>Comments:</strong> Comments are written using the <code>#</code> symbol. Comments are ignored by the interpreter and are used for documentation purposes.</li>
            <li><strong>Printing Output:</strong> To display output, you can use the <code>print()</code> function.</li>
        </ul>
        
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        
        # This is a comment
        print("Hello, Python!")            # This will print the text to the console
        </pre>

        <h2>Python's Data Types</h2>
        <p>Python has several built-in data types that you will use to store and manipulate data. Here are some of the common ones:</p>
        <ul>
            <li><strong>Integer (int):</strong> Represents whole numbers. Example: <code>5, -12</code></li>
            <li><strong>Floating Point (float):</strong> Represents decimal numbers. Example: <code>3.14, -0.001</code></li>
            <li><strong>String (str):</strong> Represents sequences of characters. Example: <code>"Hello, Python!"</code></li>
            <li><strong>Boolean (bool):</strong> Represents True or False values. Example: <code>True, False</code></li>
            <li><strong>List (list):</strong> Represents an ordered collection of items. Example: <code>[1, 2, 3, 4]</code></li>
            <li><strong>Tuple (tuple):</strong> Represents an immutable collection of items. Example: <code>(1, 2, 3)</code></li>
            <li><strong>Dictionary (dict):</strong> Represents a collection of key-value pairs. Example: <code>{"name": "John", "age": 30}</code></li>
        </ul>

        <h2>Python Example Program</h2>
        <p>Let's take a look at a simple Python program that calculates the area of a circle:</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Program to calculate the area of a circle

        import math     # Import the math module

        radius = 5      # Define the radius of the circle
        area = math.pi * radius ** 2        # Calculate the area using the formula

        print(f"The area of the circle with radius {radius} is: {area:.2f}")     # Print the result
        </pre>
        <ul>
            <li>In this program, we import the math module to access the mathematical constant <code>pi</code>.</li>
            <li>We define a variable <code>radius</code> and use the formula for the area of a circle: <code>area = pi * radius^2</code>.</li>
            <li>The result is printed using the <code>print()</code> function with formatted output.</li>
        </ul>

        <h2>Summary</h2>
        <p>Python is a powerful and versatile programming language that is easy to learn and use. Whether you're building simple scripts, web applications, or machine learning models, Python's simplicity and flexibility make it a great choice for beginners and experienced developers alike.</p>
    `,

    syntax: `
        <h1>Python Syntax</h1>
        <p>Python syntax refers to the rules that define how Python code should be written. Python is known for its clean, readable syntax, which makes it easy for beginners to learn and use. This section will cover the fundamental concepts of Python syntax, such as indentation, variables, operators, and control flow.</p>

        <h2>1. Indentation</h2>
        <p>Python uses indentation to define the structure of the code. Unlike many other programming languages that use curly braces <code>{}</code> to define code blocks, Python uses indentation (usually four spaces) to define blocks of code such as functions, loops, and conditionals.</p>

        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Correct indentation
        if True:
            print("This is indented correctly")

        # Incorrect indentation (will raise an IndentationError)
        if True:
        print("This will cause an error")
        </pre>
        <ul>
            <li>Always use consistent indentation throughout the code (usually 4 spaces per level).</li>
            <li>Mixing tabs and spaces for indentation can cause errors.</li>
            <li>Indentation defines code blocks instead of using curly braces.</li>
        </ul>

        <h2>2. Variables and Data Types</h2>
        <p>In Python, variables are used to store values. Variables do not need to be explicitly declared with a type because Python is a dynamically typed language. The interpreter automatically assigns the correct type based on the value assigned to the variable.</p>

        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Variable assignment
        x = 10                          # integer
        name = "John"               # string
        is_active = True            # boolean
        height = 5.9                # float

        # Printing variables
        print(x)
        print(name)
        </pre>
        <ul>
            <li>Variables are assigned using the <code>=</code> operator.</li>
            <li>Python automatically detects the data type based on the assigned value.</li>
        </ul>

        <h2>3. Operators</h2>
        <p>Python supports several types of operators, including arithmetic, comparison, logical, and assignment operators.</p>

        <h3>3.1 Arithmetic Operators</h3>
        <p>Arithmetic operators are used to perform mathematical operations on variables and values.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Arithmetic Operators
        x = 10
        y = 5

        print(x + y)        # Addition
        print(x - y)        # Subtraction
        print(x * y)        # Multiplication
        print(x / y)        # Division
        print(x % y)        # Modulus (remainder)
        print(x // y)       # Floor division
        print(x ** y)       # Exponentiation
        </pre>

        <h3>3.2 Comparison Operators</h3>
        <p>Comparison operators are used to compare two values and return a boolean result (True or False).</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Comparison Operators
        x = 10
        y = 5

        print(x == y)       # Equal to
        print(x != y)       # Not equal to
        print(x > y)        # Greater than
        print(x < y)        # Less than
        print(x >= y)       # Greater than or equal to
        print(x <= y)       # Less than or equal to
        </pre>

        <h3>3.3 Logical Operators</h3>
        <p>Logical operators are used to combine conditional statements.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Logical Operators
        x = True
        y = False

        print(x and y)        # Logical AND
        print(x or y)         # Logical OR
        print(not x)          # Logical NOT
        </pre>

        <h2>4. Control Flow Statements</h2>
        <p>Control flow statements are used to control the flow of execution in a Python program. The primary control flow statements are <code>if</code>, <code>else</code>, <code>elif</code>, and loops like <code>for</code> and <code>while</code>.</p>

        <h3>4.1 If-Else Statements</h3>
        <p>Conditional statements allow you to execute code based on whether a condition is True or False.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # If-Else Statement

        age = 18

        if age >= 18:
            print("You are an adult.")
        else:
            print("You are a minor.")
        </pre>
        <ul>
            <li>Use <code>if</code> to check a condition.</li>
            <li>Use <code>else</code> to specify what happens if the condition is False.</li>
            <li><code>elif</code> allows for multiple conditions to be checked.</li>
        </ul>

        <h3>4.2 Loops</h3>
        <p>Loops allow you to execute a block of code repeatedly. The two main types of loops are the <code>for</code> loop and the <code>while</code> loop.</p>

        <h4>4.2.1 For Loop</h4>
        <p>The <code>for</code> loop is used to iterate over a sequence (such as a list or string).</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # For Loop
        fruits = ["apple", "banana", "cherry"]

        for fruit in fruits:
            print(fruit)
        </pre>

        <h4>4.2.2 While Loop</h4>
        <p>The <code>while</code> loop runs as long as the given condition is True.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # While Loop
        count = 0

        while count < 5:
            print(count)
            count += 1          # Increment the counter
        </pre>

        <h2>5. Functions</h2>
        <p>Functions are used to group reusable code into a block. They allow you to break a program into smaller, manageable pieces. A function is defined using the <code>def</code> keyword.</p>

        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Function Definition
        def greet(name):
            print(f"Hello, {name}!")

        # Function Call
        greet("Alice")
        greet("Bob")
        </pre>
        <ul>
            <li>Functions allow you to pass parameters (inputs) and return a result (output).</li>
            <li>The <code>return</code> keyword is used to return a value from the function.</li>
        </ul>

        <h2>Summary</h2>
        <p>Python’s simple syntax makes it easy for developers to write clean and readable code. Understanding basic syntax, indentation, and control flow is crucial to writing effective Python programs. As you continue to learn, you will explore more advanced features and libraries that make Python such a versatile language for various tasks.</p>
        `,

    variables: `
        <h1>Variables in Python</h1>
        <p>In Python, variables are used to store data values. A variable is essentially a reference to a memory location where the data is stored. Python is a dynamically typed language, meaning you do not need to declare the data type of a variable when you create it. The data type is determined automatically based on the value assigned to the variable.</p>

        <h2>1. Variable Assignment</h2>
        <p>In Python, variables are created by simply assigning a value to a name using the <code>=</code> operator. Once a value is assigned, the variable can be used in the program.</p>

        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Variable Assignment
        name = "Alice"  # String variable
        age = 25         # Integer variable
        height = 5.6     # Float variable
        is_active = True # Boolean variable

        # Printing variables
        print(name)
        print(age)
        print(height)
        print(is_active)
        </pre>
        <ul>
            <li>Use the <code>=</code> operator to assign a value to a variable.</li>
            <li>The data type of a variable is determined automatically by the assigned value.</li>
            <li>Variables can hold different data types at different points during the program’s execution.</li>
        </ul>

        <h2>2. Data Types in Python</h2>
        <p>Python supports several built-in data types. The most common ones include:</p>

        <h3>2.1 Integers</h3>
        <p>An integer is a whole number, positive or negative, without any decimal point.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Integer Example
        age = 30
        print(type(age))  # Output: <class 'int'>
        </pre>

        <h3>2.2 Floats</h3>
        <p>A float is a number that has a decimal point.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Float Example
        height = 5.9
        print(type(height))  # Output: <class 'float'>
        </pre>

        <h3>2.3 Strings</h3>
        <p>A string is a sequence of characters, enclosed in either single or double quotes.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # String Example
        name = "John Doe"
        print(type(name))  # Output: <class 'str'>
        </pre>

        <h3>2.4 Booleans</h3>
        <p>A boolean is a data type that can hold only two values: <code>True</code> or <code>False</code>.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Boolean Example
        is_active = True
        print(type(is_active))  # Output: <class 'bool'>
        </pre>

        <h3>2.5 Lists</h3>
        <p>A list is an ordered collection of items, which can be of any data type. Lists are mutable, meaning their contents can be changed after they are created.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # List Example
        fruits = ["apple", "banana", "cherry"]
        print(type(fruits))  # Output: <class 'list'>
        </pre>

        <h3>2.6 Tuples</h3>
        <p>A tuple is similar to a list but is immutable, meaning it cannot be changed once it is created.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Tuple Example
        coordinates = (10, 20)
        print(type(coordinates))  # Output: <class 'tuple'>
        </pre>

        <h3>2.7 Dictionaries</h3>
        <p>A dictionary is an unordered collection of key-value pairs. It is also mutable.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Dictionary Example
        person = {"name": "Alice", "age": 25}
        print(type(person))  # Output: <class 'dict'>
        </pre>

        <h3>2.8 Sets</h3>
        <p>A set is an unordered collection of unique items.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Set Example
        unique_numbers = {1, 2, 3, 4}
        print(type(unique_numbers))  # Output: <class 'set'>
        </pre>

        <h2>3. Variable Naming Rules</h2>
        <p>In Python, there are some basic rules you need to follow when naming variables:</p>
        <ul>
            <li>Variable names can contain letters, numbers, and underscores, but they cannot start with a number.</li>
            <li>Python is case-sensitive, so <code>myVariable</code> and <code>myvariable</code> are considered different.</li>
            <li>Avoid using Python reserved keywords as variable names (e.g., <code>if</code>, <code>else</code>, <code>while</code>).</li>
        </ul>

        <h3>Examples of valid variable names:</h3>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        my_variable = 10
        age_25 = 25
        name = "John"
        _var = "hello"
        </pre>

        <h3>Examples of invalid variable names:</h3>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        1st_variable = 10  # Cannot start with a number
        if = 5  # 'if' is a reserved keyword
        </pre>

        <h2>4. Constants in Python</h2>
        <p>Although Python does not have built-in constants, you can use a convention to define constants. Typically, constants are written in all uppercase letters to indicate that their value should not be changed after assignment.</p>

        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Defining Constants
        PI = 3.14159
        MAX_LENGTH = 100

        # Using Constants
        print(PI)
        print(MAX_LENGTH)
        </pre>
        <ul>
            <li>Constants are usually defined in uppercase letters to distinguish them from regular variables.</li>
            <li>There is no enforcement mechanism in Python to prevent modifying a constant, but it is a convention to treat them as immutable.</li>
        </ul>

        <h2>5. Type Conversion</h2>
        <p>Python allows you to convert one data type to another using built-in functions like <code>int()</code>, <code>float()</code>, and <code>str()</code>.</p>

        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Type Conversion
        x = "123"  # String
        y = int(x)  # Convert to Integer
        z = float(x)  # Convert to Float

        print(type(x))  # Output: <class 'str'>
        print(type(y))  # Output: <class 'int'>
        print(type(z))  # Output: <class 'float'>
        </pre>

        <h2>6. Best Practices for Variables</h2>
        <p>To write clean, readable, and maintainable Python code, follow these best practices when working with variables:</p>
        <ul>
            <li>Use descriptive names for variables that clearly indicate their purpose.</li>
            <li>Follow the PEP 8 style guide, which recommends using lowercase letters and underscores for variable names (e.g., <code>user_name</code>).</li>
            <li>Avoid using single-letter variable names, except for loop counters (e.g., <code>i</code>, <code>j</code>).</li>
            <li>Keep the scope of variables as limited as possible by defining them only where they are needed.</li>
        </ul>

        <h2>Summary</h2>
        <p>Variables are the building blocks of any Python program. Understanding how to create and use variables effectively, along with Python's data types and naming conventions, is essential for writing clean, maintainable code. By following best practices and the PEP 8 guidelines, you can ensure that your code is not only functional but also readable and easy to understand.</p>
        `,

    data_types: `
        <h1>Python Data Types</h1>
        <p>Common Python data types include:</p>
        <ul>
            <li><strong>str</strong>: "Hello"</li>
            <li><strong>int</strong>: 10</li>
            <li><strong>float</strong>: 3.14</li>
            <li><strong>bool</strong>: True/False</li>
            <li><strong>list</strong>: [1, 2, 3]</li>
            <li><strong>tuple</strong>: (1, 2)</li>
            <li><strong>dict</strong>: {"name": "Umair"}</li>
            <li><strong>set</strong>: {1, 2, 3}</li>
        </ul>
`,
    numbers: `
        <h1>Python Numbers</h1>
        <p>Python has three number types: int, float, and complex.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        a = 5
        b = 2.5
        c = a + b
        print(c)  # Output: 7.5
                </pre>`,


    type_casting: `
    <h1>Type Casting in Python</h1>
    <p>Type casting refers to converting a variable from one data type to another. In Python, this process can be done automatically (implicit casting) or manually (explicit casting). Python provides built-in functions to perform type casting between different data types.</p>
    
    <h2>1. Implicit Type Casting (Automatic)</h2>
    <p>Implicit type casting is automatically performed by Python when it can safely convert one data type to another without losing data or precision. This type of casting happens without the programmer’s intervention. For example, when a smaller integer is assigned to a larger data type, Python will automatically convert it.</p>

    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
    # Implicit Type Casting Example
    a = 10        # Integer
    b = 3.14      # Float

    # Python automatically converts the integer 'a' to a float
    result = a + b

    print(result)  # Output: 13.14
    print(type(result))  # Output: <class 'float'>
    </pre>
    <ul>
        <li>Python automatically converts an integer to a float when the two are used in an expression.</li>
        <li>In this case, <code>10</code> is automatically cast to a float before the operation.</li>
    </ul>

    <h2>2. Explicit Type Casting (Manual)</h2>
    <p>Explicit type casting, also known as type conversion, occurs when the programmer manually specifies the type to which a variable should be converted. Python provides built-in functions like <code>int()</code>, <code>float()</code>, and <code>str()</code> to perform explicit casting.</p>

    <h3>2.1 Using <code>int()</code> to Cast to Integer</h3>
    <p>The <code>int()</code> function converts a number or string to an integer. If the string contains a decimal point, the part after the decimal is discarded.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Casting to Integer
        x = 12.99   # Float
        y = int(x)  # Convert to Integer

        print(y)  # Output: 12
        print(type(y))  # Output: <class 'int'>
    </pre>

    <h3>2.2 Using <code>float()</code> to Cast to Float</h3>
    <p>The <code>float()</code> function converts an integer or string to a float. Even if the number is an integer, it will be cast to a float with a decimal point.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
        # Casting to Float
        a = 5      # Integer
        b = float(a)  # Convert to Float

        print(b)  # Output: 5.0
        print(type(b))  # Output: <class 'float'>
    </pre>

    <h3>2.3 Using <code>str()</code> to Cast to String</h3>
    <p>The <code>str()</code> function converts a number (integer, float) or other data types into a string.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Casting to String
age = 25
age_str = str(age)  # Convert Integer to String

print(age_str)  # Output: "25"
print(type(age_str))  # Output: <class 'str'>
    </pre>

    <h3>2.4 Using <code>bool()</code> to Cast to Boolean</h3>
    <p>The <code>bool()</code> function converts a value to <code>True</code> or <code>False</code>. Any non-zero number or non-empty string will be converted to <code>True</code>, and zero or an empty string will be converted to <code>False</code>.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Casting to Boolean
is_active = 1    # Non-zero integer, converts to True
is_not_active = 0  # Zero integer, converts to False

print(bool(is_active))    # Output: True
print(bool(is_not_active))  # Output: False
    </pre>

    <h2>3. Type Casting with Collections</h2>
    <p>Python also allows type casting with collections such as lists, tuples, and sets. You can convert one collection type to another using the following functions:</p>

    <h3>3.1 Converting a List to a Tuple</h3>
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Converting a List to a Tuple
my_list = [1, 2, 3]
my_tuple = tuple(my_list)

print(my_tuple)  # Output: (1, 2, 3)
print(type(my_tuple))  # Output: <class 'tuple'>
    </pre>

    <h3>3.2 Converting a Tuple to a List</h3>
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Converting a Tuple to a List
my_tuple = (4, 5, 6)
my_list = list(my_tuple)

print(my_list)  # Output: [4, 5, 6]
print(type(my_list))  # Output: <class 'list'>
    </pre>

    <h3>3.3 Converting a List to a Set</h3>
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Converting a List to a Set
my_list = [1, 2, 2, 3, 4]
my_set = set(my_list)

print(my_set)  # Output: {1, 2, 3, 4}
print(type(my_set))  # Output: <class 'set'>
    </pre>

    <h3>3.4 Converting a Set to a List</h3>
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Converting a Set to a List
my_set = {1, 2, 3, 4}
my_list = list(my_set)

print(my_list)  # Output: [1, 2, 3, 4]
print(type(my_list))  # Output: <class 'list'>
    </pre>

    <h2>4. Type Casting Between Strings and Numbers</h2>
    <p>Strings and numbers can be converted to each other as long as the string represents a valid number. However, if the string does not represent a valid number, a <code>ValueError</code> will be raised.</p>

    <h3>4.1 Converting a String to a Number</h3>
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Converting a String to an Integer
num_str = "123"
num = int(num_str)

print(num)  # Output: 123
print(type(num))  # Output: <class 'int'>
    </pre>

    <h3>4.2 Converting a String to a Float</h3>
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Converting a String to a Float
num_str = "12.34"
num = float(num_str)

print(num)  # Output: 12.34
print(type(num))  # Output: <class 'float'>
    </pre>

    <h2>5. Best Practices for Type Casting</h2>
    <p>When performing type casting, it is important to follow best practices to avoid errors and unexpected behavior:</p>
    <ul>
        <li>Always ensure that the value you are casting is compatible with the target data type to avoid <code>ValueError</code> exceptions.</li>
        <li>Use type casting only when necessary, especially when converting between numeric types or between collections.</li>
        <li>Explicit casting should be used to convert strings to numbers, as Python does not automatically perform this conversion.</li>
        <li>Be cautious when casting between collections, as the data structure may lose some properties (e.g., converting a list to a set removes duplicates).</li>
    </ul>

    <h2>6.Summary</h2>
    <p>Type casting in Python is a powerful feature that allows you to convert between different data types. While implicit casting is automatically handled by Python, explicit casting provides the flexibility to manually convert between data types when needed. By understanding when and how to use type casting, you can handle different data types effectively and avoid potential errors in your code.</p>
`,
    strings: `
<h1>Strings in Python</h1>
<p>A string in Python is a sequence of characters enclosed within quotes. Strings are one of the most commonly used data types in Python, and Python provides a variety of methods to manipulate and work with strings efficiently.</p>

<h2>1. Creating Strings</h2>
<p>Strings can be created by enclosing characters inside single quotes (<code>'</code>) or double quotes (<code>"</code>). Both are valid and can be used interchangeably.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Creating strings
string1 = "Hello, World!"
string2 = 'Python is awesome!'

print(string1)  # Output: Hello, World!
print(string2)  # Output: Python is awesome!
</pre>

<h2>2. String Indexing</h2>
<p>In Python, strings are indexed starting from 0. This means that the first character of a string is at index 0, the second character is at index 1, and so on. Negative indexing is also supported, where <code>-1</code> refers to the last character, <code>-2</code> to the second last, and so on.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# String indexing
string = "Python"

print(string[0])  # Output: P (first character)
print(string[-1])  # Output: n (last character)
</pre>

<h2>3. String Slicing</h2>
<p>String slicing allows you to extract a part of the string by specifying a start index, an end index, and a step (optional). The syntax is: <code>string[start:end:step]</code>.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# String slicing
string = "Python Programming"

# Extract from index 0 to 5
slice1 = string[0:6]
print(slice1)  # Output: Python

# Extract with step
slice2 = string[::2]
print(slice2)  # Output: Pto rgamn
</pre>

<h2>4. String Methods</h2>
<p>Python provides many built-in methods for string manipulation. Here are some commonly used string methods:</p>

<h3>4.1 <code>lower()</code> and <code>upper()</code></h3>
<p>These methods are used to convert a string to lowercase or uppercase.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Converting to lowercase and uppercase
string = "Hello World!"

print(string.lower())  # Output: hello world!
print(string.upper())  # Output: HELLO WORLD!
</pre>

<h3>4.2 <code>strip()</code></h3>
<p>The <code>strip()</code> method removes leading and trailing spaces from the string.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Removing spaces
string = "   Hello World!   "
print(string.strip())  # Output: Hello World!
</pre>

<h3>4.3 <code>replace()</code></h3>
<p>The <code>replace()</code> method replaces a substring with another substring in the string.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Replacing a substring
string = "Hello World!"
new_string = string.replace("World", "Python")
print(new_string)  # Output: Hello Python!
</pre>

<h3>4.4 <code>split()</code></h3>
<p>The <code>split()</code> method splits a string into a list based on a specified delimiter (by default, it splits on whitespace).</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Splitting a string
string = "Hello Python Programming"
split_string = string.split()
print(split_string)  # Output: ['Hello', 'Python', 'Programming']
</pre>

<h3>4.5 <code>find()</code></h3>
<p>The <code>find()</code> method returns the index of the first occurrence of a specified substring. If the substring is not found, it returns <code>-1</code>.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Finding a substring
string = "Python Programming"
print(string.find("Prog"))  # Output: 7 (index of "Prog")
print(string.find("Java"))  # Output: -1 (not found)
</pre>

<h2>5. String Concatenation and Repetition</h2>
<p>In Python, strings can be concatenated (joined together) using the <code>+</code> operator, and repeated using the <code>*</code> operator.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Concatenation and repetition
string1 = "Hello"
string2 = "Python"

# Concatenating strings
concatenated_string = string1 + " " + string2
print(concatenated_string)  # Output: Hello Python

# Repeating strings
repeated_string = "Hello " * 3
print(repeated_string)  # Output: Hello Hello Hello 
</pre>

<h2>6. String Formatting</h2>
<p>String formatting is a way to embed variables or expressions within a string. Python offers several ways to format strings:</p>

<h3>6.1 <code>f-strings</code></h3>
<p>F-strings (formatted string literals) are introduced in Python 3.6. It is a concise and readable way to embed variables within a string.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using f-strings
name = "Alice"
age = 25
formatted_string = f"Hello, my name is {name} and I am {age} years old."
print(formatted_string)  # Output: Hello, my name is Alice and I am 25 years old.
</pre>

<h3>6.2 <code>format()</code> Method</h3>
<p>The <code>format()</code> method is another way to format strings. It allows you to place placeholders in a string and fill them with values.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using format() method
formatted_string = "Hello, my name is {} and I am {} years old.".format(name, age)
print(formatted_string)  # Output: Hello, my name is Alice and I am 25 years old.
</pre>

<h3>6.3 Old-Style Formatting</h3>
<p>Old-style string formatting uses the <code>%</code> operator to format strings. This is the oldest method, but still supported for compatibility.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Old-style formatting
formatted_string = "Hello, my name is %s and I am %d years old." % (name, age)
print(formatted_string)  # Output: Hello, my name is Alice and I am 25 years old.
</pre>

<h2>7. Escape Characters in Strings</h2>
<p>Escape characters are used to insert special characters into a string. For example, to include a newline character or a tab character, escape characters such as <code>\n</code> and <code>\t</code> are used.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Escape characters
string = "Hello\nPython"
print(string)  # Output: Hello (new line) Python

string = "Hello\tPython"
print(string)  # Output: Hello (tab) Python
</pre>

<h2>8. Multiline Strings</h2>
<p>Multiline strings in Python are created using triple quotes (<code>'''</code> or <code>"""</code>). These strings can span multiple lines without the need for escape characters.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Multiline strings
multi_line_string = '''Hello,
Python is a great programming language.'''
print(multi_line_string)
# Output:
# Hello,
# Python is a great programming language.
</pre>

<h2>9. Summary</h2>
<p>Strings are fundamental in Python programming. Python provides a range of powerful methods to manipulate strings, including indexing, slicing, formatting, and more. Understanding how to work with strings efficiently is essential for writing clear, concise, and effective Python code.</p>
`,
    booleans: `
        <h1>Python Booleans</h1>
        <p>Booleans are either True or False. Useful in logic and conditions.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
x = 10
y = 5
print(x > y)  # True
        </pre>
`,
    operators: `
        <h1>Python Operators</h1>
        <p>Operators perform operations on variables and values.</p>
        <ul>
            <li><strong>Arithmetic:</strong> +, -, *, /, %, //, **</li>
            <li><strong>Comparison:</strong> ==, !=, >, <, >=, <=</li>
            <li><strong>Logical:</strong> and, or, not</li>
            <li><strong>Assignment:</strong> =, +=, -=, *=, etc.</li>
        </ul>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
a = 5
b = 3
print(a + b)           # 8
print(a > b and b < 4) # True
        </pre>
`,
    lists: `
    <h1>Lists in Python</h1>
    <p>A list is a collection of items in a specific order. Lists are one of the most versatile and commonly used data types in Python. Lists are mutable, meaning you can modify them after creation.</p>
    
    <h2>1. Creating Lists</h2>
    <p>Lists are created by placing elements inside square brackets (<code>[]</code>), separated by commas.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Creating lists
list1 = [1, 2, 3, 4, 5]
list2 = ['apple', 'banana', 'cherry']
list3 = [True, False, 3.14, 'hello']

print(list1)  # Output: [1, 2, 3, 4, 5]
print(list2)  # Output: ['apple', 'banana', 'cherry']
print(list3)  # Output: [True, False, 3.14, 'hello']
    </pre>

    <h2>2. Accessing List Elements</h2>
    <p>List elements are indexed, with the first element at index 0, the second at index 1, and so on. You can access a specific element using its index.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Accessing elements using index
my_list = ['apple', 'banana', 'cherry']

print(my_list[0])  # Output: apple (first element)
print(my_list[1])  # Output: banana (second element)
print(my_list[-1])  # Output: cherry (last element)
    </pre>

    <h2>3. Modifying Lists</h2>
    <p>Lists are mutable, which means you can change their elements after they have been created. You can modify a list by assigning new values to an existing index or by using methods.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Modifying elements in a list
my_list = ['apple', 'banana', 'cherry']

# Change the second element
my_list[1] = 'orange'
print(my_list)  # Output: ['apple', 'orange', 'cherry']

# Add new elements using append() and insert()
my_list.append('grapes')
print(my_list)  # Output: ['apple', 'orange', 'cherry', 'grapes']

my_list.insert(1, 'mango')
print(my_list)  # Output: ['apple', 'mango', 'orange', 'cherry', 'grapes']
    </pre>

    <h2>4. Removing Elements from Lists</h2>
    <p>Elements can be removed from a list using methods like <code>remove()</code>, <code>pop()</code>, or by using the <code>del</code> keyword.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Removing elements
my_list = ['apple', 'orange', 'cherry', 'grapes']

# Using remove() (removes the first occurrence of a specified value)
my_list.remove('orange')
print(my_list)  # Output: ['apple', 'cherry', 'grapes']

# Using pop() (removes an element by index)
removed_item = my_list.pop(1)
print(removed_item)  # Output: cherry (removed element)
print(my_list)  # Output: ['apple', 'grapes']

# Using del (removes an element by index or entire list)
del my_list[0]
print(my_list)  # Output: ['grapes']
    </pre>

    <h2>5. List Methods</h2>
    <p>Python provides several useful methods for working with lists. Here are some of the most commonly used ones:</p>

    <h3>5.1 <code>append()</code></h3>
    <p>The <code>append()</code> method adds an element to the end of the list.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using append()
my_list = [1, 2, 3]
my_list.append(4)
print(my_list)  # Output: [1, 2, 3, 4]
    </pre>

    <h3>5.2 <code>extend()</code></h3>
    <p>The <code>extend()</code> method adds all elements of an iterable (like another list) to the end of the current list.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using extend()
list1 = [1, 2, 3]
list2 = [4, 5, 6]
list1.extend(list2)
print(list1)  # Output: [1, 2, 3, 4, 5, 6]
    </pre>

    <h3>5.3 <code>insert()</code></h3>
    <p>The <code>insert()</code> method inserts an element at a specified position in the list.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using insert()
my_list = [1, 2, 3]
my_list.insert(1, 1.5)  # Insert 1.5 at index 1
print(my_list)  # Output: [1, 1.5, 2, 3]
    </pre>

    <h3>5.4 <code>remove()</code></h3>
    <p>The <code>remove()</code> method removes the first occurrence of a specified value.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using remove()
my_list = [1, 2, 3, 4]
my_list.remove(3)
print(my_list)  # Output: [1, 2, 4]
    </pre>

    <h3>5.5 <code>sort()</code></h3>
    <p>The <code>sort()</code> method sorts the elements of the list in ascending order by default. You can also pass parameters to sort in descending order.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using sort()
my_list = [3, 1, 4, 2]
my_list.sort()
print(my_list)  # Output: [1, 2, 3, 4]

# Sorting in descending order
my_list.sort(reverse=True)
print(my_list)  # Output: [4, 3, 2, 1]
    </pre>

    <h3>5.6 <code>reverse()</code></h3>
    <p>The <code>reverse()</code> method reverses the order of elements in the list.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using reverse()
my_list = [1, 2, 3, 4]
my_list.reverse()
print(my_list)  # Output: [4, 3, 2, 1]
    </pre>

    <h2>6. List Comprehensions</h2>
    <p>List comprehensions provide a concise way to create lists based on existing lists. They can be used to filter elements, modify elements, or even generate new lists.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using list comprehension
squares = [x**2 for x in range(5)]
print(squares)  # Output: [0, 1, 4, 9, 16]

# Using list comprehension with a condition
even_squares = [x**2 for x in range(5) if x % 2 == 0]
print(even_squares)  # Output: [0, 4, 16]
    </pre>

    <h2>7. Nested Lists</h2>
    <p>Lists can also contain other lists as elements, creating a nested list. You can access elements of a nested list using multiple indices.</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Nested lists
nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# Accessing elements of a nested list
print(nested_list[0][1])  # Output: 2 (second element of the first list)
print(nested_list[1][2])  # Output: 6 (third element of the second list)
    </pre>

    <h2>8. Summary</h2>
    <p>Lists are one of the most important and flexible data types in Python. They allow you to store collections of data in an ordered manner. With the ability to modify, access, and manipulate the data, lists are a cornerstone of Python programming.</p>
`,
    tuple: `
<h1>Tuples in Python</h1>
<p>A tuple is a collection of ordered and immutable elements. Tuples are similar to lists in many ways, but unlike lists, tuples cannot be changed once they are created. They are often used to store related pieces of information.</p>

<h2>1. Creating Tuples</h2>
<p>Tuples are created by placing elements inside parentheses (<code>()</code>), separated by commas.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Creating tuples
tuple1 = (1, 2, 3, 4, 5)
tuple2 = ('apple', 'banana', 'cherry')
tuple3 = (True, False, 3.14, 'hello')

print(tuple1)  # Output: (1, 2, 3, 4, 5)
print(tuple2)  # Output: ('apple', 'banana', 'cherry')
print(tuple3)  # Output: (True, False, 3.14, 'hello')
</pre>

<h2>2. Accessing Tuple Elements</h2>
<p>Tuples are indexed, similar to lists. You can access elements using their index, starting from 0. You can also use negative indexing to access elements from the end.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Accessing elements using index
my_tuple = ('apple', 'banana', 'cherry')

print(my_tuple[0])  # Output: apple (first element)
print(my_tuple[1])  # Output: banana (second element)
print(my_tuple[-1])  # Output: cherry (last element)
</pre>

<h2>3. Modifying Tuples</h2>
<p>Tuples are immutable, meaning their elements cannot be changed after creation. However, you can convert a tuple to a list, modify the list, and then convert it back to a tuple.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Attempting to modify a tuple (will raise an error)
my_tuple = ('apple', 'banana', 'cherry')
# my_tuple[1] = 'orange'  # This will raise an error because tuples are immutable

# Convert tuple to list, modify, and convert back to tuple
my_list = list(my_tuple)
my_list[1] = 'orange'
my_tuple = tuple(my_list)
print(my_tuple)  # Output: ('apple', 'orange', 'cherry')
</pre>

<h2>4. Tuple Packing and Unpacking</h2>
<p>Tuple packing is when you assign multiple values to a tuple. Tuple unpacking allows you to assign the values of a tuple to individual variables.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Tuple packing
my_tuple = (1, 2, 3)
print(my_tuple)  # Output: (1, 2, 3)

# Tuple unpacking
a, b, c = my_tuple
print(a)  # Output: 1
print(b)  # Output: 2
print(c)  # Output: 3
</pre>

<h2>5. Tuple Methods</h2>
<p>Tuples have fewer methods compared to lists, but there are still useful ones for certain operations:</p>

<h3>5.1 <code>count()</code></h3>
<p>The <code>count()</code> method returns the number of times a specified value appears in the tuple.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using count()
my_tuple = (1, 2, 3, 1, 1, 4)
print(my_tuple.count(1))  # Output: 3 (1 appears 3 times)
</pre>

<h3>5.2 <code>index()</code></h3>
<p>The <code>index()</code> method returns the index of the first occurrence of a specified value.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using index()
my_tuple = (1, 2, 3, 4, 5)
print(my_tuple.index(3))  # Output: 2 (index of the first occurrence of 3)
</pre>

<h2>6. Nested Tuples</h2>
<p>Tuples can contain other tuples or collections as elements, creating a nested tuple. You can access the elements of a nested tuple using multiple indices.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Nested tuples
nested_tuple = ((1, 2), (3, 4), (5, 6))

# Accessing elements of a nested tuple
print(nested_tuple[0])  # Output: (1, 2)
print(nested_tuple[1][1])  # Output: 4 (second element of the second tuple)
</pre>

<h2>7. Advantages of Tuples</h2>
<p>Tuples have several advantages over lists in specific situations:</p>
<ul>
    <li><strong>Immutability</strong>: Since tuples are immutable, they are safer to use in concurrent programming, as their data cannot be changed unexpectedly.</li>
    <li><strong>Performance</strong>: Tuples are more memory-efficient and have better performance for iteration and access due to their immutability.</li>
    <li><strong>Hashable</strong>: Tuples can be used as dictionary keys, while lists cannot.</li>
</ul>

<h2>8. Summary</h2>
<p>Tuples are a fundamental data structure in Python. They are especially useful when you need to store a collection of elements that should not be modified. Their immutability and performance advantages make them suitable for many scenarios, including as keys in dictionaries and when passing multiple values between functions.</p>
`,
    dictionaries: `
    <h1>Dictionaries in Python</h1>
    <p>A dictionary is an unordered collection of items in Python, where each item is stored as a key-value pair. Dictionaries are mutable, meaning their values can be changed after creation. They are also indexed by keys, not by numbers like lists or tuples.</p>

    <h2>1. Creating Dictionaries</h2>
    <p>Dictionaries are created using curly braces (<code>{}</code>) and separating keys and values with a colon (<code>:</code>). Each key-value pair is separated by a comma.</p>

    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Creating a dictionary
my_dict = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
print(my_dict)  # Output: {'name': 'John', 'age': 30, 'city': 'New York'}
    </pre>

    <h2>2. Accessing Dictionary Elements</h2>
    <p>Values in a dictionary can be accessed using their corresponding keys. If a key is not found, it will raise a <code>KeyError</code>.</p>

    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Accessing values by key
my_dict = {"name": "John", "age": 30, "city": "New York"}

print(my_dict["name"])  # Output: John
print(my_dict["age"])   # Output: 30
    </pre>

    <h2>3. Modifying Dictionary Elements</h2>
    <p>Dictionaries are mutable, meaning you can modify values associated with keys. You can also add new key-value pairs or remove existing ones.</p>

    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Modifying values in a dictionary
my_dict = {"name": "John", "age": 30, "city": "New York"}

my_dict["age"] = 35  # Update value for existing key
my_dict["email"] = "john@example.com"  # Add new key-value pair

print(my_dict)  # Output: {'name': 'John', 'age': 35, 'city': 'New York', 'email': 'john@example.com'}
    </pre>

    <h2>4. Removing Items from a Dictionary</h2>
    <p>Items can be removed from a dictionary using methods such as <code>del</code>, <code>pop()</code>, and <code>popitem()</code>.</p>

    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using del to remove a key-value pair
my_dict = {"name": "John", "age": 30, "city": "New York"}
del my_dict["city"]
print(my_dict)  # Output: {'name': 'John', 'age': 30}

# Using pop() to remove a key-value pair and return the value
removed_value = my_dict.pop("age")
print(removed_value)  # Output: 30
print(my_dict)  # Output: {'name': 'John'}

# Using popitem() to remove the last inserted item
my_dict.popitem()
print(my_dict)  # Output: {'name': 'John'}
    </pre>

    <h2>5. Dictionary Methods</h2>
    <p>Dictionaries come with several built-in methods for handling key-value pairs. Here are some common ones:</p>

    <h3>5.1 <code>get()</code></h3>
    <p>The <code>get()</code> method returns the value for a specified key, or a default value if the key does not exist.</p>

    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using get() to access values
my_dict = {"name": "John", "age": 30, "city": "New York"}

print(my_dict.get("name"))  # Output: John
print(my_dict.get("email", "Not Found"))  # Output: Not Found (default value if key does not exist)
    </pre>

    <h3>5.2 <code>keys()</code></h3>
    <p>The <code>keys()</code> method returns a view object that displays a list of all the keys in the dictionary.</p>

    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using keys() to get dictionary keys
my_dict = {"name": "John", "age": 30, "city": "New York"}
print(my_dict.keys())  # Output: dict_keys(['name', 'age', 'city'])
    </pre>

    <h3>5.3 <code>values()</code></h3>
    <p>The <code>values()</code> method returns a view object that displays a list of all the values in the dictionary.</p>

    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using values() to get dictionary values
my_dict = {"name": "John", "age": 30, "city": "New York"}
print(my_dict.values())  # Output: dict_values(['John', 30, 'New York'])
    </pre>

    <h3>5.4 <code>items()</code></h3>
    <p>The <code>items()</code> method returns a view object that displays a list of all key-value pairs in the dictionary.</p>

    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using items() to get key-value pairs
my_dict = {"name": "John", "age": 30, "city": "New York"}
print(my_dict.items())  # Output: dict_items([('name', 'John'), ('age', 30), ('city', 'New York')])
    </pre>

    <h2>6. Nested Dictionaries</h2>
    <p>Dictionaries can contain other dictionaries, creating a nested structure. You can access nested dictionary values by chaining key accesses.</p>

    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Nested dictionaries
nested_dict = {
    "person1": {"name": "John", "age": 30},
    "person2": {"name": "Jane", "age": 25}
}

print(nested_dict["person1"]["name"])  # Output: John
print(nested_dict["person2"]["age"])   # Output: 25
    </pre>

    <h2>7. Dictionary Comprehension</h2>
    <p>Dictionary comprehension provides a concise way to create dictionaries. It follows the syntax <code>{key: value for item in iterable}</code>.</p>

    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Using dictionary comprehension
squares = {x: x**2 for x in range(5)}
print(squares)  # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
    </pre>

    <h2>8. Advantages of Dictionaries</h2>
    <p>Dictionaries have several key advantages:</p>
    <ul>
        <li><strong>Fast Lookup</strong>: Searching for a value in a dictionary is very fast due to its underlying hash table implementation.</li>
        <li><strong>Flexibility</strong>: Keys can be any immutable data type, and values can be any data type, making dictionaries very flexible.</li>
        <li><strong>Unordered</strong>: The order of key-value pairs is not guaranteed (unless you are using Python 3.7 or later, where dictionaries maintain insertion order).</li>
    </ul>

    <h2>9. Summary</h2>
    <p>Dictionaries are a powerful and flexible data structure in Python. They allow you to store and retrieve data efficiently using keys. By understanding how to create, modify, and access dictionaries, you can leverage their advantages in your Python projects.</p>
`,
    Sets: `

<h1>Sets in Python</h1>
<p>A <strong>set</strong> is an unordered, unindexed collection of unique elements in Python. Sets are mutable, but they only store immutable (hashable) items. They are useful when you want to store non-duplicate items or perform mathematical operations like union, intersection, and difference.</p>

<h2>1. Creating Sets</h2>
<p>You can create a set using curly braces <code>{}</code> or the <code>set()</code> constructor. Note that empty curly braces <code>{}</code> create an empty dictionary, not a set, so use <code>set()</code> instead.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Creating sets
set1 = {1, 2, 3, 4, 5}
print(set1)  # Output: {1, 2, 3, 4, 5}

# Creating an empty set
empty_set = set()
print(type(empty_set))  # Output: <class 'set'>

# Duplicate values are automatically removed
set2 = {1, 2, 2, 3, 3}
print(set2)  # Output: {1, 2, 3}
</pre>

<h2>2. Accessing Elements</h2>
<p>Since sets are unordered, you cannot access items using an index. However, you can iterate over them with a loop.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Iterating through a set
for item in set1:
print(item)
</pre>

<h2>3. Adding and Removing Elements</h2>
<p>Sets allow adding and removing elements using specific methods.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Adding elements
set1.add(6)
print(set1)  # Output: {1, 2, 3, 4, 5, 6}

# Updating with multiple elements
set1.update([7, 8])
print(set1)  # Output: {1, 2, 3, 4, 5, 6, 7, 8}

# Removing elements
set1.remove(4)  # Raises KeyError if element not found
set1.discard(10)  # Does nothing if element not found
print(set1)

# Removing and returning an arbitrary element
popped = set1.pop()
print(popped, set1)
</pre>

<h2>4. Set Operations</h2>
<p>Sets support many mathematical operations:</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
a = {1, 2, 3}
b = {3, 4, 5}

# Union: elements in either set
print(a | b)  # Output: {1, 2, 3, 4, 5}
print(a.union(b))

# Intersection: elements in both sets
print(a & b)  # Output: {3}
print(a.intersection(b))

# Difference: elements in a but not in b
print(a - b)  # Output: {1, 2}
print(a.difference(b))

# Symmetric Difference: elements in either set but not both
print(a ^ b)  # Output: {1, 2, 4, 5}
print(a.symmetric_difference(b))
</pre>

<h2>5. Other Useful Methods</h2>
<ul>
    <li><code>len(set)</code> – Returns the number of elements in the set.</li>
    <li><code>clear()</code> – Removes all elements from the set.</li>
    <li><code>copy()</code> – Returns a shallow copy of the set.</li>
    <li><code>isdisjoint(other)</code> – Returns True if two sets have no items in common.</li>
    <li><code>issubset(other)</code> – Returns True if the set is a subset of another.</li>
    <li><code>issuperset(other)</code> – Returns True if the set is a superset of another.</li>
</ul>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
x = {1, 2}
y = {1, 2, 3}

print(x.issubset(y))     # True
print(y.issuperset(x))   # True
print(x.isdisjoint({4})) # True
</pre>

<h2>6. Frozen Sets</h2>
<p><code>frozenset</code> is an immutable version of a set. Once created, its elements cannot be changed.</p>

<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
fset = frozenset([1, 2, 3])
print(fset)

# fset.add(4)  # Error: 'frozenset' object has no attribute 'add'
</pre>

<h2>7. When to Use Sets</h2>
<ul>
    <li>When you need to store unique values only.</li>
    <li>When you want to perform fast membership testing.</li>
    <li>When working with mathematical set operations.</li>
</ul>

<h2>8. Summary</h2>
<p>Sets in Python are a versatile and efficient way to handle unique items. They are ideal for membership testing, removing duplicates, and performing standard set operations like union and intersection. By understanding how to use sets effectively, you can simplify many programming tasks.</p>
`,
    loops: `
    <h1>Python Loops</h1>
    <p>Loops are used to execute a block of code repeatedly.</p>
    <h2>For Loop</h2>
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
for i in range(5):
print(i)
# Output: 0 1 2 3 4
    </pre>
    <h2>While Loop</h2>
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
count = 0
while count < 5:
print(count)
count += 1
# Output: 0 1 2 3 4
    </pre>
    <ul>
        <li><strong>For loops</strong> iterate over a sequence.</li>
        <li><strong>While loops</strong> execute as long as a condition is true.</li>
        <li>Control statements: <code>break</code>, <code>continue</code>, <code>pass</code>.</li>
    </ul>
`,
    functions: `
<h1>Python Functions</h1>
<p>Functions are reusable blocks of code that perform a specific task.</p>
<pre style="background:#333;padding:10px;border-radius:5px;color:white;">
def greet(name):
return f"Hello, {name}!"

print(greet("Umair"))  # Output: Hello, Umair!
</pre>
<ul>
    <li>Defined using the <code>def</code> keyword.</li>
    <li>Can accept parameters and return values.</li>
    <li>Types: built-in, user-defined, lambda (anonymous).</li>
    <li>Enhance code modularity and reusability.</li>
</ul>
`,
    Classes: `
        <h1>Python Classes and Objects</h1>
        <p>Python is an object-oriented programming language that allows creating classes and objects.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f"Hello, {self.name}!"

p = Person("Umair")
print(p.greet())  # Output: Hello, Umair!
        </pre>
        <ul>
            <li>A class is a blueprint for creating objects.</li>
            <li><code>__init__</code> is the constructor method.</li>
            <li><code>self</code> refers to the instance of the class.</li>
            <li>Encapsulation, inheritance, and polymorphism are key OOP concepts.</li>
        </ul>
`,
    Modules: `
        <h1>Python Modules</h1>
        <p>Modules are files containing Python code (functions, variables, classes) to organize programs.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# mymodule.py
def add(a, b):
    return a + b

# main.py
import mymodule
print(mymodule.add(3, 4))  # Output: 7
        </pre>
        <ul>
            <li>Helps in breaking large programs into smaller, manageable files.</li>
            <li>Python has many built-in modules like <code>math</code>, <code>random</code>, <code>datetime</code>.</li>
            <li>Use <code>import</code>, <code>from</code>, and <code>as</code> for module handling.</li>
        </ul>
`,
    File_handling: `
        <h1>Python File Handling</h1>
        <p>Python allows reading and writing files using built-in functions.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
# Writing to a file
with open("example.txt", "w") as f:
    f.write("Hello, file!")

# Reading from a file
with open("example.txt", "r") as f:
    print(f.read())
        </pre>
        <ul>
            <li>Use <code>open()</code> to work with files.</li>
            <li>Modes: <code>"r"</code> (read), <code>"w"</code> (write), <code>"a"</code> (append), <code>"x"</code> (create).</li>
            <li>Always close files or use <code>with</code> to handle them safely.</li>
        </ul>
`,
    Exceptions: `
    <h1>Python Exceptions</h1>
    <p>Exceptions in Python are errors that disrupt the normal flow of the program. When an exception is raised, the program stops executing unless the exception is caught and handled. You can handle exceptions using the <code>try</code> and <code>except</code> blocks.</p>
    
    <h3>Common Python Exceptions</h3>
    <ul>
        <li><strong>ZeroDivisionError:</strong> Raised when attempting to divide by zero.</li>
        <li><strong>IndexError:</strong> Raised when trying to access an index that is out of range in a list.</li>
        <li><strong>KeyError:</strong> Raised when trying to access a non-existent key in a dictionary.</li>
        <li><strong>TypeError:</strong> Raised when an operation is applied to an object of an inappropriate type.</li>
        <li><strong>ValueError:</strong> Raised when a function receives an argument of the correct type but with an inappropriate value.</li>
        <li><strong>FileNotFoundError:</strong> Raised when trying to open a file that doesn't exist.</li>
    </ul>

    <h3>Handling Exceptions with Try/Except</h3>
    <p>To handle exceptions, you can use the <code>try</code> block to write the code that might raise an exception and the <code>except</code> block to define what to do when an exception occurs. Here is an example of handling a division by zero:</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
try:
    x = 1 / 0  # This will raise a ZeroDivisionError
except ZeroDivisionError as e:
    print(f"Caught an exception: {e}")
    </pre>
    
    <p>Output:</p>
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
Caught an exception: division by zero
    </pre>

    <h3>Raising Exceptions</h3>
    <p>You can also raise your own exceptions using the <code>raise</code> keyword. For example, if a certain condition isn't met, you can raise an exception manually:</p>
    
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
age = -5
if age < 0:
    raise ValueError("Age cannot be negative!")
    </pre>

    <p>In this case, the program will raise a <code>ValueError</code> with the message "Age cannot be negative!".</p>

    <h3>Finally Block</h3>
    <p>The <code>finally</code> block is optional and will always execute, regardless of whether an exception was raised or not. It is typically used for cleanup actions such as closing files or releasing resources:</p>

    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
try:
    x = 1 / 1
except ZeroDivisionError as e:
    print(f"Caught an exception: {e}")
finally:
    print("This will always execute.")
    </pre>
    
    <p>Output:</p>
    <pre style="background:#333;padding:10px;border-radius:5px;color:white;">
This will always execute.
    </pre>

    <h3>Summary</h3>
    <p>Understanding and handling exceptions is a crucial part of writing robust Python programs. Whether it's preventing your app from crashing due to unexpected input or ensuring resources are cleaned up correctly, exception handling is a skill every Python developer must master. Always anticipate what could go wrong and use try/except/finally blocks wisely to make your code more reliable and user-friendly.</p>
`
};


const tutorialTopics = Object.keys(contentData);
let currentIndex = 0;

// Detect login status from <body data-logged-in="true|false">
const isLoggedIn = document.body.getAttribute("data-logged-in") === "true";

// Load readTopics only if logged in
let readTopics = new Set();

document.addEventListener("DOMContentLoaded", () => {
    if (isLoggedIn) {
        fetch('/get-read-topics')
            .then(response => response.json())
            .then(data => {
                readTopics = new Set(data);
                updateReadUI();
            });
    } else {
        // Don't load any read topics for logged-out users
        readTopics = new Set();
        updateReadUI();
    }
});

function loadContent(section, event = null) {
    if (event) event.preventDefault();

    // Load dynamic content
    document.getElementById("dynamic-content").innerHTML = contentData[section];

    // Set active link
    document.querySelectorAll(".sidebar-link").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("onclick").includes(`'${section}'`)) {
            link.classList.add("active");
        }
    });

    currentIndex = tutorialTopics.indexOf(section);
    updateReadUI();
}

function nextTopic(event) {
    if (event) event.preventDefault();
    if (currentIndex < tutorialTopics.length - 1) {
        currentIndex++;
        loadContent(tutorialTopics[currentIndex]);
    }
}

function prevTopic(event) {
    if (event) event.preventDefault();
    if (currentIndex > 0) {
        currentIndex--;
        loadContent(tutorialTopics[currentIndex]);
    }
}

function markAsRead() {
    if (!isLoggedIn) return;

    const topic = tutorialTopics[currentIndex];
    fetch('/mark-read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
    }).then(() => {
        readTopics.add(topic);
        updateReadUI();
    });
}

function unmarkAsRead() {
    if (!isLoggedIn) return;

    const topic = tutorialTopics[currentIndex];
    fetch('/unmark-read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
    }).then(() => {
        readTopics.delete(topic);
        updateReadUI();
    });
}

function updateReadUI() {
    const prevBtn = document.getElementById("prevBtn");
    const markReadBtn = document.getElementById("markReadBtn");

    if (prevBtn) {
        prevBtn.style.display = currentIndex === 0 ? "none" : "inline-block";
    }

    if (markReadBtn) {
        if (!isLoggedIn) {
            markReadBtn.style.display = "none";
        } else {
            markReadBtn.style.display = "inline-block";

            const topic = tutorialTopics[currentIndex];
            if (readTopics.has(topic)) {
                markReadBtn.innerText = "Mark as Unread";
                markReadBtn.onclick = unmarkAsRead;
            } else {
                markReadBtn.innerText = "Mark as Read";
                markReadBtn.onclick = markAsRead;
            }
        }
    }

    // Only update the sidebar links if logged in
    if (isLoggedIn) {
        document.querySelectorAll(".sidebar-link").forEach(link => {
            const topic = link.getAttribute("onclick").match(/'([^']+)'/)[1];
            if (readTopics.has(topic)) {
                link.classList.add("read");
            } else {
                link.classList.remove("read");
            }
        });
    } else {
        // Remove all 'read' classes when logged out
        document.querySelectorAll(".sidebar-link").forEach(link => {
            link.classList.remove("read");
        });
    }
}

// Initial load
window.onload = () => {
    if (tutorialTopics.length > 0) {
        loadContent(tutorialTopics[0]);
    }

    // Remove the Mark as Read button for logged-out users
    const markReadBtn = document.getElementById("markReadBtn");
    if (markReadBtn && !isLoggedIn) {
        markReadBtn.style.display = "none";
    }
};