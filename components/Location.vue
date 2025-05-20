<template>
  <div class="bg-beige-light px-5 lg:px-28 py-10 lg:py-20">
    <div class="flex justify-center">
      <Overlay text="Emplacement"></Overlay>
    </div>
    <div class="space-y-4 mt-5">
      <h2 class="text-outline text-3xl lg:text-4xl text-white text-center">
        Où trouver notre <br />
        foodtruck aujourd’hui ?
      </h2>
      <p class="text-gray-800 text-center font-poppins lg:w-2/3 mx-auto">
        L’avantage du food-truck, c’est qu’on cherche à être toujours au plus
        proche de nos clients, et que tout le puisse passer à l’attaque de nos
        frites : on se déplace, en street foood ! <br />
        Le reste du temps, l’événementiel nous fait voyager aux quatre coins de
        la région lyonnaise.
      </p>
    </div>
    <div v-if="location" class="lg:flex mt-10 gap-5 space-y-4 lg:space-y-0">
      <div
        class="lg:w-2/5 px-4 lg:px-8 py-5 lg:py-10 border-t border-l border-4 border-blue rounded-xl"
      >
        <div class="pb-3 border-b border-black space-y-4">
          <Link
            :text="location.city"
            isolateClass="w-fit text-white border-blue text-base bg-red"
            class="w-fit block"
          ></Link>
          <span class="block text-sm">{{ location.adresse }}</span>
        </div>
        <div class="py-3 border-b border-black space-y-4">
          <div>
            <h4 v-html="location.text_top_time" class="text-sm"></h4>
            <span class="text-sm font-poppins text-gray-800"
              >{{ location.time_start.slice(0, 5) }} -
              {{ location.time_end.slice(0, 5) }}</span
            >
          </div>
          <div>
            <h4 class="text-sm">Commande</h4>
            <span
              v-html="location.commande"
              class="text-sm font-poppins text-gray-800"
            ></span>
          </div>
        </div>
        <div class="py-3">
          <div>
            <a
              class="text-red underline text-sm"
              :href="location.link_itinerary"
              >Itineraire -></a
            >
          </div>
        </div>
      </div>
      <div class="w-full border-t border-l border-4 border-blue rounded-xl">
        <!--Carte></Carte--->
      </div>
    </div>
  </div>
</template>

<script setup>
import Overlay from "./ui/Overlay.vue";
import Link from "./ui/Link.vue";
import Carte from "~/components/location/Carte.vue";
import { useLocationStore } from "~/stores/locationStore";
const locationStore = useLocationStore();
const location = locationStore.location;
</script>
<style></style>
