<template>
  <div class="resultWrapper" :class="{ red: showBadResult }">
    <p v-if="showGoodResult" class="resultText">Успішно оформлено</p>
    <p v-else class="resultText">Щось пішло не так :(</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState(['showGoodResult', 'showBadResult']),
  mounted() {
    setTimeout(() => {
      document.querySelector('.resultWrapper').classList.toggle('active');
      setTimeout(() => {
        document.querySelector('.resultWrapper').classList.toggle('active');
        setTimeout(() => {
          this.$store.commit('changeGoodResult', false);
          this.$store.commit('changeBadResult', false);
          this.$store.commit('changeFormLoader', false);
        }, 1000);
      }, 4000);
    }, 1);
  }
};
</script>

<style lang="scss" scoped>
.resultWrapper {
  background: #b1ffb1;
  font-size: 1vw;
  position: fixed;
  bottom: -300px;
  left: 50%;
  transform: translateX(-50%);
  height: 5.41rem;
  border-radius: 15px;
  width: 21.6rem;
  transition: 1.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.resultWrapper.active {
  bottom: 30px;
  transition: 1.3s;
}
.resultWrapper.red {
  background: #ffb1b1;
}
.resultText {
  font-size: 1.25rem;
  line-height: 1.52rem;
  letter-spacing: 0.1rem;
  font-family: 'MontserratRegular';
  color: #3d8d3d;
}
.red > .resultText {
  color: #8d3d3d;
}
@media screen and (max-width: 768px) {
  .resultWrapper {
    height: 12.98rem;
    width: 60rem;
  }
  .resultText {
    font-size: 3.75rem;
    line-height: 4.68rem;
    letter-spacing: 0.5rem;
  }
}
</style>
