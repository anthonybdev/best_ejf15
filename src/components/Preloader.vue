<template>
  <div v-if="showPreloader" class="preloader-wrapper">
    <div id="preloader"></div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import animationData from '../assets/data.json';
import { mapState } from 'vuex';

export default {
  computed: mapState(['showPreloader', 'isLoaded', 'isFormSended']),
  mounted() {
    const animation = lottie.loadAnimation({
      container: document.querySelector('#preloader'), // the dom element
      renderer: 'svg',
      animationData: animationData,
      loop: true,
      autoplay: true
    });
    animation.addEventListener('loopComplete', () => {
      if (!this.isLoaded) {
        this.$store.commit('changePreloaderState', false);
        animation.destroy();
      }
    });
  }
};
</script>

<style lang="scss">
.preloader-wrapper {
  position: absolute;
  z-index: 999;
  height: 100vh;
  overflow: hidden;
  background-color: white;
}

#preloader > svg {
  height: 100vh !important;
  width: 100vw !important;
  display: flex;
}
</style>
