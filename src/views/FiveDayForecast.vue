<template>
  <FiveDayCard></FiveDayCard>
</template>
<script>
import FiveDayCard from '../components/FiveDayCard';
export default {
  name: 'FiveDayForecast',
  components: {
    FiveDayCard,
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
