import ChatControler from '@/Controllers/ChatControler.js'

module.exports = (io) => {
  io.of('/chat').on('connection', ChatControler)
}
