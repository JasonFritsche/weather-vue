<template>
  <div class="home-container">
    <TheSearch></TheSearch>
    <WeatherCard
      v-if="fiveDayForecast.isLoaded"
      :forecast-data="fiveDayForecast.data"
    ></WeatherCard>
  </div>
</template>
<script>
import WeatherCard from '../components/WeatherCard';
import TheSearch from '../components/TheSearch';
export default {
  name: 'Home',
  components: {
    WeatherCard,
    TheSearch,
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
<style scoped>
.home-container {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
</style>
