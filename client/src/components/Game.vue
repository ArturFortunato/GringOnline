<template>
    <div>
        <button @click="talk">Falar com o server</button>
    </div>
</template>

<script>
import ServerCom from '@/Api/ServerCom'

export default {
    name: 'Game',
    methods: {
        async talk() {
            const response = await ServerCom.talk({
                name: 'ArtureJoao'
            })
            console.log(response.data)
        }
    }
}
</script>
