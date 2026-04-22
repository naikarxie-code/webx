const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.static(__dirname));

app.post("/analyze", upload.single("file"), (req, res) => {
  const filePath = req.file.path;

  let words = 0;
  let lines = 0;
  let characters = 0;
  let leftover = "";

  const stream = fs.createReadStream(filePath, {
    encoding: "utf8",
    highWaterMark: 64 * 1024
  });

  stream.on("data", (chunk) => {
    chunk = leftover + chunk;

    characters += chunk.length;

    const splitLines = chunk.split("\n");
    lines += splitLines.length - 1;

    leftover = splitLines.pop();

    const text = splitLines.join(" ");
    if (text.trim() !== "") {
      words += text.trim().split(/\s+/).length;
    }
  });

  stream.on("end", () => {
    if (leftover.trim() !== "") {
      words += leftover.trim().split(/\s+/).length;
      lines += 1;
    }

    fs.unlinkSync(filePath);

    res.json({
      words,
      lines,
      characters
    });
  });

  stream.on("error", (err) => {
    res.status(500).json({ error: err.message });
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});