import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentForecast: {},
  },
  mutations: {
    SET_CURRENTFORECAST(state, data) {
      state.currentForecast = data;
      console.log(state);
    },
  },
  actions: {
    loadCurrentForecast({ commit }) {
      axios.get(`${BASE_URL}?q=Austin&appid=${API_KEY}`).then((response) => {
        console.log(response.data);
        commit('SET_CURRENTFORECAST', response.data);
      });
    },
  },
  getters: {
    currentForecast: (state) => state.currentForecast,
  },
  modules: {},
});
