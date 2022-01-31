<template>
  <div class="backgr">
    <Top />
    <div class="gradient">
      <Invest />
      <AboutEJF />
      <Opportunities />
      <Descr />
      <Reviews />
      <Offers />
      <Organisator />
      <Contacts />
    </div>
  </div>
  <transition name="popup-fade">
    <PopupOffer v-if="showPopup1" :popup="'showPopup1'" />
  </transition>
  <transition name="popup-fade">
    <PopupOffer v-if="showPopup2" :popup="'showPopup2'" />
  </transition>
  <transition name="popup-fade">
    <PopupOffer v-if="showPopup3" :popup="'showPopup3'" />
  </transition>
  <transition name="popup-fade">
    <PopupOffer v-if="showPopup4" :popup="'showPopup4'" />
  </transition>
  <FormLoader v-if="showFormLoader" />
</template>

<script>
import Top from '@/components/Pamphlet/Top';
import AboutEJF from '@/components/Pamphlet/AboutEJF';
import Reviews from '@/components/Pamphlet/Reviews';
import Offers from '@/components/Pamphlet/Offers';
import Invest from '@/components/Pamphlet/Invest';
import Opportunities from '@/components/Pamphlet/Opportunities';
import Descr from '@/components/Pamphlet/Descr';
import Organisator from '@/components/Pamphlet/Organisator';
import Contacts from '@/components/Pamphlet/Contacts';
import PopupOffer from '@/components/Pamphlet/comp/PopupOffer';
import FormLoader from '@/components/Pamphlet/utils/FormLoader';

import { mapState } from 'vuex';
export default {
  name: 'Background',
  components: {
    Top,
    AboutEJF,
    Reviews,
    Offers,
    Invest,
    Opportunities,
    Descr,
    Organisator,
    Contacts,
    PopupOffer,
    FormLoader
  },
  computed: mapState([
    'showPopup1',
    'showPopup2',
    'showPopup3',
    'showPopup4',
    'showFormLoader',
    'showGoodResult',
    'showBadResult'
  ]),
  methods: {
    changePopupState(payload) {
      document.querySelector('.backgr').classList.toggle('active');
      this.$store.commit('changePopupState', payload);
    }
  }
};
</script>

<style lang="scss">
.backgr {
  background-color: #00061b;
}
.gradient {
  background: no-repeat;
  -moz-background-size: 100%; /* Firefox 3.6+ */
  -webkit-background-size: 100%; /* Safari 3.1+ и Chrome 4.0+ */
  -o-background-size: 100%; /* Opera 9.6+ */
  background-size: 100%;
  z-index: 100;
  background-image: url('../../assets/icons/bgGradients.png');
}
.backgr.active {
  filter: blur(1px);
  -webkit-filter: blur(1px);
}
.heading {
  font-size: 5em;
  letter-spacing: 0.2em;
  color: transparent;
  -webkit-text-stroke-width: 0.027em;
  -webkit-text-stroke-color: #ffffff;
}
@media screen and (max-width: 768px) {
  .backgr {
    background: no-repeat;
    -moz-background-size: 100%; /* Firefox 3.6+ */
    -webkit-background-size: 100%; /* Safari 3.1+ и Chrome 4.0+ */
    -o-background-size: 100%; /* Opera 9.6+ */
    background-size: 100%;
    background-image: url('../../assets/icons/bgMobileGradients.png');
    background-color: #00061b;
  }
  .gradient {
    background: none;
  }
  .container-padding {
    font-size: 1vw !important;
    padding: 0 3.125em;
    margin-top: 150px !important;
  }
  .heading {
    font-size: 7.5rem;
    letter-spacing: 0.2rem;
    text-align: center;
  }
}
</style>
<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transition: all 0.2s ease-in-out;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
    opacity: 0;
  }
}
.popup-fade-enter-active {
  animation: fadeIn 0.5s;
}
.popup-fade-leave-active {
  animation: fadeOut 0.5s;
}
</style>
