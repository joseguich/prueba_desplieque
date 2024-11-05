import { check, validationResult } from "express-validator";
import moment from "moment";
import { Clients } from "../models/index.js";
import { Op } from "sequelize";

moment.locale("es");

//Vista Clientes
const viewClient = (req, res) => {
  res.render("client/create", {
    page: "Crear Cliente",
    csrfToken: req.csrfToken(),
    client: {},
  });
};

//Crear Clientes
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
      errors: result.mapped(),
      client: req.body,
    });
  }

  //Validad si el correo ya existe, pero solo si es proporcionado
  if (email) {
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
  }

  await Clients.create({
    name,
    last_name,
    email: email || null, //Guardar como null si no se proporciona el email
    phone,
    address,
    user_id: req.user.id,
  });

  res.render("template/message-admin", {
    page: "Cliente creado",
    message: "El cliente ha sido creado correctamente",
    panel: true,
  });
};

const viewClientPanel = async (req, res) => {
  // Crear para metro para agregarlo a la routes de panel
  const page = parseInt(req.query.page) || 1;

  //Gaginas a mostrar
  const limit = 10;

  //Devuelve las 10 primera de la DB
  const offset = (page - 1) * limit;
  try {
    const { rows: clients, count: totalClients } =
      await Clients.findAndCountAll({
        offset,
        limit,
        order: [["createdAt", "DESC"]],
      });

    const totalPages = Math.ceil(totalClients / limit);

    // Formatear solamente la fecha MOMENT
    const verifiedClients = clients.map((client) => {
      const createdAt = client.createdAt;
      return {
        //Hacemos una copia del objeto originar
        ...client.dataValues,
        //Formateamos la fecha con moment
        dateFormatted: moment(createdAt).format("LLLL"),
      };
    });

    res.render("client/panel", {
      page: "Panel de Clientes",
      clients: verifiedClients,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    console.log("Error al cargar los clientes:", error);
  }
};

// Vista Editar Clientes
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

//Buscar Clientes
const searchClient = async (req, res) => {
  //Parametro de busqueda
  const { search } = req.query;

  try {
    if (!search || search.trim() === "") {
      res.redirect("/client/panel");
    }

    const clients = await Clients.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { last_name: { [Op.like]: `%${search}%` } },
          { phone: { [Op.like]: `%${search}%` } },
        ],
      },
      order: [["createdAt", "DESC"]],
    });

    res.render("client/panel", {
      page: "Panel de Clientes",
      clients,
      currentPage: 1,
      totalPages: 1,
      search,
    });
  } catch (error) {
    console.log("Error al buscar clientes:", error);
  }
};
//Editar clientes
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

const deleteClient = async (req, res) => {
  const { id } = req.params;

  try {
    await Clients.destroy({ where: { id } });
    res.redirect("/client/panel");
  } catch (error) {
    console.log("Error al eliminar el cliente:", error);
  }
};

export {
  viewClient,
  createClient,
  viewClientPanel,
  searchClient,
  viewClientEdit,
  editClient,
  deleteClient,
};
