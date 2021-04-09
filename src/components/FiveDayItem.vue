<template>
  <div>
    <div>
      {{ formattedDate }}
    </div>
    <div>
      hello
    </div>
  </div>
</template>
<script>
import { getMonthDayDate } from '../util/utils';
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
  },
  mounted() {
    this.init();
  },
};
</script>
<style scoped></style>
