import { exit, argv } from "node:process";
import db from "../config/db.js";
import {
  User,
  Clients,
  CategoryFailure,
  Problemphone,
  Brand,
  Models,
} from "../models/index.js";
import users from "./user.js";
import clients from "./clients.js";
import categoryFailure from "./categoryFailure.js";
import problemIphone from "./problemPhone.js";
import brands from "./brand.js";
import models from "./model.js";

//Crear los datos
const importarDatos = async () => {
  try {
    //User Authenticate
    await db.authenticate();

    //Crear las tablas.
    await db.sync();

    //Insertar los datos
    await Promise.all([
      User.bulkCreate(users),
      Clients.bulkCreate(clients),
      Brand.bulkCreate(brands),
      Models.bulkCreate(models),
    ]);

    await CategoryFailure.bulkCreate(categoryFailure);
    await Problemphone.bulkCreate(problemIphone);

    console.log("Data creado correctamente");
    exit();
  } catch (err) {
    console.log("ERROR al importar el seeder", err);
    exit(1);
  }
};

//Eliminar los datos.
const eliminarDatos = async () => {
  try {
    await db.authenticate();

    await db.sync({ force: true });

    console.log("Data eliminado correctamente");
    exit();
  } catch (err) {
    console.log("ERROR al eliminar el seeder", err);
    exit(1);
  }
};

if (argv[2] === "-i") {
  importarDatos();
}
if (argv[2] === "-e") {
  eliminarDatos();
}
