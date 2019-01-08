<template>
  <div ref="board" class="top full">
    <h1> {{msg}}</h1>
    <button v-on:click="sendget">Connect to server(Get)</button>
    <button v-on:click="sendpost">Connect to server(Post)</button>
    <div class="mt-3">
      <input type="text" v-model="username" placeholder="Username" class="px-2 border-white">
      <input type="text" v-model="inputContent" placeholder="Message" class="px-2 border-white">
      <v-btn v-on:click="sendMessage(username, inputContent)">Send</v-btn>
      <p v-for="message in messages" v-bind:key="message.id">{{ message.username }}: {{ message.message }}</p>
    </div>

  </div>
</template>

<script>
import Deck from 'deck-of-cards'
import 'deck-of-cards/example/example.css'
import api from '../Api/api'
import io from 'socket.io-client'
import config from '@/config'


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Gringo Online',
      socket: null,
      messages: [],
      inputContent: "",
      username: ""
    }
  },
  methods: {
    //Test function
    async sendget () {
      const response = await api().get('/');
      this.msg = response.data.message;
    },

    async sendpost () {
      //Test function
      const response = await api().post('/', {message : 'hiya'})
      this.msg = response.data.message
    },
    //Connects to gamae socket
    async connectSocket () {
      console.log("connecting to "+(config.ServerURL+"/chat"))
      this.socket = io(config.ServerURL+"/chat")
      this.socket.on('newchatmessage', this.addMessage)
      console.log("connection stablished")
    },
    //Adds message to message array
    addMessage(message) {
      this.messages.push(
        {
          username: message.username,
          message: message.message,
          id: this.messages.length
        }
      )
    },
    //Sends message to everyone on the game
    sendMessage (username, message) {
      console.log("Sent")
      this.socket.json.emit('chatmessage', {message: message, username: username})
    }
  },
  mounted: function() {
    var deck = Deck()
    deck.mount(this.$refs.board)

    this.connectSocket()

    /*deck.cards.forEach(function (card, i) {
      card.setSide(Math.random() < 0.5 ? 'front' : 'back');
      card.animateTo({
        delay: 1000 + i * 2, // wait 1 second + i * 2 ms
        duration: 500,
        ease: 'quartOut',

        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2
      });
    });*/
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.red1
{
  border: 1px solid red;
}

.border-white
{
  border: 1px solid white;
}

.full
{
  width: 100%;
  height: 100vh;
}

</style>
