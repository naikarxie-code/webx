# Express Login System

This is a simple Express.js application demonstrating a session-based login system using `express-session`.

## Features

- Session-based authentication
- Protected routes (Home, Dashboard)
- Static file serving
- Logout functionality

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Clone or download this repository.
2. Navigate to the project directory:
   ```bash
   cd express
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node server.js
   ```
2. Open your browser and navigate to `http://localhost:3000`.
3. Login using the following credentials:
   - **Username**: `admin`
   - **Password**: `1234`

## Project Structure

- `server.js`: Main application file containing the server logic and session configuration.
- `public/`: Directory containing static HTML and CSS files.
  - `login.html`: Login page.
  - `home.html`: Protected home page.
  - `dashboard.html`: Protected dashboard page.
  - `style.css`: Basic styling for the application.

## Technologies Used

- [Express.js](https://expressjs.com/)
- [express-session](https://www.npmjs.com/package/express-session)
- HTML/CSS
