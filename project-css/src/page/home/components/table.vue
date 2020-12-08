<template>
  <!-- 腾讯课堂资费表格 -->
  <div class="mena">
    <div class="menb list">
      <div class="mend jist">月费</div>
      <div class="mene">19/月</div>
    </div>
    <div class="menc list">
      <div class="mend upo">套餐内</div>
      <div class="mene">
        <div class="menf">111111111111111111</div>
        <div class="meng">222222222222222222</div>
      </div>
    </div>
    <div class="menc">
      <div class="mend upo">套餐外</div>
      <div class="mene">wuwuwuwuwuwuwuwu</div>
    </div>
  </div>
</template>

<script>
</script>

<style >
body {
  background: #f0f0f0;
}
.mena {
  background: #fff;
  border-radius: 0.1rem;
  margin: 0.7rem 0.2rem;
  font-size: 0.3rem;
}
.menb {
  height: 1.5rem;
  display: flex;
  align-items: center;
  text-align: center;
}
.mene {
  flex: 2;
  text-align: center;
}
.mend {
  flex: 0.5rem;
  text-align: center;
  border-right: 1px solid #f0f0f0;
}
.menc {
  height: 3rem;
  display: flex;
  align-items: center;
}
.menf {
  height: 1rem;
  line-height: 1rem;
  border-bottom: 1px solid #f0f0f0;
}
.meng {
  height: 2rem;
  line-height: 2rem;
}
.list {
  border-bottom: 1px solid #f0f0f0;
}
.jist {
  height: 1.5rem;
  line-height: 1.5rem;
}
.upo {
  height: 3rem;
  line-height: 3rem;
}
</style>
