import express from "express";
import { Server } from "socket.io";

// Create Express App
const app = express();
const PORT = 3000;

// Start Server with Express
const server = app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Attach Socket.IO to the server
const io = new Server(server);

// Handle Client Connections
io.on("connection", (socket) => {
  const clientId = socket.id; // Assign unique Client ID (Socket ID)
  console.log(`Client Connected: ${clientId}`);

  // Handle Incoming Messages
  socket.on("message", (data) => {
    console.log(`Received from Client (${clientId}): ${data}`);
    const uppercaseMessage = data.toUpperCase(); // Process message
    socket.emit("response", `Client ${clientId}: ${uppercaseMessage}`); // Respond with ID
  });

  // Handle Client Disconnect
  socket.on("disconnect", () => {
    console.log(`Client Disconnected: ${clientId}`);
  });
});

// Example Route
app.get("/", (req, res) => {
  res.send("Socket.IO Server is Running!");
});
