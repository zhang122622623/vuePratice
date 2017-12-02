<template>
  <div class="wrapper">
    <div class="content">
    <div class="pic">
      <img src="../../static/showInfo/image1.jpg">
      <span>
        <h3>熊本熊高清壁纸</h3>
        <p><b>下载内容:</b><br/>蠢萌蠢萌的网红表情包熊本熊官方高清壁纸</p>
        <p><b>内容介绍:</b><br/>熊本熊是日本熊本县营业部长兼幸福部长,熊本县地方吉祥物</p>
        <p><b>下载费用:</b>免费</p>
      </span>
    </div>
    <div class="pic">
      <img src="../../static/showInfo/image2.jpeg">
      <span>
        <h3>熊本熊高清壁纸</h3>
        <p><b>下载内容:</b><br/>蠢萌蠢萌的网红表情包熊本熊官方高清壁纸</p>
        <p><b>内容介绍:</b><br/>熊本熊是日本熊本县营业部长兼幸福部长,熊本县地方吉祥物</p>
        <p><b>下载费用:</b>免费</p>
      </span>
    </div>
    <div class="pic">
      <img src="../../static/showInfo/image3.jpeg">
      <span>
        <h3>熊本熊高清壁纸</h3>
        <p><b>下载内容:</b><br/>蠢萌蠢萌的网红表情包熊本熊官方高清壁纸</p>
        <p><b>内容介绍:</b><br/>熊本熊是日本熊本县营业部长兼幸福部长,熊本县地方吉祥物</p>
        <p><b>下载费用:</b>免费</p>
      </span>
    </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        isShow1:true,
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    width: 100%;
    padding-top: 50px;
  }
  .content{
    width: 900px;
    margin:0 auto;
  }

  .pic{
    width: 250px;
    height: 380px;
    float: left;
    margin:0 50px 20px 0;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    border-radius: 4px;
  }
  .pic img{
    width: 100%;
    height: 100%;
  }

  .pic span{
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(33,33,33,0.8);
    position: absolute;
    left: -100%;
    top: 0;
    color: #ccc;
    padding: 10px 20px;
    box-sizing: border-box;
    font-size: 14px;
    transition: all 0.5s ease;
  }
  .pic p{
    line-height: 2em;
    margin-top: 15px;
    transition: all 1s ease;
    position: relative;
    left: -300px;
    text-align: left;
  }
  .pic h3{
    text-align: center;
    color: #f2f2f2;
    margin-bottom: 30px;
    transition: all 1s ease;
    position: relative;
    left: -300px;
  }
  .pic:hover span{ left: 0; top: 0; }
  .pic:hover h3{ left: 0; top: 0; }
  .pic:hover p{ left: 0; top: 0; }
</style>
