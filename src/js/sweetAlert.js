import Swal from "sweetalert2";
document.addEventListener("DOMContentLoaded", function () {
  const cancelarBtnCreate = document.querySelector("#cancelar-create");
  const cancelarBtnEdit = document.querySelector("#cancelar-edit");
  const deleteForms = document.querySelectorAll(".delete-form");

  // Sweet Alert editar
  const sweetAlertEdit = (
    edit = "editando",
    cancel = "cancelar",
    modify = "Modificando"
  ) => {
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
          "bg-gray-500 shadow-lg hover:shadow-blue-700  hover:bg-blue-800 hover:scale-95 transition-all duration-300 text-white md:text-xl text-sm rounded-lg ",
        cancelButton:
          "bg-red-500 shadow-lg hover:shadow-red-700  hover:bg-red-800 hover:scale-95 transition-all duration-300 text-white md:text-xl text-sm rounded-lg",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Cancelar", `${modify}`, "success");
        setTimeout(() => {
          window.location.href = "/client/panel";
        }, 1000);
      }
    });
  };

  //Eliminar desde un formulario
  deleteForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Los cambios no guardados se perderán",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#3085d6",
        confirmButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "No, cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Eliminado",
            "El cliente fue eliminado correctamente",
            "success"
          );
          setTimeout(() => {
            form.submit();
          }, 1000);
        }
      });
    });
  });

  if (cancelarBtnCreate) {
    cancelarBtnCreate.addEventListener("click", () =>
      sweetAlertEdit(
        "Creación",
        "Cancelar",
        "Creación fue cancelada correctamente"
      )
    );
  }
  if (cancelarBtnEdit) {
    cancelarBtnEdit.addEventListener("click", () =>
      sweetAlertEdit("Edición", "Cancelar", "Modificando fue cancelada")
    );
  }
});
