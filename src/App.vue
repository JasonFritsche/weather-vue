<template>
  <v-app>
    <TheNavigation />
    <v-main>
      <router-view></router-view>
    </v-main>
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
