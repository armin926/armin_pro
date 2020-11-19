<template>
  <!-- 小程序弹窗 -->
  <div>
    <div class="mena">
      <div class="menb">
        <img src="../../../assets/017.png" />
        <div class="menc">
          <p>欢迎来到麦当劳小程序</p>
          <p>尽享多种优惠权益</p>
        </div>
        <div class="mend">
          <p>取消</p>
          <p>微信授权</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.mena {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menb {
  background: #fff;
  width: 5rem;
  height: 5rem;
  border-radius: 0.2rem;
}
.menb img {
  width: 5rem;
  height: 2rem;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
}
.menc p:nth-child(1) {
  font-size: 0.3rem;
  font-weight: bold;
}
.menc p:nth-child(2) {
  font-size: 0.25rem;
  padding-top: 0.1rem;
  color: #A8A8A8;
}
.menc {
  height: 1rem;
  text-align: center;
  padding-top: 0.4rem;
}
.mend {
  font-size: 0.28rem;
  display: flex;
  justify-content: space-around;
  padding-top: 0.4rem;
}
.mend p {
  height: 0.7rem;
  line-height: 0.7rem;
  width: 2rem;
  text-align: center;
  border-radius: 0.1rem;
}
.mend p:nth-child(1) {
  background: #dbdbdb;
}
.mend p:nth-child(2) {
  background: #ffb90f;
}
</style>
