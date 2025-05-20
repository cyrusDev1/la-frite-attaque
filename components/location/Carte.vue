<template>
  <div ref="mapRef" class="w-full h-full rounded-xl border" />
</template>

<script setup>
import { onMounted, ref } from "vue";

const mapRef = ref(null);

const latitude = 48.8566;
const longitude = 2.3522;

onMounted(async () => {
  if (typeof window !== "undefined") {
    // Charge Google Maps JS API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=VOTRE_API_KEY`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      const map = new window.google.maps.Map(mapRef.value, {
        center: { lat: latitude, lng: longitude },
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map,
        title: "Food Truck",
      });
    };

    document.head.appendChild(script);
  }
});
</script>

<style scoped>
div {
  min-height: 300px;
}
</style>
