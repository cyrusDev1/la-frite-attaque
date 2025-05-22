<template>
  <div
    :class="generatedPage ? 'bg-light-black' : 'bg bg-[#2a2929]'"
    class="overflow-hidden relative"
  >
    <BorderedImage
      :image="first"
      class="w-[120px] md:w-[250px] transform -rotate-30 absolute z-10 top-0 -left-16"
    ></BorderedImage>
    <BorderedImage
      :image="second"
      class="w-[120px] md:w-[250px] transform -rotate-30 absolute z-10 -right-16 bottom-12"
    ></BorderedImage>
    <BorderedImage
      :image="third"
      class="w-[120px] md:w-[250px] transform rotate-30 absolute z-10 top-0 -right-16"
    ></BorderedImage>
    <BorderedImage
      :image="four"
      class="w-[120px] md:w-[250px] transform rotate-30 absolute z-10 -left-16 bottom-12"
    ></BorderedImage>
    <div class="md:w-1/2 mx-auto relative z-20 py-20 space-y-12">
      <div class="space-y-4">
        <h2
          v-if="!generatedPage"
          class="text-2xl md:text-3xl text-white font-bold text-center"
        >
          {{ data.title }}
        </h2>
        <h2
          v-else
          class="text-xl md:text-3xl text-white font-bold text-center leading-loose font-poppins"
        >
          <span class="bg-clay-orange rounded-full px-4">Privatiser</span> un
          <span class="bg-clay-orange rounded-full px-4">food truck</span> pour
          un évènement
          <span class="text-nowrap leading-loose" v-html="data.title"></span>
        </h2>
        <span class="text-white block font-poppins text-center"
          >soyez le boss de votre event !</span
        >
        <p class="text-white block font-poppins text-center">
          {{ data.description }}
        </p>
        <Scores></Scores>
      </div>
      <div class="space-y-10">
        <div class="flex justify-center">
          <a
            :href="data.link.to"
            class="bg-white text-center max-w-80 hover:-rotate-6 block transition-all transform px-3 py-2 rounded text-sm border-2"
          >
            {{ data.link.text }}
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
const props = defineProps({
  generatedPage: Boolean,
  data: Object,
});
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
