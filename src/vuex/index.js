
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import todo from './modules/todo'

const store = new Vuex.Store({
  modules: {
    todo
  }
})

export default store
