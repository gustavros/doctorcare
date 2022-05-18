export default function activeMenuAtCurrentSection(section) {
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
