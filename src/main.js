import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
const app = createApp(App);

app.config.globalProperties.$filters = {
  numberWithSpace(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
};
import AOS from 'aos';
import 'aos/dist/aos.css';
app.AOS = new AOS.init({ offset: 200 });
app.use(store).use(router).mount('#app');

setTimeout(() => {
  AOS.refresh();
}, 2170);
