<template>
  <div v-if="pageData.type !== 'notfound'">
    <HeroPrivatization :generatedPage="true" :data="data"></HeroPrivatization>
    <ReasonsPrivatization :text="getText(pageData)"></ReasonsPrivatization>
    <Domains :link="link"></Domains>
    <CallToAction></CallToAction>
    <StepTitle></StepTitle>
    <BrandIntro :presentations="brandData.slice(0, 6)"></BrandIntro>
    <ContactPrivatization></ContactPrivatization>
    <BrandIntro :presentations="brandData.slice(6)"></BrandIntro>
    <Testimonials></Testimonials>
    <Socials></Socials>
    <ContactPrivatization></ContactPrivatization>
  </div>
  <div class="my-20" v-else>
    <h2>Page not found 404</h2>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { regionData } from "~/data/locationData.js";
import { brandData } from "~/data/brandData.js";

const route = useRoute();
const router = useRouter();

const segments = computed(() => {
  let s = route.params.slug;
  if (!s) return [];
  if (!Array.isArray(s)) s = [s];
  return s.filter((segment) => segment.trim() !== "");
});

const isRegion = (name) => name === regionData.name;
const isDepartement = (name) =>
  regionData.departments.some((dep) => dep.name === name);
const isCity = (name) =>
  regionData.departments.some((dep) => dep.cities.includes(name));
const isCategory = (name) => regionData.categories.includes(name);

const [first, second] = segments.value || [];

const pageData = computed(() => {
  if (segments.value.length === 1) {
    if (isRegion(first)) return { type: "region", value: first };
    if (isDepartement(first)) return { type: "departement", value: first };
    if (isCity(first)) return { type: "city", value: first };
    if (isCategory(first)) return { type: "category", value: first };
  }

  if (segments.value.length === 2) {
    const [zone, cat] = segments.value;
    if (isCategory(cat)) {
      if (isRegion(zone)) return { type: "region+category", zone, cat };
      if (isDepartement(zone))
        return { type: "departement+category", zone, cat };
      if (isCity(zone)) return { type: "city+category", zone, cat };
    }
  }

  return { type: "notfound" };
});

useHead(() => {
  switch (pageData.value.type) {
    case "region":
      return {
        title: `La Frite Attaque – Région ${pageData.value.value}`,
        meta: [
          {
            name: "description",
            content: `Découvrez La Frite Attaque en région ${pageData.value.value}`,
          },
        ],
        link: [
          { rel: "icon", type: "image/png", href: "/favicon.png" }
        ],
      };

    case "departement":
      return {
        title: `La Frite Attaque – Département ${pageData.value.value}`,
        meta: [
          {
            name: "description",
            content: `Découvrez La Frite Attaque dans le département ${pageData.value.value}`,
          },
        ],
        link: [
          { rel: "icon", type: "image/png", href: "/favicon.png" }
        ],
      };

    case "city":
      return {
        title: `La Frite Attaque – Ville ${pageData.value.value}`,
        meta: [
          {
            name: "description",
            content: `Découvrez La Frite Attaque dans la ville ${pageData.value.value}`,
          },
        ],
        link: [
          { rel: "icon", type: "image/png", href: "/favicon.png" }
        ],
      };

    case "category":
      return {
        title: `La Frite Attaque – Catégorie ${pageData.value.value}`,
        meta: [
          {
            name: "description",
            content: `Découvrez La Frite Attaque pour la catégorie ${pageData.value.value}`,
          },
        ],
        link: [
          { rel: "icon", type: "image/png", href: "/favicon.png" }
        ],
      };

    case "region+category":
      return {
        title: `La Frite Attaque – Région ${pageData.value.zone} & catégorie ${pageData.value.cat}`,
        meta: [
          {
            name: "description",
            content: `Découvrez La Frite Attaque en ${pageData.value.zone} pour la catégorie ${pageData.value.cat}`,
          },
        ],
        link: [
          { rel: "icon", type: "image/png", href: "/favicon.png" }
        ],
      };

    case "departement+category":
      return {
        title: `La Frite Attaque – Département ${pageData.value.zone} & catégorie ${pageData.value.cat}`,
        meta: [
          {
            name: "description",
            content: `Découvrez La Frite Attaque dans le département ${pageData.value.zone} pour la catégorie ${pageData.value.cat}`,
          },
        ],
        link: [
          { rel: "icon", type: "image/png", href: "/favicon.png" }
        ],
      };

    case "city+category":
      return {
        title: `La Frite Attaque – Ville ${pageData.value.zone} & catégorie ${pageData.value.cat}`,
        meta: [
          {
            name: "description",
            content: `Découvrez La Frite Attaque dans la ville ${pageData.value.zone} pour la catégorie ${pageData.value.cat}`,
          },
        ],
        link: [
          { rel: "icon", type: "image/png", href: "/favicon.png" }
        ],
      };

    default:
      return {
        title: "Page non trouvée – La Frite Attaque",
        meta: [{ name: "description", content: "Page non trouvée" }],
        link: [
          { rel: "icon", type: "image/png", href: "/favicon.png" }
        ],
      };
  }
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
import ReasonsPrivatization from "~/components/privatization/ReasonsPrivatization.vue";
import Socials from "~/components/privatization/Socials.vue";

import Testimonials from "~/components/Testimonials.vue";

function getText(data, isHighlight = false) {
  const highlight = (text) =>
    isHighlight
      ? `<span class="bg-clay-orange rounded-full px-4 capitalize">${text}</span>`
      : `<span class="capitalize">${text}</span>`;

  switch (data.type) {
    case "city":
      return `à ${highlight(data.value)}`;
    case "region":
      return `en ${highlight(data.value)}`;
    case "departement":
      return `dans le département de ${highlight(data.value)}`;
    case "category":
      return ` ${highlight(data.value)}`;
    case "city+category":
      return `${data.cat} à ${highlight(data.zone)}`;
    case "region+category":
      return `${data.cat} en ${highlight(data.zone)}`;
    case "departement+category":
      return `${data.cat} dans le département de ${highlight(data.zone)}`;
    default:
      return `pour votre évènement`;
  }
}

const data = ref({
  title: getText(pageData.value, true),
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
