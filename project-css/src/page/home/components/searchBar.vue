<template>
<!-- 搜索框 -->
    <div class="mena">
      <div class="menb">
        <img src="../../../assets/016.png">
        <input type="text" placeholder="搜索">
      </div>
      <div class="menc">搜索</div>
    </div>
</template>

<script>

</script>

<style scoped>
.mena {
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 .2rem;
}
.menb img {
  width: .4rem;
  height: .4rem;
  position: absolute;
  left: 0.05rem;
  align-self: center;
}
div {
  font-size: .25rem;
}
input {
  height: .7rem;
  width: 100%;
  border: none;
  border-radius: 0.07rem;
  padding-left: .45rem;
}
.menb {
  height: .7rem;
  display: flex;
  position: relative;
  flex: 1;
}
.menc {
  padding-left: .2rem;
}
</style>
