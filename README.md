# Noto - Note Taking App

A clean and modern note-taking web application that lets you create, pin, and archive notes.

## Features

- Create notes with title and content
- Pin important notes to the top
- Archive notes for later reference 
- Local storage persistence
- Responsive design
- Clean and minimal UI

## Tech Stack

- Vanilla JavaScript
- CSS3 
- HTML5
- LocalStorage API

## Key Functionality

- Add new notes with title and content
- Pin/unpin notes to keep important ones easily accessible
- Archive notes to declutter main view
- Delete unwanted notes
- Notes persist across browser sessions
- Separate archive view for archived notes
- Responsive layout that works on all screen sizes

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Start creating notes!

## Project Structure

```
📦 Noto
 ┣ 📜 index.html
 ┣ 📜 archive.html
 ┣ 📂 js
 ┃ ┣ 📜 main.js
 ┃ ┣ 📜 app.js
 ┃ ┗ 📜 archive.js
 ┗ 📂 css
   ┣ 📜 main.css
   ┗ 📜 utility.css
```

- `index.html` - Main notes view
- `archive.html` - Archived notes view
- `js/main.js` - Core note functionality
- `js/app.js` - Note rendering logic
- `js/archive.js` - Archive page functionality
- `css/main.css` - Main styles
- `css/utility.css` - Utility classes and animations