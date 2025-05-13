<template>
  <span
    class="px-3 py-2 inline-block transform -rotate-4 rounded-full w-fit font-permanent uppercase font-bold text-white"
  >
    {{ text }}
  </span>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
