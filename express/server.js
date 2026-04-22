const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(
  session({
    secret: "mySecretKey123",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 10 // 10 minutes
    }
  })
);

// Serve static files
app.use(express.static("public"));

// Home Page
app.get("/", (req, res) => {
  if (req.session.user) {
    res.sendFile(path.join(__dirname, "public", "home.html"));
  } else {
    res.redirect("/login.html");
  }
});

// Login Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Dummy credentials
  if (username === "admin" && password === "1234") {
    req.session.user = username; // Save user in session
    res.redirect("/");
  } else {
    res.send(`
      <h2>Invalid username or password</h2>
      <a href="/login.html">Try Again</a>
    `);
  }
});

// Protected Dashboard Page
app.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.sendFile(path.join(__dirname, "public", "dashboard.html"));
  } else {
    res.redirect("/login.html");
  }
});

// Logout Route
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login.html");
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});