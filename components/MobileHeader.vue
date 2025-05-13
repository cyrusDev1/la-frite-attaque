<template>
  <div class="py-2 bg-beige relative">
    <div class="px-5 top-0 flex justify-between items-center w-full">
      <nuxt-link to="/">
        <img class="w-1/2 object-cover" src="~/assets/images/logo.svg" alt="" />
      </nuxt-link>
      <div @click="isActive = true" class="cursor-pointer">
        <Icon class="text-5xl" name="iwwa:menu" />
      </div>
    </div>
    <div
      v-if="isActive"
      class="py-5 px-5 top-0 fixed z-50 bg-beige w-full h-screen"
    >
      <div class="top-0 flex justify-end items-center w-full">
        <div @click="isActive = false" class="cursor-pointer">
          <Icon class="text-5xl" name="material-symbols-light:close" />
        </div>
      </div>
      <div class="pt-10">
        <ul class="flex flex-col space-y-3">
          <li v-for="(link, index) in menuLinks" :key="index">
            <a
              class="capitalize text-base transition-all duration-500 hover:text-red"
              :href="link.to"
              >{{ link.text }}</a
            >
          </li>
        </ul>
      </div>
      <div class="mt-5 flex flex-col items-start space-y-5">
        <div>
          <ul class="flex space-x-2">
            <li
              class="transform transition duration-500 hover:bg-red size-10 aspect-square text-white bg-orange rounded-full"
              v-for="(social, index) in $socials"
              :key="index"
            >
              <a
                class="text-xl flex items-center justify-center w-full h-full"
                href=""
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
const isActive = ref(false);
import Link from "./ui/Link.vue";
const menuLinks = ref([
  { text: "acceuil", to: "/" },
  { text: "la carte", to: "/la-carte" },
  { text: "la privatisation", to: "/la-privatisation" },
  { text: "nos emplacements", to: "/nos-emplacements" },
  { text: "contact", to: "/contact" },
]);

const { $socials } = useNuxtApp();
</script>
<style scoped></style>
