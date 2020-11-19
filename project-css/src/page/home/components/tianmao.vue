<template>
  <div>
    <div class="mena">
      <div class="menb" v-for="(item,index) in datas" :key="index">
        <img :src="item.image" />
        <p>{{item.title}}</p>
        <p>{{item.lable}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      datas:[
        {
          image: require('../../../assets/018.png'),
          title: '特步休闲鞋榜',
          lable: '月销2.8万件'
        },
        {
          image: require('../../../assets/019.png'),
          title: '特步休闲鞋榜',
          lable: '月销2.8万件'
        },
        {
          image: require('../../../assets/020.png'),
          title: '特步休闲鞋榜',
          lable: '月销2.8万件'
        },
        {
          image: require('../../../assets/021.png'),
          title: '特步休闲鞋榜',
          lable: '月销2.8万件'
        },
        {
          image: require('../../../assets/022.png'),
          title: '特步休闲鞋榜',
          lable: '月销2.8万件'
        },
        {
          image: require('../../../assets/023.png'),
          title: '特步休闲鞋榜',
          lable: '月销2.8万件'
        }
      ]
    }
  }
}
</script>

<style>
body {
  background: #f0f0f0;
}
.mena {
  background: #fff;
  height: 5.4rem;
  border-radius: .2rem;
  margin: .1rem;
  display: flex;
  flex-wrap: wrap;
}
img {
  width: 2rem;
  height: 1.8rem;
}
.menb {
  width: calc(33.33%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.menb p:nth-child(2){
  font-size: .25rem;
}
.menb p:nth-child(3){
  font-size: .18rem;
}
.mena div:nth-child(-n+3){
  border-bottom: .01rem solid salmon;
}
.mena div:nth-child(2) {
  border-left: .01rem solid salmon;
  border-right: .01rem solid salmon;
}
.mena div:nth-child(5) {
  border-left: .01rem solid salmon;
  border-right: .01rem solid salmon;
}
</style>
