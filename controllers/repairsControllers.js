import { Device, Problemphone } from "../models/index.js";

const homeRepairs = (req, res) => {
  res.render("repairs/home");
};

const diagnosticView = async (req, res) => {
  const { id } = req.params;

  //Obtener la información del equipo a reparar
  const devices = await Device.findByPk(id, {
    include: [
      { model: Problemphone, as: "problem", attributes: ["description"] },
    ],
  });

  if (!devices) {
    return res.redirect("/device/received");
  }
  //Cambiar el estado del equipo a "Para Reparar"
  devices.status = "Para Reparar";
  await devices.save();

  res.render("repairs/diagnostic", {
    page: "Diagnosticar Equipara para Reparación",
    devices,
  });
};

export { homeRepairs, diagnosticView };
