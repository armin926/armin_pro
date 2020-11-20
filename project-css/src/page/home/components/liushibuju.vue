<template>
<!-- 流式布局 -->
    <div class="menf">
      <div class="mena" v-for="(item,index) in list" :key="index">
        <div class="mene">
          <img :src="item.img" alt="">
        </div>
        <div class="menb">
          {{item.title}}
        </div>
        <div class="menc">
          <p>{{item.desc}}</p>
          <p>{{item.youhui}}</p>
        </div>
        <div class="mend">
          <p>{{item.label}}</p>
          <p>{{item.sale}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          list: [
            {
              img: require('../../../assets/024.png'),
              title: '安踏篮球鞋',
              desc: '退货运险费',
              youhui: '每300减30',
              label: '聚划算价',
              sale: '239'
            },
            {
              img: require('../../../assets/024.png'),
              title: '安踏篮球鞋',
              desc: '退货运险费',
              youhui: '每300减30',
              label: '聚划算价',
              sale: '239'
            },
            {
              img: require('../../../assets/024.png'),
              title: '安踏篮球鞋',
              desc: '退货运险费',
              youhui: '每300减30',
              label: '聚划算价',
              sale: '239'
            },
          ]
        };
    },
};
</script>

<style>
body {
  background: #f0f0f0;
}
.mene {
  height: 4rem;
}
img {
  width: 100%;
  height: 4rem;
}
.mena {
  background: #fff;
  width: calc(50% - .08rem*2);
  margin: .08rem .08rem;
}
.menb {
  font-size: .3rem;
  height: 1rem;
  line-height: 1rem;
  padding-left: .2rem;
}
.menc {
  font-size: .2rem;
  text-align: center;
  display: flex;
  align-items: center;
  height: 1rem;
  padding-left: .2rem;
}
.menc p {
  padding: .02rem .03rem;
}
.menc p:nth-child(1){
  border: .03rem solid #0074d9;
  border-radius: .1rem;
  margin-right: .3rem;
}
.menc p:nth-child(2){
  border: .03rem solid #009926;
  border-radius: .1rem;
}
.mend {
  font-size: .2rem;
  display: flex;
  height: .5rem;
  line-height: .5rem;
  padding: .2rem;
}
.mend p:nth-child(2){
  font-size: .4rem;
}
.menf {
  display: flex;
  flex-wrap: wrap;
  padding: 0 .08rem;
}
</style>
