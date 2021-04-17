import Vue from 'vue';
import VueRouter from 'vue-router';
import FiveDayForecast from '../views/FiveDayForecast';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: FiveDayForecast,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
