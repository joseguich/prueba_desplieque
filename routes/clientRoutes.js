import express from "express";
import { viewClient } from "../controllers/clientControllers.js";

const routes = express();

routes.get("/client/create", viewClient);

export default routes;
