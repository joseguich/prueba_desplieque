const textArea = document.querySelector("#address");
const textAreaDescription = document.querySelector("#description");
const count = document.querySelector("#count");

const eventTextArea = (textArea) => {
  if (!textArea.value.trim()) {
    count.textContent = "0 / 100";
    return;
  }
  const valueTextArea = textArea.value.length;

  //Obtener el atributo maximo de caracteres
  const maxLength = textArea.getAttribute("maxLength");

  count.textContent = `${valueTextArea} / ${maxLength}`;
};

if (textArea) {
  textArea.addEventListener("input", () => eventTextArea(textArea));
  count.textContent = `${textArea.value.length} / 100`;
}

if (textAreaDescription) {
  textAreaDescription.addEventListener("input", () =>
    eventTextArea(textAreaDescription)
  );
  count.textContent = `${textAreaDescription.value.length} / 100`;
}
