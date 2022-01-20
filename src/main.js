import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
// createApp(App).use(store).use(router).mount('#app');
app.config.globalProperties.$filters = {
  numberWithSpace(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
};

app.use(store).use(router).mount('#app');
