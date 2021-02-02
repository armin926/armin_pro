<template>
<!-- 驴妈妈旅游网首页上半部分 -->
    <div class="mena">
      <div class="menb">
        <img src="../../../assets/030.jpg">
      </div>
      <div class="mend">
        <div class="menc">
          <img src="../../../assets/006.png" alt="">
          <p>中国</p>
        </div>
        <div class="menc">
          <p>上海</p>
          <img src="../../../assets/007.png" alt="">
        </div>
      </div>
      <div class="mene">搜索框</div>
      <div class="menf">
        <div>
          <img src="../../../assets/031.png" alt="">
          <p>榜单</p>
        </div>
        <div>
          <img src="../../../assets/031.png" alt="">
          <p>榜单</p>
        </div>
        <div>
          <img src="../../../assets/031.png" alt="">
          <p>榜单</p>
        </div>
        <div>
          <img src="../../../assets/031.png" alt="">
          <p>榜单</p>
        </div>
        <div>
          <img src="../../../assets/031.png" alt="">
          <p>榜单</p>
        </div>
      </div>
    </div>
</template>

<style>
.menb img {
  width: 100%;
  height: 4rem;
}
.mena {
  height: 6rem;
  font-size: .4rem;
  color: #FFFFFF;
  position: relative;
}
.menc img {
  width: .5rem;
  height: .5rem;
}
.menc {
  display: flex;
  align-items: center;
  margin: .2rem 0;
}
.mend {
  position: absolute;
  top: 1rem;
  left: .3rem;
}
.mene {
  position: absolute;
  top: 2rem;
  right: .5rem;
}
.menf img{
  width: .7rem;
  height: .6rem;
}
.menf {
  font-size: .3rem;
  color: #000;
  background: #FFFFFF;
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-radius: .2rem;
  padding: .3rem 0;
  margin: 0 .2rem;
  position: absolute;
  top: 3rem;
  left: 0;
  right: 0;
  box-shadow: 0px 5px 7px #f1efee;
}
.menf p {
  padding-top: .2rem;
}
</style>
