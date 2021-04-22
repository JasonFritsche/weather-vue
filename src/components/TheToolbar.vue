<template>
  <v-app-bar color="primary" elevate-on-scroll>
    <v-btn icon>
      <v-icon large color="accent">mdi-sunglasses</v-icon>
    </v-btn>
    <v-toolbar-title>Weather Vue</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="d-flex align-self-start justify-end pt-2">
      <TheSearch></TheSearch>
      <v-btn icon v-if="!$vuetify.theme.dark" @click="darkMode">
        <v-icon class="mr-1" color="blue-grey darken-4"
          >mdi-weather-night</v-icon
        >
      </v-btn>
      <v-btn icon v-if="$vuetify.theme.dark" @click="darkMode">
        <v-icon color="yellow darken-3">mdi-white-balance-sunny</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>
<script>
import TheSearch from './TheSearch';
export default {
  name: 'TheToolbar',
  components: { TheSearch },
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
