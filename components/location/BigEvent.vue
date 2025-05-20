<template>
  <div
    class="bg-white border-t border-l border-6 border-blue rounded-xl md:rounded-3xl px-4 md:px-6 py-4"
  >
    <div class="space-y-3">
      <h2
        class="cursor-default bg-red text-center mx-3 text-base rounded-full px-4 py-2 text-white border-t border-l border-4 border-blue"
      >
        {{ data.date }} à {{ data.city }}
      </h2>
      <h2
        class="cursor-default bg-beige text-center text-lg rounded-2xl px-4 py-2 text-azure border-t border-l border-5 border-red"
      >
        {{ data.event_name }}
      </h2>
      <p
        v-html="data.event_description"
        class="font-poppins text-sm md:text-gray-500"
      ></p>
    </div>
    <div class="py-3 border-b border-black space-y-4">
      <div>
        <h4 class="text-sm">Prix et réservation de l'évènement</h4>
        <span
          v-html="data.event_price"
          class="font-poppins text-sm md:text-gray-500"
        ></span>
      </div>
      <div>
        <span
          v-html="data.commande"
          class="text-sm font-poppins text-gray-800"
        ></span>
      </div>
    </div>
    <div class="py-3 border-t border-azure">
      <div class="md:flex gap-2 justify-between">
        <span class="text-sm block">{{ data.adresse }}</span>
        <a
          class="text-red underline text-sm text-nowrap"
          :href="data.link_itinerary"
          >Itineraire -></a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: Object,
});
</script>
