<template>
  <div class="container container-padding">
    <h3 class="heading">ПРОПОЗИЦІЯ</h3>
    <div class="mainOfferWrapper">
      <OfferCard
        :offer-name="mainObj.offerName"
        :offer-price="mainObj.offerPrice"
        :offer-text="mainObj.offerText"
        :popup="mainObj.popup"
        :main="true"
      />
    </div>
    <div class="instrWrapper">
      <span class="additionalText">ДОДАТКОВІ ОПЦІЇ</span>
      <span class="instructionText"
        >Оберіть пакети, що бажаєте додати до кошика</span
      >
    </div>
    <div class="reviewsWrapper">
      <div v-for="card in optionsObj" :key="card.id">
        <OfferCard
          :offer-name="card.offerName"
          :offer-text="card.offerText"
          :offer-price="card.offerPrice"
          :popup="card.popup"
        />
      </div>
    </div>
    <span class="elDescDesk"
      >Партнерам ІЯК 2021 — знижка -5%<br />
      Пакет "Basic" + Усі додаткові опції — знижка -2 000 &#8372;</span
    >
    <span class="additionalText">КОШИК</span>
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
        <div v-if="isAdditionalArea" class="elDiv">
          <CartEl :el="areaObj" />
        </div>
        <span v-show="!isPartner && !isSale" class="elName"
          >{{ $filters.numberWithSpace(getTotalSum)
          }}<span class="ukrText">&#8372;</span></span
        >
        <div v-show="isPartner || isSale" class="SumWrapper">
          <span class="saleSum"
            >{{ $filters.numberWithSpace(getTotalSum) }} &#8372;
          </span>
          <span class="elName"
            >{{ ` ${$filters.numberWithSpace(getSaleSum)}`
            }}<span class="ukrText">&#8372;</span></span
          >
        </div>
        <span class="elDescMob"
          >Партнерам ІЯК 2021 — знижка -5%<br />
          Пакет "Basic" + Усі додаткові опції — знижка -2 000 &#8372;</span
        >
      </div>
      <div class="formWrapper">
        <OfferForm />
      </div>
    </div>
  </div>
</template>

<script>
import OfferCard from '@/components/Pamphlet/comp/OfferCard';
import CartEl from '@/components/Pamphlet/comp/CartEl';
import OfferForm from '@/components/Pamphlet/comp/OfferForm';

export default {
  name: 'Offers',
  components: {
    OfferCard,
    CartEl,
    OfferForm
  },
  data: () => ({
    mainObj: {
      offerName: 'BASIC',
      offerPrice: 8000,
      popup: 'showPopup1',
      offerText:
        'Стенд\nЛоготип на сайті та брендволі проєкту\nТранслювання відеоролика на місці події\nЗгадка компанії у відеоанонсах в stories\nПоширення вакансій компанії'
    },
    optionsObj: [
      {
        offerName: 'EXTENDED',
        offerPrice: 4000,
        popup: 'showPopup2',
        offerText:
          'Участь у другому дні проєкту\nПанельні дискусії\nInstagram Guide'
      },
      {
        offerName: 'WORKFLOW',
        offerPrice: 5000,
        popup: 'showPopup3',
        offerText:
          'Workshop від компанії\nSpeed dating\nРозсилка можливостей та вакансій від компаній'
      },
      {
        offerName: 'HASHTAG',
        offerPrice: 8000,
        popup: 'showPopup4',
        offerText:
          'Пост-дайджест компаній в\nTelegram\nДень інтерактивних stories в Instagram\nДоступ до бази CV учасників'
      }
    ],
    areaObj: {
      itemName: 'Додаткова площа',
      price: 2000
    },
    totalSum: 0,
    saleSum: 0
  }),
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    sum() {
      return this.$store.getters.getSum;
    },
    isAdditionalArea() {
      return this.$store.state.additionalArea;
    },
    isPartner() {
      return this.$store.state.isPartner;
    },
    isSale() {
      return this.$store.getters.getSale;
    },
    getTotalSum() {
      return this.$store.getters.getTotalSum;
    },
    getSaleSum() {
      return this.$store.getters.getSaleSum;
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
.instructionText {
  font-size: 0.83rem;
  line-height: 1.041rem;
  letter-spacing: 0.1rem;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'MontserratRegular';
  margin-top: 0.83rem;
}
.reviewsWrapper {
  margin-top: 4em;
  display: flex;
  justify-content: space-between;
}
.mainOfferWrapper {
  margin-top: 5em;
  margin-bottom: 4em;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.additionalText {
  font-size: 3.33em;
  color: #ffffff;
  letter-spacing: 0.2em;
}
.instrWrapper {
  display: flex;
  flex-direction: column;
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
.saleSum {
  font-family: 'MontserratRegular';
  text-decoration-line: line-through;
  color: #ffffff;
  letter-spacing: 0.1rem;
  background: linear-gradient(
    99.09deg,
    rgba(204, 0, 255, 0.3) 0%,
    rgba(204, 0, 255, 0.1) 100%
  );
  line-height: 1.52rem;
  font-size: 1.25rem;
  padding: 0 0.5rem;
  display: inline-block;
  margin-left: -1.2rem;
}
.ukrText {
  font-family: 'UkrGryvna';
}
.SumWrapper {
  margin-left: auto;
}
.formWrapper {
  flex: 2;
}
.elDescMob {
  display: none;
}
.elDescDesk {
  display: block;
  margin-left: auto;
  text-align: right;
  font-family: 'MontserratRegular';
  line-height: 1.041rem;
  font-size: 0.83rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 3.47rem;
  margin-bottom: 2.08rem;
}
@media screen and (max-width: 768px) {
  .mainOfferWrapper {
    display: flex;
    justify-content: center;
    // pointer-events: none;
  }
  .additionalText {
    font-size: 6.25rem;
    text-align: center;
    margin-top: 15.625rem;
    color: #ffffff;
    letter-spacing: 0.2rem;
  }
  .instructionText {
    font-size: 3.125rem;
    line-height: 3.75rem;
    letter-spacing: 0.1rem;
    margin-top: 3.75rem;
    text-align: center;
  }
  .reviewsWrapper {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }
  .elDiv {
    margin-top: 7.5rem;
    margin-bottom: 0;
  }
  .cartContainer {
    flex-direction: column;
  }
  .cartContainer {
    padding: 0;
  }
  .elName {
    font-size: 6.25rem;
    margin-left: auto;
    padding-right: 8.75rem;
    margin-top: 7.5rem;
    letter-spacing: 0.5rem;
  }
  .elDescMob {
    display: block !important;
    margin-left: auto;
    text-align: right;
    font-family: 'MontserratRegular';
    line-height: 3.75rem;
    font-size: 3.125rem;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 7.5rem;
  }
  .elDescDesk {
    display: none;
  }
  .formWrapper {
    margin-top: 15.625rem;
  }
  .cartWrapper {
    margin-right: 0;
  }
  .SumWrapper > .elName {
    margin-top: 0;
  }
  .saleSum {
    font-family: 'MontserratRegular';
    text-decoration-line: line-through;
    color: #ffffff;
    letter-spacing: 0.5rem;
    background: linear-gradient(
      99.09deg,
      rgba(204, 0, 255, 0.3) 0%,
      rgba(204, 0, 255, 0.1) 100%
    );
    line-height: 4.3rem;
    font-size: 4rem;
    padding: 0 1.8rem;
    display: inline-block;
    margin-left: -4.5rem;
    margin-top: 2em;
  }
}
</style>
