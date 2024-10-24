import express from "express";
import authRoutes from "../middleware/authRoutes.js";
import { viewClient, createClient } from "../controllers/clientControllers.js";

const routes = express();

routes.get("/client/create", authRoutes, viewClient);
routes.post("/client/create", authRoutes, createClient);

export default routes;
