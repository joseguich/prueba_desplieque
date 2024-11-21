import { Datepicker } from "flowbite";

const dateInput = document.querySelector("#delivery_date");

const date = new Datepicker(dateInput, {
  format: "yyy-mm-dd",
  authhide: true, // Esconde el calendario al seleccionar una fecha
  language: "es",
});
console.log(date);
