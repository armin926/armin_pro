<template>
  <div id="app">
    <div>
      <router-link to="/">首页</router-link> |
      <div>
        <button @click="goBack">后退</button>
        <button @click="goGo">前进</button>
        <button @click="goHome">返回首页</button>
      </div>
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

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goBack(){
      this.$router.go(-1)
    },
    goGo(){
      this.$router.go(1)
    },
    goHome(){
      this.$router.push('/')
    }
  }
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
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-acitve {
  opacity: 0;
  transition: opacity 2s;
}
</style>
