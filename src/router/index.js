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
import vueCnode from '../components/elementCom.vue'
import Random from '../components/random.vue'
import Editor from '../components/markDownEditor.vue'
import heatMap from '../components/heatMap.vue'
import weiboMap from '../components/weiboMap.vue'
import largeScatter from '../components/largeScatter.vue'
import parallel from '../components/parallel.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
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
    {
      path: '/vueCnode',
      component: vueCnode
    },
    {
      path: '/random',
      component: Random
    },
    {
      path: '/editor',
      component: Editor
    },
    {
      path: '/heatMap',
      component: heatMap
    },
    {
      path: '/weiboMap',
      component: weiboMap
    },
    {
      path: '/largeScatter',
      component: largeScatter
    },
    {
      path: '/parallel',
      component: parallel
    },
  ]
})
