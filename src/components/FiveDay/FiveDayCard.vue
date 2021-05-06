<template>
  <div
    :class="{
      'sm-card-container': $vuetify.breakpoint.mdAndDown,
      'card-container': $vuetify.breakpoint.lgAndUp,
    }"
  >
    <v-card class="mx-auto mt-6 ml-3">
      <CurrentDayHeader></CurrentDayHeader>
      <v-container fluid>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, index) in fiveDayData" :key="index">
            <FiveDayItem :forecast-data="item"></FiveDayItem>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import { getDateOfWeek } from '../../util/utils';
import FiveDayItem from './FiveDayItem';
import CurrentDayHeader from '../CurrentDay/CurrentDayHeader';
export default {
  name: 'FiveDayCard',
  props: [],
  components: { FiveDayItem, CurrentDayHeader },
  data: () => ({
    fiveDayData: [],
  }),
  created() {
    this.$store.dispatch('loadFiveDayForecast');
  },
  computed: {
    fiveDayForecast() {
      return this.$store.state.fiveDayForecast;
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
.sm-card-container {
  width: 100vw !important;
}
</style>
