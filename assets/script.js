const label = document.querySelector("label");
const body = document.querySelector("body");

label.addEventListener("click", () => {
  body.classList.toggle("light");
});