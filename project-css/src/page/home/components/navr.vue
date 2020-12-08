<template>
<!-- 抖音评论，点赞，转发 -->
  <div>
    <div class="mena">
      <div class="menb">
        <img src="../../../assets/011.png" />
        <img src="../../../assets/007.png" />
      </div>
      <div class="menc">
        <img src="../../../assets/014.png" />
        <p>1.4w</p>
      </div>
      <div class="menc mend">
        <img src="../../../assets/008.png" />
        <p>1.4w</p>
      </div>
      <div class="menc">
        <img src="../../../assets/013.png" />
        <p>1.4w</p>
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

<style >
body {
  background: url('../../../assets/024.png') no-repeat center center fixed;
  background-size: cover;
}
img {
  width: .8rem;
  height: .8rem;
}
p {
  font-size: .2rem;
  color: #fff;
}
.mena {
  width: .9rem;
  position: fixed;
  bottom: 2rem;
  right: .4rem;
}
.menb img:nth-child(1){
  width: .9rem;
  height: .9rem;
  border-radius: 50%;
}
.menb img:nth-child(2){
  width: .4rem;
  height: .4rem;
  border-radius: 50%;
  align-self: center;
  position: absolute;
  top: .7rem;
}
.menb {
  width: .9rem;
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
}
.menc {
  width: .9rem;
  display: flex;
  flex-direction: column;
}
.menc img,p {
  align-self: center;
}
.mend {
  padding: .4rem 0;
}
</style>
