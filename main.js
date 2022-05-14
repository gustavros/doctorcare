const closeButton = document.querySelector(".close-menu");
const openButton = document.querySelector(".open-menu");
const header = document.querySelector("nav");
const buttonToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    buttonToTop.classList.add("show");
  } else {
    buttonToTop.classList.remove("show");
  }

  activeMenuAtCurrentSection(home);
  activeMenuAtCurrentSection(services);
  activeMenuAtCurrentSection(about);
  activeMenuAtCurrentSection(contact);
});

openButton.addEventListener("click", () => {
  document.body.classList.add("menu-expanded");
});

closeButton.addEventListener("click", () => {
  document.body.classList.remove("menu-expanded");
});

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

function activeMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2; // meio da tela

  const sectionTop = section.offsetTop; // topo da seção
  const sectionHeight = section.offsetHeight; // altura da seção

  const seactionTopReachOrPassedTargetLine = targetLine >= sectionTop; // se o topo da seção for maior ou igual ao meio da tela

  const sectionEndAt = sectionTop + sectionHeight; // fim da seção
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine; // se o fim da seção for menor ou igual ao meio da tela

  const sectionBoundaries =
    seactionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine; // se a seção estiver entre o meio da tela e o fim da seção

  const sectionId = section.getAttribute("id"); // pega o id da seção
  const menuElement = document.querySelector(`.menu a[href="#${sectionId}"]`); // pega o elemento do menu que tem o id da seção

  menuElement.classList.remove("active"); // remove a classe active do menu

  if (sectionBoundaries) {
    // se a seção estiver entre o meio da tela e o fim da seção
    menuElement.classList.add("active"); // adiciona a classe active ao menu
  }
}

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
