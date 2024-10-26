import express from "express";
import authRoutes from "../middleware/authRoutes.js";
import {
  viewClient,
  createClient,
  viewClientPanel,
  viewClientEdit,
  editClient,
} from "../controllers/clientControllers.js";

const routes = express();

routes.get("/client/create", authRoutes, viewClient);
routes.post("/client/create", authRoutes, createClient);
routes.get("/client/panel", authRoutes, viewClientPanel);
routes.get("/client/edit/:id", authRoutes, viewClientEdit);
routes.post("/client/edit/:id", authRoutes, editClient);

export default routes;
