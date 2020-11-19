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
  import {ref, toRef} from 'vue';
export default {
  name: 'App',
  setup() {
      let obj = {name:'lnj'};
      /*
      ref(obj.name) -> ref(lnj)
      -> reactive({value:lnj})
      * */
      // ref->复制
      // let state = ref(obj.name);
      // toRef->引用
      /*
      ref和toRef区别:
      ref->复制, 修改响应式数据不会影响以前的数据
      toRef->引用, 修改响应式数据会影响以前的数据
      ref->数据发生改变, 界面就会自动更新
      toRef->数据发生改变, 界面也不会自动更新

      toRef应用场景:
      如果想让响应式数据和以前的数据关联起来, 并且更新响应式数据之后还不想更新UI, 那么就可以使用toRef
      * */
      let state = toRef(obj, 'name');

      function myFn() {
          state.value = 'zs';
          /*
          结论: 如果利用ref将某一个对象中的属性变成响应式的数据
               我们修改响应式的数据是不会影响到原始数据的
          * */
          /*
          结论: 如果利用toRef将某一个对象中的属性变成响应式的数据
               我们修改响应式的数据是会影响到原始数据的
               但是如果响应式的数据是通过toRef创建的, 那么修改了数据并不会触发UI界面的更新
          * */
          console.log(obj);
          console.log(state);
      }
    return {state, myFn}
  }
}
</script>

<style>

</style>
