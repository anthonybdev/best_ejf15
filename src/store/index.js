import { createStore } from 'vuex';

export default createStore({
  state: {
    showPreloader: true, // must be true
    cartItems: {
      // OFFER1: false,
      // OFFER2: false,
      // OFFERNAME3: false
    },
    sum: 0
  },
  getters: {
    getSum(state) {
      let temp = 0;
      Object.keys(state.cartItems).forEach((item) => {
        if (state.cartItems[item].state) temp += state.cartItems[item].price;
      });
      return temp;
    }
  },
  mutations: {
    changePreloaderState(state, payload) {
      state.showPreloader = payload;
    },
    changeCartItem(state, payload) {
      state.cartItems[payload.item] = {
        itemName: payload.item,
        state: payload.state,
        price: payload.price
      };
    },
    changeCartItemByCont(state, payload) {
      state.cartItems[payload.item].state =
        !state.cartItems[payload.item].state;
    }
  },
  actions: {},
  modules: {}
});
