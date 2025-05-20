<template>
  <a
    class="transform transition duration-500 border-t border-l border-4 text-xs rounded-full px-5 py-2.5 block"
    :class="isolateClass"
    :href="to"
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
  to: {
    type: String,
    required: false,
  },
  isolateClass: {
    type: String,
  },
});
</script>
