import { DataTypes } from "sequelize";
import db from "../config/db.js";

const User = db.define("users", {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  token: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  confirm: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default User;
