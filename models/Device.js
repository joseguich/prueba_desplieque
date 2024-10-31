import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Device = db.define("devices", {
  serial_number: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
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
