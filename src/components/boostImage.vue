<template>
  <div class="wrapper">
    <div class="container" id="normalImage" @mousemove="mouseMove($event)"  @mouseover="mouseIn" @mouseout="mouseOut">
       <img src="../../static/boost.jpeg" >
       <span id="boost"></span>
    </div>
    <div id="bigImage">
       <img src="../../static/boost.jpeg">
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        normalImage:'',boost:'',bigImage:'',scale:4,bigImg:'',
      }
    },
    methods:{
      mouseIn(){
        this.boost.style.display ='block';
        this.bigImage.style.display = 'block';
      },
      mouseOut(){
        this.boost.style.display ='none';
        this.bigImage.style.display = 'none';
      },
      mouseMove(e){
        let event = e|| event ;
        let x = event.clientX-this.boost.offsetWidth/2 - this.normalImage.offsetLeft;
        let y = event.clientY-this.boost.offsetHeight/2 - this.normalImage.offsetTop;
        if(x<0){
          x=0;
        }
        if( x>=this.normalImage.offsetWidth - this.boost.offsetWidth ){
          x=this.normalImage.offsetWidth - this.boost.offsetWidth
        }
        if(y<0){
          y=0;
        }
        if( y>=this.normalImage.offsetHeight - this.boost.offsetHeight ){
          y=this.normalImage.offsetHeight - this.boost.offsetHeight
        }
        //将鼠标移入放大镜中
        this.boost.style.left = x+'px';
        this.boost.style.top = y+'px';
        //设置放大镜大小
        this.boost.style.width = parseInt(this.normalImage.offsetWidth/this.scale)+'px';
        this.boost.style.height =  parseInt(this.normalImage.offsetHeight/this.scale)+'px';

        //设置放大图片总的大小
        this.bigImg.style.width = this.normalImage.offsetWidth*this.scale+'px';
        this.bigImg.style.height = this.normalImage.offsetHeight*this.scale+'px';
        //放大镜左移，大图片按比例往相反方向移动
        let left = this.scale *  this.boost.offsetLeft;
        let top = this.scale *  this.boost.offsetTop;
        this.bigImg.style.left = -left + "px";
        this.bigImg.style.top = -top + "px";

      },
    },
    mounted(){
      this.normalImage =document.getElementById('normalImage');
      this.boost = document.getElementById('boost');
      this.bigImage = document.getElementById('bigImage');
      this.bigImg = this.bigImage.getElementsByTagName('img')[0];
    }
  }
</script>

<style scoped>
  .wrapper{
    width: 50%;
    margin:0 auto;
    padding-top: 60px;
  }
  .container{
    width: 400px;
    height: 300px;
    position: relative;
  }
  .container img{
    width: 100%;
    height: 100%;
  }
  #boost{
    position: absolute;
    top:0;
    left: 0;
    background:#ff0;
    opacity: 0.5;
    cursor: move;
    display: none;
  }
  #bigImage{
    width: 300px;
    height: 300px;
    position: absolute;
    left:70%;
    top:60px;
    overflow: hidden;
    border: 1px solid #333;
    display: none;
  }
  #bigImage>img{
    position: absolute;
    display: block;
  }
</style>
