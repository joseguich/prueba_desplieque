import { DataTypes } from "sequelize";
import db from "../config/db.js";

const CategoryFailure = db.define("categoryfailure", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default CategoryFailure;
