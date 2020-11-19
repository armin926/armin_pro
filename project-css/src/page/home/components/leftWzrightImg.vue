<template>
<!-- 左文字又图片 -->
    <div>
      <div class="menb">
        <div class="mena">
          <p>标题</p>
          <p>作者</p>
        </div>
        <div class="menc">
          <img src="../../../assets/001.jpg" alt="">
        </div>
      </div>
    </div>
</template>

<script>

</script>

<style scoped>
.mena {
  font-size: 0.3rem;
  flex: 1;
  position: relative;
}
.mena p:nth-child(1){
  display: -webkit-box;
  /* 移出2行隐藏 */
  -webkit-line-clamp: 2; 
  overflow: hidden;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
}
.mena p:nth-child(2){
  position: absolute;
  bottom: 0.04rem;
}
.menb {
  background: #f0c674;
  height: 1.5rem;
  display: flex;
}
img {
  width: 100%;
  height: 100%;
}
.menc {
  width: 2rem;
  height: 1.5rem;
}
</style>
