<template>
  <div class="bg-light-black pt-16 pb-16 px-5 md:px-28 relative">
    <div class="space-y-4 relative">
      <Tag
        text="ou grand"
        class="absolute rotate-8 left-0 -top-10 text-sm bg-green"
      ></Tag>
      <Tag
        text="100% validé"
        class="absolute right-0 -top-12 text-sm bg-clay-orange"
      ></Tag>
      <h3 class="text-white text-xl md:text-2xl">
        Petit comité ou grande assemblée ? Nos burgers sont toujours prêts à
        être dégustés !
      </h3>
      <p class="text-white text-sm md:text-base font-poppins">
        Que vous soyez une petite troupe affamée ou une véritable armée de
        gourmands, L'Instant est prêt à relever le défi. À partir de 30
        convives, notre food truck se privatise pour faire de votre déjeuner ou
        dîner une expérience inoubliable. Que ce soit pour un petit
        rassemblement ou un grand événement dans la Marne, l'Aisne ou à Reims,
        L'Instant offre des burgers succulents pour tous vos invités. Parce
        qu'un bon burger, c'est bien, mais le partager avec ses proches, c'est
        encore mieux !
      </p>
    </div>
    <div class="mt-5">
      <Wrapper />
    </div>
  </div>
</template>
<script setup>
import Tag from "../ui/Tag.vue";
import Wrapper from "../Wrapper.vue";
</script>
