const spinner = document.querySelector("#loader");
const pages = document.querySelectorAll("a[href*='page']");
const loaders = document.querySelectorAll(".loader");
const form = document.querySelector("form");

function showloader() {
  spinner.classList.remove("hidden");
}

function hidenLoader() {
  spinner.classList.add("hidden");
}

pages.forEach((link) => {
  link.addEventListener("click", () => {
    showloader();
  });
});
loaders.forEach((link) => {
  link.addEventListener("click", () => {
    showloader();
  });
});

form.addEventListener("submit", () => {
  showloader();
});

window.addEventListener("load", () => {
  hidenLoader();
});
