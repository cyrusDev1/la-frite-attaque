<template>
  <div class="bg-red py-10 px-5 xl:px-28">
    <div class="flex flex-col justify-center items-center">
      <a href="/">
        <img class="object-cover" src="~/assets/images/logo.svg" alt="" />
      </a>
      <p class="font-poppins text-white md:w-1/2 text-center text-sm">
        La Frite Attaque, votre traiteur & food truck de référence à Lyon,
        Roanne, Saint-Etienne, Macon, Bourg en Bresse... chez vous : en Rhône
        Alpes
      </p>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-between w-full gap-8 mt-10"
    >
      <div class="space-y-2 md:col-span-2">
        <p class="font-poppins text-white text-center">
          Notre adresse du jour (pour manger)
        </p>
        <h3 v-if="location?.adresse" class="text-white text-lg text-center">
          {{ location.adresse }}
        </h3>
        <div class="flex justify-center py-4">
          <a
            class="hidden bg-white px-6 rounded-full text-sm text-azure py-2.5"
            href=""
            >Commander</a
          >
        </div>
      </div>
      <div class="space-y-2">
        <h3 class="text-white text-lg">Infos</h3>
        <div class="flex">
          <ul class="space-y-2">
            <li>
              <a
                class="hover:text-orange transition-all text-white font-poppins"
                href="/la-carte/#burgers"
                >Les Burgers</a
              >
            </li>
            <li>
              <a
                class="hover:text-orange transition-all text-white font-poppins"
                href="/la-privatisation"
                >La Privatisation</a
              >
            </li>
            <li>
              <a
                class="hover:text-orange transition-all text-white font-poppins"
                href="#"
                >Mentions Légales</a
              >
            </li>
            <li>
              <a
                class="hover:text-orange transition-all text-white font-poppins"
                href="#"
                >Politique de confidentialité</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="space-y-2">
        <h3 class="text-white text-lg">Contact</h3>
        <div class="flex">
          <ul class="space-y-2">
            <li>
              <a
                class="text-white font-poppins flex items-center space-x-1"
                href=""
              >
                <Icon
                  name="hugeicons:mail-open"
                  width="24"
                  height="24"
                  style="color: #fff"
                />
                <span>contact@lafriteattaque.fr</span>
              </a>
            </li>
            <li>
              <a
                class="text-white font-poppins flex items-center space-x-1"
                href=""
              >
                <Icon
                  name="tabler:phone-ringing"
                  width="24"
                  height="24"
                  style="color: #fff"
                />
                <span>06 85 82 93 89</span>
              </a>
            </li>
            <li>
              <a
                class="text-white font-poppins flex items-center space-x-1"
                href=""
              >
                <Icon
                  name="mdi:phone-classic"
                  width="24"
                  height="24"
                  style="color: #fff"
                />
                <span>07 55 35 89 24</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="space-y-2">
        <h3 class="text-white text-lg">Suivez-nous</h3>
        <div class="flex">
          <ul class="flex space-x-2">
            <li
              class="transform transition duration-500 hover:bg-blue size-10 aspect-square text-white bg-orange rounded-full"
              v-for="(social, index) in $socials"
              :key="index"
            >
              <a
                class="text-xl flex items-center justify-center w-full h-full"
                :href="social.to"
                target="_blank"
              >
                <Icon :name="social.icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { $socials } = useNuxtApp();
import { useLocationStore } from "~/stores/locationStore";
const locationStore = useLocationStore();
const location = locationStore.location;
</script>
