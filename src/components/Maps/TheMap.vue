<template>
  <div id="map"></div>
</template>
<script>
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-openweathermap';
import 'leaflet.locatecontrol';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';

export default {
  name: 'TheMap',
  components: {},
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      currentPosition: [],
      zoom: 8,
      map: L.Map,
      precipitationLayer: null,
      center: [30.214575081187988, -93.21830749511719],
    };
  },
  computed: {},
  mounted() {
    const detailed = L.tileLayer(
      'https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    );
    const street = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    );
    const precipitation = L.OWM.precipitation({
      appId: process.env.VUE_APP_KEY,
      opacity: 0.7,
    });
    const temperature = L.OWM.temperature({
      appId: process.env.VUE_APP_KEY,
      opacity: 0.5,
      temperatureUnit: 'F',
    });
    const wind = L.OWM.wind({
      appId: process.env.VUE_APP_KEY,
      opacity: 0.5,
    });
    const snow = L.OWM.snow({
      appId: process.env.VUE_APP_KEY,
      opacity: 0.8,
    });
    const clouds = L.OWM.clouds({
      appId: process.env.VUE_APP_KEY,
      opacity: 0.8,
    });
    const pressure = L.OWM.pressure({
      appId: process.env.VUE_APP_KEY,
      opacity: 0.5,
    });
    this.map = L.map('map', {
      center: this.center,
      zoom: 4,
      layers: [street, detailed],
    });
    const baseMaps = {
      Street: street,
      Detailed: detailed,
    };
    const overlayMaps = {
      Precipitation: precipitation,
      Temperature: temperature,
      Wind: wind,
      Snow: snow,
      Clouds: clouds,
      Pressure: pressure,
    };
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      this.map
    );
    L.control.layers(baseMaps, overlayMaps).addTo(this.map);
    this.map.addControl(
      L.control.locate({
        locateOptions: {
          enableHighAccuracy: true,
          setView: true,
        },
        watch: true,
        icon: 'map-search-outline',
      })
    );
  },
};
</script>
<style scoped lang="scss">
#map {
  width: 100%;
  height: calc(100vh - 64px);
}
</style>
