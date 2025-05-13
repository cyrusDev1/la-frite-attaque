<template>
  <button
    class="transform transition duration-500 hover:bg-orange border-t border-l border-4 text-white bg-red border-blue rounded-full px-5 py-2.5 block"
    href=""
  >
    {{ text }}
  </button>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
