<template>
  <div class="backgr">
    <Top />
    <Invest />
    <AboutEJF />
    <Opportunities />
    <Descr />
    <Reviews />
    <Offers />
    <Organisator />
    <Contacts />
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Pamphlet/Top';
import AboutEJF from '@/components/Pamphlet/AboutEJF';
import Reviews from '@/components/Pamphlet/Reviews';
import Offers from '@/components/Pamphlet/Offers';
import Invest from '@/components/Pamphlet/Invest';
import Opportunities from '@/components/Pamphlet/Opportunities';
import Descr from '@/components/Pamphlet/Descr';
import Organisator from '@/components/Pamphlet/Organisator';
import Contacts from '@/components/Pamphlet/Contacts';

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
    Contacts
  }
};
</script>

<style lang="scss">
.backgr {
  background-color: #00061b;
}
.heading {
  font-size: 5em;
  letter-spacing: 0.2em;
  color: transparent;
  -webkit-text-stroke-width: 0.027em;
  -webkit-text-stroke-color: #ffffff;
}
@media screen and (max-width: 768px) {
  .container-padding {
    font-size: 1vw !important;
    padding: 0 3.125em;
    // margin-top: 46.875rem;
    margin-top: 150px;
  }
  .heading {
    font-size: 7.5rem;
    letter-spacing: 0.2rem;
    text-align: center;
  }
}
</style>
