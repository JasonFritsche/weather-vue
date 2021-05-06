<template>
  <div
    :class="{
      'sm-card-container': $vuetify.breakpoint.mdAndDown,
      'card-container': $vuetify.breakpoint.lgAndUp,
    }"
  >
    <v-card class="mx-auto mt-6 ml-3">
      <CurrentDayHeader></CurrentDayHeader>
      <CurrentDayDetails></CurrentDayDetails>
    </v-card>
  </div>
</template>
<script>
import CurrentDayHeader from './CurrentDayHeader';
import CurrentDayDetails from './CurrentDayDetails';
export default {
  name: 'CurrentDayCard',
  components: { CurrentDayHeader, CurrentDayDetails },
  props: [],
  data: () => ({}),
};
</script>
<style scoped>
.sm-card-container {
  width: 100vw !important;
}
</style>
