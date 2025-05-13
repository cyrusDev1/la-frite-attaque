<template>
  <div class="bg-beige-light px-5 lg:px-28 py-20">
    <div class="flex justify-center">
      <Overlay
        text="J’espère que vous avez encore faim après dégusté autant d’image savoureuse !"
      ></Overlay>
    </div>
    <div class="space-y-4 mt-5">
      <h2 class="text-outline text-2xl lg:text-4xl text-white text-center">
        Questions Fréquentes
      </h2>
    </div>
    <div class="flex justify-center mt-10 gap-5">
      <div
        class="md:w-3/5 mx-auto px-4 md:px-8 py-4 border-t border-l border-4 border-orange rounded-xl"
      >
        <div v-for="(item, index) in faq" :key="index" class="border-b py-4">
          <div class="flex justify-between space-x-5 items-center">
            <h4
              @click="openQuestion(index)"
              class="text-sm md:text-base cursor-pointer"
            >
              {{ item.question }}
            </h4>
            <span
              @click="openQuestion(index)"
              class="cursor-pointer rounded-full flex items-center justify-center py-1 px-2 bg-red"
            >
              <b
                v-if="activeIndex == index"
                class="text-white font-permanent md:text-lg"
                >-</b
              >
              <b v-else class="text-white font-permanent md:text-lg">+</b>
            </span>
          </div>
          <p
            v-if="activeIndex == index"
            class="font-poppins text-sm md:text-base mt-2 text-gray-600"
          >
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Overlay from "./ui/Overlay.vue";
import Link from "./ui/Link.vue";
const activeIndex = ref(-1);
const faq = ref([
  {
    question: "Où peut-on vous trouver avec votre food truck ?",
    answer:
      "Nous nous déplaçons dans toute la région selon les événements. Suivez-nous sur nos réseaux pour connaître notre emplacement du jour !",
  },
  {
    question: "Proposez-vous des options végétariennes ?",
    answer:
      "Oui, nous avons plusieurs burgers et crêpes végétariens qui raviront tous les gourmands.",
  },
  {
    question: "Est-il possible de privatiser le food truck pour un événement ?",
    answer:
      "Bien sûr ! Mariage, anniversaire, entreprise… contactez-nous pour réserver une date.",
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer:
      "Nos horaires varient en fonction des lieux et événements. Ils sont toujours mis à jour sur Instagram et Facebook.",
  },
  {
    question: "Acceptez-vous les paiements par carte ?",
    answer:
      "Oui, nous acceptons les paiements par carte, espèces et sans contact.",
  },
  {
    question: "Quels types de plats proposez-vous ?",
    answer:
      "Des burgers faits maison, des frites croustillantes, des crêpes sucrées et des bubble waffles. Tout est préparé avec amour !",
  },
]);
function openQuestion(index) {
  activeIndex.value = activeIndex.value == index ? -1 : index;
}
</script>
<style></style>
