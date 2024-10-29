import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Problemphone = db.define("Problemphone", {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Problemphone;
