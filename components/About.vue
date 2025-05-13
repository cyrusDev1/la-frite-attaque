<template>
  <div class="bg-beige px-5 lg:px-28 py-20">
    <div class="flex justify-center">
      <Overlay text="Découvrez comment une frite a pris la route"></Overlay>
    </div>
    <div
      class="lg:flex space-y-5 lg:space-y-0 mt-12 justify-between items-center"
    >
      <div class="transform lg:rotate-6 lg:w-1/2">
        <img
          class="h-[60vh] lg:size-[500px] object-cover border-b-8 border-r-8 border-orange rounded-2xl"
          src="~/assets/images/about.jpg"
          alt=""
        />
      </div>
      <div class="lg:w-1/2">
        <div
          class="bg-red relative bg lg:w-[500px] mx-auto rounded-3xl px-4 lg:px-8 py-12 space-y-3"
        >
          <h2 class="text-outline text-3xl text-white text-center">
            Enzo et son truck
          </h2>
          <p class="font-poppins text-sm lg:text-base">
            Avant, c’était gestion, RH et commerce. Aujourd’hui, c’est burgers,
            <b>frites maison</b>, crêpes et bubble waffles.
          </p>
          <p class="font-poppins text-sm lg:text-base">
            Frite Attaque, c’est le projet d’un passionné de terrain qui a
            décidé de mêler goût du contact, sens de l’organisation… et plaisir
            <b>de faire kiffer les gens.</b>
          </p>
          <p class="font-poppins text-sm lg:text-base">
            Basé en Rhône-Alpes, le food truck se déplace là où l’ambiance est
            au rendez-vous : concerts, marchés, fêtes, salons, mariages ou fête
            d’entreprise.
          </p>
          <p class="font-poppins text-sm lg:text-base">
            Et si tu veux privatiser Frite Attaque pour un événement, c’est
            possible : <b>on débarque, on régale</b>, on repart.
            <b>Simple et efficace</b>.
          </p>
          <p class="font-poppins text-sm lg:text-base">
            Pas d’enrobage marketing : ici, on parle vrai. Ce qui compte, c’est
            ce qu’il y a dans l’assiette… et <b>le sourire</b> qui vient avec.
          </p>
          <Link
            text="Voir plus"
            isolateClass="w-fit text-sm lg:text-base bg-red hover:bg-orange"
            class="absolute right-8 -bottom-4"
          ></Link>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div
            v-for="(item, index) in stats"
            :key="index"
            class="bg-sunbeam text-center rounded-2xl p-3 border-t border-l border-4 border-red"
          >
            <h2 class="text-azure text-2xl lg:text-3xl font-bold">
              {{ item.title }}
            </h2>
            <span class="text-azure text-xs leading-3">{{
              item.description
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Overlay from "./ui/Overlay.vue";
import Link from "./ui/Link.vue";
const stats = ref([
  { title: "8000 +", description: "clients par an !" },
  { title: "500", description: "kilos de frites par an préparés !" },
  { title: "10 +", description: "Ans d'Expérience" },
]);
</script>
<style scoped>
.bg {
  background-image: url("~/assets/images/svg/orange-vector.svg");
  background-repeat: no-repeat;
}
</style>
