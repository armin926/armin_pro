<template>
  <!-- 购物车底栏 -->
  <div class="mena">
    <div class="menc">
      <img src="../../../assets/027.png" />
      <p>客服</p>
    </div>
    <div class="menc menf">
      <img src="../../../assets/028.png" />
      <p>店铺</p>
    </div>
    <div class="menc">
      <img src="../../../assets/029.png" />
      <p>收藏</p>
    </div>
    <div class="menb mend">加入购物车</div>
    <div class="menb mene">马上抢</div>
  </div>
</template>

<script>
</script>

<style>
img {
  width: 0.5rem;
  height: 0.5rem;
}
.mena {
  font-size: 0.28rem;
  background: #f0f0f0;
  height: 1rem;
  display: flex;
  align-items: center;
}
.mena p {
  font-size: 0.2rem;
}
.menb {
  flex: 2;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
  color: #fff;
}
.menc {
  height: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mend {
  background: yellowgreen;
}
.mene {
  background: red;
}
.menf {
  border-left: 1px solid white;
  border-right: 1px solid white;
}
</style>
