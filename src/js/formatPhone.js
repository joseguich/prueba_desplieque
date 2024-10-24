const phone = document.querySelector("#phone");

phone.addEventListener("input", (e) => {
  const input = e.target;
  let number = input.value.replace(/\D/g, ""); // Elimina caracteres no númericos

  if (number.length > 3 && number.length <= 6) {
    number = `(${number.slice(0, 3)}) ${number.slice(3)}`;
  } else if (number.length > 6) {
    number = `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(
      6,
      10
    )}`;
  }

  input.value = number;
});
