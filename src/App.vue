<template>
  <v-app>
    <TheNavigation />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import TheNavigation from './components/TheNavigation';
export default {
  data: () => ({ drawer: false }),
  name: 'App',
  components: {
    TheNavigation,
  },
};
</script>

TheToolbar
