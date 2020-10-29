<template>
    <div>
      <h2>{{msg}}</h2>
      <p>newsId:{{$route.params.newsId}}</p>
      <p>newsTitle:{{$route.params.newsTitle}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
          msg: 'params pages'
        }
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
