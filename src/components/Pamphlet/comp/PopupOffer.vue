<template>
  <div class="offerPopup">
    <div class="popupWrapper">
      <div v-if="popup == 'showPopup1'">
        <div class="wrapper">
          <div class="boxTitle state"></div>
          <div class="boxTitle state">Офлайн</div>
          <div class="boxTitle state">Онлайн</div>
          <div class="boxTitle">Стенд</div>
          <div class="boxText">
            Брендований стенд для кожного партнера, поставлений у вибраному
            компанією місці, де її представники зможуть поспілкуватися зі
            студентами.<br /><br />
            Додаткова площа — це збільшення стенду з розмірів 2×2 до 3×2
            квадратні метри.
          </div>
          <div class="boxText">
            Власна сторінка на платформі Hopin, створена організаторами, з
            описом та промороликом компанії. У визначений проміжок часу
            представники компанії зможуть зустрітися на відеоконференції з
            зацікавленими студентами.
          </div>
          <div class="boxTitle">Логотип на сайті та брендволі проєкту</div>
          <div class="boxText boxFull">
            Розміщення логотипу партнера на бредволі проєкту, а також на його
            сайті, який міститиме детальну інформацію про компанію та її
            діяльність.
          </div>
          <div class="boxTitle">Транслювання відеоролика на місці події</div>
          <div class="boxText">
            Трансляція проморолика, наданого компанією, тривалістю 25-30 секунд
            на встановлених екранах в університеті.
          </div>
          <div class="boxText">
            Трансляція проморолика, наданого компанією, тривалістю 25-30 секунд,
            в окремій кімнаті на платформі Hopin.
          </div>
          <div class="boxTitle">Згадка компанії у відеоанонсах в stories</div>
          <div class="boxText boxFull">
            Розповідь про компанію та її діяльність в одному з відеороликів в
            Instagram stories на нашій офіційній сторінці @best_lviv. У кожному
            з роликів буде згадано до 10 партнерів.
          </div>
          <div class="boxTitle boxBottom">Поширення вакансій компанії</div>
          <div class="boxText boxFull boxBottom">
            Розміщення вакансій в онлайн-каталозі, який буде доступний за
            QR-кодом. Кожен студент може його відсканувати та побачити актуальні
            вакансії компанії.
          </div>
        </div>
        <div class="mobileWrapper">
          <div class="optionWrapper fixForFirst">
            <div class="optionTitle">Стенд</div>
            <div class="optionState">
              <span class="stateTitle">Офлайн</span>
              <span class="stateText"
                >Брендований стенд для кожного партнера, поставлений у вибраному
                компанією місці, де її представники зможуть поспілкуватися зі
                студентами.<br /><br />
                Додаткова площа — це збільшення стенду з розмірів 2×2 до 3×2
                квадратні метри.</span
              >
            </div>
            <div class="optionState">
              <span class="stateTitle">Онлайн</span>
              <span class="stateText"
                >Власна сторінка на платформі Hopin, створена організаторами, з
                описом та промороликом компанії. У визначений проміжок часу
                представники компанії зможуть зустрітися на відеоконференції з
                зацікавленими студентами.
              </span>
            </div>
          </div>
          <div class="optionWrapper">
            <div class="optionTitle">Логотип на сайті та брендволі проєкту</div>
            <div class="optionState">
              <span class="stateText"
                >Розміщення логотипу партнера на бредволі проєкту, а також на
                його сайті, який міститиме детальну інформацію про компанію та
                її діяльність.</span
              >
            </div>
          </div>
          <div class="optionWrapper">
            <div class="optionTitle">
              Транслювання відеоролика на місці події
            </div>
            <div class="optionState">
              <span class="stateTitle">Офлайн</span>
              <span class="stateText"
                >Трансляція проморолика, наданого компанією, тривалістю 25-30
                секунд на встановлених екранах в університеті.</span
              >
            </div>
            <div class="optionState">
              <span class="stateTitle">Онлайн</span>
              <span class="stateText"
                >Трансляція проморолика, наданого компанією, тривалістю 25-30
                секунд, в окремій кімнаті на платформі Hopin.
              </span>
            </div>
          </div>
          <div class="optionWrapper">
            <div class="optionTitle">
              Згадка компанії у відеоанонсах в stories
            </div>
            <div class="optionState">
              <span class="stateText"
                >Розповідь про компанію та її діяльність в одному з відеороликів
                в Instagram stories на нашій офіційній сторінці @best_lviv. У
                кожному з роликів буде згадано до 10 партнерів.</span
              >
            </div>
          </div>
          <div class="optionWrapper lastOption">
            <div class="optionTitle">Поширення вакансій компанії</div>
            <div class="optionState">
              <span class="stateText"
                >Розміщення вакансій в онлайн-каталозі, який буде доступний за
                QR-кодом. Кожен студент може його відсканувати та побачити
                актуальні вакансії компанії.</span
              >
            </div>
          </div>
        </div>
      </div>
      <div v-if="popup == 'showPopup2'">
        <div class="wrapper">
          <div class="boxTitle">Панельні дискусії</div>
          <div class="boxText boxFull">
            Дискусії протягом другого дня між представниками компаній та
            студентами на теми, дотичні до галузей компаній.
          </div>
          <div class="boxTitle boxBottom">Instagram Guide</div>
          <div class="boxText boxFull boxBottom">
            Розповідь в Instagram guide про компанію та її участь у панельних
            дискусіях. Guide має вигляд статті з розділами, кожен з яких
            міститиме один з дописів із інстаграм-сторінки компанії та опис до
            нього.
          </div>
        </div>
        <div class="mobileWrapper">
          <div class="optionWrapper">
            <div class="optionTitle">Панельні дискусії</div>
            <div class="optionState">
              <span class="stateText"
                >Дискусії протягом другого дня між представниками компаній та
                студентами на теми, дотичні до галузей компаній.</span
              >
            </div>
          </div>
          <div class="optionWrapper lastOption">
            <div class="optionTitle">Instagram Guide</div>
            <div class="optionState">
              <span class="stateText"
                >Розповідь в Instagram guide про компанію та її участь у
                панельних дискусіях. Guide має вигляд статті з розділами, кожен
                з яких міститиме один з дописів із інстаграм-сторінки компанії
                та опис до нього.</span
              >
            </div>
          </div>
        </div>
      </div>
      <div v-if="popup == 'showPopup3'">
        <div class="wrapper">
          <div class="boxTitle">Workshop від компанії</div>
          <div class="boxText boxFull">
            90-хвилинний навчальний захід від представників компанії, що
            проводитиметься в перший день.
          </div>
          <div class="boxTitle">Speed dating</div>
          <div class="boxText boxFull">
            Короткий діалог між компанією та студентами. Його мета — знайомство
            сторін, оцінка представниками компанії рівня знань, навичок і
            мотивації у студентів-учасників, які у свою чергу можуть ставити
            питання, дотичні до роботи компанії та її сфери діяльності.
          </div>
          <div class="boxTitle boxBottom">
            Розсилка можливостей та вакансій від компаній
          </div>
          <div class="boxText boxFull boxBottom">
            Піврічна розсилка вакансій та можливостей (курсів, стажувань) від
            компанії у telegram-боті для студентів, що подали CV. Щомісяця
            компанія має розмістити не менше 2 та не більше 3 вакансій чи
            можливостей.
          </div>
        </div>
        <div class="mobileWrapper">
          <div class="optionWrapper">
            <div class="optionTitle">Workshop від компанії</div>
            <div class="optionState">
              <span class="stateText"
                >90-хвилинний навчальний захід від представників компанії, що
                проводитиметься в перший день</span
              >
            </div>
          </div>
          <div class="optionWrapper">
            <div class="optionTitle">Speed dating</div>
            <div class="optionState">
              <span class="stateText"
                >Короткий діалог між компанією та студентами. Його мета —
                знайомство сторін, оцінка представниками компанії рівня знань,
                навичок і мотивації у студентів-учасників, які у свою чергу
                можуть ставити питання, дотичні до роботи компанії та її сфери
                діяльності.</span
              >
            </div>
          </div>
          <div class="optionWrapper lastOption">
            <div class="optionTitle">
              Розсилка можливостей та вакансій від компаній
            </div>
            <div class="optionState">
              <span class="stateText"
                >Піврічна розсилка вакансій та можливостей (курсів, стажувань)
                від компанії у telegram-боті для студентів, що подали CV.
                Щомісяця компанія має розмістити не менше 2 та не більше 3
                вакансій чи можливостей.</span
              >
            </div>
          </div>
        </div>
      </div>
      <div v-if="popup == 'showPopup4'">
        <div class="wrapper">
          <div class="boxTitle">Пост-дайджест компаній в Telegram</div>
          <div class="boxText boxFull">
            Розповідь з посиланням на сайт про компанію в одному з
            постів-дайджестів у telegram-каналі BEST Lviv.
          </div>
          <div class="boxTitle">День інтерактивних stories в Instagram</div>
          <div class="boxText boxFull">
            Промоція компанії в Instagram-stories на сторінці @best_lviv,
            використовуючи рубрики “Питання-відповідь”, “Як проходить день
            нашого працівника” тощо (1 рубрика на вибір). Контент для stories
            може створювати компанія чи організатори проєкту (до 5 stories про
            партнера).
          </div>
          <div class="boxTitle boxBottom">Доступ до бази CV учасників</div>
          <div class="boxText boxFull boxBottom">
            Доступ до бази CV попередньо зареєстрованих у telegram-боті
            студентів.
          </div>
        </div>
        <div class="mobileWrapper">
          <div class="optionWrapper">
            <div class="optionTitle">
              День інтерактивних stories в Instagram
            </div>
            <div class="optionState">
              <span class="stateText"
                >Розповідь з посиланням на сайт про компанію в одному з
                постів-дайджестів у telegram-каналі BEST Lviv.</span
              >
            </div>
          </div>
          <div class="optionWrapper">
            <div class="optionTitle">Пост-дайджест компаній в Telegram</div>
            <div class="optionState">
              <span class="stateText"
                >Промоція компанії в Instagram-stories на сторінці @best_lviv,
                використовуючи рубрики “Питання-відповідь”, “Як проходить день
                нашого працівника” тощо (1 рубрика на вибір). Контент для
                stories може створювати компанія чи організатори проєкту (до 5
                stories про партнера).</span
              >
            </div>
          </div>
          <div class="optionWrapper lastOption">
            <div class="optionTitle">Доступ до бази CV учасників</div>
            <div class="optionState">
              <span class="stateText"
                >Доступ до бази CV попередньо зареєстрованих у telegram-боті
                студентів.</span
              >
            </div>
          </div>
        </div>
      </div>
      <span class="closeButton"
        ><img
          src="@/assets/icons/closeIcon.svg"
          alt="closeIcon"
          @click="changePopupState(popup)"
      /></span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    popup: {
      type: String,
      required: true
    }
  },
  methods: {
    changePopupState(payload) {
      this.$store.commit('changePopupState', payload);
      document.body.classList.toggle('hiddenOverflow');
      document.querySelector('.backgr').classList.toggle('active');
    }
  }
};
</script>
<style lang="scss" scoped>
.offerPopup {
  box-sizing: border-box;
  position: fixed;
  z-index: 70;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popupWrapper {
  position: absolute;
  padding: 0.83rem;
  width: 53.75rem;
  height: auto;
  background: linear-gradient(
    112.08deg,
    rgba(0, 6, 27, 0.904) 0%,
    #1f0029 100%
  );
  z-index: 100;
  border-radius: 15px;
}
.closeButton {
  cursor: pointer;
  position: absolute;
  z-index: 999;
  right: -1.25rem;
  top: -1.3rem;
}
.closeButton > img {
  width: 2.57rem;
  height: 2.57rem;
}
.wrapper {
  display: grid;
  grid-template-columns: 1.35fr repeat(2, 3fr);
}
.boxTitle {
  font-family: 'BebasNeueCyrillic';
  font-size: 1.25rem;
  letter-spacing: 0.1rem;
  color: #ffffff;
  border-bottom: 2px solid rgba(227, 110, 216, 0.2);
  padding: 1.4rem 0 0.83rem 0.5rem;
}
.boxTitle.state {
  text-align: center;
  border: none;
  padding: 1.52rem 0 0.3rem 0;
}
.boxText {
  font-family: 'MontserratRegular';
  font-size: 0.83rem;
  line-height: 1.041rem;
  color: #ffffff;
  min-height: 5rem;
  border-bottom: 2px solid rgba(227, 110, 216, 0.2);
  border-left: 2px solid rgba(227, 110, 216, 0.2);
  padding: 1.5rem 0.83rem;
}
.boxFull {
  grid-column-start: 2;
  grid-column-end: 4;
}
.boxBottom {
  border-bottom: none;
}
.mobileWrapper {
  display: none;
}
@media screen and (max-width: 768px) {
  .mobileWrapper {
    display: block !important;
  }
  .wrapper {
    display: none;
  }
  .offerPopup {
    box-sizing: border-box;
    position: fixed;
    z-index: 70;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 102px 39.5px;
  }
  .popupWrapper {
    position: relative;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      112.08deg,
      rgba(0, 6, 27, 0.9) 0%,
      #1f0029 100%
    );
    z-index: 100;
    border-radius: 15px;
  }
  .popupWrapper::-webkit-scrollbar {
    display: none;
  }
  .closeButton {
    cursor: pointer;
    position: fixed;
    right: 43px;
    top: 100px;
    z-index: 150;
  }
  .closeButton > img {
    width: 9rem;
    height: auto;
  }
  // mobile wrapper
  .optionWrapper {
    display: flex;
    flex-direction: column;
    padding-bottom: 3.75rem;
    border-bottom: 1px solid rgba(227, 110, 216, 0.2);
  }
  .lastOption {
    border-bottom: none;
  }
  .optionTitle {
    margin-top: 7.5rem;
    font-family: 'BebasNeueCyrillic';
    font-size: 7.5rem;
    letter-spacing: 0.8rem;
    color: #ffffff;
    text-align: center;
  }
  .optionState {
    display: flex;
    flex-direction: column;
  }
  .stateTitle {
    margin-top: 7.5rem;
    font-family: 'BebasNeueCyrillic';
    letter-spacing: 0.5rem;
    font-size: 5.625rem;
    color: #ffffff;
    text-align: center;
  }
  .stateText {
    font-family: 'MontserratRegular';
    font-size: 3.75rem;
    line-height: 4.68rem;
    color: #ffffff;
    margin-top: 3.75rem;
    padding: 0 3.125rem;
  }
}
</style>
