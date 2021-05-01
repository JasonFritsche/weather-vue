<template>
  <v-expansion-panel-content>
    <Chart :options="chartOptions" v-if="chartOptions"></Chart>
  </v-expansion-panel-content>
</template>
<script>
import Chart from '../Chart';
import { getTimeOfDay } from '../../util/utils';
export default {
  name: 'FiveDayItemDetail',
  props: ['forecastData'],
  components: { Chart },
  data: () => ({
    timeOfDayCategories: [],
    temps: [],
    chartOptions: null,
    chartBgColor: '#fff',
  }),
  mounted() {
    this.parseForecastData();
    this.buildChartOptions();
  },
  watch: {
    '$store.state.theme': function() {
      this.buildChartOptions();
    },
  },
  methods: {
    parseForecastData() {
      this.forecastData.forEach((el) => {
        this.timeOfDayCategories.push(getTimeOfDay(el.dt));
        this.temps.push(el.main.temp);
      });
    },
    buildChartOptions() {
      const options = {
        title: {
          text: '',
        },
        chart: {
          backgroundColor:
            this.$store.state.theme === 'dark' ? '#1E1E1E' : '#fff',
        },
        credits: {
          enabled: false,
        },
        xAxis: {
          categories: [...this.timeOfDayCategories],
        },
        yAxis: {
          title: {
            text: 'Temperature (°F)',
          },
        },
        tooltip: {
          formatter: function() {
            return `<b>${Math.round(this.y)}&deg;F</b><br/>${this.x}`;
          },
        },
        series: [
          {
            name: 'Temperature',
            data: [...this.temps],
          },
        ],
      };
      this.chartOptions = options;
    },
  },
};
</script>
