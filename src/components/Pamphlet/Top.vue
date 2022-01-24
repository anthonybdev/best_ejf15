<template>
  <!-- <div class="container">
    <h1 class="textLogo">EJF&#8217;15</h1>
    <img class="imgLogo" src="@/assets/EjfLogoWhite.svg" alt="whitelogo" />
  </div> -->
  <div class="logo-container">
    <transition name="fadeIn1">
      <img v-show="!showPreloader" src="@/assets/topLogo.png" alt="topLogo" />
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
export default {
  name: 'Top',
  computed: mapState(['showPreloader'])
};
</script>

<style lang="scss" scoped>
.logo-container {
  width: 100%;
  // height: auto;
  height: 100vh;
  display: flex;
  align-items: center;
}
.logo-container > img {
  width: 100%;
}
// .container {
//   font-family: 'BebasNeueBold';
//   font-size: 1vw;
//   overflow-x: hidden;
//   display: flex;
//   justify-content: center;
//   margin-top: -3.53em;
// }
// .textLogo {
//   font-size: 48rem;
//   padding-left: 0.1em;
//   letter-spacing: 0.1em;
//   text-align: center;
//   // color: #00061b;
//   color: transparent;
//   -webkit-text-stroke-width: 0.0029em;
//   -webkit-text-stroke-color: #ffffff;
// }
// .imgLogo {
//   position: absolute;
//   width: 25.5em;
//   top: 8em;
// }

// @media screen and (max-width: 720px) {
//   .imgLogo {
//     top: 8.2em;
//   }
// }
// @media screen and (max-width: 768px) {
//   .container {
//     margin-top: 0;
//     padding-top: 3.1rem;
//   }
//   .textLogo {
//     line-height: 48rem;
//   }
//   .imgLogo {
//     top: 6.8rem;
//   }
// }
@media screen and (max-width: 900px) {
  .logo-container {
    width: 100vw;
    height: auto;
    display: block;
  }
}
</style>
