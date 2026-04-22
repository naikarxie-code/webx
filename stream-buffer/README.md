# Large Text File Analyzer (Stream-Buffer)

A high-performance text file analyzer built with Node.js that uses **Streams** to process large files efficiently without overloading memory. It calculates the total number of words, lines, and characters in any `.txt` file.

## Features
- **Memory Efficient**: Processes files in chunks using Node.js `fs.createReadStream`.
- **Fast Analysis**: Handles large text files quickly.
- **Real-time Processing**: Counts words, lines, and characters on the fly.
- **Simple UI**: Clean and minimal interface for uploading and analyzing files.

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

## How to Run

### 1. Initialize the Project
First, navigate to the `stream-buffer` folder and create a `package.json` file:
```bash
npm init -y
```
This will create the base configuration file for your project.

### 2. Install Required Packages
Install the necessary dependencies (Express and Multer):
```bash
npm install express multer
```

### 3. Project Structure
After installation, your folder should look like this:
```
stream-buffer/
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
├── package-lock.json
├── node_modules/
└── uploads/
```

### 4. Start the Server
Run the application using Node.js:
```bash
node server.js
```

### 5. Open the Application
Open your web browser and navigate to:
```
http://localhost:3000
```

## Technologies Used
- **Backend**: Node.js, Express, Multer
- **Frontend**: HTML5, Vanilla CSS, JavaScript (Fetch API)
- **Core Concept**: Node.js Streams & Buffers
