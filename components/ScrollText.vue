<template>
  <div ref="containerRef" class="overflow-hidden relative py-10 bg-beige">
    <img
      v-if="fill"
      class="absolute z-50 -top-3"
      src="~/assets/images/svg/beigeBottomTopBlack.svg"
      alt=""
    />
    <span
      ref="textRef"
      :class="[
        'font-permanent text-4xl md:text-8xl whitespace-nowrap inline-block transition-transform duration-[1000ms] ease-in-out',
      ]"
    >
      🍔 food truck 🍟 truck gourmand
    </span>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted } from "vue";
const props = defineProps({
  fill: Boolean,
});
const containerRef = ref(null);
const textRef = ref(null);

// Register plugin
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.set(textRef.value, {
    x: 0,
  });

  gsap.to(textRef.value, {
    scrollTrigger: {
      trigger: containerRef.value,
      start: "top bottom",
      scrub: true,
    },
    x: -600,
    ease: "none",
  });
});
</script>
