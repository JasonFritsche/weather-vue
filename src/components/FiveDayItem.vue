<template>
  <div>
    <div>
      {{ formattedDate }}
    </div>
    <div v-for="(item, index) in this.forecastData" :key="index">
      <ul>
        <li>{{ formattedTimeOfDay(item.dt) }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getMonthDayDate, getTimeOfDay } from '../util/utils';
export default {
  name: 'FiveDayItem',
  props: ['forecastData'],
  data: () => ({
    formattedDate: null,
  }),
  methods: {
    init() {
      this.formattedDate = getMonthDayDate(this.forecastData[0].dt);
    },
    formattedTimeOfDay(timeStamp) {
      return getTimeOfDay(timeStamp);
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style scoped></style>
