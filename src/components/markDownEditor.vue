<template>
  <div class="container">
    <el-card class="box-card">
      <textarea v-model="input" >
      </textarea>
      <div class="show" v-html="compileMarkdown">
      </div>
    </el-card>
  </div>
</template>

<script>
  import Marked from 'marked'
  export default {
    data(){
      return{
        input:"# Hello World!"
      }
    },
    computed:{
      compileMarkdown:function () {
        return  Marked(this.input,{sanitize:true})
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .container{
    height:80%;
    width: 100%;
    padding-top: 5%;
    color: #000;
  }
  .box-card{
    width: 70%;
    margin:0 auto;
    min-height: 520px;
    min-width: 500px;
  }
  textarea,.show{
    width: 48%;
    height: 100%;
    min-height: 400px;
    float: left;
  }
  textarea{
    background-color: #cdcdcd;
    resize: none;
    font-size: 14px;
    padding: 10px;
    color: #333;
    outline: none;
    font-family: 'Monaco', courier, monospace;
  }
  .show{
    padding-top: 20px;
    border: 1px solid #000;
  }
</style>
