<template>
  <div v-if="currentForecast.isLoaded" class="cf-container">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="header-text">
          {{ currentForecast.data.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ currentDate }} </v-list-item-subtitle>
        <v-list-item-subtitle>
          {{ currentForecast.data.weather[0].description }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6">
          {{ Math.round(currentForecast.data.main.temp) }}&deg;F
        </v-col>
        <v-col cols="6">
          <v-icon class="weather-icon" color="blue-grey darken-3">{{
            weatherIcon
          }}</v-icon>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>
<script>
import { getCurrentDate, getWeatherIcon } from '../util/utils';
export default {
  name: 'CurrentDayHeader',
  props: [],
  data: () => ({}),
  created() {
    this.$store.dispatch('loadCurrentForecast');
  },
  computed: {
    currentForecast() {
      return this.$store.state.currentForecast;
    },
    weatherIcon() {
      return getWeatherIcon(this.currentForecast.data.weather[0].icon);
    },
    currentDate() {
      return getCurrentDate();
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.weather-icon {
  font-size: 4em;
  padding-bottom: 0.5em;
}
</style>
