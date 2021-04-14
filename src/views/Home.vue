<template>
  <div class="home-container">
    <TheSearch></TheSearch>
    <WeatherCard></WeatherCard>
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
};
</script>
<style scoped>
.home-container {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
</style>
