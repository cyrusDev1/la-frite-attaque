<template>
  <div class="bg-beige-light relative">
    <div
      class="px-5 lg:px-28 pt-20 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center"
    >
      <div class="space-y-5">
        <Overlay text="Contact"></Overlay>
        <h2 class="text-outline text-white text-2xl lg:text-4xl">
          Nos Coordonnées
        </h2>
        <p class="font-poppins">
          Vous avez des questions ? Vous souhaitez obtenir plus d’informations ?
          Vous souhaitez recevoir un devis ? N’hésitez pas à nous contacter !
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-black py-6"
        >
          <div>
            <div class="flex items-center space-x-2">
              <span
                class="rounded-full aspect-square size-8 flex justify-center items-center bg-red"
              >
                <Icon
                  name="mdi:telephone"
                  width="24"
                  height="24"
                  style="color: #fff"
                />
              </span>
              <span>Bureau</span>
            </div>
            <div class="pl-10">
              <p class="font-poppins text-sm text-gray-800">07 81 54 30 61</p>
              <p class="font-poppins text-sm text-gray-800">
                ou 04 82 79 51 92
              </p>
            </div>
          </div>
          <div>
            <div class="flex items-center space-x-2">
              <span
                class="rounded-full aspect-square size-8 flex justify-center items-center bg-red"
              >
                <Icon
                  name="mdi:email-outline"
                  width="24"
                  height="24"
                  style="color: #fff"
                />
              </span>
              <span>Email</span>
            </div>
            <div class="pl-10">
              <p class="font-poppins text-sm text-gray-800">
                contact@lafriteattaque.fr
              </p>
            </div>
          </div>
          <div>
            <div class="flex items-center space-x-2">
              <span
                class="rounded-full aspect-square size-8 flex justify-center items-center bg-red"
              >
                <Icon
                  name="ph:map-pin-fill"
                  width="24"
                  height="24"
                  style="color: #fff"
                />
              </span>
              <span>Adresse</span>
            </div>
            <div class="pl-10">
              <p
                v-if="location?.adresse"
                class="font-poppins text-sm text-gray-800"
              >
                {{ location.adresse }}
              </p>
            </div>
          </div>
        </div>
        <div class="hidden md:flex justify-between">
          <ul class="flex space-x-2 items-center">
            <span>Suivez-nous: </span>
            <li
              class="transform transition duration-500 hover:bg-red size-10 aspect-square text-white bg-orange rounded-full"
              v-for="(social, index) in $socials"
              :key="index"
            >
              <a
                class="text-xl flex items-center justify-center w-full h-full"
                :href="social.to"
                target="_blank"
              >
                <Icon :name="social.icon" />
              </a>
            </li>
          </ul>
          <Link
            text="Par ici la demande de devis !"
            isolateClass="w-fit text-white border-blue text-base bg-red"
            class="w-fit"
          ></Link>
        </div>
      </div>
      <div
        class="rounded-2xl relative z-30 transform border-t border-l border-5 border-blue px-2 sm:px-5 py-6"
      >
        <div
          :class="isSubmit ? 'block' : 'hidden'"
          class="absolute z-40 w-full bg-white bg-opacity-50 rounded-2xl inset-0 h-full"
        ></div>
        <div class="py-5">
          <form @submit.prevent="submitForm" class="font-poppins" action="">
            <div class="space-y-3">
              <div
                class="md:flex justify-center space-y-3 md:space-x-3 md:space-y-0"
              >
                <input
                  type="text"
                  placeholder="Nom"
                  v-model="form.nom"
                  class="py-3 px-5 w-full lg:w-full rounded-full border border-blue outline-none"
                />
                <input
                  type="text"
                  placeholder="Prénom"
                  v-model="form.prenom"
                  class="py-3 px-5 w-full lg:w-full rounded-full border border-blue outline-none"
                />
              </div>
              <div
                class="md:flex justify-center space-y-3 md:space-x-3 md:space-y-0"
              >
                <input
                  type="email"
                  v-model="form.email"
                  placeholder="E-mail"
                  class="py-3 px-5 w-full lg:w-full rounded-full border border-blue outline-none"
                />
                <input
                  type="tel"
                  v-model="form.telephone"
                  placeholder="Téléphone"
                  class="py-3 px-5 w-full lg:w-full rounded-full border border-blue outline-none"
                />
              </div>
              <div>
                <select
                  v-model="form.sujet"
                  class="w-full py-3 px-5 rounded-full border border-blue bg-white outline-none"
                  name=""
                  id=""
                >
                  <option value="Plus d'informations">
                    Plus d'informations
                  </option>
                  <option value="Privatisation">Privatisation</option>
                  <option value="Demande de devis">Demande de devis</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div>
                <textarea
                  v-model="form.message"
                  placeholder="Donnez-nous un peu plus de détails sur votre demande, nous reviendrons rapidement vers vous."
                  class="w-full h-48 py-3 px-5 rounded-2xl border border-blue bg-white outline-none"
                  name=""
                  id=""
                ></textarea>
              </div>
              <div>
                <Button text="Envoyer" class="w-full font-bold"></Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Overlay from "./ui/Overlay.vue";
import Link from "./ui/Link.vue";
import Button from "./ui/Button.vue";
import { useLocationStore } from "~/stores/locationStore";
const locationStore = useLocationStore();
const { $toast } = useNuxtApp();
const location = locationStore.location;
const { $socials } = useNuxtApp();
import { post } from "~/utils/api";

const form = ref({
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  sujet: "Plus d'informations",
  message: "",
});
const isSubmit = ref(false);
const submitForm = async () => {
  const data = form.value;
  isSubmit.value = true;
  if (
    data.nom &&
    data.prenom &&
    data.email &&
    data.telephone &&
    data.sujet &&
    data.message
  ) {
    try {
      await post("contact", data);
      Object.keys(form.value).forEach((key) => {
        if (key !== "sujet") {
          form.value[key] = "";
        } else {
          form.value[key] = "Plus d'informations";
        }
      });
      $toast.success("Message envoyé avec succès !");
      isSubmit.value = false;
    } catch (e) {
      console.error(e);
      $toast.error("Une erreur s'est produite ! Veuillez réessayer");
      isSubmit.value = false;
    }
  } else {
    $toast.error("Veuillez bien remplir tous les champs !");
    isSubmit.value = false;
  }
};
</script>
<style></style>
