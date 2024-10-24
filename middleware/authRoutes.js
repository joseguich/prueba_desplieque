import jwt from "jsonwebtoken";
import { User } from "../models/index.js";
const authRoutes = async (req, res, next) => {
  //Obtener la cookies
  const { _token } = req.cookies;
  // Validar si el token existe
  if (!_token) {
    return res.clearCookie("_token").redirect("/auth/login");
  }

  //Verificar si el token es calido
  const decoded = jwt.verify(_token, process.env.JWT_SECRET);

  try {
    const user = await User.scope("deleteInfo").findByPk(decoded.id);
    if (user) {
      req.user = user;
    } else {
      return res.clearCookie("_token").redirect("/auth/login");
    }

    next();
  } catch (error) {
    consle.log("Error al obtener obtener datos de la BD", error);
    res.clearCookie("_token").redirect("/auth/login");
  }
};

export default authRoutes;
