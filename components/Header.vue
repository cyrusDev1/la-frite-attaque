<template>
  <div class="px-28 py-2 bg-beige flex justify-between items-center">
    <div>
      <nuxt-link to="/">
        <img class="w-3/5 object-cover" src="~/assets/images/logo.svg" alt="" />
      </nuxt-link>
    </div>
    <div class="">
      <ul class="flex space-x-6">
        <li v-for="(link, index) in menuLinks" :key="index">
          <a
            class="capitalize text-sm transition-all duration-500 hover:text-red"
            :href="link.to"
            >{{ link.text }}</a
          >
        </li>
      </ul>
    </div>
    <div class="flex items-center space-x-10">
      <div class="flex space-x-3 items-center">
        <a
          class="transform transition duration-500 hover:-rotate-3 hover:border-b-10 text-sm py-2.5 px-4 border-x-5 border-t-5 border-b-8 rounded-xl block border-black"
          href="/contact"
        >
          Contact
        </a>
        <Link
          text="Commander"
          isolateClass="w-fit text-base bg-red hover:bg-orange"
        ></Link>
      </div>
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
</template>
<script setup>
import Link from "./ui/Link.vue";
const menuLinks = ref([
  { text: "acceuil", to: "/" },
  { text: "la carte", to: "/la-carte" },
  { text: "la privatisation", to: "/la-privatisation" },
  { text: "nos emplacements", to: "/nos-emplacements" },
]);

const { $socials } = useNuxtApp();
</script>
<style scoped></style>
