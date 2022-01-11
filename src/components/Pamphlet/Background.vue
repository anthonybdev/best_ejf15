<template>
  <div class="backgr">
    <Top />
    <AboutEJF />
    <Reviews />
    <Offers />
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Pamphlet/Top';
import AboutEJF from '@/components/Pamphlet/AboutEJF';
import Reviews from '@/components/Pamphlet/Reviews';
import Offers from '@/components/Pamphlet/Offers';
export default {
  name: 'Background',
  components: {
    Top,
    AboutEJF,
    Reviews,
    Offers
  }
};
</script>

<style lang="scss" scoped>
.backgr {
  background-color: #00061b;
}
</style>
