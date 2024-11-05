import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  //! Destination: Indicamos que queremos guardar las imagenes en la carpeta "uploads"
  destination: (req, file, cb) => {
    cb(null, path.resolve("./public/uploads"));
  },

  //! Filename: Indicamos que el nombre del archivo será el ID único que creamos más el nombre original del archivo.
  filename: (req, file, cb) => {
    //Crear ID unico para cada archivo subido.
    const uniqueId =
      Math.random().toString(30).substring(2) +
      Date.now().toString(30).substring(2);
    cb(null, uniqueId + path.extname(file.originalname));
  },
});

const uploads = multer({
  storage,
  //* Limite de imagnes
  limits: { files: 5 },

  // fileFilter: Nos ayuda a definir siertas reglras o condiciones.
  fileFilter: (req, file, cb) => {
    //* Indico que se define que solo se puedan subir imagenes
    if (file.mimetype.startsWith("image/")) {
      // Null si no hay error y true si se cumple la condicion
      cb(null, true);
    } else {
      cb(new Error("Por favor, sube un archivo de imagen"));
    }
  },
});

export default uploads;
