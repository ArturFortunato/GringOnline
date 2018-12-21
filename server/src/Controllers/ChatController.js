const AuthenticationController = require('./AuthenticationController')


module.exports = (socket,io) => {
  socket.on('chatmessage', function(payload) {
    console.log(payload)
    console.log("Received a chat message: "+ payload.message+" from "+payload.user)
    var auth = AuthenticationController.verify(payload.token,payload.user);
    if (auth){
      console.log("Message has been authenticated")
      io.of('chat').emit('newchatmessage', payload.message)
    } else {
      console.log("Message hasnt been authenticated")
    }
  })
}
