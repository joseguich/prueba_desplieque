import multer from "multer";
import uploadsEditImage from "./editImage.js";

const multerErrorsEdit = (req, res, next) => {
  try {
    uploadsEditImage(req, res, (err) => {
      if (err) {
        console.log(err);
        if (err instanceof multer.MulterError) {
          req.multerError = err;
        } else {
          req.multerError = new Error(
            "Error al subir archivos. Verifica el formato de los archivos."
          );
        }
      }
      next();
    });
  } catch (error) {
    console.log(error);
  }
};

export default multerErrorsEdit;
