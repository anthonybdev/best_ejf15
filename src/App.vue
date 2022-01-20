<template>
  <Preloader v-if="showPreloader" class="preloader"></Preloader>
  <!-- <transition name="fadeIn">
    <div v-show="!showPreloader">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </transition> -->
  <router-view />
</template>

<script>
import Preloader from './components/Preloader.vue';
import { mapState } from 'vuex';
export default {
  components: {
    Preloader
  },
  computed: mapState({ showPreloader: (state) => state.showPreloader }),
  mounted() {
    console.log(this.showPreloader);
    console.log(process.env.VUE_APP_SERVICE_ID);
  }
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
// @font-face {
//   font-family: 'MontserratRegular';
//   src: url('./assets/fonts/Montserrat-Regular.otf');
// }
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
  font-family: 'MontserratLight';
  src: url('./assets/fonts/Montserrat-Light.otf');
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

// html {
//   margin-top: -16px !important;
// }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 0.5s ease;
}

.fadeIn-enter-from,
.fadeIn-leave-to {
  opacity: 0;
}
.preloader {
  position: absolute;
  // z-index: 999;
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
</style>
