import jwt from "jsonwebtoken";
import { User } from "../models/index.js";
const authRoutes = async (req, res, next) => {
  //Obtener la cookies
  const { _token } = req.cookies;

  // Validar si el token existe
  if (!_token) {
    return res.clearCookie("_token").redirect("/auth/login");
  }

  try {
    //Verificar si el token es calido
    const decoded = jwt.verify(_token, process.env.JWT_SECRET);
    const user = await User.scope("deleteInfo").findByPk(decoded.id);

    if (user) {
      req.user = user;
    } else {
      return res.clearCookie("_token").redirect("/auth/login");
    }

    next();
  } catch (error) {
    console.log("Error al obtener obtener datos de la BD", error);
    res.clearCookie("_token").redirect("/auth/login");
  }
};

export default authRoutes;
