<template>
  <img
    class="shadow-[0_3px_0px_#000000] border-5 md:border-10 rounded-t-full block border-black transform"
    :src="image"
    alt=""
  />
</template>

<script setup>
defineProps({
  image: String,
});
</script>
