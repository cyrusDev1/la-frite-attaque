<template>
  <div class="bg-light-black pt-20 md:pt-32 pb-56 relative">
    <div class="px-5 md:px-28 space-y-4 md:w-1/2 relative">
      <Tag
        text="miam maim"
        class="absolute rotate-8 left-0 -top-10 text-sm bg-green"
      ></Tag>
      <Tag
        text="sucré / salé"
        class="absolute right-0 md:right-1/2 -top-12 text-sm bg-clay-orange"
      ></Tag>
      <h3 class="text-white text-xl md:text-2xl">Food Truck ou Traiteur ?</h3>
      <p class="text-white text-base font-poppins">
        Que vous souhaitiez privatiser notre food truck pour un événement
        spécial, donner votre avis sur nos délicieux burgers ou simplement en
        savoir plus sur nos offres, n'hésitez pas à nous contacter. Nous sommes
        impatients de discuter avec vous et de répondre à toutes vos questions.
      </p>
    </div>

    <div
      class="absolute w-full lg:w-2/3 flex lg:left-1/2 transform lg:-translate-x-1/2 z-40 -bottom-20"
    >
      <Wrapper />
    </div>
  </div>
</template>
<script setup>
import Tag from "../ui/Tag.vue";
import Wrapper from "../Wrapper.vue";
</script>
