<template>
  <div class="container container-padding">
    <div class="textWrapper">
      <h2 class="textTop">ІНВЕСТУЙ У МАЙБУТНЄ</h2>
    </div>
    <div class="iconsWrapper">
      <div class="iconItem">
        <img
          class="iconImg"
          src="@/assets/icons/CalendarIcon.svg"
          alt="calendarIcon"
        />
        <span class="IconText">20.04.2022 — 21.04.2022</span>
      </div>
      <div class="iconItem">
        <img
          class="iconImg"
          src="@/assets/icons/locationIcon.svg"
          alt="locationIcon"
        />
        <span class="IconText">Львівська Політехніка</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Invest',
  mounted() {
    window.onload = () => {
      this.$store.commit('changeLoadedState', false);
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  font-size: 1vw;
  font-family: 'BebasNeueCyrillic';
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 7.63rem;
}
.textTop {
  text-align: center;
  font-size: 5em;
  letter-spacing: 0.1em;
  color: #ffffff;
}
.iconsWrapper {
  margin-top: 4.16rem;
  display: flex;
  justify-content: center;
}
.iconItem {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.iconItem:last-child {
  margin-left: 8.61rem;
}
.iconImg {
  height: 7.36rem;
  width: auto;
  display: block;
  margin-bottom: 1.73rem;
}
.IconText {
  font-family: 'MontserratRegular';
  font-size: 1.25rem;
  line-height: 1.52rem;
  letter-spacing: 0.1rem;
  color: #ffffff;
}

@media screen and (max-width: 768px) {
  .container {
    margin-top: 150px;
  }
  .textTop {
    font-size: 7.5em;
    letter-spacing: 0.5rem;
  }
  .iconsWrapper {
    margin-top: 10.9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .iconItem:last-child {
    margin-left: 0;
    margin-top: 6.875rem;
  }
  .iconImg {
    height: 16.56rem;
    margin-bottom: 4.68rem;
  }
  .IconText {
    font-size: 3.75rem;
    line-height: 4.68rem;
    letter-spacing: 0.5rem;
  }
}
</style>
