<template>
  <div class="bg overflow-hidden bg-[#2a2929] relative">
    <BorderedImage
      :image="first"
      class="w-[120px] md:w-[250px] transform -rotate-30 absolute top-0 -left-16"
    ></BorderedImage>
    <BorderedImage
      :image="second"
      class="w-[120px] md:w-[250px] transform -rotate-30 absolute -right-16 bottom-0"
    ></BorderedImage>
    <BorderedImage
      :image="third"
      class="w-[120px] md:w-[250px] transform rotate-30 absolute top-0 -right-16"
    ></BorderedImage>
    <BorderedImage
      :image="four"
      class="w-[120px] md:w-[250px] transform rotate-30 absolute -left-16 bottom-0"
    ></BorderedImage>
    <div class="md:w-1/2 mx-auto py-28 space-y-12">
      <div class="space-y-4">
        <h2 class="text-4xl text-white font-bold text-center">
          Découvrons la carte traiteur Lyon, Roanne...
        </h2>
        <span class="text-white block font-poppins text-center"
          >soyez le boss de votre event !</span
        >
        <p class="text-white block font-poppins text-center">
          Faites de votre événement en Auvergne Rhônes Alpes une célébration
          gourmande avec la privatisation de votre food truck de burgers, crêpes
          et Bubble Waffle. Découvrez une cuisine de rue créative et savoureuse,
          parfaite pour impressionner vos invités.
        </p>
        <Scores></Scores>
      </div>
      <div class="space-y-10">
        <div class="flex justify-center">
          <a
            href=""
            class="bg-white text-center w-fit hover:-rotate-6 block transition-all transform px-3 py-2 rounded text-sm border-2"
          >
            Découvrir la carte traiteur
          </a>
        </div>
        <div class="space-y-4">
          <h2 class="text-2xl text-white font-bold text-center">
            Ils nous font déjà confiance
          </h2>
          <span class="text-white block font-poppins text-center"
            >Nos clients
          </span>
          <OurCustomers></OurCustomers>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import BorderedImage from "../ui/BorderedImage.vue";
import OurCustomers from "../ui/OurCustomers.vue";
import Scores from "../ui/Scores.vue";
import first from "~/assets/images/gallery/03.jpg";
import second from "~/assets/images/gallery/03.jpeg";
import third from "~/assets/images/gallery/02.jpg";
import four from "~/assets/images/gallery/01.jpg";
</script>
<style scoped>
.bg {
  background-image:
    linear-gradient(#1c1c1c00, #1c1c1c4d 79%, #1c1c1c),
    url("~/assets/images/svg/gridBlack.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: 100%;
}
</style>
