<template>
  <div>
    <p>{{name}}</p>
    <button @click="myFn1">按钮</button>
    <p>{{age}}</p>
    <button @click="myFn2">按钮</button>
  </div>
</template>

<script>
  /*
  1.setup执行时机
  beforeCreate: 表示组件刚刚被创建出来, 组件的data和methods还没有初始化好
  setup
  Created     : 表示组件刚刚被创建出来, 并且组件的data和methods已经初始化好

  2.setup注意点
  - 由于在执行setup函数的时候, 还没有执行Created生命周期方法
    所以在setup函数中,是无法使用data和methods
  - 由于我们不能在setup函数中使用data和methods,
    所以Vue为了避免我们错误的使用, 它直接将setup函数中this修改成了undefined
  - setup函数只能是同步的不能是异步的
  * */
  import {ref} from 'vue';
export default {
  name: 'App',
  data: function(){
    return {
      name: 'lnj',
    }
  },
  methods:{
    myFn1(){
      alert('abc');
    },
  },
  // async setup() {
  setup() {
    let age = ref(18);
    function myFn2() {
      alert('www.it666.com');
    }

    // console.log(this); // undefined
    // console.log(this.name);
    // this.myFn1();
    return {age, myFn2}
  }
}
</script>

<style>

</style>
