<template>
  <div id="app">
    <div>
      <router-link to="/">首页</router-link> |
      <router-link to="/goParams/250/i like vue.js">去params</router-link> |
      <router-link to="/goHome">去首页</router-link> |
      <router-link to="/params/198/armin nice">params</router-link> |
      <router-link to="/hi">嗨页面</router-link> |
      <router-link :to="{name:'hi1',params:{username:'老王'}}">嗨页面1</router-link> |
      <router-link to="/hi/hi2">嗨页面2</router-link>
    </div>
    <p>{{$route.name}}</p>

    <router-view />
    <div style="height:300px;display:flex;flex-dre">

    <router-view style="width:50%;background-color:skyblue;" name="left" />
    <router-view style="width:50%;background-color:green;" name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
