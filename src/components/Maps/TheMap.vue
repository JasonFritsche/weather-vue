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
      appId: process.env.VUE_APP_KEY,
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
    const Precipitation = L.OWM.precipitation({
      appId: this.appId,
      opacity: 0.7,
    });
    const Temperature = L.OWM.temperature({
      appId: this.appId,
      opacity: 0.5,
      temperatureUnit: 'F',
    });
    const Wind = L.OWM.wind({
      appId: this.appId,
      opacity: 0.5,
    });
    const Snow = L.OWM.snow({
      appId: this.appId,
      opacity: 0.8,
    });
    const Clouds = L.OWM.clouds({
      appId: this.appId,
      opacity: 0.8,
    });
    const Pressure = L.OWM.pressure({
      appId: this.appId,
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
      Precipitation,
      Temperature,
      Wind,
      Snow,
      Clouds,
      Pressure,
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
        icon: 'mdi mdi-map-marker-radius',
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
