<template>
  <div class="container container-padding">
    <div class="textWrapper">
      <h2 class="textTop">ІНЖЕНЕРНИЙ&nbsp;ЯРМАРОК</h2>
      <h2 class="textBottom">КАР&#8217;ЄРИ</h2>
    </div>
    <div class="infoTextWrapper">
      <div class="textGrad">
        <span>ПРО ПРОЄКТ</span>
      </div>
      <div class="infoText-wrapper">
        <span class="infoText"
          >Це захід з 14-річним досвідом, який протягом двох днів допомагає
          студентам познайомитися з провідними компаніями України, реалізувати
          свої навички, а компаніям — розповісти про ринок праці, актуальні
          вакансії, майбутні курси, знайти хороших працівників та стажерів серед
          студентів різних спеціальностей.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
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
  width: 10.5rem;
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

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    padding-top: 0;
  }
  .textWrapper {
    text-align: center;
    padding-bottom: 7.8125rem;
    margin-right: 0;
  }
  .textTop {
    font-size: 7.5rem;
  }
  .textBottom {
    font-size: 11.25rem;
    margin-top: -0.3rem;
  }
  .textGrad {
    width: 25rem;
    margin-bottom: 3.75rem;
  }
  .textGrad > span {
    font-size: 5.625rem;
    line-height: 6.5rem;
    padding-top: 1rem;
    display: block;
  }
  .infoText-wrapper {
    line-height: 4.68rem;
    font-weight: 400;
    width: auto;
  }
  .infoText {
    font-size: 3.75rem;
  }
}
</style>
