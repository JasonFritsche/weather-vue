<template>
  <div>
    <v-card class="mx-auto" color="#26c6da" dark max-width="400">
      <v-card-title>
        <span class="title">{{ currentForecast.name }}</span>
      </v-card-title>
      <v-card-text> Temp: {{ currentForecast.main.temp }} </v-card-text>

      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline">
            {{ currentForecast.name }}
          </v-list-item-title>
          <v-list-item-subtitle
            >{{ currentDate }},
            {{ currentForecast.weather[0].description }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>
<script>
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
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const timeElapsed = Date.now();
      const now = new Date(timeElapsed);

      const monthIndex = now.getMonth();
      const year = now.getFullYear();
      const date = now.getDate();
      const monthName = months[monthIndex];
      const dayName = days[now.getDay()];
      return `${dayName}, ${date} ${monthName} ${year}`;
    },
  },
  created() {
    this.$store.dispatch('loadCurrentForecast');
  },
};
</script>
<style scoped></style>
