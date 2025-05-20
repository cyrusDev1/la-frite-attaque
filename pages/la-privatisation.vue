<template>
  <div>
    <HeroPrivatization :data="data"></HeroPrivatization>
    <Domains :link="link"></Domains>
    <CallToAction></CallToAction>
    <StepTitle></StepTitle>
    <BrandIntro :presentations="brandData.slice(0, 6)"></BrandIntro>
    <ContactPrivatization></ContactPrivatization>
    <BrandIntro :presentations="brandData.slice(6)"></BrandIntro>
    <Testimonials></Testimonials>
    <ContactPrivatization></ContactPrivatization>
  </div>
</template>
<script setup>
useHead({
  title: "Privatisation – La Frite Attaque | Food Truck pour vos événements",
  meta: [
    {
      name: "description",
      content:
        "Privatisez le food truck La Frite Attaque pour vos événements privés ou professionnels en Rhône-Alpes. Burgers et frites maisons au rendez-vous !",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});

const link = ref({
  text: "Découvrir la carte traiteur",
  to: "/la-carte",
});
import HeroPrivatization from "~/components/privatization/HeroPrivatization.vue";
import Domains from "~/components/Domains.vue";
import CallToAction from "~/components/privatization/CallToAction.vue";
import StepTitle from "~/components/privatization/StepTitle.vue";
import BrandIntro from "~/components/BrandIntro.vue";
import ContactPrivatization from "~/components/privatization/ContactPrivatization.vue";

import Testimonials from "~/components/Testimonials.vue";
import { brandData } from "~/data/brandData.js";

const data = ref({
  title: `Découvrons la carte traiteur Lyon, Roanne...`,
  description: `Faites de votre événement en Auvergne Rhônes Alpes une
   célébration gourmande avec la privatisation de votre food truck de
    burgers, crêpes et Bubble Waffle. Découvrez une cuisine de rue
     créative et savoureuse, parfaite pour impressionner vos invités.`,
  link: {
    text: "Découvrir la carte traiteur",
    to: "/la-carte",
  },
});
</script>
