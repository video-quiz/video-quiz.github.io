# YouTube Video Quiz System

An interactive web application that allows users to watch YouTube videos with embedded quiz questions that appear at specific time markers. Perfect for educational content, training materials, and interactive learning experiences.

## Features

### 🎥 Video Integration
- **YouTube iframe API** integration for seamless video playback
- **Custom video timeline** with visual progress tracking
- **Question markers** on timeline showing quiz locations
- **Clickable timeline markers** to revisit questions

### 📚 Multiple Question Types
- **Multiple Choice** - Select from predefined options
- **Free Form** - Text input answers with flexible matching
- **Drag & Drop** - Interactive matching exercises with visual feedback
- **Ordering/Sequencing** - Arrange items in correct order with drag handles

### 💡 Learning Support
- **Hint System** - Optional hints for all question types with usage tracking
- **Multiple Attempts** - Up to 3 attempts per question with retry logic
- **Visual Feedback** - Color-coded responses (green=correct, red=incorrect, grey=untested)
- **Progress Tracking** - Real-time progress indicators and completion status

### 💾 Data Management
- **Local Storage** - Persistent per-video progress and answers
- **Video Database** - Centralized question banks with easy management
- **Reset Functionality** - Per-video quiz reset capabilities
- **Answer History** - Track all answered questions with attempt counts

### 🎨 User Experience
- **Responsive Design** - Works on desktop and mobile devices
- **Video Selection Interface** - Thumbnail grid with progress badges
- **Randomized Content** - Shuffled drag-drop items for varied experience
- **Interactive Elements** - Bidirectional drag-drop with smart feedback

## Quick Start

1. **Clone or Download** the project files
2. **Open `index.html`** in a modern web browser
3. **Select a video** from the main interface
4. **Watch and interact** with embedded quiz questions

No server setup required - runs entirely in the browser!

## File Structure

```
video_quiz/
├── index.html          # Main application file (HTML + CSS + JavaScript)
├── videos.js          # Video database with question banks
└── README.md          # This documentation file
```

## Question Types Guide

### Multiple Choice Questions
```javascript
{
    time: 30,
    type: "multiple_choice",
    question: "What is JavaScript primarily used for?",
    options: ["Web development", "Database management", "Operating systems"],
    correct: 0,  // Index of correct answer
    hint: "Think about what runs in web browsers..."
}
```

### Free Form Questions
```javascript
{
    time: 120,
    type: "free_form",
    question: "What keyword declares variables in modern JavaScript?",
    answer: "let",  // Accepts partial matches
    hint: "Introduced in ES6, preferred over 'var'..."
}
```

### Drag & Drop Questions
```javascript
{
    time: 180,
    type: "drag_drop",
    question: "Match each concept with its description:",
    pairs: [
        { left: "Variable", right: "Stores data values" },
        { left: "Function", right: "Reusable block of code" },
        { left: "Array", right: "Ordered list of items" }
    ],
    hint: "Think about fundamental programming concepts..."
}
```

### Ordering Questions
```javascript
{
    time: 240,
    type: "ordering",
    question: "Put these steps in correct execution order:",
    items: [
        "Parse the code",
        "Check for syntax errors",
        "Create execution context",
        "Execute the code"
    ],
    hint: "Consider the JavaScript engine's process..."
}
```

## Adding New Videos

### 1. Edit videos.js
Add new video entries to the `videoDatabase` object:

```javascript
"your-video-id": {
    id: "your-video-id",
    title: "Your Video Title",
    videoId: "YOUTUBE_VIDEO_ID",  // From YouTube URL
    description: "Brief description of the video content",
    questions: [
        // Add your questions here using the formats above
    ]
}
```

### 2. Get YouTube Video ID
From a YouTube URL like `https://www.youtube.com/watch?v=ABC123XYZ`, the video ID is `ABC123XYZ`.

### 3. Define Questions
- Use `time` property for when questions appear (in seconds)
- Include helpful `hint` text for better learning experience
- Test thoroughly to ensure proper timing

## Customization Options

### Styling
The application uses embedded CSS that can be modified in `index.html`:
- **Color schemes** - Update CSS custom properties
- **Layout adjustments** - Modify flexbox and grid layouts
- **Question styling** - Customize `.drag-item`, `.drop-zone`, etc.

### Behavior Settings
Key variables in the JavaScript section:
```javascript
const maxAttempts = 3;  // Maximum attempts per question
// Modify other constants as needed
```

### Question Timing
- Questions pause video automatically
- Users must answer to continue
- Timeline shows visual markers for all questions

## Browser Compatibility

**Supported Browsers:**
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

**Required Features:**
- ES6 JavaScript support
- HTML5 drag and drop API
- CSS Flexbox and Grid
- Local Storage API

## Development Notes

### Architecture
- **Single Page Application** - All functionality in one HTML file
- **YouTube iframe API** - Official Google API for video control
- **Local Storage** - Client-side data persistence
- **Event-driven** - Responsive to user interactions and video events

### Key Functions
- `showQuestion()` - Displays questions and pauses video
- `submitAnswer()` - Validates responses and provides feedback
- `createDragDropQuestion()` - Builds interactive drag-drop interface
- `createOrderingQuestion()` - Creates sortable item lists

### Data Flow
1. Video selection loads question data
2. Video plays with timeline tracking
3. Questions trigger at specified times
4. User responses are validated and stored
5. Progress is saved to localStorage

## Educational Use Cases

### Perfect For:
- **Online Courses** - Interactive video lessons
- **Training Programs** - Corporate or educational training
- **Language Learning** - Comprehension and vocabulary practice
- **Technical Tutorials** - Programming and software training
- **Assessment Tools** - Video-based testing and evaluation

### Learning Benefits:
- **Active Engagement** - Requires interaction vs passive watching
- **Immediate Feedback** - Instant validation and correction
- **Progress Tracking** - Visual progress indicators
- **Flexible Learning** - Hint system supports different skill levels
- **Retention Testing** - Multiple question types test understanding

## Troubleshooting

### Common Issues:

**Questions not appearing:**
- Check video timing in `videos.js`
- Verify YouTube video ID is correct
- Ensure browser supports required features

**Drag-drop not working:**
- Check browser support for HTML5 drag-drop
- Verify `pairs` structure in question data
- Clear browser cache and refresh

**Progress not saving:**
- Check if localStorage is enabled
- Verify browser supports localStorage API
- Check for private/incognito mode restrictions

**Video not loading:**
- Verify YouTube video is publicly accessible
- Check internet connection
- Ensure YouTube iframe API is loading

### Debug Mode:
Open browser developer tools (F12) to see console messages and debug information.

## Contributing

### Adding Features:
1. Fork or copy the project
2. Modify `index.html` for new functionality
3. Update `videos.js` with sample content
4. Test across different browsers
5. Update this README with new documentation

### Best Practices:
- Keep questions concise and clear
- Test timing thoroughly with actual video content
- Provide helpful hints without giving away answers
- Maintain consistent styling and user experience

## License

This project is open source and available under the MIT License. Feel free to use, modify, and distribute for educational and commercial purposes.

## Credits

- Built with vanilla JavaScript for maximum compatibility
- Uses YouTube iframe API for video integration
- Responsive design with CSS Flexbox and Grid
- HTML5 drag-drop API for interactive elements

---

**Version:** 1.0  
**Last Updated:** 2025  
**Compatibility:** Modern browsers with ES6 support

For questions, issues, or contributions, please refer to the project repository or contact the development team.