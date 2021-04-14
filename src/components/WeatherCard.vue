<template>
  <div v-if="currentForecast.isLoaded" class="cf-container">
    <v-card class="mx-auto mt-6" :loading="!currentForecast.isLoaded">
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
            <v-icon large color="blue-grey darken-3">{{ weatherIcon }}</v-icon>
          </v-col>
        </v-row>
      </v-card-text>

      <v-container fluid>
        <v-row justify="space-between">
          <v-col
            class="mb-4 d-flex flex-column"
            cols="12"
            xs="12"
            sm="12"
            md="12"
            lg="2"
            xl="2"
            v-for="(item, index) in fiveDayData"
            :key="index"
          >
            <FiveDayItem :forecast-data="item"></FiveDayItem>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import { getCurrentDate, getDateOfWeek, getWeatherIcon } from '../util/utils';
import FiveDayItem from './FiveDayItem';
export default {
  name: 'WeatherCard',
  props: [],
  components: { FiveDayItem },
  data: () => ({
    fiveDayData: [],
  }),
  created() {
    this.$store.dispatch('loadCurrentForecast');
    this.$store.dispatch('loadFiveDayForecast');
  },
  computed: {
    currentForecast() {
      return this.$store.state.currentForecast;
    },
    fiveDayForecast() {
      return this.$store.state.fiveDayForecast;
    },
    weatherIcon() {
      return getWeatherIcon(this.currentForecast.data.weather[0].icon);
    },
    currentDate() {
      return getCurrentDate();
    },
  },
  watch: {
    fiveDayForecast: {
      deep: true,
      handler() {
        this.parseForecastData();
      },
    },
  },
  methods: {
    parseForecastData() {
      const list = this.fiveDayForecast.data.list;
      const itemsPerChunk = 8; // items per chunk
      // filter out today's date
      const filteredList = list.filter((item) => {
        const itemDayOfWeek = getDateOfWeek(item.dt);
        const date = new Date();
        const today = date.getDate();
        if (today !== itemDayOfWeek) {
          return item;
        }
      });
      const parsedData = filteredList.reduce((acc, currentItem, i) => {
        const chunkIndex = Math.floor(i / itemsPerChunk);
        acc[chunkIndex] = [].concat(acc[chunkIndex] || [], currentItem);
        return acc;
      }, []);
      this.fiveDayData = parsedData;
    },
  },
};
</script>
<style lang="scss" scoped>
.cf-container {
  width: $large-widget-width;
}
</style>
