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

    const categories = await CategoryFailure.findAll({
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
    });
  } catch (error) {
    console.log("Error al obtener los queries de la db", error);
  }
};

export { viewDevice };
