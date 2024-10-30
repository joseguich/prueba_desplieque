import express from "express";

const routes = express.Router();

import { viewDevice, createDevice } from "../controllers/deviceControllers.js";

routes.get("/device/create", viewDevice);
routes.post("/device/create", createDevice);

export default routes;
