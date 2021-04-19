<template>
  <v-main>
    <TheNavigation />
    <TheToolbar></TheToolbar>
    <v-container fluid>
      <TheSearch></TheSearch>
      <router-view></router-view>
    </v-container>
  </v-main>
</template>
<script>
import TheSearch from '../components/TheSearch';
import TheToolbar from '../components/TheToolbar';
import TheNavigation from '../components/TheNavigation';
export default {
  name: 'Home',
  components: {
    TheSearch,
    TheToolbar,
    TheNavigation,
  },
};
</script>
<style scoped></style>
