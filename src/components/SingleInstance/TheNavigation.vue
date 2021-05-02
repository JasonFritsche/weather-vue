<template>
  <div>
    <v-navigation-drawer
      app
      :permanent="$vuetify.breakpoint.mdAndUp"
      :expand-on-hover="$vuetify.breakpoint.mdAndUp"
      :value="drawerState"
      @input="updateDrawerState"
    >
      <v-list class="nav-list">
        <!-- only show on md and lower -->
        <v-list-item
          :class="{
            'title-item': !$vuetify.theme.dark,
            'title-item-dark': $vuetify.theme.dark,
          }"
          class="nav-item d-flex d-small-flex d-md-none"
        >
          <v-list-item-content>
            <v-list-item-title class="nav-item-title">
              <v-icon color="accent">mdi-sunglasses</v-icon> WeatherVue
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- end only show on md and lower -->
        <router-link to="/weather-vue" v-slot="{ isExactActive, navigate }">
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
        <router-link
          to="/weather-vue/FiveDayForecast"
          v-slot="{ isExactActive, navigate }"
        >
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
        <router-link to="/weather-vue/Map" v-slot="{ isExactActive, navigate }">
          <v-list-item
            class="nav-item"
            :class="{ activeNavItem: isExactActive }"
            @click="navigate"
          >
            <v-list-item-content>
              <v-list-item-title class="nav-item-title">
                <v-icon>mdi-map-search-outline</v-icon> Map
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
  methods: {
    toggleNav() {
      this.$store.commit('SET_NAVDRAWER');
    },
    updateDrawerState(state) {
      if (state !== this.$store.state.isNavDrawerOpened) {
        this.toggleNav();
      }
    },
  },
  computed: {
    drawerState: {
      get() {
        return this.$store.getters.isNavDrawerOpened;
      },
    },
  },
};
</script>
<style lang="scss">
a {
  text-decoration: none;
  font-family: $primary-font;
  color: $primary-font-color !important;
}

.nav-list {
  padding: 0 !important;
}

.nav-item {
  cursor: pointer;
}

.title-item {
  background-color: lighten($secondary, 5);
}

.title-item-dark {
  background-color: darken($secondary, 5);
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
