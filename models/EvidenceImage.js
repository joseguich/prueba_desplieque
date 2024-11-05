import { DataTypes } from "sequelize";
import db from "../config/db.js";

const EvidenceImage = db.define("evidenceImage", {
  imagePath: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default EvidenceImage;
