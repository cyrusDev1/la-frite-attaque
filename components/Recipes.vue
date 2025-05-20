<template>
  <div class="bg-light-black relative">
    <img
      class="absolute z-40 -top-3"
      src="~/assets/images/svg/lightFillTop.svg"
      alt=""
    />
    <div class="relative pt-24 px-5 md:px-28">
      <h1 class="text-2xl md:text-4xl bg- text-white text-outline text-center">
        Ils ont attaqué les frites !🍟 <br />Découvrez nos recettes à succès !
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-8 pb-20">
        <Product
          class=""
          v-for="(product, index) in filteredProducts"
          :key="index"
          :product="product"
        ></Product>
      </div>
    </div>
  </div>
</template>
<script setup>
import Product from "~/components/carte/Product.vue";

import { filterProducts } from "~/utils/filterProducts";

import { get } from "~/utils/api";
const filteredProducts = ref([]);
const products = ref([]);

onMounted(async () => {
  try {
    products.value = await get("products");
  } catch (e) {
    console.error(e);
  }
  filteredProducts.value = filterProducts(products.value, "Bestseller");
});
</script>
