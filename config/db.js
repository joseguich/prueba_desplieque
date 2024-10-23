import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

//Sequileze ORM
const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    timestamps: true,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default db;
