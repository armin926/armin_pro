<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 通过v-slot:footer="title"来拿到slot页面传过来的数据，v-slot:xxx来指定对应slot.vue中的插槽-->

    <slot-name>
      <template #header>我是新的header</template>
      <template v-slot:main>哈哈哈哈</template>
      <template v-slot:default>我是默认的</template>
      <template v-slot:footer="title">{{ title.title.age }}</template>
    </slot-name>
  </div>
</template>

<script>
import slotName from './slot.vue'
export default {
  name: "HelloWorld",
  components: {
    slotName
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      title: {
        title: {age:18}
      }
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
