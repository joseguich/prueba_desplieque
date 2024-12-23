import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Brand = db.define("brand", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Brand;
