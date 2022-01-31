<template>
  <div class="container container-padding containerMob">
    <h3 class="heading" data-aos="fade-up">КОНТАКТИ</h3>
    <div class="contactsWrapper">
      <div v-for="item in obj" :key="item.key">
        <ContantCard :obj="item" data-aos="fade-up" data-aos-offset="-50" />
      </div>
    </div>
    <div class="footer">
      <span class="footerText"
        >&copy; 2022&nbsp;&nbsp; Powered by
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://best-lviv.org.ua/"
          class="footerLink"
          >BEST Lviv</a
        ></span
      >
    </div>
  </div>
</template>

<script>
import ContantCard from '@/components/Pamphlet/comp/ContantCard';
export default {
  name: 'Contant',
  components: {
    ContantCard
  },
  data: () => ({
    obj: [
      {
        name: 'ГОРБАЧУК ВІКТОРІЯ',
        position: 'Головна організаторка',
        tel: '+380977632333',
        mail: 'vika.horbachuk@gmail.com',
        linkedIn: 'https://www.linkedin.com/in/victoria-horbachuk-a06566207',
        img: 'viktoriahorbachuk',
        inst: 'https://instagram.com/vika.hbhk',
        telegram: 'http://t.me/vikahbhk'
      },
      {
        name: 'копчак ЮЛІЯ',
        position: 'Відповідальна за корпоративні зв’язки',
        tel: '+380673140145',
        mail: 'yulya.kopchak@gmail.com',
        linkedIn: 'https://www.linkedin.com/in/yulya-kopchak-6b7232224',
        img: 'yuliakopchak',
        inst: 'https://instagram.com/_i_yulya',
        telegram: 'http://t.me/i_yulya'
      },
      {
        name: 'ЗАГРОДСЬКА ОЛЕНА',
        position: 'Відповідальна за корпоративні зв’язки',
        tel: '+380975371323',
        mail: 'olenazahrodska@gmail.com',
        linkedIn: 'https://www.linkedin.com/in/olena-zahrodska-7b1b47223',
        img: 'zahorodskaolena',
        inst: 'https://instagram.com/zahrodskayaa',
        telegram: 'http://t.me/zahrodskayaa'
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.container {
  font-family: 'BebasNeueCyrillic';
  font-size: 1vw;
  display: flex;
  margin-top: 14rem;
  flex-direction: column;
}
.contactsWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10rem;
}
.footer {
  display: flex;
  justify-content: center;
}
.footerText {
  font-size: 1.25rem;
  color: #ffffff;
  padding-bottom: 5rem;
}
.footerLink {
  color: #ffffff;
}
@media screen and (max-width: 768px) {
  .container {
    margin-top: 150px;
  }
  .contactsWrapper {
    flex-direction: column;
    padding-bottom: 25rem;
  }
  .footerText {
    font-size: 5rem;
    color: #ffffff;
    padding-bottom: 10rem;
  }
  .footerLink {
    color: #ffffff;
  }
}
</style>
