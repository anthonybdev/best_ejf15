<template>
  <div class="container container-padding">
    <div class="textWrapper">
      <h2 class="textTop">МОЖЛИВОСТІ ДЛЯ ПАРТНЕРІВ</h2>
    </div>
    <div class="iconsWrapper">
      <div class="iconItem">
        <img
          class="iconImg img1"
          src="@/assets/icons/voiceOverIcon.svg"
          alt="voiceOverIcon"
        />
        <span class="IconText"
          >Детальніше розказати студентам про компанію та можливості в ній</span
        >
      </div>
      <div class="iconItem">
        <img
          class="iconImg img2"
          src="@/assets/icons/trendingIcon.svg"
          alt="trendingIcon"
        />
        <span class="IconText"
          >Підвищити впізнаваність свого бренду серед студентів у момент
          планування кар'єрного шляху</span
        >
      </div>
      <div class="iconItem">
        <img
          class="iconImg img3"
          src="@/assets/icons/peopleIcon.svg"
          alt="poepleIcon"
        />
        <span class="IconText"
          >Знайти амбітних та талановитих людей в колектив</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Invest'
};
</script>

<style lang="scss" scoped>
.container {
  font-size: 1vw;
  font-family: 'BebasNeueCyrillic';
  display: flex;
  flex-direction: column;
  margin-top: 8.33rem;
}
.textTop {
  font-size: 3.33rem;
  letter-spacing: 0.1em;
  color: #ffffff;
}
.iconsWrapper {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.iconItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10.4rem;
}
.iconItem:last-child {
  margin-right: 0;
}
.iconImg {
  height: auto;
  display: block;
}
.img1 {
  width: 6.11rem;
  margin-top: -1.7rem;
  margin-bottom: 1.875rem;
}
.img2 {
  width: 5.55rem;
  margin-bottom: 2.7rem;
}
.img3 {
  width: 6.11rem;
  margin-bottom: 2.43rem;
}
.IconText {
  font-family: 'MontserratRegular';
  font-size: 1.25rem;
  line-height: 1.52rem;
  color: #ffffff;
  text-align: center;
  width: 16.45rem;
}

@media screen and (max-width: 768px) {
  .container {
    margin-top: 15.65rem;
  }
  .textTop {
    font-size: 6.25em;
    text-align: center;
    letter-spacing: 0.5rem;
  }
  .iconsWrapper {
    margin-top: 9.375rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .iconItem {
    margin-right: 0 !important;
  }
  .iconImg {
    height: 16.56rem;
    margin-bottom: 4.68rem;
  }
  .IconText {
    font-size: 3.75rem;
    line-height: 4.68rem;
    width: 62.5rem;
  }
  .img1 {
    width: 18.125rem;
    margin-bottom: 5.625rem;
  }
  .img2 {
    width: 16.56rem;
    margin-bottom: 7.81rem;
    margin-top: 12.5rem;
  }
  .img3 {
    margin-top: 11.56rem;
    width: 18.125rem;
    margin-bottom: 0;
  }
}
</style>
