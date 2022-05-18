export default function openAndCloseMenu() {
  const closeButton = document.querySelector(".close-menu");
  const openButton = document.querySelector(".open-menu");

  openButton.addEventListener("click", () => {
    document.body.classList.add("menu-expanded");
  });

  closeButton.addEventListener("click", () => {
    document.body.classList.remove("menu-expanded");
  });
}
