const ChatController = require('./Controllers/ChatController')

module.exports = (io) => {
  io.of('/chat').on('connection', (socket) => {
    console.log("Chat User Connected")

    socket.on('disconnect', () => {
      console.log("Chat User disconnected")
    })
    ChatController(socket,io);
  })

  /*
  io.of('/').on('connection') ...

  io.of('/game').on('connection') ...
  */
}
