<template>
  <div class="bg-beige pt-10 px-5 lg:px-28">
    <HeroCarte></HeroCarte>
  </div>
  <div class="px-5 md:px-28 pt-10 pb-20 bg-beige">
    <!--Overlay text="Rafraîchissement" class="w-fit mx-auto"></Overlay-->
    <div v-if="products && Object.keys(products).length">
      <div
        class="flex flex-col"
        v-for="(categoryProducts, categoryName) in products"
      >
        <ProductList
          :categoryName="categoryName"
          :categoryProducts="categoryProducts"
        ></ProductList>
      </div>
    </div>
  </div>
  <Location></Location>
  <ScrollText :fill="false"></ScrollText>
  <WhyUs></WhyUs>
  <Testimonials></Testimonials>
  <Faq></Faq>
  <Contact></Contact>
</template>
<script setup>
import HeroCarte from "~/components/carte/HeroCarte.vue";
import ProductList from "~/components/carte/ProductList.vue";
import WhyUs from "~/components/carte/WhyUs.vue";
import Faq from "~/components/Faq.vue";
import Contact from "~/components/Contact.vue";
import Location from "~/components/Location.vue";
import ScrollText from "~/components/ScrollText.vue";
import Testimonials from "~/components/Testimonials.vue";
import Overlay from "~/components/ui/Overlay.vue";

import { get } from "~/utils/api";

const products = ref([]);

onMounted(async () => {
  try {
    products.value = await get("products");
  } catch (e) {
    console.error(e);
  }
});
</script>
