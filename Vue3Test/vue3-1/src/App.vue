<template>
  <div>
    <h2>欢迎光临</h2>
    <div>随机选择一位</div>
    <modal/>
    <div v-if="loading">Loading...</div>
    <img v-if="loaded" :src="result.imgUrl" alt="" />
  </div>
</template>

<script lang="ts">
// reactive
// ref
// axios
import userUrlAxios from "./hooks/useURLAxios";
import modal from "./components/Modal.vue";
export default {
  name: "App",
  components: {
    modal,
  },
  setup() {
    const { result, loading, loaded } = userUrlAxios(
      "https://apiblog.jspang.com/default/getGirl"
    );
    return { result, loading, loaded };
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
