import readline from "readline";
import { io } from "socket.io-client";

// Connect to the server
const socket = io("http://localhost:3000");

// Setup terminal input/output stream
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to get user input
const getInput = () => {
  rl.question('Enter a message (type "exit" to quit): ', (input) => {
    if (input.toLowerCase() === "exit") {
      socket.disconnect(); // Close connection
      rl.close(); // Close input
      process.exit(0); // Exit process
    } else {
      const lowercaseMessage = input.toLowerCase(); // Convert to lowercase
      socket.emit("message", lowercaseMessage); // Send to server
    }
  });
};

// Listen for server responses
socket.on("response", (data) => {
  console.log(`Server response: ${data}`);
  getInput(); // Continue input
});

// Handle connection
socket.on("connect", () => {
  console.log("Connected to server.");
  getInput(); // Start input loop
});

socket.on("disconnect", () => {
  console.log("Disconnected from server.");
});
