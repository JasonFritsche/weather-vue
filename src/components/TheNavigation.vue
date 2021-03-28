<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title>WeatherVue</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: 'TheNavigation',
  data: () => ({ drawer: false }),
};
</script>
