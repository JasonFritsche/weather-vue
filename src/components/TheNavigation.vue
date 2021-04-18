<template>
  <div>
    <v-navigation-drawer app permanent expand-on-hover>
      <v-list class="nav-list">
        <router-link to="/" v-slot="{ isExactActive, navigate }">
          <v-list-item
            class="nav-item"
            :class="{ activeNavItem: isExactActive }"
            @click="navigate"
          >
            <v-list-item-content>
              <v-list-item-title class="nav-item-title">
                <v-icon>mdi-calendar-today</v-icon> Today's Forecast
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/FiveDayForecast" v-slot="{ isExactActive, navigate }">
          <v-list-item
            class="nav-item"
            :class="{ activeNavItem: isExactActive }"
            @click="navigate"
          >
            <v-list-item-content>
              <v-list-item-title class="nav-item-title">
                <v-icon>mdi-numeric-5-box-multiple-outline</v-icon> Five Day
                Forecast
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: 'TheNavigation',
  data: () => ({ drawer: false }),
};
</script>
<style lang="scss">
a {
  text-decoration: none;
  font-family: $primary-font;
  color: $primary-font-color !important;
}

.nav-item {
  cursor: pointer;
}

.nav-item:hover {
  background-color: $primary;
  .nav-item-title {
    color: darken($primary-font-color, 10) !important;
  }
}

.activeNavItem {
  background-color: lighten($primary, 10) !important;
  .nav-item-title {
    color: darken($primary-font-color, 5);
  }
}
</style>
