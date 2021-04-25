<template>
  <highcharts
    v-if="options"
    class="hc"
    :options="options"
    ref="chart"
  ></highcharts>
</template>

<script>
export default {
  props: ['options'],
};
</script>
<style scoped>
.chart-container {
  width: 100%;
}
</style>
