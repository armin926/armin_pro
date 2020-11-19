import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/page/home/home.vue'
// import Style from '@/page/style/style.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  // {
  //   path: '/Style',
  //   name: 'Style',
  //   component: Style
  // }
]

const router = new VueRouter({
  routes
})

export default router