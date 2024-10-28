import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Device = db.define("devices", {
  brand: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  serial_number: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },

  issue_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  status: {
    type: DataTypes.ENUM(
      "Recibido",
      "En Reparación",
      "Listo para Entregar",
      "Despachado"
    ),
    defaultValue: "Recibido",
  },
});

export default Device;
