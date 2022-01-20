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
// @ is an alias to /src
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
        position: 'Головний організатор',
        tel: '+380977632333',
        mail: 'vika.horbachuk@gmail.com',
        img: 'blankImg'
      },
      {
        name: 'КОПАЧАК ЮЛІЯ',
        position: 'Відповідальна за корпоративні зв’язки',
        tel: '+380673140145',
        mail: 'yulya.kopchak@gmail.com',
        img: 'blankImg'
      },
      {
        name: 'ЗАГРОДСЬКА ОЛЕНА',
        position: 'Відповідальна за корпоративні зв’язки',
        tel: '+380975371323',
        mail: 'olenazahrodska@gmail.com',
        img: 'blankImg'
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
