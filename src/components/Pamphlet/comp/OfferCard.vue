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
      <InfoButton @click="changeCartItemByCont(), changePopupState(popup)" />
    </div>
    <div class="cardWrapper">
      <div class="offerName">
        <h4>{{ offerName }}</h4>
      </div>
      <div class="offerText">
        <p>
          {{ offerText }}
        </p>
      </div>
      <div v-if="main" class="offerArea">
        <img
          v-show="!isAdditionalArea"
          class="additionalImg"
          src="@/assets/icons/uncheckedIcon.svg"
          alt="checkedIcon"
          @click="changeAdditionalArea"
        />
        <img
          v-show="isAdditionalArea"
          class="additionalImg"
          src="@/assets/icons/checkedIcon.svg"
          alt="checkedIcon"
          @click="changeAdditionalArea"
        />
        <span class="additionalArea" @click="changeAdditionalArea"
          >Додаткова площа (+ 3 000 &#8372;)</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import InfoButton from '@/components/Pamphlet/utils/InfoButton';
export default {
  name: 'OfferCard',
  components: {
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
    },
    popup: {
      type: String,
      required: true
    }
  },
  data: () => ({
    checkedLocal: false
  }),
  computed: {
    checked() {
      if (this.$store.state.cartItems[this.offerName.replace(/\s/g, '')]) {
        return this.$store.state.cartItems[this.offerName.replace(/\s/g, '')]
          .state;
      } else {
        return null;
      }
    },
    isAdditionalArea() {
      return this.$store.state.additionalArea;
    }
  },
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
    changeAdditionalArea() {
      this.$store.commit('changeAdditionalArea');
    },
    changePopupState(payload) {
      document.body.classList.toggle('hiddenOverflow');
      document.querySelector('.backgr').classList.toggle('active');
      this.$store.commit('changePopupState', payload);
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
  margin-top: 0 !important;
  background: linear-gradient(112.08deg, rgba(0, 6, 27, 0) 0%, #1f0029 100%);
  border-radius: 1.041em;
  position: relative;
  cursor: pointer;
  // z-index: 1;
}
.containerMain {
  cursor: auto !important;
  height: 21rem;
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
.offerArea {
  display: flex;
  align-items: center;
  margin-top: 0.83rem;
}
.additionalArea {
  font-family: 'MontserratRegular';
  margin-left: 0.93rem;
  font-size: 0.83rem;
  line-height: 1.38rem;
  cursor: pointer;
}
.additionalImg {
  margin-top: 0.1rem;
  margin-left: 2.9rem;
  width: 1.041rem;
  height: auto;
  cursor: pointer;
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
// @keyframes fadeIn {
//   0% {
//     opacity: 0;
//     transition: all 0.2s ease-in-out;
//     transform: scale(0.8);
//   }
//   100% {
//     opacity: 1;
//     transform: scale(1);
//   }
// }
// @keyframes fadeOut {
//   0% {
//     opacity: 1;
//     transform: scale(1);
//   }
//   100% {
//     transform: scale(0.8);
//     opacity: 0;
//   }
// }
// .popup-fade-enter-active {
//   animation: fadeIn 0.5s;
// }
// .popup-fade-leave-active {
//   animation: fadeOut 0.5s;
// }
// .offerPopup {
//   box-sizing: border-box;
//   position: fixed;
//   z-index: 2;
//   top: 0;
//   left: 0;
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   // filter: blur(5px);
//   // -webkit-filter: blur(5px);
// }
// .popup-blurr {
//   position: relative;
//   top: 0;
//   left: 0;
//   height: 100vh;
//   width: 100vw;
//   // background-color: rgb(255, 255, 255);

//   filter: blur(10px);
//   -webkit-filter: blur(10px);
// }
// .popupWrapper {
//   position: absolute;
//   width: 53.75rem;
//   height: 37.9rem;
//   background-color: #ffffff;
//   z-index: 100;
//   // filter: blur(0px);
//   // -webkit-filter: blur(0px);
// }
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
    margin-top: 12.187rem !important;
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
  // .containerMain {
  //   cursor: auto !important;
  //   height: 18.2rem;
  // }
  .offerArea {
    margin-top: -1rem;
    margin-bottom: 7.18rem;
  }
  .additionalArea {
    font-family: 'MontserratRegular';
    font-size: 3.75rem;
    margin-left: 3rem;
    line-height: 5.625rem;
  }
  .additionalImg {
    margin-top: 0.3rem;
    width: 4.68rem;
    margin-left: 11.56rem;
    height: auto;
  }
}
</style>
