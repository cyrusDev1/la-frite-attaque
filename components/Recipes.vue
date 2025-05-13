<template>
  <div class="bg-light-black relative">
    <img
      class="absolute z-40 -top-3"
      src="~/assets/images/svg/lightFillTop.svg"
      alt=""
    />
    <div class="relative pt-10 px-5 md:px-28">
      <h1 class="text-2xl md:text-4xl bg- text-white text-outline text-center">
        Ils ont attaqué les frites !🍟 <br />Découvrez nos recettes à succès !
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 py-16">
        <div
          class="relative md:flex space-x-10 items-center border-t border-l border-4 border-orange bg-white py-5 px-6 rounded-2xl"
          v-for="(item, index) in 4"
          :key="index"
        >
          <div
            class="bg-indigo-blue absolute -left-6 top-2 transform -rotate-12 px-3 py-1 rounded-full"
          >
            <span class="text-white text-xl font-permanent">Bestseller</span>
          </div>
          <div class="w-1/3">
            <img
              class="rounded-2xl"
              src="~/assets/images/products/burger-maison.jpg"
              alt=""
            />
          </div>
          <div class="w-2/3 space-y-4">
            <h3 class="text-azure text-xl text-center">Yellow Submarine</h3>
            <p class="text-gray-500 font-poppins text-sm">
              Pain maison – Steak haché frais VBF – Mayonnaise maison – Tomates
              séchées – Oignons caramélisés – Salade – Cheddar
            </p>
            <div class="flex justify-center space-x-10">
              <div class="flex flex-col items-center space-y-1.5">
                <span
                  class="bg-red font-permanent text-white py-1 px-4 text-xl rounded-full"
                  >SEUL</span
                >
                <span class="text-xl font-poppins font-bold"
                  >12<sup class="text-xs font-poppins">€20</sup></span
                >
              </div>
              <div class="flex flex-col items-center space-y-1.5">
                <span
                  class="bg-red font-permanent text-white py-1 px-4 text-xl rounded-full"
                  >MENU</span
                >
                <span class="text-xl font-poppins font-bold"
                  >12<sup class="text-xs font-poppins">€20</sup></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import GlassesWhite from "~/assets/images/svg/GlassesWhite.svg";
import PopOne from "~/assets/images/svg/PopOne.svg";
import PopTwo from "~/assets/images/svg/PopTwo.svg";

import c from "~/assets/images/gallery/03.jpeg";
import a from "~/assets/images/gallery/03.jpg";
import b from "~/assets/images/gallery/01.jpg";

const presentations = ref([
  {
    title: "🔥 Vers le 7ème Sel !",
    description:
      "Notre spécialité ? Des burgers bien garnis, des frites maison croustillantes, des crêpes et des bubble waffles. Le tout préparé avec envie, et servi avec le smile, partout où on pose le camion.",
    absoluteImage: PopOne,
    absoluteImagePosition: "-top-16",
    image: a,
  },
  {
    title: "🍔 Pour le meilleur et pour le cheese...",
    description:
      "Chez Frite Attaque, chaque burger est pensé pour régaler : pain moelleux, cuisson maîtrisée, garniture généreuse. Le tout chaud, fondant, croustillant… bref, une vraie déclaration d’amour au goût.",
    absoluteImage: PopTwo,
    absoluteImagePosition: "-bottom-5 right-20",
    image: b,
  },
  {
    title: "🚚 Ça grille de mille feux !",
    description:
      "Frite Attaque, c’est plus qu’un food truck : c’est une ambiance, une présence sur vos événements, et une cuisine sans chichi mais pleine d’envie. De Lyon à plus loin, on vous suit partout où ça fête.",
    absoluteImage: GlassesWhite,
    absoluteImagePosition: "-bottom-1 left-5",
    image: c,
  },
]);
</script>
