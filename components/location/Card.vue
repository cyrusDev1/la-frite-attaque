<template>
  <div
    class="bg-white w-72 px-2 lg:px-4 py-5 lg:py-5 border-t border-l border-4 border-blue rounded-xl"
  >
    <div v-if="data && !data.is_privatized && !data.is_bigevent">
      <div class="pb-3 border-b border-black space-y-4">
        <Link
          :text="data.city"
          isolateClass="w-fit text-base bg-red text-white border-blue"
          class="w-fit block"
        ></Link>
        <span class="block text-sm">{{ data.adresse }}</span>
      </div>
      <div class="py-3 border-b border-black space-y-4">
        <div>
          <h4 v-html="data.text_top_time" class="text-sm"></h4>
          <span class="text-sm font-poppins text-gray-800"
            >{{ data.time_start.slice(0, 5) }} -
            {{ data.time_end.slice(0, 5) }}</span
          >
        </div>
        <div>
          <h4 class="text-sm">Commande</h4>
          <span
            v-html="data.commande"
            class="text-sm font-poppins text-gray-800"
          ></span>
        </div>
      </div>
      <div class="py-3">
        <p class="font-poppins text-sm">{{ data.indication }}</p>
        <div class="flex justify-between items-center">
          <div class="flex space-x-3 items-center">
            <a
              v-if="data.link_deliveroo"
              class="text-red underline text-sm transform transition-all hover:scale-105"
              target="_blank"
              :href="data.link_deliveroo"
              ><img
                class="size-20"
                src="~/assets/images/svg/deliveroo.svg"
                alt=""
            /></a>
            <a
              v-if="data.link_uber"
              class="text-red underline text-sm transform transition-all hover:scale-105"
              target="_blank"
              :href="data.link_uber"
              ><img
                class="size-12"
                src="~/assets/images/svg/uber-eats.svg"
                alt=""
            /></a>
          </div>

          <a class="text-red underline text-sm" :href="data.link_itinerary"
            >Itineraire -></a
          >
        </div>
      </div>
    </div>
    <div v-if="!data">
      <div class="pb-3 border-b border-black space-y-4">
        <Link
          text="Disponible"
          to="/la-privatisation"
          isolateClass="w-fit text-base text-white border-blue hover:bg-orange bg-[#34A853]"
          class="w-fit block"
        ></Link>
        <span class="block text-sm">Mobile en Rhône Alpe</span>
      </div>
      <div class="space-y-4 mt-3">
        <p class="text-xs">
          Super ! Ce créneau est disponible pour qu’on puisse se rencontrer !
        </p>
        <p class="text-xs">
          Envie de nous privatiser ou nous proposer un évènement.
          <br />Envoyez-nous un message.
        </p>
      </div>
    </div>
    <div v-if="data && (data.is_privatized || data.is_bigevent)">
      {{}}
      <Link
        :text="`Privatisé le ${formatDateFR(data.date)}`"
        isolateClass="w-fit text-base bg-red text-white border-blue mb-2"
        class="w-fit block"
      ></Link>
      <img
        class="w-full object-cover"
        src="~/assets/images/foodtruck-privatise.png"
        alt="food truck privatisé"
      />
    </div>
  </div>
</template>
<script setup>
import Link from "~/components/ui/Link.vue";
const props = defineProps({
  data: Object,
});
function formatDateFR(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year}`;
}
</script>
