
//TODOimport config from '@/config'
const jwt = require('jsonwebtoken')

module.exports = {
  async login (req,res) {
    token = jwt.sign({user:req.body.user}, "javardice")
    res.send({
      "user": req.body.user,
      "token": token
    })
  },

  verify (token, user){
    try{
      if (jwt.verify(token,"javardice").user == user)
        return true;
    } catch (err) {
      console.log("verify error: "+err)
      return false
    }
  }
}
