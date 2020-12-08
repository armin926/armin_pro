<template>
  <!-- 口碑网 -->
  <div class="men">
    <!-- 左边 -->
    <div class="meng menh">
      <div class="menb">
        <p>超值抢购</p>
        <p>书亦烧仙草·【秒杀】叽里呱啦</p>
        <p class="menc"><span>$7</span><span>$14</span></p>
      </div>
      <div class="mend">
        <img src="../../../assets/001.jpg" />
        <p>省7元</p>
      </div>
    </div>
    <!-- 右边 -->
    <div class="meng">
      <!-- 上图片 -->
      <div class="menf meni">
        <div class="menb">
          <p>超值抢购</p>
          <p>书亦烧仙草·【秒杀】叽里呱啦</p>
          <p class="menc"><span>$7</span><span>$14</span></p>
        </div>
        <div class="mene">
          <img src="../../../assets/001.jpg" />
        </div>
      </div>
      <!-- 下图片 -->
      <div class="menf">
        <div class="menb">
          <p>超值抢购</p>
          <p>书亦烧仙草</p>
          <p class="menc"><span>$7</span><span>$14</span></p>
        </div>
        <div class="mene">
          <img src="../../../assets/001.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
body {
  background: #f0f0f0;
}
.men {
  background: #fff;
  border-radius: 0.2rem;
  margin: 0.3rem 0.2rem;
  font-size: 0.3rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.menb {
  height: 1.5rem;
}
.menb p:nth-child(1) {
  font-size: 0.32rem;
  color: red;
  font-weight: bold;
}
.menb p:nth-child(2) {
  height: 0.6rem;
  line-height: 0.6rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
}
.menc span:nth-child(1) {
  color: red;
}
.menc span:nth-child(2) {
  color: #aaa59e;
  font-size: .2rem;
  text-decoration: line-through;
}
.mend img {
  width: 100%;
  height: 1.5rem;
  border-radius: .1rem;
}
.mend {
  height: 1.5rem;
  position: relative;
  padding-top: .28rem;
}
.mend p {
  font-size: .2rem;
  background: #FFC125;
  color: #fff;
  width: .8rem;
  text-align: center;
  padding: .05rem 0;
  position: absolute;
  bottom: .09rem;
  left: .09rem;
  border-radius: .2rem;
  border-bottom-left-radius: initial;
}
.mene {
  width: 1rem;
  height: 1rem;
  align-self: flex-end;
}
.mene img {
  width: 1rem;
  height: 1rem;
  border-radius: .1rem;
}
.menf {
  display: flex;
  padding: .14rem;
  justify-content: space-between;
}
.meng {
  width: 100%;
}
.menh {
  border-right: 1px solid #f0f0f0;
  padding: .14rem;
}
.meni {
  border-bottom: 1px solid #f0f0f0;
  padding: .14rem;
}
</style>
