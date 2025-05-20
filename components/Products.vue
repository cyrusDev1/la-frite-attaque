<template>
  <div class="bg-beige py-16 px-5 md:px-28">
    <div class="flex justify-center">
      <Overlay
        text="En food truck ou en traiteur : on veut le meilleur pour nos clients !"
      ></Overlay>
    </div>
    <h1
      class="text-2xl md:text-4xl mt-5 text-white text-outline text-center md:w-1/2 mx-auto"
    >
      Optez pour des Produits de Qualité
    </h1>
    <div
      class="mt-32 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-32"
    >
      <div
        data-aos="fade-up"
        :data-aos-duration="(index + 1) * 100"
        v-for="(product, index) in products"
        :key="index"
        class="relative space-y-4 border-t border-l border-5 rounded-xl bg-white pt-32 pb-16 px-5"
        :class="`border-${product.blocBorderColor}`"
      >
        <h2 class="capitalize text-center text-xl md:text-2xl">
          <a :href="`/la-carte-privatisation/#${product.ancre}`">{{
            product.title
          }}</a>
        </h2>
        <p
          class="font-poppins text-base leading-snug text-center text-gray-600"
        >
          {{ product.description }}
        </p>
        <div class="flex justify-center">
          <div class="absolute -top-1/4">
            <a :href="`/la-carte-privatisation/#${product.ancre}`">
              <img
                :alt="product.title"
                :class="`border-${product.imageBorderColor}`"
                class="size-40 md:size-52 border-t border-l aspect-square object-cover border-5 rounded-full"
                :src="product.image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center w-1/2 mx-auto mt-10">
      <p class="text-center text-sm font-poppins">
        *Notre carte évolue en fonction des saisons et de l’envie du chefet de
        la disponibilité de nos partenaires !
      </p>
    </div>
  </div>
</template>
<script setup>
import Overlay from "./ui/Overlay.vue";
import burgerImage from "~/assets/images/products/burger-maison.jpg";
import dessertCream from "~/assets/images/products/dessert-cream.jpg";
import freshDrink from "~/assets/images/products/fresh-drink.jpg";
import frittes from "~/assets/images/products/frittes.jpg";

const products = ref([
  {
    title: "nos burgers",
    description:
      "Des burgers maison bien généreux, préparés à la minute. Pain moelleux, viande savoureuse, garnitures qui claquent : que demander de plus ?",
    image: burgerImage,
    blocBorderColor: "orange",
    imageBorderColor: "red",
    ancre: "Burgers",
  },
  {
    title: "nos frites",
    description:
      "Frites maison croustillantes comme il faut. Patates lavées, coupées, blanchies, et frites sur place. Pas de triche, que du kiff.",
    image: frittes,
    imageBorderColor: "orange",
    blocBorderColor: "blue",
    ancre: "frites",
  },
  {
    title: "nos boissons",
    description:
      "Sodas bien frais, et une sélection de bières pour faire glisser tout ça comme il faut. À consommer avec modération (ou pas).",
    image: freshDrink,
    imageBorderColor: "blue",
    blocBorderColor: "red",
    ancre: "Boissons",
  },
  {
    title: "nos desserts",
    description:
      "Crêpes, bubble waffles et autres douceurs selon l’humeur du chef. Un seul mot d’ordre : finir sur une note sucrée.",
    image: dessertCream,
    imageBorderColor: "red",
    blocBorderColor: "blue",
    ancre: "Dessert",
  },
]);
</script>
