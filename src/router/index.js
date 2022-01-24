import { createRouter, createWebHistory } from 'vue-router';
import Pamphlet from '../views/Pamphlet.vue';

const routes = [
  {
    path: '/',
    name: 'Pamphlet',
    component: Pamphlet,
    meta: {
      title: "EJF'15 Partnership"
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  next();
});
export default router;
