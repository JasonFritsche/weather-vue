<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <router-link to="/"
              >home<v-icon>mdi-home-variant-outline</v-icon></router-link
            >
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
