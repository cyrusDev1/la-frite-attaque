<template>
  <div ref="mapRef" class="w-full h-full rounded-xl border" />
</template>

<script setup>
const props = defineProps({
  location: Object,
});
import { onMounted, ref } from "vue";

const mapRef = ref(null);

onMounted(async () => {
  const L = await import("leaflet");
  L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

  await import("leaflet/dist/leaflet.css");

  const map = L.map(mapRef.value).setView(
    [props.location.latitude, props.location.longitude],
    14,
  );

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">Openstreetmap</a>',
  }).addTo(map);

  L.marker([props.location.latitude, props.location.longitude])
    .addTo(map)
    .bindPopup(props.location.adresse);
});
</script>

<style scoped>
div {
  min-height: 400px;
}
</style>
