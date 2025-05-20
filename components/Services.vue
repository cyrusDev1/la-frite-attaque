<template>
  <div class="bg-beige px-5 md:px-28 py-10 md:py-20">
    <div class="flex justify-center">
      <Overlay text="DECOUVREZ NOS PRESTATIONS"></Overlay>
    </div>
    <div class="space-y-3 mt-5">
      <h2 class="text-outline text-2xl md:text-4xl text-white text-center">
        Deux ambiances : <br />
        une passion commune
      </h2>
      <p class="text-gray-900 text-center font-poppins font-bold">
        Des saveurs qui claquent pour vos convives !
      </p>
      <p class="text-gray-800 text-center font-poppins md:w-1/2 mx-auto">
        En format Foodtruck ou Traiteur, nous avons à coeur de créer des moments
        savoureux pour en mettre plein les papilles à vos invités !
      </p>
    </div>
    <div class="md:flex xl:px-20 space-y-5 md:space-y-0 mt-10 gap-5">
      <a
        data-aos="zoom-in"
        href="/la-carte"
        class="md:w-1/2 block group md:hover:w-3/5 h-[70vh] relative rounded-3xl md:rounded-[40px] transition-all duration-500"
      >
        <div
          class="bg-gradient-to-t from-black/50 to-transparent rounded-3xl md:rounded-[40px] w-full h-full absolute z-30"
        ></div>
        <img
          class="rounded-3xl md:rounded-[40px] w-full h-full object-cover"
          src="~/assets/images/foodtruck.png"
          alt=""
        />
        <div class="absolute z-40 bottom-0 p-5 md:p-10 space-y-2">
          <h3
            class="md:translate-y-20 group-hover:translate-y-0 transition-all duration-500 font-permanent text-sky-aqua font-extrabold text-4xl"
          >
            FOODTRUCK
          </h3>
          <p
            class="md:translate-y-6 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white md:text-lg font-bold font-poppins"
          >
            Ajoutez du fun et des saveurs à votre événement avec notre foodtruck
            mobile et gourmand !
          </p>
        </div>
      </a>

      <a
        data-aos="zoom-in"
        href="la-carte-privatisation"
        class="md:w-1/2 block group md:hover:w-3/5 h-[70vh] relative rounded-3xl md:rounded-[40px] transition-all duration-500"
      >
        <div
          class="bg-gradient-to-t from-black/50 to-transparent rounded-3xl md:rounded-[40px] w-full h-full absolute z-30"
        ></div>
        <img
          class="rounded-3xl md:rounded-[40px] w-full h-full object-cover"
          src="~/assets/images/traiteur.png"
          alt=""
        />
        <div class="absolute z-40 bottom-0 p-5 md:p-10 space-y-2">
          <h3
            class="md:translate-y-20 group-hover:translate-y-0 transition-all duration-500 font-permanent text-coral-rose font-extrabold text-4xl"
          >
            TRAITEUR
          </h3>
          <p
            class="md:translate-y-6 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white md:text-lg font-bold font-poppins"
          >
            Un service traiteur sur-mesure pour régaler vos invités avec des
            plats gourmands et raffinés !
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import Overlay from "./ui/Overlay.vue";
</script>
<style></style>
