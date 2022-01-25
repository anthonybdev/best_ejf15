<template>
  <div class="container container-padding">
    <h3 class="heading">ОРГАНІЗАТОР&nbsp;ПРОЄКТУ</h3>
    <div class="infoWrapper">
      <a
        rel="noreferrer noopener"
        target="_blank"
        href="https://best-lviv.org.ua/"
        class="imgLink"
      >
        <img class="infoImg" src="@/assets/icons/bestIcon.svg" alt="bestIcon" />
      </a>
      <span class="infoText"
        ><a
          class="infoTextBold"
          rel="noreferrer noopener"
          target="_blank"
          href="https://best-lviv.org.ua/"
          >BEST (Board of European Students of Technology)</a
        >
        – неприбуткова громадська організація, яка об’єднує студентів технічних
        спеціальностей для забезпечення обміну знаннями та співпраці компаній,
        університетів та студентів Європи.</span
      >
    </div>
    <div class="iconsWrapper">
      <div class="iconItem">
        <span class="iconNum">90</span>
        <span class="IconText">Осередків</span>
      </div>
      <div class="iconItem">
        <span class="iconNum">32</span>
        <span class="IconText">Країни</span>
      </div>
      <div class="iconItem">
        <!-- <span class="iconPlus">+</span> -->
        <span class="iconNum">33</span>
        <span class="IconText">Роки досвіду</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Organisator'
};
</script>

<style lang="scss" scoped>
.container {
  font-family: 'BebasNeueCyrillic';
  font-size: 1vw;
  display: flex;
  margin-top: 20rem;
  flex-direction: column;
}
.infoWrapper {
  display: flex;
  margin-top: 6.7rem;
}
.infoImg {
  width: 28.125rem;
  height: auto;
  margin-left: 11rem;
  margin-right: 14.09rem;
}
.infoText {
  font-family: 'MontserratRegular';
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.52rem;
  color: #ffffff;
  width: 23.2rem;
}
.infoTextBold {
  font-weight: 700;
  font-family: 'MontserratBold';
  color: #ffffff;
}
.iconsWrapper {
  margin-top: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.iconItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.iconNum {
  font-family: 'BebasNeueCyrillic';
  color: transparent;
  font-size: 5rem;
  letter-spacing: 0.2rem;
  -webkit-text-stroke-width: 0.138rem;
  -webkit-text-stroke-color: #ffffff;
}
.IconText {
  font-family: 'MontserratRegular';
  font-size: 1.25rem;
  line-height: 1.52rem;
  color: #ffffff;
  text-align: center;
}
.iconPlus {
  font-family: 'BebasNeue';
  color: #ffffff;
  font-size: 4rem;
  line-height: 5rem;
  letter-spacing: 0.2rem;
  font-weight: 700;
  right: 0;
  top: -2.5rem;
  position: absolute;
}
@media screen and (max-width: 768px) {
  .container {
    margin-top: 150px;
  }
  .infoImg {
    width: 46.875rem;
    height: auto;
  }
  .infoWrapper {
    flex-direction: column;
    margin-top: 7.5rem;
    align-items: center;
  }
  .infoText {
    margin-top: 7.5rem;
    font-family: 'MontserratRegular';
    font-size: 3.75rem;
    line-height: 4.68rem;
    width: 100%;
  }
  .infoTextBold {
    font-weight: 700;
    font-family: 'MontserratBold';
  }
  .iconsWrapper {
    margin-top: 15.625rem;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .iconNum {
    font-family: 'BebasNeueCyrillic';
    color: transparent;
    font-size: 20rem;
    line-height: 20rem;
    letter-spacing: 0.8rem;
    -webkit-text-stroke-width: 1px;
  }
  .IconText {
    font-family: 'MontserratRegular';
    font-size: 3.75rem;
    line-height: 3.75rem;
    letter-spacing: 0.5rem;
  }
  .iconPlus {
    font-family: 'BebasNeue';
    color: #ffffff;
    font-size: 12rem;
    line-height: 16rem;
    letter-spacing: 0.8rem;
    font-weight: 700;
    right: 35%;
    top: -7rem;
    position: absolute;
  }
  .iconItem {
    flex: 50%;
  }
  .iconItem:last-child {
    flex: 100%;
    margin-top: 15.625rem;
  }
}
</style>
