<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="/#/snake" target="_blank">贪吃蛇</a></li>
      <li><a href="/#/star" target="_blank">星空闪耀</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
  margin: 0 20px;
}
a {
  color:aqua;
  text-decoration: none;
  font-size: 24px;
}
a:hover{
  color:orange;
}
</style>
