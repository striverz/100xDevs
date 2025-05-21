"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    setInterval(() => {
        socket.send("The current price of solana " + Math.random());
    }, 500);
    socket.on("message", (e) => {
        console.log(e.toString());
    });
});
