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
require('./socket')(io)

server.listen(process.env.PORT || PORT, function() {
    console.log("Listening on port " + (process.env.PORT || PORT))
})
