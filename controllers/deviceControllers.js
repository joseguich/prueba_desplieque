import { check, validationResult } from "express-validator";
import {
  Clients,
  Problemphone,
  CategoryFailure,
  Brand,
  Models,
  Device,
} from "../models/index.js";
import multer from "multer";
import EvidenceImage from "../models/EvidenceImage.js";
import { Op } from "sequelize";
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
      page: "Registro de Equipo",
      errors: result.mapped(),
      clients,
      categories,
      brands,
      models,
      device: req.body,
    });
  }

  try {
    const {
      client_id,
      brand_id,
      model_id,
      problem_id,
      serial_number,
      description,
    } = req.body;

    // Verficar si hay error en el multer
    if (req.multerError) {
      let errorMessage = "Archivo desconocido al subir la imagen";

      //Verificar el tipo de error
      if (req.multerError instanceof multer.MulterError) {
        const { code } = req.multerError;
        switch (code) {
          case "LIMIT_FILE_COUNT":
            errorMessage = "Solo se puede subir 5 imagenes";
            break;
          case "LIMIT_UNEXPECTED_FILE":
            errorMessage = "Archivo subido no es de tipo imagen";
            break;
          default:
            errorMessage =
              "Error al subir archivos. Verifica los fromatos permitidos";
            break;
        }
      }

      return res.render("device/create", {
        page: "Registro de Equipo",
        errors: { image: { msg: errorMessage } },
        brands,
        clients,
        categories,
        models,
        device: req.body,
      });
    }
    const createdDevice = await Device.create({
      client_id,
      brand_id,
      model_id,
      problem_id,
      serial_number,
      description,
    });

    // Recorrer las imagenes subidas y guardarlas en la base de datos
    const image = req.files.map((file) => ({
      device_id: createdDevice.id,
      imagePath: file.filename,
    }));

    // Insertar las imagenes en la base de datos
    await EvidenceImage.bulkCreate(image);

    res.send("Dispositido creado correctamente");
  } catch (error) {
    console.error("Error en el controlador createDevice:", error);
    res.status(500).send("Error al crear el dispositivo.");
  }
};

const deviceEditView = async (req, res) => {
  const { id } = req.params;
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

    const devices = await Device.findByPk(id);

    if (!devices) {
      return res.redirect("/device/received");
    }

    res.render("device/edit", {
      page: "Editar Equipo",
      clients,
      categories,
      brands,
      models,
      devices,
    });
  } catch (error) {
    console.log("Error al obtener los queries de la db", error);
  }
};

//Vista de fallas de equipos
const viewFailures = async (req, res) => {
  const categories = await CategoryFailure.findAll();

  res.render("device/failures", {
    page: "Crear Falla del Equipo",
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

const receivedDeviceView = async (req, res) => {
  try {
    const { searchClientId } = req.query;

    const clients = await Clients.findAll({
      attributes: ["id", "name", "last_name"],
      order: [["name", "ASC"]],
    });

    // Verificar si clientId está definido
    if (typeof searchClientId === "undefined") {
      return res.render("device/received", {
        page: "Dispositivo de los clientes",
        devices: [],
        clients,
        selectedClient: null,
        errors: null, // No mostrar errores en la primera carga
      });
    }

    // Verificar si hay cliente seleccionado
    if (!searchClientId) {
      return res.render("device/received", {
        page: "Dispositivo de de los clientes",
        devices: [],
        clients,
        selectedClientId: searchClientId,
        errors: "Seleccione un cliente",
      });
    }

    const queryOption = {
      include: [
        { model: Models, as: "model", attributes: ["name"] },

        { model: EvidenceImage, as: "image", attributes: ["imagePath"] },

        { model: Problemphone, as: "problem", attributres: ["description"] },

        {
          model: Clients,
          attributes: ["name", "last_name"],
          where: { id: searchClientId },
        },
      ],
    };

    // Obtener los datos
    const devices = await Device.findAll(queryOption);

    if (devices.length === 0) {
      return res.render("device/received", {
        page: "Dispositivo de de los clientes",
        devices: [],
        clients,
        selectedClientId: searchClientId,
        errors: "No se encontraron dispositivos con ese nombre o apellido",
      });
    }

    res.render("device/received", {
      page: "Dispositivo de de los clientes",
      devices,
      clients,
      selectedClientId: searchClientId,
      errors: null,
    });
  } catch (err) {
    console.log(err);
    res.render("device/received", {
      page: "Dispositivo de de los clientes",
      devices: [],
      clients: [],
      errors: err,
    });
  }
};

const viewDeviceDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const devices = await Device.findByPk(id, {
      // Join de las tablas.
      include: [
        { model: EvidenceImage, as: "image", attributes: ["imagePath"] },
        { model: Models, as: "model", attributes: ["name"] },
        { model: Clients, as: "client", attributes: ["name", "last_name"] },
        { model: Problemphone, as: "problem", attributes: ["description"] },
        { model: Brand, as: "brand", attributes: ["name"] },
      ],
    });

    //Validar que existe
    if (!devices) {
      return res.redirect("/device/received");
    }
    res.render("device/details", {
      page: "Información del dispositivo",
      devices,
    });
  } catch (err) {
    res.render("device/details", {
      page: "Información del dispositivo",
      devices: [],
      errors: err,
    });
    console.log(err);
  }
};

export {
  viewDevice,
  createDevice,
  viewFailures,
  createDeviceFailures,
  viewModel,
  createModel,
  receivedDeviceView,
  viewDeviceDetails,
  deviceEditView,
};
