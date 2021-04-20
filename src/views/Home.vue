<template>
  <v-main>
    <TheNavigation />
    <TheToolbar></TheToolbar>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>
</template>
<script>
import TheToolbar from '../components/TheToolbar';
import TheNavigation from '../components/TheNavigation';
export default {
  name: 'Home',
  components: {
    TheToolbar,
    TheNavigation,
  },
};
</script>
<style scoped></style>
