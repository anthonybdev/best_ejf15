<template>
  <transition name="fadeIn">
    <div v-show="!showPreloader" class="home">
      <!-- <img alt="ejf logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to EJF15 website" /> -->
      <Background />
    </div>
  </transition>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Background from '@/components/Pamphlet/Background.vue';
import { mapState } from 'vuex';
// import Background from '../components/Pamphlet/Background.vue';
export default {
  name: 'Home',
  components: {
    Background
    // Background
  },
  computed: mapState({ showPreloader: (state) => state.showPreloader })
  // mounted() {
  //   console.log(this.showPreloader);
  //   setTimeout(() => {
  //     this.$store.commit('changePreloaderState', true);
  //   }, 5000);
  // }
};
</script>
