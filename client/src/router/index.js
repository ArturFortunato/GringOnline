import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Game from '@/components/Game'
import Lobby from '@/components/Lobby'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/Game',
      component: Game
    },
    {
      path: '/Lobby',
      component: Lobby
    }
  ]
})
