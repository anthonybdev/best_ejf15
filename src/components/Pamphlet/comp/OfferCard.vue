<template>
  <div class="container" @click="changeCartItemByCont()">
    <div class="priceGrad">
      <span>{{ offerPrice }}</span>
    </div>
    <div v-if="!main" class="checkboxWrapper">
      <Custom-checkbox v-model="checkedLocal" @click.prevent />
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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomCheckbox from '@/components/Pamphlet/utils/CustomCheckbox';
// import { mapState } from 'vuex';
export default {
  name: 'OfferCard',
  components: {
    CustomCheckbox
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
    checkedLocal: false
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
  watch: {
    checkedLocal() {
      console.log('checked');
      // this.changeCartItem();
    },
    checked() {
      console.log('fromComputed');
      this.checkedLocal = this.checked;
    }
  },
  created() {
    if (this.main) {
      this.checkedLocal = true;
    }
    this.changeCartItem();
  },
  methods: {
    changeCartItem() {
      this.$store.commit('changeCartItem', {
        item: this.offerName.replace(/\s/g, ''),
        state: this.checkedLocal,
        price: this.offerPrice
      });
    },
    changeCartItemByCont() {
      this.$store.commit('changeCartItemByCont', {
        item: this.offerName.replace(/\s/g, '')
      });
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
  font-family: 'MontserratThin';
  font-weight: 300;
  margin-top: 0.76em;
  width: 17.8em;
  margin-left: 2.9em;
  p {
    font-size: 0.83em;
    text-align: justify;
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
.checkboxWrapper {
  position: absolute;
  right: 0.6em;
  top: 0.4em;
  // pointer-events: none;
}
</style>
