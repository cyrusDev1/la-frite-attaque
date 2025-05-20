<template>
  <div>
    <HeroContact></HeroContact>
    <div class="pt-20 bg-beige-light">
      <Contact></Contact>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "Contact – La Frite Attaque | Une question, une privatisation ?",
  meta: [
    {
      name: "description",
      content:
        "Contactez La Frite Attaque pour toute demande : privatisation, informations, horaires, emplacements… On vous répond avec plaisir !",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});

import Contact from "~/components/Contact.vue";
import HeroContact from "~/components/contact/HeroContact.vue";
</script>
