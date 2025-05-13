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
        :class="[
          item.rotateClass,
          'transition-transform duration-[1000ms] ease-in-out',
          isVisible ? 'translate-x-0' : '-translate-x-full',
        ]"
        class="transform transition-all border-4 w-[200vw] md:w-[40vw] flex-shrink-0 border-black rounded-lg px-4 py-4 flex items-center space-x-4"
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
import one from "~/assets/images/testimonials/01.png";
import two from "~/assets/images/testimonials/02.png";
import three from "~/assets/images/testimonials/03.png";

import { ref, onMounted } from "vue";

const isVisible = ref(false);
const containerRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isVisible.value = entry.isIntersecting;
      });
    },
    {
      threshold: 0.7,
    },
  );

  if (containerRef.value) {
    observer.observe(containerRef.value);
  }
});

const testimonials = ref([
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
]);
</script>
