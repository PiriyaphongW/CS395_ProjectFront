import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[]
  },
  getters: {
    itemInCart(state){
      return state.cart
    }
  },
  mutations: {
    itemFromAction(state,item){
      state.cart.push(item)
    }
  },
  actions: {
    itemFromProduct({commit},item){
      commit("itemFromAction",item)

    }
  },

})
