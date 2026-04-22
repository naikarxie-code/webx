const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const Employee = require("./models/Employee");

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/employeesDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// GET all employees
app.get("/employees", async (req, res) => {
  const data = await Employee.find();
  res.json(data);
});

// POST add employee
app.post("/employees", async (req, res) => {
  const emp = new Employee(req.body);
  await emp.save();
  res.json(emp);
});

// PUT update employee
app.put("/employees/:id", async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE employee
app.delete("/employees/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});