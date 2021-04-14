<template>
  <div class="text-field-container">
    <v-text-field
      v-model="searchTerm"
      label="Search By City"
      outlined
      clearable
      @keyup="handleSearch($event, null)"
      class="search-item search-text-field"
    ></v-text-field>
    <v-btn
      color="primary"
      class="search-item search-button"
      @click="handleSearch($event, true)"
    >
      Search
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'TheSearch',
  data: () => ({ searchTerm: '' }),
  methods: {
    handleSearch(event, isFromButtonClick) {
      // only do something if enter is pressed or search button clicked
      if (event.keyCode === 13 || isFromButtonClick) {
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
  display: flex;
  flex-direction: row;
  align-items: center;
  .search-item {
    height: 3em !important;
  }
  .search-text-field {
    margin-right: 6px;
  }
}
</style>
