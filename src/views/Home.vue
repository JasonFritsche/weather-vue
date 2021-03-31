<template>
  <div>
    <h1>{{ allTestData.current.observation_time }}</h1>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Home',
  computed: {
    ...mapGetters(['allTestData']),
  },
  mounted() {
    this.$store.dispatch('loadTestData');
  },
};
</script>
