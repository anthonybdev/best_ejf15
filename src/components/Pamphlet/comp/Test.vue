<template>
  <div class="listWrapper">
    <div v-for="obj in cartItems" :key="obj.id" class="listItem">
      <span v-if="obj.state" class="item"
        >{{ obj.itemName }}, {{ obj.price }}</span
      >
    </div>
    <span class="item">{{ sum }}</span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Test',
  computed: {
    cartItems() {
      console.log(this.$store.state.cartItems);
      return this.$store.state.cartItems;
    },
    sum() {
      // console.log(this.$store.getters.getSum);
      return this.$store.getters.getSum;
    }
  }
};
</script>

<style lang="scss" scoped>
.listItem {
  display: flex;
  flex-direction: column;
  font-size: 1vw;
}
.item {
  color: #ffffff;
  font-size: 8em;
}
</style>
