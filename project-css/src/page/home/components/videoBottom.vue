<template>
<!-- 视频号底部（收藏转发点赞留言） -->
    <div>
      <div>
        <img src="../../../assets/001.jpg">
      </div>
      <div class="mena">
        <!-- 左 -->
        <div class="menb">
          <div>
            <img src="../../../assets/012.png">
            <p>收藏</p>
          </div>
          <div>
            <img src="../../../assets/013.png">
            <p>转发</p>
          </div>
        </div>
        <!-- 右 -->
        <div class="menb">
          <div>
            <img src="../../../assets/012.png">
            <p>5.0万</p>
          </div>
          <div>
            <img src="../../../assets/013.png">
            <p>1406</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

</script>

<style scoped>
img {
  width: 100%;
}
.mena img {
  width: 0.6rem;
  height: 0.6rem;
}
.mena p {
  font-size: 0.18rem;
}
.mena {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menb {
  display: flex;

}
.menb div {
  padding: 0 0.1rem;
  text-align: center;
}
</style>
