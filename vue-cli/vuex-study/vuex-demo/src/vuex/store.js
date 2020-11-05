import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1,
  num: 2
}
const mutations = {
  add(state, n) {
    state.count += n
  },
  reduce(state) {
    state.count--
  },
  addNum(state, n) {
    state.num += n
  }
}
// const getters = {
//   count: state => {
//     return state.count += 100
//   }
// }
const actions = {
  addAction(context) {
    console.log(context)
    context.commit('add', 10)
    setTimeout(() => { context.commit('reduce') }, 3000)
    console.log('我比reduce先执行了');
  },
  reduceAction({ commit }) {
    commit('reduce')
  },
  addNumAction({ commit }, n) {
    commit('addNum', n)
  }
}

const moduleA = {
  state,
  mutations,
  // getters,
  actions
}

export default new Vuex.Store({
  modules: { a: moduleA }
})