<template>
  <div class="container container-padding">
    <div class="textWrapper">
      <h2 class="textTop">ІНЖЕНЕРНИЙ&nbsp;ЯРМАРОК</h2>
      <h2 class="textBottom">КАР&#8217;ЄРИ</h2>
    </div>
    <div class="infoTextWrapper">
      <div class="textGrad">
        <span>ЩО ЦЕ</span>
      </div>
      <div class="infoText-wrapper">
        <span class="infoText"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
          facilisis magna etiam tempor orci eu lobortis elementum. Suscipit
          adipiscing bibendum est ultricies integer. Varius sit amet mattis
          vulputate enim nulla aliquet porttitor.Velit egestas dui id
          ornare.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AboutEJF'
};
</script>

<style lang="scss" scoped>
.container {
  font-family: 'BebasNeueCyrillic';
  font-size: 1vw;
  display: flex;
  padding-top: 14em;
}

.textWrapper {
  display: flex;
  flex-direction: column;
  margin-right: 10.06em;
  padding-bottom: 25em;
}
.textTop {
  font-size: 5em;
  letter-spacing: 0.1em;
  color: #ffffff;
}
.textBottom {
  font-size: 10em;
  letter-spacing: 0.1em;
  -webkit-text-stroke-width: 0.0138em;
  -webkit-text-stroke-color: #ffffff;
  color: transparent;
}
.infoTextWrapper {
  display: flex;
  flex-direction: column;
}
.textGrad {
  background: linear-gradient(
    99.09deg,
    rgba(204, 0, 255, 0.3) 0%,
    rgba(204, 0, 255, 0.1) 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 5.9em;
  text-align: center;
  margin-bottom: 1.5em;
}
.textGrad > span {
  font-size: 2.5em;
  color: #ffffff;
}
.infoText-wrapper {
  font-family: 'MontserratRegular';
  line-height: 1.5em;
  font-weight: 400;
  color: #ffffff;
  width: 22.5em;
}
.infoText {
  font-size: 1.25em;
}
</style>
