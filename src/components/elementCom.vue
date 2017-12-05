<template>
  <div class="wrapper">
    <div class="header">
      <img src="../assets/cnodejs.svg"  title="cnodejs.svg">
      <ul>
        <li>首页</li>
        <li @click="open">关于</li>
      </ul>
    </div>

    <el-dialog title="收货地址" :visible.sync="dialogVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
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
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
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
    text-decoration: none;
    font-size: 18px;
    margin:10px 20px 0;
    cursor: pointer;
  }

</style>
