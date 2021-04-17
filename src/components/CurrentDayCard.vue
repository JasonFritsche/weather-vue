<template>
  <div class="card-container">
    <v-card class="mx-auto mt-6">
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
