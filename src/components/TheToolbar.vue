<template>
  <v-app-bar dark color="purple darken-3" elevate-on-scroll>
    <v-btn icon>
      <v-icon large color="purple accent-1">mdi-sunglasses</v-icon>
    </v-btn>
    <v-toolbar-title>Weather Vue</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="d-flex align-self-start justify-end pt-2">
      <TheSearch></TheSearch>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>
<script>
import TheSearch from './TheSearch';
export default {
  name: 'TheToolbar',
  components: { TheSearch },
};
</script>
