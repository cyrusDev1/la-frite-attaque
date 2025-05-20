<template>
  <div>
    <Hero></Hero>
    <Quote></Quote>
    <Gallery></Gallery>
    <Products></Products>
    <div class="relative">
      <Link
        to="/nos-emplacements"
        text="Ça donne faim ! Où puis-je vous trouver ?"
        isolateClass="text-white border-blue"
        class="text-nowrap bg-red w-fit absolute transform left-1/2 -translate-x-1/2 -top-3 z-40 text-base"
      ></Link>
      <BrandIntro :presentations="presentations"></BrandIntro>
    </div>
    <About></About>
    <WhyChooseUs></WhyChooseUs>
    <Services></Services>
    <Location></Location>
    <Recipes></Recipes>
    <ScrollText></ScrollText>
    <Privatization></Privatization>
    <PhotoHighlights></PhotoHighlights>
    <div class="pt-16 bg-beige">
      <Testimonials></Testimonials>
    </div>
    <Blog></Blog>
    <Faq></Faq>
    <Contact></Contact>
  </div>
</template>
<script setup>
import Link from "~/components/ui/Link.vue";
useHead({
  title:
    "La Frite Attaque – Food Truck de Burgers & Frites maisons en Rhône-Alpes",
  meta: [
    { name: "description", content: "Bienvenue chez La Frite Attaque !" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});

import Hero from "~/components/Hero.vue";
import Quote from "~/components/Quote.vue";
import Gallery from "~/components/Gallery.vue";
import Products from "~/components/Products.vue";
import BrandIntro from "~/components/BrandIntro.vue";
import About from "~/components/About.vue";
import WhyChooseUs from "~/components/WhyChooseUs.vue";
import Services from "~/components/Services.vue";
import Location from "~/components/Location.vue";
import Recipes from "~/components/Recipes.vue";
import ScrollText from "~/components/ScrollText.vue";
import Privatization from "~/components/Privatization.vue";
import PhotoHighlights from "~/components/PhotoHighlights.vue";
import Testimonials from "~/components/Testimonials.vue";
import Blog from "~/components/Blog.vue";
import Faq from "~/components/Faq.vue";
import Contact from "~/components/Contact.vue";

import GlassesWhite from "~/assets/images/svg/GlassesWhite.svg";
import PopOne from "~/assets/images/svg/PopOne.svg";
import PopTwo from "~/assets/images/svg/PopTwo.svg";
import imageOne from "~/assets/images/gallery/03.jpeg";
import imageTwo from "~/assets/images/gallery/03.jpg";
import imageThree from "~/assets/images/gallery/01.jpg";

const presentations = ref([
  {
    title: "🔥 Vers le 7ème Sel !",
    description:
      "Notre spécialité ? Des burgers bien garnis, des frites maison croustillantes, des crêpes et des bubble waffles. Le tout préparé avec envie, et servi avec le smile, partout où on pose le camion.",
    absoluteImage: PopOne,
    absoluteImagePosition: "-top-4 md:top-10",
    image: imageOne,
  },
  {
    title: "🍔 Pour le meilleur et pour le cheese...",
    description:
      "Chez Frite Attaque, chaque burger est pensé pour régaler : pain moelleux, cuisson maîtrisée, garniture généreuse. Le tout chaud, fondant, croustillant… bref, une vraie déclaration d’amour au goût.",
    absoluteImage: PopTwo,
    absoluteImagePosition: "-bottom-5 right-20",
    image: imageTwo,
  },
  {
    title: "🚚 Ça grille de mille feux !",
    description:
      "Frite Attaque, c’est plus qu’un food truck : c’est une ambiance, une présence sur vos événements, et une cuisine sans chichi mais pleine d’envie. De Lyon à plus loin, on vous suit partout où ça fête.",
    absoluteImage: GlassesWhite,
    absoluteImagePosition: "-bottom-1 left-5",
    image: imageThree,
  },
]);
</script>
