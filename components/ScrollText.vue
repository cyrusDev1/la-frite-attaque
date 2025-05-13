<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  fill: Boolean,
});
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
</script>

<template>
  <div ref="containerRef" class="overflow-hidden relative py-10 bg-beige">
    <img
      v-if="fill"
      class="absolute z-50 -top-3"
      src="~/assets/images/svg/beigeBottomTopBlack.svg"
      alt=""
    />
    <span
      :class="[
        'font-permanent text-4xl md:text-8xl whitespace-nowrap inline-block transition-transform duration-[1000ms] ease-in-out',
        isVisible ? 'translate-x-0' : '-translate-x-1/2',
      ]"
    >
      🍔 food truck 🍟 truck gourmand
    </span>
  </div>
</template>
