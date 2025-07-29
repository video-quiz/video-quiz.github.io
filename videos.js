// Video database with question banks
const videoDatabase = {
    "sample-javascript": {
        id: "sample-javascript",
        title: "JavaScript Basics Tutorial",
        videoId: "PkZNo7MFNFg", // Example YouTube video ID
        description: "Learn the fundamentals of JavaScript programming",
        duration: 1200, // in seconds
        thumbnail: "https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
        questions: [
            {
                time: 30,
                type: "multiple_choice",
                question: "What is JavaScript primarily used for?",
                options: ["Web development", "Database management", "Operating systems"],
                correct: 0
            },
            {
                time: 120,
                type: "free_form",
                question: "What keyword is used to declare a variable in modern JavaScript?",
                answer: "let"
            },
            {
                time: 240,
                type: "multiple_choice",
                question: "Which of these is NOT a JavaScript data type?",
                options: ["String", "Boolean", "Integer", "Number"],
                correct: 2
            }
        ]
    },
    
    "python-intro": {
        id: "python-intro",
        title: "Python for Beginners",
        videoId: "kqtD5dpn9C8", // Example YouTube video ID
        description: "Introduction to Python programming language",
        duration: 1800,
        thumbnail: "https://img.youtube.com/vi/kqtD5dpn9C8/maxresdefault.jpg",
        questions: [
            {
                time: 45,
                type: "multiple_choice",
                question: "Python is known for its:",
                options: ["Complexity", "Readability", "Speed"],
                correct: 1
            },
            {
                time: 180,
                type: "free_form",
                question: "What function is used to output text in Python?",
                answer: "print"
            },
            {
                time: 300,
                type: "multiple_choice",
                question: "Python uses which character for indentation?",
                options: ["Tabs", "Spaces", "Both tabs and spaces"],
                correct: 2
            }
        ]
    },
    
    "html-css-basics": {
        id: "html-css-basics",
        title: "HTML & CSS Fundamentals",
        videoId: "UB1O30fR-EE", // Example YouTube video ID
        description: "Learn the building blocks of web pages",
        duration: 2400,
        thumbnail: "https://img.youtube.com/vi/UB1O30fR-EE/maxresdefault.jpg",
        questions: [
            {
                time: 60,
                type: "multiple_choice",
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
                correct: 0
            },
            {
                time: 180,
                type: "free_form",
                question: "Which tag is used to create a paragraph in HTML?",
                answer: "p"
            },
            {
                time: 360,
                type: "multiple_choice",
                question: "CSS is used for:",
                options: ["Content structure", "Styling and layout", "JavaScript functionality"],
                correct: 1
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