<template>
  <v-card>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="header-text">
          {{ forecastData.city.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ currentDate }} </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
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
</template>
<script>
import { getCurrentDate, getDateOfWeek } from '../util/utils';
import FiveDayItem from './FiveDayItem';
export default {
  name: 'WeatherCard',
  props: ['forecastData'],
  components: { FiveDayItem },
  data: () => ({
    fiveDayData: [],
  }),
  mounted() {
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
      // filter out today's date
      const filteredList = this.forecastData.list.filter((item) => {
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
<style scoped></style>
