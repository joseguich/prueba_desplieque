document.addEventListener("DOMContentLoaded", () => {
  //- Menú hamburguesa para móviles
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon"); // Selecciona el ícono del menú

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");

      // Cambiar entre el ícono de hamburguesa y la "X"
      if (mobileMenu.classList.contains("hidden")) {
        hamburgerIcon.classList.remove("fa-times"); // Quitar "X"
        hamburgerIcon.classList.add("fa-bars"); // Volver al menú hamburguesa
      } else {
        hamburgerIcon.classList.remove("fa-bars"); // Quitar menú hamburguesa
        hamburgerIcon.classList.add("fa-times"); // Mostrar "X"
      }
    });
  }

  //- Desplegable del menú Reparación en versión escritorio
  const repairMenuToggle = document.getElementById("repair-menu-toggle");
  const repairMenu = document.getElementById("repair-menu");
  const repairArrow = document.getElementById("repair-arrow"); // Seleccionar la flecha

  if (repairMenuToggle && repairMenu) {
    repairMenuToggle.addEventListener("click", () => {
      repairMenu.classList.toggle("hidden");
      repairArrow.classList.toggle("rotate-180"); // Rotar flecha
    });
  }

  //- Desplegable del menú Reparación en versión móvil
  const mobileRepairMenuToggle = document.getElementById(
    "mobile-repair-menu-toggle"
  );
  const mobileRepairMenu = document.getElementById("mobile-repair-menu");
  const mobileRepairArrow = document.getElementById("mobile-repair-arrow"); // Seleccionar la flecha

  if (mobileRepairMenuToggle && mobileRepairMenu) {
    mobileRepairMenuToggle.addEventListener("click", () => {
      mobileRepairMenu.classList.toggle("hidden");
      mobileRepairArrow.classList.toggle("rotate-180"); // Rotar flecha
    });
  }
});
