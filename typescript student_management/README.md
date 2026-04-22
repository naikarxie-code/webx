# Student Management System

A simple web application to manage students and calculate their grades based on marks. Built with TypeScript, HTML, and CSS.

## Features
- Add student by name and roll number.
- Enter multiple marks (comma-separated).
- Automatically calculates average marks.
- Assigns grades based on performance:
  - **Grade A**: Average >= 75
  - **Grade B**: Average >= 50
  - **Grade C**: Average < 50

## Project Structure
- `index.html`: The main user interface.
- `app.ts`: TypeScript file containing the logic (needs compilation).
- `style.css`: Styles for the application.

## How to Run

### Prerequisites
1. **Node.js**: Ensure you have Node.js installed.
2. **TypeScript Compiler**: Install TypeScript globally if you haven't already:
   ```bash
   npm install -g typescript
   ```

### Steps to Run

1. **Compile TypeScript to JavaScript**:
   The `index.html` file expects a compiled `app.js` file. Run the following command in the `student_management` directory:
   ```bash
   tsc app.ts
   ```
   This will generate an `app.js` file in the same directory.

2. **Open the Application**:
   - **Recommended**: Right-click `index.html` and select **"Open with Live Server"** (if using VS Code) for the best experience.
   - Alternatively, open `index.html` directly in any modern web browser.

## Technical Details
- The project uses TypeScript classes and inheritance.
- The `Student` class handles core data and average calculation.
- The `Result` class extends `Student` to generate HTML representation and determine grades.
