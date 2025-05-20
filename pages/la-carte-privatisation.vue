<template>
  <div>
    <HeroPrivatization :data="data"></HeroPrivatization>
    <Domains :link="link"></Domains>
    <div class="bg-[#131313] px-5 py-10 md:px-28 md:py-16">
      <WrapperPrivatisation></WrapperPrivatisation>
    </div>
    <div class="px-5 md:px-28 pt-10 pb-20 bg-beige">
      <div
        class="flex justify-center space-x-6"
        v-if="products && Object.keys(products).length"
      >
        <div v-for="(categoryProducts, categoryName) in products">
          <Link
            :text="categoryName"
            :to="`#${categoryName}`"
            isolateClass="text-azure border-orange"
          ></Link>
        </div>
      </div>
      <div class="mt-5" v-if="products && Object.keys(products).length">
        <div
          :id="categoryName"
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
    <WhyUs></WhyUs>
    <Testimonials></Testimonials>
    <Faq></Faq>
    <Contact></Contact>
  </div>
</template>
<script setup>
useHead({
  title: "Carte & Privatisation – La Frite Attaque | Food Truck en Rhône-Alpes",
  meta: [
    {
      name: "description",
      content:
        "Découvrez la carte gourmande de La Frite Attaque et privatisez notre food truck pour vos événements en Rhône-Alpes. Burgers et frites maisons au menu !",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});

import HeroPrivatization from "~/components/privatization/HeroPrivatization.vue";
import Domains from "~/components/Domains.vue";
import WhyUs from "~/components/carte/WhyUs.vue";
import Contact from "~/components/Contact.vue";
import Faq from "~/components/Faq.vue";
import WrapperPrivatisation from "~/components/privatization/WrapperPrivatisation.vue";
import Testimonials from "~/components/Testimonials.vue";
import ProductList from "~/components/carte/ProductList.vue";
import Link from "~/components/ui/Link.vue";
const data = ref({
  title: `Découvrons la carte traiteur Lyon, Roanne...`,
  description: `Faites de votre événement en Auvergne Rhônes Alpes une
     célébration gourmande avec la privatisation de votre food truck de
      burgers, crêpes et Bubble Waffle. Découvrez une cuisine de rue
       créative et savoureuse, parfaite pour impressionner vos invités.`,
  link: {
    text: "DECOUVREZ NOTRE FACILITE DE PRIVATISATION",
    to: "/la-privatisation",
  },
});
const link = ref({
  text: "RESERVER LE TRAITEUR / FOOD TRUCK",
  to: "/la-privatisation",
});

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
