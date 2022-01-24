<template>
  <span
    ><img class="infoIcon" src="@/assets/icons/infoIcon.svg" alt="infoIcon"
  /></span>
</template>

<script>
export default {
  name: 'InfoButton'
};
</script>

<style lang="scss" scoped>
.infoIcon {
  width: 0.86rem;
}
@media screen and (max-width: 768px) {
  .infoIcon {
    width: 3.9rem;
  }
}
</style>
