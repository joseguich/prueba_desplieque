import express from "express";
import { body } from "express-validator";
import {
  viewLogin,
  authLogin,
  viewForgetPassword,
  forgetPassword,
  viewResetPassword,
} from "../controllers/authControllers.js";

const routes = express();

routes.get("/login", viewLogin);
routes.post(
  "/login",
  body("identificar").notEmpty().withMessage("Ingrese su email o usuario"),
  body("password").notEmpty().withMessage("Ingrese su contraseña"),
  authLogin
);

routes.get("/forget-password", viewForgetPassword);
routes.post(
  "/forget-password",

  body("email").isEmail().withMessage("Email es obligatorio"),

  forgetPassword
);

routes.get("/reset-password/:token", viewResetPassword);

export default routes;
