import Swal from "sweetalert2";
const cancelarBtn = document.querySelector("#cancelar");

const sweetAlert = (edit = "editando", cancel = "cancelar") => {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "Los cambios no guardados se perderán",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: `No, contiuar ${edit}`,
    confirmButtonText: `Sí, ${cancel}`,
    focusConfirm: false,
    focusCancel: false,
    customClass: {
      confirmButton:
        "bg-red-700 hover:bg-gray-700 text-white text-sm md:text-xl p-[7px] rounded-lg shadow-lg hover:shadow-gray-700  hover:scale-90 transition-all duration-300",
      cancelButton:
        "bg-gray-700 hover:bg-indigo-700 text-white text-sm md:text-xl rounded-lg shadow-lg hover:shadow-gray-700  hover:scale-90 p-[10px] transition-all duration-300",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Cancelado", "Los cambios fueron descartados", "success");
      setTimeout(() => {
        window.location.href = "/client/panel";
      }, 1000);
    }
  });
};

cancelarBtn.addEventListener("click", () => sweetAlert());
