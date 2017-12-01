<template>
  <div class='wrapper'>
    <div class="images">
      <ul>
        <li v-for="(item,index) in src"><img :src=item  alt="" @click="showImage($event)" :id="index"></li>
      </ul>
    </div>
    <div id="black" @click="cancel"></div>
    <div id="big">
      <img src="../../static/showImage/dirl.png" id="left"  @click="prev" />
      <img src="../../static/showImage/dirr.png" id="right" @click="next" />
      <img src="" id="img"/>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        black:'',big:'',index:0,img:'',left:'',right:'',
        src:["../../static/showImage/s1.jpg","../../static/showImage/s2.jpg","../../static/showImage/s3.jpg",
             "../../static/showImage/s4.jpg","../../static/showImage/s5.jpg","../../static/showImage/s6.jpg",
            "../../static/showImage/s7.jpg","../../static/showImage/s8.jpg","../../static/showImage/s9.jpg",]
      }
    },
    methods:{
      showImage(e){
        this.index = parseInt(e.target.id)+1;
        let src = "../../static/showImage/big"+this.index+".jpg";
        this.black.style.display = "block";
        this.big.style.display = "block";
        this.big.style.left =  this.big.style.top = "50%";
        this.big.style.marginLeft = - this.big.offsetWidth/2 + "px";
        this.big.style.marginTop = - this.big.offsetHeight/2 + "px";
        this.img.src = src;
      },
      cancel(){
        this.black.style.display = "none";
        this.big.style.display = "none";
        this.left.style.cursor = 'pointer';
        this.right.style.cursor = 'pointer';
      },
      prev(){
        this.right.style.cursor = 'pointer';
        if(this.index>1){
          this.index--;
          let src = "../../static/showImage/big"+this.index+".jpg";
          this.img.src = src;
        }else{
          this.left.style.cursor = 'auto';
        }
      },
      next(){
        this.left.style.cursor = 'pointer';
        if(this.index<9){
          this.index++;
          let src = "../../static/showImage/big"+this.index+".jpg";
          this.img.src = src;
        }else{
          this.right.style.cursor = 'auto';
        }
      },
    },
    mounted(){
      this.black = document.getElementById("black");
      this.big = document.getElementById("big");
      this.img = document.getElementById("img");
      this.left = document.getElementById("left");
      this.right = document.getElementById("right");
    }
  }
</script>


<style scoped>
  .wrapper{
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .images{
    width:70%;
    margin:0 auto;
  }
  .images li{
    box-shadow: 2px 2px 5px #333;
    margin: 10px 20px;
    float: left;
    list-style: none;
    border-radius: 5px;
    font-size:0;/*去除li标签的影响*/
    cursor: pointer;
  }
  #black{
    width: 100%;
    height: 100%;
    position: absolute;
    top:-60px;
    left: 0;
    background: rgba(000,000,000,0.7);
    display: none;
  }
  #big{
    width: 650px;
    height: 406px;
    position: absolute;
    border: 10px solid #fff;
    display: none;
  }
  #img{
    width: 100%;
    height: 100%;
  }
  #left,#right{
    position: absolute;
    top: 180px;
    cursor: pointer;
  }
  #left{
    left: -60px;
  }
  #right{
    right: -60px;
  }
</style>
