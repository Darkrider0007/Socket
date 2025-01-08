import readline from "readline";
import { io } from "socket.io-client";

// Connect to the Server
const socket = io("http://localhost:3000");

// Setup Terminal Input/Output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Handle User Input
const getInput = () => {
  rl.question('Enter message (type "exit" to quit): ', (input) => {
    if (input.toLowerCase() === "exit") {
      socket.disconnect(); // Disconnect the client
      rl.close();
      process.exit(0); // Exit process
    } else {
      socket.emit("message", input.toLowerCase()); // Send lowercase message
    }
  });
};

// Handle Server Responses
socket.on("response", (data) => {
  console.log(data); // Print the server's response
  getInput(); // Prompt for more input
});

// Connection Events
socket.on("connect", () => {
  console.log("Connected to server.");
  console.log(`Your Client ID: ${socket.id}`); // Display Client ID
  getInput();
});

socket.on("disconnect", () => {
  console.log("Disconnected from server.");
});
