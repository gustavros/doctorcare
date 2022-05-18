export default function showButtonToTop() {
  const buttonToTop = document.querySelector("#backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
      buttonToTop.classList.add("show");
    } else {
      buttonToTop.classList.remove("show");
    }
  });
}
