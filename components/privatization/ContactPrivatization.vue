<template>
  <div class="bg-beige-light relative">
    <div
      class="px-5 lg:px-28 pt-20 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center"
    >
      <div class="space-y-5">
        <Overlay text="Privatisation"></Overlay>
        <h2 class="text-outline text-white text-2xl lg:text-4xl">
          Nos Coordonnées
        </h2>
        <p class="font-poppins">
          Ne manquez pas l'opportunité de surprendre vos invités avec une
          expérience culinaire unique.
        </p>
        <p class="font-poppins">
          Contactez-nous via notre formulaire en ligne ou par téléphone pour
          discuter de votre projet. Avec La Frite Attaque , transformez votre
          événement à Château Thierry en un moment exceptionnel.
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
                  name="ic:baseline-email"
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
              <p class="font-poppins text-sm text-gray-800">
                24 rue des aulnes, 69760 Limonest
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
                href=""
              >
                <Icon :name="social.icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="rounded-2xl transform relative border-t border-l border-5 border-blue px-2 sm:px-5 py-6"
      >
        <div
          :class="isSubmit ? 'block' : 'hidden'"
          class="absolute z-40 w-full bg-white bg-opacity-50 rounded-2xl inset-0 h-full"
        ></div>

        <div class="py-5">
          <form @submit.prevent="submitForm" class="font-poppins" action="">
            <div class="space-y-5">
              <div class="flex space-x-5">
                <div class="flex space-x-2 items-center">
                  <input
                    v-model="form.role"
                    id="Particulier"
                    class="size-5"
                    type="radio"
                    value="Particulier"
                    name="role"
                  />
                  <label class="text-lg" for="Particulier">Particulier</label>
                </div>
                <div class="flex space-x-2 items-center">
                  <input
                    v-model="form.role"
                    id="Professionel"
                    class="size-5"
                    type="radio"
                    value="Professionel"
                    name="role"
                  />
                  <label class="text-lg" for="Professionel">Professionel</label>
                </div>
              </div>
              <div
                class="md:flex justify-center space-y-3 md:space-x-3 md:space-y-0"
              >
                <input
                  type="text"
                  placeholder="Nom"
                  v-model="form.nom"
                  class="py-3 px-5 w-full rounded-full border border-blue outline-none"
                />
                <input
                  type="text"
                  placeholder="Prénom"
                  v-model="form.prenom"
                  class="py-3 px-5 w-full rounded-full border border-blue outline-none"
                />
              </div>
              <div
                class="md:flex justify-center space-y-3 md:space-x-3 md:space-y-0"
              >
                <input
                  type="email"
                  placeholder="E-mail"
                  v-model="form.email"
                  class="py-3 px-5 w-full rounded-full border border-blue outline-none"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  v-model="form.telephone"
                  class="py-3 px-5 w-full rounded-full border border-blue outline-none"
                />
              </div>

              <div
                class="md:flex justify-center space-y-3 md:space-x-3 md:space-y-0"
              >
                <select
                  class="py-3 px-5 rounded-full w-full border border-blue bg-white outline-none"
                  name=""
                  id=""
                  v-model="form.evenement"
                >
                  <option value="">Type d'évènement</option>
                  <option value="Évènement sportif">Évènement sportif</option>
                  <option value="Évènement privé">Évènement privé</option>
                  <option value="Évènement profesionnel">
                    Évènement profesionnel
                  </option>
                  <option value="Festival">Festival</option>
                </select>
                <input
                  type="number"
                  placeholder="Nombre de personnes"
                  v-model="form.nombre"
                  min="1"
                  class="py-3 px-5 w-full rounded-full border border-blue outline-none"
                />
              </div>
              <div
                class="md:flex justify-center space-y-3 md:space-x-3 md:space-y-0"
              >
                <input
                  type="text"
                  placeholder="Lieu"
                  v-model="form.lieu"
                  class="py-3 px-5 w-full rounded-full border border-blue outline-none"
                />
                <input
                  type="date"
                  v-model="form.date"
                  class="py-3 px-5 w-full rounded-full border border-blue outline-none"
                />
              </div>
              <div>
                <textarea
                  v-model="form.message"
                  placeholder="Donnez-nous un peu plus de détails sur votre demande 
de privatisation, nous reviendrons rapidement vers vous."
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
import Overlay from "../ui/Overlay.vue";
import Button from "../ui/Button.vue";

const { $toast } = useNuxtApp();
const { $socials } = useNuxtApp();
import { post } from "~/utils/api";

const form = ref({
  role: "",
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  evenement: "",
  nombre: "",
  lieu: "",
  date: "",
  message: "",
});
const isSubmit = ref(false);
const submitForm = async () => {
  const data = form.value;
  isSubmit.value = true;
  if (
    data.role &&
    data.date &&
    data.lieu &&
    data.nombre &&
    data.nombre >= 1 &&
    data.nom &&
    data.prenom &&
    data.email &&
    data.telephone &&
    data.evenement &&
    data.message
  ) {
    try {
      await post("privatization", data);
      Object.keys(form.value).forEach((key) => {
        form.value[key] = "";
      });
      $toast.success("Demande de privatisation envoyé avec succès !");
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
