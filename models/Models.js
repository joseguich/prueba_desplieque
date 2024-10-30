import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Models = db.define("model", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Models;
