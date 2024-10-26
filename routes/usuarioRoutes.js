import express from "express";
import { body } from "express-validator";
import {
  viewLogin,
  authLogin,
  viewForgetPassword,
  forgetPassword,
  viewResetPassword,
  resetPassword,
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
routes.post("/reset-password/:token", resetPassword);

routes.get("/logout", (req, res) => {
  return res.clearCookie("_token").redirect("/auth/login");
});

export default routes;
