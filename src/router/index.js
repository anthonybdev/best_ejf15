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
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
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
