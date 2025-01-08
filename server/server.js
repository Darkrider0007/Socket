import express from "express";
import http from "http";
import { Server } from "socket.io";

// Configuration
const PORT = 3000;

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Handle client connections
io.on("connection", (socket) => {
  console.log("A client connected");

  // Handle messages from the client
  socket.on("message", (data) => {
    console.log(`Received from client: ${data}`);
    const uppercaseMessage = data.toUpperCase(); // Convert to uppercase
    socket.emit("response", uppercaseMessage); // Send response
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
