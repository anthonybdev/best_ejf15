<template>
  <div
    :class="{ chosen: checked, containerMain: main }"
    class="container"
    @click="changeCartItemByCont()"
  >
    <div class="priceGrad">
      <span>{{ $filters.numberWithSpace(offerPrice) }}</span>
    </div>
    <!-- <div v-if="!main" class="checkboxWrapper">
      <Custom-checkbox v-model="checkedLocal" @click.prevent />
    </div> -->
    <div class="infoWrapper">
      <InfoButton />
    </div>
    <div class="cardWrapper">
      <div class="offerName">
        <h4>{{ offerName }}</h4>
      </div>
      <div class="offerText">
        <p @click="changePopupState">
          {{ offerText }}
        </p>
      </div>
    </div>
  </div>
  <transition name="popup-fade">
    <div v-if="showPopup" class="offerPopup">
      <div class="popup-blurr"></div>
      <div class="popupWrapper">
        <div>This is popup</div>
        <span class="closeButton"
          ><img
            src="@/assets/icons/closeIcon.svg"
            alt="closeIcon"
            @click="changePopupState"
        /></span>
      </div>
    </div>
  </transition>
</template>

<script>
// @ is an alias to /src
// import CustomCheckbox from '@/components/Pamphlet/utils/CustomCheckbox';
import InfoButton from '@/components/Pamphlet/utils/InfoButton';
// import { mapState } from 'vuex';
export default {
  name: 'OfferCard',
  components: {
    // CustomCheckbox
    InfoButton
  },
  props: {
    offerName: {
      type: String,
      required: true
    },
    offerText: {
      type: String,
      required: true
    },
    offerPrice: {
      type: Number,
      required: true
    },
    main: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    checkedLocal: false,
    showPopup: false
  }),
  // computed: mapState({
  //   checked: function (state) {
  //     console.log('fromComputed');
  //     const checked = state.cartItems[this.offerName];
  //     this.checkedLocal = checked;
  //     return checked;
  //   }
  // }),
  computed: {
    checked() {
      if (this.$store.state.cartItems[this.offerName.replace(/\s/g, '')]) {
        return this.$store.state.cartItems[this.offerName.replace(/\s/g, '')]
          .state;
      } else {
        return null;
      }
    }
  },
  // watch: {
  //   checked() {
  //     console.log('fromComputed');
  //     this.checkedLocal = this.checked;
  //   }
  // },
  created() {
    if (this.main) {
      this.checkedLocal = true;
    }
    this.$store.commit('changeCartItem', {
      item: this.offerName.replace(/\s/g, ''),
      state: this.checkedLocal,
      price: this.offerPrice
    });
  },
  methods: {
    changeCartItemByCont() {
      if (this.main) return;
      this.$store.commit('changeCartItemByCont', {
        item: this.offerName.replace(/\s/g, '')
      });
    },
    changePopupState() {
      // document.querySelector('body').classList.toggle('active');
      // document.querySelectorAll('.container-padding').forEach((el) => {
      //   el.classList.toggle('active');
      // });
      // console.log(document.querySelectorAll('.container-padding'));
      this.showPopup = !this.showPopup;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  font-family: 'BebasNeueCyrillic';
  font-size: 1vw;
  width: 23.5em;
  height: 14.86em;
  background: linear-gradient(112.08deg, rgba(0, 6, 27, 0) 0%, #1f0029 100%);
  border-radius: 1.041em;
  position: relative;
  cursor: pointer;
  // z-index: 1;
}
.containerMain {
  cursor: auto !important;
}
.chosen {
  background: linear-gradient(112.08deg, #4f20b4 0%, #1f0029 100%);
}
.cardWrapper {
  color: #fff;
  letter-spacing: 0.1em;
  padding-top: 2em;
}
.offerName {
  margin-left: 1.25em;
  h4 {
    font-size: 2.5em;
  }
}
.offerText {
  font-family: 'MontserratRegular';
  font-weight: 300;
  margin-top: 0.76em;
  width: 17.8em;
  margin-left: 2.9em;
  p {
    font-size: 0.83em;
    line-height: 1.38rem;
    white-space: pre-line;
  }
}
.priceGrad {
  background: linear-gradient(
    99.09deg,
    rgba(204, 0, 255, 0.3) 0%,
    rgba(204, 0, 255, 0.1) 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 5.9em;
  text-align: center;
  position: absolute;
  right: 2.63em;
  top: -1.18em;
}
.priceGrad > span {
  font-size: 2.5em;
  color: #ffffff;
}
.infoWrapper {
  position: absolute;
  right: 0.6em;
  top: 0.7em;
  cursor: pointer;
}
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
.offerPopup {
  box-sizing: border-box;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  // filter: blur(5px);
  // -webkit-filter: blur(5px);
}
// .popup-blurr {
//   position: relative;
//   top: 0;
//   left: 0;
//   height: 100vh;
//   width: 100vw;
//   background-color: rgba(255, 255, 255, 0.041);
//   // filter: blur(5px);
//   // -webkit-filter: blur(5px);
// }
.popupWrapper {
  position: absolute;
  width: 53.75rem;
  height: 37.9rem;
  background-color: #ffffff;
  z-index: 100;
  // filter: blur(0px);
  // -webkit-filter: blur(0px);
}
// .mfp-zoom-in {
//   /* start state */
//   0% {
//   }

//   &.mfp-bg {
//     opacity: 0;
//     transition: all 0.3s ease-out;
//   }

//   /* animate in */
//   &.mfp-ready {
//     &.mfp-bg {
//       opacity: 0.8;
//     }
//   }

//   /* animate out */
//   &.mfp-removing {
//     .mfp-with-anim {
//     }
//     &.mfp-bg {
//       opacity: 0;
//     }
//   }
// }

@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    height: auto;
    margin-top: 12.187rem;
    border-radius: 15px;
  }
  .cardWrapper {
    color: #fff;
    letter-spacing: 0.1rem;
    padding-top: 2em;
  }
  .offerName {
    margin-left: 5rem;
    h4 {
      font-size: 6.25rem;
    }
  }
  .offerText {
    margin-top: 3.125rem;
    width: 73.4rem;
    margin-left: 11.56rem;
    margin-bottom: 7.18rem;
    p {
      font-size: 3.75rem;
      line-height: 5.625rem;
    }
  }
  .priceGrad {
    width: 19.68rem;
    right: 9.06rem;
    top: -4.5rem;
    padding: 1.25rem 0;
  }
  .priceGrad > span {
    font-size: 6.25rem;
  }
  .infoWrapper {
    right: 3.51em;
    bottom: 3.51rem;
    top: auto;
  }
}
</style>
