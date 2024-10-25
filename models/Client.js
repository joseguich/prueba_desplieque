import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Clients = db.define("clients", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },

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
