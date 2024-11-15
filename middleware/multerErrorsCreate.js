import multer from "multer";
import uploads from "./uploadImg.js";
const multerErrorsCreate = (req, res, next) => {
  try {
    uploads.array("image", 5)(req, res, (err) => {
      if (err) {
        console.log(err);
        if (err instanceof multer.MulterError) {
          //* Añadir el error al objeto de solitud (request)
          req.multerError = err;
        } else {
          // Si es otro tipo de error, también lo asignamos para manejarlo
          req.multerError = new Error(
            "Error al subir archivos. Verifica el formato de los archivos."
          );
        }
      }
      next();
    });
  } catch (error) {
    req.multerError = new Error(
      "Error desconocido durante la carga de archivos."
    );
    next();
  }
};

export default multerErrorsCreate;
