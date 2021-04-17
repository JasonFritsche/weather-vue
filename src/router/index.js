import Vue from 'vue';
import VueRouter from 'vue-router';
import FiveDayForecast from '../views/FiveDayForecast';
import CurrentDay from '../views/CurrentDay';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: CurrentDay,
  },
  {
    path: '/FiveDayForecast',
    component: FiveDayForecast,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
