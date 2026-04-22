const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Home Page
  if (req.method === "GET" && req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Error loading page");
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  // Save user data
  else if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const formData = new URLSearchParams(body);

      const name = formData.get("name");
      const email = formData.get("email");

      const userData = `Name: ${name}, Email: ${email}\n`;

      fs.appendFile("users.txt", userData, err => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          return res.end("Error saving user data");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
          <h2>User Data Saved Successfully!</h2>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <a href="/">Go Back</a>
        `);
      });
    });
  }

  // 404
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});