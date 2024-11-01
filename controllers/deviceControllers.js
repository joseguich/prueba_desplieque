import { check, validationResult } from "express-validator";
import {
  Clients,
  Problemphone,
  CategoryFailure,
  Brand,
  Models,
  Device,
} from "../models/index.js";
const viewDevice = async (req, res) => {
  try {
    const [clients, brands, models] = await Promise.all([
      Clients.findAll({ order: [["name", "ASC"]] }),
      Brand.findAll({ order: [["name", "ASC"]] }),
      Models.findAll({ order: [["name", "ASC"]] }),
    ]);

    // Obtener las categorias de los problemas
    const categories = await CategoryFailure.findAll({
      // Incluir los problemas asociados a las categorías
      include: [
        {
          model: Problemphone,
          as: "problems",
          attributes: ["id", "description"],
        },
      ],
    });

    res.render("device/create", {
      page: "Registro de Equipo",
      clients,
      categories,
      brands,
      models,
      csrfToken: req.csrfToken(),
      device: {},
    });
  } catch (error) {
    console.log("Error al obtener los queries de la db", error);
  }
};
const createDevice = async (req, res) => {
  const [clients, brands, models] = await Promise.all([
    Clients.findAll(),
    Brand.findAll({ order: [["name", "ASC"]] }),
    Models.findAll({ order: [["name", "ASC"]] }),
  ]);

  // Obtener las categorias de los problemas
  const categories = await CategoryFailure.findAll({
    // Incluir los problemas asociados a las categorías
    include: [
      {
        model: Problemphone,
        as: "problems",
        attributes: ["id", "description"],
      },
    ],
  });

  await check("client_id")
    .notEmpty()
    .withMessage("Seleccione el cliente es obligatorio")
    .run(req);
  await check("brand_id")
    .notEmpty()
    .withMessage("Seleccione la marca obligatoria")
    .run(req);
  await check("model_id")
    .notEmpty()
    .withMessage("Seleccione el modelo es obligatorio")
    .run(req);
  await check("problem_id")
    .notEmpty()
    .withMessage("Seleccione la falla del equipo")
    .run(req);
  await check("serial_number")
    .notEmpty()
    .withMessage("Serial es obligatorio")
    .run(req);

  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.render("device/create", {
      page: "Crear Equipo",
      csrfToken: req.csrfToken(),
      errors: result.mapped(),
      clients,
      categories,
      brands,
      models,
      device: req.body,
    });
  }
  const {
    client_id,
    brand_id,
    model_id,
    problem_id,
    serial_number,
    description,
  } = req.body;
  await Device.create({
    client_id,
    brand_id,
    model_id,
    problem_id,
    serial_number,
    description,
  });
  res.json({ message: "Equipo registrado correctamente" });
};

//Vista de fallas de equipos
const viewFailures = async (req, res) => {
  const categories = await CategoryFailure.findAll();

  res.render("device/failures", {
    page: "Crear Falla del Equipo",
    csrfToken: req.csrfToken(),
    categories,
    failures: {},
  });
};

//Crear fallas de equipos
const createDeviceFailures = async (req, res) => {
  const categories = await CategoryFailure.findAll();
  const { category_id, description } = req.body;
  await check("category_id")
    .notEmpty()
    .withMessage("Seleccione categoria de la falla")
    .run(req);
  await check("description")
    .notEmpty()
    .withMessage("Descripción de la falla")
    .isLength({ min: 10, max: 70 })
    .withMessage(
      "Descripción de la falla debe tener al menos 10 caracteres a 70 caracteres"
    )
    .run(req);

  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.render("device/failures", {
      page: "Crear Falla del Equipo",
      csrfToken: req.csrfToken(),
      errors: result.mapped(),
      categories,
      failures: req.body,
    });
  }

  await Problemphone.create({
    category_id,
    description,
  });

  res.render("template/message-admin", {
    page: "Nueva falla",
    message: "Falla fue creada correctamente",
  });
};

const viewModel = async (req, res) => {
  res.render("device/model", {
    page: "Modelo del Equipo",
    csrfToken: req.csrfToken(),
    model: {},
  });
};

const createModel = async (req, res) => {
  const { name } = req.body;
  await check("name")
    .notEmpty()
    .withMessage("Modelo es obligatorio")
    .isLength({ min: 3, max: 30 })
    .withMessage("Modelo debe tener al menos 3 caracteres a 30 caracteres")
    .run(req);

  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.render("device/model", {
      page: "Crear Modelo",
      csrfToken: req.csrfToken(),
      errors: result.mapped(),
      model: req.body,
    });
  }

  await Models.create({
    name,
  });

  res.render("template/message-admin", {
    page: "Nuevo Modelo",
    message: "Modelo fue creado correctamente",
  });
};

export {
  viewDevice,
  createDevice,
  viewFailures,
  createDeviceFailures,
  viewModel,
  createModel,
};
