<template>
<!-- 优惠券 -->
  <div class="mena">
    <div class="menb">
      <p>￥<span>3</span>店铺优惠券</p>
      <p>满88使用</p>
      <p>有效期:2020/11/23 - 2020/11/30</p>
    </div>
    <div class="menc">立即领取</div>
  </div>
</template>

<script>
</script>

<style>
.mena {
  color: #ff4040;
  display: flex;
  margin: .2rem;
}
.menb {
  font-size: 0.2rem;
  height: 1.6rem;
  flex: 1;
  padding-left: .2rem;
  /* 径向渐变 */
  background: radial-gradient(
        circle at bottom right,
        transparent 0.14rem,
        #ffe4e1 0
      )
      bottom right,
    radial-gradient(circle at top right, transparent 0.14rem, #ffe4e1 0) top
      right;
  background-size: 100% 50%;
  background-repeat: no-repeat;
  border-top-left-radius: 0.1rem;
  border-bottom-left-radius: 0.1rem;
}
.menb p:nth-child(1) {
  font-size: 0.3rem;
}
.menb span {
  font-size: 0.5rem;
}
.menc {
  font-size: 0.5rem;
  width: 3rem;
  height: 1.6rem;
  line-height: 1.6rem;
  text-align: center;
  background: radial-gradient(
        circle at bottom left,
        transparent 0.14rem,
        #ffe4e1 0
      )
      bottom left,
    radial-gradient(circle at top left, transparent 0.14rem, #ffe4e1 0) top
      left;
  background-size: 100% 50%;
  background-repeat: no-repeat;
  border-top-right-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
}
</style>
