<template>
  <div class="elWrap">
    <span class="elName">{{ el.itemName }}</span>
    <span class="elPrice">{{ el.price }}</span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'CartEl',
  props: {
    el: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scope>
.elWrap {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid rgba(227, 110, 216, 0.2);
  align-items: flex-end;
  padding-right: 1.8rem;
}
.elName {
  font-size: 2.5rem;
}
.elPrice {
  font-family: 'MontserratRegular';
  font-size: 1.25rem;
}
</style>
