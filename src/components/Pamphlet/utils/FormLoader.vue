<template>
  <div class="formLoaderWrapper">
    <div id="loaderComp"></div>
  </div>
  <FormResult v-if="showGoodResult && isResult" />
  <FormResult v-if="showBadResult && isResult" />
</template>

<script>
import lottie from 'lottie-web';
import animationData from '@/assets/dataWhite.json';
import FormResult from '@/components/Pamphlet/utils/FormResult';

import { mapState } from 'vuex';
export default {
  components: {
    FormResult
  },
  data: () => ({
    isResult: false
  }),
  computed: mapState(['showGoodResult', 'showBadResult']),
  mounted() {
    const animation = lottie.loadAnimation({
      container: document.querySelector('#loaderComp'), // the dom element
      renderer: 'svg',
      animationData: animationData,
      loop: true,
      autoplay: true
    });
    animation.addEventListener('loopComplete', () => {
      if (this.showGoodResult || this.showBadResult) {
        animation.destroy();
        this.isResult = true;
      }
    });
    setTimeout(() => {
      document.querySelector('.formLoaderWrapper').classList.toggle('active');
    }, 1);
  }
};
</script>

<style lang="scss" scoped>
.formLoaderWrapper {
  font-size: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 15rem;
  height: 15rem;
  bottom: -300px;
  left: 50%;
  transform: translateX(-50%);
}
.formLoaderWrapper.active {
  bottom: 30px;
  transition: 1.3s;
}
@media screen and (max-width: 768px) {
  .formLoaderWrapper {
    width: 35rem;
    height: 35rem;
  }
}
</style>
