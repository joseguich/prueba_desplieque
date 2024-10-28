const search = document.querySelector("#search");

search.addEventListener("input", () => {
  if (search.value === "") {
    window.location.href = "/client/panel";
  }
});
