<template>
  <div>
      <p>{{state}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
  /*
  1.toRef
  创建一个ref类型数据, 并和以前的数据关联
  2.toRefs
  批量创建ref类型数据, 并和以前数据关联
  3.toRef和ref区别
  ref-创建出来的数据和以前无关(复制)
  toRef-创建出来的数据和以前的有关(引用)
  ref-数据变化会自动更新界面
  toRef-数据变化不会自动更新界面
  * */
  import {ref, toRef, toRefs} from 'vue';
export default {
  name: 'App',
  setup() {
      let obj = {name:'lnj', age:18};
      // let name = toRef(obj, 'name');
      // let age = toRef(obj, 'age');
      let state = toRefs(obj);

      function myFn() {
          // name.value = 'zs';
          // age.value = 666;
          state.name.value = 'zs';
          state.age.value = 666;
          console.log(obj);
          console.log(state);
          // console.log(name);
          // console.log(age);
      }
    return {state, myFn}
  }
}
</script>

<style>

</style>
