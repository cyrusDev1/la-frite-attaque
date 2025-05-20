import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  if (process.client) {
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-out", // Type d'easing
      once: false, // L'animation se déclenche une seule fois
    });
  }
};
