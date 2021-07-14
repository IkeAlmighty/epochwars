const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*", //TODO set production value
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("connection established with socket");
});

httpServer.listen(8080);
