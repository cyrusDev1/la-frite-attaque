import { ref } from "vue";
import { get } from "~/utils/api";

const plagesFrance = {
  matin: {
    start: "00:00",
    end: "11:59",
  },
  midi: {
    start: "12:00",
    end: "14:59",
  },
  "apres-midi": {
    start: "15:00",
    end: "16:59",
  },
  soir: {
    start: "17:00",
    end: "23:59",
  },
};

// Fonction pour obtenir le moment basé sur l'heure
function getMomentFromHour(hour, plages = plagesFrance) {
  const [h, m] = hour.split(":").map(Number);
  const totalMinutes = h * 60 + m;

  for (const moment in plages) {
    const [startH, startM] = plages[moment].start.split(":").map(Number);
    const [endH, endM] = plages[moment].end.split(":").map(Number);

    const startMin = startH * 60 + startM;
    const endMin = endH * 60 + endM;

    if (totalMinutes >= startMin && totalMinutes <= endMin) {
      return moment;
    }
  }

  return "hors plage";
}

// Fonction pour obtenir l'heure actuelle au format HH:MM
function getCurrentTimeFormatted() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

// Fonction pour formater la date au format YYYY-MM-DD
function apiformatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// Fonction principale pour récupérer la location
export async function getLocation() {
  const maxDaysToSearch = 14;
  const location = ref();
  const currentHour = getCurrentTimeFormatted();
  const currentMoment = getMomentFromHour(currentHour);
  let dayOffset = 0;
  let found = false;

  while (!found && dayOffset < maxDaysToSearch) {
    const date = new Date();
    date.setDate(date.getDate() + dayOffset);
    const dateString = apiformatDate(date);

    try {
      const plans = await get(`planning-date?date=${dateString}`);

      if (plans.length > 0) {
        let selected = plans.find((item) => item.moment === currentMoment);

        if (!selected) {
          const momentOrder = ["matin", "midi", "apres-midi", "soir"];
          const currentIndex = momentOrder.indexOf(currentMoment);

          selected = plans.find(
            (item) => momentOrder.indexOf(item.moment) > currentIndex,
          );

          if (!selected && plans.length > 0) {
            selected = plans[0];
          }
        }

        if (selected) {
          location.value = selected;
          found = true;
        }
      }

      dayOffset++;
    } catch (e) {
      console.error(`Erreur chargement planning pour ${dateString}`, e);
      break;
    }
  }

  if (!location.value) {
    console.warn("Aucune location trouvée dans les 14 prochains jours.");
  }

  return location.value;
}
