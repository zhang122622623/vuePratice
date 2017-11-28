<template>
  <div class="wrapper">
   <div id="stars"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        stars:'',timer:'',
        Obj:{},
      }
    },
    methods:{
      //重复绘制星星
      init(){
        for(let i=0; i<30; i++){
          this.drawStar();
        }
      },

      drawStar(){
        let odiv = document.createElement('div');
        odiv.style.width = '7px';
        odiv.style.height = '7px';
        odiv.style.position = 'relative';   //设置div为相对定位
        odiv.style.left = Math.floor(document.body.clientWidth*Math.random())+'px';   //div的left值不能超出屏幕的宽度
        odiv.style.top = Math.floor(document.body.clientHeight*Math.random())+'px';//div的left值不能超出屏幕的高度
        odiv.style.overflow = 'hidden';  //设置div的overflow为hidden
        this.stars.appendChild(odiv);
        let ostar = document.createElement('img');
        ostar.style.width = '49px';
        ostar.style.height = '7px';
        ostar.src = '../../static/star.png';
        ostar.style.position = 'absolute';   //设置img为绝对定位
        ostar.style.top = '0px';
        odiv.appendChild(ostar);
        this.Play(ostar);
      },

      //实现动画闪烁
      Play(ele){
        let i = Math.floor(Math.random()*7);  //设置随机值
        let timer = setInterval(function(){     //每100ms执行一次匿名方法
          if(i<7){
              ele.style.left = -i*7+'px';
             i++;
           }else{
              i = 0;
           }
          },100);
       }
    },
    beforeDestroy(){
      clearInterval(this.timer);
    },
    mounted() {
      this.stars = document.getElementById('stars');
      this.init();
    }
  }
</script>

<style scoped>
.wrapper{
  background: #000;
  height: 100%;
  width: 100%;
}
</style>
