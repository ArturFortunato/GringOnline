
module.exports = (app) => {
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
}
