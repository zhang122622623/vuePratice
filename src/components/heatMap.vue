<template>
  <div class="container">
    <div id="graph">
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        chart:null,
        itemStyle:{
          normal:{
            color:'#0f0',
          }
        }
      }
    },
    methods:{
      getVirtulData(year) {
           year = year || '2017';
          let date = +this.$echarts.number.parseDate(year + '-01-01');
          let end = +this.$echarts.number.parseDate((+year + 1) + '-01-01');
          let dayTime = 3600 * 24 * 1000;
          let data = [];
          for (let time = date; time < end; time += dayTime) {
            data.push([
              this.$echarts.format.formatTime('yyyy-MM-dd', time),
               Math.floor(Math.random() * 1000)
             ]);
            }
            return data;
       },
      drawChart(){
        let option = {
          tooltip: {
            position: 'top'
          },
          visualMap: {
            min: 0,
            max: 1000,
            calculable: true,
            orient: 'vertical',
            left: 'left',
            top: 'middle',
            itemHeight:200,
          },
          calendar: [
            {
              range: '2017',
              cellSize: ['auto', 20],
              itemStyle:this.itemStyle,
            },
            {
              top: 260,
              range: '2016',
              cellSize: ['auto', 20]
            },
            {
              top: 450,
              range: '2015',
              cellSize: ['auto', 20],
            }],
          series: [
            {
              type: 'heatmap',
              coordinateSystem: 'calendar',
              calendarIndex: 0,
              data: this.getVirtulData(2017)
            }, {
              type: 'heatmap',
              coordinateSystem: 'calendar',
              calendarIndex: 1,
              data: this.getVirtulData(2016)
            }, {
              type: 'heatmap',
              coordinateSystem: 'calendar',
              calendarIndex: 2,
              data: this.getVirtulData(2015)
            }]
        };
        this.chart = this.$echarts.init(document.getElementById('graph'));
        this.chart.setOption(option)
      },
    },
    mounted(){
       this.drawChart();
    }
  }
</script>

<style scoped>
  .container{
    width: 100%;
    height: 100%;
    background-color: #ccc;
  }
  #graph{
    height: 700px;
    width: 900px;
    margin:0 auto;
  }
</style>
