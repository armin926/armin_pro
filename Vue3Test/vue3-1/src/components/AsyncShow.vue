<template>
  <div>
    <h1>{{ result }}</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({ result: "armin" });
      }, 2000);
    });
  },
});
</script>

<style scoped>
</style>
