import activeMenuAtCurrentSection from "./activeMenuAtCurrentSection.js";

export default function scrollOnWindow() {
  const header = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }

    activeMenuAtCurrentSection(home);
    activeMenuAtCurrentSection(services);
    activeMenuAtCurrentSection(about);
    activeMenuAtCurrentSection(contact);
    activeMenuAtCurrentSection(depositions);
  });
}
