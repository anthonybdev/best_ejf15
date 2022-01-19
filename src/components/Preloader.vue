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
  data: () => ({
    // test: true
  }),
  // computed: mapState({ showPreloader: (state) => state.showPreloader }),
  computed: mapState(['showPreloader', 'isFormSended']),
  mounted() {
    const animation = lottie.loadAnimation({
      container: document.querySelector('#preloader'), // the dom element
      renderer: 'svg',
      animationData: animationData,
      loop: true,
      autoplay: true
    });
    animation.addEventListener('loopComplete', () => {
      // if (!this.test) {
      //   this.$store.commit('changePreloaderState', false);
      //   animation.destroy();
      // }
      // this.$store.commit('changePreloaderState', false);
      // animation.destroy();
      if (!this.isFormSended) {
        this.$store.commit('changePreloaderState', false);
        animation.destroy();
      }
    });
  }
};
</script>

<style lang="scss">
// .preloader-wrapper {
//   position: relative !important;
//   // top: 0;
//   // left: 0;
//   height: 100vh;
//   background-color: white;
//   width: auto;
//   display: flex;
//   opacity: 1;
//   justify-content: center;
//   z-index: 9999;
// }

.preloader-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  height: 100vh;
  // width: 100%;
  background-color: white;
}
// .fade-enter-active {
//   transition: opacity 0.8s;
//   animation-name: scaleIn;
//   animation-duration: 0.8s;
// }
// .fade-leave-active {
//   transition: opacity 0.3s;
//   animation-name: scaleOut;
//   animation-duration: 0.3s;
// }

// .fade-enter {
//   opacity: 0;
// }
// .fade-leave-to {
//   opacity: 0;
// }
// @keyframes scaleOut {
//   0% {
//     transform: scale(1);
//   }
//   100% {
//     transform: scale(0);
//   }
// }
// @keyframes scaleIn {
//   0% {
//     transform: scale(0);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
</style>
