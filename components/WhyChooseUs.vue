<template>
  <section class="py-12 bg-beige-light">
    <div class="mx-auto px-5 lg:px-32">
      <div class="grid gap-12 md:grid-cols-3">
        <div
          v-for="(item, index) in benefits"
          :key="index"
          class="text-gray-800 space-y-3"
        >
          <div
            class="bg-blue w-fit mx-auto p-2 flex justify-center items-center rounded-full border-t border-r-2 border-b-2 border-red"
          >
            <Icon :name="item.icon" class="text-2xl" />
          </div>
          <h3 class="text-lg font-semibold mb-2 text-center">
            {{ item.title }}
          </h3>
          <p class="text-sm font-poppins text-center text-gray-500">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    title: "Produits Frais",
    description: "Des produits frais et de saison garantis toute l'année !",
    icon: "ic:baseline-apple",
  },
  {
    title: "À votre Écoute",
    description:
      "Si vous avez des questions, nous serons ravis de vous répondre.",
    icon: "uiw:message",
  },
  {
    title: "Prix Abordables",
    description:
      "Des prix justes et abordables même pour des burgers faits maison.",
    icon: "mdi:hamburger",
  },
];
</script>
