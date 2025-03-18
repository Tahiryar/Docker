const http = require("http").createServer();
const io = require("socket.io")(http);

io.on("connection", socket => {
  console.log("New user connected");

  socket.on("message", data => {
    io.emit("message", data); // Sabhi clients ko message bheje
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Server Start
http.listen(4000, () => {
  console.log("Chat Server Running on port 4000 🚀");
});

module.exports = http;
