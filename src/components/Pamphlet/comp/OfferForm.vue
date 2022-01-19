<template>
  <div>
    <form class="offerForm" @submit.prevent="onSumbit">
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
export default {
  data: () => ({
    obj: {
      companyName: '',
      companyEmail: ''
    }
  }),
  methods: {
    onSumbit() {
      this.$store.dispatch('sendMail', this.obj);
    }
  }
};
</script>
<style lang="scss" scoped>
.offerForm {
  display: flex;
  flex-direction: column;
  // align-items: center;
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
  color: #b0b0b0;
}
// @-moz-document url-prefix() {
//   input {
//     font-size: 9px; /*reduce font size to match what is seen in chrome*/
//     line-height: 11px;
//   }
// }
input:first-child {
  margin-bottom: 1.8rem;
}
input::placeholder {
  color: #b0b0b0;
}
input:focus {
  outline: none;
  border: none;
  // border: specify yours;
}
.sumbitButton {
  background: linear-gradient(112.08deg, #1f0029 0%, rgba(0, 6, 27, 0) 100%);
  border-radius: 1rem;
  padding: 1.04rem 4.09rem;
  color: #ffffff;
  font-size: 2.5rem;
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
</style>
