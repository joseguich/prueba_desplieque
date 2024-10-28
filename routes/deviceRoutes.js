import express from "express";

const routes = express.Router();

import { viewDevice } from "../controllers/deviceControllers.js";

routes.get("/device/create", viewDevice);

export default routes;
