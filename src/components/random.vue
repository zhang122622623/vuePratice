<template>
  <div class="container">
    <button @click="start">开始</button>
    <div class="ball-container">
      <p>红球：</p>
      <div v-for="i in 33" :id="'red'+i">
        {{i}}
      </div>
      <p>蓝球：</p>
      <div v-for="i in 16" :id="'blue'+i">
        {{i}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      start(){
        this.init();
        let k=0,id='',red=[];
        for(let i=0;i<99999;i++){
          if(red.length===6){
            break;
          }
          k = Math.ceil(Math.random()*33);
          if(red.indexOf(k)===-1){
            red.push(k);
          }
        }
        red.map(function (e) {
          id = 'red'+e;
          let obj = document.getElementById(id);
          obj.style.background = 'red';
        });

        let k2 = Math.ceil(Math.random()*16);
        let id2 = 'blue'+k2;
        let obj2 = document.getElementById(id2);
        obj2.style.background = 'blue';
        console.log(red,k2);
      },
      init(){
        let id='',obj='';
        for(let i=1;i<34;i++){
          id = 'red'+i;
          obj = document.getElementById(id);
          obj.style.background = '#fff';
          if(i<17){
            let id1 = 'blue'+i;
            let obj1 = document.getElementById(id1);
            obj1.style.background = '#fff'
          }
        }
      }
    },
    mounted(){
      this.init();
    }
  }
</script>

<style scoped>
  .container{
    width: 100%;
    height: 100%;
    background: #ccc;
    padding-top: 50px;
  }
  .container button{
    width: 80px;
    margin: 0 auto 20px;
    height: 40px;
    line-height: 40px;
    font-size: 22px;
    color:#fff;
    border-radius: 5px;
    outline: none;
    background-color: deepskyblue;
    cursor: pointer;
  }
  .ball-container{
    width: 60%;
    min-width: 400px;
    min-height: 300px;
    margin:0 auto;
    border: 1px solid #000;
    padding: 20px;
  }
  .ball-container div{
    height: 30px;
    width: 30px;
    line-height: 30px;
    border-radius: 30px;
    float: left;
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    color: #000;
    background-color: aliceblue;
  }
  .ball-container p{
    clear: both;
    font-size: 20px;
    color: #000;
  }
</style>
