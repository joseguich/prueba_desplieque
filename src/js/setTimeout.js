const errores = document.querySelector("#errores");
errores.classList.add("animate__animated", "animate__fadeInDown");

setTimeout(
  () => {
    errores.classList.add("hidden");
  },
  5000,
  setTimeout(() => {
    errores.classList.add("animate__fadeOut");
  }, 4000)
);
