const express = require("express");
const db = require("./db");
const app = express();

app.use(express.json()); // JSON data handle karne ke liye

let users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Aisha" }
];

// GET: Sabhi users ka data fetch karo
app.get("/users", (req, res) => {
  res.json(users);
});

// POST: Naya user add karo
app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// DELETE: Kisi user ko delete karo
app.delete("/users/:id", (req, res) => {
  users = users.filter(user => user.id !== parseInt(req.params.id));
  res.json({ message: "User deleted!" });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
