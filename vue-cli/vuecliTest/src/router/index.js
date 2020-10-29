import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: ()=>import('@/components/left.vue'),
        right: ()=>import('@/components/right.vue'),
      }
    },
    {
      path: '/hi',
      component: () => import('@/components/Hi.vue'),
      children: [
        { path: '/', name: 'Hi', component: () => import('@/components/Hi.vue') },
        {
          path: 'hi1',
          name: 'hi1',
          component: () => import('@/components/Hi1.vue')
        },
        {
          path: 'hi2',
          name: 'hi2',
          component: () => import('@/components/Hi2.vue')
        }
      ]
    },
    {
      // 只允许传数字
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: ()=>import('@/components/params.vue')
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    }
  ]
})
