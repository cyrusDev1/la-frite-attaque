// src/stores/locationStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useLocationStore = defineStore("location", () => {
  const location = ref(null);

  const setLocation = (newLocation) => {
    location.value = newLocation;
  };

  return {
    location,
    setLocation,
  };
});
