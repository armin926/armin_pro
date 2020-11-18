<template>
  <div>
    <p>{{ count }}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App3",
  // setup函数是组合API的入口函数
  setup() {
    // let count = 0
    // 定义了一个名称叫做count变量, 这个变量的初始值是0
    // 这个变量发生改变之后，Vue会自动更新UI
    let count = ref(0);
    // 在组合API中，如果想定义方法，直接定义即可
    function myFn() {
      // alert(count.value);
      count.value += 1
    }
    // 注意点：
    // 在组合API中定义的变量/方法，要想在外部调用，必须通过 return {xx,xx} 暴露出去
    return { count, myFn };
  },
};
</script>

<style scoped>
</style>
