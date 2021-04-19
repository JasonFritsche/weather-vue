<template>
  <div
    v-if="currentForecast && currentForecast.data && currentForecast.data.main"
  >
    <v-row align="stretch">
      <v-col cols="6" md="3" class="d-flex justify-center align-center">
        <div>
          <h2 class="header-text">High</h2>
          <p class="description-text">
            {{ Math.round(currentForecast.data.main.temp_max) }}&deg;F
          </p>
        </div>
      </v-col>
      <v-col cols="6" md="3" class="d-flex justify-center align-center">
        <div>
          <h2 class="header-text">Low</h2>
          <p class="description-text">
            {{ Math.round(currentForecast.data.main.temp_min) }}&deg;F
          </p>
        </div>
      </v-col>
      <v-col cols="6" md="3" class="d-flex justify-center align-center">
        <div>
          <h2 class="header-text">Feels like</h2>
          <p class="description-text">
            {{ Math.round(currentForecast.data.main.feels_like) }}&deg;F
          </p>
        </div>
      </v-col>
      <v-col cols="6" md="3" class="d-flex justify-center align-center">
        <div>
          <h2 class="header-text">Humidity</h2>
          <p class="description-text">
            {{ Math.round(currentForecast.data.main.humidity) }}%
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'CurrentDayDetails',
  props: [],
  data: () => ({}),
  computed: {
    currentForecast() {
      return this.$store.state.currentForecast;
    },
  },
};
</script>
<style lang="scss">
h2,
p {
  text-align: center;
}
</style>
