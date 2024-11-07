const phone = document.querySelector("#phone");
const search = document.querySelector("#search");

// Función para formatear números de teléfono
const formatPhone = (input, regex) => {
  let number = input.value.replace(regex, ""); // Elimina caracteres no numéricos

  // Aplica el formato para números de 10 dígitos
  if (number.length > 3 && number.length <= 6) {
    number = `(${number.slice(0, 3)}) ${number.slice(3)}`;
  } else if (number.length > 6) {
    number = `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(
      6,
      10
    )}`;
  }

  input.value = number;
};

// Función para manejar el campo de búsqueda
const handleSearchInput = (input) => {
  const value = input.value;
  const regex = /^\d+$/; // Solo permite números
  const singleNumber = /[^0-9]/g;

  // Permitir solo caracteres alfanuméricos y espacios
  input.value = value.replace(/[^a-zA-Z0-9\s()\-]/g, "");

  // Si contiene solo números, aplica el formato de teléfono
  if (regex.test(value.replace(singleNumber, ""))) {
    formatPhone(input, singleNumber);
  }
};

if (phone) {
  phone.addEventListener("input", (e) => formatPhone(e.target, /[^0-9]/g));
}

if (search) {
  search.addEventListener("input", (e) => handleSearchInput(e.target));
}
