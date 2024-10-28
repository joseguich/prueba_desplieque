import express from "express";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/usuarioRoutes.js";
import repairsRoutes from "./routes/repairsRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import deviceRoutes from "./routes/deviceRoutes.js";
import db from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 4000;

//Archivo statico
app.use(express.static("public"));

//Configurar body obtener datos HTML
app.use(express.urlencoded({ extended: true }));

//Conexión a la base de datos.
try {
  //Autenticar conexión
  await db.authenticate();

  //Crear las columnas
  await db.sync();

  console.log("Conexión exitosa");
} catch (err) {
  console.log("Error de conexión", err);
}

//Habilidar cookie
app.use(cookieParser());

//Hablitar CSURF
app.use(csrf({ cookie: true }));

//Configurar plantilla de pug
app.set("view engine", ".pug");
app.set("views", "./views");

app.use("/auth", userRoutes);
app.use("/", clientRoutes, deviceRoutes, repairsRoutes);

app.listen(PORT, () => {
  console.log(`Corriendo en el servidor: http://localhost:${PORT}`);
});
