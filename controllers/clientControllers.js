import { check, validationResult } from "express-validator";
import moment from "moment";
import { Clients } from "../models/index.js";

moment.locale("es");

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

  //Validad que el correo exista
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

const viewClientPanel = async (req, res) => {
  const clients = await Clients.findAll();

  // Formatear solamente la fecha MOMENT
  const verifiedClients = clients.map((client) => {
    const createdAt = client.createdAt;
    return {
      ...client.dataValues,
      dateFormatted: moment(createdAt).format("LLLL"),
    };
  });

  res.render("client/panel", {
    page: "Panel de Clientes",
    clients: verifiedClients,
  });
};

const viewClientEdit = async (req, res) => {
  const { id } = req.params;

  //Obtener la información del cliente
  const client = await Clients.findByPk(id);

  //Verificar que el cliente exista
  if (!client) {
    return res.redirect("/client/panel");
  }

  res.render("client/edit", {
    page: "Editar Cliente",
    csrfToken: req.csrfToken(),
    client,
  });
};

const editClient = async (req, res) => {
  const { id } = req.params;
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

  //Obtener la información del cliente
  const client = await Clients.findByPk(id);

  //Verificar que el cliente exista
  if (!client) {
    return res.redirect("/client/panel");
  }

  //Actualizar la información del cliente
  await client.set({ name, last_name, email, phone, address });

  // Guardar los datos en la base de datos
  await client.save();

  res.render("template/message-admin", {
    page: "Cliente actualizado",
    message: "El cliente ha sido actualizado correctamente",
    panel: true,
  });
};

export {
  viewClient,
  createClient,
  viewClientPanel,
  viewClientEdit,
  editClient,
};
