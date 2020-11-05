<template>
    <div>
      <!-- 通过name属性指定具名插槽 没有name属性的为默认插槽 -->
      <slot name="header">我是头部</slot>
      <slot name="main">我是main</slot>
      <slot name="footer" :title="title">我是尾部</slot>
      <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
          title: {
            age: 18
          }
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>

</style>
