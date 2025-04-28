const contentData = {
    intro: `
        <h1>What is Python?</h1>
        <p>Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.</p>
        <p>It is used for:</p>

        <ul>
            <li>Web development (server-side)</li>
            <li>Software development</li>
            <li>Mathematics</li>
            <li>System scripting</li>
        </ul>
        <h1>What can Python do?</h1>
        <ul>
            <li>Python can be used on a server to create web applications.</li>
            <li>Python can be used alongside software to create workflows.</li>
            <li>Python can connect to database systems and modify files.</li>
            <li>Python can handle big data and perform complex mathematics.</li>
            <li>Python can be used for rapid prototyping or production-ready software development.</li>
        </ul>
        <h1>Why Python?</h1>
        <ul>
            <li>Works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.).</li>
            <li>Has simple syntax similar to the English language.</li>
            <li>Allows developers to write programs with fewer lines of code.</li>
            <li>Runs on an interpreter system; code can be executed as soon as it is written.</li>
            <li>Can be treated procedurally, object-oriented, or functionally.</li>
        </ul>
        <h1>Good to know</h1>
        <p>The most recent major version is Python 3 (used in this tutorial). Python 2 is still popular but only receives security updates.</p>
        <p>Python can be written in a text editor or an Integrated Development Environment (IDE) like Thonny, Pycharm, Netbeans, or Eclipse.</p>
        <h1>Python Syntax compared to other programming languages</h1>
        <ul>
            <li>Designed for readability, similar to the English language with mathematical influences.</li>
            <li>Uses new lines to end commands (instead of semicolons or parentheses).</li>
            <li>Relies on indentation (whitespace) to define scope; other languages often use curly braces.</li>
        </ul>
        <p style="font-size: 23px;">Example:</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">print("Hello, World!")</pre>        
    `,
    syntax: `
        <h1>Python Syntax</h1>
        <p>Python syntax is clear and easy to understand. Example:</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">print("Hello, World!")</pre>
    `,
    variables: `
        <h1>Python Variables</h1>
        <p>Variables are containers for storing data values.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">x = 5\ny = "Hello"</pre>
    `,
    data_types: `
        <h1>Python Data Types</h1>
        <p>Python has many data types such as int, float, str, list, tuple, dict.</p>
    `,
    numbers: `
        <h1>Python Numbers</h1>
        <p>Numbers in Python are of type int, float, and complex.</p>
    `,
    casting: `
        <h1>Python Casting</h1>
        <p>Casting is the process of converting one data type into another.</p>
    `,
    strings: `
        <h1>Python Strings</h1>
        <p>Strings are text data enclosed in single or double quotes.</p>
        <pre style="background:#333;padding:10px;border-radius:5px;color:white;">name = "Python"</pre>
    `,
    booleans: `
        <h1>Python Booleans</h1>
        <p>Booleans represent one of two values: True or False.</p>
    `,
    operators: `
        <h1>Python Operators</h1>
        <p>Operators are used to perform operations on variables and values.</p>
    `,
    lists: `
        <h1>Python Lists</h1>
        <p>Lists are used to store multiple items in a single variable.</p>
    `
};

// Function to load content dynamically
function loadContent(section) {
    document.getElementById("content").innerHTML = contentData[section];

    // Remove 'active' class from all sidebar links
    document.querySelectorAll(".sidebar-link").forEach(link => link.classList.remove("active"));
    
    // Add 'active' class to the clicked link
    event.target.classList.add("active");
} 