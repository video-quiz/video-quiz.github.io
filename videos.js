// Video database with question banks
window.videoDatabase = {

    "sample-javascript": {
        "id": "sample-javascript",
        "title": "JavaScript Basics Tutorial",
        "videoId": "PkZNo7MFNFg",
        "description": "Learn the fundamentals of JavaScript programming",
        "markdownContent": "**Welcome to this comprehensive JavaScript tutorial!**\n\n\n- **Variables and Data Types** - Understanding how to store and work with data\n- **Functions** - Creating reusable blocks of code\n- **Control Flow** - Making decisions with if/else statements\n- **Arrays and Objects** - Working with complex data structures\n- **DOM Manipulation** - Making your web pages interactive\n\n## Prerequisites\n\n- Basic understanding of HTML and CSS\n- A text editor (VS Code recommended)\n- A web browser for testing\n\n> **Note:** This is a hands-on tutorial, so make sure you code along!\n\n---\n\n*Ready to dive into the world of JavaScript? Let's get started!*",
        "questions": [
            {
                "time": 30,
                "type": "multiple_choice",
                "question": "What is JavaScript primarily used for?",
                "options": [
                    "Web development",
                    "Database management",
                    "Operating systems"
                ],
                "correct": 0,
                "hint": "Think about what runs in web browsers and makes websites interactive."
            },
            {
                "time": 120,
                "type": "free_form",
                "question": "What keyword is used to declare a variable in modern JavaScript?",
                "answer": "let",
                "hint": "This keyword was introduced in ES6 and is preferred over 'var' for block-scoped variables."
            },
            {
                "time": 180,
                "type": "drag_drop",
                "question": "Match each JavaScript concept with its correct description:",
                "pairs": [
                    {
                        "left": "Variable",
                        "right": "Stores data values"
                    },
                    {
                        "left": "Function",
                        "right": "Reusable block of code"
                    },
                    {
                        "left": "Array",
                        "right": "Ordered list of items"
                    },
                    {
                        "left": "Object",
                        "right": "Collection of key-value pairs"
                    }
                ],
                "hint": "Think about the fundamental building blocks of JavaScript programming."
            },
            {
                "time": 240,
                "type": "ordering",
                "question": "Put these JavaScript execution steps in the correct order:",
                "items": [
                    "Parse the code",
                    "Check for syntax errors",
                    "Create execution context",
                    "Execute the code"
                ],
                "hint": "Consider what happens from the moment JavaScript code is loaded until it runs."
            },
            {
                "time": 300,
                "type": "multiple_choice",
                "question": "Which of these is NOT a JavaScript data type?",
                "options": [
                    "String",
                    "Boolean",
                    "Integer",
                    "Number"
                ],
                "correct": 2,
                "hint": "JavaScript has a 'Number' type that handles both integers and decimals."
            }
        ]
    },
    
    "python-intro": {
        id: "python-intro",
        title: "Python for Beginners",
        videoId: "kqtD5dpn9C8", // Example YouTube video ID
        description: "Introduction to Python programming language",
        markdownContent: `# Python for Beginners 🐍

Welcome to the wonderful world of Python programming!

## Why Python?

Python is one of the most **beginner-friendly** programming languages because:

- ✅ **Simple, readable syntax** - looks almost like English
- ✅ **Versatile** - used for web development, data science, AI, and more
- ✅ **Huge community** - tons of help and resources available
- ✅ **Great career prospects** - high demand in the job market

## What we'll cover:

1. **Setting up Python** - Installation and your first "Hello World"
2. **Variables and Data Types** - Strings, numbers, booleans, and lists
3. **Input/Output** - Getting user input and displaying results
4. **Control Structures** - if/else statements and loops
5. **Functions** - Writing reusable code

## You'll need:

- A computer (Windows, Mac, or Linux)
- Python 3.x installed
- A text editor or IDE (we'll use IDLE or VS Code)

> 💡 **Pro tip:** Don't just watch - code along! The best way to learn programming is by doing.

Let's start your Python journey! 🚀`,
        questions: [
            {
                time: 45,
                type: "multiple_choice",
                question: "Python is known for its:",
                options: ["Complexity", "Readability", "Speed"],
                correct: 1,
                hint: "Python's design philosophy emphasizes code that is easy to read and understand."
            },
            {
                time: 120,
                type: "drag_drop",
                question: "Match each Python data type with its example:",
                pairs: [
                    { left: "String", right: "'Hello World'" },
                    { left: "Integer", right: "42" },
                    { left: "Float", right: "3.14" },
                    { left: "Boolean", right: "True" }
                ],
                hint: "Look at the syntax and quotation marks to identify each data type."
            },
            {
                time: 180,
                type: "free_form",
                question: "What function is used to output text in Python?",
                answer: "print",
                hint: "This function displays information to the console or terminal."
            },
            {
                time: 240,
                type: "ordering",
                question: "Put these Python list operations in order of execution:",
                items: [
                    "Create empty list",
                    "Add elements with append()",
                    "Access elements by index",
                    "Modify existing elements"
                ],
                hint: "Think about the logical sequence of working with a list from creation to modification."
            },
            {
                time: 300,
                type: "multiple_choice",
                question: "Python uses which character for indentation?",
                options: ["Tabs", "Spaces", "Both tabs and spaces"],
                correct: 2,
                hint: "Python is flexible with indentation, but consistency within a file is important."
            }
        ]
    },
    
    "html-css-basics": {
        id: "html-css-basics",
        title: "HTML & CSS Fundamentals",
        videoId: "UB1O30fR-EE", // Example YouTube video ID
        description: "Learn the building blocks of web pages",
        markdownContent: `# HTML & CSS Fundamentals 🌐

Master the building blocks of the modern web!

## About This Course

This tutorial will teach you the **essential skills** needed to create beautiful, functional websites from scratch.

### HTML (HyperText Markup Language)
- 📄 **Structure** - Learn how to organize content with semantic elements
- 🔗 **Links & Navigation** - Connect pages and create user-friendly menus  
- 📷 **Media** - Embed images, videos, and other multimedia content
- 📋 **Forms** - Collect user input and data

### CSS (Cascading Style Sheets)
- 🎨 **Styling** - Colors, fonts, spacing, and visual design
- 📱 **Responsive Design** - Make your sites look great on all devices
- 🔧 **Layout** - Flexbox, Grid, and positioning techniques
- ✨ **Animations** - Add smooth transitions and interactive effects

## What You'll Build

By the end of this tutorial, you'll create:
- A complete personal portfolio website
- Mobile-responsive design
- Professional navigation and layout
- Contact forms and interactive elements

## Prerequisites

- Basic computer skills
- A text editor (VS Code recommended)
- A modern web browser
- Enthusiasm to learn! 😊

---

**Ready to start building amazing websites? Let's dive in!** 🚀`,
        questions: [
            {
                time: 60,
                type: "multiple_choice",
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
                correct: 0,
                hint: "HTML is about marking up text with hyperlinks and structure for the web."
            },
            {
                time: 120,
                type: "drag_drop",
                question: "Match each HTML element with its purpose:",
                pairs: [
                    { left: "<h1>", right: "Main heading" },
                    { left: "<p>", right: "Paragraph text" },
                    { left: "<img>", right: "Display image" },
                    { left: "<a>", right: "Create link" }
                ],
                hint: "Think about what each tag represents semantically on a webpage."
            },
            {
                time: 180,
                type: "free_form",
                question: "Which tag is used to create a paragraph in HTML?",
                answer: "p",
                hint: "This tag is short for 'paragraph' and is one of the most basic HTML elements."
            },
            {
                time: 240,
                type: "ordering",
                question: "Put these CSS specificity selectors in order from lowest to highest priority:",
                items: [
                    "Element selector (p)",
                    "Class selector (.class)",
                    "ID selector (#id)",
                    "Inline style (style='')"
                ],
                hint: "Remember: specificity determines which CSS rule wins when multiple rules target the same element."
            },
            {
                time: 300,
                type: "multiple_choice",
                question: "CSS is used for:",
                options: ["Content structure", "Styling and layout", "JavaScript functionality"],
                correct: 1,
                hint: "CSS stands for Cascading Style Sheets - it's all about how things look and are positioned."
            },
            {
                time: 360,
                type: "drag_drop",
                question: "Match each CSS property with what it controls:",
                pairs: [
                    { left: "color", right: "Text color" },
                    { left: "background", right: "Element background" },
                    { left: "margin", right: "Space outside element" },
                    { left: "padding", right: "Space inside element" }
                ],
                hint: "Think about the CSS box model and how properties affect different parts of an element."
            }
        ]
    }
};
