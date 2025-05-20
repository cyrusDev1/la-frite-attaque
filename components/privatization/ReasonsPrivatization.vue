<template>
  <div class="bg-light-black pt-16 relative">
    <div class="space-y-4 pb-10 px-5 md:px-28">
      <div class="relative">
        <Tag
          text="LOgique"
          class="absolute rotate-8 left-0 -top-10 text-sm bg-green"
        ></Tag>
        <Tag
          text="100% validé"
          class="absolute right-5 md:right-36 -top-12 text-sm bg-clay-orange"
        ></Tag>
        <h3 class="text-white text-xl md:text-3xl font-poppins">
          Pourquoi opter pour un food truck pour votre événement
          <span v-html="text"></span> ?
        </h3>
      </div>
      <p class="text-white text-sm md:text-base font-poppins">
        Organiser un événement réussi demande du temps, de l'originalité et une
        expérience culinaire hors pair. Avec L'Instant, bénéficiez d'une
        solution complète qui saura surprendre vos invités:
      </p>
      <ul class="space-y-4 md:w-2/3">
        <li>
          <p class="text-white text-sm md:text-base font-poppins">
            <b>Des burgers d'exception</b> : Élaborés avec des ingrédients frais
            et locaux, nos burgers sont personnalisables selon vos envies et
            celles de vos convives.
          </p>
        </li>
        <li>
          <p class="text-white text-sm md:text-base font-poppins">
            <b>Une atmosphère unique</b> : Plus qu'un simple repas, notre food
            truck crée une ambiance conviviale qui marquera les esprits.
          </p>
        </li>
        <li>
          <p class="text-white text-sm md:text-base font-poppins">
            <b>Un service adapté à vos besoins</b> : Que vous prévoyiez 30 ou
            150 invités, nous ajustons notre offre pour correspondre
            parfaitement à votre événement.Nous intervenons à Épernay et dans
            les environs, avec la promesse d'une qualité irréprochable et de
            saveurs authentiques.
          </p>
        </li>
      </ul>
    </div>
    <div class="mt-5 bg-beige py-10 px-5 md:px-28">
      <WrapperPrivatisation />
    </div>
    <div class="py-20 px-5 flex items-center md:px-28">
      <div class="relative">
        <Tag
          text="logique"
          class="absolute rotate-8 left-0 -top-10 text-sm bg-green"
        ></Tag>
        <Tag
          text="100% validé"
          class="absolute right-0 -top-12 text-sm bg-clay-orange"
        ></Tag>
        <h3 class="text-white text-xl md:text-3xl font-poppins">
          Pourquoi opter pour un food truck pour votre événement
          <span v-html="text"></span> ?
        </h3>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  text: String,
});
import Tag from "../ui/Tag.vue";
import WrapperPrivatisation from "./WrapperPrivatisation.vue";
</script>
