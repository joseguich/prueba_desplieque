import bcrypt from "bcrypt";

const users = [
  {
    user_name: "jguichardo",
    name: "José Guichardo",
    email: "jguichardo@correo.com",
    password: bcrypt.hashSync("123456", 10),
    token: null,
    confirm: true,
  },
  {
    user_name: "cmieses",
    name: "Colosa Mieses",
    email: "cmieses@correo.com",
    password: bcrypt.hashSync("123456", 10),
    token: null,
    confirm: true,
  },
];

export default users;
