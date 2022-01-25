<template>
  <div class="container">
    <div class="faceImg">
      <!-- <img src="@/assets/icons/blankImg.svg" alt="faceImg" /> -->
      <img
        :src="require('@/assets/faceImg/' + obj.img + '.jpg')"
        alt="faceImg"
      />
    </div>
    <div class="cardWrapper">
      <div class="compName">
        <!-- <h4>ГОРБАЧУК ВІКТОРІЯ</h4> -->
        <h4>{{ obj.name }}</h4>
      </div>
      <div class="compText">
        <!-- <p>Головний організатор</p> -->
        <p>{{ obj.position }}</p>
      </div>
      <div class="compNumber">
        <img
          class="phoneIcon"
          src="@/assets/icons/phoneIcon.svg"
          alt="phoneIcon"
        />
        <!-- <a href="tel:+380977632333">+380977632333</a> -->
        <a :href="`tel:${obj.tel}`">{{ obj.tel }}</a>
      </div>
      <div class="compEmail">
        <img
          class="mailIcon"
          src="@/assets/icons/mailIcon.svg"
          alt="mailIcon"
        />
        <!-- <a href="mailto:vika.horbachuk@gmail.com">vika.horbachuk@gmail.com</a> -->
        <a :href="`mailto:${obj.mail}`">{{ obj.mail }}</a>
      </div>
      <div class="botIconsWrapper">
        <div>
          <a :href="obj.telegram" rel="noreferrer noopener" target="_blank">
            <img
              src="@/assets/icons/telegramIcon.svg"
              alt="telegramIcon"
              class="baseIcon"
            />
          </a>
        </div>
        <div>
          <a :href="obj.inst" rel="noreferrer noopener" target="_blank">
            <img
              src="@/assets/icons/InstagramIcon.svg"
              alt="instagramIcon"
              class="baseIcon"
            />
          </a>
        </div>
        <div>
          <a :href="obj.linkedIn" rel="noreferrer noopener" target="_blank">
            <img
              src="@/assets/icons/linkedInIcon.svg"
              alt="linkedInIcon"
              class="baseIcon"
            />
          </a>
        </div>
      </div>
      <!-- <div class="compEmail">
        <img
          class="mailIcon"
          src="@/assets/icons/linkedInIcon.svg"
          alt="mailIcon"
        />
        <a :href="`mailto:${obj.linkedIn}`">{{ obj.linkedIn }}</a>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactCard',
  props: {
    obj: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  font-family: 'BebasNeueBold';
  position: relative;
  font-size: 1vw;
  width: 23.5rem;
  height: 16.31rem;
  background: linear-gradient(112.08deg, rgba(0, 6, 27, 0) 0%, #1f0029 100%);
  border-radius: 15px; // to be tested
}
.cardWrapper {
  color: #fff;
  padding-top: 2rem;
}
.compName {
  margin-left: 1.25rem;
  h4 {
    font-size: 2.5rem;
    letter-spacing: 0.05rem;
  }
}
.compText {
  font-family: 'MontserratRegular';
  font-weight: 300;
  margin-top: 0.1rem;
  margin-left: 1.25rem;
  margin-bottom: 2.36rem;
  p {
    font-size: 0.83rem;
    line-height: 1.041rem;
  }
}
.compNumber {
  margin-bottom: 0.9rem;
}
a {
  font-family: 'MontserratRegular';
  color: #ffffff;
  font-size: 0.83rem;
  line-height: 1.041rem;
  letter-spacing: 0.1rem;
  text-decoration: none;
}
.compNumber,
.compEmail {
  margin-left: 1.25rem;
}
.phoneIcon,
.mailIcon {
  width: 0.88rem;
  height: auto;
  margin-right: 1rem;
}
.faceImg > img {
  width: 13.54rem;
  height: auto;
}
.faceImg {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: -75%;
  border-radius: 15px 15px 0px 0px;
}
.botIconsWrapper {
  display: flex;
  justify-content: space-between;
  padding: 0 6.52rem;
  margin-top: 1.875rem;
}
.baseIcon {
  height: 1.25rem;
  width: auto;
}
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    margin-top: 46.875rem !important;
    // height: 43.75rem;
    height: 100%;
    border-radius: 15px;
  }
  .cardWrapper {
    padding-top: 0;
  }
  .compName {
    margin-left: 5rem;
    margin-top: 5.9rem;
    h4 {
      font-size: 6.25rem;
    }
  }
  .compText {
    margin-top: 3.125rem;
    margin-bottom: 7.5rem;
    margin-left: 5rem;
    p {
      font-size: 3.75rem;
      line-height: 4.68rem;
    }
  }
  a {
    font-size: 3.75rem;
    line-height: 4.68rem;
    letter-spacing: 0.5rem;
    text-decoration: none;
  }
  .compNumber,
  .compEmail {
    margin-left: 5rem;
  }
  .phoneIcon,
  .mailIcon {
    width: 3.98rem;
    height: auto;
    margin-right: 4.68rem;
  }
  .faceImg > img {
    width: 39rem;
    height: auto;
  }
  .faceImg {
    top: -60%;
  }
  .botIconsWrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 25%;
    margin-top: 8rem;
    padding-bottom: 6rem;
  }
  .baseIcon {
    height: 5rem;
    width: auto;
  }
}
</style>
