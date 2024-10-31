import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Clients = db.define("clients", {
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(60),
    allowNull: true,
    unique: true,
  },
  phone: { type: DataTypes.STRING(20), allowNull: false },

  address: DataTypes.TEXT,
});

export default Clients;
