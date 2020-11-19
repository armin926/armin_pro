<template>
  <div>
      <p>{{state}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
  /*
  1.markRaw
  将数据标记为永远不能追踪的数据
  一般在编写自己的第三方库时使用
  * */
  import {reactive, toRaw, ref} from 'vue';
export default {
  name: 'App',
  setup() {
      let obj = {name:'lnj', age:18};
      /*
      1.ref本质: reactive
      ref(obj) -> reactive({value: obj})
      * */
      let state = ref(obj);
      // 注意点: 如果想通过toRaw拿到ref类型的原始数据(创建时传入的那个数据)
      //        那么就必须明确的告诉toRaw方法, 要获取的是.value的值
      //        因为经过Vue处理之后, .value中保存的才是当初创建时传入的那个原始数据
      // let obj2 = toRaw(state);
      let obj2 = toRaw(state.value);

      console.log(obj);
      console.log(state);
      console.log(obj2);

      function myFn() {

      }
    return {state, myFn}
  }
}
</script>

<style>

</style>
