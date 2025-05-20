<template>
  <div
    class="relative border-t border-l border-4 border-orange bg-white px-2 py-3 md:py-5 md:px-6 rounded-2xl"
  >
    <div
      v-if="product.tag"
      :style="{ backgroundColor: product.tag.color_hex }"
      class="absolute w-fit right-5 md:right-initial -top-5 md:-left-10 md:top-2 transform -rotate-10 md:-rotate-12 px-3 py-1 rounded-full"
    >
      <span class="text-white text-sm font-permanent">{{
        product.tag.name
      }}</span>
    </div>
    <div class="md:flex md:space-x-5 md:space-y-0 space-y-5 items-center">
      <div class="md:w-1/3">
        <img
          class="rounded-2xl"
          src="~/assets/images/products/burger-maison.jpg"
          alt=""
        />
      </div>
      <div class="md:w-2/3 space-y-4 bg-">
        <h3 class="text-azure text-xl text-center">{{ product.title }}</h3>
        <p class="text-gray-500 font-poppins text-sm text-center">
          {{ product.description }}
        </p>
        <div class="flex justify-center space-x-4">
          <div
            v-for="(value, name) in product.labels"
            :key="name"
            class="flex flex-col items-center space-y-1.5"
          >
            <span
              class="bg-red font-permanent text-white py-1 px-4 rounded-full"
              >{{ name }}</span
            >
            <span class="font-poppins font-bold">{{ value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  product: Object,
});
</script>
