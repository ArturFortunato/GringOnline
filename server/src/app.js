const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const PORT = 8081

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({
    message: "Get complete"
  });
})

app.post('/', (req, res) => {
  console.log(req.body.message)
  res.send({
    message: "Post complete"
  });
})

app.post('/Game', (req, res) => {
    res.send({
        message: "Hello " + req.body.name + "!!! Welcome!"
    })
})

io.on('connection', function(socket) {
    console.log("User connected")
    socket.on('disconnect', () => {
        console.log("User disconnected")
    })
    socket.on('chatmessage', function(message) {
        io.emit('newchatmessage', message)
    })

})

http.listen(process.env.PORT || PORT, function() {
    console.log("Listening on port " + (process.env.PORT || PORT))
})
