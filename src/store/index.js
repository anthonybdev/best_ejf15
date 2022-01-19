import { createStore } from 'vuex';
import emailjs from '@emailjs/browser';

export default createStore({
  state: {
    showPreloader: false, // must be true
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
  actions: {
    sendMail({ state, getters, commit }, payload) {
      commit('changePreloaderState', true);
      let finalArray = [];
      Object.keys(state.cartItems).forEach((el) => {
        const element = state.cartItems[el];
        if (element.state) {
          finalArray.push([element.itemName, element.price]);
        }
      });
      const sum = getters.getSum;
      const offerObj = {
        companyName: payload.companyName,
        companyEmail: payload.companyEmail,
        offerObj: finalArray.toString(),
        totalSum: sum
      };
      emailjs
        .send(
          process.env.VUE_APP_SERVICE_ID,
          process.env.VUE_APP_TEMPLATE_ID,
          offerObj,
          process.env.VUE_APP_USER_ID
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            commit('changePreloaderState', false);
          },
          (error) => {
            console.log('FAILED...', error.text);
            // commit('changePreloaderState', true);
          }
        );
    }
  },
  modules: {}
});
