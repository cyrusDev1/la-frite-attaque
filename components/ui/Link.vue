<template>
  <a
    :class="isolateClass"
    class="transform transition duration-500 border-t border-l border-4 text-white text-xs border-blue rounded-full px-5 py-2.5 block"
    href=""
  >
    {{ text }}
  </a>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  isolateClass: {
    type: String,
  },
});
</script>
