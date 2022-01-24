<template>
  <Preloader v-if="showPreloader" class="preloader"></Preloader>
  <router-view />
</template>

<script>
import Preloader from './components/Preloader.vue';
import { mapState } from 'vuex';
export default {
  components: {
    Preloader
  },
  computed: mapState({ showPreloader: (state) => state.showPreloader })
};
</script>
<style lang="scss">
@font-face {
  font-family: 'BebasNeueCyrillic';
  src: url('./assets/fonts/Bebas_Neue_Cyrillic.ttf');
}
@font-face {
  font-family: 'BebasNeueBold';
  src: url('./assets/fonts/BebasNeue_Bold.otf');
}
@font-face {
  font-family: 'MontserratRegular';
  // src: url('./assets/fonts/Montserrat-Regular.otf');
  src: url('./assets/fonts/Montserrat-Light.otf');
}
@font-face {
  font-family: 'MontserratThin';
  src: url('./assets/fonts/Montserrat-Thin.otf');
}
@font-face {
  font-family: 'MontserratBold';
  src: url('./assets/fonts/Montserrat-Regular.otf');
}
@font-face {
  font-family: 'UkrGryvna';
  src: url('./assets/fonts/ukrGryvna.otf');
}
* {
  margin: 0px;
  padding: 0px;
}
h1,
h2,
h3,
h4 {
  font-size: 100%;
  font-weight: normal;
}
.hiddenOverflow {
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fadeIn-enter-active,
.fadeIn-leave-active {
  // transition: opacity 1s ease-in;
  transition: opacity 1.3s ease-in-out;
}

.fadeIn-enter-from,
.fadeIn-leave-to {
  opacity: 0;
}
.fadeIn1-enter-active,
.fadeIn1-leave-active {
  // transition: opacity 2s ease-in;
  transition: opacity 3s ease;
}

.fadeIn1-enter-from,
.fadeIn1-leave-to {
  opacity: 0;
}
.preloader {
  position: absolute;
}
#nav {
  padding: 30px;
  z-index: 1100;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container-padding {
  padding: 0 11.45em;
}

html {
  font-size: 1vw;
}
@media screen and (max-width: 900px) {
  .fadeIn-enter-active,
  .fadeIn-leave-active {
    // transition: opacity 1s ease-in;
    transition: opacity 0.5s ease;
  }

  .fadeIn-enter-from,
  .fadeIn-leave-to {
    opacity: 0;
  }
  .fadeIn1-enter-active,
  .fadeIn1-leave-active {
    // transition: opacity 2s ease-in;
    transition: opacity 3s ease;
  }

  .fadeIn1-enter-from,
  .fadeIn1-leave-to {
    opacity: 0;
  }
}
</style>
