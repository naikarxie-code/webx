# Employee Management System (Full Stack)

A simple yet powerful full-stack application to manage employee records. This project features a robust Express backend, a MongoDB database for persistent storage, and a dynamic frontend built with HTML, CSS, and Vanilla JavaScript.

## 🚀 Features

- **Add Employee**: Create new employee records with name, position, and salary.
- **View Employees**: Display a list of all employees in a clean table format.
- **Update Employee**: Edit existing employee details on the fly.
- **Delete Employee**: Remove records from the system with a single click.
- **Responsive UI**: A modern and clean interface that works across devices.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **API**: RESTful architecture

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally on default port 27017)

## ⚙️ Installation & Setup

1. **Clone or Navigate to the project directory:**
   ```bash
   cd "Full stack"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Ensure MongoDB is running:**
   Make sure your local MongoDB service is started. The application connects to:
   `mongodb://127.0.0.1:27017/employeesDB`

## 🏃 How to Run

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Access the application:**
   Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```text
Full stack/
├── models/           # Mongoose schemas (Employee.js)
├── node_modules/     # Project dependencies
├── public/           # Frontend assets
│   ├── index.html    # Main UI
│   ├── style.css     # UI styling
│   └── script.js     # Frontend logic & API calls
├── package.json      # Scripts and dependencies
└── server.js         # Express server & API routes
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/employees` | Fetch all employees |
| **POST** | `/employees` | Create a new employee |
| **PUT** | `/employees/:id` | Update an employee record |
| **DELETE** | `/employees/:id` | Remove an employee record |

---
*Created with ❤️ for managing employee data.*
