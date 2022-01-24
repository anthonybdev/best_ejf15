<template>
  <div>
    <form class="offerForm" @submit.prevent="onSumbit">
      <div class="partnerBlock">
        <img
          v-show="!isPartner"
          class="additionalImg"
          src="@/assets/icons/uncheckedIcon.svg"
          alt="checkedIcon"
          @click="changeIsPartner"
        />
        <img
          v-show="isPartner"
          class="additionalImg"
          src="@/assets/icons/checkedIcon.svg"
          alt="checkedIcon"
          @click="changeIsPartner"
        />
        <span class="additionalArea" @click="changeIsPartner"
          >Постійний партнер</span
        >
      </div>
      <div class="inputWrapper">
        <input
          v-model="obj.companyName"
          type="text"
          placeholder="Назва компанії"
          required
        />
        <input
          v-model="obj.companyEmail"
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <div class="btnWrapper">
        <button class="sumbitButton">ОФОРМИТИ</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data: () => ({
    obj: {
      companyName: '',
      companyEmail: ''
    }
  }),
  computed: mapState(['isPartner']),
  methods: {
    onSumbit() {
      this.$store.dispatch('sendMail', this.obj);
      this.obj.companyName = '';
      this.obj.companyEmail = '';
    },
    changeIsPartner() {
      this.$store.commit('changeIsPartner');
    }
  }
};
</script>
<style lang="scss" scoped>
.offerForm {
  display: flex;
  flex-direction: column;
}
.inputWrapper {
  display: flex;
  flex-direction: column;
}
input {
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  -ms-appearance: none !important;
  -o-appearance: none !important;
  appearance: none !important;
  box-shadow: none;
  outline: none;
  border: none;
  padding: 0.41rem 0.9rem;
  font-family: 'MontserratRegular';
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  line-height: 22px;
  color: #000000;
}
input:first-child {
  margin-bottom: 1.8rem;
}
input::placeholder {
  color: #b0b0b0;
}
input:focus {
  outline: none;
  border: none;
}
.sumbitButton {
  background: linear-gradient(112.08deg, #4f20b4 0%, #1f0029 100%),
    linear-gradient(112.08deg, #6443c1 0%, #310432 100%);
  border-radius: 15px;
  padding: 1.04rem 4.09rem;
  color: #ffffff;
  font-size: 2.5rem;
  letter-spacing: 0.1rem;
  font-family: 'BebasNeueCyrillic';
  outline: none;
  border: none;
}
.submitButton:focus {
  outline: none;
}
.btnWrapper {
  text-align: center;
  margin-top: 3.125rem;
}
.partnerBlock {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 1.3rem;
}
.additionalArea {
  font-family: 'MontserratRegular';
  color: #ffffff;
  margin-left: 0.93rem;
  font-size: 1.25rem;
  line-height: 1.52rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
}
.additionalImg {
  margin-top: 0.1rem;
  width: 1.041rem;
  height: auto;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  input:first-child {
    margin-bottom: 9.68rem;
  }
  input {
    padding: 2.18rem 0;
    padding-left: 5rem;
    font-family: 'MontserratRegular';
    font-size: 3.75rem;
    line-height: 4.68rem;
  }
  .sumbitButton {
    padding: 2.8rem 11.56rem;
    font-size: 6.25rem;
    letter-spacing: 0.5rem;
  }
  .btnWrapper {
    margin-top: 7.5rem;
  }
  .partnerBlock {
    margin-top: -1rem;
    margin-bottom: 7.18rem;
  }
  .additionalArea {
    font-family: 'MontserratRegular';
    font-size: 3.75rem;
    margin-left: 3rem;
    line-height: 5.625rem;
  }
  .additionalImg {
    margin-top: 0.3rem;
    width: 4.68rem;
    height: auto;
  }
}
</style>
