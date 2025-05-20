<template>
  <div
    class="bg-[#070035] h-fit relative flex flex-col md:flex-row w-full rounded-3xl md:rounded-[50px]"
  >
    <div class="basis-1/2 flex flex-col justify-between p-4 md:p-10 space-y-6">
      <h2 class="flex flex-col font-bold uppercase text-2xl md:text-3xl">
        <span class="text-beige">Attention</span>
        <span class="text-orange"> les papilles !</span>
      </h2>
      <p class="text-beige">
        Pour vous proposer des produits de qualités, qui sont aussi beau que
        bon, on propose une gamme réduite.
      </p>
      <Link
        text="Réaliser une commande : avant 11h /18h)"
        isolateClass="w-fit text-xs text-white md:text-sm text-center border-red"
      ></Link>
      <ul class="text-beige font-poppins space-y-3">
        <li>
          Choissisez les produits qui vous font plaisir dans les produits
          ci-dessous.
        </li>
        <li>
          Envoie nous un SMS au 06.41.93.56.75 et mentionne ton prénom, ta
          commande ainsi que l'heure de retrait.
        </li>
        <li>
          Et puis, passe devant tout le monde au Food Truck pour récupérer ta
          commande (c’est mégaaa satisfaisant !)
        </li>
      </ul>
    </div>
    <div class="basis-1/2 flex justify-end p-2">
      <img
        class="w-full md:w-4/5 object-cover rounded-3xl md:rounded-[50px]"
        src="~/assets/images/gallery/15.png"
        alt=""
      />
    </div>
    <Tag
      text="Bon appétit !"
      class="absolute -rotate-8 transform left-1/2 -translate-x-1/2 -bottom-5 px-5 md:text-xl bg-clay-orange"
    ></Tag>
  </div>
</template>
<script setup>
import Link from "../ui/Link.vue";
import Tag from "../ui/Tag.vue";
</script>
