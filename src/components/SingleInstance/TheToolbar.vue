<template>
  <v-app-bar color="primary" elevate-on-scroll>
    <v-btn icon class="d-flex d-small-flex d-md-none" @click="toggleNav">
      <v-icon large color="accent">mdi-menu</v-icon>
    </v-btn>
    <v-btn icon class="d-none d-md-flex d-lg-flex d-xl-flex">
      <v-icon large color="accent">mdi-sunglasses</v-icon>
    </v-btn>
    <v-toolbar-title class="d-none d-md-flex d-lg-flex d-xl-flex"
      >WeatherVue</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <div class="d-flex align-self-start justify-end pt-2">
      <TheSearch v-if="showSearch"></TheSearch>
      <v-btn icon v-if="!$vuetify.theme.dark" @click="updateTheme('dark')">
        <v-icon class="mr-1" color="blue-grey darken-4">mdi-lightbulb</v-icon>
      </v-btn>
      <v-btn icon v-if="$vuetify.theme.dark" @click="updateTheme('light')">
        <v-icon color="yellow darken-3">mdi-lightbulb-outline</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>
<script>
import TheSearch from './TheSearch';
export default {
  name: 'TheToolbar',
  components: { TheSearch },
  computed: {
    showSearch() {
      return this.$route.path !== '/weather-vue/Map';
    },
  },
  methods: {
    toggleNav() {
      this.$store.commit('SET_NAVDRAWER');
    },
    updateTheme(newTheme) {
      this.$store.commit('SET_CURRENTTHEME', newTheme);
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
