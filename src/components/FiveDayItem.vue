<template>
  <div class="five-day-item-container">
    <v-expansion-panel-header>
      <v-row>
        <v-col>
          {{ formattedDate }}
        </v-col>
        <v-col>
          {{ weatherDescription }}
        </v-col>
        <v-col>
          {{ Math.round(dailyHighTemp.temp) }}&deg;F /
          {{ Math.round(dailyLowTemp.temp) }}&deg;F
        </v-col>
      </v-row>
    </v-expansion-panel-header>
  </div>
</template>
<script>
import { getMonthDayDate, getTimeOfDay } from '../util/utils';
export default {
  name: 'FiveDayItem',
  props: ['forecastData'],
  data: () => ({
    formattedDate: null,
    temperatureData: [],
    dailyHighTemp: { temp: null, timeOfDay: null },
    dailyLowTemp: { temp: null, timeOfDay: null },
    weatherDescription: null,
  }),
  methods: {
    init() {
      this.getTemps();
      this.formattedDate = getMonthDayDate(this.forecastData[0].dt);
      this.getHighAndLowTemps();
      this.weatherDescription = this.forecastData[2].weather[0].description;
    },
    formattedTimeOfDay(timeStamp) {
      return getTimeOfDay(timeStamp);
    },
    getTemps() {
      // build tempData obj, array of {temp: number, timeOfDay: string}
      this.forecastData.forEach((dataObj) => {
        const temperatureObj = {
          ['temp']: dataObj.main.temp,
          ['timeOfDay']: getTimeOfDay(dataObj.dt),
        };
        this.temperatureData = [...this.temperatureData, temperatureObj];
      });
    },
    getHighAndLowTemps() {
      this.dailyHighTemp = this.temperatureData.reduce((prev, current) =>
        prev.temp > current.temp ? prev : current
      );
      this.dailyLowTemp = this.temperatureData.reduce((prev, current) =>
        prev.temp < current.temp ? prev : current
      );
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    forecastData: {
      deep: true,
      handler() {
        this.temperatureData = [];
        this.init();
      },
    },
  },
};
</script>
<style lang="scss"></style>
