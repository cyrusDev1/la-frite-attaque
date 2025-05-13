<template>
  <div>
    <span
      class="w-fit border-t border-l border-4 text-azure text-sm text-center border-red rounded-full px-5 py-2.5 block"
      href=""
    >
      {{ text }}
    </span>
  </div>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
