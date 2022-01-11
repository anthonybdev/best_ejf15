<template>
  <div class="container container-padding">
    <h3 class="heading">ВІДГУКИ&nbsp;ПАРТНЕРІВ</h3>
    <div class="reviewsWrapper">
      <div v-for="card in propObj" :key="card.id">
        <ReviewCard :comp-name="card.compName" :comp-text="card.compText" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ReviewCard from '@/components/Pamphlet/comp/ReviewCard';
export default {
  name: 'Reviews',
  components: {
    ReviewCard
  },
  data: () => ({
    propObj: [
      {
        compName: 'COMPANY NAME 1',
        compText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        compName: 'COMPANY NAME 2',
        compText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        compName: 'COMPANY NAME 3',
        compText:
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
</style>
