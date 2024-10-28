import Clients from "./Client.js";
import User from "./User.js";
import Device from "./Device.js";

//Relacion de Cleinte a usuario
Clients.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Clients, { foreignKey: "user_id" });

//Relacion de Equipo a cliente
Clients.hasMany(Device, { foreignKey: "client_id" });
Device.belongsTo(Clients, { foreignKey: "client_id" });

export { Clients, User, Device };
