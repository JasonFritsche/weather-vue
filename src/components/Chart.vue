<template>
  <div v-if="options">
    <highcharts class="hc" :options="options" ref="chart"></highcharts>
  </div>
</template>

<script>
export default {
  props: ['options'],
  data() {
    return {
      chartOptions: {
        title: {
          text: 'testing',
        },
        xAxis: {
          categories: ['uno', 'dos', 'tres'],
        },
        series: [
          {
            data: [1, 2, 3],
          },
        ],
      },
    };
  },
  methods: {},
  mounted() {
    console.log(this.options);
  },
};
</script>
