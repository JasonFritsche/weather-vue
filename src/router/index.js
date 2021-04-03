import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';

Vue.use(VueRouter);

const CurrentForeCastLazy = () => import('../views/CurrentForecast');

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/current',
    component: CurrentForeCastLazy,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
