import Clients from "./Client.js";
import User from "./User.js";
import Device from "./Device.js";
import Problemphone from "./Problemphone.js";
import CategoryFailure from "./CategoryFailure.js";
import Brand from "./Brand.js";
import Models from "./Models.js";

//Relacion de Cleinte a usuario
Clients.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Clients, { foreignKey: "user_id" });

//Relacion de Equipo a cliente
Clients.hasMany(Device, { foreignKey: "client_id" });
Device.belongsTo(Clients, { foreignKey: "client_id" });

//Relacion de equipo a marca
Device.belongsTo(Brand, { foreignKey: "brand_id" });
Device.belongsTo(Models, { foreignKey: "model_id" });

Device.belongsTo(Problemphone, { foreignKey: "problem_id" });

//Relacion de problema a categoria de la falla
Problemphone.belongsTo(CategoryFailure, {
  foreignKey: "category_id",
});
CategoryFailure.hasMany(Problemphone, {
  as: "problems",
  foreignKey: "category_id",
});

export { Clients, User, Device, Problemphone, CategoryFailure, Brand, Models };
