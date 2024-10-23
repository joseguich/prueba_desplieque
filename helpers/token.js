import jwt from "jsonwebtoken";

const generatorJwt = (data) =>
  jwt.sign(
    { id: data.id, user_name: data.user_name, name: data.name },
    "PalabrasssssssClaveSecret",
    { expiresIn: "24h" }
  );

const generatorId = () =>
  Math.random().toString(32).substring(2) + Date.now().toString(32);

export { generatorJwt, generatorId };
