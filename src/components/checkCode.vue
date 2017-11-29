<template>
  <div class="wrapper">
    <div class="content">
      <input type="text" v-model="Input" maxlength="10" :class="{'wrong':isWrong}" @focus="focus" @blur="blur"/>
      <span @click="init">{{code}}</span>
      <button @click="checkCode">{{check}}</button>
      <p v-show="isWrong2">验证码错误</p>
      <p v-show="isWrong3">请输入验证码</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        check:'验证', Input:'',code:[],isWrong:false,isWrong2:false,isWrong3:false,
        random:[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z'],
      }
    },
    methods:{
      init(){
        this.code='';
        for(let i=0;i<4;i++){
            let index = Math.floor((Math.random() * 36));
            this.code +=this.random[index];
        }
      },
      focus(){
        this.isWrong = false;
      },
      blur(){
        if(this.Input){
          this.isWrong = false;
        }else{
          this.isWrong = true;
        }
      },
      checkCode(){
        if(this.Input===this.code){
          this.isWrong2 = false;
          this.isWrong3 = false;
          alert('验证通过！');
          this.Input='';
          this.init();
        }else if(!this.Input){
          this.isWrong3 = true;
          this.isWrong2 = false;
          this.isWrong = true;
        }else{
          this.isWrong2 = true;
          this.isWrong3 = false;
          this.isWrong = true;
        }
      },
    },
    mounted() {
        this.init();
    }
  }
</script>

<style scoped>
  .wrapper{
    background: #fff;
    height: 100%;
    width: 100%;
    padding-top: 80px;
  }
  .content{
    height:400px;
    width: 400px;
    margin:0 auto;
  }
  .content input{
    color: #282828;
    height: 30px;
    width: 120px;
    line-height: 30px;
    font-size: 20px;
    padding-left: 10px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #333;
    margin-top: 1px;
    display: block;
    float: left;
    margin-bottom: 15px;
  }
  input:focus{
    border: 1px solid blue;
  }
  .content .wrong{
    border: 1px solid red;
  }
  .content span{
    float: left;
    display: block;
    height: 34px;
    width: 100px;
    line-height: 34px;
    margin-left: 10px;
    background: #aaa;
    font-style: italic;
    letter-spacing: 4.09px;
    font-size: 20px;
    cursor: pointer;
  }
  button{
    width: 80px;
    height: 33px;
    float: left;
    margin-left: 10px;
    border: 1px solid green;
    border-radius: 4px;
    margin-top: 1px;
    background: green;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    outline: none;
  }
  p{
    clear: both;
    font-size: 18px;
    color: #f00;
    margin-left: -280px;
  }
</style>
