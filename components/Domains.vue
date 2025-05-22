<template>
  <div class="bg-beige px-5 md:px-28 py-20 space-y-10 relative">
    <div class="">
      <div
        class="absolute left-2 md:left-28 -top-10 z-40 bg-sunbeam py-6 w-fit text-center rounded-2xl p-3 border-t border-l border-4 border-red"
      >
        <h2 class="text-azure text-xl lg:text-3xl font-bold">70 +</h2>
        <span class="text-azure text-xs leading-3">Évènements par an</span>
      </div>
      <div
        class="absolute hidden sm:block right-2 md:right-28 -top-10 z-40 bg-sunbeam w-fit text-center rounded-2xl p-3 border-t border-l border-4 border-red"
      >
        <h2 class="text-azure text-xl lg:text-3xl font-bold">85 %</h2>
        <span class="text-azure text-xs leading-3"
          >de nos clients réservent à nouveau <br />
          Preuve que le goût ça marque !
        </span>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
      <div
        class="space-y-2 flex flex-col items-center justify-center"
        v-for="(item, index) in domains"
        :key="index"
      >
        <div
          :class="[0, 2, 5, 7].includes(index) ? 'bg-orange' : 'bg-red'"
          class="w-fit flex justify-center items-center p-4 border-t-2 border-l-2 border-4 text-white border-blue rounded-full"
        >
          <Icon :name="item.icon" class="text-3xl text-white" />
        </div>
        <h3 class="capitalize text-center">{{ item.name }}</h3>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <span class="border-t w-full h-0.5 border-gray-500"></span>
      <a
        href="/la-privatisation"
        class="bg-white text-xs hover:-rotate-2 text-nowrap text-center w-fit block transition-all transform px-3 py-3 rounded md:text-sm border-t border-l border-4 border-black"
      >
        {{ link.text }}
      </a>
      <span class="border-t w-full h-0.5 border-gray-500"></span>
    </div>
    <div
      class="md:flex justify-center md:space-x-10 space-y-6 md:space-y-0 md:px-10"
    >
      <div class="md:w-1/2 space-y-4">
        <h3>Prestation 100% personnalisée</h3>
        <p class="font-poppins">
          Pour chaque événement, nos services sont adaptés en fonction de vos
          besoins. Formules, recettes, horaires de services et tarifs sont
          modulables. Contactez-nous pour en savoir plus et faire de votre
          événement un moment unique !
        </p>
        <Link
          text="Contactez-nous"
          to="/contact"
          isolateClass="w-fit text-base  border-blue text-white bg-red hover:bg-orange"
        ></Link>
      </div>
      <div class="md:w-1/2 space-y-4">
        <h3>Conditions de Réservation</h3>
        <ul class="font-poppins">
          <li>→ A partir de 50 repas.</li>
          <li>
            → Pensez que nous sommes sollicités et que nous n’avons que très peu
            de créneau
          </li>
          <li>→ Aimez les produits bons & généreux ! ❤️</li>
        </ul>
        <Link
          text="Réservez le Foodtruck"
          isolateClass="w-fit text-base border-blue text-white bg-orange hover:bg-red"
          to="/la-privatisation"
        ></Link>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  link: Object,
});
import Link from "./ui/Link.vue";

const domains = ref([
  { name: "festival", icon: "mingcute:music-line" },
  { name: "Évènement Sportif", icon: "streamline:ball" },
  { name: "mariage", icon: "hugeicons:wedding" },
  { name: "soirée", icon: "emojione-monotone:clinking-glasses" },
  { name: "séminaire", icon: "typcn:mortar-board" },
  { name: "afterwork", icon: "emojione-monotone:cocktail-glass" },
  { name: "salon", icon: "uit:bag" },
  { name: "brunch", icon: "fluent-mdl2:coffee-script" },
]);
</script>
