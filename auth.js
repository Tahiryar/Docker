const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

// 🟢 Login Route (JWT Generate Karega)
router.post("/login", (req, res) => {
  const user = { id: 1, username: req.body.username };
  const token = jwt.sign(user, "secret_key", { expiresIn: "1h" });
  res.json({ token });
});

// 🟢 Middleware: Token Verify Karega
function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ error: "Access Denied" });

  jwt.verify(token, "secret_key", (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid Token" });
    req.user = user;
    next();
  });
}

// 🟢 Protected Route Example
router.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: "Welcome to Dashboard!" });
});

module.exports = router;
