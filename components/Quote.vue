<template>
  <div class="bg-beige">
    <div
      class="relative px-5 lg:px-64 py-4 md:py-16 text-center space-y-5 md:space-y-5 bg-beige"
    >
      <img
        class="absolute size-7 lg:size-initial"
        src="~/assets/images/svg/quote.svg"
        alt=""
      />

      <p class="text-2xl lg:text-5xl font-permanent leading-tight">
        Roulez vers l'authenticité d'un
        <Tag text="burger maison" class="bg-clay-orange text-xl lg:text-2xl" />
        concocté avec amour
      </p>
      <p class="text-2xl lg:text-5xl font-permanent leading-tight">
        entre le 42 et le 69. Notre Food truck ne "truck' pas avec la qualité :
        c’est généreux, savoureux, et servi avec le smile.
      </p>
      <p class="text-2xl lg:text-5xl font-permanent leading-tight">
        Prêts à croquer
        <Tag text="à pleine dent" class="bg-green text-xl lg:text-2xl" />
        <br />
        dans notre concept ?
      </p>
      <img
        class="absolute size-7 lg:size-initial right-0 bottom-8"
        src="~/assets/images/svg/quote.svg"
        alt=""
      />
    </div>
  </div>
</template>
<script setup>
import Tag from "./ui/Tag.vue";
</script>
