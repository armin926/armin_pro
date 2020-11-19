import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')

/*
new Vue({
  el: '#app',
  store: store,
  router: router,
  render: c => c(App)
})
new Vue({
  store: store,
  router: router,
  render: c => c(App)
}).$mount("#app");
* */
