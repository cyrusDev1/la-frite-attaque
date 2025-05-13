<template>
  <div class="bg-light-black relative overflow-hidden">
    <div class="space-y-20 py-16 md:py-28 px-5 md:px-28">
      <div
        v-for="(item, index) in presentations"
        :key="index"
        :class="(index + 1) % 2 == 0 ? 'lg:flex flex-row-reverse' : 'lg:flex'"
        class="justify-between items-center"
      >
        <div class="lg:w-1/2 space-y-8">
          <h2 class="text-2xl md:text-3xl text-white font-bold">
            {{ item.title }}
          </h2>
          <p class="font-poppins lg:text-lg leading-loose font-thin text-white">
            {{ item.description }}
          </p>
        </div>
        <div
          class="lg:w-1/2 flex relative"
          :class="(index + 1) % 2 == 0 ? 'justify-start' : 'justify-end'"
        >
          <img
            class="absolute z-20"
            :class="item.absoluteImagePosition"
            :src="item.absoluteImage"
            alt=""
          />
          <img
            :class="(index + 1) % 2 == 0 ? '-rotate-12' : 'rotate-12'"
            class="w-[480px] shadow-[0_8px_0px_#000000] border-10 rounded-t-full block border-black transform"
            :src="item.image"
            alt=""
          />
        </div>
      </div>
    </div>
    <img
      class="absolute z-50 -bottom-3"
      src="~/assets/images/svg/lightFillBottom.svg"
      alt=""
    />
  </div>
</template>
<script setup>
const props = defineProps({
  presentations: {
    type: Array,
    required: true,
  },
});
</script>
