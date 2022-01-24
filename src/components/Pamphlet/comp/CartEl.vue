<template>
  <div class="elWrap">
    <span class="elName">{{ el.itemName }}</span>
    <span class="elPrice"
      >{{ $filters.numberWithSpace(el.price) }} &#8372;</span
    >
  </div>
</template>

<script>
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
@media screen and (max-width: 768px) {
  .elWrap {
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(227, 110, 216, 0.2);
    align-items: flex-end;
    padding-right: 8.75rem;
  }
  .elName {
    font-size: 6.25rem;
  }
  .elPrice {
    font-size: 3.75rem;
    line-height: 4.68rem;
  }
}
</style>
