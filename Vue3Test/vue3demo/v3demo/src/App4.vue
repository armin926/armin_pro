<template>
  <div>
    <form>
      <input type="text" v-model="state2.stu.id" />
      <input type="text" v-model="state2.stu.name" />
      <input type="text" v-model="state2.stu.age" />
      <input type="submit" @click="addStu" />
    </form>
    <ul>
      <li
        v-for="(stu, index) in state.stus"
        :key="index"
        @click="remStu(index)"
      >
        {{ stu.name }} ------- {{ stu.age }}
      </li>
    </ul>
  </div>
</template>

<script>
// import { reactive } from "vue";
import useRemoveStu from "./rem.js"
import userAddStu from "./add.js"
export default {
  name: "App4",
  setup() {
    // ref 函数注意点：
    // ref函数只能监听简单类型的变化，不能监听复杂类型的变化（对象、数组）
    /*let state = reactive({
      stus: [
        { id: 1, name: "zs", age: 10 },
        { id: 2, name: "ls", age: 12 },
        { id: 3, name: "ww", age: 14 },
      ],
    });
    function remStu(index){
      state.stus = state.stus.filter((stu,idx)=>idx !== index)
    }
    */
    let { state, remStu } = useRemoveStu();
    let { state2, addStu } = userAddStu(state);
    return { state, remStu, state2, addStu };
  },
};
/*
function userAddStu(state) {
  let state2 = reactive({
    stu: {
      id: "",
      name: "",
      age: "",
    },
  });
  function addStu(e) {
    e.preventDefault();
    const stu = Object.assign({}, state2.stu);
    state.stus.push(stu);
    state2.stu.id = "";
    state2.stu.name = "";
    state2.stu.age = "";
  }
  return { state2, addStu };
}
function useRemoveStu() {
  let state = reactive({
    stus: [
      { id: 1, name: "zs", age: 10 },
      { id: 2, name: "ls", age: 12 },
      { id: 3, name: "ww", age: 14 },
    ],
  });
  function remStu(index) {
    state.stus = state.stus.filter((stu, idx) => idx !== index);
  }
  return { state, remStu };
}
*/
</script>

<style scoped>
</style>
