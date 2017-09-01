// import Vue from 'vue'
import { TODO } from '../mutation-types'

const todo = {
  namespaced: true,
  state: {
    items: [],
    item: {
      task: '',
      limitDate: '',
      status: 0
    }
  },
  getters: {
    completeList: state => state.items.filter(function (element, index, array) {
      return element.status === 2
    })
  },
  mutations: {
    [TODO.SAVE] (state, payload) {
      state.items.push(payload)
    }
  },
  actions: {
    [TODO.SAVE] ({ commit }, payload) {
      commit(TODO.SAVE, payload)
    }
  }
}
export default todo
