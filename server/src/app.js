const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
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

app.listen(process.env.PORT || PORT)
