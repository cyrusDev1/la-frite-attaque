<template>
  <div class="bg-beige-light px-5 md:px-28 py-20 space-y-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <div
        class="space-y-2 flex flex-col items-center justify-center"
        v-for="(item, index) in elements"
        :key="index"
      >
        <div
          :class="[0, 2, 4].includes(index) ? 'bg-orange' : 'bg-red'"
          class="w-fit flex justify-center items-center p-4 border-t-2 border-l-2 border-4 text-white border-blue rounded-full"
        >
          <Icon :name="item.icon" class="text-4xl text-white" />
        </div>
        <h3 class="text-center">{{ item.name }}</h3>
      </div>
    </div>
  </div>
</template>
<script setup>
const elements = ref([
  {
    name: `Nos buns sont maison ou de
boulanger pour nos plus gros
événements`,
    icon: "pepicons-pencil:hamburger",
  },
  {
    name: `Notre viande est fraîche et
française de race Charolaise`,
    icon: "icon-park-solid:hamburger",
  },
  {
    name: `Nos fruits et légumes sont frais, de
saison`,
    icon: "healthicons:vegetables-outline",
  },
  {
    name: `Nos fromages sont sélectionnés et
coupés à la main`,
    icon: "fa-solid:cheese",
  },
  {
    name: `Bières artisanales et boissons
fraîches`,
    icon: "emojione-monotone:cocktail-glass",
  },
  {
    name: `Toutes les sauces de nos burgers
sont maison`,
    icon: "solar:cup-paper-bold",
  },
]);
</script>
