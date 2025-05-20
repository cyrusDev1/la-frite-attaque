<template>
  <div class="bg-beige pt-20">
    <div>
      <h2 class="text-outline text-center text-white text-xl md:text-3xl">
        Voici notre programme du: <br />
        {{ currentDate }} au {{ endDate }} :
      </h2>
    </div>
    <div class="mt-20">
      <div class="overflow-x-auto">
        <table class="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th class="py-4 px-6 text-center text-3xl"></th>
              <th
                class="py-4 px-6 text-center text-outline text-white text-3xl"
              >
                Matin
              </th>
              <th
                class="py-4 px-6 text-center text-outline text-white text-3xl"
              >
                Midi
              </th>
              <th
                class="py-4 px-6 text-center text-outline text-white text-3xl"
              >
                Après-Midi
              </th>
              <th
                class="py-4 px-6 text-center text-outline text-white text-3xl"
              >
                Soir
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in weekDates" :key="index" class="">
              <td class="py-4 px-2 font-RumRaisin align-top">
                <h2 class="font-bold text-2xl">{{ item.day }}</h2>
                <p class="text-xl">{{ item.frenchDate }}</p>
              </td>

              <!-- Matin -->
              <td class="py-4 px-2 align-top">
                <div class="h-full flex">
                  <Card
                    class="flex-1 h-full"
                    :data="filterPlanning(item.date, 'matin')"
                  />
                </div>
              </td>

              <!-- Midi -->
              <td class="py-4 px-2 align-top">
                <div class="h-full flex">
                  <Card
                    class="flex-1 h-full"
                    :data="filterPlanning(item.date, 'midi')"
                  />
                </div>
              </td>

              <!-- Après-midi -->
              <td class="py-4 px-2 align-top">
                <div class="h-full flex">
                  <Card
                    class="flex-1 h-full"
                    :data="filterPlanning(item.date, 'apres-midi')"
                  />
                </div>
              </td>

              <!-- Soir -->
              <td class="py-4 px-2 align-top">
                <div class="h-full flex">
                  <Card
                    class="flex-1 h-full"
                    :data="filterPlanning(item.date, 'soir')"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Card from "./Card.vue";
const currentDate = ref("");
const endDate = ref("");

// Fonction pour formater la date (ex: 18 mai 2025)
function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("fr-FR", options);
}

// On calcule la date d'aujourd'hui et celle dans 7 jours
const today = new Date();
const sevenDaysLater = new Date(today);
sevenDaysLater.setDate(today.getDate() + 7);

// On formate et affecte les valeurs
currentDate.value = formatDate(today);
endDate.value = formatDate(sevenDaysLater);

// Fonction pour obtenir le jour de la semaine
function getDayName(date) {
  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  return days[date.getDay()];
}

// Créer une référence pour les dates de la semaine
const weekDates = ref([]);

// Générer les 7 jours à partir d'aujourd'hui
for (let i = 0; i <= 7; i++) {
  const date = new Date(today);
  date.setDate(today.getDate() + i);

  weekDates.value.push({
    day: getDayName(date),
    date: apiformatDate(date),
    frenchDate: formatDate(date),
  });
}

function apiformatDate(date) {
  const year = date.getFullYear(); // Récupère l'année (ex : 2025)
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Récupère le mois (ex : 5 -> "05")
  const day = String(date.getDate()).padStart(2, "0"); // Récupère le jour (ex : 8 -> "08")

  // Formater la date au format YYYY-MM-DD
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

import { get } from "~/utils/api";

const planning = ref([]);

onMounted(async () => {
  try {
    planning.value = await get(
      `planning?startDate=${apiformatDate(today)}&endDate=${apiformatDate(sevenDaysLater)}`,
    );
  } catch (e) {
    console.error(e);
  }
});

function filterPlanning(date, moment) {
  // On filtre les données en fonction de la date et du moment
  return planning.value.filter(
    (item) => item.date === date && item.moment === moment,
  )[0];
}
</script>
