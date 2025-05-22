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
      />
      <div
        class="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-light-black to-transparent z-10"
      />

      <div ref="gallery" class="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="gallery-col space-y-2">
          <img class="w-full" src="~/assets/images/gallery/01.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/02.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/03.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/11.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/06.jpg" alt="" />
        </div>
        <div class="gallery-col space-y-2">
          <img class="w-full" src="~/assets/images/gallery/07.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/05.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/06.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/02.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/09.jpg" alt="" />
        </div>
        <div class="gallery-col space-y-2">
          <img class="w-full" src="~/assets/images/gallery/10.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/09.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/11.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/01.jpg" alt="" />
          <img class="w-full" src="~/assets/images/gallery/02.jpg" alt="" />
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
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Wrapper from "./Wrapper.vue";
gsap.registerPlugin(ScrollTrigger);

const gallery = ref(null);

onMounted(async () => {
  await nextTick();
  await new Promise((resolve) => setTimeout(resolve, 100)); // petite pause de 50ms

  const images = gallery.value.querySelectorAll("div");

  images.forEach((imgBloc, index) => {
    gsap.fromTo(
      imgBloc,
      { y: 0 },
      {
        y: -600,
        ease: "power2.out",
        delay: index * 0.5,
        scrollTrigger: {
          trigger: imgBloc,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  });
});
</script>
