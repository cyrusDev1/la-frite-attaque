<template>
  <div class="bg-beige pt-16">
    <div class="space-y-4 px-5 lg:px-28">
      <h2 class="text-outline text-white text-2xl lg:text-4xl text-center">
        Avis de nos Clients
      </h2>
      <p class="font-poppins text-center leading-5 lg:w-1/2 mx-auto">
        Paroles de gourmets : découvrez ce que nos clients pensent de leur
        voyage culinaire dans votre food truck “ La Frite Attaque “
      </p>
    </div>

    <div
      ref="containerRef"
      class="flex flex-nowrap space-x-4 overflow-scroll lg:overflow-hidden w-full pt-20 pb-36 px-5"
    >
      <div
        v-for="(item, index) in testimonials"
        :key="index"
        :ref="(el) => (testimonialRefs[index] = el)"
        :class="[
          item.rotateClass,
          'transition-transform duration-[1000ms] ease-in-out',
          'transform border-4 w-[200vw] md:w-[40vw] flex-shrink-0 border-black rounded-lg px-4 py-4 flex items-center space-x-4',
        ]"
      >
        <img class="rounded-full w-20" :src="item.pic" alt="" />
        <div>
          <div>
            <Icon
              class="text-orange text-base"
              v-for="(star, starIndex) in item.starCount"
              :key="starIndex"
              name="weui:star-filled"
            />
          </div>
          <p class="font-poppins text-sm">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import one from "~/assets/images/testimonials/01.png";
import two from "~/assets/images/testimonials/02.png";
import three from "~/assets/images/testimonials/03.png";

gsap.registerPlugin(ScrollTrigger);

const containerRef = ref(null);
const testimonialRefs = []; // tableau de refs dynamiques (pas ref() ici !)

const testimonials = [
  {
    text: "Si j'avais su qu'un burger pouvait être aussi bon, j'aurais privatisé. L'Instant pour mon mariage... et mon divorce !",
    starCount: 5,
    pic: one,
    rotateClass: "-rotate-4",
  },
  {
    text: "J'ai organisé une réunion d'affaires avec L'Instant. Résultat ? Tout le monde se souvient du burger, mais personne de la réunion !",
    starCount: 5,
    pic: two,
    rotateClass: "rotate-7",
  },
  {
    text: "J'ai fait appel à L'Instant pour l'anniversaire de mon fils. Les enfants étaient ravis... et les parents encore plus ! Qui a dit que les burgers étaient réservés aux plus jeunes ?",
    starCount: 5,
    pic: three,
    rotateClass: "-rotate-8",
  },
];

onMounted(async () => {
  await nextTick();
  await new Promise((resolve) => setTimeout(resolve, 100)); // petite pause de 50ms
  testimonialRefs.forEach((el) => {
    if (!el) return;
    gsap.fromTo(
      el,
      { x: 0 },
      {
        x: -400,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        duration: 2,
        ease: "none",
      },
    );
  });
});
</script>
