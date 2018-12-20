module.exports = (socket,io) =>{
  console.log("User Connected")

  socket.on('disconnect', () => {
    console.log("User disconnected")
  })

  socket.on('chatmessage', function(message) {
    console.log("Received a chat message: "+message)
    io.of('chat').emit('newchatmessage', message)
  })

}
