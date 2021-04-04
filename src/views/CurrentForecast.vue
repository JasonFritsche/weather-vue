<template>
  <div v-if="currentForecast.isLoaded" class="cf-container">
    <v-card
      class="mx-auto"
      max-width="600"
      :loading="!currentForecast.isLoaded"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="header-text">
            {{ currentForecast.data.name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ currentDate }} </v-list-item-subtitle>
          <v-list-item-subtitle>
            {{ currentForecast.data.weather[0].description }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-container fill-height>
        <v-row align="center" justify="center">
          <v-col cols="6" class="d-flex justify-center">
            <p>{{ currentForecast.data.main.temp }}&deg;F</p>
          </v-col>
          <v-col cols="6" class="d-flex justify-center">
            <v-icon large color="blue-grey darken-3">{{ weatherIcon }}</v-icon>
          </v-col>
        </v-row>
      </v-container>
      <v-divider class="divider"></v-divider>
      <v-container fill-height>
        <v-row>
          <v-col cols="3" class="d-flex justify-center">
            <div>
              <h1 class="header-text">High</h1>
              <p>{{ currentForecast.data.main.temp_max }}&deg;F</p>
            </div>
          </v-col>
          <v-col cols="3" class="d-flex justify-center">
            <div>
              <h1 class="header-text">Low</h1>
              <p>{{ currentForecast.data.main.temp_min }}&deg;F</p>
            </div>
          </v-col>
          <v-col cols="3">
            <v-row align="center" justify="center">
              <v-col class="d-flex justify-center">
                <v-icon>mdi-weather-sunset-up</v-icon>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-center">
                <p>{{ currentForecast.data.sys.sunrise }}</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3">
            <v-row align="center" justify="center">
              <v-col class="d-flex justify-center">
                <v-icon>mdi-weather-sunset-down</v-icon>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-center">
                <p>{{ currentForecast.data.sys.sunset }}</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import { getCurrentDate, getWeatherIcon } from '../util/utils';
export default {
  name: 'CurrentForecast',
  data: () => ({
    hello: 'henlo',
  }),
  computed: {
    currentForecast() {
      return this.$store.state.currentForecast;
    },
    currentDate() {
      return getCurrentDate();
    },
    weatherIcon() {
      return getWeatherIcon(this.currentForecast.data.weather[0].icon);
    },
  },
  created() {
    this.$store.dispatch('loadCurrentForecast');
  },
};
</script>
<style lang="scss">
.cf-container {
  padding: 3em;
}
.divider {
  width: 90%;
  margin: auto;
  padding: 0.5em 0;
}
.header-text {
  font-family: $primary-font;
  color: $primary-font-color;
  font-size: $header-font-size;
}
</style>
