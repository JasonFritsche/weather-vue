<template>
  <v-expansion-panel-content>
    <Chart :options="chartOptions" v-if="chartOptions"></Chart>
  </v-expansion-panel-content>
</template>
<script>
import Chart from './Chart';
import { getTimeOfDay } from '../util/utils';
export default {
  name: 'FiveDayItemDetail',
  props: ['forecastData'],
  components: { Chart },
  data: () => ({
    timeOfDayCategories: [],
    highTemps: [],
    lowTemps: [],
    chartOptions: null,
  }),
  mounted() {
    this.parseForecastData();
    this.buildChartOptions();
  },
  methods: {
    parseForecastData() {
      this.forecastData.forEach((el) => {
        this.timeOfDayCategories.push(getTimeOfDay(el.dt));
        this.highTemps.push(el.main.temp_max);
        this.lowTemps.push(el.main.temp_min);
      });
    },
    buildChartOptions() {
      const options = {
        title: {
          text: 'Forecast',
        },
        xAxis: {
          categories: [...this.timeOfDayCategories],
        },
        yAxis: {
          title: {
            text: 'Temperature (°F)',
          },
        },
        series: [
          {
            name: 'High',
            data: [...this.highTemps],
          },
          {
            name: 'Low',
            data: [...this.lowTemps],
          },
        ],
      };
      this.chartOptions = options;
    },
  },
};
</script>
