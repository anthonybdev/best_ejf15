<template>
  <div class="container container-padding">
    <h3 class="heading" data-aos="fade-up">ВІДГУКИ&nbsp;ПАРТНЕРІВ</h3>
    <div class="reviewsWrapper">
      <div v-for="card in propObj" :key="card.id" class="cardItem">
        <ReviewCard
          :comp-name="card.compName"
          :comp-text="card.compText"
          data-aos="fade-up"
        />
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
        compName: 'AMC Bridge',
        compText:
          'Роксолана Харузіна: "Класна подія, яка збирає в одному місці дуже амбітних і талановитих студентів".'
      },
      {
        compName: 'Infopulse',
        compText: `Юлія Фіцак: "Цього року ми вже втретє приєдналися до ярмарку кар'єри... Ми прагнемо бути для
          української молоді компанією, у якій вони можуть зростати як професійно, так і особистісно; і постійно докладаємо 
          до цього максимальних зусиль. Дякуємо за тісну
          співпрацю, організацію заходу та щорічні запрошення!".`
      },
      {
        compName: 'Cypress',
        compText:
          'Ірина Петрусь: "Інженерний ярмарок кар’єри є дуже професійним в плані організації. Ми щороку беремо участь, адже отримуємо хороших кандидатів і можливість прорекламувати компанію. Тут завжди хороша атмосфера та організаторська команда. Дякую!".'
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
  margin-top: 14rem;
}

.reviewsWrapper {
  margin-top: 4em;
  display: flex;
  justify-content: space-between;
  // margin-bottom: 27.4em;
}
@media screen and (max-width: 768px) {
  .reviewsWrapper {
    flex-direction: column;
    margin: 0;
  }
  .cardItem {
    margin-top: 7.5rem;
  }
}
</style>
