<template>
  <div class="text-field-container">
    <v-text-field
      v-model="searchTerm"
      label="Search By City"
      outlined
      clearable
      @keyup="handleSearch"
    ></v-text-field>
  </div>
</template>
<script>
export default {
  name: 'TheSearch',
  data: () => ({ searchTerm: '' }),
  methods: {
    handleSearch(e) {
      // only do something if enter is pressed
      if (e.keyCode === 13) {
        this.$store.commit('SET_SEARCHTERM', this.searchTerm);
        this.$store.dispatch('loadCurrentForecast');
        this.$store.dispatch('loadFiveDayForecast');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.text-field-container {
  width: $large-widget-width;
  margin-top: 1.6em;
}
</style>
