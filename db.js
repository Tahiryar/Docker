const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydatabase"
});

// Database Connect Karna
db.connect(err => {
  if (err) {
    console.error("Database Connection Failed ❌: " + err.message);
    return;
  }
  console.log("Database Connected! ✅");
});

module.exports = db; // Isko export kar rahe hain
