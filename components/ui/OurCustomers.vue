<template>
  <div class="flex space-x-4 md:space-x-1 relative z-40 px-5">
    <div v-for="(item, index) in customers" :key="index" class="">
      <img class="w-40 md:w-2/3" :src="item.image" :alt="item.name" />
    </div>
  </div>
</template>
<script setup>
import decathlon from "~/assets/images/customers/decathlon.svg";
import dekra from "~/assets/images/customers/dekra.svg";
import edf from "~/assets/images/customers/edf.svg";
import henriot from "~/assets/images/customers/henriot.svg";
import veuve from "~/assets/images/customers/veuve.svg";

const customers = ref([
  {
    name: "",
    image: decathlon,
  },
  {
    name: "",
    image: dekra,
  },
  {
    name: "",
    image: edf,
  },
  {
    name: "",
    image: henriot,
  },
  {
    name: "",
    image: veuve,
  },
]);
</script>
