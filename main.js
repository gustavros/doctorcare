import scrollOnWindow from "./modules/scrollOnWindow.js";
import openAndCloseMenu from "./modules/openAndCloseMenu.js";
import closeMenuOnClick from "./modules/closeMenuOnClick.js";
import showButtonToTop from "./modules/showButtonToTop.js";

scrollOnWindow();
openAndCloseMenu();
closeMenuOnClick();
showButtonToTop();

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #home .stats .stat,
  #services .card,
  #about,
  #about header,
  #about p,
  #contact header,
  #contact ul,
  #contact ul li,
  #contact a,
  #contact img`);
