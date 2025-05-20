<template>
  <div class="bg-beige-light relative">
    <div
      class="px-5 lg:px-28 pt-20 pb-20 lg:pb-44 lg:flex space-y-10 lg:space-y-0 lg:space-x-10 justify-between items-center"
    >
      <div class="lg:w-1/2 space-y-5">
        <Overlay text="Évènement"></Overlay>
        <h2 class="text-outline text-white text-2xl lg:text-4xl">
          La Privatisation
        </h2>
        <p class="font-poppins">
          Nous proposons nos <b>services de restauration</b> sur Lyon et ses
          environs pour différents événements publics et privés :
          <b
            >festivals, anniversaires, brunchs de mariage, repas d’entreprises,
            salons ou rencontres sportives . </b
          >Nous assurons un service personnalisé avec des menus adéquats au type
          d’événement en question.
        </p>
        <Link
          text="Voir plus"
          isolateClass="w-fit text-white border-blue text-base bg-red hover:bg-orange"
          class="w-fit"
          to="/la-privatisation"
        ></Link>
      </div>

      <div class="transform relative lg:w-1/2">
        <div
          class="bg-sunbeam w-fit absolute -bottom-10 right-0 lg:-left-10 text-center rounded-2xl p-3 border-t border-l border-4 border-red"
        >
          <h2 class="text-azure text-2xl lg:text-3xl font-bold">70 +</h2>
          <span class="text-azure text-xs leading-3">Évènements par an</span>
        </div>
        <img
          class="object-cover border-t-2 border-l-2 border-8 border-orange rounded-2xl"
          src="~/assets/images/evenement-lyon.jpg"
          alt=""
        />
      </div>
    </div>
    <img
      class="absolute z-40 -bottom-3"
      src="~/assets/images/svg/bottomBlack.svg"
      alt=""
    />
  </div>
</template>

<script setup>
import Overlay from "./ui/Overlay.vue";
import Link from "./ui/Link.vue";
</script>
<style></style>
