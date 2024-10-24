const textArea = document.querySelector("#address");
const count = document.querySelector("#count");

textArea.addEventListener("input", (e) => {
  if (!textArea.value.trim()) {
    count.textContent = "0 / 100";
    return;
  }
  const valueTextArea = textArea.value.length;

  //Obtener el atributo maximo de caracteres
  const maxLength = textArea.getAttribute("maxLength");

  count.textContent = `${valueTextArea} / ${maxLength}`;
});
