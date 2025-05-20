<template>
  <div>
    <div class="">
      <Location></Location>
      <Planning></Planning>
      <div class="bg-beige py-10 px-5 lg:px-28">
        <h2 class="text-outline text-white text-2xl md:text-3xl text-center">
          On atout d'un grand !
        </h2>
        <h2
          class="text-outline text-white text-2xl md:text-3xl text-center mt-2"
        >
          On particicpe à des
          <span
            class="bg-black uppercase px-2 text-lg md:text-3xl rounded text-nowrap"
            >biiiigs events!</span
          >
        </h2>
        <p class="font-poppins text-sm text-center mt-4">
          ** Notre gamme de produit peut être adaptés lors des évènements en
          fonction des organisations. **
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">
          <BigEvent
            v-for="(item, index) in bigsEvents"
            :data="item"
            :key="index"
          ></BigEvent>
        </div>
      </div>
      <Faq></Faq>
      <Contact></Contact>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "Nos Emplacements – La Frite Attaque | Où trouver notre food truck ?",
  meta: [
    {
      name: "description",
      content:
        "Retrouvez La Frite Attaque près de chez vous ! Consultez nos emplacements en Rhône-Alpes pour déguster nos burgers et frites maisons.",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});

import Location from "~/components/Location.vue";
import Contact from "~/components/Contact.vue";
import Faq from "~/components/Faq.vue";
import Planning from "~/components/location/Planning.vue";
import BigEvent from "~/components/location/BigEvent.vue";

import { get } from "~/utils/api";

const bigsEvents = ref([]);

onMounted(async () => {
  try {
    bigsEvents.value = await get(`bigs-events`);
  } catch (e) {
    console.error(e);
  }
});
</script>
