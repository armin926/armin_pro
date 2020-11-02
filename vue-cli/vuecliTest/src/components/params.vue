<template>
  <div>
    <h2>{{ msg }}</h2>
    <p>newsId:{{ $route.params.newsId }}</p>
    <p>newsTitle:{{ $route.params.newsTitle }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "params pages",
    };
  },
  beforeRouteEnter: (to,from,next)=>{
    console.log('准备进入路由')
    next()
  },
  beforeRouteLeave: (to,from,next)=>{
    console.log('准备离开路由')
    next()
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
</style>
