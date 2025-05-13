<template>
  <div class="my-5">
    <h3 class="text-outline text-center text-white text-3xl">
      {{ categoryName }}
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-8">
      <Product
        class=""
        v-for="(product, index) in categoryProducts"
        :key="index"
        :product="product"
      ></Product>
    </div>
  </div>
</template>
<script setup>
import Product from "./Product.vue";

const props = defineProps({
  categoryName: String,
  categoryProducts: Object,
});
</script>
