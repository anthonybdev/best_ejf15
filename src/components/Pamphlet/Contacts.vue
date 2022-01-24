<template>
  <div class="container container-padding containerMob">
    <h3 class="heading">КОНТАКТИ</h3>
    <div class="contactsWrapper">
      <div v-for="item in obj" :key="item.key">
        <ContantCard :obj="item" />
      </div>
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
        // linkedIn: 'https://www.linkedin.com/in/victoria-horbachuk-a06566207',
        img: 'viktoriahorbachuk'
      },
      {
        name: 'копчак ЮЛІЯ',
        position: 'Відповідальна за корпоративні зв’язки',
        tel: '+380673140145',
        mail: 'yulya.kopchak@gmail.com',
        // linkedIn: 'https://www.linkedin.com/in/yulya-kopchak-6b7232224',
        img: 'yuliakopchak'
      },
      {
        name: 'ЗАГРОДСЬКА ОЛЕНА',
        position: 'Відповідальна за корпоративні зв’язки',
        tel: '+380975371323',
        mail: 'olenazahrodska@gmail.com',
        // linkedIn: 'https://www.linkedin.com/in/olena-zahrodska-7b1b47223',
        img: 'zahorodskaolena'
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
  margin-top: 20rem;
  flex-direction: column;
}
.contactsWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 24rem;
}
@media screen and (max-width: 768px) {
  .container {
    margin-top: 150px;
  }
  .contactsWrapper {
    flex-direction: column;
    padding-bottom: 35rem;
  }
}
</style>
