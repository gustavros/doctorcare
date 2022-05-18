export default function closeMenuOnClick() {
  const buttons = document.querySelectorAll(".menu a");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector("body").classList.remove("menu-expanded");
    });
  });
}
