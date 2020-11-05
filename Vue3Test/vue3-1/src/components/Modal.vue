<template>
  <teleport to="#modal">
    <div id="center">
      <h2>Armin.com</h2>
    </div>
  </teleport>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid #000;
  background: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>
