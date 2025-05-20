<template>
  <div
    ref="gallery"
    class="pt-10 flex justify-center relative h-[300px] md:h-[600px] bg-beige overflow-hidden"
  >
    <div
      v-for="(img, index) in images"
      :key="index"
      :ref="(el) => (imageRefs[index] = el)"
      class="absolute left-1/2 -translate-x-1/2 w-[250px] md:w-[480px] shadow-[0_8px_0px_#000000] border-10 rounded-xl border-black overflow-hidden"
    >
      <img :src="img" class="w-full h-auto block" />
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import one from "~/assets/images/gallery/01.jpg";
import two from "~/assets/images/gallery/02.jpg";
import three from "~/assets/images/gallery/03.jpeg";
import four from "~/assets/images/gallery/03.jpg";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const images = [one, two, three, four];

const gallery = ref(null);
const imageRefs = [];

onMounted(() => {
  const isMobile = window.innerWidth < 640;

  const offsetX = isMobile ? 200 : 470;
  const offsetY = isMobile ? 10 : 20;

  gsap.set(imageRefs, {
    rotate: 0,
    zIndex: (i) => 10 - i,
  });

  gsap.to(imageRefs, {
    scrollTrigger: {
      trigger: gallery.value,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    top: (i) => `${i * offsetY}px`,
    left: (i) => `${i * offsetX}px`,
    rotate: (i) => [-12, 7, 11, -19][i],
    stagger: 0.1,
    ease: "power2.out",
  });
});
</script>
