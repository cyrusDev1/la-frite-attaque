<template>
  <div class="w-full relative transition-all duration-700">
    <div class="bg py-8 transform flex flex-col items-center">
      <Tag text="privatisation" class="bg-red text-sm w-fit mx-auto"></Tag>
      <p class="text-white mt-2 font-poppins text-center">
        2025 est déjà lancé ! Pensez à 2026 !
      </p>
      <h4 class="text-white font-poppins text-center text-xl">
        Auvergne Rhônes Alpes
      </h4>
      <div class="flex items-center space-x-2 mt-2">
        <span class="bold uppercase text-white text-xl">Truck</span>
        <span
          class="bg-light-black text-2xl font-permanent rounded-full px-3 py-1"
        >
          <span class="text-blue">DISP</span>
          <span class="text-white">ONI</span>
          <span class="text-red">BLE</span>
        </span>
      </div>
      <div class="mt-5">
        <a
          href="/privatiser"
          class="bg-white hover:-rotate-6 block transition-all transform px-3 py-2 rounded text-sm border-2"
          >Privatiser</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import Tag from "./ui/Tag.vue";
</script>
<style scoped>
.bg {
  background-image: url("~/assets/images/svg/black-wrapper.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: 100%;
}
</style>
