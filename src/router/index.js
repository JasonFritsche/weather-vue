import Vue from 'vue';
import VueRouter from 'vue-router';
import FiveDayForecast from '../views/FiveDayForecast';
import CurrentDay from '../views/CurrentDay';
import TheMap from '../components/Maps/TheMap';

Vue.use(VueRouter);

const routes = [
  {
    path: '/weather-vue',
    component: CurrentDay,
  },
  {
    path: '/weather-vue/FiveDayForecast',
    component: FiveDayForecast,
  },
  {
    path: '/weather-vue/Map',
    component: TheMap,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
