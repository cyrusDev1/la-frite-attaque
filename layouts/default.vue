<template>
  <NuxtLoadingIndicator color="#eab308" />
  <div v-if="!loader" class="flex flex-col justify-between">
    <div class="hidden xl:block top-0">
      <Header></Header>
    </div>
    <div class="xl:hidden top-0">
      <MobileHeader></MobileHeader>
    </div>
    <NuxtPage />
    <div class="relative bottom-0">
      <Footer></Footer>
    </div>
  </div>
  <div v-else class="bg-beige h-screen flex items-center justify-center">
    <img
      class="animate-spin-slow w-20 md:w-28 object-cover"
      src="~/assets/images/logo.svg"
      alt=""
    />
  </div>
</template>

<script setup>
import Header from "~/components/Header";
import MobileHeader from "~/components/MobileHeader";
import Footer from "~/components/Footer";

import { ref, onMounted } from "vue";
import { useLocationStore } from "~/stores/locationStore";
import { getLocation } from "~/utils/getLocation";

const locationStore = useLocationStore();
const loader = ref(true);

onMounted(async () => {
  const location = await getLocation();
  loader.value = false;

  if (location) {
    locationStore.setLocation(location);
    loader.value = false;
  }
});
</script>

<style scoped>
@keyframes spin-slow {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}

.animate-spin-slow {
  animation: spin-slow 1.5s linear infinite;
}
</style>
