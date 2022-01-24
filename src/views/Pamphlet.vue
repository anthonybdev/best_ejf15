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
import Background from '@/components/Pamphlet/Background.vue';
import { mapState } from 'vuex';
// import Background from '../components/Pamphlet/Background.vue';
export default {
  name: 'Home',
  components: {
    Background
  },
  computed: mapState({ showPreloader: (state) => state.showPreloader })
};
</script>
