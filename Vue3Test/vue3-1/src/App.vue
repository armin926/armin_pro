<template>
  <div>
    <!-- <h2>欢迎光临</h2>
    <div>随机选择一位</div>
    <modal/>
    <div v-if="loading">Loading...</div>
    <img v-if="loaded" :src="result.imgUrl" alt="" /> -->
    <Suspense>
      <template #defalut>
        <async-show/>
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
// reactive
// ref
// axios
import { ref } from "vue";
import userUrlAxios from "./hooks/useURLAxios";
// import modal from "./components/Modal.vue";
import AsyncShow from "./components/AsyncShow.vue"
export default {
  name: "App",
  components: {
    // modal,
    AsyncShow
  },
  setup() {
    // const { result, loading, loaded } = userUrlAxios(
    //   "https://apiblog.jspang.com/default/getGirl"
    // );
    // return { result, loading, loaded };
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
