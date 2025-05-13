<template>
  <div class="grid grid-cols-3">
    <div
      class="flex flex-col items-center text-white"
      v-for="(note, index) in notations"
      :key="index"
    >
      <span class="text-xs text-end"
        >+ de {{ note.testimonialsCount }} avis</span
      >
      <span class="text-2xl md:text-5xl text-end">{{ note.score }}/5</span>
      <span class="text-end">
        <Icon :name="note.socialIcon" class="text-sm mr-1" />
        <Icon
          class="text-orange text-xs"
          v-for="(item, index) in note.starsCount"
          :key="index"
          name="weui:star-filled"
        />
      </span>
    </div>
  </div>
</template>
<script setup>
const notations = ref([
  {
    testimonialsCount: 130,
    score: 4.9,
    socialIcon: "flat-color-icons:google",
    starsCount: 5,
  },
  {
    testimonialsCount: 65,
    score: 4.9,
    socialIcon: "logos:facebook",
    starsCount: 5,
  },
  {
    testimonialsCount: 123,
    score: 4.9,
    socialIcon: "simple-icons:trustpilot",
    starsCount: 5,
  },
]);
</script>
