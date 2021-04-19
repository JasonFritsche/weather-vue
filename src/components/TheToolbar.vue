<template>
  <v-app-bar dark color="purple darken-3" elevate-on-scroll class="pb-2">
    <v-btn icon>
      <v-icon large color="purple accent-1">mdi-sunglasses</v-icon>
    </v-btn>
    <v-toolbar-title>Weather Vue</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: 'TheToolbar',
};
</script>
