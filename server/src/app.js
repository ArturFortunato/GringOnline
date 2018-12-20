const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

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

/*app.get('/game', (req, res) => {

    res.send({})
}) */

app.listen(process.env.PORT || 8080)
