<template>
  <div class="bg relative h-screen">
    <video
      class="w-full h-full relative z-20 object-cover"
      src="/videos/hero.mp4"
      autoplay
      muted
      playsinline
      loop
    ></video>
    <div
      class="absolute px-5 py-28 md:py-40 z-40 top-0 lg:py-0 lg:top-1/4 lg:left-1/2 lg:-translate-x-1/2 space-y-6"
    >
      <h1 class="text-5xl lg:text-6xl text-white text-outline text-center">
        La Frite Attaque
      </h1>
      <p class="text-white text-center text-xl">
        Sur 4 roues, on parcours le Rhônes Alpes pour délivrer nos meilleurs
        produits !
      </p>
      <a
        href="/nos-emplacements"
        class="cursor-pointer flex items-center space-x-2 transform hover:scale-105 -rotate-4 bg-clay-orange rounded-full w-fit mx-auto px-5 py-1"
      >
        <span class="font-permanent font-bold text-white text-2xl"
          >Suivre nos traces</span
        >
        <Icon class="text-white text-2xl" name="ph:map-pin-fill" />
      </a>
      <Scores></Scores>
      <div>
        <a
          class="bg-white w-fit mx-auto uppercase transform transition duration-500 hover:-rotate-3 hover:border-b-10 text-base py-2.5 px-4 border-x-5 border-t-5 border-b-8 rounded-xl block border-black"
          href="/la-privatisation"
        >
          Privatiser le truck
        </a>
      </div>
    </div>
    <div class="bg-black/30 absolute z-30 inset-0 w-full h-full"></div>
    <img
      class="absolute object-cover h-10 z-40 -bottom-3"
      src="~/assets/images/svg/beigeFillBottom.svg"
      alt=""
    />
  </div>
</template>

<script setup>
import Scores from "./ui/Scores.vue";
</script>
<style scoped></style>
