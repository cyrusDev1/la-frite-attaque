<template>
  <div class="w-full relative transition-all duration-700">
    <div class="bg py-8 transform md:flex justify-between px-10 items-center">
      <div class="space-y-4 py-4">
        <Tag text="toute la semaine" class="bg-red text-sm w-fit mx-auto"></Tag>
        <p class="text-white mt-2 font-poppins">
          Privatisation du foodtruck pour déjeuner, goûter et/ou diner
        </p>
        <h4 class="text-white font-poppins font-bold text-2xl">
          À partir de 50 convives
        </h4>
        <div class="md:flex items-center space-x-2 mt-2">
          <span class="font-poppins text-white text-xl"
            >Déplacement entre le 42 et le 69</span
          >
          <span
            class="bg-light-black text-2xl font-permanent rounded-full px-3 py-1"
          >
            <span class="text-blue">À D</span>
            <span class="text-white">OMI</span>
            <span class="text-red">CILE</span>
          </span>
        </div>
      </div>

      <div class="">
        <a
          href=""
          class="bg-white hover:-rotate-6 w-fit block transition-all transform px-3 py-2 rounded text-base border-2"
          >Nous appeler</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import Tag from "../ui/Tag.vue";
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
