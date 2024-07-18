if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require('express')
const app = express()
const http = require('http')
const { Server } = require('socket.io')
const {User} = require('./models')
// const { errorHandler } = require('./middleware/errorHandle')
const port = process.env.PORT || 3000;
const router = express.Router()
var cors = require('cors')
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:5173", "https://onebid-1c19d.web.app"]
  }
})

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/", router)

io.on("connection", async (socket) => {

  let data = await User.findAll()
  // console.log(data);
  socket.emit(`message`, data)
  // console.log(data);
  socket.on('count', async (args) => {
    try {
      console.log(args, "ini data dari count");
      let data = await User.create(args)

      // User.findONe( max latestBid column )

      // if lebih kecil -> socket.emit("result-failed", "amount harus lebih besar dari latestBid")
      io.emit('result', data);
      // io.emit("product-" +args.id)
      // console.log(args);

    } catch (error) {
      console.log(error);
    }

  });

});

// });

// io.listen(3000);
httpServer.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`)
})

module.exports = app;