<template>
  <!-- 微信底部导航栏 -->
  <div>
    <div class="mena">
      <div v-for="(item,index) in menus" :key="index">
        <img :src="item.url" />
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          url: require("../../../assets/008.png"),
          title: "微信",
        },
        {
          url: require("../../../assets/009.png"),
          title: "通讯录",
        },
        {
          url: require("../../../assets/010.png"),
          title: "发现",
        },
        {
          url: require("../../../assets/011.png"),
          title: "我",
        },
      ],
    };
  },
  methods: {

  }
};
</script>

<style>
body {
  background-color: #f0f0f0;
}
img {
  width: 0.7rem;
  height: 0.7rem;
}
p {
  font-size: 0.15rem;
}
.mena {
  background-color: #ffffff;
  height: 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
