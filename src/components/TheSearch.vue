<template>
  <v-text-field
    v-model="searchTerm"
    label="Search By City"
    prepend-inner-icon="mdi-magnify"
    dense
    outlined
    clearable
    @keyup="handleSearch($event)"
    color="secondary"
    class="align-self-start search-text-field"
  ></v-text-field>
</template>
<script>
export default {
  name: 'TheSearch',
  data: () => ({ searchTerm: '' }),
  methods: {
    handleSearch(event) {
      // only do something if enter is pressed
      if (event.keyCode === 13) {
        this.$store.commit('SET_SEARCHTERM', this.searchTerm);
        this.$store.dispatch('loadCurrentForecast');
        this.$store.dispatch('loadFiveDayForecast');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.search-text-field {
  width: 50vw;
}
</style>
