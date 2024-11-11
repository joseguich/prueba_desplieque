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
  receivedDeviceView,
  viewDeviceDetails,
} from "../controllers/deviceControllers.js";
import multerErrors from "../middleware/multerErrors.js";

routes.get("/device/create", authRoutes, viewDevice);
routes.post("/device/create", authRoutes, multerErrors, createDevice);

routes.get("/device/failures", authRoutes, viewFailures);
routes.post("/device/failures", authRoutes, createDeviceFailures);

routes.get("/device/model", authRoutes, viewModel);
routes.post("/device/model", authRoutes, createModel);

routes.get("/device/received", authRoutes, receivedDeviceView);

routes.get("/device/details/:id", authRoutes, viewDeviceDetails);

export default routes;
