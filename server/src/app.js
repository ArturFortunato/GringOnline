const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const PORT = 8081

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

io.of('/chat').on('connection', function(socket) {
  console.log("User Connected")

  socket.on('disconnect', () => {
    console.log("User disconnected")
  })
  socket.on('chatmessage', function(message) {
    console.log("Received a chat message: "+message)
    io.of('chat').emit('newchatmessage', message)
  })

})

server.listen(process.env.PORT || PORT, function() {
    console.log("Listening on port " + (process.env.PORT || PORT))
})
