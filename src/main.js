// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import Echarts from 'echarts'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(elementUI)
Vue.use(vueResource)

Vue.prototype.$echarts = Echarts;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
