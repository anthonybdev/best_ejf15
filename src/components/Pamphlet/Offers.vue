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
    <Test />
  </div>
</template>

<script>
// @ is an alias to /src
import OfferCard from '@/components/Pamphlet/comp/OfferCard';
import Test from '@/components/Pamphlet/comp/Test';
export default {
  name: 'Offers',
  components: {
    OfferCard,
    Test
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
  })
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
  margin-bottom: 22.4em;
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
</style>
