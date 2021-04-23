<template>
  <div v-if="options">
    <highcharts class="hc" :options="options" ref="chart"></highcharts>
  </div>
</template>

<script>
export default {
  props: ['options'],
};
</script>
<style scoped></style>
