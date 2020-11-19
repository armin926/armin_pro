<template>
  <div>
    <!-- 微信 “我”页面--头像部分布局 -->
    <div class="mena">
      <div class="menc">
        <img src="../../../assets/mytouxiang.png" />
      </div>
      <div class="menb">
        <p>AHo Bo</p>
        <p>微信号: 123456</p>
      </div>
      <div class="mend">
        <img src="../../../assets/006.png" alt="">
        <img src="../../../assets/007.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style >
body {
  background-color: #f0f0f0;
}
.mena {
  background-color: #ffffff;
  height: 2rem;
  display: flex;
  align-items: center;
  padding: 0 .2rem;
}
.menb {
  height: 1rem;
  flex: 1;
  position: relative;
}
.menb p:nth-child(1){
  font-size: 0.35rem;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: .2rem;
}
.menb p:nth-child(2){
  font-size: 0.2rem;
  position: absolute;
  bottom: 0;
  left: .2rem;
  height: .5rem;
  line-height: .5rem;
}
.menc {
  width: 1rem;
  height: 1rem;
}
.menc img {
  width: 100%;
  height: 100%;
}
.mend {
  height: 1rem;
  display: flex;
}
.mend img {
  width: .5rem;
  height: .5rem;
  align-self: flex-end;
}
</style>
