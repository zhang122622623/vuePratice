<template>
  <div id="app">
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myFooter from './components/footer.vue'
  export default {
      components:{
        myFooter
      }
  }
</script>

<style scoped>
 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
   position: relative;
 }
</style>
