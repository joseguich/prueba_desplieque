import jwt from "jsonwebtoken";

export const generatorJwt = (data) =>
  jwt.sign(
    { id: data.id, user_name: data.user_name, name: data.name },
    "PalabrasssssssClaveSecret",
    { expiresIn: "24h" }
  );
export default generatorJwt;
