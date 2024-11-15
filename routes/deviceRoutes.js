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
  deviceEditView,
  deviceEdit,
} from "../controllers/deviceControllers.js";

import multerErrorsCreate from "../middleware/multerErrorsCreate.js";
import multerErrorsEdit from "../middleware/multerErrorsEdit.js";

routes.get("/device/create", authRoutes, viewDevice);
routes.post("/device/create", authRoutes, multerErrorsCreate, createDevice);

routes.get("/device/failures", authRoutes, viewFailures);
routes.post("/device/failures", authRoutes, createDeviceFailures);

routes.get("/device/model", authRoutes, viewModel);
routes.post("/device/model", authRoutes, createModel);

routes.get("/device/received", authRoutes, receivedDeviceView);

routes.get("/device/details/:id", authRoutes, viewDeviceDetails);
routes.get("/device/edit/:id", authRoutes, deviceEditView);
routes.post("/device/edit/:id", authRoutes, multerErrorsEdit, deviceEdit);

export default routes;
