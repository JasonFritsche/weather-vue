<template>
  <v-app>
    <TheNavigation />
    <v-main>
      <Home></Home>
    </v-main>
  </v-app>
</template>

<script>
import TheNavigation from './components/TheNavigation';
import Home from './views/Home';
export default {
  data: () => ({ drawer: false }),
  name: 'App',
  components: {
    TheNavigation,
    Home,
  },
};
</script>
<style></style>
