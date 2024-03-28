// import WebSocket from "ws";

// const PORT = 8080;

// const server = new WebSocket.Server({ port: PORT });

// server.on("connection", (ws: WebSocket) => {
//   console.log(
//     `Client connected. Total connected clients: ${server.clients.size}`
//   );

//   ws.on("message", (message: string) => {
//     console.log(`Received message: ${message}`);
//     ws.send(`Echo: ${message}`);
//   });

//   ws.on("close", () => {
//     console.log(
//       `Client disconnected. Total connected clients: ${server.clients.size}`
//     );
//   });
// });

// server.on("error", (error: Error) => {
//   console.error(`WebSocket server error: ${error}`);
// });

// console.log(`WebSocket server started on port ${PORT}`);

// import express from "express";
// import { createServer } from "http";
// import { Server } from "socket.io";
// import cors from "cors";

// const app = express();
// app.use(cors());

// const server = createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: ["*"],
//   },
// });

// let connections = 0;

// io.on("connection", (socket) => {
//   connections++;
//   console.log(socket.id, connections);
// });
// app.listen(3000, () => {
//   console.log(`Server started ----> ${3000}`);
// });

import express from 'express';
import http from 'http';
import socketIO from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new socketIO.Server(server);

// Serve static files from the public directory
app.use(express.static('public'));

// Socket.io connection event
io.on('connection', (socket: socketIO.Socket) => {
    console.log('A user connected');

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
