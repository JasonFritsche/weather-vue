import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
    searchTerm: 'New York',
    theme: 'light',
    isNavDrawerOpened: false,
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
    SET_SEARCHTERM(state, data) {
      state.searchTerm = data;
    },
    SET_CURRENTTHEME(state, data) {
      state.theme = data;
    },
    SET_NAVDRAWER(state) {
      state.isNavDrawerOpened = !state.isNavDrawerOpened;
    },
  },
  actions: {
    loadCurrentForecast({ commit, state }) {
      axios
        .get(
          `${process.env.VUE_APP_URL}/weather?q=${state.searchTerm}&appid=${process.env.VUE_APP_KEY}&units=imperial`
        )
        .then((response) => {
          console.log(response.data);
          commit('SET_CURRENTFORECAST', response.data);
        });
    },
    loadFiveDayForecast({ commit, state }) {
      axios
        .get(
          `${process.env.VUE_APP_URL}/forecast?q=${state.searchTerm}&appid=${process.env.VUE_APP_KEY}&units=imperial`
        )
        .then((response) => {
          commit('SET_FIVEDAYFORECAST', response.data);
        });
    },
  },
  getters: {
    currentForecast: (state) => state.currentForecast,
    fiveDayForecast: (state) => state.fiveDayForecast,
    theme: (state) => state.theme,
    isNavDrawerOpened: (state) => state.isNavDrawerOpened,
  },
  modules: {},
});
