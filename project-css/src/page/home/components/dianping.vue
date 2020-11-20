<template>
    <div>
      <div class="mena">
        <div class="menb">
          <img src="../../../assets/025.png" alt="">
        </div>
        <div class="menc">
          <p>小米手机10s</p>
          <p>小米</p>
          <p>123人点评</p>
        </div>
        <div class="mend">
          <p class="menf">已买</p>
          <div class="mene">
            <img src="../../../assets/026.png">
            <p>我要点评</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style>
body {
  background: #f0f0f0;
}
.mena {
  display: flex;
  height: 2.5rem;
  background: #fff;
}
.menb {
  width: 2rem;
}
.menb img {
  width: 100%;
  height: 100%;
}
.menc {
  font-size: .28rem;
  flex: 1;
  position: relative;
  color: #C7C7C7;
  padding-left: .2rem;
}
.menc p:nth-child(1){
  font-size: .3rem;
  font-weight: bold;
  color: #000;
}
.menc p:nth-child(2){
  position: absolute;
  top: .6rem;
  left: .2rem;
}
.menc p:nth-child(3){
  position: absolute;
  bottom: 0;
  left: .2rem;
}
.mend {
  font-size: .28rem;
  width: 2rem;
  position: relative;
}
.mene {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.8rem;
  padding: .04rem;
  border: .01rem solid #005500;
  border-radius: .3rem;
  position: absolute;
  right: .2rem;
  bottom: 0;
}
.mene img {
  width: .3rem;
  height: .3rem;
}
.menf {
  position: absolute;
  right: .3rem;
  top: 0;
}
</style>
