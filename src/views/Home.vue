<template>
  <v-main>
    <TheNavigation />
    <TheToolbar></TheToolbar>
    <v-content class="content">
      <router-view></router-view>
    </v-content>
  </v-main>
</template>
<script>
import TheToolbar from '../components/SingleInstance/TheToolbar';
import TheNavigation from '../components/SingleInstance/TheNavigation';
export default {
  name: 'Home',
  components: {
    TheToolbar,
    TheNavigation,
  },
};
</script>
<style scoped>
.content {
  padding: 0 !important;
}
</style>
