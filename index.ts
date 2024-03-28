import WebSocket from "ws";

const PORT = 8080;

const server = new WebSocket.Server({ port: PORT });

server.on("connection", (ws: WebSocket) => {
  console.log(
    `Client connected. Total connected clients: ${server.clients.size}`
  );

  ws.on("message", (message: string) => {
    console.log(`Received message: ${message}`);
    ws.send(`Echo: ${message}`);
  });

  ws.on("close", () => {
    console.log(
      `Client disconnected. Total connected clients: ${server.clients.size}`
    );
  });
});

server.on("error", (error: Error) => {
  console.error(`WebSocket server error: ${error}`);
});

console.log(`WebSocket server started on port ${PORT}`);

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

// io.on("connection", (socket) => {
//   console.log(socket.id);
// });
// app.listen(3000, () => {
//   console.log(`Server started ----> ${3000}`);
// });
