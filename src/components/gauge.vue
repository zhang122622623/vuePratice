<template>
  <div class='wrapper'>
    <div id="chart">
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      myChart:null,option:{},timer:'',
      textStyle:{
        fontWeight: 'bolder',
        color: '#fff',
        shadowColor : '#fff',
        shadowBlur: 10
      },
      lineStyle: {
        color: 'auto',
        shadowColor : '#fff',
        shadowBlur: 10
      },
      spLineStyle:{
        width:3,
        color: '#fff',
        shadowColor : '#fff',
        shadowBlur: 10
      },
      pointer: {
        shadowColor : '#fff',
        shadowBlur: 5
      },
      noShow:{show:false},
    }
  },
  methods:{
    drawChart(){
      this.myChart = this.$echarts.init(document.getElementById('chart'));
      this.option = {
          backgroundColor: '#1b1b1b',
         tooltip : {formatter: "{a} <br/>{c} {b}"},
          toolbox: {
            show : true,
            feature : {
              mark : {show: true},
             // restore : {show: true},
              //saveAsImage : {show: true}
            }
          },
          series : [
            {
              name:'速度',
              type:'gauge',
              min:0,
              max:220,
              splitNumber:11,
              radius: '55%',
              axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                  color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                  width: 3,
                  shadowColor : '#fff', //默认透明
                  shadowBlur: 10
                }
              },
              axisLabel: {textStyle:this.textStyle},
              axisTick: {            // 坐标轴小标记
                length :15,        // 属性length控制线长
                lineStyle: this.lineStyle,
              },
              splitLine: {           // 分隔线
                length :25,         // 属性length控制线长
                lineStyle:this.spLineStyle,
              },
              pointer: this.pointer,
              title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontWeight: 'bolder',
                  fontSize: 22,
                  fontStyle: 'italic',
                  color: '#fff',
                  shadowColor : '#fff', //默认透明
                  shadowBlur: 10
                }
              },
              detail : {
                backgroundColor: 'rgba(30,144,255,0.8)',
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '40%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  color: '#fff',
                  fontSize:22,
                }
              },
              data:[{value: 50, name: 'km/h'}]
            },
            {
              name:'转速',
              type:'gauge',
              min:0,
              max:7,
              splitNumber:7,
              center:['19%','55%'],
              radius: '35%',
              endAngle:45,
              axisLine: {
                lineStyle: {
                  color: [[0.29, 'lime'],[0.86, '#1e90ff'],[1, '#ff4500']],
                  width: 3,
                  shadowColor : '#fff',
                  shadowBlur: 6
                }
              },
              axisLabel: {textStyle:this.textStyle},
              axisTick: {
                length :12,
                lineStyle: this.lineStyle,
              },
              splitLine: {
                length :20,
                lineStyle:this.spLineStyle,
              },
              pointer: {
                shadowColor : '#fff',
                shadowBlur: 4,
                width:4,
              },
              title : {
                textStyle: {
                  fontWeight: 'bolder',
                  fontSize: 16,
                  fontStyle: 'italic',
                  color: '#fff',
                  shadowColor : '#fff',
                  shadowBlur: 10
                }
              },
              detail : {
                borderColor: '#fff',
                shadowColor : '#fff',
                fontSize: 18,
                shadowBlur: 5,
                offsetCenter: [0, '35%'],
                textStyle: {
                  color: '#fff'
                }
              },
              data:[{value: 1.6, name: 'x1000 r/min'}]
            },
            {
              name:'油表',
              type:'gauge',
              min:0,
              max:2,
              splitNumber:2,
              center:['80%','51%'],
              radius: '35%',
              startAngle:135,
              endAngle:45,
              axisLine: {
                lineStyle: {
                  color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                  width: 3,
                  shadowColor : '#fff',
                  shadowBlur: 6
                }
              },
              axisLabel: {
                textStyle:this.textStyle,
                formatter:function (v) {
                  switch(v){
                    case 0: return 'E';
                    case 1: return 'Gas';
                    case 2: return 'F';
                  }
                }
              },
              axisTick: {
                length :12,
                lineStyle: this.lineStyle,
              },
              splitLine: {
                length :20,
                lineStyle:this.spLineStyle,
              },
              pointer: {
                shadowColor : '#fff',
                shadowBlur: 3,
                width:2,
              },
              detail : this.noShow,
              title:this.noShow,
              data:[{value: 1, name: 'Gas'}]
            },
            {
              name:'水表',
              type:'gauge',
              min:0,
              max:2,
              splitNumber:2,
              center:['80%','51%'],
              radius: '35%',
              startAngle:315,
              endAngle:225,
              axisLine: {
                lineStyle: {
                  color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                  width: 3,
                  shadowColor : '#fff',
                  shadowBlur: 6
                }
              },
              axisLabel: {
                textStyle:this.textStyle,
                formatter:function (v) {
                  switch(v){
                    case 0: return 'H';
                    case 1: return 'Water';
                    case 2: return 'C';
                  }
                }
              },
              axisTick: {
                length :12,
                lineStyle: this.lineStyle,
              },
              splitLine: {
                length :20,
                lineStyle:this.spLineStyle,
              },
              pointer: {
                shadowColor : '#fff',
                shadowBlur: 3,
                width:2,
              },
              detail : this.noShow,
              title: this.noShow,
              data:[{value: 0.4, name: 'Water'}]
            },
          ]
      }
      this.myChart.setOption(this.option);
    }
  },
  beforeDestroy(){
    clearInterval(this.timer);
  },
  mounted(){
    this.drawChart();
    let that =this;
     this.timer =setInterval(function () {
      let data1 = (Math.random()*200).toFixed(2);
      that.option.series[0].data[0].value = data1;
      that.option.series[1].data[0].value =(data1*6.4/200).toFixed(1);
      that.option.series[2].data[0].value = (Math.random()*1.8).toFixed(1);
      that.option.series[3].data[0].value = (Math.random()*2).toFixed(1);
      that.myChart.setOption(that.option);
    },1500)
  }
}
</script>

<style scoped>
  .wrapper{
    height:100%;
    width:100%;
    background: #1b1b1b;
  }
  #chart{
    height:700px;
    width: 900px;
    margin:0 auto;
  }
</style>
