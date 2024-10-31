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

export { viewDevice, createDevice };
