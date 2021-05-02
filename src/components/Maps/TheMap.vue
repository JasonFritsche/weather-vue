<template>
  <div id="container">
    <l-map ref="mapRef" :zoom="zoom" :center="center" id="l-map-container">
      <l-tile-layer :url="url"></l-tile-layer>
    </l-map>
  </div>
</template>
<script>
import { LMap, LTileLayer } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

const centerMapDefault = [39, -98];

export default {
  name: 'MjMap',
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 9,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      markerPos: [98.5795, 39.8283],
    };
  },
  computed: {
    center() {
      return this.state && this.state.items.length
        ? this.state.items[0]._geoloc
        : centerMapDefault;
    },
  },
  mounted() {
    // Accessing leaflet API methods according to
    // @link https://korigan.github.io/Vue2Leaflet/#/quickstart?id=accessing-leaflet-api

    this.$nextTick(() => {
      if (typeof this.$refs.mapRef !== 'undefined') {
        this.map = this.$refs.mapRef.mapObject;
        this.map.zoomControl.remove();
        this.recenterMap(centerMapDefault);
      }
    });
  },
};
</script>
<style scoped>
#l-map-container {
  width: 100%;
  height: 100vh;
}
</style>
