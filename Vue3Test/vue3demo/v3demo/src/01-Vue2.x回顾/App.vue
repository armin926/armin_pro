<template>
  <div>
    <p>{{msg}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      msg: '知播渔'
    }
  },
  methods:{
    myFn(){
      alert('www.it666.com');
    }
  }
}
</script>

<style>

</style>
