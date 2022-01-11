<template>
  <div class="container">
    <h1 class="textLogo">EJF&#8217;15</h1>
    <img class="imgLogo" src="@/assets/EjfLogoWhite.svg" alt="whitelogo" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Top'
};
</script>

<style lang="scss" scoped>
.container {
  font-family: 'BebasNeueBold';
  font-size: 1vw;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  margin-top: -3.53em;
}
.textLogo {
  font-size: 48em;
  padding-left: 0.1em;
  letter-spacing: 0.1em;
  text-align: center;
  // color: #00061b;
  color: transparent;
  -webkit-text-stroke-width: 0.0029em;
  -webkit-text-stroke-color: #ffffff;
}
.imgLogo {
  position: absolute;
  width: 25.5em;
  top: 8em;
}

@media screen and (max-width: 720px) {
  .imgLogo {
    top: 8.2em;
  }
}
</style>
