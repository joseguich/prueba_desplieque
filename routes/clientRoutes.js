import express from "express";
import authRoutes from "../middleware/authRoutes.js";
import {
  viewClient,
  createClient,
  viewClientPanel,
  searchClient,
  viewClientEdit,
  editClient,
  deleteClient,
} from "../controllers/clientControllers.js";

const routes = express();

routes.get("/client/create", authRoutes, viewClient);
routes.post("/client/create", authRoutes, createClient);
routes.get("/client/panel", authRoutes, viewClientPanel);
routes.get("/client/search", searchClient);
routes.get("/client/edit/:id", authRoutes, viewClientEdit);
routes.post("/client/edit/:id", authRoutes, editClient);
routes.post("/client/delete/:id", deleteClient);

// Redireccionar a la página de inicio si no está autenticado
routes.get("/", (req, res) => {
  if (authRoutes) {
    res.redirect("/home-repairs");
  } else {
    res.redirect("/auth/login");
  }
});

export default routes;
