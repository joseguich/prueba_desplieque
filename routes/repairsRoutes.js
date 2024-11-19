import express from "express";
import {
  homeRepairs,
  diagnosticView,
} from "../controllers/repairsControllers.js";
import authRoutes from "../middleware/authRoutes.js";

const router = express();

router.get("/home-repairs", authRoutes, homeRepairs);

router.get("/repairs/diagnostic/:id", authRoutes, diagnosticView);

export default router;
