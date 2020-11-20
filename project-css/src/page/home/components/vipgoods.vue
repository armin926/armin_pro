<template>
<!-- 会员商品定位布局 -->
    <div>
      <div class="mena">
        <img src="../../../assets/022.png" />
        <p>新人价:99</p>
        <p class="menb"></p>
        <p>立省<br>14</p>
      </div>
      
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>

<style>
.mena {
  background: #f0c674;
  width: 25%;
  position: relative;
}
img {
  width: 100%;
  height: 2rem;
}
.mena p:nth-child(2){
  font-size: .29rem;
  text-align: center;
  height: .5rem;
  line-height: .5rem;
}
.menb {
  width: 0;
  height: .6rem;
  border-left: .3rem solid red;
  border-right: .3rem solid red;
  border-bottom: .15rem solid transparent;
  position: absolute;
  right: .3rem;
  top: .1rem;
}
.mena p:nth-child(4){
  font-size: .2rem;
  text-align: center;
  position: absolute;
  right: .3rem;
  top: .1rem;
  color: #fff;
  width: .6rem;
}
</style>
