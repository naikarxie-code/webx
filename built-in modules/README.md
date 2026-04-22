# Node.js Built-in Modules Demo

This project demonstrates how to build a functional web server using only Node.js core modules (`http`, `fs`, `path`). It showcases basic routing, file serving, and handling form submissions without external dependencies like Express.

## Features

- **Native HTTP Server**: Uses the `http` module to handle requests and responses.
- **Static File Serving**: Serves `index.html` using the `fs` and `path` modules.
- **Form Data Handling**: Processes POST requests to capture user data (Name and Email).
- **Persistent Storage**: Saves submitted user information into a local `users.txt` file.
- **Dynamic Response**: Returns a success message with the submitted details directly from the server.

## Files

- `server.js`: The main entry point containing the server logic and routing.
- `index.html`: The frontend form for user input.
- `users.txt`: (Generated) Stores the captured user data.

## Running the Project

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Open your terminal in this directory.
3. Run the server:
   ```bash
   node server.js
   ```
4. Visit `http://localhost:3000` in your browser.
