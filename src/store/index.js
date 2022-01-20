import { createStore } from 'vuex';
import emailjs from '@emailjs/browser';

export default createStore({
  state: {
    showPreloader: true, // must be true
    isFormSended: false,
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
    changeFormSended(state, payload) {
      state.isFormSended = payload;
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
      commit('changeFormSended', true);
      let finalArray = [];
      Object.keys(state.cartItems).forEach((el) => {
        const element = state.cartItems[el];
        if (element.state) {
          finalArray.push([element.itemName, element.price]);
        }
      });
      let sum = getters.getSum;
      if (sum === 23000) sum = 21000;
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
            commit('changeFormSended', false);
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
