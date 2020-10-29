<template>
  <div>
    <h2>{{ msg }}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "I am Hi page.",
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
</style>
