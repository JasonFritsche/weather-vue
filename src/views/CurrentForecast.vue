<template>
  <div>
    <v-card class="vcard">
      <v-card-text>{{ currentForecast.name }}</v-card-text>
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
  },
  created() {
    this.$store.dispatch('loadCurrentForecast');
  },
};
</script>
<style scoped>
.vcard {
  height: 60vh !important;
  background-color: aliceblue !important;
}
</style>
