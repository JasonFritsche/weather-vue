<template>
  <v-card>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="header-text">
          {{ forecastData.city.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ currentDate }} </v-list-item-subtitle>
        <v-list-item-subtitle>
          hello
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
<script>
import { getCurrentDate } from '../util/utils';
export default {
  name: 'WeatherCard',
  props: ['forecastData'],
  data: () => ({
    fiveDayData: [],
  }),
  mounted() {
    console.log(this.forecastData);
    this.parseForecastData();
  },
  computed: {
    currentDate() {
      return getCurrentDate();
    },
  },
  methods: {
    parseForecastData() {
      const itemsPerChunk = 8; // items per chunk

      const parsedData = this.forecastData.list.reduce(
        (acc, currentItem, i) => {
          const chunk = Math.floor(i / itemsPerChunk);
          acc[chunk] = [].concat(acc[chunk] || [], currentItem);
          return acc;
        },
        []
      );
      console.log(parsedData);
    },
  },
};
</script>
<style scoped></style>
