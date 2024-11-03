const menuBtn = document.querySelector("#menu-btn");
const sidebar = document.querySelector("#sidebar");
const overlay = document.querySelector("#overlay");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector("#close-icon");
const subMenuBtns = document.querySelectorAll(".submenu-btn");

menuBtn.addEventListener("click", () => {
  const isOpen = !sidebar.classList.contains("-translate-x-full");
  sidebar.classList.toggle("-translate-x-full", isOpen);
  sidebar.classList.toggle("-translate-x-0", !isOpen);
  overlay.classList.toggle("hidden", isOpen);

  hamburgerIcon.classList.toggle("hidden", !isOpen);
  closeIcon.classList.toggle("hidden", isOpen);
});

overlay.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  sidebar.classList.remove("-translate-x-0");
  overlay.classList.add("hidden");

  hamburgerIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
});

subMenuBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const submenu = this.nextElementSibling;
    const icon = this.querySelector(".submenu-icon");

    // Verficar si el Submenú ya esta abierto
    const isOpen = !submenu.classList.contains("hidden");

    // Cerrar otros submenús a nivel actual
    let currentLevel = this.parentElement.parentElement;
    currentLevel
      .querySelectorAll(".submenu")
      .forEach((submenu) => submenu.classList.add("hidden"));

    currentLevel
      .querySelectorAll(".submenu-icon")
      .forEach((icon) => icon.classList.remove("rotate-180"));

    if (!isOpen) {
      submenu.classList.remove("hidden");
      icon.classList.add("rotate-180");
    } else {
      submenu.classList.add("hidden");
      icon.classList.remove("rotate-180");
    }
  });
});
