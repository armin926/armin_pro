<template>
<!-- 产品参数 -->
    <div>
      <div class="mena" v-for="(item,index) in datas" :key="index">
        <div class="menb">{{item.title}}</div>
        <div class="menc">{{item.label}}</div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          datas: [
            {
              title:'品牌',
              label: '言诗蓝黛'
            },
            {
              title:'品牌品牌品牌',
              label: '言诗蓝黛'
            },
            {
              title:'品牌品',
              label: '言诗蓝黛言诗蓝黛'
            },
            {
              title:'品牌品牌品牌',
              label: '言诗蓝黛言诗蓝黛言诗蓝黛'
            },
            {
              title:'品牌',
              label: '言诗蓝黛言诗蓝黛言诗蓝黛言诗蓝黛言诗蓝黛'
            },
            {
              title:'品牌',
              label: '言诗蓝黛'
            },
          ]
        };
    },
};
</script>

<style>
.mena {
  font-size: .3rem;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  padding: .4rem 0;
}
.menb {
  width: 1rem;
  padding-right: 1rem;
}
.menc {
  flex: 1;
}
/* odd:代表基数 even:代表偶数 */
.mena:nth-child(even){
  background: #f0f0f0;
}
</style>
