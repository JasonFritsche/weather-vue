<template>
  <div>
    <WeatherCard
      v-if="fiveDayForecast.isLoaded"
      :forecast-data="fiveDayForecast.data"
    ></WeatherCard>
  </div>
</template>
<script>
import WeatherCard from '../components/WeatherCard';
export default {
  name: 'Home',
  components: {
    WeatherCard,
  },
  computed: {
    fiveDayForecast() {
      return this.$store.state.fiveDayForecast;
    },
  },
  created() {
    this.$store.dispatch('loadFiveDayForecast');
  },
};
</script>
<style scoped></style>
