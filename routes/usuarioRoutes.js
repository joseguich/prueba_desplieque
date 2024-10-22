import express from "express";
import { body } from "express-validator";
import { viewLogin, authLogin } from "../controllers/authControllers.js";

const routes = express();

routes.get("/login", viewLogin);
routes.post(
  "/login",
  body("identificar").notEmpty().withMessage("Ingrese su email o usuario"),
  body("password").notEmpty().withMessage("Ingrese su contraseña"),
  authLogin
);

export default routes;
