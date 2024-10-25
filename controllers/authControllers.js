import { check, validationResult } from "express-validator";
import bcrypt, { genSalt } from "bcrypt";
import User from "../models/User.js";
import { Op } from "sequelize";
import { generatorId, generatorJwt } from "../helpers/token.js";
const viewLogin = (req, res) => {
  res.render("auth/login", {
    page: "Inicio de Sesión",
    csrfToken: req.csrfToken(),
  });
};

const authLogin = async (req, res) => {
  const { identificar, password } = req.body;

  const result = await validationResult(req);

  if (!result.isEmpty()) {
    return res.render("auth/login", {
      page: "Inicio de Sesión",
      errores: result.array(),
      user: {
        identificar,
      },
      csrfToken: req.csrfToken(),
    });
  }

  const user = await User.findOne({
    where: {
      [Op.or]: [{ user_name: identificar }, { email: identificar }],
    },
  });

  //Validar si el usuario existe o el email
  if (!user) {
    return res.render("auth/login", {
      page: "Inicio de Sesión",
      errores: [{ msg: "Usuario o Email no encontrado o no existe" }],
      user: {
        identificar,
      },
      csrfToken: req.csrfToken(),
    });
  }

  //Validar si la cuenta esta confirmada
  if (!user.confirm) {
    return res.render("auth/login", {
      page: "Iniciar Sesión",
      errores: [{ msg: "Tu cuenta no ha sido confirmada" }],
      user: {
        identificar,
      },
      csrfToken: req.csrfToken(),
    });
  }

  const verficarPassword = await bcrypt.compare(password, user.password);

  if (!verficarPassword) {
    return res.render("auth/login", {
      page: "Iniciar Sesión",
      errores: [{ msg: "La contraseña es incorrecta" }],
      user: {
        identificar,
      },
      csrfToken: req.csrfToken(),
    });
  }

  const token = generatorJwt({
    id: user.id,
    user_name: user.user_name,
    name: user.name,
  });

  res
    .cookie("_token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    })
    .redirect("/home-repairs");
};

const viewForgetPassword = (req, res) => {
  res.render("auth/forget-password", {
    page: "Olvidaste Contraseña",
    csrfToken: req.csrfToken(),
  });
};

const forgetPassword = async (req, res) => {
  const { email } = req.body;

  //Validdar
  const resultado = validationResult(req);
  if (!resultado.isEmpty()) {
    return res.render("auth/forget-password", {
      page: "Olvidaste Contraseña",
      csrfToken: req.csrfToken(),
      errores: resultado.array(),
      users: {
        email,
      },
    });
  }

  //Verificar si existe el usuario
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.render("auth/forget-password", {
      page: "Olvidaste Contraseña",
      csrfToken: req.csrfToken(),
      errores: [{ msg: "El email no existe" }],
      users: {
        email,
      },
    });
  }

  user.token = generatorId();
  await user.save();

  res.redirect(`/auth/reset-password/${user.token}`);
};

const viewResetPassword = async (req, res) => {
  const { token } = req.params;

  const user = await User.findOne({ where: { token } });
  if (!user) {
    return res.render("template/message-index", {
      page: "Error al retablecer la contraseña",
      message: "Hubo un error al retablecer la contraseña, intentalo de nuevo",
    });
  }

  res.render("auth/reset-password", {
    page: "Retablecer Contraseña",
    csrfToken: req.csrfToken(),
    user,
  });
};

const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  await check("password")
    .trim()
    .notEmpty()
    .withMessage("Los Campo contraseña es obligatorio")
    .isLength({ min: 6 })
    .withMessage("Minimo 6 caracteres")
    .run(req);
  await check("confirm_password")
    .trim()
    .equals(password)
    .withMessage("Contraseña no coincide")
    .run(req);

  const result = validationResult(req);
  const user = await User.findOne({ where: { token } });

  if (!result.isEmpty()) {
    return res.render("auth/reset-password", {
      page: "Retablecer Contraseña",
      csrfToken: req.csrfToken(),
      errores: result.array(),
      user,
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  user.password = hashPassword;
  user.token = null;

  await user.save();

  res.render("template/message-index", {
    page: "Recuperación de contraseña",
    message: "Contraseña cambiada correctamente",
    success: true,
  });
};

export {
  viewLogin,
  authLogin,
  viewForgetPassword,
  forgetPassword,
  viewResetPassword,
  resetPassword,
};
