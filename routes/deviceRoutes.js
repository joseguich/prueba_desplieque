import express from "express";
import authRoutes from "../middleware/authRoutes.js";

const routes = express.Router();

import {
  viewDevice,
  createDevice,
  viewFailures,
  createDeviceFailures,
  viewModel,
  createModel,
} from "../controllers/deviceControllers.js";

routes.get("/device/create", authRoutes, viewDevice);
routes.post("/device/create", authRoutes, createDevice);

routes.get("/device/failures", authRoutes, viewFailures);
routes.post("/device/failures", authRoutes, createDeviceFailures);

routes.get("/device/model", authRoutes, viewModel);
routes.post("/device/model", authRoutes, createModel);

export default routes;
