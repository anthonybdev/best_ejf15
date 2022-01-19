<template>
  <div class="container container-padding">
    <h3 class="heading">ПРОПОЗИЦІЯ</h3>
    <div class="mainOfferWrapper">
      <OfferCard
        :offer-name="mainObj.offerName"
        :offer-price="mainObj.offerPrice"
        :offer-text="mainObj.offerText"
        :main="true"
      />
    </div>
    <span class="additionalText">ДОДАТКОВІ ОПЦІЇ</span>
    <div class="reviewsWrapper">
      <div v-for="card in optionsObj" :key="card.id">
        <OfferCard
          :offer-name="card.offerName"
          :offer-text="card.offerText"
          :offer-price="card.offerPrice"
        />
      </div>
    </div>
    <span class="additionalText">КОРЗИНА</span>
    <div class="cartContainer">
      <div class="cartWrapper">
        <div
          v-for="el in cartItems"
          v-show="el.state"
          :key="el.id"
          class="elDiv"
        >
          <CartEl :el="el" />
        </div>
        <span class="elName">{{ sum }}</span>
      </div>
      <div class="formWrapper">
        <OfferForm />
      </div>
    </div>

    <Test />
  </div>
</template>

<script>
// @ is an alias to /src
import OfferCard from '@/components/Pamphlet/comp/OfferCard';
import Test from '@/components/Pamphlet/comp/Test';
import CartEl from '@/components/Pamphlet/comp/CartEl';
import OfferForm from '@/components/Pamphlet/comp/OfferForm';

export default {
  name: 'Offers',
  components: {
    OfferCard,
    Test,
    CartEl,
    OfferForm
  },
  data: () => ({
    mainObj: {
      offerName: 'MAIN OFFER 1',
      offerPrice: 6000,
      offerText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    optionsObj: [
      {
        offerName: 'OFFER 1',
        offerPrice: 4000,
        offerText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        offerName: 'OFFER 2',
        offerPrice: 3000,
        offerText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        offerName: 'OFFER 3',
        offerPrice: 2000,
        offerText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  }),
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    sum() {
      return this.$store.getters.getSum;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  font-family: 'BebasNeueCyrillic';
  font-size: 1vw;
  display: flex;
  flex-direction: column;
}

.reviewsWrapper {
  margin-top: 4em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8.33rem;
}
.mainOfferWrapper {
  margin-top: 5em;
  margin-bottom: 4em;
  display: flex;
  justify-content: center;
  pointer-events: none; // test
}
.additionalText {
  font-size: 3.33em;
  color: #ffffff;
  letter-spacing: 0.2em;
}
.elDiv {
  margin-bottom: 1.6rem;
}
.cartContainer {
  margin-top: 3.5rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0 1.25rem;
}
.cartWrapper {
  display: flex;
  flex-direction: column;
  flex: 3;
  margin-right: 3.47rem;
}
.elName {
  color: #ffffff;
  font-size: 2.5rem;
  margin-left: auto;
  display: block;
  padding-right: 2rem;
}
.formWrapper {
  flex: 2;
}
</style>
