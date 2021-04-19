<template>
  <v-app>
    <Home></Home>
  </v-app>
</template>

<script>
import Home from './views/Home';
export default {
  data: () => ({ drawer: false }),
  name: 'App',
  components: {
    Home,
  },
};
</script>
<style></style>
