// Video database with question banks
const videoDatabase = {
    "sample-javascript": {
        id: "sample-javascript",
        title: "JavaScript Basics Tutorial",
        videoId: "PkZNo7MFNFg", // Example YouTube video ID
        description: "Learn the fundamentals of JavaScript programming",
        questions: [
            {
                time: 30,
                type: "multiple_choice",
                question: "What is JavaScript primarily used for?",
                options: ["Web development", "Database management", "Operating systems"],
                correct: 0,
                hint: "Think about what runs in web browsers and makes websites interactive."
            },
            {
                time: 120,
                type: "free_form",
                question: "What keyword is used to declare a variable in modern JavaScript?",
                answer: "let",
                hint: "This keyword was introduced in ES6 and is preferred over 'var' for block-scoped variables."
            },
            {
                time: 180,
                type: "drag_drop",
                question: "Match each JavaScript concept with its correct description:",
                pairs: [
                    { left: "Variable", right: "Stores data values" },
                    { left: "Function", right: "Reusable block of code" },
                    { left: "Array", right: "Ordered list of items" },
                    { left: "Object", right: "Collection of key-value pairs" }
                ],
                hint: "Think about the fundamental building blocks of JavaScript programming."
            },
            {
                time: 240,
                type: "ordering",
                question: "Put these JavaScript execution steps in the correct order:",
                items: [
                    "Parse the code",
                    "Check for syntax errors", 
                    "Create execution context",
                    "Execute the code"
                ],
                hint: "Consider what happens from the moment JavaScript code is loaded until it runs."
            },
            {
                time: 300,
                type: "multiple_choice",
                question: "Which of these is NOT a JavaScript data type?",
                options: ["String", "Boolean", "Integer", "Number"],
                correct: 2,
                hint: "JavaScript has a 'Number' type that handles both integers and decimals."
            }
        ]
    },
    
    "python-intro": {
        id: "python-intro",
        title: "Python for Beginners",
        videoId: "kqtD5dpn9C8", // Example YouTube video ID
        description: "Introduction to Python programming language",
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

// Function to get all videos
function getAllVideos() {
    return Object.values(videoDatabase);
}

// Function to get a specific video by ID
function getVideoById(id) {
    return videoDatabase[id] || null;
}

// Function to get video thumbnail URL
function getVideoThumbnail(videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}