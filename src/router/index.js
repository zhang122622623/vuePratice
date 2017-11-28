import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home'
import Snake from '../components/snake.vue'
import Star from '../components/star.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/snake',
      name: 'snake',
      component: Snake
    },
    {
      path: '/star',
      component: Star
    }
  ]
})
