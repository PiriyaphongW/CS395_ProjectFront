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
    ProductFromAction(state,product){
      let found = state.cart.find((item)=>item.id == product.id)
      if(found){
        found.qty = found.qty +1;
        found.total = found.qty*found.price;
      }else{
        state.cart.push(product);
      }
    }
  },
  actions: {
    itemFromProduct({commit},product){
      commit("ProductFromAction",product)

    }
  },

})
