import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testData: [],
  },
  mutations: {
    SET_TESTDATA(state, data) {
      state.testData = data;
    },
  },
  actions: {
    loadTestData({ commit }) {
      axios
        .get(
          'http://api.weatherstack.com/current?access_key=041693f985c9eaeac53ebb533c438242&query=New%20York'
        )
        .then((response) => {
          console.log(response.data);
          commit('SET_TESTDATA', response.data);
        });
    },
  },
  getters: {
    allTestData: (state) => state.testData,
  },
  modules: {},
});
