import { check, validationResult } from "express-validator";
import { Clients } from "../models/index.js";

const viewClient = (req, res) => {
  res.render("client/create", {
    page: "Crear Cliente",
    csrfToken: req.csrfToken(),
    client: {},
  });
};

const createClient = async (req, res) => {
  const { name, last_name, email, phone, address } = req.body;
  await check("name")
    .trim()
    .notEmpty()
    .withMessage("Nombre es obligatorio")
    .isLength({ min: 3 })
    .withMessage("Nombre debe tener al menos 3 caracteres")
    .run(req);
  await check("last_name")
    .trim()
    .notEmpty()
    .withMessage("Apellido es obligatorio")
    .isLength({ min: 3 })
    .withMessage("Apellido debe tener al menos 3 caracteres")
    .run(req);
  await check("email")
    .optional({ checkFalsy: true })
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Correo electronico incorrecto")
    .run(req);
  await check("phone")
    .notEmpty()
    .withMessage("Número de télefono es obligatorio")
    .run(req);

  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.render("client/create", {
      page: "Crear Cliente",
      csrfToken: req.csrfToken(),
      errors: result.mapped(),
      client: req.body,
    });
  }

  const clients = await Clients.findOne({ where: { email } });

  if (clients) {
    return res.render("client/create", {
      page: "Crear Cliente",
      csrfToken: req.csrfToken(),
      errors: { email: { msg: "El correo ya existe" } },
      client: req.body,
    });
  }

  await Clients.create({
    name,
    last_name,
    email,
    phone,
    address,
    user_id: req.user.id,
  });

  res.redirect("/home-repairs");
};

export { viewClient, createClient };
