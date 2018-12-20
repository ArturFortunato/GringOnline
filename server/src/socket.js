const ChatController = require('./Controllers/ChatController')

module.exports = (io) => {
  io.of('/chat').on('connection', (socket) => {
    ChatController(socket,io);
  })

  /*
  io.of('/').on('connection') ...

  io.of('/game').on('connection') ...
  */
}
