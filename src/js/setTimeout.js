const errors = document.querySelectorAll(".errors");

errors.forEach((error) => {
  error.classList.add("animate__animated", "animate__bounceIn");
  console.log(error);

  setTimeout(
    () => {
      error.classList.add("hidden");
    },
    6000,
    setTimeout(() => {
      error.classList.add("animate__fadeOut");
    }, 4000)
  );
});
