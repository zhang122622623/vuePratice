<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2 style="color:#41bfbf;margin-bottom: 40px">一些有趣的图 - 基于Echarts</h2>
    <ul>
      <li><a href="/#/snake" target="_blank">贪吃蛇</a></li>
      <li><a href="/#/star" target="_blank">星空闪耀</a></li>
      <li><a href="/#/checkCode" target="_blank">随机验证码</a></li>
      <li><a href="/#/gauge" target="_blank">仪表盘</a></li>
      <li><a href="/#/showImage" target="_blank">查看大图</a></li>
    </ul>
    <ul>
      <li><a href="/#/boostImage" target="_blank">图片放大镜</a></li>
      <li><a href="/#/showInfo" target="_blank">图片详情</a></li>
      <li><a href="/#/carousel1" target="_blank">百叶窗轮播</a></li>
      <li><a href="/#/vueCnode" target="_blank">股票K线图</a></li>
      <li><a href="/#/random" target="_blank">随机数</a></li>
    </ul>
    <ul>
      <li><a href="/#/editor" target="_blank">markDown编辑器</a></li>
      <li><a href="/#/heatMap" target="_blank">热力图</a></li>
      <li><a href="/#/weiboMap" target="_blank">多轴散点图</a></li>
      <li><a href="/#/largeScatter" target="_blank">Github提交统计</a></li>
      <li><a href="/#/parallel" target="_blank">多行平行线</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  }
}
</script>

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
  color:#41bfbf;
  text-decoration: none;
  font-size: 24px;
}
a:hover{
  color:orange;
}
</style>
