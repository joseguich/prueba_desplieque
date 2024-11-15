import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("./public/uploads"));
  },

  filename: (req, file, cb) => {
    //Crear ID unico para cada archivo subido.
    const uniqueId =
      Math.random().toString(30).substring(2) +
      Date.now().toString(30).substring(2);
    cb(null, uniqueId + path.extname(file.originalname));
  },
});

const uploadsEditImage = multer({
  storage,
  limits: { files: 5 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = file.mimetype.startsWith("image/");
    if (allowedTypes) {
      // Null si no hay error y true si se cumple la condicion
      cb(null, true);
    } else {
      cb(new Error("Por favor, sube un archivo de imagen"));
    }
  },
}).fields([
  { name: "newImages", maxCount: 5 },
  { name: "replaceImages", maxCount: 5 },
]);

export default uploadsEditImage;
