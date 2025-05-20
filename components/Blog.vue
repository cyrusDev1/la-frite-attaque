<template>
  <div class="bg-light-black relative py-20">
    <img
      class="absolute z-20 -top-2 w-full"
      src="~/assets/images/svg/lightFillTop.svg"
      alt=""
    />
    <div class="space-y-2 px-5 lg:px-44 text-center">
      <h2 class="text-white font-poppins text-3xl">On parle de nous !</h2>
      <p class="text-white font-poppins">
        Découvrez les coulisses de notre aventure culinaire, où chaque article
        est une escale gourmande sur la route des saveurs.
      </p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8 px-5 lg:px-44">
      <div
        v-for="(item, index) in 3"
        :key="index"
        class="cursor-pointer hover:-translate-y-2 transform transition-all flex flex-col justify-between rounded-2xl font-poppins bg-[#242424]"
      >
        <div class="relative">
          <img
            class="w-full h-full rounded-t-2xl"
            src="~/assets/images/products/burger-maison.jpg"
            alt=""
          />
          <div
            class="bg-indigo-blue absolute left-12 -bottom-2 transform -rotate-8 px-3 py-1 rounded-full"
          >
            <span class="text-white text-lg font-permanent"
              >#burgerchronicles</span
            >
          </div>
        </div>
        <div class="px-5 py-4 space-y-5 mt-5">
          <h4 class="text-white text-xl">
            Food truck pour repas entreprise à Reims : l'expérience culinaire
            mémorable
          </h4>
          <span class="text-gray-500 block">November 9, 2023</span>
          <p class="text-white text-base">
            Organiser un repas d'entreprise à Reims qui sorte de l'ordinaire
            peut vite devenir un casse-tête. Les food trucks représentent une
            solution idéale pour vos événements professionnels, alliant
            flexibilité et expérience culinaire originale.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
