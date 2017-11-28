<template>
  <div>
    <h2>{{msg}}</h2>
    <div id="map">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '贪吃蛇',
        Dir:{left:1,right:2,top:3,bottom:4},
        map:{width:1000,height:600},
        box:{width:40,height:30},
        snake:[],other:[],dir:2,nums:'',
      }
    },
    methods:{
      initMap(){
        let Map = document.getElementById('map');
        Map.style.width = this.map.width+'px';
        Map.style.height = this.map.height+'px';
        let total = this.nums.wNums*this.nums.hNums;
        for(let i=1;i<=total;i++){
         let newSpan = document.createElement('span');
          newSpan.style.width = this.box.width+'px';
          newSpan.style.height = this.box.height+'px';
          newSpan.className='newSpan';
          newSpan.id = i;
          Map.appendChild(newSpan);
          if(i<6){
            newSpan.className ='newSpan snake';
            this.snake.push(newSpan);
          }else{
            this.other.push(newSpan);
          }
        }
      },
      createFood(){
        let index =Math.floor(Math.random()* this.other.length);
        this.other[index].className='newSpan food';
      },
      snakeMove(){
        let headId;
        switch(this.dir){
          //向左
          case 1:
            headId = parseInt(this.snake[this.snake.length-1].id)-1;
            if(headId%this.nums.wNums===0)  headId += this.nums.wNums;
            break;
          //向右
          case 2:
            headId = parseInt(this.snake[this.snake.length-1].id)+1;
            if(headId%this.nums.wNums===1)  headId -= this.nums.wNums;
            break;
          //向上
          case 3:
            headId = parseInt(this.snake[this.snake.length-1].id)-this.nums.wNums;
            if(headId<1)  headId += this.nums.wNums*this.nums.hNums;
            break;
          //向下
          case 4:
            headId = parseInt(this.snake[this.snake.length-1].id)+this.nums.wNums;
            if(headId>this.nums.wNums*this.nums.hNums)   headId -= this.nums.wNums*this.nums.hNums;
            break;
          default:break;
        }

        let head = document.getElementById(headId);
        //判断蛇头是否在蛇身上
        for(let i=0;i<this.snake.length;i++){
          if(headId===parseInt(this.snake[i].id)){
            alert('Game Over!');
            this.$router.go(0);
          }
        }
        //计算新蛇头的位置
        let index;
        for(let i=0;i<this.other.length;i++){
          if(headId===this.other[i].id){
            index =i;break;
          }
        }
        this.other.splice(index,1);
        this.snake.push(head);
        if(head.className==='newSpan food'){
          this.createFood();
        }else{
          this.snake[0].className = 'newSpan';
          this.other.push(this.snake.shift());
        }
        head.className='newSpan snake';
      },

    },
    mounted(){
      let that =this;
      this.nums ={
        wNums:this.map.width/this.box.width,
        hNums:this.map.height/this.box.height,
      };
      this.initMap();
      this.createFood();
      setInterval(that.snakeMove,500);
      document.onkeyup = function (e) {
         switch (e.keyCode){
           case 37:{
             if(that.dir===2)break; else{that.dir=1;break;}
           }
           case 38:{
             if(that.dir===4)break; else{that.dir=3;break;}
           }
           case 39:{
             if(that.dir===1)break; else{that.dir=2;break;}
           }
           case 40:{
             if(that.dir===3)break; else{that.dir=4;break;}
           }
           default:break;
         }
        console.log(e.keyCode,that.dir)
       }
    }
  }
</script>

<style>
  h1, h2 {
    font-weight: normal;
    text-align: center;
  }
  #map{
    position:absolute;
    left:0;right:0; top:100px; bottom:0;
    margin:auto;
    border:1px solid #000;
    font-size: 0;
  }
  .newSpan{
    display: inline-block;
    border: 1px solid #000;
    box-sizing: border-box;
  }
  .snake{
    background: blue;
  }
  .food{
    background: orange;
  }
</style>
