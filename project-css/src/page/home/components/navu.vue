<template>
  <!-- bilibili会员购卡片 -->
  <div class="men">
    <div class="mene">
      <div class="mena">
        <img src="../../../assets/024.png" />
      </div>
      <div class="menb">
        <div class="menf">标题标题标题标题标题标题标题</div>
        <div class="mend">
          <div class="menc">
            <img src="../../../assets/024.png" />
            <img src="../../../assets/024.png" />
            <img src="../../../assets/024.png" />
          </div>
          <div>订阅</div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="meng">
      <div class="menh">
        <img src="../../../assets/009.png" />
        <p>888</p>
      </div>
      <div>1234人已订阅</div>
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
  border-radius: 0.1rem;
  margin: 0.5rem 0.2rem;
  font-size: 0.3rem;
  padding: .2rem;
}
.mena img {
  width: 2rem;
  height: 2.5rem;
}
.menb img {
  width: 0.8rem;
  height: 1.5rem;
}
.menc {
  display: flex;
}
.mend {
  display: flex;
  justify-content: space-between;
}
.mend div:nth-child(2) {
  align-self: flex-end;
  border: 1px solid #ffb5c5;
  padding: 0.09rem 0.3rem;
  border-radius: 50rem;
  color: #ffb5c5;
}
.menc img:nth-child(2) {
  padding: 0 0.1rem;
}
.mene {
  display: flex;
}
.menf {
  height: 1rem;
  line-height: .5rem;
}
.menb {
  padding-left: .2rem;
}
.meng img{
  width: .5rem;
  height: .5rem;
  padding-right: .2rem;
}
.menh {
  display: flex;
  align-items: center;
}
.meng {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: .2rem;
}
</style>
