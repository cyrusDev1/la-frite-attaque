<template>
  <div class="bg-light-black relative pb-52 lg:pb-40">
    <div class="space-y-5 py-10 px-5 lg:px-28">
      <h2
        class="text-white uppercase font-bold text-2xl lg:text-4xl text-center"
      >
        Shoot & Mange : les instants croustillants du truck
      </h2>
      <p class="text-white text-base text-center font-poppins">
        Plongez dans l’univers de Frite Attaque à travers notre galerie. Chaque
        photo capture l’ambiance unique de notre food truck, de son style à
        l’effervescence de nos événements. C’est ici que le goût rencontre
        l’instant magique.
      </p>
    </div>
    <div class="px-2 lg:px-36 h-screen relative overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-52 bg-gradient-to-b from-light-black to-transparent z-10"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-light-black to-transparent z-10"
      ></div>

      <div id="gallery-columns" class="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          class="space-y-2 transition-all duration-500"
          :class="{
            'translate-y-0 opacity-100': isVisible,
            '-translate-y-56': !isVisible,
          }"
        >
          <img class="w-full" src="~/assets/images/gallery/01.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/02.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/03.jpg" alt="" />
        </div>
        <div
          class="space-y-2 transition-all duration-500 delay-300"
          :class="{
            'translate-y-0 opacity-100': isVisible,
            '-translate-y-56': !isVisible,
          }"
        >
          <img class="w-full" src="~/assets/images/gallery/07.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/05.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/06.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/02.jpg" alt="" />
        </div>
        <div
          class="space-y-2 transition-all duration-500 delay-400"
          :class="{
            'translate-y-0 opacity-100': isVisible,
            '-translate-y-56': !isVisible,
          }"
        >
          <img class="w-full" src="~/assets/images/gallery/10.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/09.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/11.jpg" alt="" />
        </div>
      </div>
    </div>
    <div
      class="absolute w-full lg:w-2/3 flex lg:left-1/2 transform lg:-translate-x-1/2 z-40 -bottom-20"
    >
      <Wrapper />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Wrapper from "./Wrapper.vue";
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry.isIntersecting;
    },
    {
      threshold: 0.3,
    },
  );

  const target = document.querySelector("#gallery-columns");
  if (target) observer.observe(target);
});
</script>
