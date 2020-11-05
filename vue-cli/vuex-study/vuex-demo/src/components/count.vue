<template>
  <div>
    <h2>Hello Vuex</h2>
    <hr />
    <h3>{{ count }}</h3>
    <h4>{{ num }}</h4>
    <p>
      <button @click="addNum">加</button>
    </p>
    <!-- <p>
      <button @click="add(5)">+</button>
      <button @click="reduce">-</button>
    </p> -->
    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed:
    // 方法一
    // count() {
    //   return this.$store.state.count;
    // },
    // 方法二
    // mapState({
    //   count: state=>state.count
    // }),
    // 方法三
    {
      ...mapState(["count","num"]),
      // count() {
      //   return this.$store.getters.count;
      // },
      // ...mapGetters(['count'])
    },

  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction", "reduceAction"]),
    addNum(){
      this.$store.dispatch('addNumAction',8)
    }
  },
};
</script>

<style scoped>
</style>
