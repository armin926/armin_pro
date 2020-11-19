<template>
  <!-- 微信朋友圈九宫格 -->
  <div>
    <div class="mena">
      <div v-for="(item, index) in list" :key="index">
        <img :src="item.image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          image: require("../../../assets/001.jpg"),
        },
        {
          image: require("../../../assets/001.jpg"),
        },
        {
          image: require("../../../assets/001.jpg"),
        },
        {
          image: require("../../../assets/001.jpg"),
        },
        {
          image: require("../../../assets/001.jpg"),
        },
        {
          image: require("../../../assets/001.jpg"),
        },
        {
          image: require("../../../assets/001.jpg"),
        },
        {
          image: require("../../../assets/001.jpg"),
        },
        {
          image: require("../../../assets/001.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
img {
  width: 100%;
  height: 100%;
}
.mena {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.mena div {
/* width: 33.33%; */
width: calc(33.3% - 0.01rem*2);
height: 1.6rem;
padding: 0.01rem;
/* box-sizing: border-box; */
}
</style>
