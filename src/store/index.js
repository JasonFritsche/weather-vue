import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentForecast: {
      data: {},
      isLoaded: false,
    },
  },
  mutations: {
    SET_CURRENTFORECAST(state, data) {
      state.currentForecast.data = data;
      state.currentForecast.isLoaded = true;
    },
  },
  actions: {
    loadCurrentForecast({ commit }) {
      axios
        .get(`${BASE_URL}?q=Austin&appid=${API_KEY}&units=imperial`)
        .then((response) => {
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
