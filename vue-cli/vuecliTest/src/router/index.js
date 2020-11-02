import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      component: ()=>import('@/components/params.vue'),
      beforeEnter:(to,from,next)=>{
        console.log(to)
        console.log(from);
        next()
      }
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path: '*',
      component: ()=>import('@/components/Error.vue')
    }
  ]
})
