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
    fiveDayForecast: {
      data: {},
      isLoaded: false,
    },
  },
  mutations: {
    SET_CURRENTFORECAST(state, data) {
      state.currentForecast.data = data;
      state.currentForecast.isLoaded = true;
    },
    SET_FIVEDAYFORECAST(state, data) {
      state.fiveDayForecast.data = data;
      state.fiveDayForecast.isLoaded = true;
    },
  },
  actions: {
    loadCurrentForecast({ commit }) {
      axios
        .get(`${BASE_URL}/weather?q=Austin&appid=${API_KEY}&units=imperial`)
        .then((response) => {
          commit('SET_CURRENTFORECAST', response.data);
        });
    },
    loadFiveDayForecast({ commit }) {
      axios
        .get(`${BASE_URL}/forecast?q=Austin&appid=${API_KEY}&units=imperial`)
        .then((response) => {
          commit('SET_FIVEDAYFORECAST', response.data);
        });
    },
  },
  getters: {
    currentForecast: (state) => state.currentForecast,
    fiveDayForecast: (state) => state.fiveDayForecast,
  },
  modules: {},
});
