<template>
  <div ref="board" class="red top full">
    <!--<h1>GRINGO!</h1> -->
  </div>
</template>

<script>
import Deck from 'deck-of-cards'
import 'deck-of-cards/example/example.css'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function() {
    var deck = Deck()
    deck.mount(this.$refs.board)

    deck.cards.forEach(function (card, i) {
      card.setSide(Math.random() < 0.5 ? 'front' : 'back');
      card.animateTo({
        delay: 1000 + i * 2, // wait 1 second + i * 2 ms
        duration: 500,
        ease: 'quartOut',

        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2
      });
    });
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
