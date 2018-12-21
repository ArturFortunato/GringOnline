<template>
  <div ref="board" class="red top full">
    <h1> {{msg}}</h1>
    <button v-on:click="sendget">Connect to server(Get)</button>
    <button v-on:click="sendpost">Connect to server(Post)</button>
    <br>
    <div>
      <input type="text" v-model="username" placeholder="Username">
      <button v-on:click="connectSocket">Connect socket.io</button>
    </div
    <div>
      <input type="text" v-model="inputContent" placeholder="Message">
      <button v-on:click="submitMessage(inputContent)">Send</button>
      <p v-for="message in messages" v-bind:key="message.id"> {{ message.message }}</p>
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
      msg: 'Welcome to Your Vue.js App',
      socket: null,
      messages: [],
      inputContent: "",
      username: "",
      usertoken: ""
    }
  },
  methods: {
    async sendget () {
      const response = await api().get('/');
      this.msg = response.data.message;
    },

    async sendpost () {
      const response = await api().post('/Login', {user : this.username});
      console.log(response);
      this.usertoken = response.data.token;
    },
    async connectSocket () {
      console.log("connecting to "+(config.ServerURL+"/chat"))
      this.socket = io(config.ServerURL+"/chat")
      this.socket.on('newchatmessage', this.addMessage)
      console.log("connection stablished")
    },
    addMessage(message) {
      this.messages.push({message: message, id: this.messages.length})
    },
    submitMessage (message) {
      console.log("Sent")
      this.socket.emit('chatmessage', {message:message, user:this.username, token:this.usertoken})
    }
  },
  mounted: function() {
    var deck = Deck()
    deck.mount(this.$refs.board)

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
<style scoped>
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

.red
{
  border: 1px solid red;
}

.full
{
  width: 100%;
  height: 100vh;
}

</style>
