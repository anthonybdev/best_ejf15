<template>
  <div class="container">
    <div class="cardWrapper">
      <div class="compName">
        <h4>{{ compName }}</h4>
      </div>
      <div class="compText">
        <p>
          {{ compText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ReviewCard',
  props: {
    compName: {
      type: String,
      required: true
    },
    compText: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  font-family: 'BebasNeueBold';
  font-size: 1vw;
  width: 23.5em;
  height: 14.86em;
  background: linear-gradient(112.08deg, rgba(0, 6, 27, 0) 0%, #1f0029 100%);
  border-radius: 1.041em; // to be tested
}
.cardWrapper {
  color: #fff;
  letter-spacing: 0.1em;
  padding-top: 2em;
}
.compName {
  margin-left: 1.25em;
  h4 {
    font-size: 2.5em;
  }
}
.compText {
  font-family: 'MontserratThin';
  font-weight: 300;
  margin-top: 0.76em;
  width: 17.8em;
  margin-left: 2.9em;
  p {
    font-size: 0.83em;
    text-align: justify;
  }
}
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
  .compName {
    margin-left: 5rem;
    h4 {
      font-size: 6.25rem;
    }
  }
  .compText {
    margin-top: 3.125rem;
    width: 73.4rem;
    margin-left: 11.56rem;
    margin-bottom: 23.75rem;
    p {
      font-size: 3.75rem;
      line-height: 4.68rem;
      text-align: justify;
    }
  }
}
</style>
