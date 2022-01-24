import { createStore } from 'vuex';
import emailjs from '@emailjs/browser';

export default createStore({
  state: {
    showPreloader: true, // must be true
    isLoaded: false,
    cartItems: {},
    showPopup1: false,
    showPopup2: false,
    showPopup3: false,
    showPopup4: false,
    sum: 0,
    additionalArea: false,
    isPartner: false,
    showFormLoader: false,
    showGoodResult: false,
    showBadResult: false
  },
  getters: {
    getSum(state) {
      let temp = 0;
      Object.keys(state.cartItems).forEach((item) => {
        if (state.cartItems[item].state) temp += state.cartItems[item].price;
      });
      return temp;
    },
    getSale(state, getters) {
      if (getters.getSum == 25000) {
        return true;
      } else {
        return false;
      }
    },
    getTotalSum(state, getters) {
      let temp = getters.getSum;
      if (state.additionalArea) temp += 2000;
      return temp;
    },
    getSaleSum(state, getters) {
      let temp = getters.getSum;
      if (state.additionalArea) temp += 2000;
      if (getters.getSale) temp -= 2000;
      if (state.isPartner) temp *= 0.95;
      return temp;
    }
  },
  mutations: {
    changePreloaderState(state, payload) {
      state.showPreloader = payload;
    },
    changeFormLoader(state, payload) {
      state.showFormLoader = payload;
    },
    changeGoodResult(state, payload) {
      state.showGoodResult = payload;
    },
    changeBadResult(state, payload) {
      state.showBadResult = payload;
    },
    changePopupState(state, payload) {
      state[payload] = !state[payload];
    },
    changeFormSended(state, payload) {
      state.isFormSended = payload;
    },
    changeLoadedState(state, payload) {
      state.isLoaded = payload;
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
    },
    changeAdditionalArea(state) {
      state.additionalArea = !state.additionalArea;
    },
    changeIsPartner(state) {
      state.isPartner = !state.isPartner;
    }
  },
  actions: {
    sendMail({ state, getters, commit }, payload) {
      commit('changeFormLoader', true);
      let finalArray = [];
      Object.keys(state.cartItems).forEach((el) => {
        const element = state.cartItems[el];
        if (element.state) {
          finalArray.push([element.itemName, element.price]);
        }
      });
      let totalSum = getters.getTotalSum;
      let saleSum = getters.getSaleSum;
      const offerObj = {
        companyName: payload.companyName,
        companyEmail: payload.companyEmail,
        offerObj: finalArray.toString(),
        totalSum: totalSum,
        saleSum: saleSum,
        partner: state.isPartner ? 'Yes' : 'No',
        additionalArea: state.additionalArea ? 'Yes' : 'No'
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
            commit('changeGoodResult', true);
          },
          (error) => {
            console.log('FAILED...', error.text);
            commit('changeBadResult', true);
          }
        );
    }
  },
  modules: {}
});
