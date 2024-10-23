import Clients from "./Client.js";
import User from "./User.js";

Clients.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Clients, { foreignKey: "user_id" });

export { Clients, User };
