<template>
    <div>
        <h1>LOBBY!!!!</h1>

        <p>Time left for next round: {{timeLeft}}</p>

        <button v-on:click="connectSocket">Connect</button>
    </div>
</template>

<script>
import io from 'socket.io-client'
import config from '@/config'

export default {
    name: 'Lobby',
    data () {
        return {
            timeLeft: 30
        }
    },
    methods: {
        refreshTimeLeft() {
            if (this.timeLeft === 1)
                this.timeLeft = 30
            else
                this.timeLeft--
        },
        async connectSocket () {
            console.log("connecting to " + (config.ServerURL+"/chat"))
            this.socket = io(config.ServerURL+"/Lobby")
            console.log("connection stablished")
        }
    },
    mounted () {
        setInterval(this.refreshTimeLeft, 1000)
    }
}
</script>

