import { Clients, Problemphone, CategoryFailure } from "../models/index.js";
const viewDevice = async (req, res) => {
  try {
    const [clients] = await Promise.all([
      Clients.findAll({ order: [["name", "ASC"]] }),
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
    console.log(categories);

    res.render("device/create", {
      page: "Registro de Equipo",
      clients,
      categories,
    });
  } catch (error) {
    console.log("Error al obtener los queries de la db", error);
  }
};

export { viewDevice };
