# **Client-Server Application Documentation**  

### **Purpose**  

This documentation explains how another user can **set up**, **run**, and **use** the **client-server application** built with **Node.js**, **Socket.IO**, and **Nodemon**.

---

## **1. Prerequisites**  

### **System Requirements:**  

- **Node.js** (version 14 or later)  
- **NPM** (Node Package Manager)  

### **Check if Node.js and npm are installed:**  

```bash
node -v
npm -v
```

### **Install Node.js if not available:**  

- Download and install from [Node.js Official Website](https://nodejs.org/)

---

## **2. Download or Clone the Project**

### **Option 1: Clone from GitHub**  

```bash
git clone <repository-url>
cd socket-app
```

### **Option 2: Copy Project Files**  

- Copy the complete project folder and paste it into your local machine.

---

## **3. Install Dependencies**  

Navigate to the project directory:  

```bash
cd socket-app
```

Run the following command to install required dependencies:  

```bash
npm install
```

---

## **4. Run the Server**  

### **Start the Server:**

```bash
npm run start-server
```

### **Output:**

```
Server is running at http://localhost:3000
```

---

## **5. Run the Client**

### **Start the Client:**

Open a **new terminal** and run:  

```bash
npm run start-client
```

### **Output:**

```
Connected to server.
Enter a message (type "exit" to quit): 
```

---

## **6. Testing the Application**

### **Example Interaction:**

1. Client Input:

   ```
   Enter a message (type "exit" to quit): hello
   ```

2. Server Response:

   ```
   Server response: HELLO
   ```

3. Exit Command:

   ```
   Enter a message (type "exit" to quit): exit
   Disconnected from server.
   ```

---

## **7. Key Functionalities**

### **Server (server/server.js):**

- Accepts connections from clients.  
- Receives messages from the client.  
- Converts incoming messages to **uppercase** and sends them back.  
- Logs connections and disconnections.  

### **Client (client/client.js):**

- Connects to the server.  
- Accepts user input and converts it to **lowercase** before sending.  
- Displays server responses in **uppercase**.  
- Allows the user to exit the session gracefully.  

---

## **8. Scripts for Development**

### **Scripts in `package.json`:**

```json
"scripts": {
  "start-server": "nodemon server/server.js",
  "start-client": "nodemon client/client.js"
}
```

### **Commands:**

- **Start Server with Hot Reloading:**

  ```bash
  npm run start-server
  ```

- **Start Client with Hot Reloading:**

  ```bash
  npm run start-client
  ```

---

## **9. Troubleshooting**

### **Port Already in Use:**

- Change the port number in `server.js` (default: 3000).  

### **Socket Connection Errors:**

- Ensure the server is running before starting the client.  

### **Dependencies Not Found:**

- Reinstall dependencies:

  ```bash
  npm install
  ```

### **Module Errors (import/export):**

- Make sure `"type": "module"` is set in `package.json`.

---

## **10. Notes**

- **Multiple Clients:**  
  You can open multiple terminals and start multiple clients to test simultaneous connections.  
- **Customization:**  
  Update the server to handle different types of requests, process data, or integrate with databases.  
- **Production Deployment:**  
  For production use, replace **Nodemon** with **PM2** or similar process managers.

---

This documentation ensures any user can set up and run the project easily while understanding its core functionalities.
