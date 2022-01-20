<template>
  <div class="container container-padding">
    <div class="textWrapper">
      <h2 class="textBottom">ЯК УСЕ<br />ВІДБУВАТИМЕТЬСЯ</h2>
    </div>
    <div class="infoItemsWrapper">
      <div class="infoTextWrapper">
        <div class="textGrad">
          <span>ПЕРШИЙ ДЕНЬ</span>
        </div>
        <div class="infoText-wrapper">
          <span class="infoText"
            >Кожна з компаній отримує стенд, де матиме можливість поспілкуватися
            зі студентами, провести розіграші, аби презентувати себе
            відвідувачам події. У цей день проводяться воркшопи від компаній та
            speed datings, які допоможуть ще більше познайомити студентів зі
            своєю діяльністю і знайти потенційних працівників.</span
          >
        </div>
      </div>
      <div class="infoTextWrapper">
        <div class="textGrad">
          <span>ДРУГИЙ ДЕНЬ</span>
        </div>
        <div class="infoText-wrapper">
          <span class="infoText"
            >Цього дня відбувається презентація компаній, які обрали додатковий
            пакет Sapphire. У рамках його компанії зможуть обговорити зі
            студентами цікаві теми на панельних дискусіях та визначити для себе
            найбільш активних та компетентних потенційних працівників.</span
          >
        </div>
      </div>
      <div class="infoTextWrapper">
        <div class="textGrad">
          <span>ОНЛАЙН-ФОРМАТ</span>
        </div>
        <div class="infoText-wrapper">
          <span class="infoText"
            >Перш за все, наша команда орієнтується на офлайн-формату проєкту.
            Ми розуміємо, наскільки непередбачуваною є ситуація з пандемією
            COVID-19, тому готуємося до обох варіантів проведення. Аби проєкт не
            втратив свою якість через онлайн-формат, для його проведення буде
            використовуватися платформа Hopin, а замість стендів компанії
            отримають місце в Експо.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Descr'
};
</script>

<style lang="scss" scoped>
.container {
  font-family: 'BebasNeueCyrillic';
  font-size: 1vw;
  padding-top: 22.36rem;
  margin-bottom: 22.36rem;
}

.textWrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 3.82em;
}
.textBottom {
  font-size: 5em;
  letter-spacing: 0.2em;
  -webkit-text-stroke-width: 0.138rem;
  -webkit-text-stroke-color: #ffffff;
  color: transparent;
}
.infoItemsWrapper {
  display: flex;
  justify-content: space-between;
}
.infoTextWrapper {
  flex-direction: column;
}
.textGrad {
  background: linear-gradient(
    99.09deg,
    rgba(204, 0, 255, 0.3) 0%,
    rgba(204, 0, 255, 0.1) 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  width: auto;
  display: inline-block;
  margin-bottom: 1.6rem;
  padding: 0.138rem 0.5rem;
}
.textGrad > span {
  font-size: 2.5rem;
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
  .textWrapper {
    margin-bottom: 8.125rem;
  }
  .textBottom {
    font-size: 7.5rem;
    letter-spacing: 0.8rem;
    text-align: center;
    -webkit-text-stroke-width: 1px;
  }
  .infoItemsWrapper {
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
    text-align: center;
    width: auto;
    display: inline-block;
    margin-bottom: 3.75rem;
    padding: 0.625rem 2.187rem;
  }
  .textGrad > span {
    font-size: 5.625rem;
    line-height: 6.5rem;
    color: #ffffff;
  }
  .infoText-wrapper {
    font-family: 'MontserratRegular';
    line-height: 1.5em;
    font-weight: 400;
    color: #ffffff;
    width: auto;
    margin-bottom: 8.125rem;
  }
  .infoText {
    font-size: 3.75rem;
    line-height: 4.68rem;
  }
}
</style>
