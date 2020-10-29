<template>
    <div>
      <h2>{{msg}}--{{$route.params.username}}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
          msg: '我是嗨1'
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
