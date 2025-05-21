import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  setInterval(() => {
    socket.send("The current price of solana " + Math.random());
  }, 500);

  socket.on("message", (e) => {
    console.log(e.toString());
  });
});
