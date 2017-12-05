<template>
  <div class="wrapper">
    <div class="header">
      <img src="../assets/cnodejs.svg"  title="cnodejs.svg">
      <ul>
        <li>首页</li>
        <li @click="open">关于</li>
      </ul>
    </div>

    <el-dialog  :visible.sync="dialogVisible" width="35%">
      <div slot="title" class="dialogTitle">
        <h3>关于</h3>
      </div>
      <div class="dialogBody">
        <p>作者：张三少</p>
        <p>源码：<a href="https://github.com/zhang122622623">Github</a></p>
        <p>技术栈：</p>
        <ul>
          <li>Vue.js</li>
          <li>Vuex</li>
          <li>Vue-router</li>
          <li>Vue-resource</li>
          <li>ElementUI</li>
          <li>CnodeJS API</li>
        </ul>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="cancel">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        dialogVisible: false,
      };
    },
    methods: {
      open(){
        this.dialogVisible =true;
      },
      cancel(){
        this.dialogVisible =false;
      },
    }
  }
</script>



<style scoped>
  .wrapper{
    height: 100%;
    width: 100%;
    margin-top: -20px;
  }
  .header{
    height: 80px;
    width: 100%;
    background: #545c64;
    margin-bottom: 40px;
  }
  .header img{
    height: 80px;
    width: 100px;
    float: left;
    margin-left: 10%;
    margin-top: 5px;
  }
  .header ul{
    height: 80px;
    line-height: 80px;
    float: right;
    margin:0 10% 0 0 ;
  }
  .header li{
    display: inline-block;
    color: #fff;
    list-style: none;
    font-size: 18px;
    margin:10px 20px 0;
    cursor: pointer;
  }
  .dialogTitle{
    font-size: 18px;
    margin-top: -10px;
  }
  .dialogBody{
    font-size: 18px;
    text-align: left;
    padding-left: 30px;
    margin-top: -50px;
  }
  .dialogBody p{
    margin: 10px 0;
  }
  .dialogBody ul{
    width: 80%;
    margin:0 auto;
  }
  .dialogBody li{
     list-style: square;
  }
  .dialogBody a{
    text-decoration: none;
    cursor: pointer;
    color:blue;
  }
  a:hover{
    color: yellow;
  }
</style>
