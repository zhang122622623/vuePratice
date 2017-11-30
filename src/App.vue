<template>
  <div id="app">
    <router-view></router-view>
    <p class="copyRight">Design By xiaofeiZhang @2017</p>
  </div>
</template>

<script>
export default {
  name: 'app'
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
  .copyRight{
    margin: 0 auto;
    position: absolute;
    left:40%;
    bottom:30px;
    font-size: 16px;
  }
</style>
