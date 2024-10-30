import { check, validationResult } from "express-validator";
import {
  Clients,
  Problemphone,
  CategoryFailure,
  Brand,
  Models,
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
    });
  } catch (error) {
    console.log("Error al obtener los queries de la db", error);
  }
};

const createDevice = async (req, res) => {
  const { client_id } = req.body;
  const [clients, brands, models] = await Promise.all([
    Clients.findAll({ order: [["name", "ASC"]] }),
    Brand.findAll({ order: [["name", "ASC"]] }),
    Models.findAll({ order: [["name", "ASC"]] }),
  ]);
  console.log(req.body.client_id);

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

  console.log(client_id);

  await check("client_id")
    .notEmpty()
    .withMessage("Cliente es obligatorio")
    .run(req);
  await check("brand_id")
    .notEmpty()
    .withMessage("Marca del equipo es obligatoria")
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
      device: {
        client_id,
      },
    });
  }
};

export { viewDevice, createDevice };
