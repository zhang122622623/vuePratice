import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'

//功能页
import Snake from '../components/snake.vue'
import Star from '../components/star.vue'
import checkCode from '../components/checkCode.vue'
import Gauge from'../components/gauge.vue'
import showImage  from'../components/showImage.vue'
import boostImage from '../components/boostImage.vue'
import carousel_1 from '../components/carousel_1.vue'
import showInfo from '../components/showInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/snake',
      component: Snake
    },
    {
      path: '/star',
      component: Star
    },
    {
      path: '/checkCode',
      component: checkCode
    },
    {
      path: '/gauge',
      component: Gauge
    },
    {
      path: '/showImage',
      component: showImage
    },
    {
      path: '/boostImage',
      component: boostImage
    },
    {
      path: '/carousel1',
      component: carousel_1
    },
    {
      path: '/showInfo',
      component: showInfo
    },
  ]
})
